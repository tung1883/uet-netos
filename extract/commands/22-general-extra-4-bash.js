const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-4-bash',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'if-then-fi',
      description: 'cấu trúc rẽ nhánh điều kiện cơ bản trong Bash, thực thi khối lệnh nếu điều kiện đúng',
      flags: [],
      scenarios: [
        { task: 'Viết cấu trúc kiểm tra nếu biến $count lớn hơn 10 trong Bash (chỉ dòng mở đầu if)', accepted: ['if [ $count -gt 10 ]; then'] },
      ],
    },
    {
      name: 'if-elif-else',
      description: 'cấu trúc rẽ nhánh nhiều điều kiện trong Bash, kiểm tra lần lượt nhiều trường hợp',
      flags: [],
      scenarios: [
        { task: 'Viết dòng elif kiểm tra nếu biến $count bằng 5 trong Bash', accepted: ['elif [ $count -eq 5 ]; then'] },
      ],
    },
    {
      name: 'for-loop',
      description: 'vòng lặp for trong Bash, lặp qua một danh sách giá trị hoặc dãy số',
      flags: [],
      scenarios: [
        { task: 'Viết vòng lặp for duyệt qua các số từ 1 đến 5 trong Bash (chỉ dòng mở đầu)', accepted: ['for i in 1 2 3 4 5; do', 'for i in $(seq 1 5); do'] },
        { task: 'Viết vòng lặp for duyệt qua toàn bộ tệp .txt trong thư mục hiện tại (chỉ dòng mở đầu)', accepted: ['for f in *.txt; do'] },
      ],
    },
    {
      name: 'while-loop',
      description: 'vòng lặp while trong Bash, lặp lại khối lệnh khi điều kiện còn đúng',
      flags: [],
      scenarios: [
        { task: 'Viết vòng lặp while đọc từng dòng của tệp file.txt (chỉ dòng mở đầu, dùng read)', accepted: ['while read line; do', 'while IFS= read -r line; do'] },
      ],
    },
    {
      name: 'until-loop',
      description: 'vòng lặp until trong Bash, lặp lại khối lệnh cho tới khi điều kiện trở thành đúng (ngược với while)',
      flags: [],
      scenarios: [
        { task: 'Viết vòng lặp until chạy cho tới khi biến $count bằng 10 (chỉ dòng mở đầu)', accepted: ['until [ $count -eq 10 ]; do'] },
      ],
    },
    {
      name: 'case-esac',
      description: 'cấu trúc rẽ nhánh nhiều lựa chọn (switch-case) trong Bash, dựa trên khớp mẫu',
      flags: [],
      scenarios: [
        { task: 'Viết dòng mở đầu cấu trúc case kiểm tra giá trị biến $1 trong Bash', accepted: ['case $1 in'] },
      ],
    },
    {
      name: 'function definition',
      description: 'khai báo một hàm trong Bash để tái sử dụng một khối lệnh',
      flags: [],
      scenarios: [
        { task: 'Viết dòng khai báo một hàm tên backup trong Bash', accepted: ['backup() {', 'function backup() {', 'function backup {'] },
      ],
    },
    {
      name: '$1 $2 $@',
      description: 'các biến đặc biệt trong Bash dùng để truy cập tham số dòng lệnh truyền vào script',
      flags: [
        { flag: '$1', meaning: 'tham số dòng lệnh đầu tiên truyền vào script' },
        { flag: '$@', meaning: 'toàn bộ các tham số dòng lệnh, mỗi tham số là một từ riêng biệt' },
        { flag: '$#', meaning: 'số lượng tham số dòng lệnh được truyền vào script' },
        { flag: '$0', meaning: 'tên của chính script đang chạy' },
        { flag: '$?', meaning: 'mã thoát (exit code) của lệnh vừa thực thi trước đó' },
      ],
      scenarios: [
        { task: 'In ra tham số dòng lệnh đầu tiên được truyền vào script', accepted: ['echo $1'] },
        { task: 'In ra số lượng tham số dòng lệnh được truyền vào script', accepted: ['echo $#'] },
        { task: 'Kiểm tra mã thoát của lệnh vừa chạy trước đó', accepted: ['echo $?'] },
      ],
    },
    {
      name: 'declare -a',
      description: 'khai báo một biến mảng (array) trong Bash',
      flags: [],
      scenarios: [
        { task: 'Khai báo một mảng tên colors trong Bash với 3 phần tử red, green, blue', accepted: ['colors=(red green blue)', 'declare -a colors=(red green blue)'] },
      ],
    },
    {
      name: 'array access',
      description: 'truy cập phần tử hoặc toàn bộ nội dung của một mảng trong Bash',
      flags: [
        { flag: '${arr[0]}', meaning: 'truy cập phần tử đầu tiên (chỉ số 0) của mảng' },
        { flag: '${arr[@]}', meaning: 'truy cập toàn bộ các phần tử của mảng' },
        { flag: '${#arr[@]}', meaning: 'lấy số lượng phần tử trong mảng' },
      ],
      scenarios: [
        { task: 'In ra toàn bộ phần tử của mảng colors trong Bash', accepted: ['echo ${colors[@]}'] },
      ],
    },
    {
      name: 'local',
      description: 'khai báo một biến chỉ có phạm vi cục bộ bên trong một hàm Bash',
      flags: [],
      scenarios: [
        { task: 'Khai báo biến cục bộ tên result bên trong một hàm Bash với giá trị 0', accepted: ['local result=0'] },
      ],
    },
    {
      name: 'return',
      description: 'kết thúc một hàm Bash và trả về một mã trạng thái (exit status), không trả về giá trị dữ liệu',
      flags: [],
      scenarios: [
        { task: 'Trả về mã trạng thái 0 (thành công) khi kết thúc một hàm Bash', accepted: ['return 0'] },
      ],
    },
    {
      name: 'trap',
      week: WEEKS.W4_TH6,
      description: 'bắt và xử lý tín hiệu (signal) gửi tới script, thường dùng để dọn dẹp trước khi thoát',
      flags: [],
      scenarios: [
        { task: 'Thiết lập để chạy hàm cleanup khi script nhận tín hiệu SIGINT hoặc SIGTERM', accepted: ['trap cleanup SIGINT SIGTERM', "trap 'cleanup' SIGINT SIGTERM"] },
      ],
    },
    {
      name: 'getopts',
      week: WEEKS.W4_TH6,
      description: 'phân tích và xử lý các tùy chọn dòng lệnh (vd: -a, -b value) được truyền vào script',
      flags: [],
      scenarios: [
        { task: 'Viết vòng lặp getopts xử lý các tùy chọn -a và -b trong script (chỉ dòng mở đầu)', accepted: ['while getopts "ab:" opt; do'] },
      ],
    },
    {
      name: 'source / .',
      description: 'thực thi nội dung một script trong shell hiện tại (thay vì mở subshell mới), dùng để nạp biến/hàm vào môi trường hiện tại',
      flags: [],
      scenarios: [
        { task: 'Nạp các biến và hàm từ tệp config.sh vào shell hiện tại', accepted: ['source config.sh', '. config.sh'] },
      ],
    },
    {
      name: 'shift',
      description: 'dịch chuyển các tham số dòng lệnh trong script sang trái một vị trí, $2 trở thành $1',
      flags: [],
      scenarios: [
        { task: 'Dịch tham số dòng lệnh sang trái một vị trí trong script', accepted: ['shift'] },
      ],
    },
    {
      name: 'set -e',
      week: WEEKS.W4_TH6,
      description: 'thiết lập shell/script tự động thoát ngay nếu có bất kỳ lệnh nào trả về lỗi (exit code khác 0)',
      flags: [],
      scenarios: [
        { task: 'Thiết lập script tự động dừng ngay khi gặp lệnh lỗi', accepted: ['set -e'] },
      ],
    },
    {
      name: 'set -x',
      week: WEEKS.W4_TH6,
      description: 'bật chế độ debug, in ra từng lệnh trước khi thực thi trong script',
      flags: [],
      scenarios: [
        { task: 'Bật chế độ debug in ra từng lệnh trước khi chạy trong script', accepted: ['set -x'] },
      ],
    },
    {
      name: 'here-document',
      week: WEEKS.W4_TH6,
      description: 'cú pháp cho phép nhúng một khối văn bản nhiều dòng trực tiếp vào script, chuyển làm đầu vào cho một lệnh',
      flags: [],
      scenarios: [
        { task: 'Viết dòng mở đầu here-document để ghi nội dung nhiều dòng vào tệp output.txt bằng cat', accepted: ['cat << EOF > output.txt', 'cat <<EOF > output.txt'] },
      ],
    },
    {
      name: 'string comparison',
      description: 'so sánh hai chuỗi trong điều kiện test/[ ] của Bash',
      flags: [
        { flag: '=', meaning: 'kiểm tra hai chuỗi có bằng nhau hay không' },
        { flag: '!=', meaning: 'kiểm tra hai chuỗi có khác nhau hay không' },
        { flag: '-z', meaning: 'kiểm tra chuỗi có rỗng hay không' },
        { flag: '-n', meaning: 'kiểm tra chuỗi có khác rỗng hay không' },
      ],
      scenarios: [
        { task: 'Viết điều kiện kiểm tra nếu biến $name bằng chuỗi "admin"', accepted: ['[ "$name" = "admin" ]', '[ "$name" == "admin" ]'] },
      ],
    },
    {
      name: 'numeric comparison',
      description: 'so sánh hai giá trị số trong điều kiện test/[ ] của Bash',
      flags: [
        { flag: '-eq', meaning: 'kiểm tra hai số bằng nhau' },
        { flag: '-ne', meaning: 'kiểm tra hai số khác nhau' },
        { flag: '-gt', meaning: 'kiểm tra số thứ nhất lớn hơn số thứ hai' },
        { flag: '-lt', meaning: 'kiểm tra số thứ nhất nhỏ hơn số thứ hai' },
        { flag: '-ge', meaning: 'kiểm tra số thứ nhất lớn hơn hoặc bằng số thứ hai' },
        { flag: '-le', meaning: 'kiểm tra số thứ nhất nhỏ hơn hoặc bằng số thứ hai' },
      ],
      scenarios: [
        { task: 'Viết điều kiện kiểm tra nếu biến $age lớn hơn hoặc bằng 18', accepted: ['[ $age -ge 18 ]'] },
      ],
    },
    {
      name: 'file test operators',
      description: 'các toán tử kiểm tra thuộc tính tệp trong điều kiện test/[ ] của Bash',
      flags: [
        { flag: '-f', meaning: 'kiểm tra đường dẫn tồn tại và là tệp thông thường' },
        { flag: '-d', meaning: 'kiểm tra đường dẫn tồn tại và là thư mục' },
        { flag: '-e', meaning: 'kiểm tra đường dẫn tồn tại (bất kỳ loại nào)' },
        { flag: '-x', meaning: 'kiểm tra tệp tồn tại và có quyền thực thi' },
        { flag: '-r', meaning: 'kiểm tra tệp tồn tại và có quyền đọc' },
        { flag: '-w', meaning: 'kiểm tra tệp tồn tại và có quyền ghi' },
        { flag: '-s', meaning: 'kiểm tra tệp tồn tại và có kích thước lớn hơn 0 (không rỗng)' },
      ],
      scenarios: [
        { task: 'Viết điều kiện kiểm tra thư mục /data có tồn tại hay không', accepted: ['[ -d /data ]'] },
        { task: 'Viết điều kiện kiểm tra tệp script.sh có quyền thực thi hay không', accepted: ['[ -x script.sh ]'] },
      ],
    },
    {
      name: 'logical operators (&&, ||)',
      description: 'toán tử logic trong Bash dùng để nối điều kiện hoặc chạy lệnh có điều kiện',
      flags: [
        { flag: '&&', meaning: 'chạy lệnh thứ hai chỉ khi lệnh đầu tiên thành công (exit code 0)' },
        { flag: '||', meaning: 'chạy lệnh thứ hai chỉ khi lệnh đầu tiên thất bại (exit code khác 0)' },
      ],
      scenarios: [
        { task: 'Chạy lệnh "echo OK" chỉ khi lệnh mkdir /data thành công', accepted: ['mkdir /data && echo OK'] },
      ],
    },
  ],
};
