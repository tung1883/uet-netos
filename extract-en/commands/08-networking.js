const WEEKS = require('../weeks');
module.exports = {
  category: 'networking',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ip addr',
      description: 'show or manage the IP addresses assigned to network interfaces',
      flags: [
        { flag: 'show', meaning: 'show every IP address on all network interfaces (default)' },
        { flag: '-br', meaning: 'show in a short format, one line per interface' },
        { flag: 'add <ip>/<mask> dev <iface>', meaning: 'assign an additional IP address to a network interface' },
        { flag: 'del <ip>/<mask> dev <iface>', meaning: 'remove an IP address from a network interface' },
        { flag: 'show dev <iface>', meaning: 'only show the IP address of a specific network interface' },
        { flag: 'flush dev <iface>', meaning: 'remove every IP address assigned on a network interface' },
      ],
      scenarios: [
        { task: 'Show network interface IP addresses in a short format', accepted: ['ip -br addr', 'ip -br a', 'ip -brief addr', 'ip -br address', 'ip -brief address', 'ip -br address show', 'ip -brief a', 'ip -brief address show'] },
        { task: 'Assign IP address 192.168.1.10/24 to interface eth0', accepted: ['sudo ip addr add 192.168.1.10/24 dev eth0'] },
        { task: 'View every IP address on all network interfaces', accepted: ['ip addr show', 'ip addr', 'ip a'] },
        { task: 'Only view the IP address assigned on interface ens33', accepted: ['ip addr show dev ens33', 'ip addr show ens33'] },
        { task: 'Remove IP address 192.168.1.10/24 from interface eth0', accepted: ['sudo ip addr del 192.168.1.10/24 dev eth0'] },
      ],
    },
    {
      name: 'ip link',
      description: 'show or change the state (up/down) of network interfaces',
      flags: [
        { flag: 'set <iface> up', meaning: 'bring up (enable) a network interface' },
        { flag: 'set <iface> down', meaning: 'bring down (disable) a network interface' },
      ],
      scenarios: [
        { task: 'Bring up network interface eth0', accepted: ['sudo ip link set eth0 up'] },
        { task: 'Bring down network interface eth0', accepted: ['sudo ip link set eth0 down'] },
      ],
    },
    {
      name: 'ip route',
      description: 'show or manage the system\'s routing table',
      flags: [
        { flag: 'show', meaning: 'show the current routing table (default)' },
        { flag: 'add default via <ip>', meaning: 'add a default route (default gateway)' },
        { flag: 'add <network>/<mask> via <ip>', meaning: 'add a static route to a specific network' },
      ],
      scenarios: [
        { task: 'Show the system\'s current routing table', accepted: ['ip route show', 'ip route', 'ip r', 'ip route list'] },
        { task: 'Add a default gateway of 192.168.1.1', accepted: ['sudo ip route add default via 192.168.1.1'] },
        { task: 'Add a static route to network 10.0.0.0/24 via gateway 192.168.1.254', accepted: ['sudo ip route add 10.0.0.0/24 via 192.168.1.254'] },
      ],
    },
    {
      name: 'nmcli',
      description: 'a command-line tool for managing network connections via NetworkManager',
      flags: [
        { flag: 'device status', meaning: 'show the status of every network device' },
        { flag: 'connection show', meaning: 'list configured network connections' },
        { flag: 'connection up <name>', meaning: 'activate a configured network connection' },
      ],
      scenarios: [
        { task: 'View network device status using nmcli', accepted: ['nmcli device status', 'nmcli dev status'] },
      ],
    },
    {
      name: 'netplan apply',
      description: 'apply the network configuration declared in Netplan\'s YAML files',
      flags: [
        { flag: '--debug', meaning: 'apply the configuration with detailed debug info' },
      ],
      scenarios: [
        { task: 'Apply the network configuration just edited in Netplan', accepted: ['sudo netplan apply'] },
      ],
    },
    {
      name: 'netplan try',
      description: 'try applying new network config, auto-rolling back if the user doesn\'t confirm within a time limit — safe for remote configuration',
      flags: [],
      scenarios: [
        { task: 'Safely try applying new network config while working remotely over SSH', accepted: ['sudo netplan try'] },
      ],
    },
    {
      name: 'ping',
      description: 'check network connectivity to another machine using ICMP echo request packets',
      flags: [
        { flag: '-c <n>', meaning: 'only send n packets then stop (sends continuously by default)' },
        { flag: '-i <seconds>', meaning: 'the wait interval between each send' },
      ],
      scenarios: [
        { task: 'Check connectivity to 8.8.8.8, sending only 4 packets', accepted: ['ping -c 4 8.8.8.8'] },
      ],
    },
    {
      name: 'traceroute',
      description: 'show the path (intermediate routers) a packet takes from the current machine to a destination',
      flags: [
        { flag: '-n', meaning: 'show numeric IP addresses, without resolving domain names (faster)' },
        { flag: '-m <n>', meaning: 'limit the maximum number of hops (intermediate routers) to probe' },
      ],
      scenarios: [
        { task: 'View the path packets take to google.com', accepted: ['traceroute google.com'] },
        { task: 'View the path to 8.8.8.8 showing only numeric IP addresses, without name resolution', accepted: ['traceroute -n 8.8.8.8'] },
      ],
    },
    {
      name: 'mtr',
      description: 'combines the functions of ping and traceroute, showing continuously-updating real-time path statistics',
      flags: [
        { flag: '-r', meaning: 'run in report mode, printing a summary then exiting instead of running continuously' },
        { flag: '-c <n>', meaning: 'specify the number of ping cycles sent to each hop before stopping' },
      ],
      scenarios: [
        { task: 'Continuously monitor the path and latency to 8.8.8.8', accepted: ['mtr 8.8.8.8'] },
        { task: 'Run mtr to 8.8.8.8 in report mode (non-interactive), printing the result then exiting', accepted: ['mtr -r 8.8.8.8'] },
      ],
    },
    {
      name: 'ss',
      description: 'show info about open network sockets (TCP/UDP connections), replacing netstat',
      flags: [
        { flag: '-t', meaning: 'only show TCP sockets' },
        { flag: '-u', meaning: 'only show UDP sockets' },
        { flag: '-l', meaning: 'only show listening sockets' },
        { flag: '-n', meaning: 'show numeric addresses and ports, without name resolution' },
        { flag: '-p', meaning: 'show the name of the process using the socket' },
      ],
      scenarios: [
        { task: 'View the list of listening TCP ports along with the process name', accepted: ['sudo ss -tlnp', 'ss -tlnp'] },
      ],
    },
    {
      name: 'netstat',
      description: 'an older tool showing network connection info, routing tables and interface statistics',
      flags: [
        { flag: '-tulnp', meaning: 'show listening TCP/UDP ports numerically, along with the process name' },
      ],
      scenarios: [
        { task: 'View listening ports using netstat', accepted: ['sudo netstat -tulnp', 'netstat -tulnp'] },
      ],
    },
    {
      name: 'curl',
      description: 'transfer data via network protocols (HTTP, FTP...), commonly used to test an API/web server',
      flags: [
        { flag: '-I', meaning: 'only fetch the HTTP response headers, without downloading the content' },
        { flag: '-o <file>', meaning: 'save the downloaded result into a given file' },
        { flag: '-L', meaning: 'automatically follow redirects' },
        { flag: '-X <method>', meaning: 'specify the HTTP method (GET, POST...)' },
      ],
      scenarios: [
        { task: 'Check the HTTP response headers of http://localhost', accepted: ['curl -I http://localhost'] },
        { task: 'Download the file from http://example.com/file.zip and save it as local.zip', accepted: ['curl -o local.zip http://example.com/file.zip'] },
      ],
    },
    {
      name: 'wget',
      description: 'download a file from a URL to the machine, supporting resuming an interrupted download',
      flags: [
        { flag: '-O <file>', meaning: 'specify the filename to save the downloaded result as' },
        { flag: '-c', meaning: 'resume a previously interrupted download' },
      ],
      scenarios: [
        { task: 'Download a file from http://example.com/file.zip', accepted: ['wget http://example.com/file.zip'] },
      ],
    },
    {
      name: 'ethtool',
      description: 'view or change network card parameters (speed, duplex, link status)',
      flags: [],
      scenarios: [
        { task: 'View parameters for network card eth0', accepted: ['sudo ethtool eth0', 'ethtool eth0'] },
      ],
    },
    {
      name: 'hostname',
      description: 'show or set the system\'s hostname',
      flags: [
        { flag: '-I', meaning: 'show all of the machine\'s IP addresses' },
      ],
      scenarios: [
        { task: 'View the machine\'s current hostname', accepted: ['hostname'] },
      ],
    },
    {
      name: 'hostnamectl',
      description: 'view or set the hostname and related system info via systemd',
      flags: [
        { flag: 'set-hostname <name>', meaning: 'set a new hostname for the system' },
      ],
      scenarios: [
        { task: 'Change the system hostname to server01', accepted: ['sudo hostnamectl set-hostname server01'] },
      ],
    },
  ],
};
