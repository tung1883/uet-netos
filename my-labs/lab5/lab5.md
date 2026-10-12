# Lab 5

## Họ và tên: Nguyễn Đức Tùng - MSSV: 21020556

PHẦN 1 – VIẾT BASH SCRIPT KIỂM TRA MẠNG

Bước 1. Tạo thư mục làm việc:

mkdir -p ~/week4-lab
cd ~/week4-lab

Bước 2. Tạo file network_check.sh.
!(1.PNG)
Bước 3. Cấp quyền và chạy thử:
- `./network_check.sh`
- `echo $?`

!(2.PNG)

- `./network_check.sh example.com`
- `echo $?`

!(3.PNG)

Bước 4. Lập lịch chạy script mỗi 5 phút:

realpath network_check.sh
crontab -e

Thêm dòng sau và thay đường dẫn cho phù hợp:

*/5 * * * * /home/USER/week4-lab/network_check.sh example.com >> /home/USER/week4-lab/network-check.log 2>&1

Kiểm tra lịch:

crontab -l

!(4.PNG)

PHẦN 2 – KIỂM TRA VÀ CẤU HÌNH ĐỊA CHỈ IP

Bước 1. Kiểm tra trạng thái mạng hiện tại:
!(5.PNG)
!(6.PNG)
!(7.PNG)

Bước 2. Tạo một giao diện ảo có địa chỉ tĩnh:

sudo nmcli connection add type dummy \
    ifname lab0 \
    con-name lab-static \
    ipv4.method manual \
    ipv4.addresses 192.168.100.10/24 \
    ipv4.never-default yes

Kích hoạt connection:

sudo nmcli connection up lab-static

Bước 3. Kiểm tra kết quả:
!(8.PNG)
!(9.PNG)

Bước 4. Thêm một địa chỉ tạm thời:
!(10.PNG)

Câu hỏi nhận xét:
1. Địa chỉ nào được tạo bởi nmcli? 
- 192.168.100.10/24, tạo = nmcli connection add 
2. Địa chỉ nào chỉ tồn tại tạm thời?
- 192.168.100.11/24, thêm bằng lệnh ip address add
3. Cấu hình bằng lệnh ip có còn sau khi khởi động lại máy không?
- Không, vì ip address add/del không ghi vào file config
4. Vì sao sử dụng ipv4.never-default yes cho giao diện lab0?
- Để lab0 (interface ảo, không có kết nối Internet thật) không được chọn làm default route

PHẦN 3 – KIỂM TRA ĐỊNH TUYẾN, DNS VÀ CỔNG DỊCH VỤ

Bước 1. Xem bảng định tuyến:
!(11.PNG)

Bước 2. Xác định default gateway:
!(12.PNG)

Bước 3. Kiểm tra kết nối theo thứ tự:
!(13.PNG)

Bước 4. Kiểm tra phân giải tên:
!(14.PNG)

Bước 5. Kiểm tra đường đi của gói tin:
!(15.PNG)

Bước 6. Kiểm tra các cổng đang lắng nghe:
!(16.PNG)

Sinh viên viết nhận xét ngắn cho các trường hợp sau:
1. Không ping được default gateway.
- lỗi ở mạng LAN: sai IP/subnet, cáp/link hoặc gateway lỗi
2. Ping được 8.8.8.8 nhưng không truy cập được example.com.
- vẫn có internet nhưng DNS lỗi (có thể là DNS server hoặc resolv.conf bị sai)
3. Ping được máy chủ nhưng không kết nối được cổng dịch vụ.
- dịch vụ chưa chạy hoặc bị firewall chặn
4. Ping không phản hồi nhưng dịch vụ vẫn có thể truy cập.
- ICMP bị chặn bởi firewall, trong khi TCP tới cổng dịch vụ vẫn được cho phép

PHẦN 4 – CẤU HÌNH VÀ KIỂM TRA SSH

Bước 1. Kiểm tra dịch vụ SSH:
!(17.PNG)

Bước 2. Kiểm tra cổng SSH:
!(18.PNG)

Bước 3. Tạo cặp khóa SSH:
!(19.PNG)

Bước 4. Sao chép public key:
Chụp màn hình kết quả: em gộp chung với bước 5, thầy xem ảnh ở dưới ạ

Bước 5. Đăng nhập bằng SSH:
!(21.PNG)

Bước 6. Chạy lệnh từ xa:
!(22.PNG)

Bước 7. Kiểm tra thông tin máy chủ đã lưu:
!(23.PNG)
