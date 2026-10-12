# Lab 4 
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

## 1. Tạo người dùng và nhóm
- Tạo nhóm `grpdev556`, `grpaudit556`.
!(1.PNG)

- Tạo user `dev556`, `test556`, `audit556`, `temp556` (có home, dùng `/bin/bash`).
- Thành viên: `dev556` (chính grpdev556, phụ grpaudit556); `test556` (chính grpdev556); `audit556` (chính grpaudit556).
- Kiểm tra bằng `id`, `groups`, `getent passwd`, `getent group`.
!(2.PNG)

- Giải thích khác nhau giữa `id` và `groups`:
+ id sẽ show uid, gid + tên group của user
+ groups chỉ show tên group

## 2. Thay đổi thông tin tài khoản
- Tạo `proof.txt` trong home `dev556`.
- Đổi GECOS thành `Developer MSSV 21020556`.
- Đổi home từ `/home/dev556` sang `/home/devops556`, di chuyển dữ liệu.
- Kiểm tra `proof.txt` còn tồn tại, đúng chủ sở hữu; `getent passwd dev556`.
!(3.PNG)

- Trả lời: chỉ đổi đường dẫn home mà không di chuyển dữ liệu thì sao?
+ chỉ đổi đường dẫn (bỏ option -m trong usermod) -> chỉ thay đổi HOME path trong /etc/passwd
+ không tạo thư mục mới (nếu đường dẫn mới chưa tồn tại) + không copy files

## 3. Khóa tài khoản và thời hạn mật khẩu
- Kiểm tra trạng thái mật khẩu `test556`.
!(4.PNG)

- Khóa tài khoản, chứng minh đã khóa.
!(5.PNG)

- Mở khóa, chứng minh đã đổi trạng thái.
!(6.PNG)

- Thiết lập chính sách mật khẩu `dev556`: min 1 ngày, max 30 ngày, cảnh báo 7 ngày trước hạn.
- Hiển thị toàn bộ thông tin thời hạn mật khẩu `dev556`.
!(7.PNG)

## 4. Xoá tài khoản
- Xác nhận `temp556` có home directory, tạo tệp bất kỳ trong home.
!(8.PNG)
- Xóa `temp556` cùng home directory.
- Chứng minh bằng ít nhất 2 cách: tài khoản không còn trong DB user, home directory đã xóa.
+ để kiểm tra user không còn: getent passwd temp556 hoặc id temp556
+ để kiểm tra home dir đã xóa: ls -ld /home/temp556 2>&1
!(9.PNG)

<!-- page-break -->
## 5. Chuẩn bị cây thư mục
- Tạo cấu trúc:
```
/srv/lab08_09_556/
├── shared/
├── private/
└── dropbox/
```
- Dùng `stat`, `ls -ld` ghi nhận quyền và chủ sở hữu ban đầu.
!(10.PNG)


## 6. Thư mục làm việc chung và SGID
- Cấu hình `shared`: owner root, group `grpdev556`, owner/group đủ quyền, other không quyền, bật SGID (2770).
!(11.PNG)

- `dev556` tạo `dev-file.txt`, `test556` tạo `test-file.txt`.
- Hiển thị owner, group, permission hai tệp.
!(12.PNG)

- Giải thích vì sao hai tệp kế thừa nhóm `grpdev556`:
+ SGID → file/thư mục con lấy group owner = group của thư mục cha (`grpdev556`)

## 7. Thư mục riêng tư
- Cấu hình `private`: owner `dev556`, chỉ `dev556` đọc/ghi/truy cập.
- `test556`, `audit556` không truy cập được.
!(13.PNG)

- Thử: liệt kê nội dung, tạo tệp, đọc tệp có sẵn bằng từng tài khoản.
- Báo cáo có ít nhất một `Permission denied`.
!(14.PNG)

## 8. Sticky bit
- Cấu hình `dropbox`: owner root, group `grpdev556`, group tạo được tệp, bật SGID + sticky bit (3770), other không quyền.
!(15.PNG)

- `dev556` tạo `dev-owned.txt`, `test556` tạo `test-owned.txt`.
- `test556` thử xóa `dev-owned.txt`; `dev556` thử xóa tệp của chính mình.
!(16.PNG)

## 9. ACL
- Cài `acl` nếu chưa có (`setfacl`, `getfacl`).
- Cấu hình ACL `shared`: `audit556` đọc/liệt kê được, không tạo/sửa/xóa được; tệp mới kế thừa quyền đọc cho `audit556` (default ACL).
- Hiển thị access ACL và default ACL của `shared`.
!(17.PNG)

- Tạo tệp mới sau khi set default ACL; `audit556` đọc thành công, ghi/tạo thất bại.
!(18.PNG)

## 10. Umask
- Trong shell `dev556`: đặt `umask 027`.
- Tạo tệp mới và thư mục mới, hiển thị quyền.
!(19.PNG)

- So sánh với kết quả tính ở câu 7:
+ newfile.uet: `640` (rw-r-----), uet-dir: `750` (rwxr-x---) — khớp base 666/777 trừ umask 027
