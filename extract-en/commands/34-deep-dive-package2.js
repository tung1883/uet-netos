const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-package2',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'apt list --upgradable -a',
      description: 'list upgradable packages along with every available version, not just the latest one',
      flags: [],
      scenarios: [
        { task: 'View every available version of upgradable packages', accepted: ['apt list --upgradable -a'] },
      ],
    },
    {
      name: 'apt download',
      description: 'download a package\'s .deb file into the current directory without installing it',
      flags: [],
      scenarios: [
        { task: 'Download the .deb file for the nginx package into the current directory without installing it', accepted: ['apt download nginx'] },
      ],
    },
    {
      name: 'apt-get source',
      description: 'download the source code of a Debian/Ubuntu package into the current directory',
      flags: [],
      scenarios: [
        { task: 'Download the source code of the nginx package into the current directory', accepted: ['apt-get source nginx'] },
      ],
    },
    {
      name: 'dpkg --configure -a',
      description: 'finish configuring packages left half-done (commonly used to fix the "dpkg was interrupted" error)',
      flags: [],
      scenarios: [
        { task: 'Fix an interrupted package install error (dpkg was interrupted)', accepted: ['sudo dpkg --configure -a'] },
      ],
    },
    {
      name: 'dpkg -c',
      description: 'list the files contained inside a .deb file without installing it',
      flags: [],
      scenarios: [
        { task: 'View the list of files inside package app.deb without installing it', accepted: ['dpkg -c app.deb'] },
      ],
    },
    {
      name: 'dpkg -s',
      description: 'view the detailed status info of an installed package (version, status, dependencies)',
      flags: [],
      scenarios: [
        { task: 'View the detailed status info of the installed nginx package', accepted: ['dpkg -s nginx'] },
      ],
    },
    {
      name: 'ldconfig',
      description: 'refresh the dynamic linker\'s cache after installing a new shared library',
      flags: [],
      scenarios: [
        { task: 'Refresh the dynamic library cache after installing a new library', accepted: ['sudo ldconfig'] },
      ],
    },
    {
      name: 'update-alternatives',
      description: 'manage multiple installed versions of a command, choosing which version is used by default',
      flags: [
        { flag: '--config <name>', meaning: 'show the list of choices and let you pick the default version' },
      ],
      scenarios: [
        { task: 'Choose the default version for the python command among the installed versions', accepted: ['sudo update-alternatives --config python'] },
      ],
    },
    {
      name: 'add-apt-repository --remove',
      description: 'remove a previously added software repository (PPA) from the list of APT sources',
      flags: [],
      scenarios: [
        { task: 'Remove the previously added PPA repository ppa:ondrej/php', accepted: ['sudo add-apt-repository --remove ppa:ondrej/php'] },
      ],
    },
    {
      name: 'apt-get check',
      description: 'check the package system\'s consistency, detecting broken dependencies',
      flags: [],
      scenarios: [
        { task: 'Check the package system\'s consistency for broken dependencies', accepted: ['sudo apt-get check'] },
      ],
    },
    {
      name: 'apt-get install -f',
      description: 'automatically fix missing or broken dependencies',
      flags: [],
      scenarios: [
        { task: 'Automatically fix missing or broken dependencies on the system', accepted: ['sudo apt-get install -f', 'sudo apt install -f'] },
      ],
    },
  ],
};
