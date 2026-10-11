const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-nfs-samba2',
  week: WEEKS.W6_TH9,
  commands: [
    {
      name: 'showmount -a',
      description: 'hiển thị danh sách các máy khách hiện đang mount tài nguyên NFS từ máy chủ',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các máy khách đang mount NFS từ máy chủ hiện tại', accepted: ['showmount -a'] },
      ],
    },
    {
      name: 'nfsstat',
      description: 'hiển thị thống kê hoạt động của dịch vụ NFS (số lượng request theo từng loại thao tác)',
      flags: [],
      scenarios: [
        { task: 'Xem thống kê hoạt động của dịch vụ NFS', accepted: ['nfsstat'] },
      ],
    },
    {
      name: 'exportfs -u',
      description: 'hủy export (ngừng chia sẻ) một thư mục NFS cụ thể mà không cần sửa /etc/exports',
      flags: [],
      scenarios: [
        { task: 'Ngừng chia sẻ thư mục /data qua NFS tạm thời', accepted: ['sudo exportfs -u /data'] },
      ],
    },
    {
      name: 'systemctl restart nfs-kernel-server',
      description: 'khởi động lại dịch vụ NFS server trên Ubuntu sau khi chỉnh sửa /etc/exports',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại dịch vụ NFS server sau khi sửa /etc/exports', accepted: ['sudo systemctl restart nfs-kernel-server'] },
      ],
    },
    {
      name: 'mount -t nfs4',
      description: 'gắn kết một thư mục chia sẻ sử dụng giao thức NFSv4 cụ thể',
      flags: [],
      scenarios: [
        { task: 'Gắn kết thư mục /share từ 192.168.1.10 vào /mnt/nfs bằng giao thức NFSv4', accepted: ['sudo mount -t nfs4 192.168.1.10:/share /mnt/nfs'] },
      ],
    },
    {
      name: 'smbstatus',
      description: 'hiển thị danh sách các kết nối và phiên làm việc hiện tại tới máy chủ Samba',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các kết nối hiện tại tới máy chủ Samba', accepted: ['sudo smbstatus'] },
      ],
    },
    {
      name: 'pdbedit -L',
      description: 'liệt kê danh sách các tài khoản người dùng Samba hiện có trong cơ sở dữ liệu',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các tài khoản người dùng Samba hiện có', accepted: ['sudo pdbedit -L'] },
      ],
    },
    {
      name: 'smbclient //host/share -U user',
      description: 'kết nối tương tác vào một thư mục chia sẻ Samba cụ thể với một tài khoản chỉ định',
      flags: [],
      scenarios: [
        { task: 'Kết nối tương tác vào thư mục chia sẻ //192.168.1.10/data với tài khoản alice', accepted: ['smbclient //192.168.1.10/data -U alice'] },
      ],
    },
    {
      name: 'net usershare',
      description: 'tạo nhanh một thư mục chia sẻ Samba mà không cần sửa trực tiếp smb.conf',
      flags: [],
      scenarios: [
        { task: 'Tạo nhanh một share Samba tên "public" trỏ tới /srv/public', accepted: ['sudo net usershare add public /srv/public "Public share" everyone:F'] },
      ],
    },
  ],
};
