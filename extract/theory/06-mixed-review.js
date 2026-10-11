module.exports = [
  {
    text: 'Khi một script Bash kết thúc với exit code 0, điều đó có nghĩa là gì?',
    options: ['Script chạy thất bại', 'Script chạy thành công, không có lỗi', 'Script bị treo', 'Script chưa được thực thi'],
    correctIndex: 1,
    explanation: 'Theo quy ước Unix, exit code 0 nghĩa là thành công; bất kỳ giá trị khác 0 nào đều biểu thị lỗi.',
  },
  {
    text: 'Biến môi trường HOME dùng để lưu gì?',
    options: ['Đường dẫn thư mục home của người dùng hiện tại', 'Tên hostname của máy', 'Địa chỉ IP hiện tại', 'Danh sách các gói đã cài'],
    correctIndex: 0,
    explanation: 'HOME chứa đường dẫn tuyệt đối tới thư mục cá nhân của người dùng đang đăng nhập.',
  },
  {
    text: 'Sự khác biệt giữa `$(command)` và `` `command` `` trong Bash là gì?',
    options: [
      'Hai cú pháp này không liên quan gì tới nhau',
      'Cả hai đều dùng để thực hiện command substitution (lấy kết quả lệnh), nhưng $() dễ đọc và lồng nhau tốt hơn backtick',
      '`$()` chỉ dùng được với lệnh echo',
      'Backtick nhanh hơn $() về hiệu năng',
    ],
    correctIndex: 1,
    explanation: 'Cả hai đều thực hiện command substitution; $() là cú pháp hiện đại hơn, dễ lồng nhau và đọc rõ ràng hơn backtick.',
  },
  {
    text: 'Khi một script shell bắt đầu bằng dòng #!/bin/bash, dòng này có ý nghĩa gì?',
    options: [
      'Đây chỉ là một dòng comment thông thường, không có tác dụng',
      'Shebang, chỉ định trình thông dịch (interpreter) sẽ dùng để chạy script',
      'Khai báo biến môi trường',
      'Import một thư viện',
    ],
    correctIndex: 1,
    explanation: 'Dòng shebang (#!) báo cho hệ thống biết chương trình nào (ở đây là /bin/bash) sẽ thực thi phần còn lại của tệp.',
  },
  {
    text: 'Tại sao nên dùng biến môi trường thay vì ghi cứng (hardcode) đường dẫn trong script?',
    options: [
      'Giúp script linh hoạt, dễ di chuyển giữa các môi trường khác nhau mà không cần sửa code',
      'Biến môi trường chạy nhanh hơn',
      'Không có lý do thực sự',
      'Biến môi trường được mã hóa tự động',
    ],
    correctIndex: 0,
    explanation: 'Biến môi trường cho phép cấu hình thay đổi theo từng môi trường (dev/prod...) mà không cần sửa mã nguồn script.',
  },
  {
    text: 'Khác biệt giữa cài đặt gói từ kho APT và cài đặt thủ công từ mã nguồn là gì?',
    options: [
      'APT tự động xử lý phụ thuộc (dependency) và cập nhật dễ dàng hơn; cài từ mã nguồn linh hoạt hơn nhưng phải tự quản lý phụ thuộc, cập nhật',
      'Không có khác biệt gì',
      'Cài từ mã nguồn luôn nhanh hơn',
      'APT không hỗ trợ gỡ cài đặt',
    ],
    correctIndex: 0,
    explanation: 'Trình quản lý gói như APT tự động giải quyết phụ thuộc, dễ cập nhật/gỡ bỏ; biên dịch từ mã nguồn linh hoạt nhưng tốn công bảo trì hơn.',
  },
  {
    text: 'Khi một ổ đĩa được gắn kết (mount) ở chế độ "noexec", điều gì xảy ra?',
    options: [
      'Không ai có thể đọc tệp trên ổ đĩa đó',
      'Các tệp thực thi trên phân vùng đó bị cấm chạy trực tiếp',
      'Ổ đĩa tự động được mã hóa',
      'Ổ đĩa chỉ đọc được bởi root',
    ],
    correctIndex: 1,
    explanation: 'Tùy chọn mount "noexec" ngăn không cho thực thi bất kỳ tệp nhị phân nào nằm trên filesystem đó, một biện pháp bảo mật phổ biến cho /tmp.',
  },
  {
    text: 'Vì sao các bản phân phối hiện đại khuyến nghị dùng công cụ "ip" thay vì "ifconfig"/"route" cũ?',
    options: [
      'ifconfig/route đã bị loại bỏ khỏi gói net-tools truyền thống trên nhiều bản phân phối và không hỗ trợ đầy đủ tính năng mạng hiện đại',
      'ip chạy chậm hơn nhưng dễ dùng hơn',
      'Không có lý do kỹ thuật, chỉ là xu hướng',
      'ifconfig không thể xem được địa chỉ IP',
    ],
    correctIndex: 0,
    explanation: 'Bộ công cụ net-tools (ifconfig, route, netstat) đã lỗi thời và không được bảo trì tích cực; iproute2 (ip, ss) là chuẩn hiện đại với đầy đủ tính năng hơn.',
  },
  {
    text: 'Khác biệt giữa backup "full" và backup "incremental" là gì?',
    options: [
      'Full backup sao lưu toàn bộ dữ liệu mỗi lần; incremental chỉ sao lưu phần thay đổi kể từ lần backup gần nhất, tiết kiệm thời gian/dung lượng',
      'Incremental backup luôn chậm hơn full backup',
      'Full backup không thể dùng để khôi phục',
      'Không có khác biệt thực sự',
    ],
    correctIndex: 0,
    explanation: 'Full backup sao chép toàn bộ; incremental chỉ lưu phần thay đổi, giúp tiết kiệm tài nguyên nhưng khôi phục cần kết hợp bản full + các bản incremental theo thứ tự.',
  },
  {
    text: 'Khi kiểm thử một dịch vụ mạng mới cài đặt, tại sao nên kiểm tra cả "service đang chạy" lẫn "cổng đang lắng nghe"?',
    options: [
      'Hai việc giống hệt nhau nên chỉ cần kiểm tra một trong hai',
      'Dịch vụ có thể báo "running" nhưng lại không bind đúng cổng/địa chỉ do lỗi cấu hình, nên cần kiểm tra cả hai để chắc chắn hoạt động đúng',
      'Kiểm tra cổng luôn đủ, không cần xem trạng thái dịch vụ',
      'Đây là bước không cần thiết trong vận hành thực tế',
    ],
    correctIndex: 1,
    explanation: 'systemctl status "active" không đảm bảo dịch vụ bind đúng cổng mong muốn; cần xác minh thêm bằng ss/netstat để chắc chắn dịch vụ thực sự lắng nghe đúng.',
  },
];
