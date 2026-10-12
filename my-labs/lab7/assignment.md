# Lab7: Tự động hoá và lập lịch tác vụ

Nguồn: UET-LMS Portal, course 6560, assignment 87821. Available Oct 5 09:50–12:30 (2h40m).

## Yêu cầu

Viết Bash script `user_batch.sh` để xử lý danh sách tài khoản từ file CSV.

Cách chạy:

```
sudo ./user_batch.sh <create|lock|unlock|report> <file_csv>
```

Ví dụ:

```
sudo ./user_batch.sh create users.csv
```

## File danh sách

Tạo file `users.csv` theo định dạng:

```
lab_an,lab_dev
lab_binh,lab_dev
lab_chi,lab_test
```

Cột thứ nhất là tên người dùng, cột thứ hai là nhóm chính. Tên người dùng và nhóm phải bắt đầu bằng `lab_`. Script phải bỏ qua dòng trống và dòng bắt đầu bằng `#`.

## Chức năng của script

| Thao tác | Ý nghĩa |
|---|---|
| create | Tạo nhóm và tài khoản chưa tồn tại |
| lock | Khóa các tài khoản trong danh sách |
| unlock | Mở khóa các tài khoản trong danh sách |
| report | Hiển thị trạng thái các tài khoản |

Yêu cầu:

- Tài khoản mới có thư mục home và sử dụng `/bin/bash`.
- Không tạo lại tài khoản hoặc nhóm đã tồn tại.
- Không xử lý root hoặc tài khoản hệ thống.
- Không có chức năng xóa tài khoản.
- Trước khi thử `lock` và `unlock`, sinh viên tự đặt mật khẩu cho các tài khoản thử nghiệm.

## Kiểm tra và xử lý lỗi

Script phải kiểm tra: người chạy có quyền root; có đủ hai tham số; thao tác được yêu cầu hợp lệ; file CSV tồn tại và có thể đọc; dữ liệu trên từng dòng đúng định dạng; tên tài khoản và nhóm có tiền tố `lab_`; kết quả của từng lệnh quản trị.

Quy định mã thoát:

| Mã | Ý nghĩa |
|---|---|
| 0 | Hoàn thành thành công |
| 1 | Sai tham số hoặc thao tác |
| 2 | Không có quyền root |
| 3 | Không đọc được file danh sách |
| 4 | Có ít nhất một dòng xử lý thất bại |

## Ghi nhật ký

Mỗi tài khoản được xử lý phải ghi một dòng vào `/var/log/user_batch.log`. Mỗi dòng nhật ký phải có: `Thời gian | Thao tác | Tài khoản | Kết quả | Thông báo`.

Ví dụ:

```
2026-10-05 09:30:00 | create | lab_an | SUCCESS | User created
```

## Lập lịch bằng cron

Tạo lịch chạy chế độ `report` mỗi 5 phút và ghi kết quả vào `/var/log/user_report.log`. Sinh viên phải kiểm tra lịch bằng `sudo crontab -l`.

## Systemd Timer

Tạo hai unit:

```
/etc/systemd/system/lab-user-report.service
/etc/systemd/system/lab-user-report.timer
```

Yêu cầu: service chạy script ở chế độ `report`; timer kích hoạt service mỗi 5 phút; timer được bật cùng hệ thống.

Kiểm tra bằng:

```
systemctl status lab-user-report.timer
systemctl list-timers
journalctl -u lab-user-report.service
```
