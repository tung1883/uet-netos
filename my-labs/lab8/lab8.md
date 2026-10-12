# Lab 8
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

Lệnh nhận diện:
```
echo "MSSV: 21020556 | Ho ten: Nguyen Duc Tung | May: $(hostname) | User: $(whoami) | Thoi gian: $(date -Is)"
```

## 1. Cấu hình mạng bằng Netplan

### 1.1 Đặt IP tĩnh, gateway và DNS
!(1.PNG)

### 1.2 Kiểm tra và áp dụng cấu hình
!(2.PNG)

### 1.3 Địa chỉ IP và bảng định tuyến
!(3.PNG)

## 2. Kiểm tra kết nối

### 2.1 Trạng thái giao diện mạng
!(4.PNG)

### 2.2 Kết nối tới default gateway
!(5.PNG)

### 2.3 Kết nối giữa máy khách và máy chủ
!(6.PNG)

### 2.4 Phân giải tên miền
!(7.PNG)

## 3. Cấu hình dịch vụ SSH

### 3.1 Cài đặt OpenSSH Server
!(8.PNG)

### 3.2 Tự khởi động cùng hệ thống
!(9.PNG)

### 3.3 Trạng thái dịch vụ và cổng SSH
!(10.PNG)

### 3.4 Đăng nhập từ máy khách bằng SSH
!(11.PNG)

## 4. Xác thực bằng khóa công khai

### 4.1 Tạo cặp khóa trên máy khách
!(12.PNG)

### 4.2 Chuyển public key sang máy chủ
!(13.PNG)

### 4.3 Đăng nhập lại bằng khóa
!(14.PNG)

## 5. Truyền tệp bằng SFTP

### 5.1 Tạo tệp văn bản trên máy khách
!(15.PNG)

### 5.2 Kết nối tới máy chủ bằng SFTP
!(16.PNG)

### 5.3 Tải tệp lên máy chủ
!(17.PNG)

### 5.4 Tải tệp từ máy chủ về máy khách
!(18.PNG)

### 5.5 Kiểm tra nội dung và vị trí các tệp
!(19.PNG)
!(20.PNG)

---
Lệnh chi tiết từng bước: xem `commands.md`.
