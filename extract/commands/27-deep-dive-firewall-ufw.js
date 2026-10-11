const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-firewall-ufw',
  week: WEEKS.W8_TH13,
  commands: [
    {
      name: 'ufw allow proto',
      description: 'thêm quy tắc UFW cho phép truy cập giới hạn theo một giao thức cụ thể (tcp/udp)',
      flags: [
        { flag: 'proto tcp from <ip> to any port <port>', meaning: 'chỉ cho phép một IP nguồn truy cập một cổng qua giao thức TCP' },
        { flag: 'proto udp to any port <port>', meaning: 'cho phép truy cập một cổng qua giao thức UDP' },
      ],
      scenarios: [
        { task: 'Cho phép địa chỉ 10.0.0.5 truy cập cổng 5432 (PostgreSQL) qua TCP', accepted: ['sudo ufw allow proto tcp from 10.0.0.5 to any port 5432'] },
        { task: 'Cho phép truy cập cổng 53 (DNS) qua UDP', accepted: ['sudo ufw allow proto udp to any port 53', 'sudo ufw allow 53/udp'] },
        { task: 'Cho phép dải mạng 192.168.1.0/24 truy cập cổng 22', accepted: ['sudo ufw allow from 192.168.1.0/24 to any port 22'] },
        { task: 'Cho phép truy cập một dải cổng từ 6000 đến 6007 qua TCP', accepted: ['sudo ufw allow 6000:6007/tcp'] },
      ],
    },
    {
      name: 'ufw limit',
      description: 'giới hạn số lần kết nối tới một cổng trong một khoảng thời gian, chống brute-force (vd: giới hạn SSH)',
      flags: [],
      scenarios: [
        { task: 'Giới hạn số lần kết nối tới cổng SSH để chống brute-force', accepted: ['sudo ufw limit ssh', 'sudo ufw limit 22', 'sudo ufw limit 22/tcp'] },
      ],
    },
    {
      name: 'ufw reload',
      description: 'nạp lại toàn bộ quy tắc tường lửa UFW sau khi chỉnh sửa cấu hình thủ công',
      flags: [],
      scenarios: [
        { task: 'Nạp lại quy tắc UFW sau khi sửa tệp cấu hình thủ công', accepted: ['sudo ufw reload'] },
      ],
    },
    {
      name: 'ufw app list',
      description: 'liệt kê các hồ sơ ứng dụng (application profiles) đã đăng ký sẵn với UFW, cho phép allow theo tên thay vì số cổng',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các hồ sơ ứng dụng đã đăng ký với UFW', accepted: ['sudo ufw app list', 'ufw app list'] },
        { task: 'Cho phép truy cập theo hồ sơ ứng dụng "Nginx Full" (cả HTTP và HTTPS)', accepted: ['sudo ufw allow "Nginx Full"', "sudo ufw allow 'Nginx Full'"] },
      ],
    },
    {
      name: 'iptables -A FORWARD',
      description: 'thêm quy tắc cho chuỗi FORWARD, kiểm soát gói tin đi qua máy (routing/NAT), khác với INPUT (gói tin đến chính máy)',
      flags: [],
      scenarios: [
        { task: 'Cho phép forward gói tin TCP tới cổng 80 qua iptables', accepted: ['sudo iptables -A FORWARD -p tcp --dport 80 -j ACCEPT'] },
      ],
    },
    {
      name: 'iptables -t nat',
      description: 'thao tác trên bảng NAT của iptables, dùng cho port forwarding và masquerading',
      flags: [
        { flag: '-A PREROUTING -p tcp --dport <port> -j DNAT --to-destination <ip:port>', meaning: 'chuyển tiếp (port forward) gói tin đến một cổng sang một địa chỉ/cổng nội bộ khác' },
        { flag: '-A POSTROUTING -j MASQUERADE', meaning: 'thực hiện NAT masquerade, che giấu địa chỉ IP nội bộ khi gói tin ra ngoài' },
      ],
      scenarios: [
        { task: 'Chuyển tiếp cổng 8080 trên máy chủ tới cổng 80 của máy nội bộ 192.168.1.10', accepted: ['sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.10:80'] },
        { task: 'Bật NAT masquerade cho toàn bộ traffic đi ra', accepted: ['sudo iptables -t nat -A POSTROUTING -j MASQUERADE'] },
      ],
    },
    {
      name: 'iptables-save',
      description: 'xuất toàn bộ quy tắc iptables hiện tại ra dạng văn bản, dùng để lưu lại hoặc sao lưu',
      flags: [],
      scenarios: [
        { task: 'Lưu toàn bộ quy tắc iptables hiện tại ra tệp rules.v4', accepted: ['sudo iptables-save > rules.v4'] },
      ],
    },
    {
      name: 'iptables-restore',
      description: 'nạp lại các quy tắc iptables từ một tệp đã lưu bằng iptables-save',
      flags: [],
      scenarios: [
        { task: 'Khôi phục quy tắc iptables từ tệp rules.v4 đã lưu trước đó', accepted: ['sudo iptables-restore < rules.v4'] },
      ],
    },
    {
      name: 'iptables -F',
      description: 'xóa (flush) toàn bộ quy tắc hiện có trong một chuỗi hoặc toàn bộ bảng iptables',
      flags: [],
      scenarios: [
        { task: 'Xóa toàn bộ quy tắc hiện tại trong iptables', accepted: ['sudo iptables -F'] },
      ],
    },
    {
      name: 'fail2ban-client set unbanip',
      description: 'gỡ bỏ (unban) một địa chỉ IP cụ thể đã bị Fail2ban chặn trước hạn',
      flags: [],
      scenarios: [
        { task: 'Gỡ chặn địa chỉ IP 203.0.113.5 khỏi jail sshd của Fail2ban', accepted: ['sudo fail2ban-client set sshd unbanip 203.0.113.5'] },
      ],
    },
  ],
};
