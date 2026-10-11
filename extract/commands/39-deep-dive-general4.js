const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general4',
  week: WEEKS.EXTRA_5,
  commands: [
    {
      name: 'free -m',
      description: 'hiển thị dung lượng bộ nhớ RAM/swap theo đơn vị megabyte',
      flags: [],
      scenarios: [
        { task: 'Xem dung lượng RAM theo đơn vị megabyte', accepted: ['free -m'] },
      ],
    },
    {
      name: 'df -T',
      description: 'hiển thị dung lượng đĩa kèm loại hệ thống tệp của từng phân vùng',
      flags: [],
      scenarios: [
        { task: 'Xem dung lượng đĩa kèm loại hệ thống tệp của từng phân vùng', accepted: ['df -T'] },
      ],
    },
    {
      name: 'du --max-depth=1 -h',
      description: 'xem dung lượng sử dụng của từng thư mục con cấp 1, dạng dễ đọc, không đi sâu hơn',
      flags: [],
      scenarios: [
        { task: 'Xem dung lượng từng thư mục con cấp 1 trong /var, dạng dễ đọc', accepted: ['du --max-depth=1 -h /var', 'du -h --max-depth=1 /var'] },
      ],
    },
    {
      name: 'uptime -s',
      description: 'hiển thị thời điểm chính xác hệ thống đã khởi động lần gần nhất',
      flags: [],
      scenarios: [
        { task: 'Xem thời điểm chính xác hệ thống khởi động lần gần nhất', accepted: ['uptime -s'] },
      ],
    },
    {
      name: 'who -b',
      description: 'hiển thị thời điểm hệ thống khởi động lần gần nhất, thông qua lệnh who',
      flags: [],
      scenarios: [
        { task: 'Xem thời điểm hệ thống khởi động lần gần nhất bằng lệnh who', accepted: ['who -b'] },
      ],
    },
    {
      name: 'lastb',
      description: 'hiển thị danh sách các lần đăng nhập thất bại gần đây',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các lần đăng nhập thất bại gần đây', accepted: ['sudo lastb', 'lastb'] },
      ],
    },
    {
      name: 'who -r',
      description: 'hiển thị runlevel hiện tại của hệ thống',
      flags: [],
      scenarios: [
        { task: 'Xem runlevel hiện tại của hệ thống', accepted: ['who -r'] },
      ],
    },
    {
      name: 'kill -0',
      description: 'kiểm tra một tiến trình có đang tồn tại hay không mà không thực sự gửi tín hiệu nào (dùng trong script)',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra tiến trình PID 1234 có còn tồn tại hay không mà không gửi tín hiệu thật', accepted: ['kill -0 1234'] },
      ],
    },
    {
      name: 'ps -p',
      description: 'hiển thị thông tin của một tiến trình cụ thể theo PID',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin tiến trình có PID 1234', accepted: ['ps -p 1234'] },
      ],
    },
    {
      name: 'command -v',
      description: 'kiểm tra một lệnh có tồn tại trên hệ thống hay không, trả về đường dẫn nếu có (dùng trong script thay cho which)',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra lệnh docker có tồn tại trên hệ thống hay không trong script', accepted: ['command -v docker'] },
      ],
    },
    {
      name: 'exec',
      description: 'thay thế hoàn toàn tiến trình shell hiện tại bằng một lệnh khác, không tạo tiến trình con mới',
      flags: [],
      scenarios: [
        { task: 'Thay thế shell hiện tại bằng tiến trình bash mới (exec)', accepted: ['exec bash'] },
      ],
    },
    {
      name: 'hostname -I',
      description: 'hiển thị toàn bộ địa chỉ IP hiện có của máy, dạng danh sách ngắn gọn trên một dòng',
      flags: [],
      scenarios: [
        { task: 'Xem nhanh toàn bộ địa chỉ IP của máy trên một dòng', accepted: ['hostname -I'] },
      ],
    },
    {
      name: 'hostname -f',
      description: 'hiển thị tên miền đầy đủ (FQDN) của máy thay vì chỉ hostname ngắn',
      flags: [],
      scenarios: [
        { task: 'Xem tên miền đầy đủ (FQDN) của máy', accepted: ['hostname -f'] },
      ],
    },
    {
      name: 'uname -s',
      description: 'chỉ hiển thị tên của kernel (vd: Linux) mà không kèm thông tin khác',
      flags: [],
      scenarios: [
        { task: 'Chỉ hiển thị tên kernel của hệ thống (vd: Linux)', accepted: ['uname -s'] },
      ],
    },
    {
      name: 'arch',
      description: 'hiển thị kiến trúc phần cứng của máy (vd: x86_64), tương đương uname -m',
      flags: [],
      scenarios: [
        { task: 'Xem kiến trúc phần cứng của máy bằng lệnh arch', accepted: ['arch'] },
      ],
    },
    {
      name: 'nproc --all',
      description: 'hiển thị tổng số nhân CPU vật lý của máy, kể cả các nhân bị giới hạn (cgroup) cho tiến trình hiện tại',
      flags: [],
      scenarios: [
        { task: 'Xem tổng số nhân CPU vật lý của máy, không bị giới hạn bởi cgroup', accepted: ['nproc --all'] },
      ],
    },
  ],
};
