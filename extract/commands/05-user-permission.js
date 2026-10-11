const WEEKS = require('../weeks');
module.exports = {
  category: 'user-permission',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'useradd',
      description: 'tạo tài khoản người dùng mới trên hệ thống',
      flags: [
        { flag: '-m', meaning: 'tự động tạo thư mục home cho người dùng mới' },
        { flag: '-s <shell>', meaning: 'chỉ định shell đăng nhập mặc định cho người dùng' },
        { flag: '-g <group>', meaning: 'chỉ định nhóm chính (primary group) cho người dùng' },
        { flag: '-G <group1,group2>', meaning: 'thêm người dùng vào các nhóm phụ (supplementary groups)' },
        { flag: '-u <uid>', meaning: 'chỉ định UID cụ thể cho người dùng mới' },
        { flag: '-d <path>', meaning: 'chỉ định đường dẫn thư mục home tùy chỉnh' },
        { flag: '-e <ngày>', meaning: 'thiết lập ngày hết hạn tài khoản' },
      ],
      scenarios: [
        { task: 'Tạo người dùng alice kèm thư mục home và shell là bash', accepted: ['sudo useradd -m -s /bin/bash alice'] },
        { task: 'Tạo người dùng bob thuộc nhóm chính developers và nhóm phụ sudo', accepted: ['sudo useradd -m -g developers -G sudo bob'] },
      ],
    },
    {
      name: 'adduser',
      description: 'phiên bản thân thiện người dùng (interactive) của useradd trên Debian/Ubuntu, tự hỏi thông tin cần thiết',
      flags: [],
      scenarios: [
        { task: 'Tạo người dùng mới tên carol bằng tiện ích tương tác adduser', accepted: ['sudo adduser carol'] },
      ],
    },
    {
      name: 'usermod',
      description: 'thay đổi thông tin của một tài khoản người dùng đã tồn tại',
      flags: [
        { flag: '-aG <group>', meaning: 'thêm người dùng vào nhóm phụ chỉ định mà không xóa khỏi các nhóm phụ hiện có (phải đi cùng -a)' },
        { flag: '-g <group>', meaning: 'đổi nhóm chính (primary group) của người dùng' },
        { flag: '-s <shell>', meaning: 'đổi shell đăng nhập của người dùng' },
        { flag: '-l <tên mới>', meaning: 'đổi tên đăng nhập (login name) của người dùng' },
        { flag: '-L', meaning: 'khóa (lock) tài khoản, vô hiệu hóa mật khẩu đăng nhập' },
        { flag: '-U', meaning: 'mở khóa (unlock) tài khoản đã bị khóa' },
        { flag: '-d <path> -m', meaning: 'đổi và di chuyển thư mục home sang vị trí mới' },
      ],
      scenarios: [
        { task: 'Thêm người dùng alice vào nhóm sudo mà không mất các nhóm phụ hiện có', accepted: ['sudo usermod -aG sudo alice'] },
        { task: 'Khóa tài khoản người dùng bob', accepted: ['sudo usermod -L bob'] },
        { task: 'Đổi shell đăng nhập của carol sang /bin/zsh', accepted: ['sudo usermod -s /bin/zsh carol'] },
      ],
    },
    {
      name: 'userdel',
      description: 'xóa một tài khoản người dùng khỏi hệ thống',
      flags: [
        { flag: '-r', meaning: 'xóa luôn thư mục home và mailbox của người dùng' },
        { flag: '-f', meaning: 'xóa cưỡng chế kể cả khi người dùng đang đăng nhập' },
      ],
      scenarios: [
        { task: 'Xóa người dùng alice kèm thư mục home của họ', accepted: ['sudo userdel -r alice'] },
      ],
    },
    {
      name: 'groupadd',
      description: 'tạo một nhóm người dùng mới',
      flags: [
        { flag: '-g <gid>', meaning: 'chỉ định GID cụ thể cho nhóm mới' },
      ],
      scenarios: [
        { task: 'Tạo nhóm mới tên developers', accepted: ['sudo groupadd developers'] },
      ],
    },
    {
      name: 'groupdel',
      description: 'xóa một nhóm người dùng khỏi hệ thống',
      flags: [],
      scenarios: [
        { task: 'Xóa nhóm developers', accepted: ['sudo groupdel developers'] },
      ],
    },
    {
      name: 'gpasswd',
      description: 'quản lý thành viên và mật khẩu của một nhóm',
      flags: [
        { flag: '-a <user>', meaning: 'thêm người dùng vào một nhóm' },
        { flag: '-d <user>', meaning: 'xóa người dùng khỏi một nhóm' },
      ],
      scenarios: [
        { task: 'Thêm người dùng alice vào nhóm developers bằng gpasswd', accepted: ['sudo gpasswd -a alice developers'] },
      ],
    },
    {
      name: 'passwd',
      description: 'đặt hoặc đổi mật khẩu đăng nhập cho tài khoản người dùng',
      flags: [
        { flag: '-l', meaning: 'khóa mật khẩu của người dùng (vô hiệu hóa đăng nhập bằng mật khẩu)' },
        { flag: '-u', meaning: 'mở khóa mật khẩu đã bị khóa trước đó' },
        { flag: '-e', meaning: 'buộc người dùng phải đổi mật khẩu trong lần đăng nhập kế tiếp' },
        { flag: '-S', meaning: 'hiển thị trạng thái mật khẩu hiện tại của tài khoản' },
      ],
      scenarios: [
        { task: 'Đổi mật khẩu cho người dùng hiện tại', accepted: ['passwd'] },
        { task: 'Đổi mật khẩu cho người dùng alice (quyền root)', accepted: ['sudo passwd alice'] },
        { task: 'Khóa mật khẩu của tài khoản bob', accepted: ['sudo passwd -l bob'] },
      ],
    },
    {
      name: 'chage',
      description: 'xem hoặc thay đổi thông tin về thời hạn sử dụng mật khẩu (password aging) của tài khoản',
      flags: [
        { flag: '-l <user>', meaning: 'liệt kê thông tin thời hạn mật khẩu hiện tại của người dùng' },
        { flag: '-M <n>', meaning: 'thiết lập số ngày tối đa được dùng trước khi phải đổi mật khẩu' },
        { flag: '-E <ngày>', meaning: 'thiết lập ngày tài khoản hết hạn' },
      ],
      scenarios: [
        { task: 'Xem thông tin thời hạn mật khẩu của người dùng alice', accepted: ['sudo chage -l alice', 'chage -l alice'] },
      ],
    },
    {
      name: 'su',
      description: 'chuyển sang phiên làm việc của một người dùng khác (mặc định là root)',
      flags: [
        { flag: '-', meaning: 'chuyển sang môi trường đăng nhập đầy đủ (login shell) của người dùng đích' },
        { flag: '-c "<lệnh>"', meaning: 'chỉ chạy một lệnh với quyền người dùng đích rồi quay lại' },
      ],
      scenarios: [
        { task: 'Chuyển sang tài khoản root kèm môi trường đăng nhập đầy đủ', accepted: ['su -', 'su - root'] },
        { task: 'Chuyển sang người dùng alice', accepted: ['su alice', 'su - alice'] },
      ],
    },
    {
      name: 'sudo',
      description: 'thực thi một lệnh với quyền của người dùng khác (mặc định root), dựa trên cấu hình /etc/sudoers',
      flags: [
        { flag: '-u <user>', meaning: 'thực thi lệnh với quyền của một người dùng cụ thể thay vì root' },
        { flag: '-l', meaning: 'liệt kê các quyền sudo mà người dùng hiện tại được phép' },
        { flag: '-i', meaning: 'khởi động một shell đăng nhập với quyền root' },
      ],
      scenarios: [
        { task: 'Chạy lệnh apt update với quyền quản trị', accepted: ['sudo apt update'] },
        { task: 'Xem danh sách quyền sudo của người dùng hiện tại', accepted: ['sudo -l'] },
      ],
    },
    {
      name: 'visudo',
      description: 'chỉnh sửa tệp /etc/sudoers một cách an toàn, tự kiểm tra lỗi cú pháp trước khi lưu',
      flags: [],
      scenarios: [
        { task: 'Chỉnh sửa cấu hình quyền sudo một cách an toàn', accepted: ['sudo visudo'] },
      ],
    },
    {
      name: 'chmod',
      description: 'thay đổi quyền truy cập (đọc/ghi/thực thi) của tệp hoặc thư mục',
      flags: [
        { flag: '<octal 3 chữ số>', meaning: 'đặt quyền trực tiếp theo số hệ bát phân cho chủ sở hữu, nhóm, người khác (vd: 755)' },
        { flag: 'u+x', meaning: 'thêm quyền thực thi cho chủ sở hữu (user)' },
        { flag: 'g-w', meaning: 'bỏ quyền ghi của nhóm (group)' },
        { flag: 'o=r', meaning: 'đặt quyền của người khác (other) chính xác bằng chỉ đọc' },
        { flag: 'a+r', meaning: 'thêm quyền đọc cho tất cả (all: user, group, other)' },
        { flag: '-R', meaning: 'áp dụng thay đổi quyền đệ quy cho toàn bộ thư mục con' },
        { flag: '+t', meaning: 'bật sticky bit trên thư mục (chỉ chủ sở hữu tệp mới được xóa tệp trong thư mục dùng chung)' },
        { flag: 'u+s', meaning: 'bật SUID, chương trình chạy với quyền của chủ sở hữu tệp' },
        { flag: 'g+s', meaning: 'bật SGID, chương trình chạy với quyền của nhóm sở hữu, hoặc thư mục con kế thừa nhóm' },
        { flag: 'ug+rw', meaning: 'thêm đồng thời quyền đọc và ghi cho cả chủ sở hữu lẫn nhóm' },
        { flag: '--reference=<tệp>', meaning: 'sao chép quyền truy cập từ một tệp tham chiếu sang tệp đích' },
        { flag: '-v', meaning: 'hiển thị thông báo cho mỗi tệp được thay đổi quyền (verbose)' },
      ],
      scenarios: [
        { task: 'Cấp quyền rwxr-xr-x (755) cho tệp script.sh', accepted: ['chmod 755 script.sh'] },
        { task: 'Cấp quyền thực thi cho chủ sở hữu của tệp deploy.sh', accepted: ['chmod u+x deploy.sh', 'chmod +x deploy.sh'] },
        { task: 'Đặt quyền rw-r-----  (640) cho tệp secret.conf', accepted: ['chmod 640 secret.conf'] },
        { task: 'Áp dụng quyền 644 cho toàn bộ tệp trong thư mục /var/www đệ quy', accepted: ['chmod -R 644 /var/www'] },
        { task: 'Bật sticky bit cho thư mục dùng chung /shared (quyền hiện tại 777)', accepted: ['chmod +t /shared', 'chmod 1777 /shared'] },
        { task: 'Bỏ toàn bộ quyền của nhóm khác (other) trên tệp private.txt', accepted: ['chmod o-rwx private.txt', 'chmod o= private.txt'] },
        { task: 'Đặt quyền rwxrwxr-x (775) cho thư mục /srv/shared', accepted: ['chmod 775 /srv/shared'] },
        { task: 'Bật SGID cho thư mục /srv/team để các tệp mới tạo bên trong tự kế thừa nhóm sở hữu', accepted: ['chmod g+s /srv/team', 'chmod 2775 /srv/team'] },
        { task: 'Sao chép quyền truy cập từ tệp template.sh sang tệp deploy.sh', accepted: ['chmod --reference=template.sh deploy.sh'] },
      ],
    },
    {
      name: 'chown',
      description: 'thay đổi chủ sở hữu (owner) và/hoặc nhóm sở hữu (group) của tệp hoặc thư mục',
      flags: [
        { flag: '<user>', meaning: 'đổi chủ sở hữu tệp sang người dùng chỉ định' },
        { flag: '<user>:<group>', meaning: 'đổi đồng thời cả chủ sở hữu và nhóm sở hữu' },
        { flag: ':<group>', meaning: 'chỉ đổi nhóm sở hữu, giữ nguyên chủ sở hữu' },
        { flag: '-R', meaning: 'áp dụng thay đổi đệ quy cho toàn bộ thư mục con' },
      ],
      scenarios: [
        { task: 'Đổi chủ sở hữu tệp index.html sang người dùng www-data', accepted: ['sudo chown www-data index.html'] },
        { task: 'Đổi cả chủ sở hữu và nhóm của thư mục /var/www sang www-data, đệ quy', accepted: ['sudo chown -R www-data:www-data /var/www'] },
      ],
    },
    {
      name: 'chgrp',
      description: 'thay đổi nhóm sở hữu (group) của tệp hoặc thư mục',
      flags: [
        { flag: '-R', meaning: 'áp dụng thay đổi nhóm sở hữu đệ quy cho toàn bộ thư mục con' },
      ],
      scenarios: [
        { task: 'Đổi nhóm sở hữu của thư mục /shared sang nhóm staff', accepted: ['sudo chgrp staff /shared'] },
      ],
    },
    {
      name: 'umask',
      description: 'xem hoặc thiết lập mặt nạ quyền mặc định áp dụng khi tạo tệp/thư mục mới',
      flags: [
        { flag: '<octal>', meaning: 'thiết lập giá trị umask mới theo hệ bát phân' },
      ],
      scenarios: [
        { task: 'Xem giá trị umask hiện tại', accepted: ['umask'] },
        { task: 'Thiết lập umask là 022', accepted: ['umask 022'] },
      ],
    },
    {
      name: 'id',
      description: 'hiển thị UID, GID và các nhóm mà người dùng thuộc về',
      flags: [
        { flag: '-u', meaning: 'chỉ hiển thị UID' },
        { flag: '-g', meaning: 'chỉ hiển thị GID của nhóm chính' },
        { flag: '-Gn', meaning: 'hiển thị tên của tất cả các nhóm mà người dùng thuộc về' },
      ],
      scenarios: [
        { task: 'Xem UID, GID và các nhóm của người dùng alice', accepted: ['id alice'] },
      ],
    },
    {
      name: 'groups',
      description: 'hiển thị danh sách các nhóm mà một người dùng là thành viên',
      flags: [],
      scenarios: [
        { task: 'Xem các nhóm mà người dùng alice thuộc về', accepted: ['groups alice'] },
      ],
    },
  ],
};
