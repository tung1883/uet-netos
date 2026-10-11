// English translation of extract/weeks.js — same keys, same order, English label text.
// Used by generate-en.js to produce QUIZ_WEEKS_ORDER_NETOS_EN and per-question `week` tags.
module.exports = {
  W1_LT1: 'Week 1 – Lecture 1: Linux Overview and Administration Environment',
  W2_LT2: 'Week 2 – Lecture 2: System Resource Management',
  W2_TH1: 'Week 2 – Lab 1: Installing and Using Linux',
  W2_TH2: 'Week 2 – Lab 2: File Management and Text Processing',
  W3_TH3: 'Week 3 – Lab 3: Disk and Filesystem Management',
  W3_TH4: 'Week 3 – Lab 4: User, Process and Service Management',
  W4_LT3: 'Week 4 – Lecture 3: Administration Scripting and Network Service Foundations',
  W4_TH5: 'Week 4 – Lab 5: Basic Bash Scripting',
  W4_TH6: 'Week 4 – Lab 6: Automation and Task Scheduling',
  W5_TH7: 'Week 5 – Lab 7: Network Configuration and SSH',
  W5_TH8: 'Week 5 – Lab 8: Deploying DNS and DHCP',
  W6_LT4: 'Week 6 – Lecture 4: Principles and Organization of Network Services',
  W6_TH9: 'Week 6 – Lab 9: File Sharing with NFS and Samba',
  W6_TH10: 'Week 6 – Lab 10: Midterm Practical Test',
  W7_TH11: 'Week 7 – Lab 11: Deploying Web and HTTPS',
  W7_TH12: 'Week 7 – Lab 12: Deploying a Proxy Service',
  W8_LT5: 'Week 8 – Lecture 5: Server Protection and Operation',
  W8_TH13: 'Week 8 – Lab 13: Firewall and Access Protection',
  W8_TH14: 'Week 8 – Lab 14: System Logging and Monitoring',
  W9_TH15: 'Week 9 – Lab 15: Deploying an Email Service',
  W9_TH16: 'Week 9 – Lab 16: Deploying Services with Containers',
  W10_TH17: 'Week 10 – Lab 17: System Backup and Recovery',
  W10_TH18: 'Week 10 – Lab 18: Integrated Server Practice',
  W11_TH19: 'Week 11 – Lab 19: Troubleshooting and Rescue',
  W11_TH20: 'Week 11 – Lab 20: Review and Comprehensive Practice',
  // Supplementary, explicitly outside the syllabus (general Linux command deep-dive the
  // user asked for independent of course coverage). Kept as separate, clearly-labeled
  // buckets so they never get force-fit into a week that didn't actually teach them.
  EXTRA_1: 'Outside the syllabus: General system commands (group 1)',
  EXTRA_2: 'Outside the syllabus: General system commands (group 2)',
  EXTRA_3: 'Outside the syllabus: Package & service administration (cross-distro)',
  EXTRA_5: 'Outside the syllabus: Processes, signals, text utilities',
  EXTRA_6: 'Outside the syllabus: Advanced networking & packets',
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
