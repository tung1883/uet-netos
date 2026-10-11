const WEEKS = require('../weeks');
module.exports = {
  category: 'logging-monitoring',
  week: WEEKS.W8_TH14,
  commands: [
    {
      name: 'journalctl -p err',
      description: 'view log lines at the error severity level or above, helping quickly find issues',
      flags: [],
      scenarios: [
        { task: 'View logs at the error level or above in the system journal', accepted: ['journalctl -p err'] },
      ],
    },
    {
      name: 'dmesg',
      description: 'show kernel logs, commonly used to check for hardware errors or newly plugged-in devices',
      flags: [
        { flag: '-T', meaning: 'show timestamps in human-readable format instead of system timestamps' },
        { flag: '-w', meaning: 'continuously follow the kernel log, like tail -f' },
      ],
      scenarios: [
        { task: 'View the kernel log with human-readable timestamps', accepted: ['dmesg -T'] },
      ],
    },
    {
      name: 'free',
      description: 'show RAM and swap memory used/free',
      flags: [
        { flag: '-h', meaning: 'show sizes in a human-readable form (K, M, G)' },
        { flag: '-s <seconds>', meaning: 'repeat the display continuously after a given interval' },
      ],
      scenarios: [
        { task: 'View the current RAM usage in human-readable form', accepted: ['free -h'] },
      ],
    },
    {
      name: 'vmstat',
      description: 'show an overall statistics summary of memory, processes, CPU and I/O on the system',
      flags: [
        { flag: '<seconds>', meaning: 'repeat showing the stats after a given interval' },
      ],
      scenarios: [
        { task: 'View system stats repeating every 2 seconds', accepted: ['vmstat 2'] },
      ],
    },
    {
      name: 'uptime',
      description: 'show how long the system has been continuously running and its average load',
      flags: [],
      scenarios: [
        { task: 'View how long the system has been running and its load average', accepted: ['uptime'] },
      ],
    },
    {
      name: 'iostat',
      description: 'show input/output (I/O) performance statistics for the CPU and storage devices',
      flags: [],
      scenarios: [
        { task: 'View disk I/O performance statistics', accepted: ['iostat'] },
      ],
    },
    {
      name: 'lsof',
      description: 'list the files currently open by processes, commonly used to check which process is holding a file or network port',
      flags: [
        { flag: '-i :<port>', meaning: 'list the process using a specific network port' },
        { flag: '-u <user>', meaning: 'only list files currently open by a specific user' },
      ],
      scenarios: [
        { task: 'Check which process is listening on port 80', accepted: ['sudo lsof -i :80'] },
      ],
    },
    {
      name: 'systemctl --failed',
      description: 'list systemd services currently in a failed state, useful when diagnosing boot issues',
      flags: [],
      scenarios: [
        { task: 'List the systemd services currently failing on the system', accepted: ['systemctl --failed'] },
      ],
    },
    {
      name: 'journalctl --since "<time>"',
      description: 'filter the system log by a specific time range',
      flags: [],
      scenarios: [
        { task: 'View the system log from 09:00 today', accepted: ['journalctl --since "09:00"', "journalctl --since '09:00'"] },
      ],
    },
    {
      name: 'tail -f /var/log/syslog',
      description: 'continuously follow the combined system log syslog on Debian/Ubuntu distributions',
      flags: [],
      scenarios: [
        { task: 'Continuously follow the combined system log /var/log/syslog', accepted: ['tail -f /var/log/syslog'] },
      ],
    },
  ],
};
