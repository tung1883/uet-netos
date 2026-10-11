const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-ssh-network2',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ssh -D',
      description: 'thiết lập SOCKS proxy động qua kết nối SSH, cho phép định tuyến lưu lượng trình duyệt qua máy chủ SSH',
      flags: [],
      scenarios: [
        { task: 'Tạo SOCKS proxy động trên cổng cục bộ 1080 qua kết nối SSH tới server', accepted: ['ssh -D 1080 student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh -R',
      description: 'thiết lập port forwarding ngược (remote forwarding), cho phép máy chủ từ xa truy cập ngược lại cổng trên máy cục bộ',
      flags: [],
      scenarios: [
        { task: 'Forward cổng 8080 của máy chủ remote về cổng 80 trên máy cục bộ', accepted: ['ssh -R 8080:localhost:80 student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh-add',
      description: 'thêm một khóa riêng tư vào ssh-agent để không phải nhập passphrase lại mỗi lần kết nối',
      flags: [
        { flag: '-l', meaning: 'liệt kê các khóa hiện đang được ssh-agent quản lý' },
      ],
      scenarios: [
        { task: 'Thêm khóa riêng tư ~/.ssh/id_rsa vào ssh-agent', accepted: ['ssh-add ~/.ssh/id_rsa'] },
        { task: 'Xem danh sách các khóa hiện đang được ssh-agent quản lý', accepted: ['ssh-add -l'] },
      ],
    },
    {
      name: 'ssh-keyscan',
      description: 'thu thập public key (host key) của một máy chủ từ xa, thường dùng để thêm vào known_hosts trước khi kết nối',
      flags: [],
      scenarios: [
        { task: 'Lấy host key của máy chủ 192.168.1.10 để thêm vào known_hosts', accepted: ['ssh-keyscan 192.168.1.10'] },
      ],
    },
    {
      name: 'scp -r',
      description: 'sao chép đệ quy một thư mục qua SCP, bao gồm toàn bộ nội dung bên trong',
      flags: [],
      scenarios: [
        { task: 'Sao chép đệ quy thư mục /data lên máy chủ remote vào /backup', accepted: ['scp -r /data student@192.168.1.10:/backup'] },
      ],
    },
    {
      name: 'rsync over ssh custom port',
      description: 'đồng bộ rsync qua SSH khi SSH server chạy ở cổng khác mặc định',
      flags: [],
      scenarios: [
        { task: 'Đồng bộ thư mục /data lên server remote qua SSH cổng 2222', accepted: ["rsync -avz -e 'ssh -p 2222' /data/ user@remote:/backup/"] },
      ],
    },
    {
      name: 'ip link set mtu',
      description: 'thay đổi giá trị MTU (kích thước gói tin tối đa) của một giao diện mạng',
      flags: [],
      scenarios: [
        { task: 'Đặt MTU của giao diện eth0 thành 1400', accepted: ['sudo ip link set eth0 mtu 1400'] },
      ],
    },
    {
      name: 'ip addr show up',
      description: 'chỉ hiển thị các giao diện mạng hiện đang bật (trạng thái UP)',
      flags: [],
      scenarios: [
        { task: 'Chỉ hiển thị các giao diện mạng đang ở trạng thái UP', accepted: ['ip addr show up'] },
      ],
    },
    {
      name: 'nmcli connection modify',
      description: 'chỉnh sửa thuộc tính của một kết nối mạng đã cấu hình trong NetworkManager',
      flags: [
        { flag: 'ipv4.addresses <ip/mask>', meaning: 'thiết lập địa chỉ IPv4 tĩnh cho kết nối' },
        { flag: 'ipv4.method manual', meaning: 'chuyển kết nối sang chế độ cấu hình IP thủ công (tĩnh) thay vì DHCP' },
      ],
      scenarios: [
        { task: 'Đặt địa chỉ IP tĩnh 192.168.1.50/24 cho kết nối tên "Wired connection 1"', accepted: ['nmcli connection modify "Wired connection 1" ipv4.addresses 192.168.1.50/24 ipv4.method manual'] },
      ],
    },
    {
      name: 'netplan ip rule',
      description: 'xem cấu hình Netplan hiện tại trước khi áp dụng thay đổi, kiểm tra lại nội dung tệp YAML',
      flags: [],
      scenarios: [
        { task: 'Xem nội dung tệp cấu hình Netplan tại /etc/netplan/00-installer-config.yaml', accepted: ['cat /etc/netplan/00-installer-config.yaml'] },
      ],
    },
  ],
};
