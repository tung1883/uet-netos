const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-3',
  week: WEEKS.EXTRA_3,
  commands: [
    {
      name: 'apt-get',
      description: 'the original command-line package management tool on Debian/Ubuntu, similar to apt but more stable for scripting',
      flags: [
        { flag: 'update', meaning: 'refresh the package list from the repository' },
        { flag: 'install -y <package>', meaning: 'install a package, auto-confirming' },
        { flag: 'clean', meaning: 'delete downloaded .deb files from the cache, freeing up space' },
      ],
      scenarios: [
        { task: 'Install the curl package using apt-get, auto-confirming', accepted: ['sudo apt-get install -y curl'] },
        { task: 'Clear the cache of downloaded .deb packages', accepted: ['sudo apt-get clean'] },
      ],
    },
    {
      name: 'snap',
      description: 'manage software packaged as snaps, self-contained and isolated from the system',
      flags: [
        { flag: 'install <package>', meaning: 'install a snap application' },
        { flag: 'list', meaning: 'list installed snap packages' },
        { flag: 'remove <package>', meaning: 'remove a snap package' },
      ],
      scenarios: [
        { task: 'Install the snap application named "code"', accepted: ['sudo snap install code'] },
        { task: 'List the snap packages installed on the system', accepted: ['snap list'] },
      ],
    },
    {
      name: 'systemctl get-default',
      description: 'view the default target (mode) the system will boot into, e.g. multi-user or graphical',
      flags: [],
      scenarios: [
        { task: 'View the default target the system currently boots into', accepted: ['systemctl get-default'] },
      ],
    },
    {
      name: 'systemctl set-default',
      description: 'set the default target the system will boot into',
      flags: [],
      scenarios: [
        { task: 'Set the system to boot into multi-user mode (no graphical interface)', accepted: ['sudo systemctl set-default multi-user.target'] },
      ],
    },
    {
      name: 'hostnamectl status',
      description: 'view an overview of the machine\'s hostname, operating system and kernel',
      flags: [],
      scenarios: [
        { task: 'View an overview of the hostname and operating system', accepted: ['hostnamectl status', 'hostnamectl'] },
      ],
    },
    {
      name: 'localectl',
      description: 'view or set the system language and keyboard layout',
      flags: [
        { flag: 'set-locale LANG=<locale>', meaning: 'set the default system language' },
      ],
      scenarios: [
        { task: 'View the current system language configuration', accepted: ['localectl'] },
      ],
    },
    {
      name: 'useradd -D',
      description: 'view the current default values used when creating a new user with useradd',
      flags: [],
      scenarios: [
        { task: 'View useradd\'s current default settings', accepted: ['useradd -D'] },
      ],
    },
    {
      name: 'pwck',
      description: 'check the integrity of the /etc/passwd file, detecting format errors or inconsistent data',
      flags: [],
      scenarios: [
        { task: 'Check the integrity of file /etc/passwd', accepted: ['sudo pwck'] },
      ],
    },
    {
      name: 'vipw',
      description: 'directly and safely edit the /etc/passwd file, automatically locking it while editing to avoid conflicts',
      flags: [],
      scenarios: [
        { task: 'Safely edit file /etc/passwd', accepted: ['sudo vipw'] },
      ],
    },
    {
      name: 'last reboot',
      description: 'view the history of system reboots',
      flags: [],
      scenarios: [
        { task: 'View the history of the system\'s reboots', accepted: ['last reboot'] },
      ],
    },
    {
      name: 'uptime -p',
      description: 'show how long the system has been running continuously in a pretty, readable format',
      flags: [],
      scenarios: [
        { task: 'View how long the system has been running in a readable format', accepted: ['uptime -p'] },
      ],
    },
    {
      name: 'df -i',
      description: 'show the number of inodes used and free on filesystems (different from byte capacity)',
      flags: [],
      scenarios: [
        { task: 'View the number of inodes used and free on the partitions', accepted: ['df -i'] },
      ],
    },
    {
      name: 'ncdu',
      description: 'an interactive (ncurses) disk usage analyzer tool, easier to use than du',
      flags: [],
      scenarios: [
        { task: 'Analyze disk usage of directory /var using the interactive interface', accepted: ['ncdu /var'] },
      ],
    },
    {
      name: 'iproute2 (ip -s link)',
      description: 'show traffic statistics (packets sent/received, errors) on network interfaces',
      flags: [],
      scenarios: [
        { task: 'View send/receive traffic statistics for network interfaces', accepted: ['ip -s link'] },
      ],
    },
    {
      name: 'route -n',
      description: '(an older tool) show the routing table numerically, without name resolution',
      flags: [],
      scenarios: [
        { task: 'View the routing table numerically using the older route command', accepted: ['route -n'] },
      ],
    },
    {
      name: 'ifconfig',
      description: '(an older tool, replaced by ip) show or configure a network interface\'s IP address',
      flags: [],
      scenarios: [
        { task: 'View network interface IP addresses using the older ifconfig command', accepted: ['ifconfig'] },
      ],
    },
    {
      name: 'nslookup -type=mx',
      description: 'look up the MX record of a domain using nslookup',
      flags: [],
      scenarios: [
        { task: 'Look up the MX record of example.com using nslookup', accepted: ['nslookup -type=mx example.com'] },
      ],
    },
    {
      name: 'ping6',
      description: 'check network connectivity to another machine over the IPv6 protocol',
      flags: [],
      scenarios: [
        { task: 'Check IPv6 connectivity to a server using ping6', accepted: ['ping6 example.com'] },
      ],
    },
    {
      name: 'curl -v',
      description: 'send an HTTP request while showing verbose details of the entire connection process, useful for debugging',
      flags: [],
      scenarios: [
        { task: 'Check the detailed HTTP connection process to http://localhost using curl in verbose mode', accepted: ['curl -v http://localhost'] },
      ],
    },
    {
      name: 'curl -s -o /dev/null -w "%{http_code}"',
      description: 'quickly check the HTTP status code returned by a URL without printing the page content',
      flags: [],
      scenarios: [
        { task: 'Get only the HTTP status code of http://localhost, without printing content', accepted: ['curl -s -o /dev/null -w "%{http_code}" http://localhost'] },
      ],
    },
    {
      name: 'service',
      description: '(an older tool) start, stop or check a service\'s status on older distributions, before systemd became common',
      flags: [
        { flag: '<name> status', meaning: 'check the status of a service' },
        { flag: '<name> restart', meaning: 'restart a service' },
      ],
      scenarios: [
        { task: 'Check the nginx service\'s status using the older service command', accepted: ['sudo service nginx status', 'service nginx status'] },
      ],
    },
    {
      name: 'chkconfig',
      description: '(an older tool on RHEL/CentOS) manage which services auto-start with the system, before systemd became common',
      flags: [
        { flag: '--list', meaning: 'list the auto-start status of services' },
      ],
      scenarios: [
        { task: 'List services\' auto-start status using the older chkconfig', accepted: ['chkconfig --list'] },
      ],
    },
    {
      name: 'rpm -qa',
      description: 'list every package installed on an RPM-based system (RHEL/CentOS/Fedora)',
      flags: [],
      scenarios: [
        { task: 'List all packages installed on an RPM-based system', accepted: ['rpm -qa'] },
      ],
    },
    {
      name: 'yum install',
      description: '(older RHEL/CentOS) install a software package along with its dependencies',
      flags: [
        { flag: '-y', meaning: 'automatically confirm the install' },
      ],
      scenarios: [
        { task: 'Install the httpd package on a CentOS system, auto-confirming', accepted: ['sudo yum install -y httpd'] },
      ],
    },
    {
      name: 'dnf install',
      description: '(modern Fedora/RHEL) install a software package, replacing yum',
      flags: [
        { flag: '-y', meaning: 'automatically confirm the install' },
      ],
      scenarios: [
        { task: 'Install the httpd package using dnf, auto-confirming', accepted: ['sudo dnf install -y httpd'] },
      ],
    },
    {
      name: 'firewall-cmd',
      description: '(RHEL/CentOS) the firewalld management tool, playing a role equivalent to ufw on Ubuntu',
      flags: [
        { flag: '--add-port=<port>/tcp --permanent', meaning: 'permanently open a TCP port (persists across reboots)' },
        { flag: '--reload', meaning: 'reload the firewall configuration to apply permanent changes' },
        { flag: '--list-all', meaning: 'list all current rules of the default zone' },
      ],
      scenarios: [
        { task: 'Permanently open port 80/tcp with firewalld then apply it immediately', accepted: ['sudo firewall-cmd --add-port=80/tcp --permanent && sudo firewall-cmd --reload'] },
        { task: 'View all of firewalld\'s current rules', accepted: ['sudo firewall-cmd --list-all'] },
      ],
    },
    {
      name: 'setenforce',
      description: '(RHEL/CentOS) temporarily switch SELinux between Enforcing and Permissive (not persistent across reboots)',
      flags: [
        { flag: '0', meaning: 'switch SELinux to Permissive mode (log only, don\'t block)' },
        { flag: '1', meaning: 'switch SELinux to Enforcing mode (block and log)' },
      ],
      scenarios: [
        { task: 'Temporarily switch SELinux to Permissive mode to debug', accepted: ['sudo setenforce 0'] },
      ],
    },
    {
      name: 'getenforce',
      description: 'view the SELinux mode currently in effect (Enforcing/Permissive/Disabled)',
      flags: [],
      scenarios: [
        { task: 'View the system\'s current SELinux mode', accepted: ['getenforce'] },
      ],
    },
    {
      name: 'semanage',
      description: '(RHEL/CentOS) manage SELinux policies: context, network ports, booleans',
      flags: [
        { flag: 'port -a -t <type> -p tcp <port>', meaning: 'add a TCP port to SELinux\'s list of allowed contexts' },
      ],
      scenarios: [
        { task: 'Let SELinux accept TCP port 8080 with context http_port_t', accepted: ['sudo semanage port -a -t http_port_t -p tcp 8080'] },
      ],
    },
  ],
};
