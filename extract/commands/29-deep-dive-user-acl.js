const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-user-acl',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'usermod -e',
      description: 'thiết lập ngày hết hạn tài khoản cho một người dùng đã tồn tại',
      flags: [],
      scenarios: [
        { task: 'Đặt ngày hết hạn tài khoản alice là 2026-12-31', accepted: ['sudo usermod -e 2026-12-31 alice'] },
        { task: 'Gỡ bỏ ngày hết hạn tài khoản của alice (không bao giờ hết hạn)', accepted: ['sudo usermod -e "" alice', "sudo usermod -e '' alice"] },
      ],
    },
    {
      name: 'usermod -c',
      description: 'thay đổi trường comment (thường là tên đầy đủ) của một tài khoản người dùng',
      flags: [],
      scenarios: [
        { task: 'Đặt tên đầy đủ "Nguyen Van A" cho tài khoản alice', accepted: ['sudo usermod -c "Nguyen Van A" alice'] },
      ],
    },
    {
      name: 'chage -M',
      description: 'thiết lập số ngày tối đa được dùng một mật khẩu trước khi bị buộc đổi',
      flags: [],
      scenarios: [
        { task: 'Thiết lập mật khẩu của alice phải đổi sau tối đa 90 ngày', accepted: ['sudo chage -M 90 alice'] },
        { task: 'Thiết lập mật khẩu của alice không bao giờ hết hạn', accepted: ['sudo chage -M -1 alice', 'sudo chage -M 99999 alice'] },
      ],
    },
    {
      name: 'chage -d 0',
      description: 'buộc người dùng phải đổi mật khẩu ngay trong lần đăng nhập kế tiếp',
      flags: [],
      scenarios: [
        { task: 'Buộc người dùng alice đổi mật khẩu ngay trong lần đăng nhập kế tiếp', accepted: ['sudo chage -d 0 alice'] },
      ],
    },
    {
      name: 'faillock',
      description: 'xem hoặc đặt lại số lần đăng nhập thất bại của một tài khoản (dùng để chống brute-force cục bộ)',
      flags: [
        { flag: '--user <user>', meaning: 'chỉ hiển thị thông tin khóa của một người dùng cụ thể' },
        { flag: '--reset --user <user>', meaning: 'đặt lại bộ đếm đăng nhập thất bại cho một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Xem số lần đăng nhập thất bại của tài khoản alice', accepted: ['sudo faillock --user alice'] },
        { task: 'Đặt lại (reset) số lần đăng nhập thất bại của alice để mở khóa tài khoản', accepted: ['sudo faillock --user alice --reset', 'sudo faillock --reset --user alice'] },
      ],
    },
    {
      name: 'sudo -k',
      description: 'xóa bộ nhớ đệm xác thực sudo của phiên hiện tại, buộc phải nhập lại mật khẩu ở lần sudo kế tiếp',
      flags: [],
      scenarios: [
        { task: 'Buộc phải nhập lại mật khẩu ở lần chạy sudo kế tiếp trong phiên hiện tại', accepted: ['sudo -k'] },
      ],
    },
    {
      name: 'sudo -v',
      description: 'gia hạn thời gian xác thực sudo hiện tại mà không chạy lệnh nào',
      flags: [],
      scenarios: [
        { task: 'Gia hạn thời gian xác thực sudo hiện tại mà không chạy lệnh gì', accepted: ['sudo -v'] },
      ],
    },
    {
      name: 'setfacl -x',
      description: 'xóa một quy tắc ACL cụ thể khỏi một tệp/thư mục',
      flags: [],
      scenarios: [
        { task: 'Xóa quyền ACL của người dùng alice trên tệp shared.txt', accepted: ['setfacl -x u:alice shared.txt'] },
      ],
    },
    {
      name: 'setfacl -b',
      description: 'xóa toàn bộ các quy tắc ACL khỏi một tệp/thư mục, trở về chỉ dùng quyền Unix cơ bản',
      flags: [],
      scenarios: [
        { task: 'Xóa toàn bộ ACL trên tệp shared.txt, chỉ giữ lại quyền Unix cơ bản', accepted: ['setfacl -b shared.txt'] },
      ],
    },
    {
      name: 'setfacl -R -d',
      description: 'thiết lập ACL mặc định (default ACL) cho một thư mục, để các tệp/thư mục con mới tạo tự kế thừa quyền',
      flags: [],
      scenarios: [
        { task: 'Thiết lập ACL mặc định cho thư mục /shared để nhóm developers luôn có quyền đọc-ghi trên tệp mới tạo', accepted: ['setfacl -R -d -m g:developers:rw /shared'] },
      ],
    },
    {
      name: 'id -nG',
      description: 'hiển thị tên (không phải số GID) của toàn bộ các nhóm mà người dùng hiện tại thuộc về',
      flags: [],
      scenarios: [
        { task: 'Xem tên của toàn bộ các nhóm mà người dùng hiện tại thuộc về', accepted: ['id -nG'] },
      ],
    },
    {
      name: 'newgrp',
      description: 'chuyển nhóm chính hiện tại của phiên làm việc sang một nhóm khác mà người dùng là thành viên',
      flags: [],
      scenarios: [
        { task: 'Chuyển nhóm chính hiện tại của phiên làm việc sang nhóm developers', accepted: ['newgrp developers'] },
      ],
    },
  ],
};
