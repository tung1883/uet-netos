const WEEKS = require('../weeks');
module.exports = {
  category: 'user-permission',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'useradd',
      description: 'create a new user account on the system',
      flags: [
        { flag: '-m', meaning: 'automatically create a home directory for the new user' },
        { flag: '-s <shell>', meaning: 'specify the default login shell for the user' },
        { flag: '-g <group>', meaning: 'specify the primary group for the user' },
        { flag: '-G <group1,group2>', meaning: 'add the user to supplementary groups' },
        { flag: '-u <uid>', meaning: 'specify a particular UID for the new user' },
        { flag: '-d <path>', meaning: 'specify a custom home directory path' },
        { flag: '-e <date>', meaning: 'set the account expiration date' },
      ],
      scenarios: [
        { task: 'Create user alice with a home directory and bash as the shell', accepted: ['sudo useradd -m -s /bin/bash alice'] },
        { task: 'Create user bob with primary group developers and supplementary group sudo', accepted: ['sudo useradd -m -g developers -G sudo bob'] },
      ],
    },
    {
      name: 'adduser',
      description: 'the interactive, user-friendly version of useradd on Debian/Ubuntu, which prompts for needed info',
      flags: [],
      scenarios: [
        { task: 'Create a new user named carol using the interactive adduser utility', accepted: ['sudo adduser carol'] },
      ],
    },
    {
      name: 'usermod',
      description: 'modify an existing user account\'s information',
      flags: [
        { flag: '-aG <group>', meaning: 'add the user to the given supplementary group without removing them from existing supplementary groups (must be used with -a)' },
        { flag: '-g <group>', meaning: 'change the user\'s primary group' },
        { flag: '-s <shell>', meaning: 'change the user\'s login shell' },
        { flag: '-l <new name>', meaning: 'change the user\'s login name' },
        { flag: '-L', meaning: 'lock the account, disabling password login' },
        { flag: '-U', meaning: 'unlock a previously locked account' },
        { flag: '-d <path> -m', meaning: 'change and move the home directory to a new location' },
      ],
      scenarios: [
        { task: 'Add user alice to the sudo group without losing her existing supplementary groups', accepted: ['sudo usermod -aG sudo alice'] },
        { task: 'Lock user bob\'s account', accepted: ['sudo usermod -L bob'] },
        { task: 'Change carol\'s login shell to /bin/zsh', accepted: ['sudo usermod -s /bin/zsh carol'] },
      ],
    },
    {
      name: 'userdel',
      description: 'delete a user account from the system',
      flags: [
        { flag: '-r', meaning: 'also delete the user\'s home directory and mailbox' },
        { flag: '-f', meaning: 'force delete even if the user is currently logged in' },
      ],
      scenarios: [
        { task: 'Delete user alice along with her home directory', accepted: ['sudo userdel -r alice'] },
      ],
    },
    {
      name: 'groupadd',
      description: 'create a new user group',
      flags: [
        { flag: '-g <gid>', meaning: 'specify a particular GID for the new group' },
      ],
      scenarios: [
        { task: 'Create a new group named developers', accepted: ['sudo groupadd developers'] },
      ],
    },
    {
      name: 'groupdel',
      description: 'delete a user group from the system',
      flags: [],
      scenarios: [
        { task: 'Delete the developers group', accepted: ['sudo groupdel developers'] },
      ],
    },
    {
      name: 'gpasswd',
      description: 'manage the membership and password of a group',
      flags: [
        { flag: '-a <user>', meaning: 'add a user to a group' },
        { flag: '-d <user>', meaning: 'remove a user from a group' },
      ],
      scenarios: [
        { task: 'Add user alice to the developers group using gpasswd', accepted: ['sudo gpasswd -a alice developers'] },
      ],
    },
    {
      name: 'passwd',
      description: 'set or change the login password for a user account',
      flags: [
        { flag: '-l', meaning: 'lock the user\'s password (disable password login)' },
        { flag: '-u', meaning: 'unlock a previously locked password' },
        { flag: '-e', meaning: 'force the user to change their password at their next login' },
        { flag: '-S', meaning: 'show the current password status of the account' },
      ],
      scenarios: [
        { task: 'Change the current user\'s password', accepted: ['passwd'] },
        { task: 'Change user alice\'s password (as root)', accepted: ['sudo passwd alice'] },
        { task: 'Lock user bob\'s password', accepted: ['sudo passwd -l bob'] },
      ],
    },
    {
      name: 'chage',
      description: 'view or change an account\'s password aging information',
      flags: [
        { flag: '-l <user>', meaning: 'list the user\'s current password aging info' },
        { flag: '-M <n>', meaning: 'set the maximum number of days before the password must be changed' },
        { flag: '-E <date>', meaning: 'set the date the account expires' },
      ],
      scenarios: [
        { task: 'View user alice\'s password aging info', accepted: ['sudo chage -l alice', 'chage -l alice'] },
      ],
    },
    {
      name: 'su',
      description: 'switch to another user\'s session (root by default)',
      flags: [
        { flag: '-', meaning: 'switch to the target user\'s full login environment (login shell)' },
        { flag: '-c "<command>"', meaning: 'run just one command with the target user\'s privileges then return' },
      ],
      scenarios: [
        { task: 'Switch to the root account with a full login environment', accepted: ['su -', 'su - root'] },
        { task: 'Switch to user alice', accepted: ['su alice', 'su - alice'] },
      ],
    },
    {
      name: 'sudo',
      description: 'execute a command with another user\'s privileges (root by default), based on the /etc/sudoers configuration',
      flags: [
        { flag: '-u <user>', meaning: 'run the command with a specific user\'s privileges instead of root' },
        { flag: '-l', meaning: 'list the sudo permissions the current user is allowed' },
        { flag: '-i', meaning: 'start a login shell with root privileges' },
      ],
      scenarios: [
        { task: 'Run the apt update command with administrator privileges', accepted: ['sudo apt update'] },
        { task: 'View the list of sudo permissions for the current user', accepted: ['sudo -l'] },
      ],
    },
    {
      name: 'visudo',
      description: 'safely edit the /etc/sudoers file, automatically checking for syntax errors before saving',
      flags: [],
      scenarios: [
        { task: 'Safely edit the sudo permission configuration', accepted: ['sudo visudo'] },
      ],
    },
    {
      name: 'chmod',
      description: 'change the access permissions (read/write/execute) of a file or directory',
      flags: [
        { flag: '<3-digit octal>', meaning: 'set permissions directly as an octal number for owner, group, others (e.g. 755)' },
        { flag: 'u+x', meaning: 'add execute permission for the owner (user)' },
        { flag: 'g-w', meaning: 'remove write permission for the group' },
        { flag: 'o=r', meaning: 'set others\' permission exactly to read-only' },
        { flag: 'a+r', meaning: 'add read permission for everyone (all: user, group, other)' },
        { flag: '-R', meaning: 'apply the permission change recursively to all subdirectories' },
        { flag: '+t', meaning: 'enable the sticky bit on a directory (only the file\'s owner can delete it in a shared directory)' },
        { flag: 'u+s', meaning: 'enable SUID, so the program runs with the file owner\'s privileges' },
        { flag: 'g+s', meaning: 'enable SGID, so the program runs with the owning group\'s privileges, or subdirectories inherit the group' },
        { flag: 'ug+rw', meaning: 'add read and write permission for both owner and group at once' },
        { flag: '--reference=<file>', meaning: 'copy the access permissions from a reference file onto the target file' },
        { flag: '-v', meaning: 'print a message for every file whose permissions were changed (verbose)' },
      ],
      scenarios: [
        { task: 'Grant permission rwxr-xr-x (755) to file script.sh', accepted: ['chmod 755 script.sh'] },
        { task: 'Grant execute permission to the owner of file deploy.sh', accepted: ['chmod u+x deploy.sh', 'chmod +x deploy.sh'] },
        { task: 'Set permission rw-r-----  (640) on file secret.conf', accepted: ['chmod 640 secret.conf'] },
        { task: 'Apply permission 644 recursively to every file in directory /var/www', accepted: ['chmod -R 644 /var/www'] },
        { task: 'Enable the sticky bit on shared directory /shared (currently permission 777)', accepted: ['chmod +t /shared', 'chmod 1777 /shared'] },
        { task: 'Remove all permissions for others on file private.txt', accepted: ['chmod o-rwx private.txt', 'chmod o= private.txt'] },
        { task: 'Set permission rwxrwxr-x (775) on directory /srv/shared', accepted: ['chmod 775 /srv/shared'] },
        { task: 'Enable SGID on directory /srv/team so new files created inside auto-inherit the owning group', accepted: ['chmod g+s /srv/team', 'chmod 2775 /srv/team'] },
        { task: 'Copy the access permissions from file template.sh onto file deploy.sh', accepted: ['chmod --reference=template.sh deploy.sh'] },
      ],
    },
    {
      name: 'chown',
      description: 'change the owner and/or owning group of a file or directory',
      flags: [
        { flag: '<user>', meaning: 'change the file\'s owner to the given user' },
        { flag: '<user>:<group>', meaning: 'change both the owner and owning group at once' },
        { flag: ':<group>', meaning: 'only change the owning group, leaving the owner unchanged' },
        { flag: '-R', meaning: 'apply the change recursively to all subdirectories' },
      ],
      scenarios: [
        { task: 'Change the owner of index.html to user www-data', accepted: ['sudo chown www-data index.html'] },
        { task: 'Change both owner and group of directory /var/www to www-data, recursively', accepted: ['sudo chown -R www-data:www-data /var/www'] },
      ],
    },
    {
      name: 'chgrp',
      description: 'change the owning group of a file or directory',
      flags: [
        { flag: '-R', meaning: 'apply the group change recursively to all subdirectories' },
      ],
      scenarios: [
        { task: 'Change the owning group of directory /shared to group staff', accepted: ['sudo chgrp staff /shared'] },
      ],
    },
    {
      name: 'umask',
      description: 'view or set the default permission mask applied when creating new files/directories',
      flags: [
        { flag: '<octal>', meaning: 'set a new umask value in octal' },
      ],
      scenarios: [
        { task: 'View the current umask value', accepted: ['umask'] },
        { task: 'Set umask to 022', accepted: ['umask 022'] },
      ],
    },
    {
      name: 'id',
      description: 'show the UID, GID and the groups a user belongs to',
      flags: [
        { flag: '-u', meaning: 'only show the UID' },
        { flag: '-g', meaning: 'only show the primary group\'s GID' },
        { flag: '-Gn', meaning: 'show the names of every group the user belongs to' },
      ],
      scenarios: [
        { task: 'View the UID, GID and groups of user alice', accepted: ['id alice'] },
      ],
    },
    {
      name: 'groups',
      description: 'show the list of groups a user is a member of',
      flags: [],
      scenarios: [
        { task: 'View the groups that user alice belongs to', accepted: ['groups alice'] },
      ],
    },
  ],
};
