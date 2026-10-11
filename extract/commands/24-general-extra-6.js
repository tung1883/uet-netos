const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-6',
  week: WEEKS.EXTRA_6,
  commands: [
    {
      name: 'ss -s',
      description: 'hiển thị thống kê tổng quan về số lượng socket đang mở theo từng loại (TCP, UDP...)',
      flags: [],
      scenarios: [
        { task: 'Xem thống kê tổng quan số lượng socket đang mở trên hệ thống', accepted: ['ss -s'] },
      ],
    },
    {
      name: 'ss -tn state established',
      description: 'liệt kê các kết nối TCP đang ở trạng thái established (đã thiết lập), dạng số',
      flags: [],
      scenarios: [
        { task: 'Liệt kê các kết nối TCP đang ở trạng thái established', accepted: ['ss -tn state established'] },
      ],
    },
    {
      name: 'ip route get',
      description: 'hiển thị tuyến đường cụ thể mà hệ thống sẽ dùng để tới một địa chỉ IP đích',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra tuyến đường hệ thống sẽ dùng để tới địa chỉ 8.8.8.8', accepted: ['ip route get 8.8.8.8'] },
      ],
    },
    {
      name: 'ip route del',
      description: 'xóa một tuyến đường tĩnh khỏi bảng định tuyến',
      flags: [],
      scenarios: [
        { task: 'Xóa tuyến đường tĩnh tới mạng 10.0.0.0/24 qua gateway 192.168.1.254', accepted: ['sudo ip route del 10.0.0.0/24 via 192.168.1.254'] },
      ],
    },
    {
      name: 'netplan generate',
      description: 'sinh thử cấu hình mạng từ các tệp YAML của Netplan để kiểm tra cú pháp mà không áp dụng thật',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp cấu hình Netplan mà không áp dụng thật', accepted: ['sudo netplan generate'] },
      ],
    },
    {
      name: 'netplan --debug apply',
      description: 'áp dụng cấu hình Netplan kèm thông tin debug chi tiết, hữu ích khi cấu hình mạng bị lỗi không rõ nguyên nhân',
      flags: [],
      scenarios: [
        { task: 'Áp dụng cấu hình Netplan kèm thông tin debug chi tiết để chẩn đoán lỗi', accepted: ['sudo netplan --debug apply'] },
      ],
    },
    {
      name: 'curl -X POST',
      description: 'gửi yêu cầu HTTP phương thức POST, thường kèm dữ liệu, dùng để kiểm thử API',
      flags: [
        { flag: '-d "<data>"', meaning: 'gửi kèm dữ liệu trong phần thân (body) của yêu cầu' },
        { flag: '-H "<header>"', meaning: 'chỉ định thêm một HTTP header tùy chỉnh cho yêu cầu' },
      ],
      scenarios: [
        { task: 'Gửi yêu cầu POST tới http://localhost/api kèm dữ liệu JSON {"name":"test"}', accepted: ["curl -X POST -d '{\"name\":\"test\"}' http://localhost/api"] },
      ],
    },
    {
      name: 'wget -r',
      description: 'tải đệ quy toàn bộ cây thư mục của một website (mirror một phần website)',
      flags: [],
      scenarios: [
        { task: 'Tải đệ quy toàn bộ nội dung từ http://example.com', accepted: ['wget -r http://example.com'] },
      ],
    },
    {
      name: 'apt-mark hold',
      description: 'giữ cố định một gói ở phiên bản hiện tại, ngăn không cho apt upgrade tự động nâng cấp gói đó',
      flags: [],
      scenarios: [
        { task: 'Giữ cố định gói nginx ở phiên bản hiện tại, không cho tự động nâng cấp', accepted: ['sudo apt-mark hold nginx'] },
      ],
    },
    {
      name: 'apt-mark unhold',
      description: 'gỡ bỏ trạng thái giữ cố định phiên bản, cho phép gói được nâng cấp bình thường trở lại',
      flags: [],
      scenarios: [
        { task: 'Cho phép gói nginx được nâng cấp bình thường trở lại', accepted: ['sudo apt-mark unhold nginx'] },
      ],
    },
    {
      name: 'dpkg-reconfigure',
      description: 'chạy lại quá trình cấu hình ban đầu (debconf) của một gói đã cài đặt',
      flags: [],
      scenarios: [
        { task: 'Chạy lại cấu hình ban đầu cho gói tzdata (chọn múi giờ)', accepted: ['sudo dpkg-reconfigure tzdata'] },
      ],
    },
    {
      name: 'history -c',
      description: 'xóa toàn bộ lịch sử lệnh của phiên shell hiện tại',
      flags: [],
      scenarios: [
        { task: 'Xóa toàn bộ lịch sử lệnh của phiên hiện tại', accepted: ['history -c'] },
      ],
    },
    {
      name: 'unalias',
      description: 'xóa bỏ một alias đã được định nghĩa trước đó',
      flags: [
        { flag: '-a', meaning: 'xóa toàn bộ các alias đã định nghĩa' },
      ],
      scenarios: [
        { task: 'Xóa alias tên ll đã định nghĩa trước đó', accepted: ['unalias ll'] },
      ],
    },
    {
      name: 'ss -tlnp | grep',
      description: 'kết hợp ss với grep để nhanh chóng kiểm tra một cổng cụ thể có đang được lắng nghe hay không',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra nhanh xem cổng 3306 (MySQL) có đang được lắng nghe hay không', accepted: ['sudo ss -tlnp | grep 3306', 'ss -tlnp | grep 3306'] },
      ],
    },
    {
      name: 'systemctl show -p',
      description: 'hiển thị giá trị của một thuộc tính cụ thể của một unit systemd, thay vì toàn bộ thông tin',
      flags: [],
      scenarios: [
        { task: 'Xem giá trị thuộc tính MainPID của dịch vụ nginx', accepted: ['systemctl show -p MainPID nginx'] },
      ],
    },
    {
      name: 'systemctl reset-failed',
      description: 'xóa trạng thái "failed" của các unit, cho phép chúng được khởi động lại bình thường',
      flags: [],
      scenarios: [
        { task: 'Xóa trạng thái failed của toàn bộ các unit trên hệ thống', accepted: ['sudo systemctl reset-failed'] },
      ],
    },
    {
      name: 'ip -4 addr',
      description: 'chỉ hiển thị các địa chỉ IPv4 trên các giao diện mạng, bỏ qua IPv6',
      flags: [],
      scenarios: [
        { task: 'Chỉ hiển thị địa chỉ IPv4 của các giao diện mạng, bỏ qua IPv6', accepted: ['ip -4 addr'] },
      ],
    },
    {
      name: 'ip -6 addr',
      description: 'chỉ hiển thị các địa chỉ IPv6 trên các giao diện mạng, bỏ qua IPv4',
      flags: [],
      scenarios: [
        { task: 'Chỉ hiển thị địa chỉ IPv6 của các giao diện mạng', accepted: ['ip -6 addr'] },
      ],
    },
  ],
};
