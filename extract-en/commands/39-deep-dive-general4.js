const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general4',
  week: WEEKS.EXTRA_5,
  commands: [
    {
      name: 'free -m',
      description: 'show RAM/swap capacity in megabytes',
      flags: [],
      scenarios: [
        { task: 'View RAM capacity in megabytes', accepted: ['free -m'] },
      ],
    },
    {
      name: 'df -T',
      description: 'show disk capacity along with the filesystem type of each partition',
      flags: [],
      scenarios: [
        { task: 'View disk capacity along with the filesystem type of each partition', accepted: ['df -T'] },
      ],
    },
    {
      name: 'du --max-depth=1 -h',
      description: 'view the usage of each level-1 subdirectory, in human-readable form, without going deeper',
      flags: [],
      scenarios: [
        { task: 'View the usage of each level-1 subdirectory in /var, in human-readable form', accepted: ['du --max-depth=1 -h /var', 'du -h --max-depth=1 /var'] },
      ],
    },
    {
      name: 'uptime -s',
      description: 'show the exact time the system last booted',
      flags: [],
      scenarios: [
        { task: 'View the exact time the system last booted', accepted: ['uptime -s'] },
      ],
    },
    {
      name: 'who -b',
      description: 'show the time the system last booted, via the who command',
      flags: [],
      scenarios: [
        { task: 'View the time the system last booted using who', accepted: ['who -b'] },
      ],
    },
    {
      name: 'lastb',
      description: 'show the list of recent failed login attempts',
      flags: [],
      scenarios: [
        { task: 'View the list of recent failed login attempts', accepted: ['sudo lastb', 'lastb'] },
      ],
    },
    {
      name: 'who -r',
      description: 'show the system\'s current runlevel',
      flags: [],
      scenarios: [
        { task: 'View the system\'s current runlevel', accepted: ['who -r'] },
      ],
    },
    {
      name: 'kill -0',
      description: 'check whether a process still exists without actually sending any signal (used in scripts)',
      flags: [],
      scenarios: [
        { task: 'Check whether the process with PID 1234 still exists, without sending a real signal', accepted: ['kill -0 1234'] },
      ],
    },
    {
      name: 'ps -p',
      description: 'show info for a specific process by PID',
      flags: [],
      scenarios: [
        { task: 'View info for the process with PID 1234', accepted: ['ps -p 1234'] },
      ],
    },
    {
      name: 'command -v',
      description: 'check whether a command exists on the system, returning its path if it does (used in scripts in place of which)',
      flags: [],
      scenarios: [
        { task: 'Check whether the docker command exists on the system, in a script', accepted: ['command -v docker'] },
      ],
    },
    {
      name: 'exec',
      description: 'completely replace the current shell process with another command, without creating a new child process',
      flags: [],
      scenarios: [
        { task: 'Replace the current shell with a new bash process (exec)', accepted: ['exec bash'] },
      ],
    },
    {
      name: 'hostname -I',
      description: 'show every IP address the machine currently has, as a brief single-line list',
      flags: [],
      scenarios: [
        { task: 'Quickly view every IP address of the machine on one line', accepted: ['hostname -I'] },
      ],
    },
    {
      name: 'hostname -f',
      description: 'show the machine\'s fully qualified domain name (FQDN) instead of just the short hostname',
      flags: [],
      scenarios: [
        { task: 'View the machine\'s fully qualified domain name (FQDN)', accepted: ['hostname -f'] },
      ],
    },
    {
      name: 'uname -s',
      description: 'only show the kernel\'s name (e.g. Linux) without any other info',
      flags: [],
      scenarios: [
        { task: 'Only show the system\'s kernel name (e.g. Linux)', accepted: ['uname -s'] },
      ],
    },
    {
      name: 'arch',
      description: 'show the machine\'s hardware architecture (e.g. x86_64), equivalent to uname -m',
      flags: [],
      scenarios: [
        { task: 'View the machine\'s hardware architecture using the arch command', accepted: ['arch'] },
      ],
    },
    {
      name: 'nproc --all',
      description: 'show the total number of physical CPU cores on the machine, including cores restricted (by cgroup) for the current process',
      flags: [],
      scenarios: [
        { task: 'View the total number of physical CPU cores on the machine, not limited by cgroup', accepted: ['nproc --all'] },
      ],
    },
  ],
};
