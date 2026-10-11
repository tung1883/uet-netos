const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general3',
  week: WEEKS.EXTRA_2,
  commands: [
    {
      name: 'mktemp',
      description: 'create a temporary file or directory with a unique name, safe to use in a script',
      flags: [
        { flag: '-d', meaning: 'create a temporary directory instead of a file' },
      ],
      scenarios: [
        { task: 'Create a safe temporary file in a script', accepted: ['mktemp'] },
        { task: 'Create a safe temporary directory in a script', accepted: ['mktemp -d'] },
      ],
    },
    {
      name: 'realpath',
      description: 'show the full absolute path of a file, with every symlink and relative path resolved',
      flags: [],
      scenarios: [
        { task: 'Get the full absolute path of file ../data/file.txt', accepted: ['realpath ../data/file.txt'] },
      ],
    },
    {
      name: 'tee -a',
      description: 'append output both to the screen and to the end of a file, without overwriting it',
      flags: [],
      scenarios: [
        { task: 'Append the output of the date command to the end of file log.txt, while also printing it to the screen', accepted: ['date | tee -a log.txt'] },
      ],
    },
    {
      name: 'yes',
      description: 'continuously print a string (default "y") until stopped, commonly used to auto-answer "yes" to prompts',
      flags: [],
      scenarios: [
        { task: 'Automatically answer "y" to every confirmation prompt when running install script install.sh', accepted: ['yes | ./install.sh'] },
      ],
    },
    {
      name: 'sleep',
      description: 'pause script execution for a given amount of time',
      flags: [],
      scenarios: [
        { task: 'Pause a script for 5 seconds', accepted: ['sleep 5'] },
      ],
    },
    {
      name: 'cal',
      description: 'display a month/year calendar in the terminal',
      flags: [
        { flag: '-y', meaning: 'show the calendar for the entire current year' },
      ],
      scenarios: [
        { task: 'Show the calendar for the entire current year', accepted: ['cal -y'] },
      ],
    },
    {
      name: 'bc',
      description: 'a command-line calculator, supporting more complex arithmetic than expr (including decimals)',
      flags: [],
      scenarios: [
        { task: 'Compute 10 divided by 3 to 4 decimal places using bc', accepted: ['echo "scale=4; 10/3" | bc'] },
      ],
    },
    {
      name: 'xdg-open',
      description: 'open a file or URL using the default application configured on the Linux desktop environment',
      flags: [],
      scenarios: [
        { task: 'Open file report.pdf using the system\'s default application', accepted: ['xdg-open report.pdf'] },
      ],
    },
    {
      name: 'chsh',
      description: 'change the current user\'s default login shell',
      flags: [
        { flag: '-s <shell>', meaning: 'specify the new shell to use as the default login shell' },
      ],
      scenarios: [
        { task: 'Change the current user\'s default login shell to /bin/zsh', accepted: ['chsh -s /bin/zsh'] },
      ],
    },
    {
      name: 'cat /etc/os-release',
      description: 'view info about the current Linux distribution (name, version) from the standard os-release file',
      flags: [],
      scenarios: [
        { task: 'View the current Linux distribution\'s name and version', accepted: ['cat /etc/os-release'] },
      ],
    },
    {
      name: 'lsmod',
      description: 'list the kernel modules currently loaded on the system',
      flags: [],
      scenarios: [
        { task: 'View the list of currently loaded kernel modules', accepted: ['lsmod'] },
      ],
    },
    {
      name: 'modprobe',
      description: 'load or remove a kernel module',
      flags: [
        { flag: '-r <module>', meaning: 'remove a loaded kernel module' },
      ],
      scenarios: [
        { task: 'Load the kernel module named loop', accepted: ['sudo modprobe loop'] },
        { task: 'Remove the loaded kernel module named loop', accepted: ['sudo modprobe -r loop'] },
      ],
    },
  ],
};
