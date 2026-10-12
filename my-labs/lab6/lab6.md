# Lab 6: VIẾT BASH SCRIPT THỐNG KÊ TỆP
## Họ và tên: Nguyễn Đức Tùng - MSSV: 21020556

Link script: https://pastebin.com/eL9x4s47

## Kiểm tra cú pháp: bash -n file_manager.sh
!(1.PNG)

## Chạy thử các trường hợp lỗi:

1. Thiếu tham số: ./file_manager.sh
2. Thư mục không tồn tại: ./file_manager.sh not_existing_folder 200
3. Ngưỡng dung lượng không hợp lệ: ./file_manager.sh data abc

!(2.PNG)

## Chạy với thư mục hợp lệ: ./file_manager.sh data 200
1. Đếm số tệp:
!(3.PNG)

2. Liệt kê tên và dung lượng các tệp:
!(4.PNG)

3. Tìm tệp vượt quá ngưỡng dung lượng:
!(5.PNG)

4. Hiển thị thông tin tổng hợp:
!(6.PNG)

5. Thoát:
!(7.PNG)

6. Nhập lựa chọn không hợp lệ (ví dụ 9):
!(8.PNG)

7. Theo dõi quá trình thực thi: bash -x file_manager.sh data 200
!(9.PNG)
