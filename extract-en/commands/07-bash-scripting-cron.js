const WEEKS = require('../weeks');
module.exports = {
  category: 'bash-scripting-cron',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'bash',
      description: 'launch the Bash shell interpreter, or execute a script',
      flags: [
        { flag: '-x <script>', meaning: 'run the script in debug mode, printing each command before executing it' },
        { flag: '-n <script>', meaning: 'only check the script\'s syntax, don\'t execute it' },
        { flag: '-c "<command>"', meaning: 'execute a command string passed directly' },
      ],
      scenarios: [
        { task: 'Run script deploy.sh in debug mode to see each command executed', accepted: ['bash -x deploy.sh'] },
        { task: 'Check the syntax of script deploy.sh without actually running it', accepted: ['bash -n deploy.sh'] },
      ],
    },
    {
      name: 'chmod +x',
      description: 'grant execute permission to a script file so it can run directly via ./',
      flags: [],
      scenarios: [
        { task: 'Grant execute permission to script deploy.sh', accepted: ['chmod +x deploy.sh'] },
      ],
    },
    {
      name: 'crontab',
      week: WEEKS.W4_TH6,
      description: 'manage automatically recurring scheduled tasks for a user (cron jobs)',
      flags: [
        { flag: '-e', meaning: 'open an editor to edit the current user\'s crontab' },
        { flag: '-l', meaning: 'list the current user\'s crontab entries' },
        { flag: '-r', meaning: 'delete the current user\'s entire crontab' },
        { flag: '-u <user>', meaning: 'operate on another user\'s crontab (requires root)' },
      ],
      scenarios: [
        { task: 'Open the current user\'s crontab for editing', accepted: ['crontab -e'] },
        { task: 'View the current user\'s existing cron jobs', accepted: ['crontab -l'] },
        { task: 'View user alice\'s crontab (as root)', accepted: ['sudo crontab -u alice -l'] },
        { task: 'Schedule script /home/alice/backup.sh to run at 2 AM every day (add to crontab)', accepted: ['0 2 * * * /home/alice/backup.sh'] },
        { task: 'Schedule a script to run at minute 30 of every hour', accepted: ['30 * * * * /path/to/script.sh'] },
        { task: 'Schedule a script to run at midnight on the first day of every month', accepted: ['0 0 1 * * /path/to/script.sh'] },
        { task: 'Schedule a script to run every Monday at 8 AM', accepted: ['0 8 * * 1 /path/to/script.sh'] },
        { task: 'Schedule a script to run every 15 minutes', accepted: ['*/15 * * * * /path/to/script.sh'] },
        { task: 'Schedule a script to run at 23:59 on December 31st every year', accepted: ['59 23 31 12 * /path/to/script.sh'] },
      ],
    },
    {
      name: 'at',
      week: WEEKS.W4_TH6,
      description: 'schedule a command/script to run exactly once at a specific point in the future',
      flags: [
        { flag: '-l', meaning: 'list the at jobs waiting to run (same as atq)' },
        { flag: '-r <job>', meaning: 'cancel a scheduled at job (same as atrm)' },
      ],
      scenarios: [
        { task: 'Schedule a command to run at 22:00 today', accepted: ['at 22:00'] },
        { task: 'View the list of at jobs waiting to run', accepted: ['atq', 'at -l'] },
      ],
    },
    {
      name: 'systemd-run',
      week: WEEKS.W4_TH6,
      description: 'create and run a temporary (transient) systemd unit, usable for one-off scheduling like at',
      flags: [
        { flag: '--on-calendar="<time>"', meaning: 'specify the run time using systemd timer calendar format' },
      ],
      scenarios: [
        { task: 'Run a command immediately as a transient systemd unit (used to test a timer)', accepted: ['systemd-run --on-calendar="*:0/5" /path/to/script.sh'] },
      ],
    },
    {
      name: 'export',
      description: 'export a shell variable as an environment variable so child processes can use it',
      flags: [
        { flag: '-p', meaning: 'list every environment variable that has been exported' },
      ],
      scenarios: [
        { task: 'Export the PATH environment variable, adding /opt/myapp/bin', accepted: ['export PATH=$PATH:/opt/myapp/bin'] },
      ],
    },
    {
      name: 'echo',
      description: 'print a text string or variable value to the screen',
      flags: [
        { flag: '-n', meaning: 'don\'t print a trailing newline' },
        { flag: '-e', meaning: 'enable interpreting escape characters like \\n, \\t' },
      ],
      scenarios: [
        { task: 'Print the value of the HOME environment variable', accepted: ['echo $HOME'] },
        { task: 'Print the string "Hello" without a trailing newline', accepted: ['echo -n "Hello"', "echo -n 'Hello'"] },
      ],
    },
    {
      name: 'read',
      description: 'read a line of data from standard input and assign it to a variable in a script',
      flags: [
        { flag: '-p "<prompt>"', meaning: 'show a prompt line before reading the input' },
        { flag: '-s', meaning: 'hide input as it\'s typed (used for entering passwords)' },
      ],
      scenarios: [
        { task: 'Read user input into variable name, with the prompt "Enter name: "', accepted: ['read -p "Nhap ten: " name', "read -p 'Nhap ten: ' name"] },
      ],
    },
    {
      name: 'test',
      description: 'check a condition (number comparison, string, or file check) and return a true/false exit code, commonly used as [ ]',
      flags: [
        { flag: '-f <file>', meaning: 'check that a file exists and is a regular file' },
        { flag: '-d <directory>', meaning: 'check that a path exists and is a directory' },
        { flag: '-z <string>', meaning: 'check that a string is empty' },
        { flag: '-eq', meaning: 'compare two numbers for equality' },
      ],
      scenarios: [
        { task: 'Check whether file /etc/myapp.conf exists inside an if statement', accepted: ['if [ -f /etc/myapp.conf ]; then', '[ -f /etc/myapp.conf ]'] },
      ],
    },
    {
      name: 'exit',
      description: 'end the current script or shell with a given exit code',
      flags: [
        { flag: '<number>', meaning: 'specify a particular exit code, 0 meaning success, non-zero meaning an error' },
      ],
      scenarios: [
        { task: 'End the script with error code 1', accepted: ['exit 1'] },
        { task: 'End the script signaling success', accepted: ['exit 0'] },
      ],
    },
  ],
};
