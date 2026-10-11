const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-2',
  week: WEEKS.EXTRA_2,
  commands: [
    {
      name: 'tcpdump',
      description: 'capture and analyze network packets directly on a network interface',
      flags: [
        { flag: '-i <iface>', meaning: 'specify the network interface to capture packets on' },
        { flag: '-w <file>', meaning: 'save the captured packets to a file (pcap format)' },
        { flag: 'port <n>', meaning: 'only capture packets related to a specific port' },
      ],
      scenarios: [
        { task: 'Capture packets on interface eth0, related to port 80 only', accepted: ['sudo tcpdump -i eth0 port 80'] },
        { task: 'Capture packets on eth0 and save them to file capture.pcap', accepted: ['sudo tcpdump -i eth0 -w capture.pcap'] },
      ],
    },
    {
      name: 'nc',
      description: 'netcat, a versatile tool for reading/writing data over TCP/UDP connections, used to test network ports',
      flags: [
        { flag: '-z', meaning: 'only scan whether a port is open, without sending data' },
        { flag: '-v', meaning: 'show verbose details' },
        { flag: '-l', meaning: 'run in listen mode, acting as a server' },
      ],
      scenarios: [
        { task: 'Check whether port 22 on server 192.168.1.10 is open using netcat', accepted: ['nc -zv 192.168.1.10 22'] },
      ],
    },
    {
      name: 'arp',
      description: 'show or edit the ARP table (mapping IP addresses to MAC addresses) on the system',
      flags: [
        { flag: '-a', meaning: 'show the entire current ARP table' },
      ],
      scenarios: [
        { task: 'View the system\'s current ARP table', accepted: ['arp -a'] },
      ],
    },
    {
      name: 'whois',
      description: 'look up registration information (owner, expiration date) for a domain',
      flags: [],
      scenarios: [
        { task: 'Look up registration info for domain example.com', accepted: ['whois example.com'] },
      ],
    },
    {
      name: 'ip neigh',
      description: 'show the neighbor table (equivalent to ARP) using the modern ip tool',
      flags: [],
      scenarios: [
        { task: 'View the current neighbor (ARP) table using the ip command', accepted: ['ip neigh'] },
      ],
    },
    {
      name: 'nmap',
      description: 'scan for open ports and services on a host or network range',
      flags: [
        { flag: '-p <port>', meaning: 'only scan a specific port' },
        { flag: '-sV', meaning: 'detect the version of services running on open ports' },
      ],
      scenarios: [
        { task: 'Scan for open ports on server 192.168.1.10', accepted: ['nmap 192.168.1.10'] },
      ],
    },
    {
      name: 'swapon',
      description: 'activate a swap area or file as virtual memory',
      flags: [
        { flag: '-a', meaning: 'activate every swap entry declared in /etc/fstab' },
        { flag: '-s', meaning: 'show a summary of currently active swap areas' },
      ],
      scenarios: [
        { task: 'Activate swap file /swapfile', accepted: ['sudo swapon /swapfile'] },
        { task: 'View a summary of currently active swap areas', accepted: ['swapon -s'] },
      ],
    },
    {
      name: 'swapoff',
      description: 'deactivate a swap area or file',
      flags: [],
      scenarios: [
        { task: 'Deactivate swap file /swapfile', accepted: ['sudo swapoff /swapfile'] },
      ],
    },
    {
      name: 'mkswap',
      description: 'format a file or partition as a swap area',
      flags: [],
      scenarios: [
        { task: 'Format file /swapfile as a swap area', accepted: ['sudo mkswap /swapfile'] },
      ],
    },
    {
      name: 'tune2fs',
      description: 'view or edit the parameters of an ext2/3/4 filesystem (label, UUID, check count...)',
      flags: [
        { flag: '-l <device>', meaning: 'list all parameter info for the filesystem' },
      ],
      scenarios: [
        { task: 'View the parameter info for the filesystem on /dev/sdb1', accepted: ['sudo tune2fs -l /dev/sdb1'] },
      ],
    },
    {
      name: 'chattr',
      description: 'change special attributes of a file on an ext filesystem (e.g. immutable)',
      flags: [
        { flag: '+i', meaning: 'set the immutable attribute, preventing edit/delete/rename of the file even by root' },
        { flag: '-i', meaning: 'remove the immutable attribute' },
      ],
      scenarios: [
        { task: 'Make file important.conf immutable (cannot be edited/deleted)', accepted: ['sudo chattr +i important.conf'] },
      ],
    },
    {
      name: 'lsattr',
      description: 'list a file\'s current special attributes on an ext filesystem',
      flags: [],
      scenarios: [
        { task: 'View the current special attributes of file important.conf', accepted: ['lsattr important.conf'] },
      ],
    },
    {
      name: 'strace',
      description: 'trace and log the system calls a process makes, used for debugging',
      flags: [
        { flag: '-p <pid>', meaning: 'attach to and trace an already-running process by PID' },
      ],
      scenarios: [
        { task: 'Trace the system calls of the running process with PID 1234', accepted: ['sudo strace -p 1234'] },
      ],
    },
    {
      name: 'ldd',
      description: 'show the list of shared libraries a program depends on',
      flags: [],
      scenarios: [
        { task: 'View the shared libraries that program /bin/ls depends on', accepted: ['ldd /bin/ls'] },
      ],
    },
    {
      name: 'systemd-analyze',
      description: 'analyze system boot time, helping identify which service slows down the boot process',
      flags: [
        { flag: 'blame', meaning: 'list services by boot time, slowest first' },
      ],
      scenarios: [
        { task: 'See which service slows down the system\'s boot time the most', accepted: ['systemd-analyze blame'] },
        { task: 'View the total boot time from the most recent boot', accepted: ['systemd-analyze'] },
      ],
    },
    {
      name: 'loginctl',
      description: 'manage and view user login session info via systemd-logind',
      flags: [
        { flag: 'list-sessions', meaning: 'list the current login sessions on the system' },
      ],
      scenarios: [
        { task: 'View the list of current login sessions on the system', accepted: ['loginctl list-sessions'] },
      ],
    },
    {
      name: 'getent',
      description: 'look up info from system databases (passwd, group, hosts...) via the Name Service Switch',
      flags: [
        { flag: 'passwd <user>', meaning: 'look up a user account\'s info from the passwd source (local or LDAP)' },
        { flag: 'hosts <name>', meaning: 'look up the IP address of a hostname' },
      ],
      scenarios: [
        { task: 'Look up account alice\'s info from the system (including LDAP if present)', accepted: ['getent passwd alice'] },
      ],
    },
    {
      name: 'su -c',
      description: 'run a single command with another user\'s privileges then return immediately, without opening a new shell',
      flags: [],
      scenarios: [
        { task: 'Run the command "whoami" with root privileges using su', accepted: ['su -c whoami', 'su -c "whoami"'] },
      ],
    },
    {
      name: 'xz',
      description: 'compress a file with the xz algorithm, a higher compression ratio than gzip but slower',
      flags: [
        { flag: '-d', meaning: 'decompress a .xz file' },
        { flag: '-k', meaning: 'keep the original file after compressing' },
      ],
      scenarios: [
        { task: 'Compress file data.tar into data.tar.xz, keeping the original file', accepted: ['xz -k data.tar'] },
      ],
    },
    {
      name: 'zip',
      description: 'compress and package multiple files/directories into a .zip file',
      flags: [
        { flag: '-r', meaning: 'compress recursively through every subdirectory' },
      ],
      scenarios: [
        { task: 'Recursively compress directory /data into archive.zip', accepted: ['zip -r archive.zip /data'] },
      ],
    },
    {
      name: 'unzip',
      description: 'extract a .zip file',
      flags: [
        { flag: '-d <directory>', meaning: 'specify the destination directory to extract into' },
      ],
      scenarios: [
        { task: 'Extract archive.zip into directory /extracted', accepted: ['unzip archive.zip -d /extracted'] },
      ],
    },
    {
      name: 'dd',
      description: 'copy and convert data at the block level, commonly used to create disk images or write an ISO to a USB drive',
      flags: [
        { flag: 'if=<source>', meaning: 'specify the source input file/device' },
        { flag: 'of=<destination>', meaning: 'specify the destination output file/device' },
        { flag: 'bs=<size>', meaning: 'specify the size of each block read/written at a time' },
        { flag: 'status=progress', meaning: 'show the copy progress in real time' },
      ],
      scenarios: [
        { task: 'Write image file ubuntu.iso to USB drive /dev/sdb, showing progress', accepted: ['sudo dd if=ubuntu.iso of=/dev/sdb bs=4M status=progress'] },
      ],
    },
    {
      name: 'badblocks',
      description: 'scan a storage device to find physically bad blocks',
      flags: [
        { flag: '-v', meaning: 'show verbose details of the scanning process' },
      ],
      scenarios: [
        { task: 'Scan for bad blocks on disk /dev/sdb', accepted: ['sudo badblocks -v /dev/sdb'] },
      ],
    },
    {
      name: 'smartctl',
      description: 'read a disk\'s S.M.A.R.T. health info, predicting the risk of hardware failure',
      flags: [
        { flag: '-a <device>', meaning: 'show all the S.M.A.R.T. info for the disk' },
      ],
      scenarios: [
        { task: 'View all S.M.A.R.T. health info for disk /dev/sda', accepted: ['sudo smartctl -a /dev/sda'] },
      ],
    },
    {
      name: 'apt-cache policy',
      description: 'view the currently installed package version and the versions available from the repositories',
      flags: [],
      scenarios: [
        { task: 'View the installed version and available versions of the nginx package', accepted: ['apt-cache policy nginx'] },
      ],
    },
    {
      name: 'systemctl list-timers',
      description: 'list the systemd timers (the modern replacement for cron) currently scheduled',
      flags: [],
      scenarios: [
        { task: 'View the list of currently scheduled systemd timers', accepted: ['systemctl list-timers'] },
      ],
    },
    {
      name: 'hexdump',
      description: 'display a binary file\'s content in hexadecimal form',
      flags: [
        { flag: '-C', meaning: 'also show the offset address column and the corresponding ASCII characters' },
      ],
      scenarios: [
        { task: 'View the content of binary file file.bin in hex along with ASCII', accepted: ['hexdump -C file.bin'] },
      ],
    },
    {
      name: 'base64',
      description: 'encode or decode data in base64 format',
      flags: [
        { flag: '-d', meaning: 'decode base64 data back to its original form' },
      ],
      scenarios: [
        { task: 'Encode the content of file secret.txt into base64', accepted: ['base64 secret.txt'] },
      ],
    },
    {
      name: 'openssl enc',
      description: 'encrypt or decrypt a file using a symmetric algorithm (e.g. AES)',
      flags: [
        { flag: '-aes-256-cbc', meaning: 'specify the AES 256-bit CBC-mode encryption algorithm' },
        { flag: '-d', meaning: 'decrypt instead of encrypt' },
      ],
      scenarios: [
        { task: 'Encrypt file secret.txt with AES-256-CBC into secret.enc', accepted: ['openssl enc -aes-256-cbc -in secret.txt -out secret.enc'] },
      ],
    },
  ],
};
