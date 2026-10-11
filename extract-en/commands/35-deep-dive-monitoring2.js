const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-monitoring2',
  week: WEEKS.W8_TH14,
  commands: [
    {
      name: 'journalctl -k',
      description: 'only show kernel-related logs (equivalent to dmesg but through the journal)',
      flags: [],
      scenarios: [
        { task: 'View kernel logs via journalctl', accepted: ['journalctl -k'] },
      ],
    },
    {
      name: 'journalctl --list-boots',
      description: 'list every time the system has booted, with a number for viewing each boot\'s log',
      flags: [],
      scenarios: [
        { task: 'View the list of times the system has booted', accepted: ['journalctl --list-boots'] },
      ],
    },
    {
      name: 'journalctl -u <unit> --since yesterday',
      description: 'view a specific service\'s log starting from the beginning of yesterday',
      flags: [],
      scenarios: [
        { task: 'View the nginx service\'s log since yesterday', accepted: ['journalctl -u nginx --since yesterday'] },
      ],
    },
    {
      name: 'sar',
      description: 'collect and report system activity statistics over time (CPU, memory, I/O) from historical data',
      flags: [
        { flag: '-u', meaning: 'report CPU usage statistics' },
        { flag: '-r', meaning: 'report memory usage statistics' },
      ],
      scenarios: [
        { task: 'View a historical CPU usage report using sar', accepted: ['sar -u'] },
        { task: 'View a historical memory usage report using sar', accepted: ['sar -r'] },
      ],
    },
    {
      name: 'vmstat 1 5',
      description: 'show system stats repeating every second, 5 times total, to observe trends over time',
      flags: [],
      scenarios: [
        { task: 'Monitor system stats every second, 5 times total', accepted: ['vmstat 1 5'] },
      ],
    },
    {
      name: 'top -o %MEM',
      description: 'run top sorting the process list by memory usage',
      flags: [],
      scenarios: [
        { task: 'Run top sorting processes by memory usage', accepted: ['top -o %MEM'] },
      ],
    },
    {
      name: 'iotop',
      description: 'show disk I/O bandwidth usage per process, in real time',
      flags: [],
      scenarios: [
        { task: 'Monitor per-process disk I/O usage in real time', accepted: ['sudo iotop'] },
      ],
    },
    {
      name: 'netdata / nload',
      description: 'show incoming/outgoing network traffic in real time as a console chart (nload)',
      flags: [],
      scenarios: [
        { task: 'View incoming/outgoing network traffic in real time as a console chart', accepted: ['nload'] },
      ],
    },
    {
      name: 'journalctl -o json-pretty',
      description: 'output the journal log as pretty-formatted JSON, useful when processing logs with another tool (e.g. jq)',
      flags: [],
      scenarios: [
        { task: 'Output the nginx service\'s log as pretty-formatted JSON', accepted: ['journalctl -u nginx -o json-pretty'] },
      ],
    },
    {
      name: 'logrotate',
      description: 'manage rotating, compressing, and deleting old log files on a recurring configured schedule',
      flags: [
        { flag: '-f <config file>', meaning: 'force a rotation immediately, ignoring the schedule, used to test a configuration' },
      ],
      scenarios: [
        { task: 'Force logrotate to run now to test configuration file /etc/logrotate.d/nginx', accepted: ['sudo logrotate -f /etc/logrotate.d/nginx'] },
      ],
    },
  ],
};
