const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-1',
  week: WEEKS.EXTRA_1,
  commands: [
    {
      name: 'stat',
      description: 'show detailed info about a file: inode, permissions, size, access/modification/change time',
      flags: [
        { flag: '-c "%a"', meaning: 'only show the access permissions in octal form' },
        { flag: '-f', meaning: 'show info about the filesystem containing the file instead of the file itself' },
      ],
      scenarios: [
        { task: 'View detailed info (inode, permissions, timestamps) for file notes.txt', accepted: ['stat notes.txt'] },
        { task: 'Get the octal access permissions of file notes.txt using stat', accepted: ['stat -c "%a" notes.txt', "stat -c '%a' notes.txt"] },
      ],
    },
    {
      name: 'file',
      description: 'determine a file\'s actual content type (text, binary, script, image...) based on content, not just the extension',
      flags: [],
      scenarios: [
        { task: 'Check the actual file type of mystery_file', accepted: ['file mystery_file'] },
      ],
    },
    {
      name: 'which',
      description: 'show the full path to a command\'s executable, based on the PATH variable',
      flags: [],
      scenarios: [
        { task: 'View the full path of the python3 command currently in use', accepted: ['which python3'] },
      ],
    },
    {
      name: 'whereis',
      description: 'locate the binary, source and man page files of a command',
      flags: [],
      scenarios: [
        { task: 'Locate the binary and man page of command ls', accepted: ['whereis ls'] },
      ],
    },
    {
      name: 'type',
      description: 'show what the shell interprets a word as: an alias, a function, a shell builtin, or an executable file',
      flags: [],
      scenarios: [
        { task: 'Check whether "cd" is a shell builtin or an executable file', accepted: ['type cd'] },
      ],
    },
    {
      name: 'basename',
      description: 'extract the filename from a full path, dropping the directory part',
      flags: [],
      scenarios: [
        { task: 'Get the filename from path /var/log/syslog using basename', accepted: ['basename /var/log/syslog'] },
      ],
    },
    {
      name: 'dirname',
      description: 'extract the directory path portion from a full path, dropping the filename',
      flags: [],
      scenarios: [
        { task: 'Get the directory path from /var/log/syslog using dirname', accepted: ['dirname /var/log/syslog'] },
      ],
    },
    {
      name: 'readlink',
      description: 'show the target that a symbolic link (symlink) is pointing to',
      flags: [
        { flag: '-f', meaning: 'resolve the full absolute path, even through multiple nested symlinks' },
      ],
      scenarios: [
        { task: 'View the actual target that symlink /usr/bin/python is pointing to', accepted: ['readlink -f /usr/bin/python', 'readlink /usr/bin/python'] },
      ],
    },
    {
      name: 'date',
      description: 'show or set the system date and time',
      flags: [
        { flag: '+%Y-%m-%d', meaning: 'only show the date in year-month-day format' },
        { flag: '-s "<datetime>"', meaning: 'set the system date/time to a given value' },
      ],
      scenarios: [
        { task: 'Show today\'s date in YYYY-MM-DD format', accepted: ["date +%Y-%m-%d"] },
      ],
    },
    {
      name: 'timedatectl',
      description: 'view or set the system date, time, timezone and NTP sync via systemd',
      flags: [
        { flag: 'set-timezone <tz>', meaning: 'change the system timezone to a given value' },
        { flag: 'set-ntp true', meaning: 'enable automatic time sync via NTP' },
      ],
      scenarios: [
        { task: 'Change the system timezone to Asia/Ho_Chi_Minh', accepted: ['sudo timedatectl set-timezone Asia/Ho_Chi_Minh'] },
        { task: 'View the system\'s current date/time and timezone info', accepted: ['timedatectl'] },
      ],
    },
    {
      name: 'seq',
      description: 'generate a sequence of consecutive numbers, commonly used in shell script loops',
      flags: [],
      scenarios: [
        { task: 'Print the sequence of numbers from 1 to 10', accepted: ['seq 1 10'] },
      ],
    },
    {
      name: 'expr',
      description: 'perform a simple arithmetic calculation or comparison in a shell script',
      flags: [],
      scenarios: [
        { task: 'Compute 3 plus 5 using expr', accepted: ['expr 3 + 5'] },
      ],
    },
    {
      name: 'printf',
      description: 'print text in a given format, more precise than echo when formatting control is needed',
      flags: [],
      scenarios: [
        { task: 'Print a number as a decimal with 2 digits after the point using printf', accepted: ['printf "%.2f\\n" 3.14159'] },
      ],
    },
    {
      name: 'lscpu',
      description: 'show detailed info about the system\'s CPU architecture',
      flags: [],
      scenarios: [
        { task: 'View detailed info about the system\'s CPU', accepted: ['lscpu'] },
      ],
    },
    {
      name: 'nproc',
      description: 'show the number of CPU cores available to the current process',
      flags: [],
      scenarios: [
        { task: 'View the number of CPU cores available on the system', accepted: ['nproc'] },
      ],
    },
    {
      name: 'lsusb',
      description: 'list the USB devices currently connected to the system',
      flags: [],
      scenarios: [
        { task: 'List the USB devices currently plugged into the machine', accepted: ['lsusb'] },
      ],
    },
    {
      name: 'lspci',
      description: 'list the PCI devices (graphics card, network card...) on the system',
      flags: [],
      scenarios: [
        { task: 'List the PCI devices attached to the motherboard', accepted: ['lspci'] },
      ],
    },
    {
      name: 'shutdown',
      description: 'shut down or restart the system, optionally scheduling when it happens',
      flags: [
        { flag: 'now', meaning: 'shut down immediately' },
        { flag: '-r now', meaning: 'restart immediately' },
        { flag: '-h +<minutes>', meaning: 'schedule shutdown after a given number of minutes' },
        { flag: '-c', meaning: 'cancel a previously scheduled shutdown' },
      ],
      scenarios: [
        { task: 'Shut down the machine immediately', accepted: ['sudo shutdown now'] },
        { task: 'Restart the machine immediately', accepted: ['sudo shutdown -r now', 'sudo reboot'] },
        { task: 'Schedule a shutdown in 10 minutes', accepted: ['sudo shutdown -h +10'] },
        { task: 'Cancel a previously scheduled shutdown', accepted: ['sudo shutdown -c'] },
      ],
    },
    {
      name: 'reboot',
      description: 'restart the system immediately',
      flags: [],
      scenarios: [
        { task: 'Restart the system right now', accepted: ['sudo reboot'] },
      ],
    },
    {
      name: 'last',
      description: 'show the history of user logins on the system',
      flags: [
        { flag: '-n <number>', meaning: 'only show the n most recent logins' },
      ],
      scenarios: [
        { task: 'View the system\'s login history', accepted: ['last'] },
      ],
    },
    {
      name: 'pstree',
      description: 'show the process tree, showing parent-child relationships between processes',
      flags: [
        { flag: '-p', meaning: 'also show the PID of each process in the tree' },
      ],
      scenarios: [
        { task: 'View the system\'s process tree', accepted: ['pstree'] },
      ],
    },
    {
      name: 'watch',
      description: 'repeatedly run a command on a cycle, continuously updating the displayed result',
      flags: [
        { flag: '-n <seconds>', meaning: 'specify the repeat interval (default 2 seconds)' },
      ],
      scenarios: [
        { task: 'Continuously monitor the result of df -h, updating every 5 seconds', accepted: ['watch -n 5 df -h', "watch -n 5 'df -h'"] },
      ],
    },
    {
      name: 'timeout',
      description: 'run a command but automatically kill it if it runs past a time limit',
      flags: [],
      scenarios: [
        { task: 'Run the command ping google.com but auto-stop it after 10 seconds', accepted: ['timeout 10 ping google.com'] },
      ],
    },
    {
      name: 'env',
      description: 'show all current environment variables, or run a command in a modified environment',
      flags: [],
      scenarios: [
        { task: 'View all current environment variables', accepted: ['env'] },
      ],
    },
    {
      name: 'printenv',
      description: 'show the value of one or all environment variables',
      flags: [],
      scenarios: [
        { task: 'View the value of the PATH environment variable', accepted: ['printenv PATH'] },
      ],
    },
    {
      name: 'ulimit',
      description: 'view or set system resource limits (open files, process size...) for the current shell',
      flags: [
        { flag: '-a', meaning: 'show every current resource limit' },
        { flag: '-n <number>', meaning: 'set the maximum number of file descriptors that can be open' },
      ],
      scenarios: [
        { task: 'View all the current resource limits of the shell', accepted: ['ulimit -a'] },
      ],
    },
    {
      name: 'chroot',
      description: 'change the root directory (/) a process sees, commonly used when repairing a system from a rescue environment',
      flags: [],
      scenarios: [
        { task: 'Enter a chroot environment at /mnt to fix a broken system', accepted: ['sudo chroot /mnt'] },
      ],
    },
    {
      name: 'setfacl',
      description: 'set an Access Control List (ACL) on a file/directory, allowing more fine-grained permissions than traditional Unix permissions',
      flags: [
        { flag: '-m u:<user>:<perms>', meaning: 'add or edit the ACL permission for a specific user on a file' },
      ],
      scenarios: [
        { task: 'Grant read-write ACL permission to user alice on file shared.txt', accepted: ['setfacl -m u:alice:rw shared.txt'] },
      ],
    },
    {
      name: 'getfacl',
      description: 'view the current Access Control List (ACL) of a file/directory',
      flags: [],
      scenarios: [
        { task: 'View the current ACL of file shared.txt', accepted: ['getfacl shared.txt'] },
      ],
    },
    {
      name: 'md5sum',
      description: 'compute and show the MD5 hash of a file, used to check its integrity',
      flags: [],
      scenarios: [
        { task: 'Compute the MD5 hash of file file.iso', accepted: ['md5sum file.iso'] },
      ],
    },
    {
      name: 'sha256sum',
      description: 'compute and show the SHA-256 hash of a file, more secure than MD5',
      flags: [],
      scenarios: [
        { task: 'Compute the SHA-256 hash of file file.iso', accepted: ['sha256sum file.iso'] },
      ],
    },
    {
      name: 'split',
      description: 'split a large file into several smaller files',
      flags: [
        { flag: '-b <size>', meaning: 'split by a given size per part (e.g. 100M)' },
        { flag: '-l <n>', meaning: 'split by a given number of lines per part' },
      ],
      scenarios: [
        { task: 'Split file bigfile.tar into 100MB parts', accepted: ['split -b 100M bigfile.tar'] },
      ],
    },
    {
      name: 'paste',
      description: 'merge corresponding lines from multiple files side by side, separated by a tab',
      flags: [],
      scenarios: [
        { task: 'Merge files a.txt and b.txt side by side', accepted: ['paste a.txt b.txt'] },
      ],
    },
    {
      name: 'comm',
      description: 'compare two sorted files, showing lines only in file 1, only in file 2, and lines common to both',
      flags: [
        { flag: '-12', meaning: 'only show the lines common to both files (hiding columns 1 and 2)' },
      ],
      scenarios: [
        { task: 'Compare two sorted files a.txt and b.txt', accepted: ['comm a.txt b.txt'] },
      ],
    },
    {
      name: 'nl',
      description: 'number the lines of a text file',
      flags: [],
      scenarios: [
        { task: 'Number the lines of file notes.txt', accepted: ['nl notes.txt'] },
      ],
    },
    {
      name: 'rev',
      description: 'reverse the order of characters on each line of input',
      flags: [],
      scenarios: [
        { task: 'Reverse the characters of the string "hello" using rev', accepted: ['echo hello | rev', "echo 'hello' | rev"] },
      ],
    },
    {
      name: 'column',
      description: 'format input into aligned columns, easier to read',
      flags: [
        { flag: '-t', meaning: 'automatically align into a table based on whitespace' },
      ],
      scenarios: [
        { task: 'Format file data.txt into aligned columns', accepted: ['column -t data.txt'] },
      ],
    },
  ],
};
