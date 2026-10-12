# Lab8: Cấu hình mạng và SSH

Nguồn: UET-LMS Portal, course 6560, assignment 87911. Available Oct 6 09:50–12:30 (2h40m).

Cấu hình mạng bằng Netplan, kiểm tra kết nối, cài đặt SSH, xác thực bằng khóa công khai và truyền tệp bằng SFTP.

## Yêu cầu

Sử dụng hai máy Linux:

- Máy chủ: cấu hình địa chỉ IP tĩnh.
- Máy khách: dùng để kiểm tra SSH và SFTP.

## Nội dung thực hiện

### Cấu hình mạng bằng Netplan

- Đặt địa chỉ IP tĩnh cho máy chủ.
- Cấu hình default gateway và máy chủ DNS.
- Kiểm tra và áp dụng cấu hình.
- Hiển thị địa chỉ IP và bảng định tuyến sau khi cấu hình.

### Kiểm tra kết nối

- Kiểm tra trạng thái giao diện mạng.
- Kiểm tra kết nối tới default gateway.
- Kiểm tra kết nối giữa máy khách và máy chủ.
- Kiểm tra khả năng phân giải một tên miền.

### Cấu hình dịch vụ SSH

- Cài đặt OpenSSH Server trên máy chủ.
- Cấu hình dịch vụ tự khởi động cùng hệ thống.
- Kiểm tra trạng thái dịch vụ và cổng SSH đang lắng nghe.
- Đăng nhập từ máy khách vào máy chủ bằng SSH.

### Xác thực bằng khóa công khai

- Tạo cặp khóa SSH trên máy khách.
- Chuyển public key sang máy chủ.
- Đăng nhập lại và chứng minh có thể xác thực bằng khóa.

### Truyền tệp bằng SFTP

- Tạo một tệp văn bản trên máy khách.
- Kết nối tới máy chủ bằng SFTP.
- Tải tệp lên máy chủ.
- Tải một tệp từ máy chủ về máy khách.
- Kiểm tra nội dung và vị trí của các tệp sau khi truyền.
