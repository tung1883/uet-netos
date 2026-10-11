const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-5',
  week: WEEKS.EXTRA_5,
  commands: [
    {
      name: 'kill -l',
      description: 'liệt kê toàn bộ các loại tín hiệu (signal) mà lệnh kill có thể gửi, kèm số thứ tự',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách toàn bộ các loại tín hiệu mà kill có thể gửi', accepted: ['kill -l'] },
      ],
    },
    {
      name: 'signal SIGHUP',
      description: 'tín hiệu gửi khi terminal điều khiển bị đóng, thường được dùng để yêu cầu dịch vụ nạp lại cấu hình',
      flags: [],
      scenarios: [
        { task: 'Gửi tín hiệu SIGHUP (yêu cầu nạp lại cấu hình) tới tiến trình PID 2048', accepted: ['kill -HUP 2048', 'kill -1 2048'] },
      ],
    },
    {
      name: 'signal SIGSTOP/SIGCONT',
      description: 'tín hiệu tạm dừng (SIGSTOP) và tiếp tục (SIGCONT) một tiến trình mà không chấm dứt nó',
      flags: [],
      scenarios: [
        { task: 'Tạm dừng tiến trình PID 2048 mà không chấm dứt nó', accepted: ['kill -STOP 2048', 'kill -19 2048'] },
        { task: 'Tiếp tục chạy lại tiến trình PID 2048 đã bị tạm dừng', accepted: ['kill -CONT 2048', 'kill -18 2048'] },
      ],
    },
    {
      name: 'ps -o',
      description: 'tùy chỉnh các cột thông tin hiển thị khi liệt kê tiến trình bằng ps',
      flags: [
        { flag: '-o pid,comm,%cpu', meaning: 'chỉ hiển thị các cột PID, tên lệnh và %CPU' },
      ],
      scenarios: [
        { task: 'Hiển thị tiến trình chỉ với các cột PID, tên lệnh và %CPU', accepted: ['ps -o pid,comm,%cpu'] },
      ],
    },
    {
      name: 'top -b -n 1',
      description: 'chạy top ở chế độ batch (không tương tác), xuất một lần kết quả rồi thoát, hữu ích khi dùng trong script',
      flags: [],
      scenarios: [
        { task: 'Chạy top một lần duy nhất (không tương tác) để lấy kết quả cho script', accepted: ['top -b -n 1', 'top -b -n1'] },
      ],
    },
    {
      name: 'nohup & disown combo',
      description: 'kết hợp nohup và dấu & để chạy một tiến trình nền hoàn toàn độc lập khỏi phiên terminal hiện tại',
      flags: [],
      scenarios: [
        { task: 'Chạy script long_task.sh ở chế độ nền, độc lập khỏi terminal, output ghi vào log.txt', accepted: ['nohup ./long_task.sh > log.txt 2>&1 &'] },
      ],
    },
    {
      name: 'jq',
      description: 'công cụ dòng lệnh để phân tích và trích xuất dữ liệu từ định dạng JSON',
      flags: [
        { flag: '.<key>', meaning: 'trích xuất giá trị của một trường (key) cụ thể trong JSON' },
        { flag: '-r', meaning: 'xuất kết quả dạng chuỗi thô (raw), bỏ dấu nháy kép bao quanh' },
      ],
      scenarios: [
        { task: 'Trích xuất trường "name" từ tệp data.json bằng jq', accepted: ['jq .name data.json'] },
        { task: 'Trích xuất trường "name" từ data.json dạng chuỗi thô, không có dấu ngoặc kép', accepted: ['jq -r .name data.json'] },
      ],
    },
    {
      name: 'expand',
      description: 'chuyển đổi các ký tự tab trong văn bản thành khoảng trắng tương ứng',
      flags: [],
      scenarios: [
        { task: 'Chuyển các tab trong tệp code.txt thành khoảng trắng', accepted: ['expand code.txt'] },
      ],
    },
    {
      name: 'fold',
      description: 'ngắt các dòng dài trong văn bản thành nhiều dòng ngắn hơn theo độ rộng chỉ định',
      flags: [
        { flag: '-w <n>', meaning: 'chỉ định độ rộng tối đa mỗi dòng sau khi ngắt' },
      ],
      scenarios: [
        { task: 'Ngắt các dòng của tệp longtext.txt thành tối đa 80 ký tự mỗi dòng', accepted: ['fold -w 80 longtext.txt'] },
      ],
    },
    {
      name: 'truncate',
      description: 'thay đổi kích thước một tệp về một giá trị chỉ định, cắt bớt hoặc mở rộng bằng byte 0',
      flags: [
        { flag: '-s <size>', meaning: 'chỉ định kích thước mới cho tệp' },
      ],
      scenarios: [
        { task: 'Cắt tệp log.txt về kích thước 0 (xóa nội dung nhưng giữ tệp)', accepted: ['truncate -s 0 log.txt'] },
      ],
    },
    {
      name: 'cmp',
      description: 'so sánh hai tệp ở cấp byte, báo vị trí byte đầu tiên khác nhau (khác với diff hiển thị theo dòng)',
      flags: [],
      scenarios: [
        { task: 'So sánh hai tệp nhị phân file1.bin và file2.bin ở cấp byte', accepted: ['cmp file1.bin file2.bin'] },
      ],
    },
    {
      name: 'pv',
      description: 'hiển thị tiến độ (progress) của luồng dữ liệu đi qua một pipe',
      flags: [],
      scenarios: [
        { task: 'Theo dõi tiến độ khi sao chép tệp lớn bigfile.iso qua pipe vào dd', accepted: ['pv bigfile.iso | dd of=/dev/sdb'] },
      ],
    },
    {
      name: 'screen',
      description: 'công cụ quản lý nhiều phiên terminal ảo, cho phép chạy tiếp tục (detach/attach) ngay cả khi mất kết nối SSH',
      flags: [
        { flag: '-S <tên>', meaning: 'tạo một phiên screen mới với tên chỉ định' },
        { flag: '-r <tên>', meaning: 'kết nối lại (attach) vào một phiên screen đã tồn tại' },
      ],
      scenarios: [
        { task: 'Tạo một phiên screen mới tên "backup"', accepted: ['screen -S backup'] },
        { task: 'Kết nối lại vào phiên screen tên "backup" đã tạo trước đó', accepted: ['screen -r backup'] },
      ],
    },
    {
      name: 'tmux',
      description: 'công cụ quản lý terminal đa cửa sổ hiện đại hơn screen, cho phép detach/attach và chia màn hình',
      flags: [
        { flag: 'new -s <tên>', meaning: 'tạo một phiên tmux mới với tên chỉ định' },
        { flag: 'attach -t <tên>', meaning: 'kết nối lại vào một phiên tmux đã tồn tại' },
      ],
      scenarios: [
        { task: 'Tạo một phiên tmux mới tên "work"', accepted: ['tmux new -s work'] },
        { task: 'Kết nối lại vào phiên tmux tên "work"', accepted: ['tmux attach -t work'] },
      ],
    },
    {
      name: 'su vs sudo -i',
      description: 'sudo -i khởi động một shell đăng nhập đầy đủ với quyền root, tương tự su - nhưng dùng mật khẩu của chính người dùng thay vì mật khẩu root',
      flags: [],
      scenarios: [
        { task: 'Mở một shell đăng nhập đầy đủ với quyền root bằng sudo (dùng mật khẩu của chính mình)', accepted: ['sudo -i'] },
      ],
    },
    {
      name: 'wall',
      description: 'gửi một thông báo hiển thị tới toàn bộ người dùng đang đăng nhập trên hệ thống',
      flags: [],
      scenarios: [
        { task: 'Gửi thông báo "He thong se bao tri sau 10 phut" tới toàn bộ người dùng đang đăng nhập', accepted: ['wall "He thong se bao tri sau 10 phut"', "wall 'He thong se bao tri sau 10 phut'"] },
      ],
    },
    {
      name: 'write',
      description: 'gửi một tin nhắn trực tiếp tới một người dùng cụ thể đang đăng nhập trên hệ thống',
      flags: [],
      scenarios: [
        { task: 'Gửi tin nhắn trực tiếp tới người dùng alice đang đăng nhập', accepted: ['write alice'] },
      ],
    },
  ],
};
