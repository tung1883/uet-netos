const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-bash2',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'string length and substring',
      description: 'các phép toán xử lý chuỗi trong Bash: lấy độ dài, cắt chuỗi con',
      flags: [
        { flag: '${#var}', meaning: 'lấy độ dài (số ký tự) của chuỗi trong biến' },
        { flag: '${var:0:5}', meaning: 'lấy 5 ký tự con bắt đầu từ vị trí 0 của chuỗi' },
        { flag: '${var#prefix}', meaning: 'xóa phần tiền tố ngắn nhất khớp với prefix ở đầu chuỗi' },
        { flag: '${var%suffix}', meaning: 'xóa phần hậu tố ngắn nhất khớp với suffix ở cuối chuỗi' },
      ],
      scenarios: [
        { task: 'Lấy độ dài của biến name trong Bash', accepted: ['echo ${#name}'] },
        { task: 'Lấy tên tệp không kèm phần mở rộng từ biến filename="report.txt"', accepted: ['echo ${filename%.txt}'] },
        { task: 'Thay thế mọi dấu cách trong biến text bằng dấu gạch dưới', accepted: ['echo ${text// /_}'] },
      ],
    },
    {
      name: 'default value expansion',
      description: 'cú pháp mở rộng tham số trong Bash để gán giá trị mặc định khi biến chưa được đặt',
      flags: [
        { flag: '${var:-default}', meaning: 'dùng giá trị default nếu biến chưa được đặt hoặc rỗng, không thay đổi biến gốc' },
        { flag: '${var:=default}', meaning: 'gán giá trị default cho biến nếu biến chưa được đặt hoặc rỗng' },
      ],
      scenarios: [
        { task: 'In ra giá trị biến name, nếu chưa đặt thì in "Unknown" mà không thay đổi biến', accepted: ['echo ${name:-Unknown}'] },
      ],
    },
    {
      name: 'arithmetic expansion',
      description: 'thực hiện phép tính số học trực tiếp trong Bash bằng cú pháp $(( ))',
      flags: [],
      scenarios: [
        { task: 'Tính tổng hai biến a và b rồi gán vào biến result trong Bash', accepted: ['result=$((a + b))', 'result=$(($a + $b))'] },
      ],
    },
    {
      name: 'select loop',
      description: 'tạo một menu lựa chọn tương tác đơn giản trong Bash bằng vòng lặp select',
      flags: [],
      scenarios: [
        { task: 'Viết dòng mở đầu vòng lặp select tạo menu chọn giữa "Start" và "Stop" trong Bash', accepted: ['select opt in "Start" "Stop"; do'] },
      ],
    },
    {
      name: 'heredoc with variable expansion disabled',
      description: 'dùng here-document nhưng vô hiệu hóa mở rộng biến bên trong bằng cách quote delimiter',
      flags: [],
      scenarios: [
        { task: 'Viết dòng mở đầu here-document không mở rộng biến bên trong (literal text)', accepted: ["cat << 'EOF'"] },
      ],
    },
    {
      name: 'array iteration',
      description: 'duyệt qua từng phần tử của một mảng trong Bash bằng vòng lặp for',
      flags: [],
      scenarios: [
        { task: 'Viết vòng lặp for duyệt qua từng phần tử của mảng colors trong Bash (chỉ dòng mở đầu)', accepted: ['for c in "${colors[@]}"; do'] },
      ],
    },
    {
      name: 'command substitution in variable',
      description: 'gán kết quả thực thi của một lệnh vào một biến trong Bash',
      flags: [],
      scenarios: [
        { task: 'Gán kết quả lệnh date vào biến now trong Bash', accepted: ['now=$(date)'] },
        { task: 'Gán số dòng của tệp data.txt vào biến count trong Bash', accepted: ['count=$(wc -l < data.txt)'] },
      ],
    },
    {
      name: 'test -z / -n in condition',
      description: 'kiểm tra chuỗi rỗng hay không trong điều kiện if của Bash',
      flags: [],
      scenarios: [
        { task: 'Viết điều kiện kiểm tra nếu biến $input rỗng (chưa nhập gì)', accepted: ['[ -z "$input" ]'] },
        { task: 'Viết điều kiện kiểm tra nếu biến $input khác rỗng', accepted: ['[ -n "$input" ]'] },
      ],
    },
    {
      name: '[[ ]] vs [ ]',
      description: 'cú pháp điều kiện mở rộng [[ ]] của Bash, hỗ trợ regex và toán tử logic trực tiếp mà [ ] không có',
      flags: [],
      scenarios: [
        { task: 'Viết điều kiện kiểm tra biến $filename có khớp mẫu regex kết thúc bằng .txt, dùng [[ ]]', accepted: ['[[ $filename =~ \\.txt$ ]]'] },
      ],
    },
  ],
};
