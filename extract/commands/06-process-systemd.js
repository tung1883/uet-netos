const WEEKS = require('../weeks');
module.exports = {
  category: 'process-systemd',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'ps',
      description: 'hiển thị danh sách các tiến trình đang chạy trên hệ thống',
      flags: [
        { flag: 'aux', meaning: 'hiển thị tất cả tiến trình của mọi người dùng kèm thông tin %CPU, %MEM chi tiết' },
        { flag: '-ef', meaning: 'hiển thị tất cả tiến trình dạng đầy đủ, kèm PPID (tiến trình cha)' },
        { flag: '-u <user>', meaning: 'chỉ hiển thị tiến trình của một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Hiển thị toàn bộ tiến trình đang chạy trên hệ thống kèm CPU/MEM', accepted: ['ps aux'] },
        { task: 'Hiển thị tiến trình kèm PID cha (PPID) dạng đầy đủ', accepted: ['ps -ef'] },
        { task: 'Tìm tiến trình có tên liên quan đến "nginx"', accepted: ['ps aux | grep nginx'] },
      ],
    },
    {
      name: 'top',
      description: 'hiển thị danh sách tiến trình theo thời gian thực, sắp xếp theo mức sử dụng tài nguyên',
      flags: [
        { flag: '-u <user>', meaning: 'chỉ hiển thị tiến trình của một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Theo dõi tiến trình theo thời gian thực', accepted: ['top'] },
      ],
    },
    {
      name: 'htop',
      description: 'phiên bản top giao diện tương tác, trực quan hơn, hỗ trợ cuộn và tìm kiếm tiến trình',
      flags: [
        { flag: '-u <user>', meaning: 'chỉ hiển thị tiến trình của một người dùng cụ thể' },
        { flag: '-d <giây>', meaning: 'chỉ định khoảng thời gian làm mới màn hình (tính theo 1/10 giây)' },
      ],
      scenarios: [
        { task: 'Mở công cụ giám sát tiến trình giao diện trực quan htop', accepted: ['htop'] },
        { task: 'Mở htop chỉ hiển thị tiến trình của người dùng alice', accepted: ['htop -u alice'] },
      ],
    },
    {
      name: 'kill',
      description: 'gửi tín hiệu (signal) đến một tiến trình theo PID, mặc định gửi SIGTERM',
      flags: [
        { flag: '-9', meaning: 'gửi tín hiệu SIGKILL, buộc chấm dứt tiến trình ngay lập tức, không thể bị bỏ qua' },
        { flag: '-15', meaning: 'gửi tín hiệu SIGTERM, yêu cầu tiến trình tự dọn dẹp và thoát (mặc định)' },
        { flag: '-l', meaning: 'liệt kê tất cả các loại tín hiệu có thể gửi' },
      ],
      scenarios: [
        { task: 'Buộc chấm dứt ngay lập tức tiến trình có PID 1234', accepted: ['kill -9 1234'] },
        { task: 'Gửi tín hiệu dừng thông thường đến tiến trình PID 1234', accepted: ['kill 1234', 'kill -15 1234'] },
      ],
    },
    {
      name: 'killall',
      description: 'gửi tín hiệu đến tất cả các tiến trình khớp theo tên thay vì PID',
      flags: [
        { flag: '-9', meaning: 'buộc chấm dứt ngay toàn bộ các tiến trình khớp tên' },
      ],
      scenarios: [
        { task: 'Buộc chấm dứt toàn bộ các tiến trình có tên firefox', accepted: ['killall -9 firefox'] },
      ],
    },
    {
      name: 'pkill',
      description: 'tìm và gửi tín hiệu đến tiến trình dựa trên tên hoặc các thuộc tính khác (không cần biết PID)',
      flags: [
        { flag: '-u <user>', meaning: 'chỉ gửi tín hiệu đến tiến trình thuộc về một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Chấm dứt toàn bộ tiến trình của người dùng alice', accepted: ['sudo pkill -u alice'] },
      ],
    },
    {
      name: 'nice',
      description: 'khởi chạy một chương trình với mức độ ưu tiên (niceness) tùy chỉnh, giá trị càng cao độ ưu tiên càng thấp',
      flags: [
        { flag: '-n <giá trị>', meaning: 'chỉ định mức niceness (-20 đến 19) khi khởi chạy chương trình' },
      ],
      scenarios: [
        { task: 'Chạy script backup.sh với độ ưu tiên thấp (niceness 10)', accepted: ['nice -n 10 ./backup.sh'] },
      ],
    },
    {
      name: 'renice',
      description: 'thay đổi mức độ ưu tiên (niceness) của một tiến trình đang chạy',
      flags: [
        { flag: '-n <giá trị> -p <pid>', meaning: 'đặt mức niceness mới cho tiến trình theo PID' },
      ],
      scenarios: [
        { task: 'Đổi mức ưu tiên của tiến trình PID 2048 thành 5', accepted: ['renice -n 5 -p 2048', 'sudo renice -n 5 -p 2048'] },
      ],
    },
    {
      name: 'jobs',
      description: 'liệt kê các tiến trình (job) đang chạy nền hoặc bị tạm dừng trong phiên shell hiện tại',
      flags: [
        { flag: '-l', meaning: 'hiển thị kèm PID của từng job' },
      ],
      scenarios: [
        { task: 'Xem danh sách các job đang chạy nền trong shell hiện tại', accepted: ['jobs'] },
      ],
    },
    {
      name: 'bg',
      description: 'tiếp tục chạy một job đã tạm dừng ở chế độ nền (background)',
      flags: [],
      scenarios: [
        { task: 'Chuyển job đã tạm dừng (Ctrl+Z) sang chạy nền', accepted: ['bg'] },
      ],
    },
    {
      name: 'fg',
      description: 'đưa một job đang chạy nền trở về chạy ở chế độ tiền cảnh (foreground)',
      flags: [],
      scenarios: [
        { task: 'Đưa job nền số 1 trở lại chạy ở foreground', accepted: ['fg %1', 'fg'] },
      ],
    },
    {
      name: 'nohup',
      description: 'chạy một chương trình sao cho nó không bị chấm dứt khi đóng phiên shell (bỏ qua tín hiệu SIGHUP)',
      flags: [
        { flag: '> <tệp> 2>&1 &', meaning: 'kết hợp chuyển hướng cả stdout lẫn stderr vào một tệp log và chạy nền' },
      ],
      scenarios: [
        { task: 'Chạy script.sh ở chế độ nền, không bị dừng khi đóng terminal, ghi log ra nohup.out', accepted: ['nohup ./script.sh &', 'nohup ./script.sh > nohup.out &'] },
      ],
    },
    {
      name: 'disown',
      description: 'gỡ bỏ một job khỏi bảng theo dõi job của shell hiện tại, để nó không bị chấm dứt khi shell đóng',
      flags: [
        { flag: '-h', meaning: 'giữ job trong bảng theo dõi nhưng đánh dấu bỏ qua SIGHUP' },
      ],
      scenarios: [
        { task: 'Gỡ job nền số 1 khỏi bảng theo dõi của shell hiện tại', accepted: ['disown %1'] },
      ],
    },
    {
      name: 'systemctl',
      description: 'công cụ quản lý và kiểm tra trạng thái các dịch vụ (unit) hệ thống dưới systemd',
      flags: [
        { flag: 'start <unit>', meaning: 'khởi động ngay dịch vụ (không bền qua lần khởi động lại hệ thống)' },
        { flag: 'stop <unit>', meaning: 'dừng ngay dịch vụ đang chạy' },
        { flag: 'restart <unit>', meaning: 'dừng rồi khởi động lại dịch vụ' },
        { flag: 'reload <unit>', meaning: 'nạp lại cấu hình của dịch vụ mà không làm gián đoạn tiến trình đang chạy' },
        { flag: 'status <unit>', meaning: 'hiển thị trạng thái hiện tại của dịch vụ (active/inactive/failed)' },
        { flag: 'enable <unit>', meaning: 'thiết lập dịch vụ tự khởi động cùng hệ thống (không khởi động ngay)' },
        { flag: 'disable <unit>', meaning: 'hủy thiết lập tự khởi động cùng hệ thống' },
        { flag: 'enable --now <unit>', meaning: 'vừa bật tự khởi động cùng hệ thống, vừa khởi động dịch vụ ngay' },
        { flag: 'is-active <unit>', meaning: 'kiểm tra nhanh dịch vụ có đang chạy hay không' },
        { flag: 'is-enabled <unit>', meaning: 'kiểm tra dịch vụ có được thiết lập tự khởi động cùng hệ thống hay không' },
        { flag: 'mask <unit>', meaning: 'vô hiệu hóa hoàn toàn dịch vụ, ngăn cả khởi động thủ công lẫn tự động' },
        { flag: 'daemon-reload', meaning: 'nạp lại toàn bộ cấu hình unit sau khi chỉnh sửa tệp unit file' },
        { flag: 'list-units --type=service', meaning: 'liệt kê toàn bộ các dịch vụ hiện có trên hệ thống' },
        { flag: 'mask <unit>', meaning: 'vô hiệu hóa hoàn toàn dịch vụ, ngăn cả khởi động thủ công lẫn tự động (lặp, xem dòng trên)' },
        { flag: 'unmask <unit>', meaning: 'gỡ bỏ trạng thái mask, cho phép dịch vụ khởi động trở lại' },
        { flag: 'list-dependencies <unit>', meaning: 'hiển thị cây các dịch vụ phụ thuộc của một unit' },
        { flag: 'show <unit>', meaning: 'hiển thị toàn bộ thuộc tính chi tiết của một unit (đường dẫn file, trạng thái...)' },
        { flag: 'cat <unit>', meaning: 'hiển thị nội dung tệp cấu hình gốc của unit' },
        { flag: 'edit <unit>', meaning: 'mở trình soạn thảo để tạo override cấu hình cho một unit mà không sửa tệp gốc' },
      ],
      scenarios: [
        { task: 'Kiểm tra trạng thái dịch vụ SSH trên Ubuntu', accepted: ['systemctl status ssh', 'systemctl status ssh.service', 'sudo systemctl status ssh', 'sudo systemctl status ssh.service'] },
        { task: 'Khởi động dịch vụ nginx ngay lập tức', accepted: ['sudo systemctl start nginx', 'systemctl start nginx'] },
        { task: 'Thiết lập dịch vụ nginx tự khởi động cùng hệ thống và khởi động ngay', accepted: ['sudo systemctl enable --now nginx'] },
        { task: 'Khởi động lại dịch vụ sshd sau khi sửa cấu hình', accepted: ['sudo systemctl restart sshd', 'sudo systemctl restart ssh'] },
        { task: 'Nạp lại cấu hình systemd sau khi tạo một unit file mới', accepted: ['sudo systemctl daemon-reload'] },
        { task: 'Kiểm tra xem dịch vụ docker có đang chạy hay không (chỉ cần kết quả active/inactive)', accepted: ['systemctl is-active docker'] },
        { task: 'Vô hiệu hóa hoàn toàn dịch vụ bluetooth, ngăn cả khởi động thủ công', accepted: ['sudo systemctl mask bluetooth'] },
        { task: 'Kiểm tra dịch vụ nginx có được thiết lập tự khởi động cùng hệ thống hay không', accepted: ['systemctl is-enabled nginx'] },
        { task: 'Hủy thiết lập tự khởi động cùng hệ thống của dịch vụ apache2', accepted: ['sudo systemctl disable apache2'] },
        { task: 'Nạp lại cấu hình của dịch vụ nginx mà không làm gián đoạn kết nối đang xử lý', accepted: ['sudo systemctl reload nginx'] },
      ],
    },
    {
      name: 'journalctl',
      week: WEEKS.W8_TH14,
      description: 'xem và lọc nhật ký hệ thống được systemd ghi lại (systemd journal)',
      flags: [
        { flag: '-u <unit>', meaning: 'chỉ hiển thị log của một dịch vụ (unit) cụ thể' },
        { flag: '-f', meaning: 'theo dõi log liên tục giống tail -f' },
        { flag: '-b', meaning: 'chỉ hiển thị log kể từ lần khởi động (boot) gần nhất' },
        { flag: '-p err', meaning: 'chỉ hiển thị các log ở mức độ lỗi (error) trở lên' },
        { flag: '--since "<time>"', meaning: 'chỉ hiển thị log kể từ một thời điểm chỉ định' },
        { flag: '--until "<time>"', meaning: 'chỉ hiển thị log cho tới một thời điểm chỉ định' },
        { flag: '-n <số>', meaning: 'chỉ hiển thị n dòng log cuối cùng' },
        { flag: '-k', meaning: 'chỉ hiển thị các log liên quan tới kernel (tương đương dmesg)' },
        { flag: '--disk-usage', meaning: 'hiển thị tổng dung lượng đĩa mà journal log đang chiếm dụng' },
        { flag: '--vacuum-size=<size>', meaning: 'dọn bớt log cũ để journal không vượt quá kích thước chỉ định' },
      ],
      scenarios: [
        { task: 'Xem log của dịch vụ nginx theo thời gian thực', accepted: ['journalctl -u nginx -f', 'sudo journalctl -u nginx -f'] },
        { task: 'Xem log hệ thống kể từ lần khởi động gần nhất', accepted: ['journalctl -b', 'sudo journalctl -b'] },
        { task: 'Xem 50 dòng log cuối cùng của dịch vụ sshd', accepted: ['journalctl -u sshd -n 50', 'journalctl -u ssh -n 50'] },
        { task: 'Xem dung lượng đĩa hiện tại mà journal log đang chiếm dụng', accepted: ['journalctl --disk-usage'] },
        { task: 'Dọn bớt log journal cũ để chỉ còn chiếm tối đa 500MB', accepted: ['sudo journalctl --vacuum-size=500M'] },
        { task: 'Xem log hệ thống từ 09:00 đến 10:00 hôm nay', accepted: ['journalctl --since "09:00" --until "10:00"'] },
      ],
    },
  ],
};
