const WEEKS = require('../weeks');
module.exports = {
  category: 'vim-editor',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'vim :w',
      description: 'the ex command in vi/vim used to write (save) the file being edited',
      flags: [],
      scenarios: [
        { task: 'Save the file currently being edited in vim', accepted: [':w'] },
      ],
    },
    {
      name: 'vim :wq',
      description: 'the ex command in vi/vim used to save the file then quit',
      flags: [],
      scenarios: [
        { task: 'Save the file and quit vim', accepted: [':wq'] },
      ],
    },
    {
      name: 'vim :q!',
      description: 'the ex command in vi/vim used to quit without saving changes',
      flags: [],
      scenarios: [
        { task: 'Quit vim without saving the changes just made', accepted: [':q!'] },
      ],
    },
    {
      name: 'vim i',
      description: 'the shortcut key switching from Normal mode to Insert mode at the cursor position',
      flags: [],
      scenarios: [
        { task: 'Switch vim into text-insert mode at the cursor position', accepted: ['i'] },
      ],
    },
    {
      name: 'vim Esc',
      description: 'the key to exit Insert mode, returning to Normal mode',
      flags: [],
      scenarios: [
        { task: 'Return to Normal mode from Insert mode in vim', accepted: ['Esc'] },
      ],
    },
    {
      name: 'vim dd',
      description: 'delete the entire current line in vim\'s Normal mode',
      flags: [],
      scenarios: [
        { task: 'Delete the current line in vim (in Normal mode)', accepted: ['dd'] },
      ],
    },
    {
      name: 'vim yy',
      description: 'copy (yank) the entire current line in vim',
      flags: [],
      scenarios: [
        { task: 'Copy the current line in vim', accepted: ['yy'] },
      ],
    },
    {
      name: 'vim p',
      description: 'paste the just-copied/deleted content after the cursor position in vim',
      flags: [],
      scenarios: [
        { task: 'Paste the just-copied/cut content after the current line in vim', accepted: ['p'] },
      ],
    },
    {
      name: 'vim /pattern',
      description: 'search forward for the string "pattern" in the text currently open in vim',
      flags: [],
      scenarios: [
        { task: 'Search for the string "error" in the file currently open in vim', accepted: ['/error'] },
      ],
    },
    {
      name: 'vim :%s/old/new/g',
      description: 'replace every occurrence of "old" with "new" on every line in the file currently open in vim',
      flags: [],
      scenarios: [
        { task: 'Replace every occurrence of "old" with "new" on every line of the file currently open in vim', accepted: [':%s/old/new/g'] },
      ],
    },
    {
      name: 'vim G',
      description: 'move the cursor to the last line of the file in Normal mode',
      flags: [],
      scenarios: [
        { task: 'Move the cursor down to the last line of the file in vim', accepted: ['G'] },
      ],
    },
    {
      name: 'vim gg',
      description: 'move the cursor to the first line of the file in Normal mode',
      flags: [],
      scenarios: [
        { task: 'Move the cursor up to the first line of the file in vim', accepted: ['gg'] },
      ],
    },
    {
      name: 'vim u',
      description: 'undo the most recent edit operation in vim',
      flags: [],
      scenarios: [
        { task: 'Undo the operation just performed in vim', accepted: ['u'] },
      ],
    },
  ],
};
