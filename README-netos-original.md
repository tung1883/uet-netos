# NetOS Quiz — Ngân hàng câu hỏi Thực hành hệ điều hành mạng

Ngân hàng câu hỏi ôn tập cho môn "Thực hành hệ điều hành mạng" (UET-VNU, course 6560), cộng thêm phần mở rộng các lệnh Linux tổng quát không giới hạn trong phạm vi môn học.

## Chạy

```
node generate.js
```

Script đọc dữ liệu lệnh/lý thuyết trong `extract/commands/*.js` và `extract/theory/*.js`, dùng template để sinh câu hỏi, loại trùng, rồi ghi ra `data/questions.js`. Không cần cài npm package nào (Node built-in only).

Mở `index.html` qua một static server cục bộ (`file://` trực tiếp không load được script):
```
node -e "require('http').createServer((req,res)=>{const fs=require('fs'),path=require('path');let p=req.url.split('?')[0]; if(p==='/')p='/index.html'; fs.readFile(path.join(__dirname,p),(e,d)=>{if(e){res.writeHead(404);res.end();return;} const ext=path.extname(p); res.writeHead(200,{'Content-Type': ext==='.html'?'text/html':ext==='.js'?'text/javascript':'text/plain'}); res.end(d);});}).listen(8765,()=>console.log('http://localhost:8765'))"
```

## Kết quả hiện tại

**Tổng: 5057 câu hỏi duy nhất** — đã vượt mốc 5000 đề ra.
- Trắc nghiệm (mcq, 4 lựa chọn — trừ 24 câu chỉ có 3 lựa chọn do pool nhiễu còn mỏng ở vài lệnh hiếm): 3930
- Viết lệnh (command, chấm theo danh sách đáp án chấp nhận): 1127

### Hai đợt mở rộng để đạt mốc

**Đợt 1 (2852 → 4313):** thêm ~230 lệnh mới (modules 19-24, 25-40) với flags/scenarios thật, có thật trong Linux, không phải suy diễn.

**Đợt 2 — lực đẩy chính (4313 → 4992, rồi 5057):** sửa một giới hạn trong `generate.js`. Trước đó, các câu hỏi trắc nghiệm dạng "lệnh nào đúng" / "lệnh này dùng để làm gì" chỉ được sinh ra khi tìm đủ **chính xác 3** đáp án nhiễu từ các scenario KHÁC của CÙNG một lệnh — nghĩa là một lệnh chỉ có 1-2 scenario (chiếm đa số, ~355/380 lệnh ban đầu) bị bỏ qua hoàn toàn, mất khoảng 2 câu hỏi hợp lệ mỗi scenario. Sửa 2 chỗ:
1. Hạ ngưỡng tối thiểu từ "đúng 3 nhiễu" xuống "tối thiểu 2 nhiễu" (chấp nhận MCQ 3 lựa chọn khi không đủ 4).
2. Thêm một pool nhiễu dự phòng ở cấp **category** (toàn bộ scenario của mọi lệnh trong cùng chủ đề, không chỉ riêng lệnh đó) — để một lệnh chỉ có 1 scenario riêng vẫn mượn được đáp án sai hợp lý từ lệnh anh em cùng chủ đề, thay vì bị bỏ qua.

Đây **không phải** nới lỏng chất lượng: mỗi lựa chọn nhiễu vẫn là một lệnh/mô tả/task **có thật** lấy từ dữ liệu đã nhập, không phải chuỗi bịa hay xáo trộn text — chỉ là mở rộng nguồn lấy nhiễu hợp lệ. Riêng thay đổi này (không thêm lệnh mới nào) đã tự sinh thêm ~1000 câu hỏi hợp lệ từ đúng dữ liệu đã có sẵn, cho thấy bottleneck thật sự trước đó nằm ở ngưỡng sinh câu hỏi quá chặt, không phải thiếu dữ liệu lệnh.

Sau khi sửa generator, tiếp tục thêm khoảng 14 module mới (25-40, tổng ~130 lệnh) để vượt mốc 5000 với biên độ an toàn.

## Tổ chức theo cấu trúc giáo trình (Tuần/Buổi)

Mỗi câu hỏi mang field `week`, giá trị lấy đúng nguyên văn tên tuần/buổi học trong giáo trình portal (xem `extract/weeks.js` — nguồn chân lý duy nhất). Bộ chọn trong `index.html` hiển thị theo đúng thứ tự Tuần 1 → Tuần 11, các buổi không có lệnh gắn trực tiếp (Tuần 6 TH10 - kiểm tra giữa kỳ; Tuần 7 TH12 - proxy; Tuần 10 TH18 - thực hành tích hợp) hiển thị 0 câu và tự ẩn khỏi lưới chọn.

