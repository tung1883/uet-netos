const WEEKS = require('../weeks');
module.exports = {
  category: 'networking',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ip addr',
      description: 'hiển thị hoặc quản lý địa chỉ IP gán trên các giao diện mạng',
      flags: [
        { flag: 'show', meaning: 'hiển thị toàn bộ địa chỉ IP của tất cả giao diện mạng (mặc định)' },
        { flag: '-br', meaning: 'hiển thị ở dạng ngắn gọn, mỗi giao diện một dòng' },
        { flag: 'add <ip>/<mask> dev <iface>', meaning: 'gán thêm một địa chỉ IP vào giao diện mạng' },
        { flag: 'del <ip>/<mask> dev <iface>', meaning: 'xóa một địa chỉ IP khỏi giao diện mạng' },
        { flag: 'show dev <iface>', meaning: 'chỉ hiển thị địa chỉ IP của một giao diện mạng cụ thể' },
        { flag: 'flush dev <iface>', meaning: 'xóa toàn bộ địa chỉ IP đã gán trên một giao diện mạng' },
      ],
      scenarios: [
        { task: 'Hiển thị địa chỉ IP của các giao diện mạng ở dạng ngắn gọn', accepted: ['ip -br addr', 'ip -br a', 'ip -brief addr', 'ip -br address', 'ip -brief address', 'ip -br address show', 'ip -brief a', 'ip -brief address show'] },
        { task: 'Gán địa chỉ IP 192.168.1.10/24 cho giao diện eth0', accepted: ['sudo ip addr add 192.168.1.10/24 dev eth0'] },
        { task: 'Xem toàn bộ địa chỉ IP trên tất cả các giao diện mạng', accepted: ['ip addr show', 'ip addr', 'ip a'] },
        { task: 'Chỉ xem địa chỉ IP gán trên giao diện ens33', accepted: ['ip addr show dev ens33', 'ip addr show ens33'] },
        { task: 'Xóa địa chỉ IP 192.168.1.10/24 khỏi giao diện eth0', accepted: ['sudo ip addr del 192.168.1.10/24 dev eth0'] },
      ],
    },
    {
      name: 'ip link',
      description: 'hiển thị hoặc thay đổi trạng thái (up/down) của các giao diện mạng',
      flags: [
        { flag: 'set <iface> up', meaning: 'bật (kích hoạt) một giao diện mạng' },
        { flag: 'set <iface> down', meaning: 'tắt (vô hiệu hóa) một giao diện mạng' },
      ],
      scenarios: [
        { task: 'Bật giao diện mạng eth0', accepted: ['sudo ip link set eth0 up'] },
        { task: 'Tắt giao diện mạng eth0', accepted: ['sudo ip link set eth0 down'] },
      ],
    },
    {
      name: 'ip route',
      description: 'hiển thị hoặc quản lý bảng định tuyến (routing table) của hệ thống',
      flags: [
        { flag: 'show', meaning: 'hiển thị bảng định tuyến hiện tại (mặc định)' },
        { flag: 'add default via <ip>', meaning: 'thêm tuyến đường mặc định (default gateway)' },
        { flag: 'add <mạng>/<mask> via <ip>', meaning: 'thêm một tuyến đường tĩnh tới một mạng cụ thể' },
      ],
      scenarios: [
        { task: 'Hiển thị bảng định tuyến hiện tại của hệ thống', accepted: ['ip route show', 'ip route', 'ip r', 'ip route list'] },
        { task: 'Thêm default gateway là 192.168.1.1', accepted: ['sudo ip route add default via 192.168.1.1'] },
        { task: 'Thêm tuyến đường tĩnh tới mạng 10.0.0.0/24 qua gateway 192.168.1.254', accepted: ['sudo ip route add 10.0.0.0/24 via 192.168.1.254'] },
      ],
    },
    {
      name: 'nmcli',
      description: 'công cụ dòng lệnh quản lý kết nối mạng thông qua NetworkManager',
      flags: [
        { flag: 'device status', meaning: 'hiển thị trạng thái của tất cả các thiết bị mạng' },
        { flag: 'connection show', meaning: 'liệt kê các kết nối mạng đã cấu hình' },
        { flag: 'connection up <tên>', meaning: 'kích hoạt một kết nối mạng đã cấu hình' },
      ],
      scenarios: [
        { task: 'Xem trạng thái các thiết bị mạng bằng nmcli', accepted: ['nmcli device status', 'nmcli dev status'] },
      ],
    },
    {
      name: 'netplan apply',
      description: 'áp dụng cấu hình mạng được khai báo trong các tệp YAML của Netplan',
      flags: [
        { flag: '--debug', meaning: 'áp dụng cấu hình kèm thông tin debug chi tiết' },
      ],
      scenarios: [
        { task: 'Áp dụng cấu hình mạng vừa chỉnh sửa trong Netplan', accepted: ['sudo netplan apply'] },
      ],
    },
    {
      name: 'netplan try',
      description: 'thử áp dụng cấu hình mạng mới, tự động hoàn tác (rollback) nếu người dùng không xác nhận trong thời gian giới hạn — an toàn khi cấu hình từ xa',
      flags: [],
      scenarios: [
        { task: 'Thử áp dụng cấu hình mạng mới một cách an toàn khi đang thao tác từ xa qua SSH', accepted: ['sudo netplan try'] },
      ],
    },
    {
      name: 'ping',
      description: 'kiểm tra kết nối mạng tới một máy khác bằng gói tin ICMP echo request',
      flags: [
        { flag: '-c <n>', meaning: 'chỉ gửi n gói tin rồi dừng (mặc định gửi liên tục)' },
        { flag: '-i <giây>', meaning: 'khoảng thời gian chờ giữa các lần gửi' },
      ],
      scenarios: [
        { task: 'Kiểm tra kết nối tới 8.8.8.8, chỉ gửi 4 gói tin', accepted: ['ping -c 4 8.8.8.8'] },
      ],
    },
    {
      name: 'traceroute',
      description: 'hiển thị đường đi (các router trung gian) của gói tin từ máy hiện tại tới một đích',
      flags: [
        { flag: '-n', meaning: 'hiển thị địa chỉ IP dạng số, không phân giải tên miền (nhanh hơn)' },
        { flag: '-m <n>', meaning: 'giới hạn số lượng hop (router trung gian) tối đa sẽ dò' },
      ],
      scenarios: [
        { task: 'Xem đường đi của gói tin tới google.com', accepted: ['traceroute google.com'] },
        { task: 'Xem đường đi tới 8.8.8.8 chỉ hiển thị địa chỉ IP dạng số, không phân giải tên', accepted: ['traceroute -n 8.8.8.8'] },
      ],
    },
    {
      name: 'mtr',
      description: 'kết hợp chức năng của ping và traceroute, hiển thị thống kê đường đi theo thời gian thực liên tục',
      flags: [
        { flag: '-r', meaning: 'chạy ở chế độ report, in kết quả tóm tắt rồi thoát thay vì chạy liên tục' },
        { flag: '-c <n>', meaning: 'chỉ định số chu kỳ ping gửi tới mỗi hop trước khi dừng' },
      ],
      scenarios: [
        { task: 'Theo dõi đường đi và độ trễ liên tục tới 8.8.8.8', accepted: ['mtr 8.8.8.8'] },
        { task: 'Chạy mtr tới 8.8.8.8 ở chế độ report (không tương tác), in kết quả rồi thoát', accepted: ['mtr -r 8.8.8.8'] },
      ],
    },
    {
      name: 'ss',
      description: 'hiển thị thông tin các socket mạng (kết nối TCP/UDP) đang mở, thay thế cho netstat',
      flags: [
        { flag: '-t', meaning: 'chỉ hiển thị các socket TCP' },
        { flag: '-u', meaning: 'chỉ hiển thị các socket UDP' },
        { flag: '-l', meaning: 'chỉ hiển thị các socket đang lắng nghe (listening)' },
        { flag: '-n', meaning: 'hiển thị địa chỉ và cổng dạng số, không phân giải tên' },
        { flag: '-p', meaning: 'hiển thị tên tiến trình đang sử dụng socket' },
      ],
      scenarios: [
        { task: 'Xem danh sách các cổng TCP đang lắng nghe kèm tên tiến trình', accepted: ['sudo ss -tlnp', 'ss -tlnp'] },
      ],
    },
    {
      name: 'netstat',
      description: 'công cụ cũ hơn hiển thị thông tin kết nối mạng, bảng định tuyến và thống kê giao diện',
      flags: [
        { flag: '-tulnp', meaning: 'hiển thị các cổng TCP/UDP đang lắng nghe dạng số kèm tên tiến trình' },
      ],
      scenarios: [
        { task: 'Xem các cổng đang lắng nghe bằng netstat', accepted: ['sudo netstat -tulnp', 'netstat -tulnp'] },
      ],
    },
    {
      name: 'curl',
      description: 'truyền dữ liệu qua các giao thức mạng (HTTP, FTP...), thường dùng để kiểm tra API/web server',
      flags: [
        { flag: '-I', meaning: 'chỉ lấy phần header của phản hồi HTTP, không tải nội dung' },
        { flag: '-o <tệp>', meaning: 'lưu kết quả tải về vào một tệp chỉ định' },
        { flag: '-L', meaning: 'tự động đi theo các chuyển hướng (redirect)' },
        { flag: '-X <method>', meaning: 'chỉ định phương thức HTTP (GET, POST...)' },
      ],
      scenarios: [
        { task: 'Kiểm tra header phản hồi HTTP của http://localhost', accepted: ['curl -I http://localhost'] },
        { task: 'Tải tệp từ http://example.com/file.zip và lưu thành local.zip', accepted: ['curl -o local.zip http://example.com/file.zip'] },
      ],
    },
    {
      name: 'wget',
      description: 'tải tệp từ một URL về máy, hỗ trợ tiếp tục tải khi bị gián đoạn',
      flags: [
        { flag: '-O <tệp>', meaning: 'chỉ định tên tệp lưu kết quả tải về' },
        { flag: '-c', meaning: 'tiếp tục tải tệp bị gián đoạn trước đó' },
      ],
      scenarios: [
        { task: 'Tải tệp từ http://example.com/file.zip', accepted: ['wget http://example.com/file.zip'] },
      ],
    },
    {
      name: 'ethtool',
      description: 'xem hoặc thay đổi thông số của card mạng (tốc độ, duplex, trạng thái liên kết)',
      flags: [],
      scenarios: [
        { task: 'Xem thông số card mạng eth0', accepted: ['sudo ethtool eth0', 'ethtool eth0'] },
      ],
    },
    {
      name: 'hostname',
      description: 'hiển thị hoặc thiết lập tên máy chủ (hostname) của hệ thống',
      flags: [
        { flag: '-I', meaning: 'hiển thị toàn bộ địa chỉ IP của máy' },
      ],
      scenarios: [
        { task: 'Xem tên hostname hiện tại của máy', accepted: ['hostname'] },
      ],
    },
    {
      name: 'hostnamectl',
      description: 'xem hoặc thiết lập hostname và các thông tin hệ thống liên quan thông qua systemd',
      flags: [
        { flag: 'set-hostname <tên>', meaning: 'đặt tên hostname mới cho hệ thống' },
      ],
      scenarios: [
        { task: 'Đổi hostname hệ thống thành server01', accepted: ['sudo hostnamectl set-hostname server01'] },
      ],
    },
  ],
};
