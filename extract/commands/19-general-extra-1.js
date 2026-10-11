const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-1',
  week: WEEKS.EXTRA_1,
  commands: [
    {
      name: 'stat',
      description: 'hiển thị thông tin chi tiết về một tệp: inode, quyền, kích thước, thời gian truy cập/sửa đổi/thay đổi',
      flags: [
        { flag: '-c "%a"', meaning: 'chỉ hiển thị quyền truy cập dạng octal' },
        { flag: '-f', meaning: 'hiển thị thông tin về hệ thống tệp chứa tệp đó thay vì chính tệp' },
      ],
      scenarios: [
        { task: 'Xem thông tin chi tiết (inode, quyền, thời gian) của tệp notes.txt', accepted: ['stat notes.txt'] },
        { task: 'Lấy quyền truy cập dạng octal của tệp notes.txt bằng stat', accepted: ['stat -c "%a" notes.txt', "stat -c '%a' notes.txt"] },
      ],
    },
    {
      name: 'file',
      description: 'xác định loại nội dung thực tế của một tệp (text, binary, script, hình ảnh...) dựa trên nội dung chứ không chỉ phần mở rộng',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra loại tệp thực tế của mystery_file', accepted: ['file mystery_file'] },
      ],
    },
    {
      name: 'which',
      description: 'hiển thị đường dẫn đầy đủ tới tệp thực thi của một lệnh, dựa trên biến PATH',
      flags: [],
      scenarios: [
        { task: 'Xem đường dẫn đầy đủ của lệnh python3 đang được dùng', accepted: ['which python3'] },
      ],
    },
    {
      name: 'whereis',
      description: 'tìm vị trí tệp nhị phân, mã nguồn và trang man của một lệnh',
      flags: [],
      scenarios: [
        { task: 'Tìm vị trí tệp nhị phân và man page của lệnh ls', accepted: ['whereis ls'] },
      ],
    },
    {
      name: 'type',
      description: 'cho biết một từ lệnh được shell hiểu là gì: alias, hàm, lệnh dựng sẵn (builtin), hay tệp thực thi',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra xem "cd" là lệnh builtin hay tệp thực thi', accepted: ['type cd'] },
      ],
    },
    {
      name: 'basename',
      description: 'trích xuất tên tệp từ một đường dẫn đầy đủ, bỏ phần thư mục',
      flags: [],
      scenarios: [
        { task: 'Lấy tên tệp từ đường dẫn /var/log/syslog bằng basename', accepted: ['basename /var/log/syslog'] },
      ],
    },
    {
      name: 'dirname',
      description: 'trích xuất phần đường dẫn thư mục từ một đường dẫn đầy đủ, bỏ tên tệp',
      flags: [],
      scenarios: [
        { task: 'Lấy đường dẫn thư mục từ /var/log/syslog bằng dirname', accepted: ['dirname /var/log/syslog'] },
      ],
    },
    {
      name: 'readlink',
      description: 'hiển thị đích mà một liên kết mềm (symlink) đang trỏ tới',
      flags: [
        { flag: '-f', meaning: 'phân giải toàn bộ đường dẫn tuyệt đối, kể cả khi có nhiều symlink lồng nhau' },
      ],
      scenarios: [
        { task: 'Xem đích thực sự mà symlink /usr/bin/python đang trỏ tới', accepted: ['readlink -f /usr/bin/python', 'readlink /usr/bin/python'] },
      ],
    },
    {
      name: 'date',
      description: 'hiển thị hoặc thiết lập ngày giờ hệ thống',
      flags: [
        { flag: '+%Y-%m-%d', meaning: 'chỉ hiển thị ngày theo định dạng năm-tháng-ngày' },
        { flag: '-s "<datetime>"', meaning: 'thiết lập ngày giờ hệ thống theo giá trị chỉ định' },
      ],
      scenarios: [
        { task: 'Hiển thị ngày hiện tại theo định dạng YYYY-MM-DD', accepted: ["date +%Y-%m-%d"] },
      ],
    },
    {
      name: 'timedatectl',
      description: 'xem hoặc thiết lập ngày giờ, múi giờ và đồng bộ NTP của hệ thống qua systemd',
      flags: [
        { flag: 'set-timezone <tz>', meaning: 'đổi múi giờ hệ thống sang một giá trị chỉ định' },
        { flag: 'set-ntp true', meaning: 'bật đồng bộ thời gian tự động qua NTP' },
      ],
      scenarios: [
        { task: 'Đổi múi giờ hệ thống sang Asia/Ho_Chi_Minh', accepted: ['sudo timedatectl set-timezone Asia/Ho_Chi_Minh'] },
        { task: 'Xem thông tin ngày giờ và múi giờ hiện tại của hệ thống', accepted: ['timedatectl'] },
      ],
    },
    {
      name: 'seq',
      description: 'sinh ra một dãy số liên tiếp, thường dùng trong vòng lặp shell script',
      flags: [],
      scenarios: [
        { task: 'In ra dãy số từ 1 đến 10', accepted: ['seq 1 10'] },
      ],
    },
    {
      name: 'expr',
      description: 'thực hiện phép tính số học hoặc so sánh đơn giản trong shell script',
      flags: [],
      scenarios: [
        { task: 'Tính tổng 3 cộng 5 bằng expr', accepted: ['expr 3 + 5'] },
      ],
    },
    {
      name: 'printf',
      description: 'in ra văn bản theo định dạng chỉ định, chính xác hơn echo khi cần kiểm soát định dạng',
      flags: [],
      scenarios: [
        { task: 'In ra một số dạng số thập phân có 2 chữ số sau dấu phẩy bằng printf', accepted: ['printf "%.2f\\n" 3.14159'] },
      ],
    },
    {
      name: 'lscpu',
      description: 'hiển thị thông tin chi tiết về kiến trúc CPU của hệ thống',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết về CPU của hệ thống', accepted: ['lscpu'] },
      ],
    },
    {
      name: 'nproc',
      description: 'hiển thị số lượng nhân CPU khả dụng cho tiến trình hiện tại',
      flags: [],
      scenarios: [
        { task: 'Xem số nhân CPU khả dụng trên hệ thống', accepted: ['nproc'] },
      ],
    },
    {
      name: 'lsusb',
      description: 'liệt kê các thiết bị USB đang được kết nối với hệ thống',
      flags: [],
      scenarios: [
        { task: 'Liệt kê các thiết bị USB đang cắm vào máy', accepted: ['lsusb'] },
      ],
    },
    {
      name: 'lspci',
      description: 'liệt kê các thiết bị PCI (card đồ họa, mạng...) trên hệ thống',
      flags: [],
      scenarios: [
        { task: 'Liệt kê các thiết bị PCI gắn trên bo mạch chủ', accepted: ['lspci'] },
      ],
    },
    {
      name: 'shutdown',
      description: 'tắt hoặc khởi động lại hệ thống, có thể lên lịch thời gian thực hiện',
      flags: [
        { flag: 'now', meaning: 'tắt máy ngay lập tức' },
        { flag: '-r now', meaning: 'khởi động lại máy ngay lập tức' },
        { flag: '-h +<phút>', meaning: 'lên lịch tắt máy sau một số phút chỉ định' },
        { flag: '-c', meaning: 'hủy lịch tắt máy đã đặt trước đó' },
      ],
      scenarios: [
        { task: 'Tắt máy ngay lập tức', accepted: ['sudo shutdown now'] },
        { task: 'Khởi động lại máy ngay lập tức', accepted: ['sudo shutdown -r now', 'sudo reboot'] },
        { task: 'Lên lịch tắt máy sau 10 phút', accepted: ['sudo shutdown -h +10'] },
        { task: 'Hủy lịch tắt máy đã đặt trước đó', accepted: ['sudo shutdown -c'] },
      ],
    },
    {
      name: 'reboot',
      description: 'khởi động lại hệ thống ngay lập tức',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại hệ thống ngay', accepted: ['sudo reboot'] },
      ],
    },
    {
      name: 'last',
      description: 'hiển thị lịch sử đăng nhập của người dùng trên hệ thống',
      flags: [
        { flag: '-n <số>', meaning: 'chỉ hiển thị n lần đăng nhập gần nhất' },
      ],
      scenarios: [
        { task: 'Xem lịch sử đăng nhập của hệ thống', accepted: ['last'] },
      ],
    },
    {
      name: 'pstree',
      description: 'hiển thị cây tiến trình, thể hiện quan hệ cha-con giữa các tiến trình',
      flags: [
        { flag: '-p', meaning: 'hiển thị kèm PID của từng tiến trình trong cây' },
      ],
      scenarios: [
        { task: 'Xem cây tiến trình của hệ thống', accepted: ['pstree'] },
      ],
    },
    {
      name: 'watch',
      description: 'chạy lặp lại một lệnh theo chu kỳ, hiển thị kết quả cập nhật liên tục trên màn hình',
      flags: [
        { flag: '-n <giây>', meaning: 'chỉ định khoảng thời gian lặp lại (mặc định 2 giây)' },
      ],
      scenarios: [
        { task: 'Theo dõi liên tục kết quả lệnh df -h, cập nhật mỗi 5 giây', accepted: ['watch -n 5 df -h', "watch -n 5 'df -h'"] },
      ],
    },
    {
      name: 'timeout',
      description: 'chạy một lệnh nhưng tự động chấm dứt nó nếu chạy quá thời gian giới hạn',
      flags: [],
      scenarios: [
        { task: 'Chạy lệnh ping google.com nhưng tự dừng sau 10 giây', accepted: ['timeout 10 ping google.com'] },
      ],
    },
    {
      name: 'env',
      description: 'hiển thị toàn bộ biến môi trường hiện tại, hoặc chạy một lệnh trong môi trường đã sửa đổi',
      flags: [],
      scenarios: [
        { task: 'Xem toàn bộ biến môi trường hiện tại', accepted: ['env'] },
      ],
    },
    {
      name: 'printenv',
      description: 'hiển thị giá trị của một hoặc tất cả các biến môi trường',
      flags: [],
      scenarios: [
        { task: 'Xem giá trị biến môi trường PATH', accepted: ['printenv PATH'] },
      ],
    },
    {
      name: 'ulimit',
      description: 'xem hoặc thiết lập giới hạn tài nguyên hệ thống (số tệp mở, kích thước tiến trình...) cho shell hiện tại',
      flags: [
        { flag: '-a', meaning: 'hiển thị toàn bộ các giới hạn tài nguyên hiện tại' },
        { flag: '-n <số>', meaning: 'thiết lập số lượng file descriptor tối đa có thể mở' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ giới hạn tài nguyên hiện tại của shell', accepted: ['ulimit -a'] },
      ],
    },
    {
      name: 'chroot',
      description: 'thay đổi thư mục gốc (/) mà một tiến trình nhìn thấy, thường dùng khi sửa chữa hệ thống từ môi trường cứu hộ',
      flags: [],
      scenarios: [
        { task: 'Chuyển vào môi trường chroot tại /mnt để sửa hệ thống bị lỗi', accepted: ['sudo chroot /mnt'] },
      ],
    },
    {
      name: 'setfacl',
      description: 'thiết lập Access Control List (ACL) cho tệp/thư mục, cho phép cấp quyền chi tiết hơn quyền Unix truyền thống',
      flags: [
        { flag: '-m u:<user>:<quyền>', meaning: 'thêm hoặc sửa quyền ACL cho một người dùng cụ thể trên tệp' },
      ],
      scenarios: [
        { task: 'Cấp quyền đọc-ghi ACL cho người dùng alice trên tệp shared.txt', accepted: ['setfacl -m u:alice:rw shared.txt'] },
      ],
    },
    {
      name: 'getfacl',
      description: 'xem danh sách Access Control List (ACL) hiện tại của một tệp/thư mục',
      flags: [],
      scenarios: [
        { task: 'Xem ACL hiện tại của tệp shared.txt', accepted: ['getfacl shared.txt'] },
      ],
    },
    {
      name: 'md5sum',
      description: 'tính toán và hiển thị giá trị băm MD5 của một tệp, dùng để kiểm tra tính toàn vẹn',
      flags: [],
      scenarios: [
        { task: 'Tính giá trị băm MD5 của tệp file.iso', accepted: ['md5sum file.iso'] },
      ],
    },
    {
      name: 'sha256sum',
      description: 'tính toán và hiển thị giá trị băm SHA-256 của một tệp, an toàn hơn MD5',
      flags: [],
      scenarios: [
        { task: 'Tính giá trị băm SHA-256 của tệp file.iso', accepted: ['sha256sum file.iso'] },
      ],
    },
    {
      name: 'split',
      description: 'chia một tệp lớn thành nhiều tệp nhỏ hơn',
      flags: [
        { flag: '-b <size>', meaning: 'chia theo kích thước mỗi phần chỉ định (vd: 100M)' },
        { flag: '-l <n>', meaning: 'chia theo số dòng mỗi phần' },
      ],
      scenarios: [
        { task: 'Chia tệp bigfile.tar thành các phần 100MB', accepted: ['split -b 100M bigfile.tar'] },
      ],
    },
    {
      name: 'paste',
      description: 'ghép các dòng tương ứng từ nhiều tệp lại theo cột, phân cách bằng tab',
      flags: [],
      scenarios: [
        { task: 'Ghép hai tệp a.txt và b.txt theo cột', accepted: ['paste a.txt b.txt'] },
      ],
    },
    {
      name: 'comm',
      description: 'so sánh hai tệp đã sắp xếp, hiển thị các dòng chỉ có ở tệp 1, chỉ có ở tệp 2, và các dòng chung',
      flags: [
        { flag: '-12', meaning: 'chỉ hiển thị các dòng chung giữa hai tệp (ẩn cột 1 và 2)' },
      ],
      scenarios: [
        { task: 'So sánh hai tệp đã sắp xếp a.txt và b.txt', accepted: ['comm a.txt b.txt'] },
      ],
    },
    {
      name: 'nl',
      description: 'đánh số thứ tự các dòng của một tệp văn bản',
      flags: [],
      scenarios: [
        { task: 'Đánh số dòng cho tệp notes.txt', accepted: ['nl notes.txt'] },
      ],
    },
    {
      name: 'rev',
      description: 'đảo ngược thứ tự ký tự trên mỗi dòng của đầu vào',
      flags: [],
      scenarios: [
        { task: 'Đảo ngược ký tự của chuỗi "hello" bằng rev', accepted: ['echo hello | rev', "echo 'hello' | rev"] },
      ],
    },
    {
      name: 'column',
      description: 'định dạng đầu vào thành các cột thẳng hàng, dễ đọc hơn',
      flags: [
        { flag: '-t', meaning: 'tự động căn chỉnh thành bảng dựa trên khoảng trắng' },
      ],
      scenarios: [
        { task: 'Định dạng tệp data.txt thành bảng các cột thẳng hàng', accepted: ['column -t data.txt'] },
      ],
    },
  ],
};
