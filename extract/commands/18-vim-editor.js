const WEEKS = require('../weeks');
module.exports = {
  category: 'vim-editor',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'vim :w',
      description: 'lệnh ex trong vi/vim dùng để lưu (write) tệp đang chỉnh sửa',
      flags: [],
      scenarios: [
        { task: 'Lưu tệp đang chỉnh sửa trong vim', accepted: [':w'] },
      ],
    },
    {
      name: 'vim :wq',
      description: 'lệnh ex trong vi/vim dùng để lưu tệp rồi thoát',
      flags: [],
      scenarios: [
        { task: 'Lưu tệp và thoát khỏi vim', accepted: [':wq'] },
      ],
    },
    {
      name: 'vim :q!',
      description: 'lệnh ex trong vi/vim dùng để thoát mà không lưu thay đổi',
      flags: [],
      scenarios: [
        { task: 'Thoát vim mà không lưu các thay đổi vừa chỉnh sửa', accepted: [':q!'] },
      ],
    },
    {
      name: 'vim i',
      description: 'phím tắt chuyển từ chế độ lệnh (Normal mode) sang chế độ chèn (Insert mode) tại vị trí con trỏ',
      flags: [],
      scenarios: [
        { task: 'Chuyển vim sang chế độ chèn văn bản tại vị trí con trỏ', accepted: ['i'] },
      ],
    },
    {
      name: 'vim Esc',
      description: 'phím thoát khỏi chế độ chèn (Insert mode), quay lại chế độ lệnh (Normal mode)',
      flags: [],
      scenarios: [
        { task: 'Quay lại chế độ lệnh (Normal mode) từ chế độ chèn trong vim', accepted: ['Esc'] },
      ],
    },
    {
      name: 'vim dd',
      description: 'xóa toàn bộ dòng hiện tại trong chế độ Normal mode của vim',
      flags: [],
      scenarios: [
        { task: 'Xóa dòng hiện tại trong vim (ở chế độ Normal)', accepted: ['dd'] },
      ],
    },
    {
      name: 'vim yy',
      description: 'sao chép (yank) toàn bộ dòng hiện tại trong vim',
      flags: [],
      scenarios: [
        { task: 'Sao chép dòng hiện tại trong vim', accepted: ['yy'] },
      ],
    },
    {
      name: 'vim p',
      description: 'dán (paste) nội dung vừa sao chép/xóa vào sau vị trí con trỏ trong vim',
      flags: [],
      scenarios: [
        { task: 'Dán nội dung vừa copy/cắt vào sau dòng hiện tại trong vim', accepted: ['p'] },
      ],
    },
    {
      name: 'vim /pattern',
      description: 'tìm kiếm chuỗi "pattern" tiến về phía trước trong văn bản đang mở bằng vim',
      flags: [],
      scenarios: [
        { task: 'Tìm kiếm chuỗi "error" trong tệp đang mở bằng vim', accepted: ['/error'] },
      ],
    },
    {
      name: 'vim :%s/old/new/g',
      description: 'thay thế toàn bộ chuỗi "old" bằng "new" trên tất cả các dòng trong tệp đang mở ở vim',
      flags: [],
      scenarios: [
        { task: 'Thay thế toàn bộ chuỗi "old" bằng "new" trên mọi dòng của tệp đang mở trong vim', accepted: [':%s/old/new/g'] },
      ],
    },
    {
      name: 'vim G',
      description: 'di chuyển con trỏ tới dòng cuối cùng của tệp trong chế độ Normal mode',
      flags: [],
      scenarios: [
        { task: 'Di chuyển con trỏ xuống dòng cuối cùng của tệp trong vim', accepted: ['G'] },
      ],
    },
    {
      name: 'vim gg',
      description: 'di chuyển con trỏ tới dòng đầu tiên của tệp trong chế độ Normal mode',
      flags: [],
      scenarios: [
        { task: 'Di chuyển con trỏ lên dòng đầu tiên của tệp trong vim', accepted: ['gg'] },
      ],
    },
    {
      name: 'vim u',
      description: 'hoàn tác (undo) thao tác chỉnh sửa gần nhất trong vim',
      flags: [],
      scenarios: [
        { task: 'Hoàn tác thao tác vừa thực hiện trong vim', accepted: ['u'] },
      ],
    },
  ],
};
