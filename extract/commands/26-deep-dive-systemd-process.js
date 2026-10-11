const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-systemd-process',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'systemctl list-unit-files',
      description: 'liệt kê toàn bộ các unit file đã cài đặt trên hệ thống kèm trạng thái enabled/disabled',
      flags: [
        { flag: '--type=service', meaning: 'chỉ liệt kê các unit file loại service' },
        { flag: '--state=enabled', meaning: 'chỉ liệt kê các unit đang ở trạng thái enabled' },
      ],
      scenarios: [
        { task: 'Liệt kê toàn bộ unit file loại service đã cài đặt', accepted: ['systemctl list-unit-files --type=service'] },
        { task: 'Liệt kê các unit đang được enable tự khởi động cùng hệ thống', accepted: ['systemctl list-unit-files --state=enabled'] },
        { task: 'Đếm số lượng dịch vụ hiện đang enabled trên hệ thống', accepted: ['systemctl list-unit-files --state=enabled | wc -l'] },
        { task: 'Liệt kê toàn bộ unit file trên hệ thống (không lọc loại)', accepted: ['systemctl list-unit-files'] },
      ],
    },
    {
      name: 'systemctl --user',
      description: 'quản lý các dịch vụ systemd chạy ở phạm vi người dùng (user session) thay vì toàn hệ thống',
      flags: [
        { flag: 'start <unit>', meaning: 'khởi động một user unit' },
        { flag: 'enable --now <unit>', meaning: 'bật tự khởi động và chạy ngay một user unit' },
      ],
      scenarios: [
        { task: 'Khởi động dịch vụ ở phạm vi người dùng tên my-app', accepted: ['systemctl --user start my-app'] },
        { task: 'Xem trạng thái dịch vụ người dùng my-app', accepted: ['systemctl --user status my-app'] },
        { task: 'Bật tự khởi động và chạy ngay dịch vụ người dùng my-app', accepted: ['systemctl --user enable --now my-app'] },
      ],
    },
    {
      name: 'ps --sort',
      description: 'liệt kê tiến trình được sắp xếp theo một tiêu chí cụ thể (CPU, bộ nhớ...)',
      flags: [
        { flag: '--sort=-%cpu', meaning: 'sắp xếp tiến trình theo %CPU giảm dần' },
        { flag: '--sort=-%mem', meaning: 'sắp xếp tiến trình theo %bộ nhớ giảm dần' },
      ],
      scenarios: [
        { task: 'Liệt kê 5 tiến trình dùng nhiều CPU nhất', accepted: ['ps aux --sort=-%cpu | head -6', 'ps -eo pid,comm,%cpu --sort=-%cpu | head -6'] },
        { task: 'Liệt kê 5 tiến trình dùng nhiều bộ nhớ nhất', accepted: ['ps aux --sort=-%mem | head -6', 'ps -eo pid,comm,%mem --sort=-%mem | head -6'] },
        { task: 'Liệt kê tiến trình theo thứ tự PID tăng dần', accepted: ['ps aux --sort=pid'] },
      ],
    },
    {
      name: 'pgrep',
      description: 'tìm PID của các tiến trình khớp theo tên hoặc thuộc tính, không gửi tín hiệu (khác pkill)',
      flags: [
        { flag: '-u <user>', meaning: 'chỉ tìm tiến trình thuộc về một người dùng cụ thể' },
        { flag: '-l', meaning: 'hiển thị kèm tên tiến trình bên cạnh PID' },
        { flag: '-f', meaning: 'khớp mẫu với toàn bộ dòng lệnh đầy đủ, không chỉ tên tiến trình' },
      ],
      scenarios: [
        { task: 'Tìm PID của tiến trình nginx', accepted: ['pgrep nginx'] },
        { task: 'Tìm PID kèm tên của các tiến trình thuộc về người dùng alice', accepted: ['pgrep -l -u alice', 'pgrep -lu alice'] },
        { task: 'Tìm PID của tiến trình có dòng lệnh đầy đủ chứa "backup.sh"', accepted: ['pgrep -f backup.sh'] },
      ],
    },
    {
      name: 'systemctl edit --full',
      description: 'mở trình soạn thảo để sửa trực tiếp toàn bộ nội dung một unit file (khác với edit tạo override)',
      flags: [],
      scenarios: [
        { task: 'Sửa trực tiếp toàn bộ nội dung unit file của dịch vụ nginx', accepted: ['sudo systemctl edit --full nginx'] },
      ],
    },
    {
      name: 'systemd-cgtop',
      description: 'hiển thị mức sử dụng tài nguyên (CPU, bộ nhớ, I/O) theo từng control group (cgroup) của systemd',
      flags: [],
      scenarios: [
        { task: 'Xem mức sử dụng tài nguyên theo từng cgroup trên hệ thống', accepted: ['systemd-cgtop'] },
      ],
    },
    {
      name: 'systemctl kill',
      description: 'gửi trực tiếp một tín hiệu tới các tiến trình thuộc về một unit, thay vì dùng lệnh kill thủ công',
      flags: [
        { flag: '-s SIGKILL', meaning: 'chỉ định gửi tín hiệu SIGKILL thay vì SIGTERM mặc định' },
      ],
      scenarios: [
        { task: 'Buộc chấm dứt ngay tiến trình của dịch vụ hung-service bằng SIGKILL', accepted: ['sudo systemctl kill -s SIGKILL hung-service'] },
      ],
    },
    {
      name: 'nice -n (negative priority)',
      description: 'chạy chương trình với độ ưu tiên cao hơn bình thường (giá trị niceness âm, cần quyền root)',
      flags: [],
      scenarios: [
        { task: 'Chạy script quan trọng important.sh với độ ưu tiên cao (niceness -10)', accepted: ['sudo nice -n -10 ./important.sh'] },
      ],
    },
    {
      name: 'taskset',
      description: 'ràng buộc (gán) một tiến trình chạy chỉ trên các nhân CPU cụ thể (CPU affinity)',
      flags: [
        { flag: '-c <danh sách cpu>', meaning: 'chỉ định danh sách nhân CPU (theo số) mà tiến trình được phép chạy' },
      ],
      scenarios: [
        { task: 'Chạy chương trình heavy_task chỉ trên nhân CPU số 0 và 1', accepted: ['taskset -c 0,1 ./heavy_task'] },
      ],
    },
  ],
};
