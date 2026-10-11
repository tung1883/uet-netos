module.exports = [
  {
    text: 'Thành phần nào của Linux chịu trách nhiệm giao tiếp trực tiếp với phần cứng và quản lý tài nguyên hệ thống?',
    options: ['Shell', 'Kernel', 'Desktop Environment', 'Trình biên dịch'],
    correctIndex: 1,
    explanation: 'Kernel là nhân hệ điều hành, trực tiếp quản lý CPU, bộ nhớ, thiết bị phần cứng và cung cấp dịch vụ cho tầng trên.',
  },
  {
    text: 'Shell trong Linux có vai trò gì?',
    options: [
      'Quản lý trực tiếp bộ nhớ vật lý',
      'Là trình thông dịch nhận lệnh từ người dùng và chuyển tới kernel',
      'Là trình điều khiển thiết bị (driver)',
      'Là hệ thống tệp mặc định của Linux',
    ],
    correctIndex: 1,
    explanation: 'Shell là lớp giao diện dòng lệnh, nhận lệnh người dùng, thông dịch và yêu cầu kernel thực thi.',
  },
  {
    text: 'Thư mục /etc trong Linux dùng để chứa gì?',
    options: ['Tệp nhị phân thực thi', 'Tệp cấu hình hệ thống', 'Thư mục home người dùng', 'Tệp thiết bị phần cứng'],
    correctIndex: 1,
    explanation: '/etc theo chuẩn FHS là nơi lưu các tệp cấu hình hệ thống và ứng dụng.',
  },
  {
    text: 'Thư mục /var dùng để lưu loại dữ liệu nào?',
    options: ['Dữ liệu tĩnh không đổi', 'Dữ liệu biến đổi như log, mail queue, cache', 'Tệp thiết bị', 'Thư viện chia sẻ'],
    correctIndex: 1,
    explanation: '/var (variable) chứa dữ liệu thay đổi thường xuyên: log hệ thống, hàng đợi mail, cache.',
  },
  {
    text: 'Thư mục /home dùng để làm gì?',
    options: ['Chứa tệp cấu hình toàn hệ thống', 'Chứa thư mục cá nhân của từng người dùng', 'Chứa mã nguồn kernel', 'Chứa tệp thiết bị'],
    correctIndex: 1,
    explanation: '/home chứa thư mục làm việc riêng của mỗi tài khoản người dùng thường (không phải root).',
  },
  {
    text: 'Thư mục /dev chứa gì?',
    options: ['Tệp cấu hình mạng', 'Tệp thiết bị đại diện cho phần cứng', 'Script khởi động hệ thống', 'Tệp log hệ thống'],
    correctIndex: 1,
    explanation: '/dev chứa các tệp đặc biệt đại diện cho thiết bị phần cứng (ổ đĩa, terminal...).',
  },
  {
    text: 'Thư mục /root khác với /home như thế nào?',
    options: [
      '/root là thư mục home của người dùng root, nằm ở gốc thay vì trong /home',
      '/root chứa toàn bộ hệ thống tệp gốc',
      '/root chỉ chứa tệp cấu hình mạng',
      'Không có sự khác biệt',
    ],
    correctIndex: 0,
    explanation: '/root là thư mục home riêng của tài khoản root, tách biệt khỏi /home để đảm bảo truy cập được ngay cả khi /home không mount được.',
  },
  {
    text: 'Thư mục /bin và /usr/bin thường chứa gì?',
    options: ['Tệp cấu hình', 'Các tệp lệnh thực thi cơ bản', 'Thư mục home người dùng', 'Tệp thiết bị'],
    correctIndex: 1,
    explanation: '/bin, /usr/bin chứa các chương trình thực thi (lệnh) mà người dùng và hệ thống dùng chung.',
  },
  {
    text: 'Khác biệt chính giữa shell tương tác (interactive) và script shell là gì?',
    options: [
      'Không có khác biệt',
      'Shell tương tác nhận lệnh trực tiếp từ bàn phím, script đọc lệnh tuần tự từ tệp',
      'Script shell không thể dùng biến',
      'Shell tương tác chỉ chạy được trên root',
    ],
    correctIndex: 1,
    explanation: 'Shell tương tác xử lý lệnh gõ trực tiếp; một script là tệp chứa chuỗi lệnh được thực thi tuần tự.',
  },
  {
    text: 'Lệnh nào dùng để biết loại shell hiện tại đang sử dụng?',
    options: ['echo $SHELL', 'ls -l', 'pwd', 'whoami'],
    correctIndex: 0,
    explanation: 'Biến môi trường $SHELL chứa đường dẫn tới shell mặc định hiện tại của người dùng.',
  },
  {
    text: 'Hệ thống trợ giúp "man" lấy nội dung từ đâu?',
    options: ['Từ Internet trực tiếp', 'Từ các trang manual được cài sẵn cục bộ cùng gói phần mềm', 'Từ tệp log hệ thống', 'Từ cấu hình mạng'],
    correctIndex: 1,
    explanation: 'man đọc các trang hướng dẫn (man pages) được cài kèm theo gói phần mềm trên hệ thống cục bộ.',
  },
  {
    text: 'Biến môi trường PATH có vai trò gì?',
    options: [
      'Lưu mật khẩu người dùng',
      'Danh sách các thư mục shell tìm kiếm khi gõ tên một lệnh',
      'Lưu thư mục home hiện tại',
      'Lưu lịch sử lệnh',
    ],
    correctIndex: 1,
    explanation: 'Khi gõ một lệnh, shell tìm file thực thi trùng tên lần lượt trong các thư mục liệt kê trong PATH.',
  },
];
