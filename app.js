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
    },
  };

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
        desc: s.netosDesc,
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
        id: 'reference',
        title: s.referenceTitle,
        desc: s.referenceDesc,
        isReference: true,
        getData: () => {
          const v = lang === 'en' ? 'REFERENCE_DATA_EN' : 'REFERENCE_DATA';
          return typeof window[v] !== 'undefined' ? window[v] : [];
        },
        setupHeading: s.referenceSetupHeading,
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
    selectCourse(prevCourseId);
  }

  els.langViBtn.addEventListener('click', () => setLang('vi'));
  els.langEnBtn.addEventListener('click', () => setLang('en'));

  // --- Section tabs (NetOS quiz / Reference) ---

  function renderSectionTabs() {
    let html = '';
    COURSES.forEach((course) => {
      const active = currentCourse && currentCourse.id === course.id ? ' active' : '';
      html += `<button type="button" class="tab-btn${active}" data-course="${course.id}">${escapeHtml(course.title)}</button>`;
    });
    els.sectionTabs.innerHTML = html;
    els.sectionTabs.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => selectCourse(btn.dataset.course));
    });
  }

  function selectCourse(courseId) {
    const course = COURSES.find((c) => c.id === courseId) || COURSES[0];
    if (!course) return;
    const raw = course.getData();
    currentCourse = course;
    renderSectionTabs();

    els.subtitle.textContent = `${course.title} - ${course.desc}`;
    els.setupHeading.textContent = course.setupHeading;
    els.results.classList.remove('show');
    els.topbar.classList.add('hidden');
    els.progressBar.classList.add('hidden');
    els.controls.classList.add('hidden');
    els.questions.innerHTML = '';
    els.referenceView.classList.add('hidden');

    if (!raw.length) {
      els.setup.classList.remove('hidden');
      els.setGrid.innerHTML = '';
      els.allSetsBtn.classList.add('hidden');
      alert(t('noDataAlert'));
      return;
    }

    if (course.isReference) {
      currentReferenceModules = raw;
      els.allSetsBtn.classList.add('hidden');
      els.setup.classList.remove('hidden');
      renderReferenceModulePicker();
      return;
    }

    els.allSetsBtn.classList.remove('hidden');
    currentPool = raw.map((q) => (q.type ? q : Object.assign({ type: 'mcq' }, q)));
    els.setup.classList.remove('hidden');
    renderSetPicker();
  }

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
        const label = btn.dataset.group;
        const pool = currentPool.filter((q) => currentCourse.groupsOf(q).includes(label));
        const picked = shuffle(pool).slice(0, Math.min(MAX_PER_TOPIC_PICK, pool.length));
        startQuiz(picked, label);
      });
    });
    els.allSetsBtn.onclick = () => {
      startQuiz(currentPool, `${t('allLabel')} (${currentPool.length} ${t('questionsCountSuffix')})`);
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
        const mod = currentReferenceModules[parseInt(btn.dataset.mod, 10)];
        renderReferenceModule(mod);
        els.setup.classList.add('hidden');
        els.referenceView.classList.remove('hidden');
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

  els.backToReferenceList.addEventListener('click', () => {
    els.referenceView.classList.add('hidden');
    els.setup.classList.remove('hidden');
  });

  // --- Quiz flow ---

  function startQuiz(pool, label) {
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
    els.results.classList.remove('show');
    els.setup.classList.remove('hidden');
    els.questions.innerHTML = '';
  });

  els.submitBtn.addEventListener('click', submitQuiz);

  function init() {
    applyStaticStrings();
    renderSectionTabs();
    selectCourse('netos');
  }

  init();
})();
