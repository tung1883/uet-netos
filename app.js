(function () {
  const TIMER_MINUTES = 45;
  const MAX_PER_TOPIC_PICK = 40;

  const STRINGS = {
    vi: {
      pageTitle: 'Hệ điều hành mạng UET',
      takeAll: 'Làm tất cả',
      submit: 'Nộp bài',
      chooseAnotherTopic: 'Chọn chủ đề khác',
      correct: 'Đúng',
      wrong: 'Sai',
      unanswered: 'Bỏ qua',
      unansweredNote: 'Bạn chưa trả lời câu này - tính là sai.',
      explanationLabel: 'Giải thích:',
      acceptedAnswerLabel: 'Đáp án chấp nhận:',
      mcqLabel: 'Trắc nghiệm',
      commandLabel: 'Viết lệnh',
      commandPlaceholder: 'Gõ lệnh Linux...',
      questionsSuffix: 'câu hỏi',
      questionsCountSuffix: 'câu',
      allLabel: 'Tất cả',
      noDataAlert: 'Chưa có dữ liệu cho bộ câu hỏi này. Hãy chạy script tạo dữ liệu trước.',
      netosTitle: 'Thực hành Hệ điều hành mạng (NetOS)',
      netosDesc: 'Theo tuần/buổi học trong giáo trình - trắc nghiệm + viết lệnh',
      netosSetupHeading: 'Chọn tuần / buổi học',
      referenceTitle: 'Tài liệu tham khảo',
      referenceDesc: 'Khái niệm, lệnh và hướng dẫn thực hiện theo từng tuần/chủ đề',
      referenceSetupHeading: 'Chọn tuần / chủ đề',
      referenceItemsSuffix: 'mục',
      backToReferenceList: '< Quay lại danh sách chủ đề',
      slidesTitle: 'Tài liệu bài giảng',
      slidesDesc: 'Bản gốc slide bài giảng/thực hành theo từng buổi + đề mẫu',
      slidesItemsSuffix: 'tài liệu',
      mylabsTitle: 'Bài làm Lab',
      mylabsDesc: 'Bài làm thực tế Lab3-8: đề bài, bài giải, lệnh đã dùng, script đã nộp',
      mylabsSetupHeading: 'Chọn lab',
      mylabsItemsSuffix: 'tài liệu',
    },
    en: {
      pageTitle: 'UET Network OS',
      takeAll: 'Take all',
      submit: 'Submit',
      chooseAnotherTopic: 'Choose another topic',
      correct: 'Correct',
      wrong: 'Wrong',
      unanswered: 'Unanswered',
      unansweredNote: "You didn't answer this question - counted as wrong.",
      explanationLabel: 'Explanation:',
      acceptedAnswerLabel: 'Accepted answer:',
      mcqLabel: 'Multiple choice',
      commandLabel: 'Write the command',
      commandPlaceholder: 'Type a Linux command...',
      questionsSuffix: 'questions',
      questionsCountSuffix: 'questions',
      allLabel: 'All',
      noDataAlert: 'No data for this question set yet. Run the data generation script first.',
      netosTitle: 'Network OS Practice (NetOS)',
      netosDesc: 'Organized by course week/lab - multiple choice + write-the-command',
      netosSetupHeading: 'Choose a week / session',
      referenceTitle: 'Reference',
      referenceDesc: 'Concepts, commands, and how-to guides, organized by week/topic',
      referenceSetupHeading: 'Choose a week / topic',
      referenceItemsSuffix: 'items',
      backToReferenceList: '< Back to topic list',
      slidesTitle: 'Lecture Slides',
      slidesDesc: 'Original lecture/lab slides per session + sample exams',
      slidesItemsSuffix: 'documents',
      mylabsTitle: 'My Lab Work',
      mylabsDesc: 'Real completed Lab3-8: assignment, write-up, commands used, submitted scripts',
      mylabsSetupHeading: 'Choose a lab',
      mylabsItemsSuffix: 'documents',
    },
  };

  const SLIDES = [
    { file: 'bai01-vm.htm', vi: 'Bài 1: Máy ảo & cài đặt Linux', en: 'Lesson 1: Virtual Machines & Linux Setup' },
    { file: 'bai02-command.htm', vi: 'Bài 2: Dòng lệnh cơ bản', en: 'Lesson 2: Basic Commands' },
    { file: 'bai03-Package-Management.htm', vi: 'Bài 3: Quản lý gói phần mềm', en: 'Lesson 3: Package Management' },
    { file: 'bai04-io-editor.htm', vi: 'Bài 4: I/O & trình soạn thảo', en: 'Lesson 4: I/O & Text Editors' },
    { file: 'bai05-Networking.htm', vi: 'Bài 5: Mạng (Networking)', en: 'Lesson 5: Networking' },
    { file: 'bai06-Domain-Name-Service.htm', vi: 'Bài 6: Dịch vụ tên miền (DNS)', en: 'Lesson 6: Domain Name Service (DNS)' },
    { file: 'bai07-Remote-Administration.htm', vi: 'Bài 7: Quản trị từ xa', en: 'Lesson 7: Remote Administration' },
    { file: 'bai08-User-Managament.htm', vi: 'Bài 8: Quản lý người dùng', en: 'Lesson 8: User Management' },
    { file: 'bai09-File-Permision.htm', vi: 'Bài 9: Quyền tệp', en: 'Lesson 9: File Permissions' },
    { file: 'bai10-Process.htm', vi: 'Bài 10: Tiến trình', en: 'Lesson 10: Processes' },
    { file: 'bai11-Partition-Quota.htm', vi: 'Bài 11: Phân vùng & Quota', en: 'Lesson 11: Partitions & Quota' },
    { file: 'bai13-Shell-Script.htm', vi: 'Bài 13: Shell Script', en: 'Lesson 13: Shell Scripting' },
    { file: 'bai14-SMB.htm', vi: 'Bài 14: SMB', en: 'Lesson 14: SMB' },
    { file: 'bai15-FileServers.htm', vi: 'Bài 15: File Servers', en: 'Lesson 15: File Servers' },
    { file: 'bai16-Security.htm', vi: 'Bài 16: An ninh hệ thống', en: 'Lesson 16: Security' },
    { file: 'bai17-NetworkAuthentication.htm', vi: 'Bài 17: Xác thực mạng', en: 'Lesson 17: Network Authentication' },
    { file: '2018s-int3301-1.htm', vi: 'Tài liệu môn học (2018)', en: 'Course Material (2018)' },
    { file: 'Kiem tra giua ky.html', vi: 'Đề kiểm tra giữa kỳ mẫu', en: 'Sample Midterm Test' },
    { file: 'finaltest2016f.html', vi: 'Đề thi cuối kỳ mẫu (2016)', en: 'Sample Final Exam (2016)' },
  ];

  const MY_LABS = [
    {
      dir: 'lab3',
      vi: 'Lab 3: Quản lý đĩa và hệ thống tệp',
      en: 'Lab 3: Disk & Filesystem Management',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab3.pdf' },
      ],
    },
    {
      dir: 'lab4',
      vi: 'Lab 4: Quản lý người dùng, tiến trình và dịch vụ',
      en: 'Lab 4: Users, Processes & Services',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab4.pdf' },
        { vi: 'Lệnh đã dùng', en: 'Commands used', path: 'commands.md' },
      ],
    },
    {
      dir: 'lab5',
      vi: 'Lab 5: Lập trình quản trị và nền tảng dịch vụ mạng',
      en: 'Lab 5: Admin Scripting & Network Services',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab5.pdf' },
        { vi: 'Lệnh đã dùng', en: 'Commands used', path: 'commands.md' },
        { vi: 'Script: network_check.sh', en: 'Script: network_check.sh', path: 'network_check.sh' },
      ],
    },
    {
      dir: 'lab6',
      vi: 'Lab 6: Lập trình Bash cơ bản',
      en: 'Lab 6: Basic Bash Scripting',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab6.pdf' },
        { vi: 'Lệnh đã dùng', en: 'Commands used', path: 'commands.md' },
        { vi: 'Script: file_manager.sh', en: 'Script: file_manager.sh', path: 'file_manager.sh' },
      ],
    },
    {
      dir: 'lab7',
      vi: 'Lab 7: Tự động hoá và lập lịch tác vụ',
      en: 'Lab 7: Automation & Task Scheduling',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab7.pdf' },
        { vi: 'Lệnh đã dùng', en: 'Commands used', path: 'commands.md' },
        { vi: 'Script: user_batch.sh', en: 'Script: user_batch.sh', path: 'user_batch.sh' },
        { vi: 'Dữ liệu: users.csv', en: 'Data: users.csv', path: 'users.csv' },
        { vi: 'systemd: lab-user-report.service', en: 'systemd: lab-user-report.service', path: 'lab-user-report.service' },
        { vi: 'systemd: lab-user-report.timer', en: 'systemd: lab-user-report.timer', path: 'lab-user-report.timer' },
      ],
    },
    {
      dir: 'lab8',
      vi: 'Lab 8: Cấu hình mạng và SSH',
      en: 'Lab 8: Network Configuration & SSH',
      files: [
        { vi: 'Đề bài', en: 'Assignment', path: 'assignment.md' },
        { vi: 'Bài làm (PDF)', en: 'Submission (PDF)', path: 'lab8.pdf' },
        { vi: 'Lệnh đã dùng', en: 'Commands used', path: 'commands.md' },
      ],
    },
  ];

  function loadLang() {
    try {
      const v = localStorage.getItem('quiz-lang');
      if (v === 'vi' || v === 'en') return v;
    } catch (e) {}
    return 'vi';
  }
  function saveLang(l) {
    try {
      localStorage.setItem('quiz-lang', l);
    } catch (e) {}
  }

  let lang = loadLang();
  function t(key) {
    return STRINGS[lang][key];
  }

  function getCourses() {
    const s = STRINGS[lang];
    return [
      {
        id: 'netos',
        title: s.netosTitle,
        tabLabel: 'NetOS',
        desc: s.netosDesc,
        row: 1,
        getData: () => {
          const v = lang === 'en' ? 'QUIZ_DATA_NETOS_EN' : 'QUIZ_DATA_NETOS';
          return typeof window[v] !== 'undefined' ? window[v] : [];
        },
        groupsOf: (q) => [q.week],
        groupOrder: () => {
          const v = lang === 'en' ? 'QUIZ_WEEKS_ORDER_NETOS_EN' : 'QUIZ_WEEKS_ORDER_NETOS';
          return typeof window[v] !== 'undefined' ? window[v] : [];
        },
        setupHeading: s.netosSetupHeading,
      },
      {
        id: 'mylabs',
        title: s.mylabsTitle,
        tabLabel: lang === 'en' ? 'Lab' : 'Lab',
        desc: s.mylabsDesc,
        row: 1,
        isLabs: true,
        getData: () => MY_LABS,
        setupHeading: s.mylabsSetupHeading,
      },
      {
        id: 'reference',
        title: s.referenceTitle,
        desc: s.referenceDesc,
        row: 2,
        isReference: true,
        getData: () => {
          const v = lang === 'en' ? 'REFERENCE_DATA_EN' : 'REFERENCE_DATA';
          return typeof window[v] !== 'undefined' ? window[v] : [];
        },
        setupHeading: s.referenceSetupHeading,
      },
      {
        id: 'slides',
        title: s.slidesTitle,
        desc: s.slidesDesc,
        row: 2,
        isSlides: true,
        getData: () => SLIDES,
      },
    ];
  }

  const els = {
    langViBtn: document.getElementById('langViBtn'),
    langEnBtn: document.getElementById('langEnBtn'),
    pageTitle: document.getElementById('pageTitle'),
    subtitle: document.getElementById('subtitle'),
    count: document.getElementById('count'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    questions: document.getElementById('questions'),
    controls: document.getElementById('controls'),
    submitBtn: document.getElementById('submitBtn'),
    results: document.getElementById('results'),
    scoreGood: document.getElementById('scoreGood'),
    scoreTotal: document.getElementById('scoreTotal'),
    statGood: document.getElementById('statGood'),
    statBad: document.getElementById('statBad'),
    statUnanswered: document.getElementById('statUnanswered'),
    statGoodLabel: document.getElementById('statGoodLabel'),
    statBadLabel: document.getElementById('statBadLabel'),
    statUnansweredLabel: document.getElementById('statUnansweredLabel'),
    restartBtn: document.getElementById('restartBtn'),
    topbar: document.getElementById('topbar'),
    sectionTabs: document.getElementById('sectionTabs'),
    setup: document.getElementById('setup'),
    setupHeading: document.getElementById('setupHeading'),
    setGrid: document.getElementById('setGrid'),
    allSetsBtn: document.getElementById('allSetsBtn'),
    referenceView: document.getElementById('referenceView'),
    referenceContent: document.getElementById('referenceContent'),
    backToReferenceList: document.getElementById('backToReferenceList'),
  };

  let COURSES = getCourses();
  let currentCourse = null;
  let currentPool = []; // normalized full dataset for the chosen course
  let currentReferenceModules = []; // raw REFERENCE_DATA(_EN) when course.isReference
  let currentLabsModules = []; // raw MY_LABS when course.isLabs
  let currentNavState = null; // mirrors history.state, drives applyNavState()
  let questions = [];
  let userAnswers = {};
  let submitted = false;
  let timerHandle = null;
  let secondsLeft = TIMER_MINUTES * 60;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function normalizeAnswer(s) {
    return (s || '').trim().replace(/\s+/g, ' ');
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/`/g, '&#96;');
  }
  function renderInlineCode(s) {
    const parts = (s || '').split('`');
    let out = '';
    parts.forEach((part, i) => {
      out += i % 2 === 1 ? `<code>${escapeHtml(part)}</code>` : escapeHtml(part);
    });
    return out;
  }

  // --- Language toggle ---

  function applyStaticStrings() {
    document.title = t('pageTitle');
    els.pageTitle.textContent = t('pageTitle');
    els.allSetsBtn.textContent = t('takeAll');
    els.submitBtn.textContent = t('submit');
    els.restartBtn.textContent = t('chooseAnotherTopic');
    els.statGoodLabel.textContent = t('correct');
    els.statBadLabel.textContent = t('wrong');
    els.statUnansweredLabel.textContent = t('unanswered');
    els.backToReferenceList.textContent = t('backToReferenceList');
    els.langViBtn.classList.toggle('active', lang === 'vi');
    els.langEnBtn.classList.toggle('active', lang === 'en');
  }

  function setLang(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    saveLang(lang);
    const prevCourseId = currentCourse ? currentCourse.id : 'netos';
    COURSES = getCourses();
    currentCourse = null;
    currentPool = [];
    questions = [];
    submitted = false;
    if (timerHandle) clearInterval(timerHandle);

    applyStaticStrings();
    els.referenceView.classList.add('hidden');
    els.topbar.classList.add('hidden');
    els.progressBar.classList.add('hidden');
    els.controls.classList.add('hidden');
    els.results.classList.remove('show');
    els.questions.innerHTML = '';
    renderSectionTabs();
    // Switching language re-renders the current course's list view in place;
    // don't grow the back-history stack for what's really the same screen.
    navReplace({ course: prevCourseId, view: 'list' });
  }

  els.langViBtn.addEventListener('click', () => setLang('vi'));
  els.langEnBtn.addEventListener('click', () => setLang('en'));

  // --- Section tabs (NetOS quiz / Reference) ---

  function renderSectionTabs() {
    const rows = {};
    COURSES.forEach((course) => {
      const r = course.row || 1;
      (rows[r] = rows[r] || []).push(course);
    });
    const html = Object.keys(rows)
      .sort((a, b) => a - b)
      .map((r) => {
        const btns = rows[r]
          .map((course) => {
            const active = currentCourse && currentCourse.id === course.id ? ' active' : '';
            const label = course.tabLabel || course.title;
            return `<button type="button" class="tab-btn${active}" data-course="${course.id}">${escapeHtml(label)}</button>`;
          })
          .join('');
        return `<div class="section-tabs-row">${btns}</div>`;
      })
      .join('');
    els.sectionTabs.innerHTML = html;
    els.sectionTabs.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => navPush({ course: btn.dataset.course, view: 'list' }));
    });
  }

  // --- History / routing ---
  // Every screen change goes through navPush/navReplace so Back/Forward moves
  // between in-app screens instead of leaving the site on the first press.

  function navPush(state) {
    currentNavState = state;
    history.pushState(state, '', location.href);
    applyNavState(state);
  }

  function navReplace(state, opts) {
    currentNavState = state;
    history.replaceState(state, '', location.href);
    if (!opts || !opts.silent) applyNavState(state);
  }

  function applyNavState(state) {
    const course = COURSES.find((c) => c.id === state.course) || COURSES[0];
    currentCourse = course;
    renderSectionTabs();
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
    }

    const raw = course.getData();
    els.results.classList.remove('show');
    els.topbar.classList.add('hidden');
    els.progressBar.classList.add('hidden');
    els.controls.classList.add('hidden');
    els.questions.innerHTML = '';
    els.referenceView.classList.add('hidden');
    els.setup.classList.add('hidden');
    els.subtitle.textContent = `${course.title} - ${course.desc}`;
    document.querySelector('.wrap').classList.remove('wide');

    if (!raw.length) {
      els.setup.classList.remove('hidden');
      els.setGrid.innerHTML = '';
      els.allSetsBtn.classList.add('hidden');
      alert(t('noDataAlert'));
      return;
    }

    if (course.isSlides) {
      els.referenceView.classList.remove('hidden');
      els.backToReferenceList.classList.add('hidden');
      renderSlidesList(raw);
      return;
    }

    if (course.isReference) {
      currentReferenceModules = raw;
      els.setupHeading.textContent = course.setupHeading;
      if (state.view === 'module' && state.group !== undefined) {
        const mod = currentReferenceModules[parseInt(state.group, 10)];
        if (mod) {
          els.referenceView.classList.remove('hidden');
          els.backToReferenceList.classList.remove('hidden');
          renderReferenceModule(mod);
          return;
        }
      }
      els.allSetsBtn.classList.add('hidden');
      els.setup.classList.remove('hidden');
      renderReferenceModulePicker();
      return;
    }

    if (course.isLabs) {
      currentLabsModules = raw;
      els.setupHeading.textContent = course.setupHeading;
      if (state.view === 'module' && state.group !== undefined) {
        const mod = currentLabsModules[parseInt(state.group, 10)];
        if (mod) {
          els.referenceView.classList.remove('hidden');
          els.backToReferenceList.classList.remove('hidden');
          renderLabsModule(mod);
          return;
        }
      }
      els.allSetsBtn.classList.add('hidden');
      els.setup.classList.remove('hidden');
      renderLabsModulePicker();
      return;
    }

    // netos quiz course
    els.setupHeading.textContent = course.setupHeading;
    currentPool = raw.map((q) => (q.type ? q : Object.assign({ type: 'mcq' }, q)));

    if (state.view === 'quiz' && state.group !== undefined) {
      const pool =
        state.group === '__all__'
          ? currentPool
          : currentPool.filter((q) => currentCourse.groupsOf(q).includes(state.group));
      const picked = shuffle(pool).slice(0, Math.min(MAX_PER_TOPIC_PICK, pool.length));
      const label =
        state.group === '__all__'
          ? `${t('allLabel')} (${currentPool.length} ${t('questionsCountSuffix')})`
          : state.group;
      runQuiz(picked, label);
      return;
    }

    els.allSetsBtn.classList.remove('hidden');
    els.setup.classList.remove('hidden');
    renderSetPicker();
  }

  window.addEventListener('popstate', (e) => {
    const state = e.state || { course: 'netos', view: 'list' };
    currentNavState = state;
    applyNavState(state);
  });

  function groupCounts() {
    const map = new Map();
    for (const q of currentPool) {
      for (const g of currentCourse.groupsOf(q)) {
        map.set(g, (map.get(g) || 0) + 1);
      }
    }
    const orderList = currentCourse.groupOrder ? currentCourse.groupOrder() : null;
    const entries = [...map.entries()];
    entries.sort((a, b) => {
      if (orderList && orderList.length) {
        const ia = orderList.indexOf(a[0]);
        const ib = orderList.indexOf(b[0]);
        if (ia === -1 && ib === -1) return a[0].localeCompare(b[0]);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      }
      const na = parseInt((a[0].match(/\d+/) || [0])[0], 10);
      const nb = parseInt((b[0].match(/\d+/) || [0])[0], 10);
      return na - nb;
    });
    return entries;
  }

  function renderSetPicker() {
    const groups = groupCounts();
    let html = '';
    groups.forEach(([label, count]) => {
      html += `<div class="set-btn" data-group="${escapeAttr(label)}"><span>${escapeHtml(label)}</span><span class="c">${count} ${t('questionsCountSuffix')}</span></div>`;
    });
    els.setGrid.innerHTML = html;
    els.setGrid.querySelectorAll('.set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        navPush({ course: currentCourse.id, view: 'quiz', group: btn.dataset.group });
      });
    });
    els.allSetsBtn.onclick = () => {
      navPush({ course: currentCourse.id, view: 'quiz', group: '__all__' });
    };
  }

  // --- Reference section (read-only concepts/commands/how-tos) ---

  function renderReferenceModulePicker() {
    let html = '';
    currentReferenceModules.forEach((mod, mi) => {
      const count = mod.sections.reduce((sum, sec) => sum + sec.items.length, 0);
      html += `<div class="set-btn" data-mod="${mi}"><span>${escapeHtml(mod.module)}</span><span class="c">${count} ${t('referenceItemsSuffix')}</span></div>`;
    });
    els.setGrid.innerHTML = html;
    els.setGrid.querySelectorAll('.set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        navPush({ course: currentCourse.id, view: 'module', group: btn.dataset.mod });
      });
    });
  }

  function renderReferenceItem(item) {
    if (item.type === 'concept') {
      return `<div class="ref-item">
        <div class="ref-title">${renderInlineCode(item.title)}</div>
        <div class="ref-body">${renderInlineCode(item.body)}</div>
      </div>`;
    }
    if (item.type === 'command') {
      const flags = (item.flags || [])
        .map((f) => `<li><code>${escapeHtml(f.flag)}</code> - ${escapeHtml(f.meaning)}</li>`)
        .join('');
      const examples = (item.examples || []).map((e) => `<code>${escapeHtml(e)}</code>`).join('');
      return `<div class="ref-item">
        <div class="ref-title"><code>${escapeHtml(item.name)}</code></div>
        <div class="ref-body">${escapeHtml(item.purpose)}</div>
        ${flags ? `<ul class="ref-flags">${flags}</ul>` : ''}
        ${examples ? `<div class="ref-examples">${examples}</div>` : ''}
      </div>`;
    }
    // howto
    const steps = (item.steps || [])
      .map(
        (s) => `<li><div class="ref-step-text">${escapeHtml(s.text)}</div><code>${escapeHtml(s.command)}</code></li>`
      )
      .join('');
    return `<div class="ref-item">
      <div class="ref-title">${escapeHtml(item.title)}</div>
      <ol class="ref-steps">${steps}</ol>
    </div>`;
  }

  function renderReferenceModule(mod) {
    const sections = mod.sections
      .map(
        (sec) => `<div class="ref-section">
          <h3>${escapeHtml(sec.heading)}</h3>
          ${sec.items.map(renderReferenceItem).join('')}
        </div>`
      )
      .join('');
    els.referenceContent.innerHTML = `<div class="ref-module">
      <h2>${escapeHtml(mod.module)}</h2>
      ${sections}
    </div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderSlidesList(slides) {
    const items = slides
      .map(
        (s) => `<li class="slide-item">
          <a href="lecture-slides/${encodeURIComponent(s.file)}" target="_blank" rel="noopener">${escapeHtml(lang === 'en' ? s.en : s.vi)}</a>
        </li>`
      )
      .join('');
    els.referenceContent.innerHTML = `<div class="ref-module">
      <ul class="slide-list">${items}</ul>
    </div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- My Labs section (real completed lab submissions) ---

  function renderLabsModulePicker() {
    let html = '';
    currentLabsModules.forEach((mod, mi) => {
      const count = mod.files.length;
      html += `<div class="set-btn" data-mod="${mi}"><span>${escapeHtml(lang === 'en' ? mod.en : mod.vi)}</span><span class="c">${count} ${t('mylabsItemsSuffix')}</span></div>`;
    });
    els.setGrid.innerHTML = html;
    els.setGrid.querySelectorAll('.set-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        navPush({ course: currentCourse.id, view: 'module', group: btn.dataset.mod });
      });
    });
  }

  const EYE_OPEN_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  const EYE_CLOSED_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-7-11-7a21.3 21.3 0 0 1 5.17-6.17M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 7 11 7a21.3 21.3 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';

  function mdInline(s, labDir) {
    let out = escapeHtml(s);
    out = out.replace(/`([^`]+)`/g, (m, c) => `<code>${c}</code>`);
    out = out.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    return out;
  }

  function renderMarkdownLite(md) {
    const lines = md.replace(/\r\n/g, '\n').split('\n');
    let html = '';
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^```/.test(line)) {
        const code = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) {
          code.push(lines[i]);
          i++;
        }
        i++;
        html += `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;
        continue;
      }
      if (/^#{1,3}\s+/.test(line)) {
        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+\s+/, '');
        html += `<h${level}>${mdInline(text)}</h${level}>`;
        i++;
        continue;
      }
      if (/^\s*-\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*-\s+/, ''));
          i++;
        }
        html += `<ul>${items.map((it) => `<li>${mdInline(it)}</li>`).join('')}</ul>`;
        continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
          i++;
        }
        html += `<ol>${items.map((it) => `<li>${mdInline(it)}</li>`).join('')}</ol>`;
        continue;
      }
      if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
        const splitRow = (l) =>
          l
            .split('|')
            .map((c) => c.trim())
            .filter((c, idx, arr) => !(idx === 0 && c === '') && !(idx === arr.length - 1 && c === ''));
        const headerCells = splitRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
          rows.push(splitRow(lines[i]));
          i++;
        }
        html += `<table><thead><tr>${headerCells
          .map((c) => `<th>${mdInline(c)}</th>`)
          .join('')}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${mdInline(c)}</td>`).join('')}</tr>`)
          .join('')}</tbody></table>`;
        continue;
      }
      if (line.trim() === '') {
        i++;
        continue;
      }
      const para = [line];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() !== '' &&
        !/^#{1,3}\s+/.test(lines[i]) &&
        !/^\s*-\s+/.test(lines[i]) &&
        !/^\s*\d+\.\s+/.test(lines[i]) &&
        !/^```/.test(lines[i]) &&
        !/^\s*\|.*\|\s*$/.test(lines[i])
      ) {
        para.push(lines[i]);
        i++;
      }
      html += `<p>${mdInline(para.join(' '))}</p>`;
    }
    return html;
  }

  function renderLabsModule(mod) {
    const findFile = (pred) => mod.files.find(pred);
    const assignmentFile = findFile((f) => f.path === 'assignment.md');
    const submissionFile = findFile((f) => /\.pdf$/i.test(f.path));
    const otherFiles = mod.files.filter((f) => f !== assignmentFile && f !== submissionFile);

    const otherList = otherFiles
      .map((f) => {
        const href = `my-labs/${encodeURIComponent(mod.dir)}/${encodeURIComponent(f.path)}`;
        return `<li class="slide-item"><a href="${href}" target="_blank" rel="noopener">${escapeHtml(lang === 'en' ? f.en : f.vi)}</a></li>`;
      })
      .join('');

    els.referenceContent.innerHTML = `<div class="ref-module">
      <h2>${escapeHtml(lang === 'en' ? mod.en : mod.vi)}</h2>
      <div class="lab-grid">
        <div class="lab-pane">
          <div class="lab-pane-head"><h3>${escapeHtml(lang === 'en' ? 'Assignment' : 'Đề bài')}</h3></div>
          <div class="lab-md" id="labAssignmentBody">${escapeHtml(lang === 'en' ? 'Loading...' : 'Đang tải...')}</div>
        </div>
        <div class="lab-pane">
          <div class="lab-pane-head">
            <h3>${escapeHtml(lang === 'en' ? 'Submission' : 'Bài làm')}</h3>
            <button type="button" class="lab-toggle-btn" id="labToggleBtn">${EYE_CLOSED_SVG}<span id="labToggleLabel">${escapeHtml(
      lang === 'en' ? 'Show' : 'Hiện'
    )}</span></button>
          </div>
          <div class="lab-pane-body hidden-content" id="labSubmissionBody">
            ${submissionFile ? '' : `<div class="lab-pane-placeholder">${escapeHtml(lang === 'en' ? 'No submission file' : 'Không có file bài làm')}</div>`}
          </div>
        </div>
      </div>
      ${otherList ? `<div class="lab-other-files"><ul class="slide-list">${otherList}</ul></div>` : ''}
    </div>`;

    document.querySelector('.wrap').classList.add('wide');

    if (assignmentFile) {
      const url = `my-labs/${encodeURIComponent(mod.dir)}/${encodeURIComponent(assignmentFile.path)}`;
      fetch(url)
        .then((r) => (r.ok ? r.text() : Promise.reject(new Error('fetch failed'))))
        .then((text) => {
          const el = document.getElementById('labAssignmentBody');
          if (el) el.innerHTML = renderMarkdownLite(text);
        })
        .catch(() => {
          const el = document.getElementById('labAssignmentBody');
          if (el) el.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${escapeHtml(url)}</a>`;
        });
    }

    if (submissionFile) {
      const toggleBtn = document.getElementById('labToggleBtn');
      const body = document.getElementById('labSubmissionBody');
      const label = document.getElementById('labToggleLabel');
      let loaded = false;
      let revealed = false;
      toggleBtn.addEventListener('click', () => {
        revealed = !revealed;
        body.classList.toggle('hidden-content', !revealed);
        toggleBtn.innerHTML = (revealed ? EYE_OPEN_SVG : EYE_CLOSED_SVG) + `<span>${escapeHtml(
          revealed ? (lang === 'en' ? 'Hide' : 'Ẩn') : (lang === 'en' ? 'Show' : 'Hiện')
        )}</span>`;
        if (revealed && !loaded) {
          loaded = true;
          const url = `my-labs/${encodeURIComponent(mod.dir)}/${encodeURIComponent(submissionFile.path)}`;
          body.innerHTML = `<iframe class="lab-pdf-frame" src="${url}"></iframe>`;
        }
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  els.backToReferenceList.addEventListener('click', () => {
    navPush({ course: currentCourse.id, view: 'list' });
  });

  // --- Quiz flow ---

  function runQuiz(pool, label) {
    questions = shuffle(pool);
    userAnswers = {};
    submitted = false;
    secondsLeft = TIMER_MINUTES * 60;

    els.setup.classList.add('hidden');
    els.topbar.classList.remove('hidden');
    els.progressBar.classList.remove('hidden');
    els.controls.classList.remove('hidden');
    els.submitBtn.classList.remove('hidden');
    els.submitBtn.disabled = false;
    els.results.classList.remove('show');

    els.subtitle.textContent = `${label} - ${questions.length} ${t('questionsSuffix')}`;
    render();
    startTimer();
    updateCount();
  }

  function render() {
    els.questions.innerHTML = questions
      .map((q, qi) => {
        const typeLabel = q.type === 'command' ? t('commandLabel') : t('mcqLabel');
        let body;
        if (q.type === 'mcq') {
          body = `<ul class="opt-list">${q.options
            .map(
              (opt, oi) => `
            <li>
            <label class="opt" data-qi="${qi}" data-oi="${oi}">
              <input type="radio" name="q${qi}" value="${oi}">
              ${String.fromCharCode(65 + oi)}. ${renderInlineCode(opt)}
            </label>
            </li>`
            )
            .join('')}</ul>`;
        } else {
          body = `<input type="text" class="cmd-input" id="cmd-${qi}" data-qi="${qi}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${escapeAttr(t('commandPlaceholder'))}">
            <div class="cmd-answer-reveal" id="cmd-reveal-${qi}"></div>`;
        }
        return `
        <div class="question" id="q-${qi}" data-qi="${qi}" data-type="${q.type}">
          <div class="qheader"><span class="qn">${qi + 1}.</span><span class="qtype">${typeLabel}</span><span class="qtext">${renderInlineCode(q.text)}</span></div>
          ${body}
          <div class="unanswered-note">${escapeHtml(t('unansweredNote'))}</div>
          <div class="explanation" id="exp-${qi}"><b>${escapeHtml(t('explanationLabel'))}</b> ${renderInlineCode(q.explanation || '')}</div>
        </div>`;
      })
      .join('');

    els.questions.addEventListener('change', onMcqChange);
    els.questions.addEventListener('input', onCmdInput);
  }

  function onMcqChange(e) {
    if (submitted) return;
    const input = e.target;
    if (input.type !== 'radio') return;
    const qi = parseInt(input.closest('.question').dataset.qi, 10);
    const oi = parseInt(input.value, 10);
    userAnswers[qi] = oi;

    const qDiv = document.getElementById(`q-${qi}`);
    qDiv.querySelectorAll('.opt').forEach((o) => o.classList.remove('selected'));
    qDiv.querySelector(`.opt[data-oi="${oi}"]`).classList.add('selected');
    updateCount();
  }

  function onCmdInput(e) {
    if (submitted) return;
    const input = e.target;
    if (!input.classList.contains('cmd-input')) return;
    const qi = parseInt(input.dataset.qi, 10);
    const val = input.value;
    if (normalizeAnswer(val) === '') {
      delete userAnswers[qi];
    } else {
      userAnswers[qi] = val;
    }
    updateCount();
  }

  function updateCount() {
    els.count.textContent = `${Object.keys(userAnswers).length} / ${questions.length}`;
    els.progressFill.style.width = `${(Object.keys(userAnswers).length / questions.length) * 100}%`;
  }

  function startTimer() {
    if (timerHandle) clearInterval(timerHandle);
    updateTimerDisplay();
    timerHandle = setInterval(() => {
      secondsLeft--;
      updateTimerDisplay();
      if (secondsLeft <= 0) {
        clearInterval(timerHandle);
        submitQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    els.timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    els.timer.classList.toggle('warn', secondsLeft <= 300);
  }

  function isCommandCorrect(q, userVal) {
    if (userVal === undefined) return false;
    const norm = normalizeAnswer(userVal);
    return q.acceptedAnswers.some((a) => normalizeAnswer(a) === norm);
  }

  function submitQuiz() {
    if (submitted) return;
    submitted = true;
    clearInterval(timerHandle);
    els.submitBtn.disabled = true;

    let good = 0, bad = 0, unanswered = 0;

    questions.forEach((q, qi) => {
      const qDiv = document.getElementById(`q-${qi}`);
      const userVal = userAnswers[qi];
      const hasAnswer = userVal !== undefined;
      let isCorrect = false;

      if (q.type === 'mcq') {
        qDiv.querySelectorAll('.opt').forEach((optEl) => {
          optEl.classList.add('disabled');
          optEl.querySelector('input').disabled = true;
          const oi = parseInt(optEl.dataset.oi, 10);
          if (oi === q.correctIndex) {
            optEl.classList.add('correct');
          } else if (hasAnswer && oi === userVal) {
            optEl.classList.add('wrong');
          }
        });
        isCorrect = hasAnswer && userVal === q.correctIndex;
      } else {
        const input = document.getElementById(`cmd-${qi}`);
        input.disabled = true;
        isCorrect = isCommandCorrect(q, userVal);
        input.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          const reveal = document.getElementById(`cmd-reveal-${qi}`);
          reveal.textContent = `${t('acceptedAnswerLabel')} ${q.acceptedAnswers[0]}`;
          reveal.classList.add('show');
        }
      }

      if (!hasAnswer) {
        qDiv.classList.add('flag-unanswered');
        unanswered++;
      } else if (isCorrect) {
        good++;
      } else {
        bad++;
      }

      document.getElementById(`exp-${qi}`).classList.add('show');
    });

    showResults(good, bad, unanswered);
    // Results stay on screen, but Back from here should land on the topic
    // list (re-entering a finished/mid-abandoned quiz view makes no sense).
    navReplace({ course: currentCourse.id, view: 'list' }, { silent: true });
  }

  function showResults(good, bad, unanswered) {
    els.scoreGood.textContent = good;
    els.scoreGood.className = good >= questions.length / 2 ? 'good' : 'bad';
    els.scoreTotal.textContent = questions.length;
    els.statGood.textContent = good;
    els.statBad.textContent = bad;
    els.statUnanswered.textContent = unanswered;
    els.results.classList.add('show');
    els.controls.classList.add('hidden');
    els.topbar.classList.add('hidden');
    els.progressBar.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  els.restartBtn.addEventListener('click', () => {
    navPush({ course: currentCourse.id, view: 'list' });
  });

  els.submitBtn.addEventListener('click', submitQuiz);

  function init() {
    applyStaticStrings();
    const initial = { course: 'netos', view: 'list' };
    currentNavState = initial;
    history.replaceState(initial, '', location.href);
    applyNavState(initial);
  }

  init();
})();
