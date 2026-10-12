# Lab 7
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

Lệnh nhận diện:
```
echo "MSSV: 21020556 | Ho ten: Nguyen Duc Tung | May: $(hostname) | User: $(whoami) | Thoi gian: $(date -Is)"
```

## 0. Tạo file users.csv và user_batch.sh
- Tạo `/opt/lab7/users.csv` trực tiếp trên Ubuntu (lệnh trong `commands.md`, mục 0).
!(0.PNG)

- Tạo `/opt/lab7/user_batch.sh`: https://pastebin.com/uqN46BRz

## 1. Chức năng của hệ thống

### 1.1 Create / nhật ký
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

- Nội dung `/var/log/user_batch.log`.
!(4.PNG)

### 1.2 Lock / unlock
- Đặt mật khẩu thử nghiệm:
```bash
sudo passwd lab_an
sudo passwd lab_binh
sudo passwd lab_chi
sudo passwd -S lab_an
```
!(4-5.PNG)

- Khóa, chứng minh trạng thái `L`; mở khóa, trạng thái `P`.
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

### 1.3 Report
!(6.PNG)

## 2. Kiểm tra lỗi (exit code)
./user_batch.sh report users.csv; echo "exit=$?"              # exit 2 (không root)
sudo ./user_batch.sh report; echo "exit=$?"                   # exit 1 (thiếu tham số)
sudo ./user_batch.sh delete users.csv; echo "exit=$?"         # exit 1 (thao tác sai)
sudo ./user_batch.sh report khong_co.csv; echo "exit=$?"      # exit 3 (không đọc được file)
!(2.PNG)

## 3. Cron (mỗi 5 phút)
- `sudo crontab -l`
!(7.PNG)

## 4. Systemd timer
- `systemctl status lab-user-report.timer`, `systemctl list-timers`, `journalctl -u lab-user-report.service`
!(8.PNG)
!(9.PNG)
!(10.PNG)

---
Lệnh chi tiết từng bước: xem `commands.md`.
