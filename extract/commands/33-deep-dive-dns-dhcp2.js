const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-dns-dhcp2',
  week: WEEKS.W5_TH8,
  commands: [
    {
      name: 'dig AXFR',
      description: 'thử thực hiện truyền toàn bộ zone (zone transfer) từ một DNS server, dùng để kiểm thử bảo mật cấu hình DNS',
      flags: [],
      scenarios: [
        { task: 'Thử zone transfer toàn bộ zone example.com từ DNS server ns1.example.com', accepted: ['dig AXFR example.com @ns1.example.com'] },
      ],
    },
    {
      name: 'dig +trace',
      description: 'theo dõi toàn bộ quá trình phân giải DNS từ root server xuống tới server có thẩm quyền cuối cùng',
      flags: [],
      scenarios: [
        { task: 'Theo dõi toàn bộ quá trình phân giải DNS của example.com từ root server', accepted: ['dig +trace example.com'] },
      ],
    },
    {
      name: 'dig TXT',
      description: 'tra cứu bản ghi TXT của một tên miền, thường dùng cho xác minh domain hoặc cấu hình SPF/DKIM',
      flags: [],
      scenarios: [
        { task: 'Tra cứu bản ghi TXT của example.com (vd: kiểm tra SPF)', accepted: ['dig example.com TXT', 'dig TXT example.com'] },
      ],
    },
    {
      name: 'dig SOA',
      description: 'tra cứu bản ghi SOA (Start of Authority) của một zone, chứa thông tin về name server chính và serial number',
      flags: [],
      scenarios: [
        { task: 'Tra cứu bản ghi SOA của zone example.com', accepted: ['dig example.com SOA', 'dig SOA example.com'] },
      ],
    },
    {
      name: 'rndc reload',
      description: 'yêu cầu dịch vụ BIND9 nạp lại cấu hình/zone mà không cần khởi động lại toàn bộ dịch vụ',
      flags: [],
      scenarios: [
        { task: 'Yêu cầu BIND9 nạp lại toàn bộ zone mà không restart dịch vụ', accepted: ['sudo rndc reload'] },
      ],
    },
    {
      name: 'rndc flush',
      description: 'xóa toàn bộ cache phân giải DNS hiện tại trên BIND9',
      flags: [],
      scenarios: [
        { task: 'Xóa toàn bộ cache DNS hiện tại trên BIND9', accepted: ['sudo rndc flush'] },
      ],
    },
    {
      name: 'systemd-resolve --flush-caches',
      description: 'xóa cache phân giải DNS cục bộ được quản lý bởi systemd-resolved',
      flags: [],
      scenarios: [
        { task: 'Xóa cache DNS cục bộ của systemd-resolved', accepted: ['sudo systemd-resolve --flush-caches', 'sudo resolvectl flush-caches'] },
      ],
    },
    {
      name: 'dhcp-lease-list',
      description: 'liệt kê danh sách các địa chỉ IP đã được DHCP server cấp phát (lease) cho các máy khách',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các địa chỉ IP đã được DHCP server cấp phát', accepted: ['dhcp-lease-list'] },
      ],
    },
    {
      name: 'cat /var/lib/dhcp/dhcpd.leases',
      description: 'xem trực tiếp tệp lưu thông tin các lease DHCP đã cấp trên Ubuntu (isc-dhcp-server)',
      flags: [],
      scenarios: [
        { task: 'Xem trực tiếp nội dung tệp lease DHCP trên Ubuntu', accepted: ['cat /var/lib/dhcp/dhcpd.leases'] },
      ],
    },
    {
      name: 'systemctl restart isc-dhcp-server',
      description: 'khởi động lại dịch vụ DHCP server sau khi chỉnh sửa tệp cấu hình dhcpd.conf',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ DHCP server sau khi sửa dhcpd.conf', accepted: ['sudo systemctl restart isc-dhcp-server'] },
      ],
    },
  ],
};
