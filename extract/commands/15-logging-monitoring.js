const WEEKS = require('../weeks');
module.exports = {
  category: 'logging-monitoring',
  week: WEEKS.W8_TH14,
  commands: [
    {
      name: 'journalctl -p err',
      description: 'xem các dòng log có mức độ nghiêm trọng từ lỗi (error) trở lên, giúp nhanh chóng tìm sự cố',
      flags: [],
      scenarios: [
        { task: 'Xem các log có mức độ lỗi trở lên trong journal hệ thống', accepted: ['journalctl -p err'] },
      ],
    },
    {
      name: 'dmesg',
      description: 'hiển thị log của kernel, thường dùng để kiểm tra lỗi phần cứng hoặc thiết bị mới cắm vào',
      flags: [
        { flag: '-T', meaning: 'hiển thị thời gian theo định dạng con người đọc được thay vì timestamp hệ thống' },
        { flag: '-w', meaning: 'theo dõi log kernel liên tục giống tail -f' },
      ],
      scenarios: [
        { task: 'Xem log kernel kèm thời gian dễ đọc', accepted: ['dmesg -T'] },
      ],
    },
    {
      name: 'free',
      description: 'hiển thị dung lượng bộ nhớ RAM và swap đang sử dụng/còn trống',
      flags: [
        { flag: '-h', meaning: 'hiển thị dung lượng ở dạng dễ đọc (K, M, G)' },
        { flag: '-s <giây>', meaning: 'lặp lại hiển thị liên tục sau mỗi khoảng thời gian chỉ định' },
      ],
      scenarios: [
        { task: 'Xem dung lượng RAM đang sử dụng ở dạng dễ đọc', accepted: ['free -h'] },
      ],
    },
    {
      name: 'vmstat',
      description: 'hiển thị thống kê tổng quan về bộ nhớ, tiến trình, CPU và I/O của hệ thống',
      flags: [
        { flag: '<giây>', meaning: 'lặp lại hiển thị số liệu sau mỗi khoảng thời gian chỉ định' },
      ],
      scenarios: [
        { task: 'Xem thống kê hệ thống lặp lại mỗi 2 giây', accepted: ['vmstat 2'] },
      ],
    },
    {
      name: 'uptime',
      description: 'hiển thị thời gian hệ thống đã hoạt động liên tục và tải trung bình (load average)',
      flags: [],
      scenarios: [
        { task: 'Xem thời gian hệ thống đã chạy liên tục và load average', accepted: ['uptime'] },
      ],
    },
    {
      name: 'iostat',
      description: 'hiển thị thống kê hiệu năng vào/ra (I/O) của CPU và các thiết bị lưu trữ',
      flags: [],
      scenarios: [
        { task: 'Xem thống kê hiệu năng I/O của đĩa', accepted: ['iostat'] },
      ],
    },
    {
      name: 'lsof',
      description: 'liệt kê các tệp đang được mở bởi tiến trình, thường dùng để kiểm tra tiến trình nào đang giữ một tệp hoặc cổng mạng',
      flags: [
        { flag: '-i :<port>', meaning: 'liệt kê tiến trình đang sử dụng một cổng mạng cụ thể' },
        { flag: '-u <user>', meaning: 'chỉ liệt kê các tệp đang mở bởi một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Kiểm tra tiến trình nào đang lắng nghe trên cổng 80', accepted: ['sudo lsof -i :80'] },
      ],
    },
    {
      name: 'systemctl --failed',
      description: 'liệt kê các dịch vụ systemd đang ở trạng thái lỗi (failed), hữu ích khi chẩn đoán sự cố khởi động',
      flags: [],
      scenarios: [
        { task: 'Liệt kê các dịch vụ systemd đang bị lỗi trên hệ thống', accepted: ['systemctl --failed'] },
      ],
    },
    {
      name: 'journalctl --since "<time>"',
      description: 'lọc log hệ thống theo khoảng thời gian cụ thể',
      flags: [],
      scenarios: [
        { task: 'Xem log hệ thống từ 09:00 hôm nay', accepted: ['journalctl --since "09:00"', "journalctl --since '09:00'"] },
      ],
    },
    {
      name: 'tail -f /var/log/syslog',
      description: 'theo dõi liên tục log hệ thống tổng hợp syslog trên các bản phân phối Debian/Ubuntu',
      flags: [],
      scenarios: [
        { task: 'Theo dõi liên tục log hệ thống tổng hợp /var/log/syslog', accepted: ['tail -f /var/log/syslog'] },
      ],
    },
  ],
};
