const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-package2',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'apt list --upgradable -a',
      description: 'liệt kê các gói có thể nâng cấp kèm toàn bộ phiên bản khả dụng, không chỉ phiên bản mới nhất',
      flags: [],
      scenarios: [
        { task: 'Xem toàn bộ phiên bản khả dụng của các gói có thể nâng cấp', accepted: ['apt list --upgradable -a'] },
      ],
    },
    {
      name: 'apt download',
      description: 'tải tệp .deb của một gói về thư mục hiện tại mà không cài đặt',
      flags: [],
      scenarios: [
        { task: 'Tải tệp .deb của gói nginx về thư mục hiện tại mà không cài đặt', accepted: ['apt download nginx'] },
      ],
    },
    {
      name: 'apt-get source',
      description: 'tải mã nguồn của một gói Debian/Ubuntu về thư mục hiện tại',
      flags: [],
      scenarios: [
        { task: 'Tải mã nguồn của gói nginx về thư mục hiện tại', accepted: ['apt-get source nginx'] },
      ],
    },
    {
      name: 'dpkg --configure -a',
      description: 'hoàn tất cấu hình các gói bị dang dở (thường dùng để sửa lỗi "dpkg was interrupted")',
      flags: [],
      scenarios: [
        { task: 'Sửa lỗi cài đặt gói bị gián đoạn (dpkg was interrupted)', accepted: ['sudo dpkg --configure -a'] },
      ],
    },
    {
      name: 'dpkg -c',
      description: 'liệt kê nội dung các tệp bên trong một tệp .deb mà không cần cài đặt',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách tệp bên trong gói app.deb mà không cài đặt', accepted: ['dpkg -c app.deb'] },
      ],
    },
    {
      name: 'dpkg -s',
      description: 'xem thông tin trạng thái chi tiết của một gói đã cài đặt (phiên bản, trạng thái, dependency)',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin trạng thái chi tiết của gói nginx đã cài đặt', accepted: ['dpkg -s nginx'] },
      ],
    },
    {
      name: 'ldconfig',
      description: 'cập nhật lại cache của trình liên kết động (dynamic linker) sau khi cài thêm thư viện chia sẻ mới',
      flags: [],
      scenarios: [
        { task: 'Cập nhật lại cache thư viện động sau khi cài thêm một thư viện mới', accepted: ['sudo ldconfig'] },
      ],
    },
    {
      name: 'update-alternatives',
      description: 'quản lý nhiều phiên bản cùng cài đặt của một lệnh, chọn phiên bản mặc định sẽ được dùng',
      flags: [
        { flag: '--config <tên>', meaning: 'hiển thị danh sách các lựa chọn và cho phép chọn phiên bản mặc định' },
      ],
      scenarios: [
        { task: 'Chọn phiên bản mặc định cho lệnh python trong số các phiên bản đã cài', accepted: ['sudo update-alternatives --config python'] },
      ],
    },
    {
      name: 'add-apt-repository --remove',
      description: 'gỡ bỏ một kho phần mềm (PPA) đã thêm trước đó khỏi danh sách nguồn APT',
      flags: [],
      scenarios: [
        { task: 'Gỡ bỏ kho PPA ppa:ondrej/php đã thêm trước đó', accepted: ['sudo add-apt-repository --remove ppa:ondrej/php'] },
      ],
    },
    {
      name: 'apt-get check',
      description: 'kiểm tra tính nhất quán của hệ thống gói, phát hiện dependency bị hỏng',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra tính nhất quán của hệ thống gói, tìm dependency bị hỏng', accepted: ['sudo apt-get check'] },
      ],
    },
    {
      name: 'apt-get install -f',
      description: 'tự động sửa các gói phụ thuộc bị thiếu hoặc hỏng (fix broken dependencies)',
      flags: [],
      scenarios: [
        { task: 'Tự động sửa các gói phụ thuộc bị thiếu hoặc hỏng trên hệ thống', accepted: ['sudo apt-get install -f', 'sudo apt install -f'] },
      ],
    },
  ],
};
