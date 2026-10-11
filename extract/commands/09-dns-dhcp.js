const WEEKS = require('../weeks');
module.exports = {
  category: 'dns-dhcp',
  week: WEEKS.W5_TH8,
  commands: [
    {
      name: 'dig',
      description: 'truy vấn chi tiết thông tin DNS của một tên miền (bản ghi A, MX, NS...)',
      flags: [
        { flag: '<domain>', meaning: 'truy vấn bản ghi A (địa chỉ IPv4) mặc định của tên miền' },
        { flag: '<domain> MX', meaning: 'truy vấn bản ghi MX (mail exchange) của tên miền' },
        { flag: '<domain> NS', meaning: 'truy vấn bản ghi NS (name server) của tên miền' },
        { flag: '-x <ip>', meaning: 'truy vấn ngược (reverse lookup) từ địa chỉ IP ra tên miền' },
        { flag: '+short', meaning: 'chỉ hiển thị kết quả ngắn gọn, bỏ qua phần thông tin chi tiết' },
        { flag: '@<server>', meaning: 'chỉ định DNS server cụ thể để gửi truy vấn tới' },
      ],
      scenarios: [
        { task: 'Tra cứu bản ghi A của tên miền example.com', accepted: ['dig example.com'] },
        { task: 'Tra cứu bản ghi MX của tên miền example.com', accepted: ['dig example.com MX', 'dig MX example.com'] },
        { task: 'Tra cứu ngược tên miền từ địa chỉ IP 8.8.8.8', accepted: ['dig -x 8.8.8.8'] },
        { task: 'Tra cứu bản ghi A của example.com chỉ hiển thị kết quả ngắn gọn', accepted: ['dig example.com +short'] },
        { task: 'Tra cứu example.com sử dụng DNS server 192.168.1.1', accepted: ['dig @192.168.1.1 example.com'] },
      ],
    },
    {
      name: 'nslookup',
      description: 'công cụ tra cứu DNS tương tác hoặc dòng lệnh, đơn giản hơn dig',
      flags: [],
      scenarios: [
        { task: 'Tra cứu địa chỉ IP của tên miền example.com bằng nslookup', accepted: ['nslookup example.com'] },
      ],
    },
    {
      name: 'host',
      description: 'công cụ tra cứu DNS đơn giản, thường dùng kiểm tra nhanh phân giải tên',
      flags: [
        { flag: '-t <loại>', meaning: 'chỉ định loại bản ghi cần tra cứu (A, MX, NS...)' },
      ],
      scenarios: [
        { task: 'Tra cứu nhanh địa chỉ IP của example.com bằng host', accepted: ['host example.com'] },
      ],
    },
    {
      name: 'resolvectl',
      description: 'xem trạng thái và cấu hình phân giải DNS hiện tại được quản lý bởi systemd-resolved',
      flags: [
        { flag: 'status', meaning: 'hiển thị DNS server hiện đang được dùng cho từng giao diện mạng' },
      ],
      scenarios: [
        { task: 'Xem DNS server hiện tại hệ thống đang sử dụng', accepted: ['resolvectl status'] },
      ],
    },
    {
      name: 'systemctl restart bind9',
      description: 'khởi động lại dịch vụ DNS server BIND9 sau khi chỉnh sửa tệp zone hoặc cấu hình',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ BIND9 sau khi sửa tệp zone', accepted: ['sudo systemctl restart bind9'] },
      ],
    },
    {
      name: 'named-checkzone',
      description: 'kiểm tra cú pháp một tệp zone DNS của BIND trước khi áp dụng, tránh gây lỗi dịch vụ',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp tệp zone db.example.com cho domain example.com', accepted: ['named-checkzone example.com /etc/bind/db.example.com'] },
      ],
    },
    {
      name: 'named-checkconf',
      description: 'kiểm tra cú pháp tệp cấu hình chính của BIND (named.conf) trước khi áp dụng',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp tệp cấu hình named.conf', accepted: ['named-checkconf'] },
      ],
    },
    {
      name: 'dhclient',
      description: 'yêu cầu hoặc gia hạn địa chỉ IP động từ máy chủ DHCP cho một giao diện mạng',
      flags: [
        { flag: '-r <iface>', meaning: 'giải phóng (release) địa chỉ IP đã thuê trên giao diện mạng' },
      ],
      scenarios: [
        { task: 'Yêu cầu xin địa chỉ IP mới từ DHCP server cho giao diện eth0', accepted: ['sudo dhclient eth0'] },
        { task: 'Giải phóng địa chỉ IP DHCP đang thuê trên eth0', accepted: ['sudo dhclient -r eth0'] },
      ],
    },
    {
      name: 'systemctl status isc-dhcp-server',
      description: 'kiểm tra trạng thái hoạt động của dịch vụ DHCP server trên Ubuntu',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra trạng thái dịch vụ DHCP server trên Ubuntu', accepted: ['sudo systemctl status isc-dhcp-server'] },
      ],
    },
  ],
};
