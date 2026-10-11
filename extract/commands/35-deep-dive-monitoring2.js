const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-monitoring2',
  week: WEEKS.W8_TH14,
  commands: [
    {
      name: 'journalctl -k',
      description: 'chỉ hiển thị các log liên quan tới kernel (tương đương dmesg nhưng qua journal)',
      flags: [],
      scenarios: [
        { task: 'Xem log kernel thông qua journalctl', accepted: ['journalctl -k'] },
      ],
    },
    {
      name: 'journalctl --list-boots',
      description: 'liệt kê danh sách các lần hệ thống đã khởi động, kèm số thứ tự để xem log của từng lần boot',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các lần hệ thống đã khởi động', accepted: ['journalctl --list-boots'] },
      ],
    },
    {
      name: 'journalctl -u <unit> --since yesterday',
      description: 'xem log của một dịch vụ cụ thể kể từ đầu ngày hôm qua',
      flags: [],
      scenarios: [
        { task: 'Xem log của dịch vụ nginx kể từ hôm qua', accepted: ['journalctl -u nginx --since yesterday'] },
      ],
    },
    {
      name: 'sar',
      description: 'thu thập và báo cáo thống kê hoạt động hệ thống theo thời gian (CPU, bộ nhớ, I/O) từ dữ liệu lịch sử',
      flags: [
        { flag: '-u', meaning: 'báo cáo thống kê sử dụng CPU' },
        { flag: '-r', meaning: 'báo cáo thống kê sử dụng bộ nhớ' },
      ],
      scenarios: [
        { task: 'Xem báo cáo lịch sử sử dụng CPU bằng sar', accepted: ['sar -u'] },
        { task: 'Xem báo cáo lịch sử sử dụng bộ nhớ bằng sar', accepted: ['sar -r'] },
      ],
    },
    {
      name: 'vmstat 1 5',
      description: 'hiển thị thống kê hệ thống lặp lại mỗi giây, tổng cộng 5 lần, để quan sát xu hướng theo thời gian',
      flags: [],
      scenarios: [
        { task: 'Theo dõi thống kê hệ thống mỗi giây, tổng cộng 5 lần', accepted: ['vmstat 1 5'] },
      ],
    },
    {
      name: 'top -o %MEM',
      description: 'chạy top và sắp xếp danh sách tiến trình theo mức sử dụng bộ nhớ',
      flags: [],
      scenarios: [
        { task: 'Chạy top sắp xếp tiến trình theo mức sử dụng bộ nhớ', accepted: ['top -o %MEM'] },
      ],
    },
    {
      name: 'iotop',
      description: 'hiển thị mức sử dụng băng thông I/O đĩa theo từng tiến trình, theo thời gian thực',
      flags: [],
      scenarios: [
        { task: 'Theo dõi mức sử dụng I/O đĩa theo từng tiến trình theo thời gian thực', accepted: ['sudo iotop'] },
      ],
    },
    {
      name: 'netdata / nload',
      description: 'hiển thị lưu lượng mạng vào/ra theo thời gian thực dạng biểu đồ console (nload)',
      flags: [],
      scenarios: [
        { task: 'Xem lưu lượng mạng vào/ra theo thời gian thực dạng biểu đồ console', accepted: ['nload'] },
      ],
    },
    {
      name: 'journalctl -o json-pretty',
      description: 'xuất log journal dạng JSON định dạng đẹp, hữu ích khi cần xử lý log bằng công cụ khác (vd: jq)',
      flags: [],
      scenarios: [
        { task: 'Xuất log của dịch vụ nginx dạng JSON định dạng đẹp', accepted: ['journalctl -u nginx -o json-pretty'] },
      ],
    },
    {
      name: 'logrotate',
      description: 'quản lý xoay vòng (rotate), nén và xóa các tệp log cũ theo cấu hình định kỳ',
      flags: [
        { flag: '-f <tệp cấu hình>', meaning: 'buộc chạy rotate ngay lập tức, bỏ qua lịch trình, dùng để kiểm thử cấu hình' },
      ],
      scenarios: [
        { task: 'Buộc chạy logrotate ngay để kiểm thử tệp cấu hình /etc/logrotate.d/nginx', accepted: ['sudo logrotate -f /etc/logrotate.d/nginx'] },
      ],
    },
  ],
};
