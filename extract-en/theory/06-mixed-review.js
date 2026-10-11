module.exports = [
  {
    text: 'When a Bash script ends with exit code 0, what does that mean?',
    options: ['The script failed', 'The script ran successfully, with no error', 'The script hung', 'The script was never executed'],
    correctIndex: 1,
    explanation: 'By Unix convention, exit code 0 means success; any non-zero value indicates an error.',
  },
  {
    text: 'What does the HOME environment variable store?',
    options: ['The path to the current user\'s home directory', 'The machine\'s hostname', 'The current IP address', 'The list of installed packages'],
    correctIndex: 0,
    explanation: 'HOME holds the absolute path to the logged-in user\'s personal directory.',
  },
  {
    text: 'What is the difference between `$(command)` and `` `command` `` in Bash?',
    options: [
      'These two syntaxes are unrelated to each other',
      'Both perform command substitution (capturing a command\'s result), but $() is easier to read and nests better than backticks',
      '`$()` can only be used with the echo command',
      'Backticks are faster than $() in performance',
    ],
    correctIndex: 1,
    explanation: 'Both perform command substitution; $() is the more modern syntax, easier to nest and read clearly than backticks.',
  },
  {
    text: 'When a shell script starts with the line #!/bin/bash, what does that line mean?',
    options: [
      'It\'s just an ordinary comment line, with no effect',
      'It\'s a shebang, specifying the interpreter that will be used to run the script',
      'It declares an environment variable',
      'It imports a library',
    ],
    correctIndex: 1,
    explanation: 'The shebang line (#!) tells the system which program (here, /bin/bash) will execute the rest of the file.',
  },
  {
    text: 'Why should you use environment variables instead of hardcoding paths in a script?',
    options: [
      'It makes the script flexible, easy to move between different environments without changing code',
      'Environment variables run faster',
      'There\'s no real reason',
      'Environment variables are automatically encrypted',
    ],
    correctIndex: 0,
    explanation: 'Environment variables let configuration change per environment (dev/prod...) without editing the script\'s source code.',
  },
  {
    text: 'What is the difference between installing a package from the APT repository versus installing manually from source?',
    options: [
      'APT automatically handles dependencies and is easier to update; installing from source is more flexible but you must manage dependencies and updates yourself',
      'There is no difference at all',
      'Installing from source is always faster',
      'APT doesn\'t support uninstalling',
    ],
    correctIndex: 0,
    explanation: 'A package manager like APT automatically resolves dependencies and is easy to update/remove; compiling from source is flexible but takes more maintenance effort.',
  },
  {
    text: 'When a disk is mounted with the "noexec" option, what happens?',
    options: [
      'No one can read files on that disk',
      'Executable files on that partition are prohibited from running directly',
      'The disk is automatically encrypted',
      'The disk can only be read by root',
    ],
    correctIndex: 1,
    explanation: 'The "noexec" mount option prevents executing any binary file located on that filesystem, a common security measure for /tmp.',
  },
  {
    text: 'Why do modern distributions recommend using the "ip" tool instead of the older "ifconfig"/"route"?',
    options: [
      'ifconfig/route have been dropped from the traditional net-tools package on many distributions and don\'t fully support modern networking features',
      'ip runs slower but is easier to use',
      'There\'s no technical reason, it\'s just a trend',
      'ifconfig cannot show the IP address',
    ],
    correctIndex: 0,
    explanation: 'The net-tools suite (ifconfig, route, netstat) is outdated and no longer actively maintained; iproute2 (ip, ss) is the modern standard with more complete features.',
  },
  {
    text: 'What is the difference between a "full" backup and an "incremental" backup?',
    options: [
      'A full backup copies all the data every time; an incremental backup only copies the parts changed since the last backup, saving time/space',
      'An incremental backup is always slower than a full backup',
      'A full backup cannot be used for restoration',
      'There is no real difference',
    ],
    correctIndex: 0,
    explanation: 'A full backup copies everything; an incremental backup only stores the changed parts, saving resources but restoration requires combining the full backup plus the incremental ones in order.',
  },
  {
    text: 'When testing a newly installed network service, why should you check both "is the service running" and "is the port listening"?',
    options: [
      'The two checks are identical so you only need to check one',
      'A service can report "running" yet fail to bind the correct port/address due to a config error, so you need to check both to be sure it\'s actually working',
      'Checking the port is always enough, no need to check the service status',
      'This is an unnecessary step in real-world operations',
    ],
    correctIndex: 1,
    explanation: 'systemctl status "active" doesn\'t guarantee the service bound the expected port; you need to additionally verify with ss/netstat to be sure the service is truly listening correctly.',
  },
];
