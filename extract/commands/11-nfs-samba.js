const WEEKS = require('../weeks');
module.exports = {
  category: 'nfs-samba',
  week: WEEKS.W6_TH9,
  commands: [
    {
      name: 'exportfs',
      description: 'quản lý và áp dụng danh sách thư mục được chia sẻ qua NFS (định nghĩa trong /etc/exports)',
      flags: [
        { flag: '-a', meaning: 'xuất (export) tất cả các thư mục được khai báo trong /etc/exports' },
        { flag: '-r', meaning: 'nạp lại toàn bộ cấu hình exports, đồng bộ với tệp /etc/exports hiện tại' },
        { flag: '-v', meaning: 'hiển thị chi tiết danh sách thư mục đang được export' },
      ],
      scenarios: [
        { task: 'Áp dụng lại toàn bộ cấu hình chia sẻ NFS sau khi sửa /etc/exports', accepted: ['sudo exportfs -ra', 'sudo exportfs -a'] },
        { task: 'Xem danh sách các thư mục đang được chia sẻ qua NFS', accepted: ['sudo exportfs -v', 'exportfs -v'] },
      ],
    },
    {
      name: 'showmount',
      description: 'hiển thị danh sách các thư mục NFS đang được chia sẻ bởi một máy chủ',
      flags: [
        { flag: '-e <host>', meaning: 'liệt kê danh sách thư mục được export bởi máy chủ NFS chỉ định' },
      ],
      scenarios: [
        { task: 'Xem danh sách thư mục NFS được chia sẻ bởi máy chủ 192.168.1.10', accepted: ['showmount -e 192.168.1.10'] },
      ],
    },
    {
      name: 'mount -t nfs',
      description: 'gắn kết một thư mục được chia sẻ qua NFS từ máy chủ vào máy khách',
      flags: [],
      scenarios: [
        { task: 'Gắn kết thư mục /share từ máy chủ NFS 192.168.1.10 vào /mnt/nfs trên máy khách', accepted: ['sudo mount -t nfs 192.168.1.10:/share /mnt/nfs', 'sudo mount 192.168.1.10:/share /mnt/nfs'] },
      ],
    },
    {
      name: 'smbpasswd',
      description: 'đặt mật khẩu cho tài khoản người dùng Samba (riêng biệt với mật khẩu hệ thống Linux)',
      flags: [
        { flag: '-a <user>', meaning: 'thêm người dùng mới vào cơ sở dữ liệu tài khoản Samba và đặt mật khẩu' },
      ],
      scenarios: [
        { task: 'Thêm người dùng alice vào Samba và đặt mật khẩu Samba', accepted: ['sudo smbpasswd -a alice'] },
      ],
    },
    {
      name: 'testparm',
      description: 'kiểm tra cú pháp tệp cấu hình Samba (smb.conf) trước khi khởi động lại dịch vụ',
      flags: [],
      scenarios: [
        { task: 'Kiểm tra cú pháp tệp cấu hình smb.conf', accepted: ['testparm'] },
      ],
    },
    {
      name: 'systemctl restart smbd',
      description: 'khởi động lại dịch vụ Samba sau khi chỉnh sửa cấu hình chia sẻ',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ Samba sau khi sửa smb.conf', accepted: ['sudo systemctl restart smbd'] },
      ],
    },
    {
      name: 'smbclient',
      description: 'công cụ dòng lệnh dạng FTP để truy cập và kiểm thử một thư mục chia sẻ Samba/Windows',
      flags: [
        { flag: '-L <host>', meaning: 'liệt kê danh sách các thư mục chia sẻ có trên một máy chủ' },
        { flag: '-U <user>', meaning: 'chỉ định tài khoản dùng để đăng nhập vào share' },
      ],
      scenarios: [
        { task: 'Liệt kê các thư mục chia sẻ Samba có trên máy chủ 192.168.1.10', accepted: ['smbclient -L 192.168.1.10'] },
      ],
    },
    {
      name: 'mount -t cifs',
      description: 'gắn kết một thư mục chia sẻ Samba/Windows (SMB/CIFS) vào máy khách Linux',
      flags: [
        { flag: '-o username=<user>,password=<pass>', meaning: 'chỉ định tài khoản đăng nhập khi gắn kết' },
      ],
      scenarios: [
        { task: 'Gắn kết thư mục chia sẻ //192.168.1.10/data vào /mnt/smb với tài khoản alice', accepted: ['sudo mount -t cifs //192.168.1.10/data /mnt/smb -o username=alice'] },
      ],
    },
  ],
};
