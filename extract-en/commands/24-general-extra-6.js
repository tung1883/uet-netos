const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-6',
  week: WEEKS.EXTRA_6,
  commands: [
    {
      name: 'ss -s',
      description: 'show an overall summary of the number of open sockets by type (TCP, UDP...)',
      flags: [],
      scenarios: [
        { task: 'View an overall summary of open sockets on the system', accepted: ['ss -s'] },
      ],
    },
    {
      name: 'ss -tn state established',
      description: 'list TCP connections currently in the established state, numerically',
      flags: [],
      scenarios: [
        { task: 'List the TCP connections currently in the established state', accepted: ['ss -tn state established'] },
      ],
    },
    {
      name: 'ip route get',
      description: 'show the specific route the system will use to reach a destination IP address',
      flags: [],
      scenarios: [
        { task: 'Check the route the system would use to reach address 8.8.8.8', accepted: ['ip route get 8.8.8.8'] },
      ],
    },
    {
      name: 'ip route del',
      description: 'remove a static route from the routing table',
      flags: [],
      scenarios: [
        { task: 'Remove the static route to network 10.0.0.0/24 via gateway 192.168.1.254', accepted: ['sudo ip route del 10.0.0.0/24 via 192.168.1.254'] },
      ],
    },
    {
      name: 'netplan generate',
      description: 'trial-generate network configuration from Netplan\'s YAML files to check syntax without actually applying it',
      flags: [],
      scenarios: [
        { task: 'Check Netplan configuration syntax without actually applying it', accepted: ['sudo netplan generate'] },
      ],
    },
    {
      name: 'netplan --debug apply',
      description: 'apply the Netplan configuration with detailed debug info, useful when network config fails for an unclear reason',
      flags: [],
      scenarios: [
        { task: 'Apply the Netplan configuration with detailed debug info to diagnose an error', accepted: ['sudo netplan --debug apply'] },
      ],
    },
    {
      name: 'curl -X POST',
      description: 'send an HTTP POST request, usually with data, used to test an API',
      flags: [
        { flag: '-d "<data>"', meaning: 'include data in the request\'s body' },
        { flag: '-H "<header>"', meaning: 'specify an extra custom HTTP header for the request' },
      ],
      scenarios: [
        { task: 'Send a POST request to http://localhost/api with JSON data {"name":"test"}', accepted: ["curl -X POST -d '{\"name\":\"test\"}' http://localhost/api"] },
      ],
    },
    {
      name: 'wget -r',
      description: 'recursively download an entire website\'s directory tree (mirror part of a website)',
      flags: [],
      scenarios: [
        { task: 'Recursively download the entire content from http://example.com', accepted: ['wget -r http://example.com'] },
      ],
    },
    {
      name: 'apt-mark hold',
      description: 'pin a package at its current version, preventing apt upgrade from automatically upgrading it',
      flags: [],
      scenarios: [
        { task: 'Pin the nginx package at its current version, preventing auto-upgrade', accepted: ['sudo apt-mark hold nginx'] },
      ],
    },
    {
      name: 'apt-mark unhold',
      description: 'remove the version-pin state, letting a package be upgraded normally again',
      flags: [],
      scenarios: [
        { task: 'Let the nginx package be upgraded normally again', accepted: ['sudo apt-mark unhold nginx'] },
      ],
    },
    {
      name: 'dpkg-reconfigure',
      description: 're-run the initial configuration process (debconf) of an installed package',
      flags: [],
      scenarios: [
        { task: 'Re-run the initial configuration for the tzdata package (choosing the timezone)', accepted: ['sudo dpkg-reconfigure tzdata'] },
      ],
    },
    {
      name: 'history -c',
      description: 'clear the entire command history of the current shell session',
      flags: [],
      scenarios: [
        { task: 'Clear the entire command history of the current session', accepted: ['history -c'] },
      ],
    },
    {
      name: 'unalias',
      description: 'remove a previously defined alias',
      flags: [
        { flag: '-a', meaning: 'remove every defined alias' },
      ],
      scenarios: [
        { task: 'Remove the previously defined alias named ll', accepted: ['unalias ll'] },
      ],
    },
    {
      name: 'ss -tlnp | grep',
      description: 'combine ss with grep to quickly check whether a specific port is currently listening',
      flags: [],
      scenarios: [
        { task: 'Quickly check whether port 3306 (MySQL) is currently listening', accepted: ['sudo ss -tlnp | grep 3306', 'ss -tlnp | grep 3306'] },
      ],
    },
    {
      name: 'systemctl show -p',
      description: 'show the value of a specific property of a systemd unit, instead of all the info',
      flags: [],
      scenarios: [
        { task: 'View the value of the MainPID property of the nginx service', accepted: ['systemctl show -p MainPID nginx'] },
      ],
    },
    {
      name: 'systemctl reset-failed',
      description: 'clear the "failed" state of units, letting them be started normally again',
      flags: [],
      scenarios: [
        { task: 'Clear the failed state of every unit on the system', accepted: ['sudo systemctl reset-failed'] },
      ],
    },
    {
      name: 'ip -4 addr',
      description: 'only show IPv4 addresses on network interfaces, skipping IPv6',
      flags: [],
      scenarios: [
        { task: 'Only show the IPv4 addresses of network interfaces, skipping IPv6', accepted: ['ip -4 addr'] },
      ],
    },
    {
      name: 'ip -6 addr',
      description: 'only show IPv6 addresses on network interfaces, skipping IPv4',
      flags: [],
      scenarios: [
        { task: 'Only show the IPv6 addresses of network interfaces', accepted: ['ip -6 addr'] },
      ],
    },
  ],
};
