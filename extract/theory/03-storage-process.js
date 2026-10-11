module.exports = [
  {
    text: 'LVM (Logical Volume Manager) mang lại lợi ích chính gì so với phân vùng truyền thống?',
    options: [
      'Tốc độ đọc/ghi nhanh hơn gấp đôi',
      'Cho phép thay đổi (mở rộng/thu nhỏ) kích thước volume linh hoạt mà không cần định dạng lại ổ cứng',
      'Tự động mã hóa toàn bộ dữ liệu',
      'Không cần hệ thống tệp',
    ],
    correctIndex: 1,
    explanation: 'LVM trừu tượng hóa lớp lưu trữ, cho phép thay đổi kích thước logical volume linh hoạt bằng cách thêm/bớt physical volume.',
  },
  {
    text: 'Thứ tự các lớp trong LVM từ thấp đến cao là gì?',
    options: [
      'Logical Volume → Volume Group → Physical Volume',
      'Physical Volume → Volume Group → Logical Volume',
      'Volume Group → Physical Volume → Logical Volume',
      'Physical Volume → Logical Volume → Volume Group',
    ],
    correctIndex: 1,
    explanation: 'Physical Volume (PV, ổ đĩa vật lý) được gom vào Volume Group (VG), rồi chia thành các Logical Volume (LV) để dùng.',
  },
  {
    text: 'Tệp /etc/fstab dùng để làm gì?',
    options: [
      'Lưu danh sách người dùng hệ thống',
      'Khai báo các hệ thống tệp sẽ được tự động gắn kết khi khởi động',
      'Cấu hình địa chỉ IP tĩnh',
      'Lưu log hệ thống',
    ],
    correctIndex: 1,
    explanation: '/etc/fstab định nghĩa thiết bị, điểm mount, loại filesystem và tùy chọn để hệ thống tự mount khi boot.',
  },
  {
    text: 'Quota trên hệ thống tệp dùng để làm gì?',
    options: [
      'Mã hóa dữ liệu người dùng',
      'Giới hạn dung lượng hoặc số lượng tệp mà một người dùng/nhóm được sử dụng',
      'Tăng tốc độ đọc ghi',
      'Sao lưu dữ liệu tự động',
    ],
    correctIndex: 1,
    explanation: 'Quota giới hạn mức sử dụng tài nguyên lưu trữ (dung lượng, số inode) theo người dùng hoặc nhóm.',
  },
  {
    text: 'Soft limit và hard limit trong quota khác nhau như thế nào?',
    options: [
      'Soft limit là giới hạn cứng không thể vượt qua, hard limit chỉ cảnh báo',
      'Hard limit là giới hạn tuyệt đối không thể vượt qua; soft limit có thể vượt tạm trong thời gian ân hạn (grace period)',
      'Không có sự khác biệt',
      'Soft limit chỉ áp dụng cho root',
    ],
    correctIndex: 1,
    explanation: 'Soft limit cho phép vượt tạm thời trong "grace period", còn hard limit là ngưỡng tuyệt đối không thể vượt qua.',
  },
  {
    text: 'Tiến trình ở trạng thái "Zombie" (Z) nghĩa là gì?',
    options: [
      'Tiến trình đang chạy bình thường',
      'Tiến trình đã kết thúc nhưng tiến trình cha chưa đọc mã thoát (exit status) của nó',
      'Tiến trình bị treo vĩnh viễn, không thể kill',
      'Tiến trình đang chờ tài nguyên I/O',
    ],
    correctIndex: 1,
    explanation: 'Zombie process đã chấm dứt thực thi nhưng vẫn còn trong bảng tiến trình chờ cha đọc exit status.',
  },
  {
    text: 'Tín hiệu SIGKILL (số 9) khác SIGTERM (số 15) ở điểm nào?',
    options: [
      'SIGKILL cho phép tiến trình tự dọn dẹp trước khi thoát, SIGTERM thì không',
      'SIGKILL buộc chấm dứt ngay lập tức, không thể bị bắt hoặc bỏ qua; SIGTERM có thể bị tiến trình xử lý để dọn dẹp trước khi thoát',
      'Hai tín hiệu này giống hệt nhau',
      'SIGKILL chỉ dùng được bởi root',
    ],
    correctIndex: 1,
    explanation: 'SIGTERM là yêu cầu dừng "lịch sự" có thể bị handler bắt; SIGKILL cưỡng chế dừng ngay, không thể chặn.',
  },
  {
    text: 'PID 1 trên hệ thống Linux hiện đại (dùng systemd) là tiến trình nào?',
    options: ['bash', 'init/systemd', 'sshd', 'kernel'],
    correctIndex: 1,
    explanation: 'systemd (hoặc init trên hệ thống cũ) luôn là tiến trình đầu tiên được kernel khởi chạy, mang PID 1.',
  },
  {
    text: 'Chạy một lệnh với dấu & ở cuối có ý nghĩa gì?',
    options: ['Chạy lệnh với quyền root', 'Chạy lệnh ở chế độ nền (background)', 'Lặp lại lệnh 2 lần', 'Hủy lệnh ngay lập tức'],
    correctIndex: 1,
    explanation: 'Dấu & ở cuối lệnh đưa tiến trình chạy ngầm (background), trả lại quyền điều khiển terminal ngay.',
  },
  {
    text: 'systemd unit file loại .service dùng để làm gì?',
    options: [
      'Định nghĩa một dịch vụ hệ thống (cách khởi động, dừng, phụ thuộc)',
      'Định nghĩa một phân vùng ổ đĩa',
      'Định nghĩa một người dùng hệ thống',
      'Định nghĩa một địa chỉ IP tĩnh',
    ],
    correctIndex: 0,
    explanation: 'Unit .service mô tả cách systemd quản lý vòng đời một dịch vụ: lệnh khởi động, phụ thuộc, loại khởi động.',
  },
  {
    text: 'Khác biệt giữa "systemctl enable" và "systemctl start" là gì?',
    options: [
      'enable khởi động dịch vụ ngay, start chỉ thiết lập tự khởi động cùng hệ thống',
      'enable thiết lập dịch vụ tự khởi động cùng hệ thống (không chạy ngay), start khởi động dịch vụ ngay lập tức (không bền qua reboot)',
      'Hai lệnh có chức năng giống hệt nhau',
      'enable chỉ dùng cho dịch vụ mạng',
    ],
    correctIndex: 1,
    explanation: 'enable chỉ tạo symlink để dịch vụ tự chạy ở lần boot sau; start khởi động ngay nhưng sẽ không tự chạy lại sau khi reboot nếu chưa enable.',
  },
];