Phân bổ theo tuần (chạy `node generate.js` để xem log đầy đủ theo đúng thứ tự giáo trình):

| Tuần/Buổi | Số câu |
|---|---|
| Tuần 1 – Lý thuyết 1: Tổng quan Linux và môi trường quản trị | 12 |
| Tuần 2 – Lý thuyết 2: Quản lý tài nguyên hệ thống | 20 |
| Tuần 2 – Thực hành 1: Cài đặt và sử dụng Linux | 553 |
| Tuần 2 – Thực hành 2: Quản lý tệp và xử lý văn bản | 472 |
| Tuần 3 – Thực hành 3: Quản lý đĩa và hệ thống tệp | 247 |
| Tuần 3 – Thực hành 4: Quản lý người dùng, tiến trình và dịch vụ | 629 |
| Tuần 4 – Lý thuyết 3: Lập trình quản trị và nền tảng dịch vụ mạng | 12 |
| Tuần 4 – Thực hành 5: Lập trình Bash cơ bản | 332 |
| Tuần 4 – Thực hành 6: Tự động hóa và lập lịch tác vụ | 85 |
| Tuần 5 – Thực hành 7: Cấu hình mạng và SSH | 346 |
| Tuần 5 – Thực hành 8: Triển khai DNS và DHCP | 130 |
| Tuần 6 – Lý thuyết 4: Nguyên lý và tổ chức dịch vụ mạng | 4 |
| Tuần 6 – Thực hành 9: Chia sẻ tệp với NFS và Samba | 107 |
| Tuần 6 – Thực hành 10: Kiểm tra thực hành giữa kỳ | 0 (buổi kiểm tra, không có lệnh mới) |
| Tuần 7 – Thực hành 11: Triển khai Web và HTTPS | 118 |
| Tuần 7 – Thực hành 12: Triển khai dịch vụ proxy | 0 (xem ghi chú dưới) |
| Tuần 8 – Lý thuyết 5: Bảo vệ và vận hành máy chủ | 8 |
| Tuần 8 – Thực hành 13: Tường lửa và bảo vệ truy cập | 179 |
| Tuần 8 – Thực hành 14: Nhật ký và giám sát hệ thống | 172 |
| Tuần 9 – Thực hành 15: Triển khai dịch vụ thư điện tử | 35 |
| Tuần 9 – Thực hành 16: Triển khai dịch vụ bằng container | 200 |
| Tuần 10 – Thực hành 17: Sao lưu và phục hồi hệ thống | 37 |
| Tuần 10 – Thực hành 18: Thực hành tích hợp máy chủ | 0 (buổi tổng hợp, không có lệnh mới riêng) |
| Tuần 11 – Thực hành 19: Xử lý sự cố và cứu hộ | 42 |
| Tuần 11 – Thực hành 20: Ôn tập và thực hành tổng hợp | 10 |
| Ngoài giáo trình: Lệnh hệ thống tổng quát (nhóm 1) | 457 |
| Ngoài giáo trình: Lệnh hệ thống tổng quát (nhóm 2) | 316 |
| Ngoài giáo trình: Quản trị gói & dịch vụ (đa hệ) | 200 |
| Ngoài giáo trình: Tiến trình, tín hiệu, tiện ích văn bản | 197 |
| Ngoài giáo trình: Mạng & gói tin nâng cao | 137 |

**Ghi chú về việc gán tuần:**
- Khi một lệnh/câu lý thuyết được dạy lặp lại ở nhiều tuần (vd: `journalctl` giới thiệu cùng systemd ở Tuần 3 TH4 nhưng đào sâu thành kỹ năng chính ở Tuần 8 TH14), nó được gán vào tuần giáo trình liệt kê là trọng tâm.
- Các case split: `crontab`/`at`/`systemd-run` → Tuần 4 TH6 (Tự động hóa); `getopts`/`trap`/`set -e`/`set -x`/here-document → Tuần 4 TH6 (xử lý lỗi); theory reverse proxy/HTTPS/mail → Tuần 6 LT4; theory Docker/UFW/least-privilege → Tuần 8 LT5; theory lý do backup cấu hình → Tuần 10 TH17; theory rescue mode → Tuần 11 TH19.
- "Tuần 7 TH12 (proxy)" vẫn 0 câu: nội dung proxy trong giáo trình là một khối cấu hình Nginx, không phải lệnh CLI riêng biệt — gộp vào Tuần 7 TH11. Format câu hỏi hiện tại (`acceptedAnswers` so khớp 1 dòng lệnh) không hợp để chấm một khối cấu hình nhiều dòng.
- Phần "Ngoài giáo trình" (~1300 câu) cố tình KHÔNG gán vào tuần nào trong 11 tuần — các lệnh này không có trong giáo trình portal, gán bừa sẽ sai lệch thông tin. Hiển thị như mục chọn riêng, xếp sau Tuần 11.

