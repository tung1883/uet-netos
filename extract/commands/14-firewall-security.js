const WEEKS = require('../weeks');
module.exports = {
  category: 'firewall-security',
  week: WEEKS.W8_TH13,
  commands: [
    {
      name: 'ufw enable',
      description: 'bật tường lửa UFW (Uncomplicated Firewall)',
      flags: [],
      scenarios: [
        { task: 'Bật tường lửa UFW', accepted: ['sudo ufw enable'] },
      ],
    },
    {
      name: 'ufw disable',
      description: 'tắt tường lửa UFW',
      flags: [],
      scenarios: [
        { task: 'Tắt tường lửa UFW', accepted: ['sudo ufw disable'] },
      ],
    },
    {
      name: 'ufw status',
      description: 'hiển thị trạng thái và danh sách quy tắc hiện tại của UFW',
      flags: [
        { flag: 'verbose', meaning: 'hiển thị trạng thái kèm thông tin chi tiết hơn (chính sách mặc định...)' },
        { flag: 'numbered', meaning: 'hiển thị danh sách quy tắc kèm số thứ tự, dùng để xóa theo số' },
      ],
      scenarios: [
        { task: 'Xem trạng thái và danh sách quy tắc UFW hiện tại', accepted: ['sudo ufw status'] },
        { task: 'Xem danh sách quy tắc UFW kèm số thứ tự để tiện xóa', accepted: ['sudo ufw status numbered'] },
      ],
    },
    {
      name: 'ufw allow',
      description: 'thêm quy tắc cho phép lưu lượng truy cập qua tường lửa',
      flags: [
        { flag: '<port>', meaning: 'cho phép truy cập tới một cổng cụ thể (cả TCP và UDP)' },
        { flag: '<port>/tcp', meaning: 'chỉ cho phép truy cập cổng đó qua giao thức TCP' },
        { flag: 'from <ip>', meaning: 'chỉ cho phép truy cập từ một địa chỉ IP nguồn cụ thể' },
        { flag: 'from <ip> to any port <port>', meaning: 'cho phép một IP nguồn cụ thể truy cập một cổng cụ thể' },
      ],
      scenarios: [
        { task: 'Cho phép truy cập cổng SSH (22) qua UFW', accepted: ['sudo ufw allow 22', 'sudo ufw allow ssh', 'sudo ufw allow 22/tcp'] },
        { task: 'Cho phép truy cập cổng 80 (HTTP) qua UFW', accepted: ['sudo ufw allow 80', 'sudo ufw allow 80/tcp', 'sudo ufw allow http'] },
        { task: 'Chỉ cho phép địa chỉ IP 192.168.1.100 truy cập cổng SSH (22)', accepted: ['sudo ufw allow from 192.168.1.100 to any port 22'] },
      ],
    },
    {
      name: 'ufw deny',
      description: 'thêm quy tắc từ chối (chặn) lưu lượng truy cập qua tường lửa',
      flags: [
        { flag: '<port>', meaning: 'chặn truy cập tới một cổng cụ thể' },
        { flag: 'from <ip>', meaning: 'chặn truy cập từ một địa chỉ IP nguồn cụ thể' },
      ],
      scenarios: [
        { task: 'Chặn toàn bộ truy cập từ địa chỉ IP 203.0.113.5', accepted: ['sudo ufw deny from 203.0.113.5'] },
        { task: 'Chặn truy cập cổng 23 (Telnet) qua UFW', accepted: ['sudo ufw deny 23'] },
      ],
    },
    {
      name: 'ufw delete',
      description: 'xóa một quy tắc đã thêm trong UFW',
      flags: [
        { flag: 'allow <port>', meaning: 'xóa quy tắc allow cho cổng/dịch vụ cụ thể bằng cách lặp lại quy tắc đó với delete' },
        { flag: '<số>', meaning: 'xóa quy tắc theo số thứ tự (lấy từ ufw status numbered)' },
      ],
      scenarios: [
        { task: 'Xóa quy tắc cho phép cổng 80 đã thêm trước đó', accepted: ['sudo ufw delete allow 80'] },
        { task: 'Xóa quy tắc số 3 trong danh sách UFW', accepted: ['sudo ufw delete 3'] },
      ],
    },
    {
      name: 'ufw default',
      description: 'thiết lập chính sách mặc định cho lưu lượng không khớp quy tắc nào (incoming/outgoing)',
      flags: [
        { flag: 'deny incoming', meaning: 'mặc định từ chối mọi kết nối đến trừ khi có quy tắc allow riêng' },
        { flag: 'allow outgoing', meaning: 'mặc định cho phép mọi kết nối đi ra' },
      ],
      scenarios: [
        { task: 'Thiết lập chính sách mặc định từ chối toàn bộ kết nối đến', accepted: ['sudo ufw default deny incoming'] },
      ],
    },
    {
      name: 'iptables',
      description: 'công cụ lọc gói tin cấp thấp trực tiếp thao tác với bảng netfilter của kernel (nền tảng bên dưới UFW)',
      flags: [
        { flag: '-L', meaning: 'liệt kê các quy tắc hiện tại' },
        { flag: '-A INPUT -p tcp --dport <port> -j ACCEPT', meaning: 'thêm quy tắc cho phép gói tin TCP đến một cổng cụ thể' },
        { flag: '-A INPUT -s <ip> -j DROP', meaning: 'thêm quy tắc chặn toàn bộ gói tin từ một địa chỉ IP' },
      ],
      scenarios: [
        { task: 'Liệt kê toàn bộ quy tắc iptables hiện tại', accepted: ['sudo iptables -L'] },
      ],
    },
    {
      name: 'fail2ban-client status',
      description: 'xem trạng thái các jail (quy tắc chống brute-force) đang hoạt động của Fail2ban',
      flags: [],
      scenarios: [
        { task: 'Xem trạng thái các jail đang hoạt động của Fail2ban', accepted: ['sudo fail2ban-client status'] },
      ],
    },
    {
      name: 'fail2ban-client status sshd',
      description: 'xem chi tiết trạng thái jail sshd của Fail2ban, gồm danh sách IP đang bị cấm',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách IP đang bị Fail2ban cấm trong jail sshd', accepted: ['sudo fail2ban-client status sshd'] },
      ],
    },
    {
      name: 'sshd_config: PasswordAuthentication no',
      description: 'tắt đăng nhập SSH bằng mật khẩu, chỉ cho phép xác thực bằng khóa công khai, trong tệp /etc/ssh/sshd_config',
      flags: [],
      scenarios: [
        { task: 'Thiết lập chỉ cho phép đăng nhập SSH bằng khóa (tắt đăng nhập bằng mật khẩu) trong sshd_config', accepted: ['PasswordAuthentication no'] },
      ],
    },
  ],
};
