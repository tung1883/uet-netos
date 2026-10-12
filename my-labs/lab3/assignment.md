# Lab3: Quản lý đĩa và hệ thống tệp

Nguồn: UET-LMS Portal, course 6560, assignment 86094. Available Sep 21 09:50–12:30 (2h40m).

List các câu lệnh cần sử dụng:

- Nhận diện đĩa: `lsblk -f`, `blkid`
- Phân vùng và ext4: `fdisk` hoặc `parted`, `mkfs.ext4`
- Gắn ổ: `mount`, `umount`
- LVM: `lvextend -r`
- Check dung lượng: `df -hT`, `du -h`

## YÊU CẦU THỰC HIỆN

### Nhận diện đĩa và tạo hệ thống tệp ext4

- Dùng `lsblk -f` và `blkid` để xác định đĩa hệ điều hành và các đĩa phụ.
- Trên đĩa phụ thứ nhất, tạo một phân vùng GPT.
- Định dạng phân vùng bằng ext4 và đặt nhãn `DATA_LAB`.
- Ghi lại UUID của hệ thống tệp vừa tạo.

### Gắn ổ

- Tạo thư mục `/data/lab` và gắn phân vùng ext4 vào thư mục này.
- Sao lưu `/etc/fstab`, sau đó thêm cấu hình gắn kết bằng UUID.
- Chạy `mount -a` và kiểm tra bằng `findmnt` hoặc `df -hT`.

### Tạo và mở rộng LVM

- Dùng đĩa phụ thứ hai để tạo PV.
- Tạo VG tên `vg_lab`.
- Tạo LV tên `lv_students`, dung lượng 2 GB.
- Định dạng LV bằng ext4 và gắn tại `/srv/students`.
- Mở rộng LV thêm 1 GB bằng `lvextend -r`.

### Thiết lập dung lượng

- Bật hạn ngạch người dùng trên `/srv/students`.
- Đặt soft limit 100 MB và hard limit 120 MB cho người dùng `svlab`.
- Kiểm tra bằng `quota` hoặc `repquota`.
- Dùng `df -hT` và `du -h` để kiểm tra dung lượng.

**Yêu cầu nộp:** Một file PDF gồm các ảnh chụp màn hình được yêu cầu trong bốn phần trên.
