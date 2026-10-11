const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-general5',
  week: WEEKS.EXTRA_6,
  commands: [
    {
      name: 'curl -u',
      description: 'send an HTTP request with Basic Auth credentials (username, password)',
      flags: [],
      scenarios: [
        { task: 'Send a GET request to http://localhost/api with Basic Auth as user admin', accepted: ['curl -u admin http://localhost/api'] },
      ],
    },
    {
      name: 'curl --head',
      description: 'only send a HEAD request, getting just the response headers, without downloading the page content',
      flags: [],
      scenarios: [
        { task: 'Get only the response headers of http://example.com without downloading the content', accepted: ['curl --head http://example.com', 'curl -I http://example.com'] },
      ],
    },
    {
      name: 'wget --mirror',
      description: 'download an entire website to the machine, preserving directory structure, used to back up/mirror a site',
      flags: [],
      scenarios: [
        { task: 'Download the entire website http://example.com to the machine, preserving directory structure', accepted: ['wget --mirror http://example.com'] },
      ],
    },
    {
      name: 'ping -i',
      description: 'set the wait interval between sent ping packets',
      flags: [],
      scenarios: [
        { task: 'Ping 8.8.8.8 with a 2-second interval between each send', accepted: ['ping -i 2 8.8.8.8'] },
      ],
    },
    {
      name: 'ping -s',
      description: 'set the size of packets sent when pinging, used to test MTU or stability with large packets',
      flags: [],
      scenarios: [
        { task: 'Ping 8.8.8.8 with a packet size of 1000 bytes', accepted: ['ping -s 1000 8.8.8.8'] },
      ],
    },
    {
      name: 'ss -o',
      description: 'show timer info for each socket, useful when debugging a hung TCP connection',
      flags: [],
      scenarios: [
        { task: 'View timer info for open TCP sockets', accepted: ['ss -to'] },
      ],
    },
    {
      name: 'ip -c addr',
      description: 'show IP addresses with color to distinguish between parts of the info more clearly',
      flags: [],
      scenarios: [
        { task: 'Show network interface IP addresses with distinguishing colors', accepted: ['ip -c addr'] },
      ],
    },
    {
      name: 'traceroute -I',
      description: 'run traceroute using ICMP packets instead of the UDP default, similar to how Windows tracert works',
      flags: [],
      scenarios: [
        { task: 'Run traceroute to example.com using ICMP packets instead of UDP', accepted: ['traceroute -I example.com'] },
      ],
    },
  ],
};
