// Canonical syllabus week/lab labels, exact wording from the portal course (6560) syllabus,
// in the order they appear in the course. Used as the single source of truth for the `week`
// tag on every question, and for sorting the topic picker in app.js.
module.exports = {
  W1_LT1: 'Tuần 1 – Lý thuyết 1: Tổng quan Linux và môi trường quản trị',
  W2_LT2: 'Tuần 2 – Lý thuyết 2: Quản lý tài nguyên hệ thống',
  W2_TH1: 'Tuần 2 – Thực hành 1: Cài đặt và sử dụng Linux',
  W2_TH2: 'Tuần 2 – Thực hành 2: Quản lý tệp và xử lý văn bản',
  W3_TH3: 'Tuần 3 – Thực hành 3: Quản lý đĩa và hệ thống tệp',
  W3_TH4: 'Tuần 3 – Thực hành 4: Quản lý người dùng, tiến trình và dịch vụ',
  W4_LT3: 'Tuần 4 – Lý thuyết 3: Lập trình quản trị và nền tảng dịch vụ mạng',
  W4_TH5: 'Tuần 4 – Thực hành 5: Lập trình Bash cơ bản',
  W4_TH6: 'Tuần 4 – Thực hành 6: Tự động hóa và lập lịch tác vụ',
  W5_TH7: 'Tuần 5 – Thực hành 7: Cấu hình mạng và SSH',
  W5_TH8: 'Tuần 5 – Thực hành 8: Triển khai DNS và DHCP',
  W6_LT4: 'Tuần 6 – Lý thuyết 4: Nguyên lý và tổ chức dịch vụ mạng',
  W6_TH9: 'Tuần 6 – Thực hành 9: Chia sẻ tệp với NFS và Samba',
  W6_TH10: 'Tuần 6 – Thực hành 10: Kiểm tra thực hành giữa kỳ',
  W7_TH11: 'Tuần 7 – Thực hành 11: Triển khai Web và HTTPS',
  W7_TH12: 'Tuần 7 – Thực hành 12: Triển khai dịch vụ proxy',
  W8_LT5: 'Tuần 8 – Lý thuyết 5: Bảo vệ và vận hành máy chủ',
  W8_TH13: 'Tuần 8 – Thực hành 13: Tường lửa và bảo vệ truy cập',
  W8_TH14: 'Tuần 8 – Thực hành 14: Nhật ký và giám sát hệ thống',
  W9_TH15: 'Tuần 9 – Thực hành 15: Triển khai dịch vụ thư điện tử',
  W9_TH16: 'Tuần 9 – Thực hành 16: Triển khai dịch vụ bằng container',
  W10_TH17: 'Tuần 10 – Thực hành 17: Sao lưu và phục hồi hệ thống',
  W10_TH18: 'Tuần 10 – Thực hành 18: Thực hành tích hợp máy chủ',
  W11_TH19: 'Tuần 11 – Thực hành 19: Xử lý sự cố và cứu hộ',
  W11_TH20: 'Tuần 11 – Thực hành 20: Ôn tập và thực hành tổng hợp',
  // Supplementary, explicitly outside the syllabus (general Linux command deep-dive the
  // user asked for independent of course coverage). Kept as separate, clearly-labeled
  // buckets so they never get force-fit into a week that didn't actually teach them.
  EXTRA_1: 'Ngoài giáo trình: Lệnh hệ thống tổng quát (nhóm 1)',
  EXTRA_2: 'Ngoài giáo trình: Lệnh hệ thống tổng quát (nhóm 2)',
  EXTRA_3: 'Ngoài giáo trình: Quản trị gói & dịch vụ (đa hệ)',
  EXTRA_5: 'Ngoài giáo trình: Tiến trình, tín hiệu, tiện ích văn bản',
  EXTRA_6: 'Ngoài giáo trình: Mạng & gói tin nâng cao',
};

// Explicit display order for the picker UI (syllabus order first, extras last).
module.exports.ORDER = [
  'W1_LT1', 'W2_LT2', 'W2_TH1', 'W2_TH2', 'W3_TH3', 'W3_TH4',
  'W4_LT3', 'W4_TH5', 'W4_TH6', 'W5_TH7', 'W5_TH8',
  'W6_LT4', 'W6_TH9', 'W6_TH10',
  'W7_TH11', 'W7_TH12',
  'W8_LT5', 'W8_TH13', 'W8_TH14',
  'W9_TH15', 'W9_TH16',
  'W10_TH17', 'W10_TH18',
  'W11_TH19', 'W11_TH20',
  'EXTRA_1', 'EXTRA_2', 'EXTRA_3', 'EXTRA_5', 'EXTRA_6',
].map((k) => module.exports[k]);
