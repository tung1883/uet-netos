const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-nfs-samba2',
  week: WEEKS.W6_TH9,
  commands: [
    {
      name: 'showmount -a',
      description: 'show the list of clients currently mounting NFS resources from the server',
      flags: [],
      scenarios: [
        { task: 'View the list of clients currently mounting NFS from the current server', accepted: ['showmount -a'] },
      ],
    },
    {
      name: 'nfsstat',
      description: 'show NFS service activity statistics (number of requests by operation type)',
      flags: [],
      scenarios: [
        { task: 'View the NFS service\'s activity statistics', accepted: ['nfsstat'] },
      ],
    },
    {
      name: 'exportfs -u',
      description: 'unexport (stop sharing) a specific NFS directory without editing /etc/exports',
      flags: [],
      scenarios: [
        { task: 'Temporarily stop sharing directory /data via NFS', accepted: ['sudo exportfs -u /data'] },
      ],
    },
    {
      name: 'systemctl restart nfs-kernel-server',
      description: 'restart the NFS server service on Ubuntu after editing /etc/exports',
      flags: [],
      scenarios: [
        { task: 'Restart the NFS server service after editing /etc/exports', accepted: ['sudo systemctl restart nfs-kernel-server'] },
      ],
    },
    {
      name: 'mount -t nfs4',
      description: 'mount a shared directory specifically using the NFSv4 protocol',
      flags: [],
      scenarios: [
        { task: 'Mount directory /share from 192.168.1.10 onto /mnt/nfs using the NFSv4 protocol', accepted: ['sudo mount -t nfs4 192.168.1.10:/share /mnt/nfs'] },
      ],
    },
    {
      name: 'smbstatus',
      description: 'show the list of current connections and sessions to a Samba server',
      flags: [],
      scenarios: [
        { task: 'View the list of current connections to the Samba server', accepted: ['sudo smbstatus'] },
      ],
    },
    {
      name: 'pdbedit -L',
      description: 'list the existing Samba user accounts in the database',
      flags: [],
      scenarios: [
        { task: 'View the list of existing Samba user accounts', accepted: ['sudo pdbedit -L'] },
      ],
    },
    {
      name: 'smbclient //host/share -U user',
      description: 'interactively connect to a specific Samba shared directory with a given account',
      flags: [],
      scenarios: [
        { task: 'Interactively connect to shared directory //192.168.1.10/data with account alice', accepted: ['smbclient //192.168.1.10/data -U alice'] },
      ],
    },
    {
      name: 'net usershare',
      description: 'quickly create a Samba share without directly editing smb.conf',
      flags: [],
      scenarios: [
        { task: 'Quickly create a Samba share named "public" pointing to /srv/public', accepted: ['sudo net usershare add public /srv/public "Public share" everyone:F'] },
      ],
    },
  ],
};
