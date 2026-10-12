# Lab 3
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

## 1. Nhận diện đĩa và tạo hệ thống tệp ext4
- Dùng `lsblk -f` và `blkid` để xác định đĩa hệ điều hành và các đĩa phụ:
!(1.PNG)

- Trên đĩa phụ thứ nhất:
  1. Tạo một phân vùng GPT
  2. Định dạng phân vùng bằng ext4 và đặt nhãn `DATA_LAB`
!(2.PNG)

## 2. Gắn ổ
- Tạo thư mục `/data/lab` và gắn phân vùng ext4 vào thư mục này.
- Sao lưu `/etc/fstab`, sau đó thêm cấu hình gắn kết bằng UUID.
- Chạy `mount -a` và kiểm tra bằng `findmnt` hoặc `df -hT`.
!(3.PNG)

## 3. Tạo và mở rộng LVM
- Dùng đĩa phụ thứ hai để tạo PV.
- Tạo VG tên `vg_lab`.
- Tạo LV tên `lv_students`, dung lượng 2 GB.
- Định dạng LV bằng ext4 và gắn tại `/srv/students`.
- Mở rộng LV thêm 1 GB bằng `lvextend -r`.
!(4.PNG)


## 4. Thiết lập dung lượng
- Tạo người dùng svlab
!(5.PNG)

- Bật hạn ngạch người dùng trên `/srv/students`.
- Đặt soft limit 100 MB và hard limit 120 MB cho người dùng `svlab`.
- Kiểm tra bằng `quota` hoặc `repquota`.
- Dùng `df -hT` và `du -h` để kiểm tra dung lượng.
!(6.PNG)
