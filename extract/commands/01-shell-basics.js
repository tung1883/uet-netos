const WEEKS = require('../weeks');
module.exports = {
  category: 'shell-basics',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'man',
      description: 'hiển thị trang hướng dẫn sử dụng (manual page) của một lệnh',
      flags: [
        { flag: '-k <từ khóa>', meaning: 'tìm các trang man có mô tả chứa từ khóa (tương đương apropos)' },
        { flag: '-f <lệnh>', meaning: 'hiển thị mô tả ngắn gọn một dòng của lệnh (tương đương whatis)' },
        { flag: '-s <số>', meaning: 'chỉ định section cụ thể của trang man (vd: 5 cho file định dạng)' },
        { flag: '-a', meaning: 'hiển thị lần lượt tất cả các trang man trùng tên ở mọi section' },
      ],
      scenarios: [
        { task: 'Xem trang hướng dẫn sử dụng của lệnh ls', accepted: ['man ls'] },
        { task: 'Tìm tất cả trang man có liên quan đến từ khóa "passwd"', accepted: ['man -k passwd', 'apropos passwd'] },
        { task: 'Xem mô tả định dạng tệp cấu hình /etc/passwd (section 5)', accepted: ['man 5 passwd', 'man -s 5 passwd'] },
      ],
    },
    {
      name: 'info',
      description: 'hiển thị tài liệu dạng siêu văn bản (hypertext) chi tiết hơn man page cho một số lệnh GNU',
      flags: [
        { flag: '<lệnh>', meaning: 'mở tài liệu info của lệnh được chỉ định' },
      ],
      scenarios: [
        { task: 'Xem tài liệu info của lệnh coreutils', accepted: ['info coreutils'] },
      ],
    },
    {
      name: 'pwd',
      description: 'in ra đường dẫn tuyệt đối của thư mục làm việc hiện tại',
      flags: [
        { flag: '-P', meaning: 'in đường dẫn vật lý thực tế, phân giải hết các liên kết mềm' },
        { flag: '-L', meaning: 'in đường dẫn logic, giữ nguyên các liên kết mềm (mặc định)' },
      ],
      scenarios: [
        { task: 'In đường dẫn thư mục hiện tại', accepted: ['pwd'] },
        { task: 'In đường dẫn vật lý thực tế của thư mục hiện tại, bỏ qua symlink', accepted: ['pwd -P'] },
      ],
    },
    {
      name: 'cd',
      description: 'thay đổi thư mục làm việc hiện tại',
      flags: [
        { flag: '-', meaning: 'quay lại thư mục làm việc trước đó' },
        { flag: '~', meaning: 'chuyển về thư mục home của người dùng hiện tại' },
        { flag: '..', meaning: 'chuyển lên thư mục cha' },
      ],
      scenarios: [
        { task: 'Chuyển về thư mục home của người dùng hiện tại', accepted: ['cd', 'cd ~'] },
        { task: 'Quay lại thư mục làm việc trước đó', accepted: ['cd -'] },
        { task: 'Chuyển lên thư mục cha của thư mục hiện tại', accepted: ['cd ..'] },
      ],
    },
    {
      name: 'ls',
      description: 'liệt kê nội dung (tệp, thư mục) bên trong một thư mục',
      flags: [
        { flag: '-l', meaning: 'hiển thị dạng danh sách dài, gồm quyền, chủ sở hữu, kích thước, thời gian sửa' },
        { flag: '-a', meaning: 'hiển thị cả các tệp/thư mục ẩn (bắt đầu bằng dấu chấm)' },
        { flag: '-h', meaning: 'hiển thị kích thước ở dạng dễ đọc (K, M, G) khi dùng cùng -l' },
        { flag: '-i', meaning: 'hiển thị số inode của từng tệp/thư mục' },
        { flag: '-R', meaning: 'liệt kê đệ quy toàn bộ thư mục con' },
        { flag: '-t', meaning: 'sắp xếp theo thời gian sửa đổi, mới nhất lên đầu' },
        { flag: '-S', meaning: 'sắp xếp theo kích thước, lớn nhất lên đầu' },
        { flag: '-r', meaning: 'đảo ngược thứ tự sắp xếp' },
        { flag: '-d', meaning: 'chỉ hiển thị thông tin của chính thư mục, không liệt kê nội dung bên trong' },
      ],
      scenarios: [
        { task: 'Liệt kê chi tiết (dạng dài) tất cả tệp kể cả tệp ẩn trong thư mục hiện tại', accepted: ['ls -la', 'ls -al', 'ls -l -a', 'ls -a -l'] },
        { task: 'Liệt kê các tệp kèm số inode ở đầu mỗi dòng', accepted: ['ls -li', 'ls -il'] },
        { task: 'Liệt kê đệ quy toàn bộ cây thư mục con của thư mục hiện tại', accepted: ['ls -R'] },
        { task: 'Liệt kê chi tiết với kích thước tệp hiển thị dễ đọc (K/M/G)', accepted: ['ls -lh', 'ls -hl'] },
        { task: 'Liệt kê các tệp sắp xếp theo thời gian sửa đổi mới nhất trước', accepted: ['ls -lt', 'ls -tl'] },
      ],
    },
    {
      name: 'cp',
      description: 'sao chép tệp hoặc thư mục',
      flags: [
        { flag: '-r', meaning: 'sao chép đệ quy, dùng khi sao chép thư mục' },
        { flag: '-p', meaning: 'giữ nguyên thuộc tính tệp (quyền, chủ sở hữu, timestamp) khi sao chép' },
        { flag: '-i', meaning: 'hỏi xác nhận trước khi ghi đè tệp đích đã tồn tại' },
        { flag: '-v', meaning: 'hiển thị chi tiết quá trình sao chép (verbose)' },
        { flag: '-u', meaning: 'chỉ sao chép khi tệp nguồn mới hơn tệp đích hoặc tệp đích chưa tồn tại' },
        { flag: '-a', meaning: 'chế độ archive, tương đương -dR --preserve=all, giữ nguyên mọi thuộc tính và liên kết' },
      ],
      scenarios: [
        { task: 'Sao chép đệ quy toàn bộ thư mục /data sang /backup', accepted: ['cp -r /data /backup'] },
        { task: 'Sao chép tệp a.txt sang b.txt và giữ nguyên quyền, thời gian gốc', accepted: ['cp -p a.txt b.txt'] },
        { task: 'Sao chép thư mục giữ nguyên toàn bộ thuộc tính (archive mode)', accepted: ['cp -a /data /backup'] },
      ],
    },
    {
      name: 'mv',
      description: 'di chuyển hoặc đổi tên tệp, thư mục',
      flags: [
        { flag: '-i', meaning: 'hỏi xác nhận trước khi ghi đè tệp đích' },
        { flag: '-v', meaning: 'hiển thị chi tiết quá trình di chuyển' },
        { flag: '-n', meaning: 'không ghi đè nếu tệp đích đã tồn tại' },
      ],
      scenarios: [
        { task: 'Đổi tên tệp old.txt thành new.txt', accepted: ['mv old.txt new.txt'] },
        { task: 'Di chuyển tệp report.txt vào thư mục /archive và hỏi xác nhận nếu trùng tên', accepted: ['mv -i report.txt /archive'] },
      ],
    },
    {
      name: 'rm',
      description: 'xóa tệp hoặc thư mục',
      flags: [
        { flag: '-r', meaning: 'xóa đệ quy, dùng khi xóa thư mục cùng nội dung bên trong' },
        { flag: '-f', meaning: 'xóa cưỡng chế, không hỏi xác nhận, bỏ qua lỗi tệp không tồn tại' },
        { flag: '-i', meaning: 'hỏi xác nhận trước khi xóa từng tệp' },
        { flag: '-v', meaning: 'hiển thị chi tiết các tệp đã xóa' },
      ],
      scenarios: [
        { task: 'Xóa toàn bộ thư mục /tmp/old kể cả nội dung bên trong, không hỏi xác nhận', accepted: ['rm -rf /tmp/old'] },
        { task: 'Xóa tệp notes.txt và hỏi xác nhận trước khi xóa', accepted: ['rm -i notes.txt'] },
      ],
    },
    {
      name: 'mkdir',
      description: 'tạo thư mục mới',
      flags: [
        { flag: '-p', meaning: 'tạo cả các thư mục cha nếu chưa tồn tại, không báo lỗi nếu thư mục đã tồn tại' },
        { flag: '-v', meaning: 'hiển thị thông báo cho mỗi thư mục được tạo' },
        { flag: '-m <mode>', meaning: 'thiết lập quyền truy cập cho thư mục ngay khi tạo' },
      ],
      scenarios: [
        { task: 'Tạo đường dẫn thư mục lồng nhau /data/project/logs, tự tạo các thư mục cha còn thiếu', accepted: ['mkdir -p /data/project/logs'] },
        { task: 'Tạo thư mục secret với quyền 700 ngay khi tạo', accepted: ['mkdir -m 700 secret', 'mkdir -m700 secret'] },
      ],
    },
    {
      name: 'rmdir',
      description: 'xóa thư mục rỗng',
      flags: [
        { flag: '-p', meaning: 'xóa luôn các thư mục cha nếu chúng trở thành rỗng sau khi xóa' },
      ],
      scenarios: [
        { task: 'Xóa thư mục rỗng empty_dir', accepted: ['rmdir empty_dir'] },
      ],
    },
    {
      name: 'touch',
      description: 'tạo tệp rỗng mới hoặc cập nhật thời gian truy cập/sửa đổi của tệp đã tồn tại',
      flags: [
        { flag: '-a', meaning: 'chỉ cập nhật thời gian truy cập (access time)' },
        { flag: '-m', meaning: 'chỉ cập nhật thời gian sửa đổi (modification time)' },
        { flag: '-c', meaning: 'không tạo tệp mới nếu tệp chưa tồn tại' },
      ],
      scenarios: [
        { task: 'Tạo tệp rỗng tên notes.txt', accepted: ['touch notes.txt'] },
      ],
    },
    {
      name: 'cat',
      description: 'hiển thị nội dung tệp ra màn hình hoặc nối nhiều tệp lại',
      flags: [
        { flag: '-n', meaning: 'đánh số thứ tự từng dòng' },
        { flag: '-A', meaning: 'hiển thị các ký tự ẩn (tab, cuối dòng) để kiểm tra định dạng' },
        { flag: '-s', meaning: 'gộp nhiều dòng trống liên tiếp thành một dòng trống' },
      ],
      scenarios: [
        { task: 'Hiển thị nội dung tệp /etc/hosts kèm số thứ tự dòng', accepted: ['cat -n /etc/hosts'] },
        { task: 'Nối nội dung a.txt và b.txt rồi ghi ra tệp c.txt', accepted: ['cat a.txt b.txt > c.txt'] },
      ],
    },
    {
      name: 'less',
      description: 'xem nội dung tệp theo từng trang, có thể cuộn tới lui, tìm kiếm',
      flags: [
        { flag: '-N', meaning: 'hiển thị số thứ tự dòng' },
        { flag: '-S', meaning: 'không tự xuống dòng khi nội dung dài hơn chiều rộng màn hình' },
        { flag: '+G', meaning: 'mở tệp và nhảy ngay tới cuối tệp' },
      ],
      scenarios: [
        { task: 'Xem tệp log hệ thống /var/log/syslog theo từng trang', accepted: ['less /var/log/syslog'] },
      ],
    },
    {
      name: 'head',
      description: 'hiển thị một số dòng đầu tiên của tệp',
      flags: [
        { flag: '-n <số>', meaning: 'chỉ định số dòng đầu cần hiển thị' },
        { flag: '-c <số>', meaning: 'chỉ định số byte đầu cần hiển thị' },
      ],
      scenarios: [
        { task: 'Hiển thị 20 dòng đầu tiên của tệp access.log', accepted: ['head -n 20 access.log', 'head -20 access.log'] },
      ],
    },
    {
      name: 'tail',
      description: 'hiển thị một số dòng cuối cùng của tệp',
      flags: [
        { flag: '-n <số>', meaning: 'chỉ định số dòng cuối cần hiển thị' },
        { flag: '-f', meaning: 'theo dõi tệp liên tục, hiển thị thêm dòng mới ngay khi tệp được ghi thêm' },
        { flag: '-F', meaning: 'giống -f nhưng tự nối lại nếu tệp bị xoay vòng (log rotate)' },
      ],
      scenarios: [
        { task: 'Theo dõi liên tục tệp log /var/log/syslog khi có dòng mới', accepted: ['tail -f /var/log/syslog'] },
        { task: 'Hiển thị 50 dòng cuối cùng của tệp app.log', accepted: ['tail -n 50 app.log', 'tail -50 app.log'] },
      ],
    },
    {
      name: 'wc',
      description: 'đếm số dòng, từ, ký tự trong tệp hoặc đầu vào',
      flags: [
        { flag: '-l', meaning: 'chỉ đếm số dòng' },
        { flag: '-w', meaning: 'chỉ đếm số từ' },
        { flag: '-c', meaning: 'chỉ đếm số byte' },
        { flag: '-m', meaning: 'chỉ đếm số ký tự' },
      ],
      scenarios: [
        { task: 'Đếm số dòng trong tệp /etc/passwd', accepted: ['wc -l /etc/passwd'] },
      ],
    },
    {
      name: 'history',
      description: 'hiển thị danh sách các lệnh đã thực hiện trước đó trong phiên shell',
      flags: [
        { flag: '-c', meaning: 'xóa toàn bộ lịch sử lệnh của phiên hiện tại' },
        { flag: '-d <số>', meaning: 'xóa một dòng lịch sử cụ thể theo số thứ tự' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ lịch sử các lệnh đã gõ', accepted: ['history'] },
      ],
    },
    {
      name: 'alias',
      description: 'tạo tên gọi tắt (bí danh) cho một lệnh hoặc chuỗi lệnh',
      flags: [
        { flag: '-p', meaning: 'liệt kê toàn bộ các alias hiện có' },
      ],
      scenarios: [
        { task: 'Tạo alias ll cho lệnh ls -la', accepted: ["alias ll='ls -la'", 'alias ll="ls -la"'] },
      ],
    },
    {
      name: 'whoami',
      description: 'hiển thị tên người dùng hiện đang đăng nhập (effective user)',
      flags: [],
      scenarios: [
        { task: 'Hiển thị tên người dùng hiện tại đang thao tác trên shell', accepted: ['whoami'] },
      ],
    },
    {
      name: 'who',
      description: 'hiển thị danh sách người dùng đang đăng nhập vào hệ thống',
      flags: [
        { flag: '-b', meaning: 'hiển thị thời điểm hệ thống khởi động lần cuối' },
        { flag: '-q', meaning: 'chỉ hiển thị tên người dùng đang đăng nhập và tổng số lượng' },
      ],
      scenarios: [
        { task: 'Xem danh sách người dùng đang đăng nhập vào hệ thống', accepted: ['who'] },
      ],
    },
    {
      name: 'w',
      description: 'hiển thị người dùng đang đăng nhập cùng tiến trình họ đang chạy và tải hệ thống',
      flags: [],
      scenarios: [
        { task: 'Xem người dùng đang đăng nhập và các lệnh họ đang chạy', accepted: ['w'] },
      ],
    },
    {
      name: 'uname',
      description: 'hiển thị thông tin về hệ điều hành và nhân hệ thống (kernel)',
      flags: [
        { flag: '-a', meaning: 'hiển thị toàn bộ thông tin hệ thống (tên kernel, hostname, version, kiến trúc)' },
        { flag: '-r', meaning: 'chỉ hiển thị phiên bản kernel đang chạy' },
        { flag: '-m', meaning: 'hiển thị kiến trúc phần cứng (vd: x86_64)' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ thông tin hệ thống và kernel', accepted: ['uname -a'] },
        { task: 'Xem phiên bản kernel hiện đang chạy', accepted: ['uname -r'] },
      ],
    },
  ],
};
