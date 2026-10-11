const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general3',
  week: WEEKS.EXTRA_2,
  commands: [
    {
      name: 'mktemp',
      description: 'tạo một tệp hoặc thư mục tạm thời với tên duy nhất, an toàn để dùng trong script',
      flags: [
        { flag: '-d', meaning: 'tạo một thư mục tạm thời thay vì tệp' },
      ],
      scenarios: [
        { task: 'Tạo một tệp tạm thời an toàn trong script', accepted: ['mktemp'] },
        { task: 'Tạo một thư mục tạm thời an toàn trong script', accepted: ['mktemp -d'] },
      ],
    },
    {
      name: 'realpath',
      description: 'hiển thị đường dẫn tuyệt đối đầy đủ của một tệp, đã phân giải hết symlink và đường dẫn tương đối',
      flags: [],
      scenarios: [
        { task: 'Lấy đường dẫn tuyệt đối đầy đủ của tệp ../data/file.txt', accepted: ['realpath ../data/file.txt'] },
      ],
    },
    {
      name: 'tee -a',
      description: 'ghi nối tiếp (append) đầu ra vừa ra màn hình vừa vào cuối một tệp, không ghi đè',
      flags: [],
      scenarios: [
        { task: 'Ghi nối tiếp kết quả lệnh date vào cuối tệp log.txt, vừa in ra màn hình', accepted: ['date | tee -a log.txt'] },
      ],
    },
    {
      name: 'yes',
      description: 'liên tục in ra một chuỗi (mặc định là "y") cho tới khi bị dừng, thường dùng để tự động trả lời "yes" cho các prompt',
      flags: [],
      scenarios: [
        { task: 'Tự động trả lời "y" cho mọi câu hỏi xác nhận khi chạy script cài đặt install.sh', accepted: ['yes | ./install.sh'] },
      ],
    },
    {
      name: 'sleep',
      description: 'tạm dừng thực thi script trong một khoảng thời gian chỉ định',
      flags: [],
      scenarios: [
        { task: 'Tạm dừng script 5 giây', accepted: ['sleep 5'] },
      ],
    },
    {
      name: 'cal',
      description: 'hiển thị lịch tháng/năm ra terminal',
      flags: [
        { flag: '-y', meaning: 'hiển thị lịch của cả năm hiện tại' },
      ],
      scenarios: [
        { task: 'Hiển thị lịch của toàn bộ năm hiện tại', accepted: ['cal -y'] },
      ],
    },
    {
      name: 'bc',
      description: 'máy tính dòng lệnh, hỗ trợ các phép tính số học phức tạp hơn expr (bao gồm số thập phân)',
      flags: [],
      scenarios: [
        { task: 'Tính 10 chia 3 lấy 4 chữ số thập phân bằng bc', accepted: ['echo "scale=4; 10/3" | bc'] },
      ],
    },
    {
      name: 'xdg-open',
      description: 'mở một tệp hoặc URL bằng ứng dụng mặc định được cấu hình trên môi trường desktop Linux',
      flags: [],
      scenarios: [
        { task: 'Mở tệp report.pdf bằng ứng dụng mặc định của hệ thống', accepted: ['xdg-open report.pdf'] },
      ],
    },
    {
      name: 'chsh',
      description: 'thay đổi shell đăng nhập mặc định của người dùng hiện tại',
      flags: [
        { flag: '-s <shell>', meaning: 'chỉ định shell mới sẽ dùng làm shell đăng nhập mặc định' },
      ],
      scenarios: [
        { task: 'Đổi shell đăng nhập mặc định của người dùng hiện tại sang /bin/zsh', accepted: ['chsh -s /bin/zsh'] },
      ],
    },
    {
      name: 'cat /etc/os-release',
      description: 'xem thông tin về bản phân phối Linux hiện tại (tên, phiên bản) từ tệp chuẩn os-release',
      flags: [],
      scenarios: [
        { task: 'Xem tên và phiên bản bản phân phối Linux hiện tại', accepted: ['cat /etc/os-release'] },
      ],
    },
    {
      name: 'lsmod',
      description: 'liệt kê các module kernel hiện đang được nạp vào hệ thống',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các module kernel hiện đang được nạp', accepted: ['lsmod'] },
      ],
    },
    {
      name: 'modprobe',
      description: 'nạp hoặc gỡ bỏ một module kernel',
      flags: [
        { flag: '-r <module>', meaning: 'gỡ bỏ một module kernel đã nạp' },
      ],
      scenarios: [
        { task: 'Nạp module kernel tên loop', accepted: ['sudo modprobe loop'] },
        { task: 'Gỡ bỏ module kernel tên loop đã nạp', accepted: ['sudo modprobe -r loop'] },
      ],
    },
  ],
};
