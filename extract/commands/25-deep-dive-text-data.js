const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-text-data',
  week: WEEKS.EXTRA_1,
  commands: [
    {
      name: 'sort (advanced)',
      description: 'sắp xếp dữ liệu dạng bảng theo nhiều tiêu chí khác nhau (cột, kiểu dữ liệu, thứ tự)',
      flags: [
        { flag: '-t <ký tự>', meaning: 'chỉ định ký tự phân cách trường khi sắp xếp theo cột' },
        { flag: '-k <n>,<m>', meaning: 'chỉ sắp xếp dựa trên các trường từ vị trí n đến m' },
        { flag: '-h', meaning: 'sắp xếp theo kích thước dễ đọc (vd: 2K, 1M, 3G) đúng thứ tự giá trị thực' },
        { flag: '-M', meaning: 'sắp xếp theo tên tháng viết tắt (Jan, Feb...) đúng thứ tự thời gian' },
      ],
      scenarios: [
        { task: 'Sắp xếp tệp CSV data.csv theo cột thứ 2, phân cách bằng dấu phẩy', accepted: ['sort -t, -k2 data.csv'] },
        { task: 'Sắp xếp kết quả lệnh du -h theo kích thước dễ đọc tăng dần', accepted: ['du -h | sort -h'] },
        { task: 'Sắp xếp tệp log.txt theo cột 3 là số, giảm dần', accepted: ['sort -k3 -nr log.txt', 'sort -nr -k3 log.txt'] },
        { task: 'Sắp xếp và loại dòng trùng trong danh sách email emails.txt, không phân biệt hoa thường', accepted: ['sort -fu emails.txt', 'sort -f -u emails.txt'] },
      ],
    },
    {
      name: 'uniq (advanced)',
      description: 'xử lý các dòng trùng lặp liền kề với nhiều tùy chọn kiểm soát so khớp',
      flags: [
        { flag: '-i', meaning: 'so khớp dòng trùng lặp không phân biệt hoa thường' },
        { flag: '-f <n>', meaning: 'bỏ qua n trường đầu tiên khi so sánh dòng trùng lặp' },
        { flag: '-w <n>', meaning: 'chỉ so sánh n ký tự đầu tiên của mỗi dòng khi xét trùng lặp' },
      ],
      scenarios: [
        { task: 'Đếm số lần xuất hiện của mỗi dòng trong access.log đã sắp xếp, không phân biệt hoa thường', accepted: ['sort access.log | uniq -ic', 'sort access.log | uniq -i -c'] },
        { task: 'Chỉ hiển thị các dòng bị trùng lặp trong tệp names.txt đã sắp xếp', accepted: ['sort names.txt | uniq -d'] },
        { task: 'Chỉ hiển thị các dòng không bị trùng lặp (duy nhất) trong tệp ids.txt đã sắp xếp', accepted: ['sort ids.txt | uniq -u'] },
        { task: 'So sánh trùng lặp chỉ dựa trên 8 ký tự đầu tiên của mỗi dòng trong file.txt đã sắp xếp', accepted: ['sort file.txt | uniq -w 8'] },
      ],
    },
    {
      name: 'awk (field math)',
      description: 'dùng awk để lọc dòng và tính toán theo điều kiện trên các trường số',
      flags: [
        { flag: "'$3 > 100'", meaning: 'chỉ in các dòng mà trường thứ 3 lớn hơn 100' },
        { flag: "'{print NR, $0}'", meaning: 'in ra số thứ tự dòng cùng toàn bộ nội dung dòng đó' },
        { flag: "'BEGIN{FS=\",\"}'", meaning: 'thiết lập ký tự phân cách trường ngay từ đầu chương trình awk' },
        { flag: "'{count[$1]++} END{print count[\"A\"]}'", meaning: 'đếm số lần xuất hiện của từng giá trị cột 1 bằng mảng kết hợp' },
      ],
      scenarios: [
        { task: 'In ra các dòng của tệp sales.csv (phân cách dấu phẩy) có cột 3 lớn hơn 1000', accepted: ["awk -F, '$3 > 1000' sales.csv"] },
        { task: 'Tính trung bình cộng giá trị cột 2 của tệp scores.txt', accepted: ["awk '{sum+=$2; n++} END{print sum/n}' scores.txt"] },
        { task: 'Đếm số dòng có cột đầu tiên bằng "ERROR" trong app.log', accepted: ["awk '$1==\"ERROR\"' app.log | wc -l", "awk '$1 == \"ERROR\" {c++} END{print c}' app.log"] },
        { task: 'In ra dòng dài nhất (nhiều ký tự nhất) trong tệp text.txt bằng awk', accepted: ["awk '{ if (length($0) > max) { max = length($0); line = $0 } } END { print line }' text.txt"] },
      ],
    },
    {
      name: 'sed (advanced)',
      description: 'các thao tác sed nâng cao: nhiều lệnh kết hợp, dải dòng theo mẫu, chèn/thay thế có điều kiện',
      flags: [
        { flag: "/start/,/end/p", meaning: 'in các dòng nằm giữa dòng khớp "start" và dòng khớp "end" (dải theo mẫu)' },
        { flag: "-r", meaning: 'bật biểu thức chính quy mở rộng (extended regex) trong sed, cho phép dùng +, ?, | không cần escape' },
        { flag: "G", meaning: 'chèn thêm một dòng trống sau mỗi dòng đầu vào (gấp đôi khoảng cách dòng)' },
      ],
      scenarios: [
        { task: 'In các dòng nằm giữa dòng chứa "BEGIN" và dòng chứa "END" trong tệp script.log', accepted: ["sed -n '/BEGIN/,/END/p' script.log"] },
        { task: 'Dùng sed với extended regex thay thế "cat" hoặc "dog" bằng "pet" trong tệp animals.txt, ghi trực tiếp', accepted: ["sed -ri 's/cat|dog/pet/g' animals.txt", "sed -i -r 's/cat|dog/pet/g' animals.txt"] },
        { task: 'Chèn thêm một dòng trống sau mỗi dòng của tệp text.txt', accepted: ["sed G text.txt"] },
        { task: 'Xóa khoảng trắng thừa ở cuối mỗi dòng trong tệp code.txt, ghi trực tiếp vào tệp', accepted: ["sed -i 's/[ \\t]*$//' code.txt"] },
      ],
    },
    {
      name: 'grep (advanced)',
      description: 'các thao tác grep nâng cao: tìm nhiều mẫu, loại trừ thư mục, đếm theo tệp',
      flags: [
        { flag: '-e <mẫu1> -e <mẫu2>', meaning: 'tìm kiếm khớp với một trong nhiều mẫu khác nhau' },
        { flag: '--include="<mẫu tệp>"', meaning: 'khi tìm đệ quy, chỉ tìm trong các tệp khớp mẫu tên tệp chỉ định' },
        { flag: '--exclude-dir="<thư mục>"', meaning: 'khi tìm đệ quy, loại trừ một thư mục cụ thể khỏi quá trình tìm kiếm' },
      ],
      scenarios: [
        { task: 'Tìm đệ quy các dòng chứa "error" hoặc "warning" trong thư mục logs', accepted: ['grep -rE "error|warning" logs', 'grep -r -e error -e warning logs'] },
        { task: 'Tìm đệ quy từ "TODO" chỉ trong các tệp .js, loại trừ thư mục node_modules', accepted: ['grep -r --include="*.js" --exclude-dir="node_modules" "TODO" .', "grep -r --include='*.js' --exclude-dir='node_modules' 'TODO' ."] },
        { task: 'Đếm số tệp .log trong thư mục hiện tại có chứa từ "FATAL"', accepted: ['grep -l "FATAL" *.log | wc -l'] },
        { task: 'Tìm các dòng trong config.txt khớp với mẫu bắt đầu bằng "host" hoặc "port"', accepted: ['grep -E "^(host|port)" config.txt', "grep -E '^(host|port)' config.txt"] },
      ],
    },
    {
      name: 'find (advanced)',
      description: 'các thao tác find nâng cao: kết hợp nhiều điều kiện, loại trừ, xử lý theo lô',
      flags: [
        { flag: '-name "<a>" -o -name "<b>"', meaning: 'tìm các tệp khớp một trong hai mẫu tên (OR logic)' },
        { flag: '! -name "<mẫu>"', meaning: 'tìm các tệp KHÔNG khớp với mẫu chỉ định (phủ định)' },
        { flag: '-path "<mẫu>" -prune', meaning: 'loại trừ hoàn toàn một đường dẫn khỏi quá trình tìm kiếm, không duyệt vào bên trong' },
      ],
      scenarios: [
        { task: 'Tìm các tệp có đuôi .jpg hoặc .png trong thư mục images', accepted: ['find images -name "*.jpg" -o -name "*.png"', "find images -name '*.jpg' -o -name '*.png'"] },
        { task: 'Tìm tất cả tệp trong thư mục project, loại trừ hoàn toàn thư mục con .git', accepted: ['find project -path "*/.git" -prune -o -print', "find project -path '*/.git' -prune -o -print"] },
        { task: 'Tìm các tệp KHÔNG có đuôi .txt trong thư mục docs', accepted: ['find docs ! -name "*.txt"', "find docs ! -name '*.txt'"] },
        { task: 'Tìm các tệp .conf trong /etc rồi sao lưu từng tệp thêm hậu tố .bak bằng -exec', accepted: ['find /etc -name "*.conf" -exec cp {} {}.bak \\;', "find /etc -name '*.conf' -exec cp {} {}.bak \\;"] },
      ],
    },
    {
      name: 'xargs (advanced)',
      description: 'các thao tác xargs nâng cao: giới hạn song song, xác nhận, truyền tham số vị trí',
      flags: [
        { flag: '-P <n>', meaning: 'chạy tối đa n tiến trình song song cùng lúc' },
        { flag: '-p', meaning: 'hỏi xác nhận trước khi thực thi mỗi lệnh' },
        { flag: '-I {}', meaning: 'thay thế ký hiệu {} bằng từng dòng đầu vào trong lệnh (đã có ở bản cơ bản, dùng lại ở đây cho ngữ cảnh nâng cao)' },
      ],
      scenarios: [
        { task: 'Nén song song tối đa 4 tệp cùng lúc từ danh sách files.txt bằng gzip', accepted: ['xargs -P 4 gzip < files.txt', 'cat files.txt | xargs -P 4 gzip'] },
        { task: 'Xóa từng tệp trong danh sách old_files.txt, hỏi xác nhận trước mỗi lần xóa', accepted: ['xargs -p rm < old_files.txt', 'cat old_files.txt | xargs -p rm'] },
        { task: 'Copy từng tệp trong danh sách list.txt sang thư mục /backup, giữ nguyên tên tệp', accepted: ['xargs -I {} cp {} /backup < list.txt', 'cat list.txt | xargs -I {} cp {} /backup'] },
      ],
    },
    {
      name: 'diff (advanced)',
      description: 'các thao tác diff nâng cao: bỏ qua khoảng trắng, so sánh thư mục, tạo patch',
      flags: [
        { flag: '-w', meaning: 'bỏ qua khác biệt về khoảng trắng khi so sánh' },
        { flag: '-q', meaning: 'chỉ báo tên tệp có khác biệt hay không, không hiển thị chi tiết' },
        { flag: '-N', meaning: 'khi so sánh thư mục, coi tệp chỉ có ở một bên như một tệp rỗng ở bên còn lại' },
      ],
      scenarios: [
        { task: 'So sánh hai thư mục dir1 và dir2 đệ quy, hiển thị tên các tệp khác nhau', accepted: ['diff -rq dir1 dir2', 'diff -r -q dir1 dir2'] },
        { task: 'So sánh hai tệp a.txt và b.txt bỏ qua khác biệt khoảng trắng', accepted: ['diff -w a.txt b.txt'] },
        { task: 'Tạo tệp patch từ sự khác biệt giữa old.txt và new.txt', accepted: ['diff -u old.txt new.txt > changes.patch'] },
      ],
    },
    {
      name: 'wc (advanced)',
      description: 'các thao tác đếm nâng cao bằng wc trên nhiều tệp cùng lúc',
      flags: [
        { flag: '-L', meaning: 'hiển thị độ dài của dòng dài nhất trong tệp' },
      ],
      scenarios: [
        { task: 'Đếm tổng số dòng của tất cả các tệp .txt trong thư mục hiện tại', accepted: ['wc -l *.txt'] },
        { task: 'Tìm độ dài của dòng dài nhất trong tệp code.py', accepted: ['wc -L code.py'] },
        { task: 'Đếm số từ trong toàn bộ các tệp .md của thư mục docs', accepted: ['wc -w docs/*.md'] },
      ],
    },
    {
      name: 'tr (advanced)',
      description: 'các thao tác chuyển đổi ký tự nâng cao bằng tr: lọc ký tự, nén khoảng trắng',
      flags: [
        { flag: '-c', meaning: 'đảo ngược tập ký tự chỉ định (bổ sung), thao tác trên các ký tự KHÔNG nằm trong tập' },
        { flag: "-d '[:punct:]'", meaning: 'xóa toàn bộ các ký tự dấu câu khỏi đầu vào' },
      ],
      scenarios: [
        { task: 'Xóa toàn bộ dấu câu khỏi nội dung tệp text.txt', accepted: ["tr -d '[:punct:]' < text.txt"] },
        { task: 'Nén nhiều khoảng trắng liên tiếp thành một khoảng trắng duy nhất khi đọc input.txt', accepted: ["tr -s ' ' < input.txt"] },
        { task: 'Chỉ giữ lại các chữ số trong tệp mixed.txt, xóa mọi ký tự khác', accepted: ["tr -cd '0-9\\n' < mixed.txt"] },
      ],
    },
  ],
};
