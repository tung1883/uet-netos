const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-5',
  week: WEEKS.EXTRA_5,
  commands: [
    {
      name: 'kill -l',
      description: 'list every signal type that the kill command can send, with its number',
      flags: [],
      scenarios: [
        { task: 'View the list of every signal type kill can send', accepted: ['kill -l'] },
      ],
    },
    {
      name: 'signal SIGHUP',
      description: 'the signal sent when the controlling terminal closes, commonly used to ask a service to reload its configuration',
      flags: [],
      scenarios: [
        { task: 'Send signal SIGHUP (asking to reload config) to the process with PID 2048', accepted: ['kill -HUP 2048', 'kill -1 2048'] },
      ],
    },
    {
      name: 'signal SIGSTOP/SIGCONT',
      description: 'the signals to pause (SIGSTOP) and resume (SIGCONT) a process without terminating it',
      flags: [],
      scenarios: [
        { task: 'Pause the process with PID 2048 without terminating it', accepted: ['kill -STOP 2048', 'kill -19 2048'] },
        { task: 'Resume the paused process with PID 2048', accepted: ['kill -CONT 2048', 'kill -18 2048'] },
      ],
    },
    {
      name: 'ps -o',
      description: 'customize the info columns shown when listing processes with ps',
      flags: [
        { flag: '-o pid,comm,%cpu', meaning: 'only show the PID, command name and %CPU columns' },
      ],
      scenarios: [
        { task: 'Show processes with only the PID, command name and %CPU columns', accepted: ['ps -o pid,comm,%cpu'] },
      ],
    },
    {
      name: 'top -b -n 1',
      description: 'run top in batch mode (non-interactive), outputting the result once then exiting, useful inside a script',
      flags: [],
      scenarios: [
        { task: 'Run top exactly once (non-interactively) to get a result for a script', accepted: ['top -b -n 1', 'top -b -n1'] },
      ],
    },
    {
      name: 'nohup & disown combo',
      description: 'combining nohup and & to run a background process fully independent of the current terminal session',
      flags: [],
      scenarios: [
        { task: 'Run script long_task.sh in the background, independent of the terminal, with output logged to log.txt', accepted: ['nohup ./long_task.sh > log.txt 2>&1 &'] },
      ],
    },
    {
      name: 'jq',
      description: 'a command-line tool for parsing and extracting data from JSON',
      flags: [
        { flag: '.<key>', meaning: 'extract the value of a specific key in the JSON' },
        { flag: '-r', meaning: 'output the result as a raw string, without surrounding double quotes' },
      ],
      scenarios: [
        { task: 'Extract the "name" field from file data.json using jq', accepted: ['jq .name data.json'] },
        { task: 'Extract the "name" field from data.json as a raw string, without quotes', accepted: ['jq -r .name data.json'] },
      ],
    },
    {
      name: 'expand',
      description: 'convert tab characters in text into the equivalent number of spaces',
      flags: [],
      scenarios: [
        { task: 'Convert tabs in file code.txt into spaces', accepted: ['expand code.txt'] },
      ],
    },
    {
      name: 'fold',
      description: 'wrap long lines of text into shorter lines at a given width',
      flags: [
        { flag: '-w <n>', meaning: 'specify the maximum width per line after wrapping' },
      ],
      scenarios: [
        { task: 'Wrap the lines of file longtext.txt to at most 80 characters per line', accepted: ['fold -w 80 longtext.txt'] },
      ],
    },
    {
      name: 'truncate',
      description: 'change a file\'s size to a given value, cutting it short or extending it with zero bytes',
      flags: [
        { flag: '-s <size>', meaning: 'specify the new size for the file' },
      ],
      scenarios: [
        { task: 'Truncate file log.txt to size 0 (clear content but keep the file)', accepted: ['truncate -s 0 log.txt'] },
      ],
    },
    {
      name: 'cmp',
      description: 'compare two files at the byte level, reporting the position of the first differing byte (unlike diff\'s line-based output)',
      flags: [],
      scenarios: [
        { task: 'Compare two binary files file1.bin and file2.bin at the byte level', accepted: ['cmp file1.bin file2.bin'] },
      ],
    },
    {
      name: 'pv',
      description: 'show the progress of a data stream passing through a pipe',
      flags: [],
      scenarios: [
        { task: 'Monitor progress while copying large file bigfile.iso through a pipe into dd', accepted: ['pv bigfile.iso | dd of=/dev/sdb'] },
      ],
    },
    {
      name: 'screen',
      description: 'a tool for managing multiple virtual terminal sessions, letting you detach/attach to keep running even if the SSH connection drops',
      flags: [
        { flag: '-S <name>', meaning: 'create a new screen session with a given name' },
        { flag: '-r <name>', meaning: 'reattach to an existing screen session' },
      ],
      scenarios: [
        { task: 'Create a new screen session named "backup"', accepted: ['screen -S backup'] },
        { task: 'Reattach to the screen session named "backup" created earlier', accepted: ['screen -r backup'] },
      ],
    },
    {
      name: 'tmux',
      description: 'a more modern multi-window terminal management tool than screen, supporting detach/attach and split panes',
      flags: [
        { flag: 'new -s <name>', meaning: 'create a new tmux session with a given name' },
        { flag: 'attach -t <name>', meaning: 'reattach to an existing tmux session' },
      ],
      scenarios: [
        { task: 'Create a new tmux session named "work"', accepted: ['tmux new -s work'] },
        { task: 'Reattach to the tmux session named "work"', accepted: ['tmux attach -t work'] },
      ],
    },
    {
      name: 'su vs sudo -i',
      description: 'sudo -i starts a full login shell with root privileges, similar to su - but using the current user\'s own password instead of the root password',
      flags: [],
      scenarios: [
        { task: 'Open a full login shell with root privileges using sudo (using your own password)', accepted: ['sudo -i'] },
      ],
    },
    {
      name: 'wall',
      description: 'send a broadcast message to every user currently logged into the system',
      flags: [],
      scenarios: [
        { task: 'Send the message "He thong se bao tri sau 10 phut" to every logged-in user', accepted: ['wall "He thong se bao tri sau 10 phut"', "wall 'He thong se bao tri sau 10 phut'"] },
      ],
    },
    {
      name: 'write',
      description: 'send a message directly to a specific user currently logged into the system',
      flags: [],
      scenarios: [
        { task: 'Send a direct message to the logged-in user alice', accepted: ['write alice'] },
      ],
    },
  ],
};
