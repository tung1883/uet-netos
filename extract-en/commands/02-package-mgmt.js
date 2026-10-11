const WEEKS = require('../weeks');
module.exports = {
  category: 'package-mgmt',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'apt update',
      description: 'refresh the list of packages and latest versions from the software repositories (installs nothing)',
      flags: [],
      scenarios: [
        { task: 'Refresh the package list from the software repository', accepted: ['sudo apt update', 'apt update'] },
      ],
    },
    {
      name: 'apt upgrade',
      description: 'upgrade installed packages to the newest version available in the repository',
      flags: [
        { flag: '-y', meaning: 'automatically answer "yes" to every prompt, no interaction needed' },
      ],
      scenarios: [
        { task: 'Upgrade all installed packages to the latest version, auto-confirming', accepted: ['sudo apt upgrade -y', 'sudo apt -y upgrade'] },
      ],
    },
    {
      name: 'apt install',
      description: 'install a new software package along with its dependencies',
      flags: [
        { flag: '-y', meaning: 'automatically confirm the install' },
        { flag: '--reinstall', meaning: 'reinstall an already-installed package, overwriting the current files' },
      ],
      scenarios: [
        { task: 'Install the openssh-server package, auto-confirming', accepted: ['sudo apt install -y openssh-server', 'sudo apt install openssh-server -y'] },
        { task: 'Reinstall the nginx package', accepted: ['sudo apt install --reinstall nginx'] },
      ],
    },
    {
      name: 'apt remove',
      description: 'remove a software package but keep its configuration files',
      flags: [],
      scenarios: [
        { task: 'Remove the apache2 package, keeping its configuration files', accepted: ['sudo apt remove apache2'] },
      ],
    },
    {
      name: 'apt purge',
      description: 'remove a software package along with all its related configuration files',
      flags: [],
      scenarios: [
        { task: 'Completely remove the apache2 package including its configuration files', accepted: ['sudo apt purge apache2'] },
      ],
    },
    {
      name: 'apt autoremove',
      description: 'remove dependency packages that are no longer used by any other package',
      flags: [],
      scenarios: [
        { task: 'Clean up dependency packages that are no longer needed', accepted: ['sudo apt autoremove'] },
      ],
    },
    {
      name: 'apt search',
      description: 'search for a software package by name or description in the repository',
      flags: [],
      scenarios: [
        { task: 'Search for packages related to the keyword "nginx"', accepted: ['apt search nginx'] },
      ],
    },
    {
      name: 'apt show',
      description: 'show detailed information for a software package (version, description, dependencies)',
      flags: [],
      scenarios: [
        { task: 'View detailed information for the nginx package', accepted: ['apt show nginx'] },
      ],
    },
    {
      name: 'apt list',
      description: 'list software packages matching a filter condition',
      flags: [
        { flag: '--installed', meaning: 'only list packages currently installed on the system' },
        { flag: '--upgradable', meaning: 'only list installed packages that have a newer version available to upgrade to' },
      ],
      scenarios: [
        { task: 'List all currently installed packages', accepted: ['apt list --installed'] },
        { task: 'List packages that can be upgraded to a newer version', accepted: ['apt list --upgradable'] },
      ],
    },
    {
      name: 'dpkg',
      description: 'Debian/Ubuntu\'s low-level package management tool, operating directly on .deb files',
      flags: [
        { flag: '-i <file.deb>', meaning: 'install a package from a local .deb file' },
        { flag: '-r <package name>', meaning: 'remove a package but keep its configuration files' },
        { flag: '-P <package name>', meaning: 'completely remove a package including its configuration files (purge)' },
        { flag: '-l', meaning: 'list installed packages' },
        { flag: '-L <package name>', meaning: 'list the files belonging to an installed package' },
        { flag: '-S <file name>', meaning: 'find which package owns a specific file on the system' },
      ],
      scenarios: [
        { task: 'Install a package from the local file app.deb', accepted: ['sudo dpkg -i app.deb'] },
        { task: 'List the files belonging to the installed nginx package', accepted: ['dpkg -L nginx'] },
      ],
    },
    {
      name: 'add-apt-repository',
      description: 'add a third-party software repository (PPA/repository) to the list of APT sources',
      flags: [
        { flag: '-y', meaning: 'automatically confirm adding the repository' },
        { flag: '--remove', meaning: 'remove an already-added repository' },
      ],
      scenarios: [
        { task: 'Add the PPA repository ppa:ondrej/php to the system', accepted: ['sudo add-apt-repository ppa:ondrej/php'] },
      ],
    },
  ],
};
