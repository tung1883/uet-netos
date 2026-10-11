// Templates the full NetOS question bank from extract/commands/*.js and extract/theory/*.js
// Dependency-free (plain Node). Run: node generate.js
//
// Primary organization is the course syllabus's own week/lab structure (see extract/weeks.js,
// values pulled verbatim from the portal course 6560 syllabus). Every command module and every
// theory item carries a `week` tag — either the module/file default, or a per-entry override
// when a command/fact is more accurately placed in a different week than the rest of its file
// (e.g. journalctl taught alongside systemd in week 3 but drilled again in week 8 monitoring —
// tagged to week 8, where the syllabus actually assigns log/monitoring practice).
const fs = require('fs');
const path = require('path');
const WEEKS = require('./extract-en/weeks');

const CMD_DIR = path.join(__dirname, 'extract-en', 'commands');
const THEORY_DIR = path.join(__dirname, 'extract-en', 'theory');
const OUT_FILE = path.join(__dirname, 'data', 'netos.en.js');

function normalize(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?'"()]/g, '')
    .trim();
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickN(pool, n, excludeValues) {
  const filtered = pool.filter((v) => !excludeValues.includes(v));
  const uniq = [...new Set(filtered)];
  return shuffle(uniq).slice(0, n);
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  if (!s) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
}

// ---- Load data ----
const cmdModules = fs
  .readdirSync(CMD_DIR)
  .filter((f) => f.endsWith('.js'))
  .map((f) => require(path.join(CMD_DIR, f)));

const theoryFiles = fs.readdirSync(THEORY_DIR).filter((f) => f.endsWith('.js'));
const theoryDefaultWeek = {
  '01-linux-basics.js': WEEKS.W1_LT1,
  '02-filesystem-permission.js': WEEKS.W2_LT2,
  '03-storage-process.js': WEEKS.W2_LT2,
  '04-networking-dns.js': WEEKS.W4_LT3,
  '05-security-services.js': WEEKS.W8_LT5,
  '06-mixed-review.js': WEEKS.W11_TH20,
};

const questions = [];
const seen = new Set();

function addQuestion(q) {
  const key = q.type + '|' + normalize(q.text);
  if (seen.has(key)) return false;
  seen.add(key);
  questions.push(q);
  return true;
}

// ================= COMMAND-DERIVED QUESTIONS =================
for (const mod of cmdModules) {
  const { category, week: moduleWeek, commands } = mod;

  const categoryDescPool = commands.map((c) => c.description);
  const categoryNamePool = commands.map((c) => c.name);
  const categoryFlagPool = [];
  commands.forEach((c) => (c.flags || []).forEach((f) => categoryFlagPool.push(f)));
  // Flat pool of every {task, answer} across the whole category, used as a distractor
  // fallback so a command with only 1-2 scenarios of its own can still get a full
  // 4-option MCQ by borrowing plausible wrong answers from sibling commands in the
  // same topic area (still genuine real commands/tasks, never manufactured text).
  const categoryScenarioPool = [];
  commands.forEach((c) => (c.scenarios || []).forEach((s) => categoryScenarioPool.push({ task: s.task, answer: s.accepted[0] })));

  for (const cmd of commands) {
    const week = cmd.week || moduleWeek;

    // --- Concept MCQ: "Lệnh X dùng để làm gì?"
    {
      const distractorDescs = pickN(categoryDescPool, 3, [cmd.description]);
      if (distractorDescs.length >= 2) {
        const options = shuffle([cmd.description, ...distractorDescs]).map(capitalize);
        const correctIndex = options.indexOf(capitalize(cmd.description));
        addQuestion({
          type: 'mcq',
          text: `What does the \`${cmd.name}\` command do in Linux?`,
          options,
          correctIndex,
          explanation: `The job of the ${cmd.name} command is to ${cmd.description}.`,
          week,
        });
      }
    }
    // --- Reverse concept MCQ: "Để <mô tả>, dùng lệnh nào?"
    {
      const distractorNames = pickN(categoryNamePool, 3, [cmd.name]);
      if (distractorNames.length >= 2) {
        const options = shuffle([cmd.name, ...distractorNames]);
        const correctIndex = options.indexOf(cmd.name);
        addQuestion({
          type: 'mcq',
          text: `Which command do you use to ${cmd.description}?`,
          options,
          correctIndex,
          explanation: `The job of the ${cmd.name} command is to ${cmd.description}.`,
          week,
        });
      }
    }

    // --- Flag questions
    const flags = cmd.flags || [];
    for (const f of flags) {
      const otherFlagsSameCmd = flags.filter((x) => x !== f);
      const localMeaningPool = otherFlagsSameCmd.map((x) => x.meaning);
      const localFlagPool = otherFlagsSameCmd.map((x) => x.flag);
      const globalMeaningPool = categoryFlagPool.filter((x) => x.meaning !== f.meaning).map((x) => x.meaning);
      const globalFlagPool = categoryFlagPool.filter((x) => x.flag !== f.flag || x.meaning !== f.meaning).map((x) => x.flag);

      // meaning-of-flag MCQ
      {
        let distractors = pickN(localMeaningPool, 3, [f.meaning]);
        if (distractors.length < 3) {
          const need = 3 - distractors.length;
          const extra = pickN(globalMeaningPool, need, [f.meaning, ...distractors]);
          distractors = distractors.concat(extra);
        }
        if (distractors.length >= 2) {
          const options = shuffle([f.meaning, ...distractors]).map(capitalize);
          const correctIndex = options.indexOf(capitalize(f.meaning));
          addQuestion({
            type: 'mcq',
            text: `In the \`${cmd.name}\` command, what does the \`${f.flag}\` option do?`,
            options,
            correctIndex,
            explanation: `\`${cmd.name} ${f.flag}\`: ${f.meaning}.`,
            week,
          });
        }
      }
      // which-flag-does-X MCQ
      {
        let distractors = pickN(localFlagPool, 3, [f.flag]);
        if (distractors.length < 3) {
          const need = 3 - distractors.length;
          const extra = pickN(globalFlagPool, need, [f.flag, ...distractors]);
          distractors = distractors.concat(extra);
        }
        if (distractors.length >= 2) {
          const options = shuffle([f.flag, ...distractors]);
          const correctIndex = options.indexOf(f.flag);
          addQuestion({
            type: 'mcq',
            text: `Which option of the \`${cmd.name}\` command do you use to ${f.meaning}?`,
            options,
            correctIndex,
            explanation: `\`${cmd.name} ${f.flag}\`: ${f.meaning}.`,
            week,
          });
        }
      }
      // full-command fill-in (only when the flag is a concrete literal, no <placeholder>)
      if (!/[<>]/.test(f.flag)) {
        addQuestion({
          type: 'command',
          text: `Write the full command (command name and option) to ${f.meaning}, using the ${cmd.name} command.`,
          acceptedAnswers: [`${cmd.name} ${f.flag}`],
          explanation: `\`${cmd.name} ${f.flag}\`: ${f.meaning}.`,
          week,
        });
      }
    }

    // --- Scenario questions
    const scenarios = cmd.scenarios || [];
    for (const s of scenarios) {
      addQuestion({
        type: 'command',
        text: `Write the command to ${decapitalize(s.task)}`,
        acceptedAnswers: s.accepted,
        explanation: `Example: \`${s.accepted[0]}\``,
        week,
      });

      // "which command is correct" MCQ — prefer distractors from this command's own
      // other scenarios (harder/more plausible), pad from the category-wide pool so
      // commands with few scenarios of their own still get a full 4-option MCQ.
      const otherScenarioAnswers = scenarios.filter((x) => x !== s).map((x) => x.accepted[0]);
      let answerDistractors = pickN(otherScenarioAnswers, 3, [s.accepted[0]]);
      if (answerDistractors.length < 3) {
        const poolAnswers = categoryScenarioPool.map((x) => x.answer);
        const need = 3 - answerDistractors.length;
        const extra = pickN(poolAnswers, need, [s.accepted[0], ...answerDistractors]);
        answerDistractors = answerDistractors.concat(extra);
      }
      if (answerDistractors.length >= 2) {
        const options = shuffle([s.accepted[0], ...answerDistractors]);
        const correctIndex = options.indexOf(s.accepted[0]);
        addQuestion({
          type: 'mcq',
          text: `Which of the following commands correctly performs: "${s.task}"?`,
          options,
          correctIndex,
          explanation: `The correct command: \`${s.accepted[0]}\`.`,
          week,
        });
      }

      // reverse comprehension MCQ: given the command, what does it do?
      const otherScenarioTasks = scenarios.filter((x) => x !== s).map((x) => x.task);
      let taskDistractors = pickN(otherScenarioTasks, 3, [s.task]);
      if (taskDistractors.length < 3) {
        const poolTasks = categoryScenarioPool.map((x) => x.task);
        const need = 3 - taskDistractors.length;
        const extra = pickN(poolTasks, need, [s.task, ...taskDistractors]);
        taskDistractors = taskDistractors.concat(extra);
      }
      if (taskDistractors.length >= 2) {
        const options2 = shuffle([s.task, ...taskDistractors]).map(capitalize);
        const correctIndex2 = options2.indexOf(capitalize(s.task));
        addQuestion({
          type: 'mcq',
          text: `What does the \`${s.accepted[0]}\` command do?`,
          options: options2,
          correctIndex: correctIndex2,
          explanation: `\`${s.accepted[0]}\`: ${s.task}.`,
          week,
        });
      }
    }
  }
}

// ================= THEORY QUESTIONS (pre-authored) =================
for (const file of theoryFiles) {
  const defaultWeek = theoryDefaultWeek[file] || WEEKS.W11_TH20;
  const items = require(path.join(THEORY_DIR, file));
  for (const item of items) {
    addQuestion({
      type: 'mcq',
      text: item.text,
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
      week: item.week || defaultWeek,
    });
  }
}

// ================= OUTPUT =================
const mcqCount = questions.filter((q) => q.type === 'mcq').length;
const cmdCount = questions.filter((q) => q.type === 'command').length;

console.log(`Total questions: ${questions.length}`);
console.log(`  mcq: ${mcqCount}`);
console.log(`  command: ${cmdCount}`);

const byWeek = {};
for (const q of questions) byWeek[q.week] = (byWeek[q.week] || 0) + 1;
console.log('\nBy week/module (syllabus order):');
for (const label of WEEKS.ORDER) {
  console.log(`  ${label}: ${byWeek[label] || 0}`);
}
const unknownWeeks = Object.keys(byWeek).filter((w) => !WEEKS.ORDER.includes(w));
if (unknownWeeks.length) {
  console.log('\nWARNING - weeks not in canonical ORDER list:');
  unknownWeeks.forEach((w) => console.log(`  ${w}: ${byWeek[w]}`));
}

fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
const jsOut = `// Auto-generated by generate.js on ${new Date().toISOString()}\n// Total: ${questions.length} (mcq: ${mcqCount}, command: ${cmdCount})\nconst QUIZ_DATA_NETOS_EN = ${JSON.stringify(questions, null, 1)};\nconst QUIZ_WEEKS_ORDER_NETOS_EN = ${JSON.stringify(WEEKS.ORDER, null, 1)};\n`;
fs.writeFileSync(OUT_FILE, jsOut, 'utf8');
console.log(`\nWritten: ${OUT_FILE}`);
