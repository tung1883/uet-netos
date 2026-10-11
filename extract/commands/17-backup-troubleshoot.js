const WEEKS = require('../weeks');
module.exports = {
  category: 'backup-troubleshoot',
  week: WEEKS.W10_TH17,
  commands: [
    {
      name: 'tar -czvf (backup)',
      description: 'đóng gói và nén dữ liệu cần sao lưu thành một tệp archive duy nhất',
      flags: [
        { flag: '--exclude="<mẫu>"', meaning: 'loại trừ các tệp/thư mục không cần sao lưu (vd: cache, log tạm) khỏi archive' },
      ],
      scenarios: [
        { task: 'Sao lưu thư mục cấu hình /etc thành tệp etc-backup.tar.gz', accepted: ['sudo tar -czvf etc-backup.tar.gz /etc', 'sudo tar czvf etc-backup.tar.gz /etc'] },
        { task: 'Sao lưu thư mục /var/www thành tệp đặt tên theo ngày www-backup.tar.gz, loại trừ thư mục cache', accepted: ['sudo tar -czvf www-backup.tar.gz --exclude="cache" /var/www', 'sudo tar czvf www-backup.tar.gz --exclude=cache /var/www'] },
      ],
    },
    {
      name: 'rsync (backup)',
      description: 'đồng bộ sao lưu dữ liệu, chỉ truyền phần thay đổi giúp sao lưu tăng dần (incremental) nhanh hơn tar',
      flags: [
        { flag: '--delete', meaning: 'xóa ở bản backup các tệp không còn tồn tại ở nguồn, giữ bản backup khớp chính xác với nguồn' },
        { flag: '--backup --backup-dir=<dir>', meaning: 'khi ghi đè hoặc xóa tệp, lưu bản cũ vào một thư mục riêng thay vì mất hẳn' },
      ],
      scenarios: [
        { task: 'Đồng bộ sao lưu thư mục /data sang ổ đĩa gắn ngoài /mnt/backup', accepted: ['rsync -av /data/ /mnt/backup/'] },
        { task: 'Đồng bộ sao lưu /data sang /mnt/backup, xóa ở backup các tệp không còn ở nguồn', accepted: ['rsync -av --delete /data/ /mnt/backup/'] },
      ],
    },
    {
      name: 'crontab (backup schedule)',
      description: 'lập lịch chạy script sao lưu tự động định kỳ',
      flags: [],
      scenarios: [
        { task: 'Lập lịch chạy script /opt/backup.sh lúc 1 giờ sáng mỗi ngày', accepted: ['0 1 * * * /opt/backup.sh'] },
        { task: 'Lập lịch chạy script sao lưu /opt/backup.sh lúc 23:30 tối thứ Bảy hàng tuần', accepted: ['30 23 * * 6 /opt/backup.sh'] },
      ],
    },
    {
      name: 'tar -xzvf (restore)',
      description: 'khôi phục dữ liệu bằng cách giải nén tệp sao lưu trở lại vị trí ban đầu',
      flags: [],
      scenarios: [
        { task: 'Khôi phục dữ liệu từ tệp etc-backup.tar.gz vào thư mục gốc /', accepted: ['sudo tar -xzvf etc-backup.tar.gz -C /', 'sudo tar xzvf etc-backup.tar.gz -C /'] },
      ],
    },
    {
      name: 'fsck',
      week: WEEKS.W11_TH19,
      description: 'kiểm tra và sửa lỗi hệ thống tệp, thường dùng khi chẩn đoán lỗi mount hoặc hệ thống không khởi động được',
      flags: [
        { flag: '-y', meaning: 'tự động trả lời "yes" cho mọi câu hỏi sửa lỗi' },
        { flag: '-f', meaning: 'buộc kiểm tra ngay cả khi hệ thống tệp được đánh dấu là sạch (clean)' },
        { flag: '-n', meaning: 'chỉ kiểm tra và báo lỗi, không tự động sửa gì (chế độ an toàn để xem trước)' },
      ],
      scenarios: [
        { task: 'Kiểm tra và tự động sửa lỗi hệ thống tệp /dev/sdb1', accepted: ['sudo fsck -y /dev/sdb1'] },
        { task: 'Chỉ kiểm tra hệ thống tệp /dev/sdb1 và báo lỗi, không tự sửa gì', accepted: ['sudo fsck -n /dev/sdb1'] },
      ],
    },
    {
      name: 'mount -o remount,rw',
      week: WEEKS.W11_TH19,
      description: 'gắn kết lại một hệ thống tệp đang ở chế độ chỉ đọc (read-only, thường do lỗi) sang chế độ đọc/ghi',
      flags: [],
      scenarios: [
        { task: 'Gắn kết lại filesystem gốc / sang chế độ đọc/ghi sau khi hệ thống vào chế độ chỉ đọc do lỗi', accepted: ['sudo mount -o remount,rw /'] },
      ],
    },
    {
      name: 'systemctl rescue',
      week: WEEKS.W11_TH19,
      description: 'chuyển hệ thống sang chế độ cứu hộ (rescue mode), chỉ chạy các dịch vụ tối thiểu để khắc phục sự cố',
      flags: [],
      scenarios: [
        { task: 'Chuyển hệ thống sang chế độ rescue để khắc phục sự cố', accepted: ['sudo systemctl rescue'] },
      ],
    },
    {
      name: 'passwd (reset via single-user)',
      week: WEEKS.W11_TH19,
      description: 'đặt lại mật khẩu root khi khởi động vào chế độ single-user/rescue sau khi quên mật khẩu',
      flags: [],
      scenarios: [
        { task: 'Đặt lại mật khẩu root sau khi đã vào được chế độ single-user/rescue', accepted: ['passwd root', 'passwd'] },
      ],
    },
    {
      name: 'journalctl -xb',
      week: WEEKS.W11_TH19,
      description: 'xem log khởi động kèm giải thích chi tiết (explanatory text) để chẩn đoán lỗi boot',
      flags: [],
      scenarios: [
        { task: 'Xem log khởi động kèm giải thích chi tiết để tìm nguyên nhân lỗi boot', accepted: ['journalctl -xb'] },
      ],
    },
    {
      name: 'mount -a (fstab check)',
      week: WEEKS.W11_TH19,
      description: 'gắn kết lại toàn bộ các mục trong /etc/fstab, dùng để kiểm tra fstab có lỗi cú pháp gây treo boot hay không',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra /etc/fstab có lỗi gây treo boot hay không bằng cách thử mount lại toàn bộ', accepted: ['sudo mount -a'] },
      ],
    },
  ],
};
