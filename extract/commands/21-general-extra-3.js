const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-3',
  week: WEEKS.EXTRA_3,
  commands: [
    {
      name: 'apt-get',
      description: 'công cụ quản lý gói dòng lệnh gốc trên Debian/Ubuntu, tương tự apt nhưng ổn định hơn cho script',
      flags: [
        { flag: 'update', meaning: 'cập nhật danh sách gói từ kho phần mềm' },
        { flag: 'install -y <gói>', meaning: 'cài đặt một gói, tự động xác nhận' },
        { flag: 'clean', meaning: 'xóa các tệp .deb đã tải về trong cache, giải phóng dung lượng' },
      ],
      scenarios: [
        { task: 'Cài đặt gói curl bằng apt-get, tự động xác nhận', accepted: ['sudo apt-get install -y curl'] },
        { task: 'Xóa cache các gói .deb đã tải về', accepted: ['sudo apt-get clean'] },
      ],
    },
    {
      name: 'snap',
      description: 'quản lý các gói phần mềm đóng gói dạng snap, tự chứa và cách ly với hệ thống',
      flags: [
        { flag: 'install <gói>', meaning: 'cài đặt một ứng dụng snap' },
        { flag: 'list', meaning: 'liệt kê các gói snap đã cài đặt' },
        { flag: 'remove <gói>', meaning: 'gỡ bỏ một gói snap' },
      ],
      scenarios: [
        { task: 'Cài đặt ứng dụng snap tên "code"', accepted: ['sudo snap install code'] },
        { task: 'Liệt kê các gói snap đã cài trên hệ thống', accepted: ['snap list'] },
      ],
    },
    {
      name: 'systemctl get-default',
      description: 'xem target (chế độ) mặc định hệ thống sẽ khởi động vào, vd multi-user hay graphical',
      flags: [],
      scenarios: [
        { task: 'Xem target mặc định hệ thống đang khởi động vào', accepted: ['systemctl get-default'] },
      ],
    },
    {
      name: 'systemctl set-default',
      description: 'thiết lập target mặc định hệ thống sẽ khởi động vào',
      flags: [],
      scenarios: [
        { task: 'Thiết lập hệ thống khởi động vào chế độ multi-user (không giao diện đồ họa)', accepted: ['sudo systemctl set-default multi-user.target'] },
      ],
    },
    {
      name: 'hostnamectl status',
      description: 'xem thông tin tổng quan về hostname, hệ điều hành và kernel của máy',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin tổng quan hostname và hệ điều hành', accepted: ['hostnamectl status', 'hostnamectl'] },
      ],
    },
    {
      name: 'localectl',
      description: 'xem hoặc thiết lập ngôn ngữ hệ thống và bố cục bàn phím',
      flags: [
        { flag: 'set-locale LANG=<locale>', meaning: 'thiết lập ngôn ngữ hệ thống mặc định' },
      ],
      scenarios: [
        { task: 'Xem cấu hình ngôn ngữ hệ thống hiện tại', accepted: ['localectl'] },
      ],
    },
    {
      name: 'useradd -D',
      description: 'xem các giá trị mặc định hiện tại được dùng khi tạo người dùng mới bằng useradd',
      flags: [],
      scenarios: [
        { task: 'Xem các thiết lập mặc định hiện tại của useradd', accepted: ['useradd -D'] },
      ],
    },
    {
      name: 'pwck',
      description: 'kiểm tra tính toàn vẹn của tệp /etc/passwd, phát hiện lỗi định dạng hoặc dữ liệu không nhất quán',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra tính toàn vẹn của tệp /etc/passwd', accepted: ['sudo pwck'] },
      ],
    },
    {
      name: 'vipw',
      description: 'chỉnh sửa trực tiếp và an toàn tệp /etc/passwd, tự khóa tệp trong lúc sửa để tránh xung đột',
      flags: [],
      scenarios: [
        { task: 'Chỉnh sửa an toàn tệp /etc/passwd', accepted: ['sudo vipw'] },
      ],
    },
    {
      name: 'last reboot',
      description: 'xem lịch sử các lần hệ thống khởi động lại',
      flags: [],
      scenarios: [
        { task: 'Xem lịch sử các lần hệ thống đã khởi động lại', accepted: ['last reboot'] },
      ],
    },
    {
      name: 'uptime -p',
      description: 'hiển thị thời gian hệ thống đã chạy liên tục theo định dạng dễ đọc (pretty)',
      flags: [],
      scenarios: [
        { task: 'Xem thời gian hệ thống đã chạy theo định dạng dễ đọc', accepted: ['uptime -p'] },
      ],
    },
    {
      name: 'df -i',
      description: 'hiển thị số lượng inode đã dùng và còn trống trên các hệ thống tệp (khác với dung lượng byte)',
      flags: [],
      scenarios: [
        { task: 'Xem số lượng inode đã dùng và còn trống của các phân vùng', accepted: ['df -i'] },
      ],
    },
    {
      name: 'ncdu',
      description: 'công cụ phân tích dung lượng đĩa dạng giao diện tương tác (ncurses), dễ dùng hơn du',
      flags: [],
      scenarios: [
        { task: 'Phân tích dung lượng sử dụng của thư mục /var bằng giao diện tương tác', accepted: ['ncdu /var'] },
      ],
    },
    {
      name: 'iproute2 (ip -s link)',
      description: 'hiển thị thống kê lưu lượng (gói tin gửi/nhận, lỗi) trên các giao diện mạng',
      flags: [],
      scenarios: [
        { task: 'Xem thống kê lưu lượng gửi/nhận của các giao diện mạng', accepted: ['ip -s link'] },
      ],
    },
    {
      name: 'route -n',
      description: '(công cụ cũ) hiển thị bảng định tuyến dạng số, không phân giải tên',
      flags: [],
      scenarios: [
        { task: 'Xem bảng định tuyến dạng số bằng lệnh route cũ', accepted: ['route -n'] },
      ],
    },
    {
      name: 'ifconfig',
      description: '(công cụ cũ, đã bị thay thế bởi ip) hiển thị hoặc cấu hình địa chỉ IP của giao diện mạng',
      flags: [],
      scenarios: [
        { task: 'Xem địa chỉ IP các giao diện mạng bằng lệnh ifconfig cũ', accepted: ['ifconfig'] },
      ],
    },
    {
      name: 'nslookup -type=mx',
      description: 'tra cứu bản ghi MX của một tên miền bằng nslookup',
      flags: [],
      scenarios: [
        { task: 'Tra cứu bản ghi MX của example.com bằng nslookup', accepted: ['nslookup -type=mx example.com'] },
      ],
    },
    {
      name: 'ping6',
      description: 'kiểm tra kết nối mạng tới một máy khác qua giao thức IPv6',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra kết nối IPv6 tới một máy chủ bằng ping6', accepted: ['ping6 example.com'] },
      ],
    },
    {
      name: 'curl -v',
      description: 'gửi yêu cầu HTTP kèm hiển thị thông tin chi tiết (verbose) của toàn bộ quá trình kết nối, hữu ích khi debug',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra chi tiết quá trình kết nối HTTP tới http://localhost bằng curl ở chế độ verbose', accepted: ['curl -v http://localhost'] },
      ],
    },
    {
      name: 'curl -s -o /dev/null -w "%{http_code}"',
      description: 'kiểm tra nhanh mã trạng thái HTTP trả về của một URL mà không in nội dung trang',
      flags: [],
      scenarios: [
        { task: 'Chỉ lấy mã trạng thái HTTP (http status code) của http://localhost, không in nội dung', accepted: ['curl -s -o /dev/null -w "%{http_code}" http://localhost'] },
      ],
    },
    {
      name: 'service',
      description: '(công cụ cũ) khởi động, dừng hoặc kiểm tra trạng thái dịch vụ trên các bản phân phối cũ hơn, trước khi systemd phổ biến',
      flags: [
        { flag: '<tên> status', meaning: 'kiểm tra trạng thái của một dịch vụ' },
        { flag: '<tên> restart', meaning: 'khởi động lại một dịch vụ' },
      ],
      scenarios: [
        { task: 'Kiểm tra trạng thái dịch vụ nginx bằng lệnh service cũ', accepted: ['sudo service nginx status', 'service nginx status'] },
      ],
    },
    {
      name: 'chkconfig',
      description: '(công cụ cũ trên RHEL/CentOS) quản lý dịch vụ nào tự khởi động cùng hệ thống, trước khi systemd phổ biến',
      flags: [
        { flag: '--list', meaning: 'liệt kê trạng thái tự khởi động của các dịch vụ' },
      ],
      scenarios: [
        { task: 'Liệt kê trạng thái tự khởi động của các dịch vụ bằng chkconfig cũ', accepted: ['chkconfig --list'] },
      ],
    },
    {
      name: 'rpm -qa',
      description: 'liệt kê tất cả các gói đã cài đặt trên hệ thống RPM-based (RHEL/CentOS/Fedora)',
      flags: [],
      scenarios: [
        { task: 'Liệt kê tất cả gói đã cài trên hệ thống RPM-based', accepted: ['rpm -qa'] },
      ],
    },
    {
      name: 'yum install',
      description: '(RHEL/CentOS cũ) cài đặt một gói phần mềm cùng các gói phụ thuộc',
      flags: [
        { flag: '-y', meaning: 'tự động xác nhận cài đặt' },
      ],
      scenarios: [
        { task: 'Cài đặt gói httpd trên hệ thống CentOS, tự động xác nhận', accepted: ['sudo yum install -y httpd'] },
      ],
    },
    {
      name: 'dnf install',
      description: '(Fedora/RHEL hiện đại) cài đặt một gói phần mềm, thay thế cho yum',
      flags: [
        { flag: '-y', meaning: 'tự động xác nhận cài đặt' },
      ],
      scenarios: [
        { task: 'Cài đặt gói httpd bằng dnf, tự động xác nhận', accepted: ['sudo dnf install -y httpd'] },
      ],
    },
    {
      name: 'firewall-cmd',
      description: '(RHEL/CentOS) công cụ quản lý tường lửa firewalld, tương đương vai trò của ufw trên Ubuntu',
      flags: [
        { flag: '--add-port=<port>/tcp --permanent', meaning: 'mở một cổng TCP vĩnh viễn (bền qua reboot)' },
        { flag: '--reload', meaning: 'nạp lại cấu hình tường lửa để áp dụng thay đổi permanent' },
        { flag: '--list-all', meaning: 'liệt kê toàn bộ quy tắc hiện tại của zone mặc định' },
      ],
      scenarios: [
        { task: 'Mở cổng 80/tcp vĩnh viễn bằng firewalld rồi áp dụng ngay', accepted: ['sudo firewall-cmd --add-port=80/tcp --permanent && sudo firewall-cmd --reload'] },
        { task: 'Xem toàn bộ quy tắc hiện tại của firewalld', accepted: ['sudo firewall-cmd --list-all'] },
      ],
    },
    {
      name: 'setenforce',
      description: '(RHEL/CentOS) chuyển chế độ SELinux giữa Enforcing và Permissive tạm thời (không bền qua reboot)',
      flags: [
        { flag: '0', meaning: 'chuyển SELinux sang chế độ Permissive (chỉ ghi log, không chặn)' },
        { flag: '1', meaning: 'chuyển SELinux sang chế độ Enforcing (chặn và ghi log)' },
      ],
      scenarios: [
        { task: 'Chuyển SELinux tạm thời sang chế độ Permissive để debug', accepted: ['sudo setenforce 0'] },
      ],
    },
    {
      name: 'getenforce',
      description: 'xem chế độ SELinux hiện tại đang hoạt động (Enforcing/Permissive/Disabled)',
      flags: [],
      scenarios: [
        { task: 'Xem chế độ SELinux hiện tại của hệ thống', accepted: ['getenforce'] },
      ],
    },
    {
      name: 'semanage',
      description: '(RHEL/CentOS) quản lý các chính sách SELinux: context, cổng mạng, boolean',
      flags: [
        { flag: 'port -a -t <type> -p tcp <port>', meaning: 'thêm một cổng TCP vào danh sách context cho phép của SELinux' },
      ],
      scenarios: [
        { task: 'Cho phép SELinux chấp nhận cổng TCP 8080 với context http_port_t', accepted: ['sudo semanage port -a -t http_port_t -p tcp 8080'] },
      ],
    },
  ],
};
