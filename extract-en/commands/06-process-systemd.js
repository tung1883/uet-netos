const WEEKS = require('../weeks');
module.exports = {
  category: 'process-systemd',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'ps',
      description: 'display the list of processes currently running on the system',
      flags: [
        { flag: 'aux', meaning: 'show every process from every user along with detailed %CPU, %MEM info' },
        { flag: '-ef', meaning: 'show every process in full format, including the PPID (parent process)' },
        { flag: '-u <user>', meaning: 'only show processes belonging to a specific user' },
      ],
      scenarios: [
        { task: 'Show every running process on the system along with CPU/MEM usage', accepted: ['ps aux'] },
        { task: 'Show processes with their parent PID (PPID) in full format', accepted: ['ps -ef'] },
        { task: 'Find processes whose name relates to "nginx"', accepted: ['ps aux | grep nginx'] },
      ],
    },
    {
      name: 'top',
      description: 'display a real-time list of processes, sorted by resource usage',
      flags: [
        { flag: '-u <user>', meaning: 'only show processes belonging to a specific user' },
      ],
      scenarios: [
        { task: 'Monitor processes in real time', accepted: ['top'] },
      ],
    },
    {
      name: 'htop',
      description: 'an interactive, more visual version of top, supporting scrolling and process search',
      flags: [
        { flag: '-u <user>', meaning: 'only show processes belonging to a specific user' },
        { flag: '-d <seconds>', meaning: 'specify the screen refresh interval (in tenths of a second)' },
      ],
      scenarios: [
        { task: 'Open the visual interactive process monitor htop', accepted: ['htop'] },
        { task: 'Open htop showing only user alice\'s processes', accepted: ['htop -u alice'] },
      ],
    },
    {
      name: 'kill',
      description: 'send a signal to a process by PID, sending SIGTERM by default',
      flags: [
        { flag: '-9', meaning: 'send SIGKILL, forcing the process to terminate immediately, unable to be ignored' },
        { flag: '-15', meaning: 'send SIGTERM, asking the process to clean up and exit on its own (default)' },
        { flag: '-l', meaning: 'list every type of signal that can be sent' },
      ],
      scenarios: [
        { task: 'Force-terminate the process with PID 1234 immediately', accepted: ['kill -9 1234'] },
        { task: 'Send a normal stop signal to the process with PID 1234', accepted: ['kill 1234', 'kill -15 1234'] },
      ],
    },
    {
      name: 'killall',
      description: 'send a signal to every process matching a name, instead of a PID',
      flags: [
        { flag: '-9', meaning: 'immediately force-terminate every process matching the name' },
      ],
      scenarios: [
        { task: 'Force-terminate every process named firefox', accepted: ['killall -9 firefox'] },
      ],
    },
    {
      name: 'pkill',
      description: 'find and send a signal to a process based on name or other attributes (no PID needed)',
      flags: [
        { flag: '-u <user>', meaning: 'only send the signal to processes belonging to a specific user' },
      ],
      scenarios: [
        { task: 'Terminate every process belonging to user alice', accepted: ['sudo pkill -u alice'] },
      ],
    },
    {
      name: 'nice',
      description: 'start a program with a custom priority (niceness); the higher the value, the lower the priority',
      flags: [
        { flag: '-n <value>', meaning: 'specify the niceness level (-20 to 19) when starting the program' },
      ],
      scenarios: [
        { task: 'Run script backup.sh with low priority (niceness 10)', accepted: ['nice -n 10 ./backup.sh'] },
      ],
    },
    {
      name: 'renice',
      description: 'change the priority (niceness) of an already-running process',
      flags: [
        { flag: '-n <value> -p <pid>', meaning: 'set a new niceness value for a process by PID' },
      ],
      scenarios: [
        { task: 'Change the priority of the process with PID 2048 to 5', accepted: ['renice -n 5 -p 2048', 'sudo renice -n 5 -p 2048'] },
      ],
    },
    {
      name: 'jobs',
      description: 'list the processes (jobs) running in the background or suspended in the current shell session',
      flags: [
        { flag: '-l', meaning: 'also show the PID of each job' },
      ],
      scenarios: [
        { task: 'View the list of jobs running in the background in the current shell', accepted: ['jobs'] },
      ],
    },
    {
      name: 'bg',
      description: 'resume a suspended job, running it in the background',
      flags: [],
      scenarios: [
        { task: 'Move a suspended job (Ctrl+Z) to run in the background', accepted: ['bg'] },
      ],
    },
    {
      name: 'fg',
      description: 'bring a background job back to run in the foreground',
      flags: [],
      scenarios: [
        { task: 'Bring background job number 1 back to run in the foreground', accepted: ['fg %1', 'fg'] },
      ],
    },
    {
      name: 'nohup',
      description: 'run a program so it isn\'t terminated when the shell session closes (ignores the SIGHUP signal)',
      flags: [
        { flag: '> <file> 2>&1 &', meaning: 'combine redirecting both stdout and stderr into a log file and run in the background' },
      ],
      scenarios: [
        { task: 'Run script.sh in the background so it survives closing the terminal, logging to nohup.out', accepted: ['nohup ./script.sh &', 'nohup ./script.sh > nohup.out &'] },
      ],
    },
    {
      name: 'disown',
      description: 'remove a job from the current shell\'s job table, so it isn\'t terminated when the shell closes',
      flags: [
        { flag: '-h', meaning: 'keep the job in the table but mark it to ignore SIGHUP' },
      ],
      scenarios: [
        { task: 'Remove background job number 1 from the current shell\'s job table', accepted: ['disown %1'] },
      ],
    },
    {
      name: 'systemctl',
      description: 'the tool for managing and checking the status of system services (units) under systemd',
      flags: [
        { flag: 'start <unit>', meaning: 'start the service immediately (not persistent across reboots)' },
        { flag: 'stop <unit>', meaning: 'immediately stop a running service' },
        { flag: 'restart <unit>', meaning: 'stop then start the service again' },
        { flag: 'reload <unit>', meaning: 'reload a service\'s configuration without interrupting the running process' },
        { flag: 'status <unit>', meaning: 'show a service\'s current status (active/inactive/failed)' },
        { flag: 'enable <unit>', meaning: 'set the service to start automatically with the system (without starting it now)' },
        { flag: 'disable <unit>', meaning: 'remove the auto-start-with-system setting' },
        { flag: 'enable --now <unit>', meaning: 'both enable auto-start with the system and start the service immediately' },
        { flag: 'is-active <unit>', meaning: 'quickly check whether a service is currently running' },
        { flag: 'is-enabled <unit>', meaning: 'check whether a service is set to auto-start with the system' },
        { flag: 'mask <unit>', meaning: 'completely disable a service, preventing both manual and automatic starts' },
        { flag: 'daemon-reload', meaning: 'reload all unit configuration after editing a unit file' },
        { flag: 'list-units --type=service', meaning: 'list every service currently present on the system' },
        { flag: 'mask <unit>', meaning: 'completely disable a service, preventing both manual and automatic starts (duplicate, see line above)' },
        { flag: 'unmask <unit>', meaning: 'remove the mask state, letting the service start again' },
        { flag: 'list-dependencies <unit>', meaning: 'show the dependency tree of services for a unit' },
        { flag: 'show <unit>', meaning: 'show all of a unit\'s detailed properties (file path, state...)' },
        { flag: 'cat <unit>', meaning: 'show the content of the unit\'s original configuration file' },
        { flag: 'edit <unit>', meaning: 'open an editor to create a configuration override for a unit without editing the original file' },
      ],
      scenarios: [
        { task: 'Check the SSH service status on Ubuntu', accepted: ['systemctl status ssh', 'systemctl status ssh.service', 'sudo systemctl status ssh', 'sudo systemctl status ssh.service'] },
        { task: 'Start the nginx service immediately', accepted: ['sudo systemctl start nginx', 'systemctl start nginx'] },
        { task: 'Set the nginx service to auto-start with the system and start it right now', accepted: ['sudo systemctl enable --now nginx'] },
        { task: 'Restart the sshd service after editing its configuration', accepted: ['sudo systemctl restart sshd', 'sudo systemctl restart ssh'] },
        { task: 'Reload the systemd configuration after creating a new unit file', accepted: ['sudo systemctl daemon-reload'] },
        { task: 'Check whether the docker service is running (just need active/inactive)', accepted: ['systemctl is-active docker'] },
        { task: 'Completely disable the bluetooth service, preventing even a manual start', accepted: ['sudo systemctl mask bluetooth'] },
        { task: 'Check whether the nginx service is set to auto-start with the system', accepted: ['systemctl is-enabled nginx'] },
        { task: 'Remove the auto-start-with-system setting for the apache2 service', accepted: ['sudo systemctl disable apache2'] },
        { task: 'Reload the nginx service\'s configuration without interrupting active connections', accepted: ['sudo systemctl reload nginx'] },
      ],
    },
    {
      name: 'journalctl',
      week: WEEKS.W8_TH14,
      description: 'view and filter the system logs recorded by systemd (the systemd journal)',
      flags: [
        { flag: '-u <unit>', meaning: 'only show the log of a specific service (unit)' },
        { flag: '-f', meaning: 'continuously follow the log, like tail -f' },
        { flag: '-b', meaning: 'only show the log since the most recent boot' },
        { flag: '-p err', meaning: 'only show log entries at the error level or above' },
        { flag: '--since "<time>"', meaning: 'only show the log starting from a given time' },
        { flag: '--until "<time>"', meaning: 'only show the log up to a given time' },
        { flag: '-n <number>', meaning: 'only show the last n log lines' },
        { flag: '-k', meaning: 'only show kernel-related log entries (same as dmesg)' },
        { flag: '--disk-usage', meaning: 'show the total disk space the journal log is currently using' },
        { flag: '--vacuum-size=<size>', meaning: 'clean up old log entries so the journal doesn\'t exceed a given size' },
      ],
      scenarios: [
        { task: 'View the nginx service\'s log in real time', accepted: ['journalctl -u nginx -f', 'sudo journalctl -u nginx -f'] },
        { task: 'View the system log since the most recent boot', accepted: ['journalctl -b', 'sudo journalctl -b'] },
        { task: 'View the last 50 log lines of the sshd service', accepted: ['journalctl -u sshd -n 50', 'journalctl -u ssh -n 50'] },
        { task: 'View how much disk space the journal log is currently using', accepted: ['journalctl --disk-usage'] },
        { task: 'Clean up old journal log entries so it uses at most 500MB', accepted: ['sudo journalctl --vacuum-size=500M'] },
        { task: 'View the system log from 09:00 to 10:00 today', accepted: ['journalctl --since "09:00" --until "10:00"'] },
      ],
    },
  ],
};
