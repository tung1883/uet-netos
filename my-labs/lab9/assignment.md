# Lab9: Triển khai DNS và DHCP

Nguồn: UET-LMS Portal, course 6560, assignment 88401. Available Oct 12 09:50–12:30 (2h40m).

## Mục tiêu

Cấu hình máy chủ DNS và DHCP, sau đó kiểm tra khả năng phân giải tên và cấp phát địa chỉ IP cho máy khách.

## Mô hình thực hành

- Máy chủ DNS/DHCP: `192.168.10.10/24` (hoặc có thể cấu hình dải mạng khác tuỳ ý sinh viên)
- Default gateway: `192.168.10.1`
- Tên miền thực hành: `lab.local`
- Máy khách: nhận cấu hình mạng bằng DHCP
- Sử dụng mạng nội bộ không có DHCP khác đang hoạt động.

## Nội dung thực hiện

### Cấu hình DNS

- Cài đặt và khởi động dịch vụ DNS.
- Tạo vùng phân giải thuận cho tên miền `lab.local`.
- Khai báo ít nhất hai bản ghi A:
  - `dns.lab.local` → `192.168.10.10`
  - `web.lab.local` → `192.168.10.20`
- Tạo vùng phân giải ngược cho mạng `192.168.10.0/24`.
- Tạo các bản ghi PTR tương ứng.
- Kiểm tra cú pháp các tệp cấu hình trước khi khởi động lại dịch vụ.

### Kiểm tra DNS

Từ máy khách, kiểm tra:

- Phân giải `dns.lab.local` thành địa chỉ IP.
- Phân giải `web.lab.local` thành địa chỉ IP.
- Phân giải ngược `192.168.10.10` thành tên miền.
- Trạng thái hoạt động và nhật ký của dịch vụ DNS.

### Cấu hình DHCP

Thiết lập DHCP với các thông số:

- Dải cấp phát: `192.168.10.100–192.168.10.150`
- Subnet mask: `255.255.255.0`
- Default gateway: `192.168.10.1`
- DNS server: `192.168.10.10`
- Tên miền: `lab.local`
- Thời gian thuê địa chỉ phù hợp với môi trường thực hành.

### Kiểm tra DHCP

Trên máy khách:

- Giải phóng địa chỉ IP hiện tại và yêu cầu cấp lại.
- Kiểm tra địa chỉ IP, gateway và DNS nhận được.
- Xác định thời gian thuê địa chỉ.
- Kiểm tra máy khách truy vấn được các bản ghi DNS đã tạo.
- Kiểm tra thông tin cấp phát và nhật ký trên máy chủ DHCP.
