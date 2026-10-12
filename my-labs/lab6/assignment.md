# Lab6: Lập trình Bash cơ bản

Nguồn: UET-LMS Portal, course 6560, assignment 87158. Available Sep 29 09:50–12:30 (2h40m).

## Yêu cầu

Viết Bash script có tên `file_manager.sh` để thống kê các tệp trong một thư mục.

Cách chạy:

```
./file_manager.sh <thư_mục> <dung_lượng_KB>
```

Ví dụ:

```
./file_manager.sh ~/data 200
```

## Tham số và kiểm tra dữ liệu

Script phải:

- Nhận đường dẫn thư mục từ tham số thứ nhất.
- Nhận ngưỡng dung lượng KB từ tham số thứ hai.
- Báo lỗi nếu thiếu tham số.
- Báo lỗi nếu thư mục không tồn tại.
- Báo lỗi nếu ngưỡng dung lượng không phải số nguyên dương.
- Trả về mã thoát phù hợp cho từng trường hợp.

## Menu chương trình

Sử dụng `while` và `case` để xây dựng menu:

```
1. Đếm số tệp
2. Liệt kê tên và dung lượng các tệp
3. Tìm tệp vượt quá ngưỡng dung lượng
4. Hiển thị thông tin tổng hợp
0. Thoát
```

Nếu người dùng nhập lựa chọn không hợp lệ, chương trình phải thông báo lỗi và hiển thị lại menu.

## Vòng lặp và xử lý tệp

Sử dụng vòng lặp để xử lý các tệp trong thư mục. Chương trình phải:

- Chỉ xử lý tệp thông thường.
- Không tính thư mục con.
- Hiển thị dung lượng từng tệp theo KB.
- Đếm tổng số tệp.
- Tính tổng dung lượng.
- Liệt kê các tệp lớn hơn ngưỡng đã nhập.

## Hàm

Chương trình phải có ít nhất các hàm sau: `show_menu`, `count_files`, `list_files`, `find_large_files`, `show_summary`.

## Kiểm tra script

Kiểm tra cú pháp:

```
bash -n file_manager.sh
```

Theo dõi quá trình thực thi:

```
bash -x file_manager.sh <thư_mục> <dung_lượng_KB>
```

Sinh viên phải chạy thử:

- Thiếu tham số.
- Thư mục không tồn tại.
- Ngưỡng dung lượng không hợp lệ.
- Thư mục hợp lệ.
- Từng lựa chọn trong menu.
- Một lựa chọn không hợp lệ.
