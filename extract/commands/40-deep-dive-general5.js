const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general5',
  week: WEEKS.EXTRA_6,
  commands: [
    {
      name: 'curl -u',
      description: 'gửi yêu cầu HTTP kèm thông tin xác thực Basic Auth (tên người dùng, mật khẩu)',
      flags: [],
      scenarios: [
        { task: 'Gửi yêu cầu GET tới http://localhost/api kèm xác thực Basic Auth user admin', accepted: ['curl -u admin http://localhost/api'] },
      ],
    },
    {
      name: 'curl --head',
      description: 'chỉ gửi yêu cầu HEAD, chỉ lấy phần header của phản hồi, không tải nội dung trang',
      flags: [],
      scenarios: [
        { task: 'Chỉ lấy header phản hồi của http://example.com mà không tải nội dung', accepted: ['curl --head http://example.com', 'curl -I http://example.com'] },
      ],
    },
    {
      name: 'wget --mirror',
      description: 'tải toàn bộ một website về máy, giữ nguyên cấu trúc thư mục, dùng để sao lưu/mirror site',
      flags: [],
      scenarios: [
        { task: 'Tải toàn bộ website http://example.com về máy giữ nguyên cấu trúc thư mục', accepted: ['wget --mirror http://example.com'] },
      ],
    },
    {
      name: 'ping -i',
      description: 'thiết lập khoảng thời gian chờ giữa các lần gửi gói tin ping',
      flags: [],
      scenarios: [
        { task: 'Ping tới 8.8.8.8 với khoảng cách 2 giây giữa mỗi lần gửi', accepted: ['ping -i 2 8.8.8.8'] },
      ],
    },
    {
      name: 'ping -s',
      description: 'thiết lập kích thước gói tin gửi đi khi ping, dùng để kiểm tra MTU hoặc độ ổn định với gói lớn',
      flags: [],
      scenarios: [
        { task: 'Ping tới 8.8.8.8 với kích thước gói tin 1000 byte', accepted: ['ping -s 1000 8.8.8.8'] },
      ],
    },
    {
      name: 'ss -o',
      description: 'hiển thị thông tin bộ định thời (timer) của từng socket, hữu ích khi debug kết nối TCP treo',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin timer của các socket TCP đang mở', accepted: ['ss -to'] },
      ],
    },
    {
      name: 'ip -c addr',
      description: 'hiển thị địa chỉ IP với màu sắc phân biệt rõ ràng hơn giữa các phần thông tin',
      flags: [],
      scenarios: [
        { task: 'Hiển thị địa chỉ IP các giao diện mạng kèm màu sắc phân biệt', accepted: ['ip -c addr'] },
      ],
    },
    {
      name: 'traceroute -I',
      description: 'thực hiện traceroute dùng gói tin ICMP thay vì UDP mặc định, giống cách Windows tracert hoạt động',
      flags: [],
      scenarios: [
        { task: 'Chạy traceroute tới example.com dùng gói tin ICMP thay vì UDP', accepted: ['traceroute -I example.com'] },
      ],
    },
  ],
};
