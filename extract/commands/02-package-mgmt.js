const WEEKS = require('../weeks');
module.exports = {
  category: 'package-mgmt',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'apt update',
      description: 'cập nhật danh sách gói và phiên bản mới nhất từ các kho phần mềm (không cài đặt gì)',
      flags: [],
      scenarios: [
        { task: 'Cập nhật danh sách gói từ kho phần mềm', accepted: ['sudo apt update', 'apt update'] },
      ],
    },
    {
      name: 'apt upgrade',
      description: 'nâng cấp các gói đã cài đặt lên phiên bản mới nhất có sẵn trong kho',
      flags: [
        { flag: '-y', meaning: 'tự động xác nhận "yes" cho mọi câu hỏi, không cần tương tác' },
      ],
      scenarios: [
        { task: 'Nâng cấp toàn bộ gói đã cài lên phiên bản mới nhất, tự động đồng ý', accepted: ['sudo apt upgrade -y', 'sudo apt -y upgrade'] },
      ],
    },
    {
      name: 'apt install',
      description: 'cài đặt một gói phần mềm mới cùng các gói phụ thuộc',
      flags: [
        { flag: '-y', meaning: 'tự động xác nhận cài đặt' },
        { flag: '--reinstall', meaning: 'cài đặt lại gói đã có, ghi đè các tệp hiện tại' },
      ],
      scenarios: [
        { task: 'Cài đặt gói openssh-server, tự động xác nhận', accepted: ['sudo apt install -y openssh-server', 'sudo apt install openssh-server -y'] },
        { task: 'Cài đặt lại gói nginx', accepted: ['sudo apt install --reinstall nginx'] },
      ],
    },
    {
      name: 'apt remove',
      description: 'gỡ bỏ một gói phần mềm nhưng giữ lại tệp cấu hình',
      flags: [],
      scenarios: [
        { task: 'Gỡ bỏ gói apache2, giữ lại tệp cấu hình', accepted: ['sudo apt remove apache2'] },
      ],
    },
    {
      name: 'apt purge',
      description: 'gỡ bỏ một gói phần mềm cùng với toàn bộ tệp cấu hình liên quan',
      flags: [],
      scenarios: [
        { task: 'Gỡ bỏ hoàn toàn gói apache2 kể cả tệp cấu hình', accepted: ['sudo apt purge apache2'] },
      ],
    },
    {
      name: 'apt autoremove',
      description: 'gỡ bỏ các gói phụ thuộc không còn được sử dụng bởi bất kỳ gói nào khác',
      flags: [],
      scenarios: [
        { task: 'Dọn dẹp các gói phụ thuộc không còn cần thiết', accepted: ['sudo apt autoremove'] },
      ],
    },
    {
      name: 'apt search',
      description: 'tìm kiếm gói phần mềm theo tên hoặc mô tả trong kho phần mềm',
      flags: [],
      scenarios: [
        { task: 'Tìm kiếm gói có liên quan đến từ khóa "nginx"', accepted: ['apt search nginx'] },
      ],
    },
    {
      name: 'apt show',
      description: 'hiển thị thông tin chi tiết của một gói phần mềm (phiên bản, mô tả, phụ thuộc)',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết của gói nginx', accepted: ['apt show nginx'] },
      ],
    },
    {
      name: 'apt list',
      description: 'liệt kê các gói phần mềm theo điều kiện lọc',
      flags: [
        { flag: '--installed', meaning: 'chỉ liệt kê các gói đã được cài đặt trên hệ thống' },
        { flag: '--upgradable', meaning: 'chỉ liệt kê các gói đã cài có phiên bản mới hơn có thể nâng cấp' },
      ],
      scenarios: [
        { task: 'Liệt kê toàn bộ các gói đã được cài đặt', accepted: ['apt list --installed'] },
        { task: 'Liệt kê các gói có thể nâng cấp lên phiên bản mới', accepted: ['apt list --upgradable'] },
      ],
    },
    {
      name: 'dpkg',
      description: 'công cụ quản lý gói cấp thấp của Debian/Ubuntu, thao tác trực tiếp với tệp .deb',
      flags: [
        { flag: '-i <file.deb>', meaning: 'cài đặt một gói từ tệp .deb cục bộ' },
        { flag: '-r <tên gói>', meaning: 'gỡ bỏ gói nhưng giữ tệp cấu hình' },
        { flag: '-P <tên gói>', meaning: 'gỡ bỏ hoàn toàn gói kể cả tệp cấu hình (purge)' },
        { flag: '-l', meaning: 'liệt kê các gói đã cài đặt' },
        { flag: '-L <tên gói>', meaning: 'liệt kê các tệp thuộc về gói đã cài' },
        { flag: '-S <tên tệp>', meaning: 'tìm gói nào sở hữu một tệp cụ thể trên hệ thống' },
      ],
      scenarios: [
        { task: 'Cài đặt gói từ tệp cục bộ app.deb', accepted: ['sudo dpkg -i app.deb'] },
        { task: 'Liệt kê các tệp thuộc về gói nginx đã cài đặt', accepted: ['dpkg -L nginx'] },
      ],
    },
    {
      name: 'add-apt-repository',
      description: 'thêm một kho phần mềm (PPA/repository) bên thứ ba vào danh sách nguồn APT',
      flags: [
        { flag: '-y', meaning: 'tự động xác nhận thêm repository' },
        { flag: '--remove', meaning: 'gỡ bỏ repository đã thêm' },
      ],
      scenarios: [
        { task: 'Thêm kho PPA ppa:ondrej/php vào hệ thống', accepted: ['sudo add-apt-repository ppa:ondrej/php'] },
      ],
    },
  ],
};
