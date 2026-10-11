const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-systemd-process',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'systemctl list-unit-files',
      description: 'list every unit file installed on the system along with its enabled/disabled state',
      flags: [
        { flag: '--type=service', meaning: 'only list unit files of type service' },
        { flag: '--state=enabled', meaning: 'only list units currently in the enabled state' },
      ],
      scenarios: [
        { task: 'List every installed unit file of type service', accepted: ['systemctl list-unit-files --type=service'] },
        { task: 'List the units currently enabled to auto-start with the system', accepted: ['systemctl list-unit-files --state=enabled'] },
        { task: 'Count how many services are currently enabled on the system', accepted: ['systemctl list-unit-files --state=enabled | wc -l'] },
        { task: 'List every unit file on the system (no type filter)', accepted: ['systemctl list-unit-files'] },
      ],
    },
    {
      name: 'systemctl --user',
      description: 'manage systemd services running at the user (user session) scope instead of system-wide',
      flags: [
        { flag: 'start <unit>', meaning: 'start a user unit' },
        { flag: 'enable --now <unit>', meaning: 'enable auto-start and start a user unit immediately' },
      ],
      scenarios: [
        { task: 'Start the user-scoped service named my-app', accepted: ['systemctl --user start my-app'] },
        { task: 'View the status of user service my-app', accepted: ['systemctl --user status my-app'] },
        { task: 'Enable auto-start and start user service my-app immediately', accepted: ['systemctl --user enable --now my-app'] },
      ],
    },
    {
      name: 'ps --sort',
      description: 'list processes sorted by a specific criterion (CPU, memory...)',
      flags: [
        { flag: '--sort=-%cpu', meaning: 'sort processes by %CPU, descending' },
        { flag: '--sort=-%mem', meaning: 'sort processes by %memory, descending' },
      ],
      scenarios: [
        { task: 'List the 5 processes using the most CPU', accepted: ['ps aux --sort=-%cpu | head -6', 'ps -eo pid,comm,%cpu --sort=-%cpu | head -6'] },
        { task: 'List the 5 processes using the most memory', accepted: ['ps aux --sort=-%mem | head -6', 'ps -eo pid,comm,%mem --sort=-%mem | head -6'] },
        { task: 'List processes sorted by PID ascending', accepted: ['ps aux --sort=pid'] },
      ],
    },
    {
      name: 'pgrep',
      description: 'find the PID of processes matching a name or attribute, without sending a signal (unlike pkill)',
      flags: [
        { flag: '-u <user>', meaning: 'only find processes belonging to a specific user' },
        { flag: '-l', meaning: 'also show the process name next to the PID' },
        { flag: '-f', meaning: 'match the pattern against the entire full command line, not just the process name' },
      ],
      scenarios: [
        { task: 'Find the PID of the nginx process', accepted: ['pgrep nginx'] },
        { task: 'Find the PID and name of processes belonging to user alice', accepted: ['pgrep -l -u alice', 'pgrep -lu alice'] },
        { task: 'Find the PID of a process whose full command line contains "backup.sh"', accepted: ['pgrep -f backup.sh'] },
      ],
    },
    {
      name: 'systemctl edit --full',
      description: 'open an editor to directly edit the entire content of a unit file (unlike edit, which creates an override)',
      flags: [],
      scenarios: [
        { task: 'Directly edit the entire content of the nginx service\'s unit file', accepted: ['sudo systemctl edit --full nginx'] },
      ],
    },
    {
      name: 'systemd-cgtop',
      description: 'show resource usage (CPU, memory, I/O) per systemd control group (cgroup)',
      flags: [],
      scenarios: [
        { task: 'View resource usage per cgroup on the system', accepted: ['systemd-cgtop'] },
      ],
    },
    {
      name: 'systemctl kill',
      description: 'directly send a signal to the processes belonging to a unit, instead of using the kill command manually',
      flags: [
        { flag: '-s SIGKILL', meaning: 'specify sending SIGKILL instead of the default SIGTERM' },
      ],
      scenarios: [
        { task: 'Force-terminate the process of service hung-service immediately using SIGKILL', accepted: ['sudo systemctl kill -s SIGKILL hung-service'] },
      ],
    },
    {
      name: 'nice -n (negative priority)',
      description: 'run a program with a higher-than-normal priority (a negative niceness value, requires root)',
      flags: [],
      scenarios: [
        { task: 'Run important script important.sh with a high priority (niceness -10)', accepted: ['sudo nice -n -10 ./important.sh'] },
      ],
    },
    {
      name: 'taskset',
      description: 'bind (pin) a process to run only on specific CPU cores (CPU affinity)',
      flags: [
        { flag: '-c <cpu list>', meaning: 'specify the list of CPU cores (by number) the process is allowed to run on' },
      ],
      scenarios: [
        { task: 'Run program heavy_task only on CPU cores 0 and 1', accepted: ['taskset -c 0,1 ./heavy_task'] },
      ],
    },
  ],
};
