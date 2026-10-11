const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-storage2',
  week: WEEKS.W3_TH3,
  commands: [
    {
      name: 'lvreduce',
      description: 'thu nhỏ kích thước một logical volume đã tồn tại (cần thu nhỏ hệ thống tệp trước để tránh mất dữ liệu)',
      flags: [
        { flag: '-L -<size>', meaning: 'giảm bớt một lượng dung lượng chỉ định so với kích thước hiện tại' },
      ],
      scenarios: [
        { task: 'Thu nhỏ logical volume lv_data bớt 2GB', accepted: ['sudo lvreduce -L -2G /dev/vg_data/lv_data'] },
        { task: 'Thu nhỏ logical volume lv_data về đúng 10GB', accepted: ['sudo lvreduce -L 10G /dev/vg_data/lv_data'] },
      ],
    },
    {
      name: 'vgextend',
      description: 'mở rộng một volume group bằng cách thêm một physical volume mới vào',
      flags: [],
      scenarios: [
        { task: 'Thêm physical volume /dev/sdd vào volume group vg_data', accepted: ['sudo vgextend vg_data /dev/sdd'] },
      ],
    },
    {
      name: 'vgreduce',
      description: 'gỡ bỏ một physical volume khỏi một volume group (physical volume phải không còn dữ liệu)',
      flags: [],
      scenarios: [
        { task: 'Gỡ physical volume /dev/sdd khỏi volume group vg_data', accepted: ['sudo vgreduce vg_data /dev/sdd'] },
      ],
    },
    {
      name: 'pvdisplay',
      description: 'hiển thị thông tin chi tiết về các physical volume hiện có trong LVM',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết physical volume /dev/sdc', accepted: ['sudo pvdisplay /dev/sdc'] },
      ],
    },
    {
      name: 'pvs / vgs / lvs',
      description: 'hiển thị thông tin tóm tắt dạng bảng (ngắn gọn hơn display) về physical volume, volume group, logical volume',
      flags: [],
      scenarios: [
        { task: 'Xem bảng tóm tắt toàn bộ physical volume trên hệ thống', accepted: ['pvs'] },
        { task: 'Xem bảng tóm tắt toàn bộ volume group trên hệ thống', accepted: ['vgs'] },
        { task: 'Xem bảng tóm tắt toàn bộ logical volume trên hệ thống', accepted: ['lvs'] },
      ],
    },
    {
      name: 'mkfs.xfs',
      description: 'tạo hệ thống tệp XFS trên một phân vùng, thường dùng cho dữ liệu lớn và hiệu năng cao',
      flags: [],
      scenarios: [
        { task: 'Format phân vùng /dev/sdb1 sang hệ thống tệp XFS', accepted: ['sudo mkfs.xfs /dev/sdb1'] },
      ],
    },
    {
      name: 'wipefs',
      description: 'xóa các chữ ký hệ thống tệp (filesystem signature) cũ trên một thiết bị trước khi định dạng lại',
      flags: [
        { flag: '-a', meaning: 'xóa toàn bộ các chữ ký tìm thấy trên thiết bị' },
      ],
      scenarios: [
        { task: 'Xóa toàn bộ chữ ký hệ thống tệp cũ trên /dev/sdb1 trước khi format lại', accepted: ['sudo wipefs -a /dev/sdb1'] },
      ],
    },
    {
      name: 'mount --bind',
      description: 'gắn kết một thư mục đã tồn tại vào một vị trí khác trong cây thư mục (bind mount), không tạo filesystem mới',
      flags: [],
      scenarios: [
        { task: 'Bind mount thư mục /data vào /var/www/data', accepted: ['sudo mount --bind /data /var/www/data'] },
      ],
    },
    {
      name: 'findmnt',
      description: 'hiển thị cây các điểm mount hiện tại trên hệ thống, dễ đọc hơn đọc trực tiếp /proc/mounts',
      flags: [
        { flag: '-t <loại>', meaning: 'chỉ hiển thị các điểm mount thuộc một loại hệ thống tệp cụ thể' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ cây các điểm mount hiện tại', accepted: ['findmnt'] },
        { task: 'Chỉ hiển thị các điểm mount thuộc loại ext4', accepted: ['findmnt -t ext4'] },
      ],
    },
    {
      name: 'quota -u',
      description: 'xem thông tin hạn ngạch (quota) hiện tại của một người dùng cụ thể',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin quota hiện tại của người dùng alice', accepted: ['quota -u alice'] },
      ],
    },
    {
      name: 'setquota',
      description: 'thiết lập giới hạn quota (soft/hard limit) cho một người dùng mà không cần mở trình soạn thảo edquota',
      flags: [],
      scenarios: [
        { task: 'Thiết lập quota cho alice trên /home: soft 1GB, hard 1.2GB dung lượng', accepted: ['sudo setquota -u alice 1000000 1200000 0 0 /home'] },
      ],
    },
  ],
};
