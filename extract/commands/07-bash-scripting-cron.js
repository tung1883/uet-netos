const WEEKS = require('../weeks');
module.exports = {
  category: 'bash-scripting-cron',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'bash',
      description: 'khởi chạy trình thông dịch Bash shell, hoặc thực thi một script',
      flags: [
        { flag: '-x <script>', meaning: 'chạy script ở chế độ debug, in ra từng lệnh trước khi thực thi' },
        { flag: '-n <script>', meaning: 'chỉ kiểm tra cú pháp script, không thực thi' },
        { flag: '-c "<lệnh>"', meaning: 'thực thi một chuỗi lệnh được truyền trực tiếp' },
      ],
      scenarios: [
        { task: 'Chạy script deploy.sh ở chế độ debug để xem từng lệnh thực thi', accepted: ['bash -x deploy.sh'] },
        { task: 'Kiểm tra cú pháp của script deploy.sh mà không chạy thật', accepted: ['bash -n deploy.sh'] },
      ],
    },
    {
      name: 'chmod +x',
      description: 'cấp quyền thực thi cho một tệp script để có thể chạy trực tiếp bằng ./',
      flags: [],
      scenarios: [
        { task: 'Cấp quyền thực thi cho script deploy.sh', accepted: ['chmod +x deploy.sh'] },
      ],
    },
    {
      name: 'crontab',
      week: WEEKS.W4_TH6,
      description: 'quản lý các tác vụ được lập lịch chạy tự động định kỳ cho người dùng (cron jobs)',
      flags: [
        { flag: '-e', meaning: 'mở trình soạn thảo để chỉnh sửa crontab của người dùng hiện tại' },
        { flag: '-l', meaning: 'liệt kê các dòng crontab hiện tại của người dùng' },
        { flag: '-r', meaning: 'xóa toàn bộ crontab của người dùng hiện tại' },
        { flag: '-u <user>', meaning: 'thao tác trên crontab của một người dùng khác (cần quyền root)' },
      ],
      scenarios: [
        { task: 'Mở crontab của người dùng hiện tại để chỉnh sửa', accepted: ['crontab -e'] },
        { task: 'Xem các cron job hiện có của người dùng hiện tại', accepted: ['crontab -l'] },
        { task: 'Xem crontab của người dùng alice (với quyền root)', accepted: ['sudo crontab -u alice -l'] },
        { task: 'Lập lịch chạy script /home/alice/backup.sh lúc 2 giờ sáng mỗi ngày (thêm vào crontab)', accepted: ['0 2 * * * /home/alice/backup.sh'] },
        { task: 'Lập lịch chạy một script vào phút thứ 30 mỗi giờ', accepted: ['30 * * * * /path/to/script.sh'] },
        { task: 'Lập lịch chạy một script vào 0h ngày đầu tiên mỗi tháng', accepted: ['0 0 1 * * /path/to/script.sh'] },
        { task: 'Lập lịch chạy một script vào thứ Hai hàng tuần lúc 8 giờ sáng', accepted: ['0 8 * * 1 /path/to/script.sh'] },
        { task: 'Lập lịch chạy một script mỗi 15 phút', accepted: ['*/15 * * * * /path/to/script.sh'] },
        { task: 'Lập lịch chạy một script vào lúc 23:59 ngày 31/12 hàng năm', accepted: ['59 23 31 12 * /path/to/script.sh'] },
      ],
    },
    {
      name: 'at',
      week: WEEKS.W4_TH6,
      description: 'lập lịch chạy một lệnh/script một lần duy nhất vào một thời điểm xác định trong tương lai',
      flags: [
        { flag: '-l', meaning: 'liệt kê các tác vụ at đang chờ thực thi (tương đương atq)' },
        { flag: '-r <job>', meaning: 'hủy một tác vụ at đã lên lịch (tương đương atrm)' },
      ],
      scenarios: [
        { task: 'Lập lịch chạy một lệnh vào lúc 22:00 hôm nay', accepted: ['at 22:00'] },
        { task: 'Xem danh sách các tác vụ at đang chờ thực thi', accepted: ['atq', 'at -l'] },
      ],
    },
    {
      name: 'systemd-run',
      week: WEEKS.W4_TH6,
      description: 'tạo và chạy một đơn vị (transient unit) systemd tạm thời, có thể dùng để lập lịch một lần giống at',
      flags: [
        { flag: '--on-calendar="<thời điểm>"', meaning: 'chỉ định thời điểm chạy theo định dạng lịch của systemd timer' },
      ],
      scenarios: [
        { task: 'Chạy một lệnh ngay lập tức dưới dạng transient systemd unit (dùng để test timer)', accepted: ['systemd-run --on-calendar="*:0/5" /path/to/script.sh'] },
      ],
    },
    {
      name: 'export',
      description: 'xuất một biến shell thành biến môi trường để các tiến trình con có thể sử dụng',
      flags: [
        { flag: '-p', meaning: 'liệt kê toàn bộ các biến môi trường đã được export' },
      ],
      scenarios: [
        { task: 'Export biến môi trường PATH thêm /opt/myapp/bin', accepted: ['export PATH=$PATH:/opt/myapp/bin'] },
      ],
    },
    {
      name: 'echo',
      description: 'in ra một chuỗi văn bản hoặc giá trị biến ra màn hình',
      flags: [
        { flag: '-n', meaning: 'không in ký tự xuống dòng ở cuối' },
        { flag: '-e', meaning: 'bật diễn giải các ký tự escape như \\n, \\t' },
      ],
      scenarios: [
        { task: 'In ra giá trị của biến môi trường HOME', accepted: ['echo $HOME'] },
        { task: 'In ra chuỗi "Hello" không kèm xuống dòng', accepted: ['echo -n "Hello"', "echo -n 'Hello'"] },
      ],
    },
    {
      name: 'read',
      description: 'đọc một dòng dữ liệu từ đầu vào chuẩn và gán vào biến trong script',
      flags: [
        { flag: '-p "<prompt>"', meaning: 'hiển thị một dòng nhắc trước khi đọc dữ liệu nhập vào' },
        { flag: '-s', meaning: 'ẩn dữ liệu nhập vào khi gõ (dùng để nhập mật khẩu)' },
      ],
      scenarios: [
        { task: 'Đọc dữ liệu nhập từ người dùng vào biến name, kèm dòng nhắc "Nhap ten: "', accepted: ['read -p "Nhap ten: " name', "read -p 'Nhap ten: ' name"] },
      ],
    },
    {
      name: 'test',
      description: 'kiểm tra một điều kiện (so sánh số, chuỗi, hoặc kiểm tra tệp) và trả về mã thoát đúng/sai, thường dùng dạng [ ]',
      flags: [
        { flag: '-f <tệp>', meaning: 'kiểm tra tệp tồn tại và là tệp thông thường' },
        { flag: '-d <thư mục>', meaning: 'kiểm tra đường dẫn tồn tại và là thư mục' },
        { flag: '-z <chuỗi>', meaning: 'kiểm tra chuỗi rỗng' },
        { flag: '-eq', meaning: 'so sánh hai số bằng nhau' },
      ],
      scenarios: [
        { task: 'Kiểm tra tệp /etc/myapp.conf có tồn tại hay không trong câu lệnh if', accepted: ['if [ -f /etc/myapp.conf ]; then', '[ -f /etc/myapp.conf ]'] },
      ],
    },
    {
      name: 'exit',
      description: 'kết thúc script hoặc shell hiện tại với một mã thoát (exit code) chỉ định',
      flags: [
        { flag: '<mã số>', meaning: 'chỉ định mã thoát cụ thể, 0 nghĩa là thành công, khác 0 là lỗi' },
      ],
      scenarios: [
        { task: 'Kết thúc script với mã lỗi 1', accepted: ['exit 1'] },
        { task: 'Kết thúc script báo hiệu thành công', accepted: ['exit 0'] },
      ],
    },
  ],
};
