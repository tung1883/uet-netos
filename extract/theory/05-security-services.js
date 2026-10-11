const WEEKS = require('../weeks');
module.exports = [
  {
    text: 'Vì sao nên tắt đăng nhập SSH bằng mật khẩu và chỉ cho phép xác thực bằng khóa (key-based)?',
    options: [
      'Để tiết kiệm băng thông mạng',
      'Để chống lại tấn công brute-force dò mật khẩu, vì khóa riêng tư khó bị đoán hơn nhiều',
      'Để tăng tốc độ kết nối SSH',
      'Để cho phép nhiều người cùng đăng nhập một lúc',
    ],
    correctIndex: 1,
    explanation: 'Xác thực bằng khóa loại bỏ nguy cơ bị dò mật khẩu qua brute-force, vì private key gần như không thể đoán được.',
  },
  {
    text: 'Chính sách mặc định "deny incoming" trên tường lửa UFW có ý nghĩa gì?',
    options: [
      'Chặn mọi kết nối đến trừ khi có quy tắc allow riêng cho phép',
      'Chặn mọi kết nối đi ra',
      'Cho phép mọi kết nối đến',
      'Tắt hoàn toàn tường lửa',
    ],
    correctIndex: 0,
    explanation: 'Chính sách "default deny incoming" từ chối mọi traffic đến theo mặc định, chỉ các cổng/dịch vụ được allow tường minh mới được phép.',
  },
  {
    text: 'Fail2ban hoạt động dựa trên cơ chế nào để bảo vệ dịch vụ?',
    options: [
      'Mã hóa toàn bộ lưu lượng mạng',
      'Theo dõi log, phát hiện các lần đăng nhập thất bại lặp lại và tự động chặn IP nguồn (thêm vào firewall)',
      'Tự động đổi mật khẩu người dùng',
      'Tắt dịch vụ khi phát hiện tấn công',
    ],
    correctIndex: 1,
    explanation: 'Fail2ban giám sát log (vd: log SSH), phát hiện brute-force dựa trên số lần thất bại rồi tự thêm rule firewall chặn IP đó.',
  },
  {
    text: 'Nguyên lý "principle of least privilege" (quyền tối thiểu) trong bảo mật nghĩa là gì?',
    options: [
      'Mọi người dùng nên có quyền root để thuận tiện',
      'Mỗi tài khoản/tiến trình chỉ nên có quyền tối thiểu cần thiết để thực hiện công việc của nó',
      'Chỉ root được phép đăng nhập hệ thống',
      'Tắt toàn bộ các dịch vụ không dùng tới',
    ],
    correctIndex: 1,
    explanation: 'Nguyên lý này giảm thiểu rủi ro bằng cách giới hạn quyền truy cập ở mức tối thiểu cần thiết cho từng tác vụ.',
  },
  {
    text: 'Vì sao nên kiểm tra cú pháp cấu hình (vd: nginx -t, sshd -t) trước khi reload/restart dịch vụ?',
    options: [
      'Để tăng tốc độ dịch vụ',
      'Để tránh dịch vụ bị sập hoặc không khởi động lại được do lỗi cú pháp cấu hình',
      'Không có lý do thực sự, chỉ là thói quen',
      'Để tự động sao lưu cấu hình',
    ],
    correctIndex: 1,
    explanation: 'Kiểm tra cú pháp trước giúp phát hiện lỗi cấu hình sớm, tránh làm gián đoạn dịch vụ đang chạy khi áp dụng thay đổi sai.',
  },
  {
    text: 'Container (như Docker) khác máy ảo (VM) truyền thống ở điểm cơ bản nào?',
    options: [
      'Container có kernel riêng hoàn toàn tách biệt với host',
      'Container chia sẻ chung kernel của hệ điều hành host, nhẹ hơn và khởi động nhanh hơn VM',
      'Container luôn chạy chậm hơn VM',
      'Container không thể chạy nhiều ứng dụng',
    ],
    correctIndex: 1,
    explanation: 'Container ảo hóa ở mức hệ điều hành, chia sẻ chung kernel host, nên nhẹ và khởi động nhanh hơn VM (vốn ảo hóa cả phần cứng).',
  },
  {
    text: 'Docker image và Docker container khác nhau thế nào?',
    options: [
      'Image là bản mẫu tĩnh (template) chỉ đọc, container là một thực thể đang chạy được tạo ra từ image',
      'Container là bản mẫu, image là thực thể đang chạy',
      'Không có sự khác biệt',
      'Image chỉ dùng để lưu log',
    ],
    correctIndex: 0,
    explanation: 'Image giống như một bản đóng gói ứng dụng chỉ đọc; container là instance đang chạy được khởi tạo từ image đó.',
  },
  {
    text: 'Khi mount volume cho Docker container bằng -v <host>:<container>, mục đích chính là gì?',
    options: [
      'Giúp dữ liệu tồn tại bền vững (persistent) ngay cả khi container bị xóa, và chia sẻ dữ liệu giữa host và container',
      'Giúp container chạy nhanh hơn',
      'Giúp container tự khởi động cùng hệ thống',
      'Mã hóa dữ liệu trong container',
    ],
    correctIndex: 0,
    explanation: 'Volume mapping lưu dữ liệu bên ngoài vòng đời container, đảm bảo dữ liệu không mất khi container bị xóa/tạo lại.',
  },
  {
    text: 'Vì sao nên sao lưu (backup) cả dữ liệu lẫn tệp cấu hình dịch vụ, không chỉ riêng dữ liệu?',
    options: [
      'Tệp cấu hình không bao giờ thay đổi nên không cần backup',
      'Để có thể khôi phục đầy đủ trạng thái hoạt động của dịch vụ, không chỉ dữ liệu mà cả cách dịch vụ được thiết lập',
      'Tệp cấu hình chiếm dung lượng lớn nhất',
      'Chỉ cần backup dữ liệu là đủ khôi phục hệ thống',
    ],
    correctIndex: 1,
    explanation: 'Thiếu tệp cấu hình, dữ liệu khôi phục được nhưng dịch vụ có thể không hoạt động đúng như trước khi backup.',
    week: WEEKS.W10_TH17,
  },
  {
    text: 'Chế độ rescue/single-user mode trên Linux dùng để làm gì?',
    options: [
      'Chạy hệ thống ở chế độ tối thiểu để khắc phục sự cố khi hệ thống không boot/hoạt động bình thường được',
      'Tăng hiệu năng hệ thống',
      'Chạy nhiều dịch vụ hơn bình thường',
      'Tự động cập nhật toàn bộ phần mềm',
    ],
    correctIndex: 0,
    explanation: 'Rescue mode khởi động với số dịch vụ tối thiểu, cho phép quản trị viên chẩn đoán và sửa lỗi hệ thống (vd: quên mật khẩu root, lỗi fstab).',
    week: WEEKS.W11_TH19,
  },
];
