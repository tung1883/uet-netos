#!/usr/bin/env bash

target="${1:-}"

if [[ -z "$target" ]]
then
    echo "Cách dùng: $0 <IP hoặc tên miền>"
    exit 1
fi

echo "===== THÔNG TIN THỜI GIAN & NGƯỜI DÙNG ====="
echo "Thời gian    : $(date -Is)"
echo "Hostname     : $(hostname)"
echo "Người dùng   : $(whoami)"

echo
echo "===== ĐỊA CHỈ IP CỦA MÁY ====="
ip -brief address

echo
echo "===== DEFAULT GATEWAY ====="
gateway=$(ip route | awk '/default/ {print $3; exit}')
echo "Gateway      : ${gateway:-Không tìm thấy}"

echo
echo "===== PHÂN GIẢI TÊN (getent) ====="
getent hosts "$target"

echo
echo "===== PING MỤC TIÊU (2 lần) ====="
if ping -c 2 "$target"
then
    echo
    echo "Kết quả      : $target CÓ kết nối được."
    exit 0
else
    echo
    echo "Kết quả      : $target KHÔNG kết nối được."
    exit 2
fi
