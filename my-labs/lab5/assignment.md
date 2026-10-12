# Lab5: Lập trình quản trị và nền tảng dịch vụ mạng

Nguồn: UET-LMS Portal, course 6560, assignment 86896. Available Sep 28 09:50–12:30 (2h40m).

## PHẦN 1 – VIẾT BASH SCRIPT KIỂM TRA MẠNG

**Bước 1.** Tạo thư mục làm việc:

```
mkdir -p ~/week4-lab
cd ~/week4-lab
```

**Bước 2.** Tạo file `network_check.sh`. Script phải thực hiện các yêu cầu sau:

- Có shebang dùng Bash.
- Nhận địa chỉ IP hoặc tên miền từ tham số thứ nhất.
- Nếu không có tham số, hiển thị hướng dẫn sử dụng và kết thúc với mã lỗi 1.
- Hiển thị thời gian, hostname và tên người dùng hiện tại.
- Hiển thị địa chỉ IP của máy.
- Hiển thị default gateway.
- Phân giải tên bằng `getent`.
- Ping mục tiêu hai lần (có thể ping google.com).
- Thông báo mục tiêu có kết nối được hay không.
- Kết thúc với mã 0 nếu ping thành công và mã 2 nếu ping thất bại.

Khung chương trình gợi ý:

```bash
#!/usr/bin/env bash

target="${1:-}"

if [[ -z "$target" ]]
then
  echo "Cách dùng: $0 <IP hoặc tên miền>"
  exit 1
fi

# Viết các lệnh kiểm tra tại đây
```

**Bước 3.** Cấp quyền và chạy thử:

```
chmod +x network_check.sh
./network_check.sh
echo $?

./network_check.sh example.com
echo $?
```

**Bước 4.** Lập lịch chạy script mỗi 5 phút:

```
realpath network_check.sh
crontab -e
```

Thêm dòng sau và thay đường dẫn cho phù hợp:

```
*/5 * * * * /home/USER/week4-lab/network_check.sh example.com >> /home/USER/week4-lab/network-check.log 2>&1
```

Kiểm tra lịch: `crontab -l`.

**Kết quả cần đạt:** script chạy được khi có tham số; script báo lỗi khi thiếu tham số; có lịch cron chạy script mỗi 5 phút.

**Ảnh cần chụp:** nội dung script bằng `cat -n network_check.sh`; kết quả chạy script không có tham số; kết quả chạy script với `example.com`; kết quả lệnh `crontab -l`.

## PHẦN 2 – KIỂM TRA VÀ CẤU HÌNH ĐỊA CHỈ IP

**Bước 1.** Kiểm tra trạng thái mạng hiện tại:

```
ip -brief link
ip -brief address
ip route
nmcli device status
nmcli connection show
```

**Bước 2.** Tạo một giao diện ảo có địa chỉ tĩnh:

```
sudo nmcli connection add type dummy \
  ifname lab0 \
  con-name lab-static \
  ipv4.method manual \
  ipv4.addresses 192.168.100.10/24 \
  ipv4.never-default yes
```

Kích hoạt connection: `sudo nmcli connection up lab-static`.

**Bước 3.** Kiểm tra kết quả:

```
ip -brief address show lab0
nmcli connection show lab-static
nmcli -f GENERAL,IP4 device show lab0
```

**Bước 4.** Thêm một địa chỉ tạm thời:

```
sudo ip address add 192.168.100.11/24 dev lab0
ip address show lab0
```

Xóa địa chỉ tạm thời:

```
sudo ip address del 192.168.100.11/24 dev lab0
ip address show lab0
```

**Câu hỏi nhận xét:**

- Địa chỉ nào được tạo bởi `nmcli`?
- Địa chỉ nào chỉ tồn tại tạm thời?
- Cấu hình bằng lệnh `ip` có còn sau khi khởi động lại máy không?
- Vì sao sử dụng `ipv4.never-default yes` cho giao diện `lab0`?

**Ảnh cần chụp:** trạng thái mạng trước khi cấu hình; giao diện `lab0` có hai địa chỉ IP; kết quả sau khi xóa địa chỉ `192.168.100.11`; thông tin connection `lab-static`.

