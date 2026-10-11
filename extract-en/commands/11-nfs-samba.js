const WEEKS = require('../weeks');
module.exports = {
  category: 'nfs-samba',
  week: WEEKS.W6_TH9,
  commands: [
    {
      name: 'exportfs',
      description: 'manage and apply the list of directories shared via NFS (defined in /etc/exports)',
      flags: [
        { flag: '-a', meaning: 'export all directories declared in /etc/exports' },
        { flag: '-r', meaning: 'reload the entire exports configuration, syncing with the current /etc/exports file' },
        { flag: '-v', meaning: 'show detailed list of the directories currently being exported' },
      ],
      scenarios: [
        { task: 'Reapply the entire NFS share configuration after editing /etc/exports', accepted: ['sudo exportfs -ra', 'sudo exportfs -a'] },
        { task: 'View the list of directories currently shared via NFS', accepted: ['sudo exportfs -v', 'exportfs -v'] },
      ],
    },
    {
      name: 'showmount',
      description: 'show the list of NFS directories currently shared by a server',
      flags: [
        { flag: '-e <host>', meaning: 'list the directories exported by a given NFS server' },
      ],
      scenarios: [
        { task: 'View the list of NFS directories shared by server 192.168.1.10', accepted: ['showmount -e 192.168.1.10'] },
      ],
    },
    {
      name: 'mount -t nfs',
      description: 'mount a directory shared via NFS from a server onto a client',
      flags: [],
      scenarios: [
        { task: 'Mount directory /share from NFS server 192.168.1.10 onto /mnt/nfs on the client', accepted: ['sudo mount -t nfs 192.168.1.10:/share /mnt/nfs', 'sudo mount 192.168.1.10:/share /mnt/nfs'] },
      ],
    },
    {
      name: 'smbpasswd',
      description: 'set the password for a Samba user account (separate from the Linux system password)',
      flags: [
        { flag: '-a <user>', meaning: 'add a new user to the Samba account database and set their password' },
      ],
      scenarios: [
        { task: 'Add user alice to Samba and set her Samba password', accepted: ['sudo smbpasswd -a alice'] },
      ],
    },
    {
      name: 'testparm',
      description: 'check the syntax of the Samba configuration file (smb.conf) before restarting the service',
      flags: [],
      scenarios: [
        { task: 'Check the syntax of configuration file smb.conf', accepted: ['testparm'] },
      ],
    },
    {
      name: 'systemctl restart smbd',
      description: 'restart the Samba service after editing the share configuration',
      flags: [],
      scenarios: [
        { task: 'Restart the Samba service after editing smb.conf', accepted: ['sudo systemctl restart smbd'] },
      ],
    },
    {
      name: 'smbclient',
      description: 'an FTP-like command-line tool for accessing and testing a Samba/Windows shared directory',
      flags: [
        { flag: '-L <host>', meaning: 'list the shared directories available on a server' },
        { flag: '-U <user>', meaning: 'specify the account used to log into the share' },
      ],
      scenarios: [
        { task: 'List the Samba shared directories available on server 192.168.1.10', accepted: ['smbclient -L 192.168.1.10'] },
      ],
    },
    {
      name: 'mount -t cifs',
      description: 'mount a Samba/Windows shared directory (SMB/CIFS) onto a Linux client',
      flags: [
        { flag: '-o username=<user>,password=<pass>', meaning: 'specify the login account when mounting' },
      ],
      scenarios: [
        { task: 'Mount shared directory //192.168.1.10/data onto /mnt/smb with account alice', accepted: ['sudo mount -t cifs //192.168.1.10/data /mnt/smb -o username=alice'] },
      ],
    },
  ],
};
