const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-firewall-ufw',
  week: WEEKS.W8_TH13,
  commands: [
    {
      name: 'ufw allow proto',
      description: 'add a UFW rule allowing access restricted to a specific protocol (tcp/udp)',
      flags: [
        { flag: 'proto tcp from <ip> to any port <port>', meaning: 'only allow a source IP to access a port over TCP' },
        { flag: 'proto udp to any port <port>', meaning: 'allow access to a port over UDP' },
      ],
      scenarios: [
        { task: 'Allow address 10.0.0.5 to access port 5432 (PostgreSQL) over TCP', accepted: ['sudo ufw allow proto tcp from 10.0.0.5 to any port 5432'] },
        { task: 'Allow access to port 53 (DNS) over UDP', accepted: ['sudo ufw allow proto udp to any port 53', 'sudo ufw allow 53/udp'] },
        { task: 'Allow network range 192.168.1.0/24 to access port 22', accepted: ['sudo ufw allow from 192.168.1.0/24 to any port 22'] },
        { task: 'Allow access to a port range from 6000 to 6007 over TCP', accepted: ['sudo ufw allow 6000:6007/tcp'] },
      ],
    },
    {
      name: 'ufw limit',
      description: 'limit the number of connections to a port within a time window, protecting against brute-force attacks (e.g. limiting SSH)',
      flags: [],
      scenarios: [
        { task: 'Limit the number of connections to the SSH port to protect against brute-force attacks', accepted: ['sudo ufw limit ssh', 'sudo ufw limit 22', 'sudo ufw limit 22/tcp'] },
      ],
    },
    {
      name: 'ufw reload',
      description: 'reload all UFW firewall rules after manually editing the configuration',
      flags: [],
      scenarios: [
        { task: 'Reload UFW rules after manually editing the configuration file', accepted: ['sudo ufw reload'] },
      ],
    },
    {
      name: 'ufw app list',
      description: 'list the application profiles already registered with UFW, letting you allow by name instead of port number',
      flags: [],
      scenarios: [
        { task: 'View the list of application profiles registered with UFW', accepted: ['sudo ufw app list', 'ufw app list'] },
        { task: 'Allow access via the "Nginx Full" application profile (both HTTP and HTTPS)', accepted: ['sudo ufw allow "Nginx Full"', "sudo ufw allow 'Nginx Full'"] },
      ],
    },
    {
      name: 'iptables -A FORWARD',
      description: 'add a rule to the FORWARD chain, controlling packets passing through the machine (routing/NAT), unlike INPUT (packets destined for the machine itself)',
      flags: [],
      scenarios: [
        { task: 'Allow forwarding TCP packets to port 80 via iptables', accepted: ['sudo iptables -A FORWARD -p tcp --dport 80 -j ACCEPT'] },
      ],
    },
    {
      name: 'iptables -t nat',
      description: 'operate on iptables\' NAT table, used for port forwarding and masquerading',
      flags: [
        { flag: '-A PREROUTING -p tcp --dport <port> -j DNAT --to-destination <ip:port>', meaning: 'forward packets arriving at a port to a different internal address/port' },
        { flag: '-A POSTROUTING -j MASQUERADE', meaning: 'perform NAT masquerade, hiding internal IP addresses as packets go out' },
      ],
      scenarios: [
        { task: 'Forward port 8080 on the server to port 80 on internal machine 192.168.1.10', accepted: ['sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.10:80'] },
        { task: 'Enable NAT masquerade for all outgoing traffic', accepted: ['sudo iptables -t nat -A POSTROUTING -j MASQUERADE'] },
      ],
    },
    {
      name: 'iptables-save',
      description: 'export the current iptables rules to text form, used to save or back them up',
      flags: [],
      scenarios: [
        { task: 'Save all current iptables rules to file rules.v4', accepted: ['sudo iptables-save > rules.v4'] },
      ],
    },
    {
      name: 'iptables-restore',
      description: 'reload iptables rules from a file previously saved with iptables-save',
      flags: [],
      scenarios: [
        { task: 'Restore iptables rules from previously saved file rules.v4', accepted: ['sudo iptables-restore < rules.v4'] },
      ],
    },
    {
      name: 'iptables -F',
      description: 'flush every existing rule in a chain or the entire iptables table',
      flags: [],
      scenarios: [
        { task: 'Flush all current rules in iptables', accepted: ['sudo iptables -F'] },
      ],
    },
    {
      name: 'fail2ban-client set unbanip',
      description: 'unban a specific IP address that Fail2ban previously banned, before its ban expires',
      flags: [],
      scenarios: [
        { task: 'Unban IP address 203.0.113.5 from Fail2ban\'s sshd jail', accepted: ['sudo fail2ban-client set sshd unbanip 203.0.113.5'] },
      ],
    },
  ],
};
