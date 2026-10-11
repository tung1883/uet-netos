# Hệ điều hành mạng UET - Ngân hàng câu hỏi & Trắc nghiệm ôn tập

Trang web ôn tập miễn phí cho môn **Thực hành Hệ điều hành mạng (NetOS)**, Trường Đại học Công nghệ - ĐHQGHN (UET-VNU), mã môn **INT3301**.

**Trải nghiệm trực tiếp: [https://tung1883.github.io/uet-netos/](https://tung1883.github.io/uet-netos/)** _(cập nhật link thật sau khi deploy)_

Dành cho sinh viên đang học hoặc ôn thi giữa kỳ/cuối kỳ môn Thực hành Hệ điều hành mạng, cần luyện trắc nghiệm, ôn lệnh Linux, luyện viết lệnh theo format đề thi thật.

## Có gì trong này

- **Ngân hàng câu hỏi NetOS - 5429 câu**, chia theo đúng 11 tuần / 20 buổi thực hành của giáo trình (Tuần 1 → Tuần 11), gồm:
  - Câu trắc nghiệm 4 đáp án (MCQ) - lý thuyết, khái niệm, đọc hiểu output lệnh.
  - Câu viết lệnh (command-fill) - đúng format đề giữa kỳ thật: tự chấm, chấp nhận nhiều cách viết lệnh hợp lệ (có/không sudo, flag ngắn/dài...).
  - 1 bộ "Ngoài giáo trình" tổng hợp thêm câu hỏi Linux cơ bản (lệnh, flag, khái niệm hệ điều hành) không chỉ bó trong nội dung giáo trình.
- **Tài liệu tham khảo - 648 mục, 27 chủ đề** - không phải trắc nghiệm, mà trang đọc nhanh: khái niệm, lệnh kèm flag + ví dụ, và hướng dẫn từng bước cho các thao tác thực hành (tạo LVM, cấu hình Netplan, UFW, Samba, NFS, Docker...).
- **Song ngữ VI/EN** - chuyển đổi tức thì, nhớ lựa chọn qua trình duyệt.
- Tự chấm điểm ngay, phân biệt rõ Đúng / Sai / Bỏ qua (câu không trả lời cũng bị tính sai, không mập mờ).
- Chọn ôn theo từng tuần/buổi học, hoặc làm toàn bộ ngân hàng câu hỏi.

Từ khoá liên quan: trắc nghiệm hệ điều hành mạng, netos uet, int3301, ôn thi giữa kỳ hệ điều hành mạng, ngân hàng câu hỏi linux, bài tập linux uet, trắc nghiệm linux có đáp án.

## Cách dùng

Mở trực tiếp link ở trên, chọn tuần/chủ đề cần ôn, làm bài, bấm **Nộp bài** để xem kết quả + giải thích từng câu.

## Chạy ở máy cá nhân (cho ai muốn tự host / phát triển thêm)

Cần một local static server (không mở trực tiếp bằng `file://` vì trình duyệt chặn `<script src>` đọc file cục bộ ở một số thiết lập):

```
git clone https://github.com/tung1883/uet-netos.git
cd uet-netos
npx --yes serve -l 5500 .
```

Mở `http://localhost:5500`.

---

## Dev notes (cấu trúc code, cập nhật dữ liệu)

Một app duy nhất, 2 mục:

1. **Thực hành Hệ điều hành mạng (NetOS)** - theo đúng cấu trúc tuần/buổi học của giáo trình UET, gồm cả câu trắc nghiệm và câu viết lệnh (format giống đề giữa kỳ thật). Bộ trắc nghiệm Hệ điều hành Linux (15 bộ đề tổng hợp từ voviethoang.com, đã loại trùng) đã được gộp vào đây làm 1 bucket "Ngoài giáo trình: Trắc nghiệm tổng hợp Hệ điều hành Linux" thay vì là mục riêng.
2. **Tài liệu tham khảo** - không phải trắc nghiệm, mà là trang đọc: khái niệm, lệnh (kèm flag + ví dụ), và hướng dẫn từng bước cho các thao tác thường gặp, tổ chức theo đúng tuần/buổi học như bộ NetOS (+ 1 mục "Kiến thức nền tảng Linux" riêng). Phong cách viết dựa theo note cá nhân của người dùng (`D:\MEGA\obsidian\Learn Linux.md`): lệnh -> mô tả ngắn -> flag -> ví dụ; thao tác nhiều bước -> danh sách bước có lệnh thật kèm theo.

### Ngôn ngữ (VI / EN)

Có nút chuyển VI/EN ở đầu trang. Cả 2 mục (bộ câu hỏi NetOS + tài liệu tham khảo) đều có bản dịch tiếng Anh đầy đủ, song song và cùng cấu trúc/số lượng với bản tiếng Việt (index-aligned). Lựa chọn ngôn ngữ được nhớ qua `localStorage`.

Lưu ý:
- `acceptedAnswers` (câu loại "viết lệnh") **không dịch** ở cả 2 bản - đó là lệnh Linux thật, không phụ thuộc ngôn ngữ.
- Các chuỗi mẫu câu hỏi (ví dụ "Lệnh `X` dùng để làm gì?") nằm cứng trong `generate.js`/`generate-en.js`, không nằm trong `extract*/` - khi sửa văn bản mẫu câu hỏi tiếng Anh, sửa trong `generate-en.js`, không phải `generate.js`.

### Cấu trúc

```
quiz/
  index.html, app.js          - UI dùng chung cho cả bộ câu hỏi NetOS (đã gộp Linux OS) và cả 2 ngôn ngữ
  data/
    linux-os.js                - var QUIZ_DATA_LINUX = [...]            (VI, nguồn thô - không load trực tiếp trong index.html nữa)
    linux-os.en.js              - var QUIZ_DATA_LINUX_EN = [...]        (EN, cùng thứ tự/độ dài)
    linux-os-raw/                - dữ liệu thô từng bộ (audit)
    netos.js                    - var QUIZ_DATA_NETOS, QUIZ_WEEKS_ORDER_NETOS    (VI, ĐÃ gộp 372 câu Linux OS vào bucket "Ngoài giáo trình: Trắc nghiệm tổng hợp Hệ điều hành Linux")
    netos.en.js                  - var QUIZ_DATA_NETOS_EN, QUIZ_WEEKS_ORDER_NETOS_EN      (EN, tương tự)
    reference.js                 - var REFERENCE_DATA = [...]      (VI, tài liệu tham khảo)
    reference.en.js               - var REFERENCE_DATA_EN = [...]  (EN, cùng cấu trúc/thứ tự)
  fetch-quiz.js                - cào lại 15 bộ đề Linux OS -> data/linux-os.js (nguồn thô, chạy xong cần chạy tiếp merge-linux-into-netos.js)
  merge-linux-into-netos.js    - gộp data/linux-os(.en).js vào data/netos(.en).js làm 1 bucket "Ngoài giáo trình" (idempotent - chạy lại không bị trùng)
  extract/linux-os-en-overlay.json - bản dịch EN (text/options/explanation) cho bộ Linux OS, theo đúng thứ tự data/linux-os.js
  generate.js + extract/       - sinh bộ câu hỏi NetOS tiếng Việt -> data/netos.js
  generate-en.js + extract-en/ - sinh bộ câu hỏi NetOS tiếng Anh -> data/netos.en.js (cùng cấu trúc extract/, đã dịch)
  build-reference.js + extract/reference-howtos.js      - sinh tài liệu tham khảo VI -> data/reference.js
  build-reference.js --en + extract-en/reference-howtos.js - sinh tài liệu tham khảo EN -> data/reference.en.js
```

**Lưu ý thứ tự khi cập nhật dữ liệu:** `generate.js`/`generate-en.js` ghi đè toàn bộ `data/netos(.en).js` bằng `var ... = ...`, nên nếu chạy lại chúng SAU khi đã merge, bucket Linux OS sẽ mất - phải chạy `node merge-linux-into-netos.js` lại lần cuối (nó tự xoá bản merge cũ trước khi gộp lại nên không bị trùng).

### Cập nhật dữ liệu

- Bộ Linux OS (VI): `node fetch-quiz.js` (cần mạng, cào lại voviethoang.com) -> rồi `node merge-linux-into-netos.js` để gộp vào NetOS. Bản EN (`extract/linux-os-en-overlay.json` + `data/linux-os.en.js`) cần được cập nhật tay/dịch lại thủ công theo thứ tự mới nếu nội dung VI thay đổi, trước khi chạy merge.
- Bộ NetOS (VI): sửa/thêm dữ liệu trong `extract/commands/*.js`, `extract/theory/*.js`, `extract/weeks.js`, rồi `node generate.js` -> rồi `node merge-linux-into-netos.js` để giữ lại bucket Linux OS.
- Bộ NetOS (EN): sửa song song file tương ứng trong `extract-en/commands/*.js`, `extract-en/theory/*.js`, `extract-en/weeks.js` (giữ cấu trúc/khoá giống hệt bản VI, chỉ dịch mô tả/flag/scenario - **không dịch** `accepted`/lệnh thật), rồi `node generate-en.js`.
- Tài liệu tham khảo: nội dung "Lệnh tham khảo" và "Khái niệm" được build **tự động** từ chính `extract/commands/*.js` và `extract/theory/*.js` (dữ liệu dùng chung với bộ câu hỏi NetOS) - sửa dữ liệu NetOS ở trên rồi chạy lại `node build-reference.js` (và `--en`) sẽ tự cập nhật cả tài liệu tham khảo, không cần sửa gì thêm. Riêng mục "Hướng dẫn thực hiện" (howto nhiều bước) là tay viết trong `extract/reference-howtos.js` (VI) + `extract-en/reference-howtos.js` (EN, song song, không dịch phần lệnh) - thêm/sửa walkthrough thì sửa 2 file này rồi chạy lại `node build-reference.js` / `node build-reference.js --en`.

Sau khi chạy lại script, chỉ cần tải lại trang - không cần sửa `app.js`/`index.html`.

### Schema câu hỏi

Cả 2 bộ dùng chung 2 kiểu:

```js
{ type: "mcq", text, options: [4 chuỗi], correctIndex, explanation, ... }
{ type: "command", text, acceptedAnswers: [chuỗi...], explanation, ... }
```

Nhóm/chủ đề để chọn bộ câu hỏi lấy từ `week` (chuỗi đúng như giáo trình, ví dụ "Tuần 2 - Thực hành 1: ..." hoặc "Ngoài giáo trình: ...") -> sắp xếp theo `QUIZ_WEEKS_ORDER_NETOS`. Các câu gộp từ Linux OS có thêm field `mergedFromLinuxOs: true` (dùng để merge-linux-into-netos.js tự nhận diện và không bị trùng khi chạy lại).

Tài liệu tham khảo dùng schema riêng (đọc, không chấm điểm):

```js
{ module: "Tuần 3 - Thực hành 3: ...", sections: [
  { heading: "Khái niệm", items: [ { type: "concept", title, body } ] },
  { heading: "Lệnh tham khảo", items: [ { type: "command", name, purpose, flags: [{flag, meaning}], examples: [chuỗi...] } ] },
  { heading: "Hướng dẫn thực hiện", items: [ { type: "howto", title, steps: [{ text, command }] } ] },
]}
```

### Lịch sử

Trước đây là 2 thư mục `linux-quiz/` và `netos-quiz/` riêng biệt - đã gộp làm 1, không còn giữ bản cũ để tránh trùng lặp/mất đồng bộ dữ liệu. Lịch sử phát triển chi tiết của bộ NetOS (số liệu từng vòng mở rộng câu hỏi) xem `README-netos-original.md` trong thư mục này.

## Đóng góp / báo lỗi

Phát hiện câu hỏi sai, đáp án sai, hoặc muốn bổ sung câu hỏi - mở issue hoặc pull request trên repo này.
