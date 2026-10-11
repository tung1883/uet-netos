const WEEKS = require('../weeks');
module.exports = {
  category: 'mail',
  week: WEEKS.W9_TH15,
  commands: [
    {
      name: 'systemctl restart postfix',
      description: 'khởi động lại dịch vụ Postfix (MTA - mail transfer agent xử lý gửi/nhận thư qua SMTP)',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ Postfix sau khi sửa cấu hình', accepted: ['sudo systemctl restart postfix'] },
      ],
    },
    {
      name: 'postfix check',
      description: 'kiểm tra cú pháp cấu hình Postfix trước khi áp dụng',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp cấu hình Postfix', accepted: ['sudo postfix check'] },
      ],
    },
    {
      name: 'postqueue -p',
      description: 'xem danh sách thư đang chờ trong hàng đợi gửi của Postfix',
      flags: [],
      scenarios: [
        { task: 'Xem hàng đợi thư đang chờ gửi của Postfix', accepted: ['postqueue -p', 'mailq'] },
      ],
    },
    {
      name: 'systemctl restart dovecot',
      description: 'khởi động lại dịch vụ Dovecot (xử lý nhận thư qua POP3/IMAP)',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ Dovecot sau khi sửa cấu hình IMAP', accepted: ['sudo systemctl restart dovecot'] },
      ],
    },
    {
      name: 'doveconf -n',
      description: 'hiển thị cấu hình Dovecot hiện tại đang được áp dụng (khác với giá trị mặc định)',
      flags: [],
      scenarios: [
        { task: 'Xem cấu hình Dovecot hiện tại khác với mặc định', accepted: ['doveconf -n'] },
      ],
    },
    {
      name: 'mail',
      description: 'gửi hoặc đọc thư từ dòng lệnh, dùng để kiểm thử nhanh dịch vụ mail nội bộ',
      flags: [
        { flag: '-s "<tiêu đề>" <địa chỉ>', meaning: 'gửi thư với tiêu đề và địa chỉ người nhận chỉ định' },
      ],
      scenarios: [
        { task: 'Gửi thư kiểm thử với tiêu đề "Test" tới alice@example.com', accepted: ['mail -s "Test" alice@example.com', "mail -s 'Test' alice@example.com"] },
      ],
    },
    {
      name: 'telnet (SMTP test)',
      description: 'kết nối thủ công vào cổng 25 của mail server để kiểm thử giao thức SMTP trực tiếp',
      flags: [],
      scenarios: [
        { task: 'Kết nối thủ công tới cổng SMTP (25) của máy chủ mail.example.com để kiểm thử', accepted: ['telnet mail.example.com 25'] },
      ],
    },
  ],
};
