const WEEKS = require('../weeks');
module.exports = {
  category: 'mail',
  week: WEEKS.W9_TH15,
  commands: [
    {
      name: 'systemctl restart postfix',
      description: 'restart the Postfix service (MTA — the mail transfer agent handling send/receive via SMTP)',
      flags: [],
      scenarios: [
        { task: 'Restart the Postfix service after editing its configuration', accepted: ['sudo systemctl restart postfix'] },
      ],
    },
    {
      name: 'postfix check',
      description: 'check the Postfix configuration syntax before applying it',
      flags: [],
      scenarios: [
        { task: 'Check the Postfix configuration syntax', accepted: ['sudo postfix check'] },
      ],
    },
    {
      name: 'postqueue -p',
      description: 'view the list of mail waiting in Postfix\'s outgoing queue',
      flags: [],
      scenarios: [
        { task: 'View Postfix\'s queue of mail waiting to be sent', accepted: ['postqueue -p', 'mailq'] },
      ],
    },
    {
      name: 'systemctl restart dovecot',
      description: 'restart the Dovecot service (handles receiving mail via POP3/IMAP)',
      flags: [],
      scenarios: [
        { task: 'Restart the Dovecot service after editing its IMAP configuration', accepted: ['sudo systemctl restart dovecot'] },
      ],
    },
    {
      name: 'doveconf -n',
      description: 'show the Dovecot configuration currently in effect (that differs from the default values)',
      flags: [],
      scenarios: [
        { task: 'View the current Dovecot configuration that differs from the defaults', accepted: ['doveconf -n'] },
      ],
    },
    {
      name: 'mail',
      description: 'send or read mail from the command line, used for a quick test of an internal mail service',
      flags: [
        { flag: '-s "<subject>" <address>', meaning: 'send mail with a given subject and recipient address' },
      ],
      scenarios: [
        { task: 'Send a test email with subject "Test" to alice@example.com', accepted: ['mail -s "Test" alice@example.com', "mail -s 'Test' alice@example.com"] },
      ],
    },
    {
      name: 'telnet (SMTP test)',
      description: 'manually connect to port 25 of a mail server to test the SMTP protocol directly',
      flags: [],
      scenarios: [
        { task: 'Manually connect to the SMTP port (25) of server mail.example.com to test it', accepted: ['telnet mail.example.com 25'] },
      ],
    },
  ],
};
