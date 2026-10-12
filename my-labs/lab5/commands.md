# Lab 5 — Full Command Reference (English, self-contained)

Copy-paste each block into the shell in order. Nothing needs to be manually written — the script file is created via heredoc.

## PART 1 — Bash script for network checking

Create working dir and the script (heredoc writes the file, no manual paste needed):

```bash
mkdir -p ~/week4-lab
cd ~/week4-lab

cat > network_check.sh << 'EOF'
#!/usr/bin/env bash

target="${1:-}"

if [[ -z "$target" ]]
then
    echo "Usage: $0 <IP or domain name>"
    exit 1
fi

echo "===== TIME & USER INFO ====="
echo "Time     : $(date -Is)"
echo "Hostname : $(hostname)"
echo "User     : $(whoami)"

echo
echo "===== LOCAL IP ADDRESSES ====="
ip -brief address

echo
echo "===== DEFAULT GATEWAY ====="
gateway=$(ip route | awk '/default/ {print $3; exit}')
echo "Gateway  : ${gateway:-Not found}"

echo
echo "===== NAME RESOLUTION (getent) ====="
getent hosts "$target"

echo
echo "===== PING TARGET (2 times) ====="
if ping -c 2 "$target"
then
    echo
    echo "Result   : $target is REACHABLE."
    exit 0
else
    echo
    echo "Result   : $target is NOT reachable."
    exit 2
fi
EOF

chmod +x network_check.sh
```

Run tests:

```bash
./network_check.sh
echo "Exit code: $?"          # expected: 1

./network_check.sh example.com
echo "Exit code: $?"          # expected: 0 or 2

cat -n network_check.sh
```

**Step 4. Schedule it to run automatically every 5 minutes (cron).**

Cron is just a built-in scheduler — you give it a line saying "run this command every 5 minutes" and it does it forever in the background.

First, find the full path to your script (cron needs the full path, not just `./network_check.sh`):

```bash
realpath network_check.sh
```

This prints something like `/home/tung1883/week4-lab/network_check.sh` — copy that path.

Now open the cron editor:

```bash
crontab -e
```

(First time it may ask you to pick an editor — just type `1` and press Enter to pick nano, the simplest one.)

This opens a text file. Go to the bottom and add one line, using the path you copied above and your own username:

```
*/5 * * * * /home/YOUR_USERNAME/week4-lab/network_check.sh example.com >> /home/YOUR_USERNAME/week4-lab/network-check.log 2>&1
```

What this line means:
- `*/5 * * * *` → run every 5 minutes
- next part → the command to run (your script, with `example.com` as the argument)
- `>> ... 2>&1` → save all output into `network-check.log` instead of showing it anywhere

Save and exit:
- In nano: press `Ctrl+O`, then `Enter` to save, then `Ctrl+X` to exit.

Check your schedule got saved:

```bash
crontab -l
```

You should see the exact line you typed printed back.

## PART 2 — Check and configure IP address

Check current network state:

```bash
ip -brief link
ip -brief address
ip route
nmcli device status
nmcli connection show
```

Create a virtual dummy interface with a static address:

```bash
sudo nmcli connection add type dummy \
    ifname lab0 \
    con-name lab-static \
    ipv4.method manual \
    ipv4.addresses 192.168.100.10/24 \
    ipv4.never-default yes

sudo nmcli connection up lab-static
```

Verify:

```bash
ip -brief address show lab0
nmcli connection show lab-static
nmcli -f GENERAL,IP4 device show lab0
```

Add and then remove a temporary address:

```bash
sudo ip address add 192.168.100.11/24 dev lab0
ip address show lab0

sudo ip address del 192.168.100.11/24 dev lab0
ip address show lab0
```

Review questions (answer in your report):
- Which address was created by `nmcli`?
- Which address only existed temporarily?
- Does the config made with `ip` survive a reboot?
- Why use `ipv4.never-default yes` on interface `lab0`?

## PART 3 — Routing, DNS, and service ports

Routing table:

```bash
ip route
ip route get 8.8.8.8
```

Get default gateway into a variable:

```bash
gateway=$(ip route | awk '/default/ {print $3; exit}')
echo "$gateway"
```

Connectivity checks in order:

```bash
ping -c 4 127.0.0.1
ping -c 4 "$gateway"
ping -c 4 8.8.8.8
ping -c 4 example.com
```

Name resolution:

```bash
getent hosts example.com
dig example.com A          # only if dig is installed
```

Path trace:

```bash
tracepath 8.8.8.8          # fallback: traceroute 8.8.8.8
```

Listening ports:

```bash
sudo ss -lntup
```

Short analysis to write in your report, for each case:
- Cannot ping the default gateway.
- Can ping 8.8.8.8 but cannot reach example.com.
- Can ping the server but cannot connect to the service port.
- Ping gets no reply but the service is still reachable.

## PART 4 — Configure and test SSH

Think of this part as: turn on the SSH server, make a "key" instead of a password, then use it to log in.

**Step 1. Turn on the SSH service.**

Most servers use `sshd`, some Ubuntu setups use `ssh`. Try the first, if it says not found, use the second:

```bash
sudo systemctl enable --now sshd
sudo systemctl status sshd --no-pager
```

If that fails:

```bash
sudo systemctl enable --now ssh
sudo systemctl status ssh --no-pager
```

**Step 2. Check SSH is listening on port 22.**

```bash
sudo ss -lntp | grep ':22'
```

If you see a line with `:22` in it, it's working.

**Step 3. Create your SSH key pair.**

This makes two files: a private key (keep secret) and a public key (safe to share). Just press Enter on every prompt (empty passphrase is fine for this lab):

```bash
ssh-keygen -t ed25519 -C "MSSV"
```

Check the files were created:

```bash
ls -l ~/.ssh
```

You should see `id_ed25519` (private key) and `id_ed25519.pub` (public key).

Important: never screenshot or show the content of `id_ed25519` — only the file listing above.

**Step 4. Copy your public key to the server so it trusts you.**

If you only have one machine, copy it to yourself:

```bash
ssh-copy-id "$USER@localhost"
```

If you have a second VM as the server, replace `IP_SERVER` with its real IP:

```bash
ssh-copy-id user@IP_SERVER
```

**Step 5. Log in using SSH.**

One machine:

```bash
ssh "$USER@localhost"
```

Two machines:

```bash
ssh user@IP_SERVER
```

Type `exit` to leave the SSH session and come back to your normal shell.

**Step 6. Run a command remotely, without fully logging in.**

This logs in, runs three commands on the other end, then comes straight back:

```bash
ssh "$USER@localhost" 'hostname; whoami; ip -brief address'
```

Two machines:

```bash
ssh user@IP_SERVER 'hostname; whoami; ip -brief address'
```

**Step 7. Check the server's key got saved on your side.**

```bash
ssh-keygen -F localhost
```

(This lists the saved fingerprint, proving you already trust this host and won't be asked again.)

## Cleanup

Remove the practice interface and cron entry:

```bash
sudo nmcli connection delete lab-static
nmcli connection show
ip -brief address

crontab -l | grep -v 'network_check.sh' | crontab -
crontab -l
```
