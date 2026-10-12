# Lab4: Quản lý người dùng, tiến trình và dịch vụ

Nguồn: UET-LMS Portal, course 6560, assignment 86263. Available Sep 22 09:50–12:30 (2h40m).

## 1. Quy ước đặt tên

Lấy ba chữ số cuối của MSSV làm giá trị `XXX`. Ví dụ: MSSV là 21020191 thì `XXX = 191`.

Sử dụng các tên sau trong toàn bộ bài:

- Người dùng: `devXXX`, `testXXX`, `auditXXX`, `tempXXX`
- Nhóm: `grpdevXXX`, `grpauditXXX`
- Thư mục thực hành: `/srv/lab08_09_XXX`

Sinh viên phải thay `XXX` bằng ba chữ số cuối MSSV của mình.

## 2. Yêu cầu chung

- Sử dụng `sudo` khi thao tác yêu cầu quyền quản trị.
- Không chỉnh sửa trực tiếp `/etc/passwd`, `/etc/shadow`, `/etc/group` hoặc `/etc/gshadow`.
- Không sử dụng `chmod 777` để giải quyết lỗi phân quyền.
- Ở đầu mỗi phần thực hành, chạy lệnh nhận diện sau và chụp kèm kết quả:

```
echo "MSSV: <MSSV> | Ho ten: <HO_TEN> | May: $(hostname) | User: $(whoami) | Thoi gian: $(date -Is)"
```

## 1. Tạo người dùng và nhóm

Tạo hai nhóm: `grpdevXXX`, `grpauditXXX`.

Tạo bốn tài khoản: `devXXX`, `testXXX`, `auditXXX`, `tempXXX`. Các tài khoản phải có home directory và sử dụng `/bin/bash`.

Thiết lập thành viên:

| Người dùng | Nhóm chính | Nhóm bổ sung |
|---|---|---|
| devXXX | grpdevXXX | grpauditXXX |
| testXXX | grpdevXXX | Không |
| auditXXX | grpauditXXX | Không |

Kiểm tra kết quả bằng các lệnh phù hợp, trong đó bắt buộc có: `id`, `groups`, `getent passwd`, `getent group`.

Giải thích sự khác nhau giữa kết quả của `id` và `groups`.

## 2. Thay đổi thông tin tài khoản

Thực hiện với tài khoản `devXXX`:

- Tạo tệp `proof.txt` trong home directory của người dùng.
- Thay đổi trường mô tả thành: `Developer MSSV <MSSV>`.
- Chuyển home directory từ `/home/devXXX` thành `/home/devopsXXX`. Dữ liệu trong home cũ phải được chuyển sang home mới.
- Kiểm tra rằng `proof.txt` vẫn tồn tại và có đúng chủ sở hữu.
- Dùng `getent passwd devXXX` để kiểm tra thông tin mới.

Trả lời câu hỏi: Nếu chỉ thay đổi đường dẫn home mà không yêu cầu di chuyển dữ liệu thì điều gì xảy ra?

## 3. Khóa tài khoản và thời hạn mật khẩu

- Kiểm tra trạng thái mật khẩu của `testXXX`.
- Khóa tài khoản `testXXX`. Dùng lệnh kiểm tra để chứng minh tài khoản đã bị khóa.
- Mở khóa và chứng minh trạng thái đã thay đổi.
- Thiết lập chính sách mật khẩu cho `devXXX`: số ngày tối thiểu trước khi đổi mật khẩu = 1, số ngày tối đa = 30, cảnh báo trước khi hết hạn = 7 ngày.
- Hiển thị toàn bộ thông tin thời hạn mật khẩu của `devXXX`.

## 4. Xoá tài khoản

- Xác nhận `tempXXX` có home directory.
- Tạo một tệp bất kỳ trong home của tài khoản này.
- Xóa `tempXXX` và đồng thời xóa home directory.
- Dùng ít nhất hai cách để chứng minh: tài khoản không còn trong cơ sở dữ liệu người dùng; home directory đã bị xóa.

## 5. Chuẩn bị cây thư mục

Tạo cấu trúc:

```
/srv/lab08_09_XXX/
├── shared/
├── private/
└── dropbox/
```

Dùng `stat`, `ls -ld` hoặc công cụ tương đương để ghi nhận quyền và chủ sở hữu ban đầu.

## 6. Thư mục làm việc chung và SGID

Cấu hình `/srv/lab08_09_XXX/shared` sao cho: chủ sở hữu root, nhóm sở hữu `grpdevXXX`, owner và group có đầy đủ quyền, other không có quyền. Bật SGID để các đối tượng mới kế thừa nhóm của thư mục. Quyền kết quả phải tương đương `2770`.

Kiểm chứng: dùng `devXXX` tạo `dev-file.txt`; dùng `testXXX` tạo `test-file.txt`; hiển thị owner, group và permission của hai tệp; giải thích vì sao hai tệp kế thừa nhóm `grpdevXXX`.

## 7. Thư mục riêng tư

Cấu hình `/srv/lab08_09_XXX/private` sao cho: owner là `devXXX`; chỉ `devXXX` được đọc, ghi và truy cập; `testXXX` và `auditXXX` không được truy cập.

Dùng từng tài khoản để thử: liệt kê nội dung, tạo tệp, đọc một tệp có sẵn. Báo cáo phải có ít nhất một kết quả `Permission denied`.

## 8. Sticky bit

Cấu hình `/srv/lab08_09_XXX/dropbox` sao cho: owner root, group `grpdevXXX`, thành viên `grpdevXXX` có thể tạo tệp. Bật SGID và sticky bit. Other không có quyền. Quyền kết quả phải tương đương `3770`.

Kiểm chứng: `devXXX` tạo `dev-owned.txt`; `testXXX` tạo `test-owned.txt`; `testXXX` thử xóa `dev-owned.txt`; `devXXX` thử xóa tệp của chính mình.

## 9. ACL

Nếu hệ thống chưa có `setfacl`/`getfacl`, cài gói `acl`.

Cấu hình ACL cho thư mục `shared` sao cho: `auditXXX` có thể liệt kê thư mục và đọc tệp; `auditXXX` không thể tạo, sửa hoặc xóa tệp; các tệp được tạo mới trong `shared` phải kế thừa quyền đọc dành cho `auditXXX`.

Kiểm chứng: hiển thị access ACL và default ACL của `shared`; tạo một tệp mới sau khi thiết lập default ACL; dùng `auditXXX` đọc tệp mới; dùng `auditXXX` thử ghi nội dung hoặc tạo tệp; chụp kết quả thành công khi đọc và thất bại khi ghi.

## 10. Umask

Trong một shell của `devXXX`: đặt umask thành `027`; tạo một tệp mới và một thư mục mới; hiển thị quyền của hai đối tượng; so sánh kết quả thực tế với kết quả đã tính ở phần 7.
