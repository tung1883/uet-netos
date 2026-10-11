const WEEKS = require('../weeks');
module.exports = {
  category: 'storage-lvm',
  week: WEEKS.W3_TH3,
  commands: [
    {
      name: 'lsblk',
      description: 'liệt kê các thiết bị khối (ổ đĩa, phân vùng) dưới dạng cây',
      flags: [
        { flag: '-f', meaning: 'hiển thị thêm loại hệ thống tệp và UUID của từng phân vùng' },
        { flag: '-a', meaning: 'hiển thị cả các thiết bị trống (không có dữ liệu)' },
      ],
      scenarios: [
        { task: 'Liệt kê các ổ đĩa và phân vùng kèm loại filesystem', accepted: ['lsblk -f'] },
      ],
    },
    {
      name: 'fdisk',
      description: 'công cụ dòng lệnh để tạo, xóa, xem bảng phân vùng ổ đĩa dạng MBR',
      flags: [
        { flag: '-l', meaning: 'liệt kê bảng phân vùng của tất cả hoặc một ổ đĩa chỉ định' },
      ],
      scenarios: [
        { task: 'Xem bảng phân vùng của ổ đĩa /dev/sdb', accepted: ['sudo fdisk -l /dev/sdb', 'fdisk -l /dev/sdb'] },
        { task: 'Mở fdisk ở chế độ tương tác để thao tác trên ổ đĩa /dev/sdb', accepted: ['sudo fdisk /dev/sdb'] },
      ],
    },
    {
      name: 'parted',
      description: 'công cụ phân vùng ổ đĩa hỗ trợ cả bảng GPT và MBR, có thể dùng non-interactive',
      flags: [
        { flag: '-l', meaning: 'liệt kê bảng phân vùng của tất cả các ổ đĩa' },
      ],
      scenarios: [
        { task: 'Xem bảng phân vùng GPT của toàn bộ các ổ đĩa', accepted: ['sudo parted -l'] },
      ],
    },
    {
      name: 'mkfs',
      description: 'tạo hệ thống tệp mới (format) trên một phân vùng',
      flags: [
        { flag: '.ext4 <thiết bị>', meaning: 'tạo hệ thống tệp ext4 trên thiết bị chỉ định' },
        { flag: '.xfs <thiết bị>', meaning: 'tạo hệ thống tệp xfs trên thiết bị chỉ định' },
        { flag: '-t <loại> <thiết bị>', meaning: 'chỉ định loại hệ thống tệp cần tạo qua tham số -t' },
      ],
      scenarios: [
        { task: 'Format phân vùng /dev/sdb1 sang hệ thống tệp ext4', accepted: ['sudo mkfs.ext4 /dev/sdb1', 'sudo mkfs -t ext4 /dev/sdb1'] },
      ],
    },
    {
      name: 'mount',
      description: 'gắn kết một hệ thống tệp vào một điểm gắn kết (mount point) trong cây thư mục',
      flags: [
        { flag: '-t <loại>', meaning: 'chỉ định loại hệ thống tệp khi gắn kết' },
        { flag: '-o <tùy chọn>', meaning: 'chỉ định các tùy chọn gắn kết (vd: ro, rw, noexec)' },
        { flag: '-a', meaning: 'gắn kết tất cả các hệ thống tệp được liệt kê trong /etc/fstab' },
      ],
      scenarios: [
        { task: 'Gắn kết phân vùng /dev/sdb1 vào thư mục /mnt/data', accepted: ['sudo mount /dev/sdb1 /mnt/data'] },
        { task: 'Gắn kết lại toàn bộ các mục trong /etc/fstab', accepted: ['sudo mount -a'] },
        { task: 'Gắn kết /dev/sdb1 vào /mnt/data ở chế độ chỉ đọc', accepted: ['sudo mount -o ro /dev/sdb1 /mnt/data'] },
      ],
    },
    {
      name: 'umount',
      description: 'tháo gắn kết (unmount) một hệ thống tệp khỏi cây thư mục',
      flags: [
        { flag: '-f', meaning: 'tháo gắn kết cưỡng chế ngay cả khi thiết bị đang bận' },
        { flag: '-l', meaning: 'tháo gắn kết lazy, tháo ngay khỏi cây thư mục nhưng dọn dẹp khi không còn tiến trình nào dùng' },
      ],
      scenarios: [
        { task: 'Tháo gắn kết thư mục /mnt/data', accepted: ['sudo umount /mnt/data'] },
      ],
    },
    {
      name: 'blkid',
      description: 'hiển thị UUID và loại hệ thống tệp của các thiết bị khối',
      flags: [
        { flag: '-s UUID', meaning: 'chỉ hiển thị trường UUID, bỏ qua các thông tin khác' },
      ],
      scenarios: [
        { task: 'Xem UUID của phân vùng /dev/sdb1', accepted: ['sudo blkid /dev/sdb1', 'blkid /dev/sdb1'] },
      ],
    },
    {
      name: 'df',
      description: 'hiển thị dung lượng sử dụng và còn trống của các hệ thống tệp đã gắn kết',
      flags: [
        { flag: '-h', meaning: 'hiển thị dung lượng ở dạng dễ đọc (K, M, G)' },
        { flag: '-T', meaning: 'hiển thị kèm loại hệ thống tệp của từng phân vùng' },
      ],
      scenarios: [
        { task: 'Xem dung lượng sử dụng/còn trống của các phân vùng ở dạng dễ đọc', accepted: ['df -h'] },
      ],
    },
    {
      name: 'pvcreate',
      description: 'khởi tạo một thiết bị vật lý (physical volume) để sử dụng trong LVM',
      flags: [],
      scenarios: [
        { task: 'Khởi tạo physical volume trên /dev/sdc', accepted: ['sudo pvcreate /dev/sdc'] },
      ],
    },
    {
      name: 'vgcreate',
      description: 'tạo một nhóm ổ đĩa (volume group) từ các physical volume trong LVM',
      flags: [],
      scenarios: [
        { task: 'Tạo volume group tên vg_data từ /dev/sdc', accepted: ['sudo vgcreate vg_data /dev/sdc'] },
        { task: 'Tạo volume group tên vg_data gộp từ cả /dev/sdc và /dev/sdd', accepted: ['sudo vgcreate vg_data /dev/sdc /dev/sdd'] },
      ],
    },
    {
      name: 'vgdisplay',
      description: 'hiển thị thông tin chi tiết về các volume group hiện có trong LVM',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết volume group vg_data', accepted: ['sudo vgdisplay vg_data'] },
      ],
    },
    {
      name: 'lvdisplay',
      description: 'hiển thị thông tin chi tiết về các logical volume hiện có trong LVM',
      flags: [],
      scenarios: [
        { task: 'Xem thông tin chi tiết logical volume lv_data', accepted: ['sudo lvdisplay /dev/vg_data/lv_data'] },
      ],
    },
    {
      name: 'lvcreate',
      description: 'tạo một logical volume mới bên trong một volume group',
      flags: [
        { flag: '-L <size>', meaning: 'chỉ định kích thước cố định cho logical volume (vd: 10G)' },
        { flag: '-n <tên>', meaning: 'đặt tên cho logical volume' },
        { flag: '-l <%>', meaning: 'chỉ định kích thước theo phần trăm dung lượng còn trống của volume group' },
      ],
      scenarios: [
        { task: 'Tạo logical volume tên lv_data kích thước 10G trong volume group vg_data', accepted: ['sudo lvcreate -L 10G -n lv_data vg_data'] },
      ],
    },
    {
      name: 'lvextend',
      description: 'mở rộng kích thước một logical volume đã tồn tại',
      flags: [
        { flag: '-L +<size>', meaning: 'tăng thêm một lượng dung lượng chỉ định so với kích thước hiện tại' },
        { flag: '-r', meaning: 'tự động mở rộng luôn hệ thống tệp bên trong sau khi mở rộng volume (tương đương --resizefs)' },
        { flag: '--resizefs', meaning: 'tự động mở rộng luôn hệ thống tệp bên trong sau khi mở rộng volume' },
      ],
      scenarios: [
        { task: 'Mở rộng thêm 5GB cho logical volume /dev/mapper/vg_data-lv_data và tự mở rộng filesystem', accepted: ['sudo lvextend -L +5G -r /dev/mapper/vg_data-lv_data', 'sudo lvextend -L +5G --resizefs /dev/mapper/vg_data-lv_data', 'lvextend -L +5G -r /dev/mapper/vg_data-lv_data'] },
      ],
    },
    {
      name: 'resize2fs',
      description: 'thay đổi kích thước hệ thống tệp ext2/3/4 cho khớp với kích thước của volume chứa nó',
      flags: [],
      scenarios: [
        { task: 'Mở rộng hệ thống tệp ext4 trên /dev/mapper/vg_data-lv_data cho khớp kích thước volume', accepted: ['sudo resize2fs /dev/mapper/vg_data-lv_data'] },
      ],
    },
    {
      name: 'xfs_growfs',
      description: 'mở rộng hệ thống tệp XFS đang gắn kết cho khớp với kích thước volume mới',
      flags: [],
      scenarios: [
        { task: 'Mở rộng hệ thống tệp XFS đang gắn kết tại /data', accepted: ['sudo xfs_growfs /data'] },
      ],
    },
    {
      name: 'quotacheck',
      description: 'quét hệ thống tệp và tạo/cập nhật các tệp cơ sở dữ liệu hạn ngạch (quota)',
      flags: [
        { flag: '-cug <mount point>', meaning: 'tạo mới tệp quota cho cả user (u) và group (g)' },
      ],
      scenarios: [
        { task: 'Khởi tạo tệp quota cho user và group trên /home', accepted: ['sudo quotacheck -cug /home'] },
      ],
    },
    {
      name: 'quotaon',
      description: 'kích hoạt chế độ giới hạn hạn ngạch (quota) trên một hệ thống tệp',
      flags: [],
      scenarios: [
        { task: 'Bật quota cho hệ thống tệp /home', accepted: ['sudo quotaon /home'] },
      ],
    },
    {
      name: 'edquota',
      description: 'chỉnh sửa giới hạn hạn ngạch (soft/hard limit) cho một người dùng hoặc nhóm',
      flags: [
        { flag: '-u <user>', meaning: 'chỉnh sửa quota cho một người dùng cụ thể' },
      ],
      scenarios: [
        { task: 'Chỉnh sửa quota cho người dùng alice', accepted: ['sudo edquota -u alice'] },
      ],
    },
    {
      name: 'repquota',
      description: 'hiển thị báo cáo tóm tắt mức sử dụng quota trên một hệ thống tệp',
      flags: [
        { flag: '-a', meaning: 'hiển thị báo cáo quota cho tất cả hệ thống tệp đã bật quota' },
      ],
      scenarios: [
        { task: 'Xem báo cáo sử dụng quota trên /home', accepted: ['sudo repquota /home'] },
      ],
    },
  ],
};
