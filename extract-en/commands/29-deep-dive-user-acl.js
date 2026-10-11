const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-user-acl',
  week: WEEKS.W3_TH4,
  commands: [
    {
      name: 'usermod -e',
      description: 'set the account expiration date for an existing user',
      flags: [],
      scenarios: [
        { task: 'Set account alice\'s expiration date to 2026-12-31', accepted: ['sudo usermod -e 2026-12-31 alice'] },
        { task: 'Remove account alice\'s expiration date (never expires)', accepted: ['sudo usermod -e "" alice', "sudo usermod -e '' alice"] },
      ],
    },
    {
      name: 'usermod -c',
      description: 'change the comment field (usually the full name) of a user account',
      flags: [],
      scenarios: [
        { task: 'Set the full name "Nguyen Van A" for account alice', accepted: ['sudo usermod -c "Nguyen Van A" alice'] },
      ],
    },
    {
      name: 'chage -M',
      description: 'set the maximum number of days a password can be used before it must be changed',
      flags: [],
      scenarios: [
        { task: 'Set alice\'s password to require changing after at most 90 days', accepted: ['sudo chage -M 90 alice'] },
        { task: 'Set alice\'s password to never expire', accepted: ['sudo chage -M -1 alice', 'sudo chage -M 99999 alice'] },
      ],
    },
    {
      name: 'chage -d 0',
      description: 'force a user to change their password immediately at their next login',
      flags: [],
      scenarios: [
        { task: 'Force user alice to change her password immediately at her next login', accepted: ['sudo chage -d 0 alice'] },
      ],
    },
    {
      name: 'faillock',
      description: 'view or reset the number of failed login attempts for an account (used to protect against local brute-force)',
      flags: [
        { flag: '--user <user>', meaning: 'only show the lock info for a specific user' },
        { flag: '--reset --user <user>', meaning: 'reset the failed-login counter for a specific user' },
      ],
      scenarios: [
        { task: 'View the number of failed login attempts for account alice', accepted: ['sudo faillock --user alice'] },
        { task: 'Reset alice\'s failed-login count to unlock the account', accepted: ['sudo faillock --user alice --reset', 'sudo faillock --reset --user alice'] },
      ],
    },
    {
      name: 'sudo -k',
      description: 'clear the current session\'s cached sudo authentication, requiring the password to be entered again on the next sudo',
      flags: [],
      scenarios: [
        { task: 'Force the password to be entered again on the next sudo run in the current session', accepted: ['sudo -k'] },
      ],
    },
    {
      name: 'sudo -v',
      description: 'extend the current sudo authentication timeout without running any command',
      flags: [],
      scenarios: [
        { task: 'Extend the current sudo authentication timeout without running any command', accepted: ['sudo -v'] },
      ],
    },
    {
      name: 'setfacl -x',
      description: 'remove a specific ACL rule from a file/directory',
      flags: [],
      scenarios: [
        { task: 'Remove user alice\'s ACL permission on file shared.txt', accepted: ['setfacl -x u:alice shared.txt'] },
      ],
    },
    {
      name: 'setfacl -b',
      description: 'remove every ACL rule from a file/directory, reverting to only basic Unix permissions',
      flags: [],
      scenarios: [
        { task: 'Remove all ACLs on file shared.txt, keeping only basic Unix permissions', accepted: ['setfacl -b shared.txt'] },
      ],
    },
    {
      name: 'setfacl -R -d',
      description: 'set a default ACL on a directory, so newly created files/subdirectories automatically inherit the permission',
      flags: [],
      scenarios: [
        { task: 'Set a default ACL on directory /shared so group developers always gets read-write on newly created files', accepted: ['setfacl -R -d -m g:developers:rw /shared'] },
      ],
    },
    {
      name: 'id -nG',
      description: 'show the names (not GID numbers) of every group the current user belongs to',
      flags: [],
      scenarios: [
        { task: 'View the names of every group the current user belongs to', accepted: ['id -nG'] },
      ],
    },
    {
      name: 'newgrp',
      description: 'switch the current session\'s primary group to another group the user is a member of',
      flags: [],
      scenarios: [
        { task: 'Switch the current session\'s primary group to developers', accepted: ['newgrp developers'] },
      ],
    },
  ],
};
