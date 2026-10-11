const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-ssh-network2',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ssh -D',
      description: 'set up a dynamic SOCKS proxy over an SSH connection, letting you route browser traffic through the SSH server',
      flags: [],
      scenarios: [
        { task: 'Create a dynamic SOCKS proxy on local port 1080 via an SSH connection to a server', accepted: ['ssh -D 1080 student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh -R',
      description: 'set up remote port forwarding, letting a remote server reach back to a port on the local machine',
      flags: [],
      scenarios: [
        { task: 'Forward port 8080 on the remote server to port 80 on the local machine', accepted: ['ssh -R 8080:localhost:80 student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh-add',
      description: 'add a private key to ssh-agent so you don\'t need to retype the passphrase every connection',
      flags: [
        { flag: '-l', meaning: 'list the keys currently managed by ssh-agent' },
      ],
      scenarios: [
        { task: 'Add private key ~/.ssh/id_rsa to ssh-agent', accepted: ['ssh-add ~/.ssh/id_rsa'] },
        { task: 'View the list of keys currently managed by ssh-agent', accepted: ['ssh-add -l'] },
      ],
    },
    {
      name: 'ssh-keyscan',
      description: 'collect the public (host) key of a remote server, commonly used to add to known_hosts before connecting',
      flags: [],
      scenarios: [
        { task: 'Get the host key of server 192.168.1.10 to add to known_hosts', accepted: ['ssh-keyscan 192.168.1.10'] },
      ],
    },
    {
      name: 'scp -r',
      description: 'recursively copy a directory over SCP, including everything inside it',
      flags: [],
      scenarios: [
        { task: 'Recursively copy directory /data to a remote server into /backup', accepted: ['scp -r /data student@192.168.1.10:/backup'] },
      ],
    },
    {
      name: 'rsync over ssh custom port',
      description: 'sync with rsync over SSH when the SSH server runs on a non-default port',
      flags: [],
      scenarios: [
        { task: 'Sync directory /data to a remote server over SSH on port 2222', accepted: ["rsync -avz -e 'ssh -p 2222' /data/ user@remote:/backup/"] },
      ],
    },
    {
      name: 'ip link set mtu',
      description: 'change the MTU value (maximum packet size) of a network interface',
      flags: [],
      scenarios: [
        { task: 'Set the MTU of interface eth0 to 1400', accepted: ['sudo ip link set eth0 mtu 1400'] },
      ],
    },
    {
      name: 'ip addr show up',
      description: 'only show network interfaces that are currently up (in the UP state)',
      flags: [],
      scenarios: [
        { task: 'Only show network interfaces currently in the UP state', accepted: ['ip addr show up'] },
      ],
    },
    {
      name: 'nmcli connection modify',
      description: 'edit a property of a network connection already configured in NetworkManager',
      flags: [
        { flag: 'ipv4.addresses <ip/mask>', meaning: 'set a static IPv4 address for the connection' },
        { flag: 'ipv4.method manual', meaning: 'switch the connection to manual (static) IP configuration instead of DHCP' },
      ],
      scenarios: [
        { task: 'Set static IP address 192.168.1.50/24 for connection named "Wired connection 1"', accepted: ['nmcli connection modify "Wired connection 1" ipv4.addresses 192.168.1.50/24 ipv4.method manual'] },
      ],
    },
    {
      name: 'netplan ip rule',
      description: 'view the current Netplan configuration before applying changes, double-checking the YAML file\'s content',
      flags: [],
      scenarios: [
        { task: 'View the content of the Netplan configuration file at /etc/netplan/00-installer-config.yaml', accepted: ['cat /etc/netplan/00-installer-config.yaml'] },
      ],
    },
  ],
};
