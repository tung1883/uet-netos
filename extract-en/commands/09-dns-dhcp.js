const WEEKS = require('../weeks');
module.exports = {
  category: 'dns-dhcp',
  week: WEEKS.W5_TH8,
  commands: [
    {
      name: 'dig',
      description: 'query detailed DNS information for a domain (A, MX, NS records...)',
      flags: [
        { flag: '<domain>', meaning: 'query the domain\'s default A record (IPv4 address)' },
        { flag: '<domain> MX', meaning: 'query the domain\'s MX (mail exchange) record' },
        { flag: '<domain> NS', meaning: 'query the domain\'s NS (name server) record' },
        { flag: '-x <ip>', meaning: 'reverse lookup from an IP address to a domain name' },
        { flag: '+short', meaning: 'only show a short result, skipping the detailed info' },
        { flag: '@<server>', meaning: 'specify a particular DNS server to send the query to' },
      ],
      scenarios: [
        { task: 'Look up the A record of domain example.com', accepted: ['dig example.com'] },
        { task: 'Look up the MX record of domain example.com', accepted: ['dig example.com MX', 'dig MX example.com'] },
        { task: 'Reverse-lookup the domain name from IP address 8.8.8.8', accepted: ['dig -x 8.8.8.8'] },
        { task: 'Look up the A record of example.com showing only a short result', accepted: ['dig example.com +short'] },
        { task: 'Look up example.com using DNS server 192.168.1.1', accepted: ['dig @192.168.1.1 example.com'] },
      ],
    },
    {
      name: 'nslookup',
      description: 'an interactive or command-line DNS lookup tool, simpler than dig',
      flags: [],
      scenarios: [
        { task: 'Look up the IP address of domain example.com using nslookup', accepted: ['nslookup example.com'] },
      ],
    },
    {
      name: 'host',
      description: 'a simple DNS lookup tool, commonly used for a quick name-resolution check',
      flags: [
        { flag: '-t <type>', meaning: 'specify the record type to look up (A, MX, NS...)' },
      ],
      scenarios: [
        { task: 'Quickly look up the IP address of example.com using host', accepted: ['host example.com'] },
      ],
    },
    {
      name: 'resolvectl',
      description: 'view the current DNS resolution status and configuration managed by systemd-resolved',
      flags: [
        { flag: 'status', meaning: 'show the DNS server currently in use for each network interface' },
      ],
      scenarios: [
        { task: 'View the DNS server the system is currently using', accepted: ['resolvectl status'] },
      ],
    },
    {
      name: 'systemctl restart bind9',
      description: 'restart the BIND9 DNS server service after editing a zone file or configuration',
      flags: [],
      scenarios: [
        { task: 'Restart the BIND9 service after editing a zone file', accepted: ['sudo systemctl restart bind9'] },
      ],
    },
    {
      name: 'named-checkzone',
      description: 'check the syntax of a BIND DNS zone file before applying it, avoiding service failures',
      flags: [],
      scenarios: [
        { task: 'Check the syntax of zone file db.example.com for domain example.com', accepted: ['named-checkzone example.com /etc/bind/db.example.com'] },
      ],
    },
    {
      name: 'named-checkconf',
      description: 'check the syntax of BIND\'s main configuration file (named.conf) before applying it',
      flags: [],
      scenarios: [
        { task: 'Check the syntax of configuration file named.conf', accepted: ['named-checkconf'] },
      ],
    },
    {
      name: 'dhclient',
      description: 'request or renew a dynamic IP address from a DHCP server for a network interface',
      flags: [
        { flag: '-r <iface>', meaning: 'release the leased IP address on a network interface' },
      ],
      scenarios: [
        { task: 'Request a new IP address from the DHCP server for interface eth0', accepted: ['sudo dhclient eth0'] },
        { task: 'Release the DHCP-leased IP address on eth0', accepted: ['sudo dhclient -r eth0'] },
      ],
    },
    {
      name: 'systemctl status isc-dhcp-server',
      description: 'check the running status of the DHCP server service on Ubuntu',
      flags: [],
      scenarios: [
        { task: 'Check the status of the DHCP server service on Ubuntu', accepted: ['sudo systemctl status isc-dhcp-server'] },
      ],
    },
  ],
};