## PHẦN 3 – KIỂM TRA ĐỊNH TUYẾN, DNS VÀ CỔNG DỊCH VỤ

**Bước 1.** Xem bảng định tuyến:

```
ip route
ip route get 8.8.8.8
```

**Bước 2.** Xác định default gateway:

```
ip route | awk '/default/ {print $3; exit}'
```

Có thể lưu gateway vào biến:

```
gateway=$(ip route | awk '/default/ {print $3; exit}')
echo "$gateway"
```

**Bước 3.** Kiểm tra kết nối theo thứ tự:

```
ping -c 4 127.0.0.1
ping -c 4 "$gateway"
ping -c 4 8.8.8.8
ping -c 4 example.com
```

**Bước 4.** Kiểm tra phân giải tên:

```
getent hosts example.com
```

Nếu máy đã cài dig: `dig example.com A`.

**Bước 5.** Kiểm tra đường đi của gói tin:

```
tracepath 8.8.8.8
```

Nếu không có `tracepath`, có thể dùng `traceroute 8.8.8.8`.

**Bước 6.** Kiểm tra các cổng đang lắng nghe: `sudo ss -lntup`.

Sinh viên viết nhận xét ngắn cho các trường hợp sau:

- Không ping được default gateway.
- Ping được 8.8.8.8 nhưng không truy cập được example.com.
- Ping được máy chủ nhưng không kết nối được cổng dịch vụ.
- Ping không phản hồi nhưng dịch vụ vẫn có thể truy cập.

**Ảnh cần chụp:** bảng định tuyến và kết quả `ip route get`; kết quả ping gateway, 8.8.8.8 và example.com; kết quả phân giải tên; danh sách các cổng đang lắng nghe; phần nhận xét nguyên nhân sự cố.

## PHẦN 4 – CẤU HÌNH VÀ KIỂM TRA SSH

**Bước 1.** Kiểm tra dịch vụ SSH:

```
sudo systemctl enable --now sshd
sudo systemctl status sshd --no-pager
```

Trên Ubuntu, nếu không có dịch vụ `sshd`, sử dụng:

```
sudo systemctl enable --now ssh
sudo systemctl status ssh --no-pager
```

**Bước 2.** Kiểm tra cổng SSH: `sudo ss -lntp | grep ':22'`.

**Bước 3.** Tạo cặp khóa SSH:

```
ssh-keygen -t ed25519 -C "MSSV"
```

Kiểm tra các file khóa: `ls -l ~/.ssh`. Không hiển thị hoặc chụp nội dung private key `id_ed25519`.

**Bước 4.** Sao chép public key:

Nếu chỉ có một máy ảo: `ssh-copy-id "$USER@localhost"`.

Nếu có hai máy ảo: `ssh-copy-id user@IP_MAY_CHU`.

**Bước 5.** Đăng nhập bằng SSH: `ssh "$USER@localhost"` hoặc `ssh user@IP_MAY_CHU`.

**Bước 6.** Chạy lệnh từ xa:

```
ssh "$USER@localhost" 'hostname; whoami; ip -brief address'
```

**Bước 7.** Kiểm tra thông tin máy chủ đã lưu: `ssh-keygen -F localhost`.

**Kết quả cần đạt:** dịch vụ SSH đang hoạt động; cổng TCP 22 đang lắng nghe; tạo được cặp khóa ED25519; đăng nhập SSH thành công; chạy được lệnh từ xa.

**Ảnh cần chụp:** trạng thái dịch vụ SSH; cổng 22 đang lắng nghe; danh sách file trong thư mục `~/.ssh`; phiên đăng nhập SSH thành công; kết quả chạy lệnh từ xa.

## Dọn dẹp môi trường

Sau khi hoàn thành và chụp đủ kết quả, xóa giao diện thực hành:

```
sudo nmcli connection delete lab-static
```

Kiểm tra: `nmcli connection show`, `ip -brief address`.

Nếu không muốn cron tiếp tục chạy, mở lại crontab và xóa dòng đã tạo: `crontab -e`.
