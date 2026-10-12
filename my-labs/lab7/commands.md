# Lab 7
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

## 1. Tạo users.csv và user_batch.sh 
- Tạo user_batch.sh: https://pastebin.com/uqN46BRz
- Tạo users.csv:
```bash
sudo mkdir -p /opt/lab7
sudo tee /opt/lab7/users.csv > /dev/null <<'EOF'
# user,group
lab_an,lab_dev
lab_binh,lab_dev
lab_chi,lab_test
EOF

cat /opt/lab7/users.csv
```
!(0.PNG)

## 2. Chức năng của script

### 2.1 Tạo nhóm và tài khoản (create)
- Tạo nhóm + tài khoản chưa tồn tại, home + `/bin/bash`. Không tạo lại cái đã có.
- Chạy 2 lần để chứng minh lần 2 ghi `SKIP`.
```bash
sudo ./user_batch.sh create users.csv; echo "exit=$?"
sudo ./user_batch.sh create users.csv; echo "exit=$?"    # lần 2: SKIP, exit 0
getent passwd lab_an lab_binh lab_chi
getent group lab_dev lab_test
sudo tail -n 10 /var/log/user_batch.log
```

!(3.PNG)

### 2.2 Khóa và mở khóa (lock / unlock)
- Đặt mật khẩu thử nghiệm:
```bash
sudo passwd lab_an
sudo passwd lab_binh
sudo passwd lab_chi
sudo passwd -S lab_an
```
!(4.PNG)

- Khóa, kiểm tra trạng thái `L`; mở khóa, kiểm tra trạng thái `P`.
```bash
# Lock
sudo ./user_batch.sh lock users.csv; echo "exit=$?"
sudo passwd -S lab_an            # L
sudo grep lab_an /etc/shadow     # hash có tiền tố !

# Unlock
sudo ./user_batch.sh unlock users.csv; echo "exit=$?"
sudo passwd -S lab_an            # P
```

!(5.PNG)


## 3. Kiểm tra lỗi tham số và quyền
- Yêu cầu: chạy không sudo → exit 2; thiếu tham số → exit 1; thao tác sai → exit 1; file không đọc được → exit 3.
```bash
cd /opt/lab7
./user_batch.sh report users.csv; echo "exit=$?"              # exit 2 (không root)
sudo ./user_batch.sh report; echo "exit=$?"                   # exit 1 (thiếu tham số)
sudo ./user_batch.sh delete users.csv; echo "exit=$?"         # exit 1 (thao tác sai)
sudo ./user_batch.sh report khong_co.csv; echo "exit=$?"      # exit 3 (không đọc được file)
```

!(2.PNG)

## 4. Kiểm tra nhật ký
```bash
sudo cat /var/log/user_batch.log
```
Định dạng mỗi dòng: `Thời gian | Thao tác | Tài khoản | Kết quả | Thông báo`.

!(6.PNG)

## 5. Lập lịch bằng cron (report mỗi 5 phút)
```bash
sudo crontab -e
# thêm dòng
*/5 * * * * /opt/lab7/user_batch.sh report /opt/lab7/users.csv >> /var/log/user_report.log 2>&1

sudo crontab -l
```
!(8.PNG)


## 6. Systemd timer
- Tạo hai unit trực tiếp trên server trong `/etc/systemd/system/`, nạp lại, bật timer cùng hệ thống.
1. Unit lab-user-report.service
```bash
sudo tee /etc/systemd/system/lab-user-report.service > /dev/null <<'EOF'
[Unit]
Description=Lab7 user account report
After=network.target

[Service]
Type=oneshot
ExecStart=/opt/lab7/user_batch.sh report /opt/lab7/users.csv
StandardOutput=append:/var/log/user_report.log
StandardError=append:/var/log/user_report.log
EOF
```

2. Unit lab-user-report.timer
```
sudo tee /etc/systemd/system/lab-user-report.timer > /dev/null <<'EOF'
[Unit]
Description=Run lab7 user report every 5 minutes

[Timer]
OnBootSec=2min
OnUnitActiveSec=5min
Persistent=true
Unit=lab-user-report.service

[Install]
WantedBy=timers.target
EOF
```
!(9.PNG)

- Kiểm tra:
```
systemctl status lab-user-report.timer
systemctl list-timers
sudo systemctl start lab-user-report.service 
journalctl -u lab-user-report.service
```

!(10.PNG)
