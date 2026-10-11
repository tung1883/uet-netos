const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-dns-dhcp2',
  week: WEEKS.W5_TH8,
  commands: [
    {
      name: 'dig AXFR',
      description: 'attempt a full zone transfer (AXFR) from a DNS server, used to test DNS configuration security',
      flags: [],
      scenarios: [
        { task: 'Attempt a full zone transfer of zone example.com from DNS server ns1.example.com', accepted: ['dig AXFR example.com @ns1.example.com'] },
      ],
    },
    {
      name: 'dig +trace',
      description: 'trace the entire DNS resolution process from the root servers down to the final authoritative server',
      flags: [],
      scenarios: [
        { task: 'Trace the entire DNS resolution process for example.com starting from the root servers', accepted: ['dig +trace example.com'] },
      ],
    },
    {
      name: 'dig TXT',
      description: 'look up the TXT record of a domain, commonly used for domain verification or SPF/DKIM configuration',
      flags: [],
      scenarios: [
        { task: 'Look up the TXT record of example.com (e.g. to check SPF)', accepted: ['dig example.com TXT', 'dig TXT example.com'] },
      ],
    },
    {
      name: 'dig SOA',
      description: 'look up the SOA (Start of Authority) record of a zone, holding info about the primary name server and serial number',
      flags: [],
      scenarios: [
        { task: 'Look up the SOA record of zone example.com', accepted: ['dig example.com SOA', 'dig SOA example.com'] },
      ],
    },
    {
      name: 'rndc reload',
      description: 'ask the BIND9 service to reload its configuration/zones without restarting the whole service',
      flags: [],
      scenarios: [
        { task: 'Ask BIND9 to reload all zones without restarting the service', accepted: ['sudo rndc reload'] },
      ],
    },
    {
      name: 'rndc flush',
      description: 'clear BIND9\'s entire current DNS resolution cache',
      flags: [],
      scenarios: [
        { task: 'Clear BIND9\'s entire current DNS cache', accepted: ['sudo rndc flush'] },
      ],
    },
    {
      name: 'systemd-resolve --flush-caches',
      description: 'clear the local DNS resolution cache managed by systemd-resolved',
      flags: [],
      scenarios: [
        { task: 'Clear systemd-resolved\'s local DNS cache', accepted: ['sudo systemd-resolve --flush-caches', 'sudo resolvectl flush-caches'] },
      ],
    },
    {
      name: 'dhcp-lease-list',
      description: 'list the IP addresses currently leased out by the DHCP server to clients',
      flags: [],
      scenarios: [
        { task: 'View the list of IP addresses currently leased by the DHCP server', accepted: ['dhcp-lease-list'] },
      ],
    },
    {
      name: 'cat /var/lib/dhcp/dhcpd.leases',
      description: 'directly view the file storing DHCP lease info granted on Ubuntu (isc-dhcp-server)',
      flags: [],
      scenarios: [
        { task: 'Directly view the content of the DHCP lease file on Ubuntu', accepted: ['cat /var/lib/dhcp/dhcpd.leases'] },
      ],
    },
    {
      name: 'systemctl restart isc-dhcp-server',
      description: 'restart the DHCP server service after editing the dhcpd.conf configuration file',
      flags: [],
      scenarios: [
        { task: 'Restart the DHCP server service after editing dhcpd.conf', accepted: ['sudo systemctl restart isc-dhcp-server'] },
      ],
    },
  ],
};
