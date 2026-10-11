const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-2',
  week: WEEKS.EXTRA_2,
  commands: [
    {
      name: 'tcpdump',
      description: 'bắt và phân tích các gói tin mạng trực tiếp trên một giao diện mạng',
      flags: [
        { flag: '-i <iface>', meaning: 'chỉ định giao diện mạng cần bắt gói tin' },
        { flag: '-w <tệp>', meaning: 'lưu các gói tin bắt được vào một tệp (định dạng pcap)' },
        { flag: 'port <n>', meaning: 'chỉ bắt các gói tin liên quan tới một cổng cụ thể' },
      ],
      scenarios: [
        { task: 'Bắt gói tin trên giao diện eth0, chỉ liên quan tới cổng 80', accepted: ['sudo tcpdump -i eth0 port 80'] },
        { task: 'Bắt gói tin trên eth0 và lưu vào tệp capture.pcap', accepted: ['sudo tcpdump -i eth0 -w capture.pcap'] },
      ],
    },
    {
      name: 'nc',
      description: 'netcat, công cụ đa năng đọc/ghi dữ liệu qua kết nối TCP/UDP, dùng để kiểm thử cổng mạng',
      flags: [
        { flag: '-z', meaning: 'chỉ quét (scan) xem cổng có mở hay không, không gửi dữ liệu' },
        { flag: '-v', meaning: 'hiển thị thông tin chi tiết (verbose)' },
        { flag: '-l', meaning: 'chạy ở chế độ lắng nghe (listen), đóng vai trò server' },
      ],
      scenarios: [
        { task: 'Kiểm tra cổng 22 trên máy chủ 192.168.1.10 có đang mở không bằng netcat', accepted: ['nc -zv 192.168.1.10 22'] },
      ],
    },
    {
      name: 'arp',
      description: 'hiển thị hoặc chỉnh sửa bảng ARP (ánh xạ địa chỉ IP sang địa chỉ MAC) trên hệ thống',
      flags: [
        { flag: '-a', meaning: 'hiển thị toàn bộ bảng ARP hiện tại' },
      ],
      scenarios: [
        { task: 'Xem bảng ARP hiện tại của hệ thống', accepted: ['arp -a'] },
      ],
    },
    {
      name: 'whois',
      description: 'tra cứu thông tin đăng ký (chủ sở hữu, ngày hết hạn) của một tên miền',
      flags: [],
      scenarios: [
        { task: 'Tra cứu thông tin đăng ký của tên miền example.com', accepted: ['whois example.com'] },
      ],
    },
    {
      name: 'ip neigh',
      description: 'hiển thị bảng neighbor (tương đương ARP) bằng công cụ ip hiện đại',
      flags: [],
      scenarios: [
        { task: 'Xem bảng neighbor (ARP) hiện tại bằng lệnh ip', accepted: ['ip neigh'] },
      ],
    },
    {
      name: 'nmap',
      description: 'quét cổng và dịch vụ đang mở trên một máy chủ hoặc dải mạng',
      flags: [
        { flag: '-p <port>', meaning: 'chỉ quét một cổng cụ thể' },
        { flag: '-sV', meaning: 'dò phiên bản dịch vụ đang chạy trên các cổng mở' },
      ],
      scenarios: [
        { task: 'Quét các cổng đang mở trên máy chủ 192.168.1.10', accepted: ['nmap 192.168.1.10'] },
      ],
    },
    {
      name: 'swapon',
      description: 'kích hoạt một vùng hoặc tệp swap làm bộ nhớ ảo',
      flags: [
        { flag: '-a', meaning: 'kích hoạt tất cả các swap được khai báo trong /etc/fstab' },
        { flag: '-s', meaning: 'hiển thị tóm tắt các vùng swap hiện đang hoạt động' },
      ],
      scenarios: [
        { task: 'Kích hoạt tệp swap /swapfile', accepted: ['sudo swapon /swapfile'] },
        { task: 'Xem tóm tắt các vùng swap hiện đang hoạt động', accepted: ['swapon -s'] },
      ],
    },
    {
      name: 'swapoff',
      description: 'vô hiệu hóa một vùng hoặc tệp swap',
      flags: [],
      scenarios: [
        { task: 'Vô hiệu hóa tệp swap /swapfile', accepted: ['sudo swapoff /swapfile'] },
      ],
    },
    {
      name: 'mkswap',
      description: 'định dạng một tệp hoặc phân vùng thành vùng swap',
      flags: [],
      scenarios: [
        { task: 'Định dạng tệp /swapfile thành vùng swap', accepted: ['sudo mkswap /swapfile'] },
      ],
    },
    {
      name: 'tune2fs',
      description: 'xem hoặc chỉnh sửa các tham số của hệ thống tệp ext2/3/4 (nhãn, UUID, số lần kiểm tra...)',
      flags: [
        { flag: '-l <thiết bị>', meaning: 'liệt kê toàn bộ thông tin tham số của hệ thống tệp' },
      ],
      scenarios: [
        { task: 'Xem thông tin tham số của hệ thống tệp trên /dev/sdb1', accepted: ['sudo tune2fs -l /dev/sdb1'] },
      ],
    },
    {
      name: 'chattr',
      description: 'thay đổi các thuộc tính đặc biệt của tệp trên hệ thống tệp ext (vd: bất biến - immutable)',
      flags: [
        { flag: '+i', meaning: 'đặt thuộc tính bất biến (immutable), ngăn không cho sửa/xóa/đổi tên tệp kể cả bởi root' },
        { flag: '-i', meaning: 'gỡ bỏ thuộc tính bất biến' },
      ],
      scenarios: [
        { task: 'Đặt tệp important.conf thành bất biến (không thể sửa/xóa)', accepted: ['sudo chattr +i important.conf'] },
      ],
    },
    {
      name: 'lsattr',
      description: 'liệt kê các thuộc tính đặc biệt hiện tại của tệp trên hệ thống tệp ext',
      flags: [],
      scenarios: [
        { task: 'Xem thuộc tính đặc biệt hiện tại của tệp important.conf', accepted: ['lsattr important.conf'] },
      ],
    },
    {
      name: 'strace',
      description: 'theo dõi và ghi lại các lời gọi hệ thống (system call) mà một tiến trình thực hiện, dùng để debug',
      flags: [
        { flag: '-p <pid>', meaning: 'gắn vào (attach) và theo dõi một tiến trình đang chạy theo PID' },
      ],
      scenarios: [
        { task: 'Theo dõi system call của tiến trình đang chạy với PID 1234', accepted: ['sudo strace -p 1234'] },
      ],
    },
    {
      name: 'ldd',
      description: 'hiển thị danh sách các thư viện chia sẻ (shared library) mà một chương trình phụ thuộc vào',
      flags: [],
      scenarios: [
        { task: 'Xem các thư viện chia sẻ mà chương trình /bin/ls phụ thuộc vào', accepted: ['ldd /bin/ls'] },
      ],
    },
    {
      name: 'systemd-analyze',
      description: 'phân tích thời gian khởi động hệ thống, giúp xác định dịch vụ nào làm chậm quá trình boot',
      flags: [
        { flag: 'blame', meaning: 'liệt kê các dịch vụ theo thời gian khởi động, chậm nhất lên đầu' },
      ],
      scenarios: [
        { task: 'Xem dịch vụ nào làm chậm thời gian khởi động hệ thống nhất', accepted: ['systemd-analyze blame'] },
        { task: 'Xem tổng thời gian khởi động hệ thống lần gần nhất', accepted: ['systemd-analyze'] },
      ],
    },
    {
      name: 'loginctl',
      description: 'quản lý và xem thông tin các phiên đăng nhập người dùng qua systemd-logind',
      flags: [
        { flag: 'list-sessions', meaning: 'liệt kê các phiên đăng nhập hiện tại trên hệ thống' },
      ],
      scenarios: [
        { task: 'Xem danh sách các phiên đăng nhập hiện tại trên hệ thống', accepted: ['loginctl list-sessions'] },
      ],
    },
    {
      name: 'getent',
      description: 'tra cứu thông tin từ các cơ sở dữ liệu hệ thống (passwd, group, hosts...) thông qua Name Service Switch',
      flags: [
        { flag: 'passwd <user>', meaning: 'tra cứu thông tin tài khoản người dùng từ nguồn passwd (local hoặc LDAP)' },
        { flag: 'hosts <tên>', meaning: 'tra cứu địa chỉ IP của một hostname' },
      ],
      scenarios: [
        { task: 'Tra cứu thông tin tài khoản alice từ hệ thống (bao gồm cả LDAP nếu có)', accepted: ['getent passwd alice'] },
      ],
    },
    {
      name: 'su -c',
      description: 'chạy một lệnh đơn lẻ với quyền của người dùng khác rồi quay lại ngay, không mở shell mới',
      flags: [],
      scenarios: [
        { task: 'Chạy lệnh "whoami" với quyền root bằng su', accepted: ['su -c whoami', 'su -c "whoami"'] },
      ],
    },
    {
      name: 'xz',
      description: 'nén tệp bằng thuật toán xz, tỉ lệ nén cao hơn gzip nhưng chậm hơn',
      flags: [
        { flag: '-d', meaning: 'giải nén tệp .xz' },
        { flag: '-k', meaning: 'giữ lại tệp gốc sau khi nén' },
      ],
      scenarios: [
        { task: 'Nén tệp data.tar thành data.tar.xz, giữ lại tệp gốc', accepted: ['xz -k data.tar'] },
      ],
    },
    {
      name: 'zip',
      description: 'nén và đóng gói nhiều tệp/thư mục vào một tệp .zip',
      flags: [
        { flag: '-r', meaning: 'nén đệ quy toàn bộ thư mục con' },
      ],
      scenarios: [
        { task: 'Nén đệ quy thư mục /data thành archive.zip', accepted: ['zip -r archive.zip /data'] },
      ],
    },
    {
      name: 'unzip',
      description: 'giải nén một tệp .zip',
      flags: [
        { flag: '-d <thư mục>', meaning: 'chỉ định thư mục đích để giải nén vào' },
      ],
      scenarios: [
        { task: 'Giải nén archive.zip vào thư mục /extracted', accepted: ['unzip archive.zip -d /extracted'] },
      ],
    },
    {
      name: 'dd',
      description: 'sao chép và chuyển đổi dữ liệu ở cấp thấp (block-level), thường dùng để tạo ảnh đĩa hoặc ghi ISO vào USB',
      flags: [
        { flag: 'if=<nguồn>', meaning: 'chỉ định tệp/thiết bị nguồn đầu vào' },
        { flag: 'of=<đích>', meaning: 'chỉ định tệp/thiết bị đích đầu ra' },
        { flag: 'bs=<size>', meaning: 'chỉ định kích thước mỗi khối dữ liệu đọc/ghi một lần' },
        { flag: 'status=progress', meaning: 'hiển thị tiến độ sao chép theo thời gian thực' },
      ],
      scenarios: [
        { task: 'Ghi tệp ảnh ubuntu.iso vào USB /dev/sdb, hiển thị tiến độ', accepted: ['sudo dd if=ubuntu.iso of=/dev/sdb bs=4M status=progress'] },
      ],
    },
    {
      name: 'badblocks',
      description: 'quét một thiết bị lưu trữ để tìm các khối (block) bị lỗi vật lý',
      flags: [
        { flag: '-v', meaning: 'hiển thị chi tiết quá trình quét' },
      ],
      scenarios: [
        { task: 'Quét tìm bad block trên ổ đĩa /dev/sdb', accepted: ['sudo badblocks -v /dev/sdb'] },
      ],
    },
    {
      name: 'smartctl',
      description: 'đọc thông tin sức khỏe S.M.A.R.T của ổ đĩa, dự đoán nguy cơ hỏng hóc phần cứng',
      flags: [
        { flag: '-a <thiết bị>', meaning: 'hiển thị toàn bộ thông tin S.M.A.R.T của ổ đĩa' },
      ],
      scenarios: [
        { task: 'Xem toàn bộ thông tin sức khỏe S.M.A.R.T của ổ /dev/sda', accepted: ['sudo smartctl -a /dev/sda'] },
      ],
    },
    {
      name: 'apt-cache policy',
      description: 'xem phiên bản gói hiện tại đã cài và các phiên bản khả dụng từ các kho phần mềm',
      flags: [],
      scenarios: [
        { task: 'Xem phiên bản đã cài và các phiên bản khả dụng của gói nginx', accepted: ['apt-cache policy nginx'] },
      ],
    },
    {
      name: 'systemctl list-timers',
      description: 'liệt kê các systemd timer (thay thế hiện đại cho cron) đang được lên lịch',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các systemd timer đang được lên lịch', accepted: ['systemctl list-timers'] },
      ],
    },
    {
      name: 'hexdump',
      description: 'hiển thị nội dung tệp nhị phân dưới dạng hệ thập lục phân (hex)',
      flags: [
        { flag: '-C', meaning: 'hiển thị kèm cột địa chỉ offset và ký tự ASCII tương ứng' },
      ],
      scenarios: [
        { task: 'Xem nội dung tệp nhị phân file.bin dưới dạng hex kèm ASCII', accepted: ['hexdump -C file.bin'] },
      ],
    },
    {
      name: 'base64',
      description: 'mã hóa hoặc giải mã dữ liệu theo định dạng base64',
      flags: [
        { flag: '-d', meaning: 'giải mã dữ liệu base64 trở lại dạng gốc' },
      ],
      scenarios: [
        { task: 'Mã hóa nội dung tệp secret.txt sang base64', accepted: ['base64 secret.txt'] },
      ],
    },
    {
      name: 'openssl enc',
      description: 'mã hóa hoặc giải mã một tệp bằng một thuật toán đối xứng (vd: AES)',
      flags: [
        { flag: '-aes-256-cbc', meaning: 'chỉ định thuật toán mã hóa AES 256-bit chế độ CBC' },
        { flag: '-d', meaning: 'giải mã thay vì mã hóa' },
      ],
      scenarios: [
        { task: 'Mã hóa tệp secret.txt bằng AES-256-CBC thành secret.enc', accepted: ['openssl enc -aes-256-cbc -in secret.txt -out secret.enc'] },
      ],
    },
  ],
};
