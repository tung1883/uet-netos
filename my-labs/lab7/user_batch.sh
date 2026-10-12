#!/usr/bin/env bash
# Usage: sudo ./user_batch.sh <create|lock|unlock|report> <file_csv>

set -u

LOG_FILE=/var/log/user_batch.log
PREFIX=lab_
FAILED=0

usage() {
    echo "Usage: sudo $0 <create|lock|unlock|report> <file_csv>" >&2
    exit 1
}

log_result() {
    local action=$1 user=$2 result=$3 msg=$4 line
    line="$(date '+%Y-%m-%d %H:%M:%S') | $action | $user | $result | $msg"
    echo "$line"
    echo "$line" >> "$LOG_FILE" 2>/dev/null || echo "WARN: cannot write $LOG_FILE" >&2
    if [[ $result == FAIL ]]; then
        FAILED=$((FAILED + 1))
    fi
    return 0
}

valid_name() {
    [[ $1 =~ ^lab_[a-z0-9_-]{1,28}$ ]]
}

is_managed_user() {
    local uid
    uid=$(id -u "$1" 2>/dev/null) || return 1
    [[ $uid -ge 1000 ]]
}

do_create() {
    local user=$1 group=$2 msg="" out
    if ! getent group "$group" >/dev/null; then
        out=$(groupadd "$group" 2>&1) || { log_result create "$user" FAIL "groupadd $group: $out"; return; }
        msg="Group created; "
    fi
    if id "$user" >/dev/null 2>&1; then
        log_result create "$user" SKIP "${msg}User already exists"
        return
    fi
    out=$(useradd -m -s /bin/bash -g "$group" "$user" 2>&1) || { log_result create "$user" FAIL "useradd: $out"; return; }
    log_result create "$user" SUCCESS "${msg}User created"
}

do_lock_state() {
    local action=$1 user=$2 flag msg out
    case $action in
        lock)   flag=-L; msg="Account locked" ;;
        unlock) flag=-U; msg="Account unlocked" ;;
    esac
    if ! is_managed_user "$user"; then
        log_result "$action" "$user" FAIL "User not found or system account"
        return
    fi
    out=$(usermod "$flag" "$user" 2>&1) || { log_result "$action" "$user" FAIL "usermod: $out"; return; }
    log_result "$action" "$user" SUCCESS "$msg"
}

do_report() {
    local user=$1 st msg
    if ! is_managed_user "$user"; then
        log_result report "$user" FAIL "User not found or system account"
        return
    fi
    st=$(passwd -S "$user" 2>/dev/null | awk '{print $2}')
    case $st in
        P)  msg="Status P: password set, usable" ;;
        L)  msg="Status L: locked" ;;
        NP) msg="Status NP: no password" ;;
        *)  msg="Status ${st:-unknown}" ;;
    esac
    log_result report "$user" SUCCESS "$msg"
}

[[ $EUID -eq 0 ]] || { echo "Error: must run as root (use sudo)" >&2; exit 2; }
[[ $# -eq 2 ]] || usage

action=$1
csv=$2

case $action in
    create|lock|unlock|report) ;;
    *) echo "Error: invalid action '$action'" >&2; usage ;;
esac

if [[ ! -f $csv || ! -r $csv ]]; then
    echo "Error: cannot read file '$csv'" >&2
    exit 3
fi

lineno=0
while IFS= read -r line || [[ -n $line ]]; do
    lineno=$((lineno + 1))
    line=${line%$'\r'}
    [[ $line =~ ^[[:space:]]*$ || $line =~ ^[[:space:]]*# ]] && continue

    IFS=, read -r user group extra <<< "$line"
    user=${user//[[:space:]]/}
    group=${group//[[:space:]]/}

    if [[ -z $user || -z $group || -n ${extra//[[:space:]]/} ]]; then
        log_result "$action" "line$lineno" FAIL "Invalid format, expected: user,group"
        continue
    fi
    if ! valid_name "$user"; then
        log_result "$action" "$user" FAIL "Invalid user name (prefix $PREFIX, [a-z0-9_-], max 32 chars)"
        continue
    fi
    if ! valid_name "$group"; then
        log_result "$action" "$user" FAIL "Invalid group name '$group' (prefix $PREFIX, [a-z0-9_-], max 32 chars)"
        continue
    fi

    case $action in
        create)       do_create "$user" "$group" ;;
        lock|unlock)  do_lock_state "$action" "$user" ;;
        report)       do_report "$user" ;;
    esac
done < "$csv"

echo "Done. Failed rows: $FAILED"
if [[ $FAILED -eq 0 ]]; then
    exit 0
fi
exit 4
