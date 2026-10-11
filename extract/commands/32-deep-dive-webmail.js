const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-webmail',
  week: WEEKS.W7_TH11,
  commands: [
    {
      name: 'nginx -V',
      description: 'hiển thị phiên bản Nginx cùng các module được biên dịch sẵn',
      flags: [],
      scenarios: [
        { task: 'Xem phiên bản Nginx và các module được biên dịch kèm theo', accepted: ['nginx -V'] },
      ],
    },
    {
      name: 'nginx -T',
      description: 'kiểm tra cú pháp cấu hình Nginx và in ra toàn bộ nội dung cấu hình đã được gộp (bao gồm các file include)',
      flags: [],
      scenarios: [
        { task: 'Xem toàn bộ cấu hình Nginx đã được gộp từ các file include', accepted: ['sudo nginx -T'] },
      ],
    },
    {
      name: 'ln -s (nginx sites-enabled)',
      description: 'tạo liên kết mềm từ sites-available sang sites-enabled để kích hoạt một virtual host trên Nginx',
      flags: [],
      scenarios: [
        { task: 'Kích hoạt virtual host mysite.conf bằng cách tạo symlink từ sites-available sang sites-enabled', accepted: ['sudo ln -s /etc/nginx/sites-available/mysite.conf /etc/nginx/sites-enabled/'] },
      ],
    },
    {
      name: 'certbot certificates',
      description: 'liệt kê các chứng chỉ SSL hiện đang được quản lý bởi certbot, kèm ngày hết hạn',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các chứng chỉ SSL hiện có cùng ngày hết hạn', accepted: ['sudo certbot certificates'] },
      ],
    },
    {
      name: 'certbot --dry-run',
      description: 'thử nghiệm quá trình gia hạn chứng chỉ mà không thực sự thay đổi chứng chỉ hiện có',
      flags: [],
      scenarios: [
        { task: 'Thử nghiệm gia hạn chứng chỉ mà không thay đổi chứng chỉ thật', accepted: ['sudo certbot renew --dry-run'] },
      ],
    },
    {
      name: 'openssl x509 -text',
      description: 'xem thông tin chi tiết của một chứng chỉ SSL (thời hạn, chủ thể, CA cấp)',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết của tệp chứng chỉ cert.pem', accepted: ['openssl x509 -in cert.pem -text -noout'] },
      ],
    },
    {
      name: 'openssl s_client',
      description: 'kết nối thử tới một máy chủ HTTPS để kiểm tra chứng chỉ SSL đang được phục vụ',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra chứng chỉ SSL đang được phục vụ bởi example.com cổng 443', accepted: ['openssl s_client -connect example.com:443'] },
      ],
    },
    {
      name: 'curl -k',
      description: 'gửi yêu cầu HTTPS nhưng bỏ qua việc xác thực chứng chỉ SSL, dùng khi test với chứng chỉ tự ký',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra kết nối HTTPS tới https://localhost bỏ qua xác thực chứng chỉ (dùng với self-signed cert)', accepted: ['curl -k https://localhost'] },
      ],
    },
    {
      name: 'tail -f (nginx access log)',
      description: 'theo dõi liên tục log truy cập của Nginx để kiểm tra request đang tới',
      flags: [],
      scenarios: [
        { task: 'Theo dõi liên tục log truy cập của Nginx', accepted: ['tail -f /var/log/nginx/access.log'] },
        { task: 'Theo dõi liên tục log lỗi của Nginx', accepted: ['tail -f /var/log/nginx/error.log'] },
      ],
    },
    {
      name: 'postconf',
      description: 'xem hoặc thiết lập các tham số cấu hình của Postfix mà không cần sửa trực tiếp tệp main.cf',
      flags: [
        { flag: '-e "<key>=<value>"', meaning: 'thiết lập một tham số cấu hình Postfix' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ tham số cấu hình hiện tại của Postfix', accepted: ['postconf'] },
        { task: 'Thiết lập tham số myhostname của Postfix thành mail.example.com', accepted: ['sudo postconf -e "myhostname=mail.example.com"'] },
      ],
    },
    {
      name: 'dovecot -n',
      description: 'kiểm tra cú pháp cấu hình Dovecot trước khi áp dụng, tránh làm sập dịch vụ mail',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp cấu hình Dovecot trước khi restart dịch vụ', accepted: ['doveconf -n', 'dovecot -n'] },
      ],
    },
  ],
};
