const WEEKS = require('../weeks');
module.exports = {
  category: 'web-proxy',
  week: WEEKS.W7_TH11,
  commands: [
    {
      name: 'nginx -t',
      description: 'kiểm tra cú pháp cấu hình Nginx trước khi áp dụng, tránh làm sập dịch vụ do lỗi cấu hình',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp cấu hình Nginx trước khi reload', accepted: ['sudo nginx -t'] },
      ],
    },
    {
      name: 'nginx -s reload',
      description: 'nạp lại cấu hình Nginx mà không làm gián đoạn các kết nối đang xử lý',
      flags: [],
      scenarios: [
        { task: 'Nạp lại cấu hình Nginx sau khi sửa file site mà không ngắt kết nối hiện có', accepted: ['sudo nginx -s reload'] },
      ],
    },
    {
      name: 'systemctl restart nginx',
      description: 'khởi động lại hoàn toàn dịch vụ Nginx',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ Nginx', accepted: ['sudo systemctl restart nginx'] },
      ],
    },
    {
      name: 'a2ensite',
      description: '(Apache) bật một virtual host đã được định nghĩa trong sites-available',
      flags: [],
      scenarios: [
        { task: 'Bật virtual host mysite trên Apache', accepted: ['sudo a2ensite mysite'] },
      ],
    },
    {
      name: 'a2dissite',
      description: '(Apache) tắt một virtual host đang được bật',
      flags: [],
      scenarios: [
        { task: 'Tắt virtual host mysite trên Apache', accepted: ['sudo a2dissite mysite'] },
      ],
    },
    {
      name: 'apache2ctl configtest',
      description: '(Apache) kiểm tra cú pháp cấu hình Apache trước khi áp dụng',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp cấu hình Apache', accepted: ['sudo apache2ctl configtest'] },
      ],
    },
    {
      name: 'certbot',
      description: 'công cụ tự động xin và gia hạn chứng chỉ SSL/TLS miễn phí từ Let\'s Encrypt',
      flags: [
        { flag: '--nginx', meaning: 'tự động xin chứng chỉ và cấu hình luôn vào Nginx' },
        { flag: '-d <domain>', meaning: 'chỉ định tên miền cần cấp chứng chỉ' },
        { flag: 'renew', meaning: 'gia hạn các chứng chỉ sắp hết hạn' },
      ],
      scenarios: [
        { task: 'Xin chứng chỉ HTTPS cho domain example.com và tự cấu hình vào Nginx', accepted: ['sudo certbot --nginx -d example.com'] },
        { task: 'Gia hạn các chứng chỉ Let\'s Encrypt sắp hết hạn', accepted: ['sudo certbot renew'] },
      ],
    },
    {
      name: 'openssl req',
      description: 'tạo chứng chỉ SSL tự ký (self-signed) hoặc yêu cầu ký chứng chỉ (CSR)',
      flags: [
        { flag: '-x509', meaning: 'tạo chứng chỉ tự ký thay vì tạo CSR' },
        { flag: '-newkey rsa:<bits>', meaning: 'tạo đồng thời một khóa riêng tư RSA mới' },
        { flag: '-days <n>', meaning: 'chỉ định thời hạn hiệu lực của chứng chỉ (số ngày)' },
        { flag: '-out <tệp>', meaning: 'chỉ định tệp đầu ra lưu chứng chỉ' },
      ],
      scenarios: [
        { task: 'Tạo chứng chỉ SSL tự ký hiệu lực 365 ngày kèm khóa RSA 2048 bit, lưu ra cert.pem', accepted: ['openssl req -x509 -newkey rsa:2048 -days 365 -out cert.pem'] },
      ],
    },
  ],
};
