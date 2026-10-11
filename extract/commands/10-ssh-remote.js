const WEEKS = require('../weeks');
module.exports = {
  category: 'ssh-remote',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ssh',
      description: 'kết nối và đăng nhập từ xa vào một máy chủ khác qua giao thức SSH được mã hóa',
      flags: [
        { flag: '-p <port>', meaning: 'chỉ định cổng SSH khác với mặc định 22' },
        { flag: '-i <keyfile>', meaning: 'chỉ định tệp khóa riêng tư (private key) dùng để xác thực' },
        { flag: '-L <local>:<host>:<remote>', meaning: 'thiết lập port forwarding cục bộ (local forwarding)' },
        { flag: '-v', meaning: 'hiển thị thông tin debug chi tiết quá trình kết nối' },
        { flag: '-N', meaning: 'không thực thi lệnh từ xa, chỉ dùng để thiết lập forwarding' },
        { flag: '-X', meaning: 'bật chuyển tiếp X11, cho phép chạy ứng dụng đồ họa từ xa hiển thị cục bộ' },
        { flag: '-o StrictHostKeyChecking=no', meaning: 'bỏ qua việc xác nhận thủ công host key khi kết nối lần đầu' },
      ],
      scenarios: [
        { task: 'Kết nối SSH tới máy chủ 192.168.1.10 với tài khoản student', accepted: ['ssh student@192.168.1.10'] },
        { task: 'Kết nối SSH tới 192.168.1.10 sử dụng cổng 2222', accepted: ['ssh -p 2222 student@192.168.1.10'] },
        { task: 'Kết nối SSH tới server dùng khóa riêng tư ~/.ssh/id_rsa_lab', accepted: ['ssh -i ~/.ssh/id_rsa_lab student@192.168.1.10'] },
        { task: 'Thực thi lệnh "uptime" từ xa trên máy chủ 192.168.1.10 mà không mở phiên tương tác', accepted: ['ssh student@192.168.1.10 uptime', 'ssh student@192.168.1.10 "uptime"'] },
        { task: 'Kết nối SSH tới 192.168.1.10 ở chế độ debug chi tiết để chẩn đoán lỗi kết nối', accepted: ['ssh -v student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh-keygen',
      description: 'tạo một cặp khóa công khai/riêng tư (public/private key) dùng cho xác thực SSH',
      flags: [
        { flag: '-t rsa', meaning: 'chỉ định thuật toán khóa là RSA' },
        { flag: '-b <bits>', meaning: 'chỉ định độ dài khóa (số bit), ví dụ 4096' },
        { flag: '-f <tệp>', meaning: 'chỉ định tên tệp lưu khóa' },
      ],
      scenarios: [
        { task: 'Tạo cặp khóa SSH loại RSA độ dài 4096 bit', accepted: ['ssh-keygen -t rsa -b 4096'] },
      ],
    },
    {
      name: 'ssh-copy-id',
      description: 'sao chép khóa công khai (public key) của người dùng hiện tại sang máy chủ từ xa để thiết lập đăng nhập không cần mật khẩu',
      flags: [
        { flag: '-i <keyfile>', meaning: 'chỉ định tệp khóa công khai cụ thể cần sao chép' },
      ],
      scenarios: [
        { task: 'Sao chép public key của người dùng hiện tại sang tài khoản student trên máy chủ 192.168.10.20', accepted: ['ssh-copy-id student@192.168.10.20'] },
        { task: 'Sao chép public key tới tài khoản root trên máy chủ 10.0.0.5 dùng cổng 2222', accepted: ['ssh-copy-id -p 2222 root@10.0.0.5'] },
      ],
    },
    {
      name: 'scp',
      description: 'sao chép tệp/thư mục một cách an toàn giữa hai máy qua giao thức SSH',
      flags: [
        { flag: '-r', meaning: 'sao chép đệ quy, dùng khi sao chép thư mục' },
        { flag: '-P <port>', meaning: 'chỉ định cổng SSH khác mặc định (lưu ý P viết hoa, khác với ssh -p)' },
      ],
      scenarios: [
        { task: 'Sao chép tệp local.txt lên thư mục /tmp trên máy chủ 192.168.1.10 với tài khoản student', accepted: ['scp local.txt student@192.168.1.10:/tmp'] },
        { task: 'Sao chép đệ quy thư mục /data từ máy chủ remote về thư mục hiện tại', accepted: ['scp -r student@192.168.1.10:/data .'] },
      ],
    },
    {
      name: 'sftp',
      description: 'truyền tệp tương tác qua giao thức SFTP (SSH File Transfer Protocol)',
      flags: [
        { flag: '-P <port>', meaning: 'chỉ định cổng SSH khác mặc định' },
      ],
      scenarios: [
        { task: 'Kết nối SFTP tới máy chủ 192.168.1.10 với tài khoản student', accepted: ['sftp student@192.168.1.10'] },
      ],
    },
    {
      name: 'systemctl restart ssh',
      description: 'khởi động lại dịch vụ SSH server sau khi chỉnh sửa /etc/ssh/sshd_config',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ SSH server sau khi sửa sshd_config', accepted: ['sudo systemctl restart ssh', 'sudo systemctl restart sshd'] },
      ],
    },
    {
      name: 'sshd -t',
      description: 'kiểm tra cú pháp tệp cấu hình SSH server (sshd_config) trước khi áp dụng, tránh khóa luôn kết nối SSH do lỗi cấu hình',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp tệp cấu hình sshd_config trước khi khởi động lại dịch vụ', accepted: ['sudo sshd -t'] },
      ],
    },
  ],
};
