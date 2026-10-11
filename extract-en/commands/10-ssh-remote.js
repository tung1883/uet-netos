const WEEKS = require('../weeks');
module.exports = {
  category: 'ssh-remote',
  week: WEEKS.W5_TH7,
  commands: [
    {
      name: 'ssh',
      description: 'connect and log in remotely to another server via the encrypted SSH protocol',
      flags: [
        { flag: '-p <port>', meaning: 'specify an SSH port other than the default 22' },
        { flag: '-i <keyfile>', meaning: 'specify a private key file to use for authentication' },
        { flag: '-L <local>:<host>:<remote>', meaning: 'set up local port forwarding' },
        { flag: '-v', meaning: 'show detailed debug info during the connection process' },
        { flag: '-N', meaning: 'don\'t execute a remote command, only used for setting up forwarding' },
        { flag: '-X', meaning: 'enable X11 forwarding, letting a remote graphical app display locally' },
        { flag: '-o StrictHostKeyChecking=no', meaning: 'skip manually confirming the host key on first connection' },
      ],
      scenarios: [
        { task: 'SSH-connect to server 192.168.1.10 with account student', accepted: ['ssh student@192.168.1.10'] },
        { task: 'SSH-connect to 192.168.1.10 using port 2222', accepted: ['ssh -p 2222 student@192.168.1.10'] },
        { task: 'SSH-connect to a server using private key ~/.ssh/id_rsa_lab', accepted: ['ssh -i ~/.ssh/id_rsa_lab student@192.168.1.10'] },
        { task: 'Run the command "uptime" remotely on server 192.168.1.10 without opening an interactive session', accepted: ['ssh student@192.168.1.10 uptime', 'ssh student@192.168.1.10 "uptime"'] },
        { task: 'SSH-connect to 192.168.1.10 in detailed debug mode to diagnose a connection issue', accepted: ['ssh -v student@192.168.1.10'] },
      ],
    },
    {
      name: 'ssh-keygen',
      description: 'generate a public/private key pair for SSH authentication',
      flags: [
        { flag: '-t rsa', meaning: 'specify the key algorithm as RSA' },
        { flag: '-b <bits>', meaning: 'specify the key length (number of bits), e.g. 4096' },
        { flag: '-f <file>', meaning: 'specify the filename to save the key as' },
      ],
      scenarios: [
        { task: 'Generate an RSA SSH key pair with length 4096 bits', accepted: ['ssh-keygen -t rsa -b 4096'] },
      ],
    },
    {
      name: 'ssh-copy-id',
      description: 'copy the current user\'s public key to a remote server to set up passwordless login',
      flags: [
        { flag: '-i <keyfile>', meaning: 'specify a particular public key file to copy' },
      ],
      scenarios: [
        { task: 'Copy the current user\'s public key to account student on server 192.168.10.20', accepted: ['ssh-copy-id student@192.168.10.20'] },
        { task: 'Copy the public key to account root on server 10.0.0.5 using port 2222', accepted: ['ssh-copy-id -p 2222 root@10.0.0.5'] },
      ],
    },
    {
      name: 'scp',
      description: 'securely copy files/directories between two machines over the SSH protocol',
      flags: [
        { flag: '-r', meaning: 'copy recursively, used when copying a directory' },
        { flag: '-P <port>', meaning: 'specify an SSH port other than the default (note capital P, unlike ssh -p)' },
      ],
      scenarios: [
        { task: 'Copy local.txt to the /tmp directory on server 192.168.1.10 with account student', accepted: ['scp local.txt student@192.168.1.10:/tmp'] },
        { task: 'Recursively copy directory /data from a remote server to the current directory', accepted: ['scp -r student@192.168.1.10:/data .'] },
      ],
    },
    {
      name: 'sftp',
      description: 'interactively transfer files over the SFTP (SSH File Transfer Protocol) protocol',
      flags: [
        { flag: '-P <port>', meaning: 'specify an SSH port other than the default' },
      ],
      scenarios: [
        { task: 'SFTP-connect to server 192.168.1.10 with account student', accepted: ['sftp student@192.168.1.10'] },
      ],
    },
    {
      name: 'systemctl restart ssh',
      description: 'restart the SSH server service after editing /etc/ssh/sshd_config',
      flags: [],
      scenarios: [
        { task: 'Restart the SSH server service after editing sshd_config', accepted: ['sudo systemctl restart ssh', 'sudo systemctl restart sshd'] },
      ],
    },
    {
      name: 'sshd -t',
      description: 'check the syntax of the SSH server configuration file (sshd_config) before applying it, avoiding locking yourself out of SSH due to a config error',
      flags: [],
      scenarios: [
        { task: 'Check the syntax of configuration file sshd_config before restarting the service', accepted: ['sudo sshd -t'] },
      ],
    },
  ],
};