## Cấu trúc dự án

```
netos-quiz/
├── extract/
│   ├── weeks.js          # nguồn chân lý cho label tuần/buổi học + thứ tự hiển thị
│   ├── commands/          # command database, mỗi file export {category, week, commands:[...]}
│   │                       # từng lệnh có thể override `week` riêng nếu khác mặc định của file
│   └── theory/             # câu hỏi lý thuyết soạn sẵn, mỗi item có thể override `week` riêng
├── generate.js              # sinh data/questions.js từ extract/
├── data/questions.js         # output — QUIZ_DATA + QUIZ_WEEKS_ORDER, nạp vào index.html qua <script>
├── index.html / app.js       # ứng dụng quiz (dark theme), picker theo tuần
└── README.md
```

## Cách sinh câu hỏi (generate.js)

Mỗi lệnh trong `extract/commands/*.js` có `description`, `flags[]`, `scenarios[]`, và `week`. Từ đó generate.js dựng:
1. 2 câu MCQ khái niệm (lệnh làm gì / mô tả này ứng với lệnh nào) — nhiễu lấy từ các lệnh khác cùng category, tối thiểu 2 nhiễu (MCQ 3 lựa chọn), ưu tiên đủ 3 nhiễu (MCQ 4 lựa chọn).
2. Với mỗi flag: MCQ "flag này làm gì", MCQ "làm việc này dùng flag nào" (nhiễu ưu tiên các flag khác của cùng lệnh, hết thì mượn từ category pool), và 1 câu viết-lệnh-đầy-đủ (nếu flag là chuỗi cụ thể, không chứa placeholder `<...>`).
3. Với mỗi scenario: 1 câu viết-lệnh (chấm theo `acceptedAnswers`), 1 MCQ "lệnh nào đúng" và 1 MCQ ngược "lệnh này dùng để làm gì" — nhiễu ưu tiên các scenario khác của cùng lệnh, hết thì mượn từ toàn bộ scenario trong cùng category (`categoryScenarioPool`).

Toàn bộ nhiễu luôn là dữ liệu thật đã nhập (lệnh/mô tả/task có thật), không phải chuỗi tự sinh hay xáo trộn ký tự. Trùng lặp loại theo `type + text` đã chuẩn hóa.

## Ứng dụng quiz (index.html + app.js)

- Chọn 1 tuần/buổi (giới hạn 40 câu/lượt, xáo trộn ngẫu nhiên) hoặc "Làm tất cả" (toàn bộ 5057 câu). Lưới chọn hiển thị đúng thứ tự Tuần 1 → Tuần 11 rồi tới các mục "Ngoài giáo trình".
- 2 loại câu: trắc nghiệm (radio, đa số 4 lựa chọn, một số ít 3) và viết lệnh (text input, chấm so khớp chính xác — trim khoảng trắng thừa, case-sensitive).
- Câu bỏ trống khi nộp bài **không** chỉ im lặng tô xanh đáp án đúng — bị gắn khung cam + cảnh báo "chưa trả lời — tính là sai" và tính vào số câu sai.
- Không dùng icon unicode/emoji ở bất cứ đâu trong UI.
- Timer 45 phút + thanh tiến độ.

### Đã kiểm tra bằng trình duyệt thật (Chrome, qua static server cục bộ)
- Toàn vẹn dữ liệu: `node -e` kiểm tra lại toàn bộ 5057 câu — 0 lỗi cấu trúc (mcq thiếu option/correctIndex sai phạm vi, command thiếu acceptedAnswers, thiếu/sai field `week`). Phân bố số lựa chọn MCQ: 3906 câu đủ 4 lựa chọn, chỉ 24 câu còn 3 lựa chọn (do nguồn nhiễu còn mỏng ở vài lệnh rất hiếm).
- Click chọn "Tuần 3 – Thực hành 4" (buổi nhiều câu nhất, 629 câu): render đúng 40 câu, subtitle đúng tên tuần.
- Nộp bài để trống hoàn toàn 40/40 câu: cả 40 câu đều bị gắn `flag-unanswered`, thống kê "Bỏ qua" = 40 — xác nhận cơ chế chống lỗi "im lặng" vẫn đúng ở quy mô dữ liệu lớn hơn.
- Vòng kiểm tra trước đó (bản nhỏ hơn) đã test chấm điểm lệnh: đúng/sai/bỏ qua khớp chính xác kỳ vọng, so khớp lệnh chấp nhận thừa khoảng trắng nhưng từ chối sai hoa-thường.
