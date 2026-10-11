const WEEKS = require('../weeks');
module.exports = {
  category: 'firewall-security',
  week: WEEKS.W8_TH13,
  commands: [
    {
      name: 'ufw enable',
      description: 'turn on the UFW (Uncomplicated Firewall) firewall',
      flags: [],
      scenarios: [
        { task: 'Turn on the UFW firewall', accepted: ['sudo ufw enable'] },
      ],
    },
    {
      name: 'ufw disable',
      description: 'turn off the UFW firewall',
      flags: [],
      scenarios: [
        { task: 'Turn off the UFW firewall', accepted: ['sudo ufw disable'] },
      ],
    },
    {
      name: 'ufw status',
      description: 'show UFW\'s current status and list of rules',
      flags: [
        { flag: 'verbose', meaning: 'show status with more detailed info (default policy...)' },
        { flag: 'numbered', meaning: 'show the rule list with numbers, used to delete by number' },
      ],
      scenarios: [
        { task: 'View UFW\'s current status and rule list', accepted: ['sudo ufw status'] },
        { task: 'View the UFW rule list with numbers for easy deletion', accepted: ['sudo ufw status numbered'] },
      ],
    },
    {
      name: 'ufw allow',
      description: 'add a rule allowing traffic through the firewall',
      flags: [
        { flag: '<port>', meaning: 'allow access to a specific port (both TCP and UDP)' },
        { flag: '<port>/tcp', meaning: 'only allow access to that port over TCP' },
        { flag: 'from <ip>', meaning: 'only allow access from a specific source IP address' },
        { flag: 'from <ip> to any port <port>', meaning: 'allow a specific source IP to access a specific port' },
      ],
      scenarios: [
        { task: 'Allow access to the SSH port (22) via UFW', accepted: ['sudo ufw allow 22', 'sudo ufw allow ssh', 'sudo ufw allow 22/tcp'] },
        { task: 'Allow access to port 80 (HTTP) via UFW', accepted: ['sudo ufw allow 80', 'sudo ufw allow 80/tcp', 'sudo ufw allow http'] },
        { task: 'Only allow IP address 192.168.1.100 to access the SSH port (22)', accepted: ['sudo ufw allow from 192.168.1.100 to any port 22'] },
      ],
    },
    {
      name: 'ufw deny',
      description: 'add a rule denying (blocking) traffic through the firewall',
      flags: [
        { flag: '<port>', meaning: 'block access to a specific port' },
        { flag: 'from <ip>', meaning: 'block access from a specific source IP address' },
      ],
      scenarios: [
        { task: 'Block all access from IP address 203.0.113.5', accepted: ['sudo ufw deny from 203.0.113.5'] },
        { task: 'Block access to port 23 (Telnet) via UFW', accepted: ['sudo ufw deny 23'] },
      ],
    },
    {
      name: 'ufw delete',
      description: 'remove a rule previously added to UFW',
      flags: [
        { flag: 'allow <port>', meaning: 'remove the allow rule for a specific port/service by repeating that rule with delete' },
        { flag: '<number>', meaning: 'remove a rule by its number (from ufw status numbered)' },
      ],
      scenarios: [
        { task: 'Remove the previously-added rule allowing port 80', accepted: ['sudo ufw delete allow 80'] },
        { task: 'Remove rule number 3 in the UFW list', accepted: ['sudo ufw delete 3'] },
      ],
    },
    {
      name: 'ufw default',
      description: 'set the default policy for traffic that doesn\'t match any rule (incoming/outgoing)',
      flags: [
        { flag: 'deny incoming', meaning: 'by default deny every incoming connection unless a separate allow rule exists' },
        { flag: 'allow outgoing', meaning: 'by default allow every outgoing connection' },
      ],
      scenarios: [
        { task: 'Set the default policy to deny all incoming connections', accepted: ['sudo ufw default deny incoming'] },
      ],
    },
    {
      name: 'iptables',
      description: 'a low-level packet-filtering tool directly manipulating the kernel\'s netfilter table (the foundation underneath UFW)',
      flags: [
        { flag: '-L', meaning: 'list the current rules' },
        { flag: '-A INPUT -p tcp --dport <port> -j ACCEPT', meaning: 'add a rule allowing TCP packets to a specific port' },
        { flag: '-A INPUT -s <ip> -j DROP', meaning: 'add a rule blocking all packets from a specific IP address' },
      ],
      scenarios: [
        { task: 'List every current iptables rule', accepted: ['sudo iptables -L'] },
      ],
    },
    {
      name: 'fail2ban-client status',
      description: 'view the status of Fail2ban\'s currently active jails (brute-force protection rules)',
      flags: [],
      scenarios: [
        { task: 'View the status of Fail2ban\'s currently active jails', accepted: ['sudo fail2ban-client status'] },
      ],
    },
    {
      name: 'fail2ban-client status sshd',
      description: 'view detailed status of Fail2ban\'s sshd jail, including the list of currently banned IPs',
      flags: [],
      scenarios: [
        { task: 'View the list of IPs currently banned by Fail2ban in the sshd jail', accepted: ['sudo fail2ban-client status sshd'] },
      ],
    },
    {
      name: 'sshd_config: PasswordAuthentication no',
      description: 'disable SSH password login, only allowing public-key authentication, in the /etc/ssh/sshd_config file',
      flags: [],
      scenarios: [
        { task: 'Set up SSH to only allow key-based login (disable password login) in sshd_config', accepted: ['PasswordAuthentication no'] },
      ],
    },
  ],
};
