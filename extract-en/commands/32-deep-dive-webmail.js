const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-webmail',
  week: WEEKS.W7_TH11,
  commands: [
    {
      name: 'nginx -V',
      description: 'show the Nginx version along with its compiled-in modules',
      flags: [],
      scenarios: [
        { task: 'View the Nginx version and its compiled-in modules', accepted: ['nginx -V'] },
      ],
    },
    {
      name: 'nginx -T',
      description: 'check the Nginx configuration syntax and print the entire merged configuration (including included files)',
      flags: [],
      scenarios: [
        { task: 'View the entire Nginx configuration merged from its included files', accepted: ['sudo nginx -T'] },
      ],
    },
    {
      name: 'ln -s (nginx sites-enabled)',
      description: 'create a symlink from sites-available to sites-enabled to activate a virtual host on Nginx',
      flags: [],
      scenarios: [
        { task: 'Activate virtual host mysite.conf by creating a symlink from sites-available to sites-enabled', accepted: ['sudo ln -s /etc/nginx/sites-available/mysite.conf /etc/nginx/sites-enabled/'] },
      ],
    },
    {
      name: 'certbot certificates',
      description: 'list the SSL certificates currently managed by certbot, along with their expiration dates',
      flags: [],
      scenarios: [
        { task: 'View the list of existing SSL certificates along with their expiration dates', accepted: ['sudo certbot certificates'] },
      ],
    },
    {
      name: 'certbot --dry-run',
      description: 'test the certificate renewal process without actually changing the existing certificate',
      flags: [],
      scenarios: [
        { task: 'Test renewing a certificate without changing the real certificate', accepted: ['sudo certbot renew --dry-run'] },
      ],
    },
    {
      name: 'openssl x509 -text',
      description: 'view detailed info of an SSL certificate (validity, subject, issuing CA)',
      flags: [],
      scenarios: [
        { task: 'View detailed info of certificate file cert.pem', accepted: ['openssl x509 -in cert.pem -text -noout'] },
      ],
    },
    {
      name: 'openssl s_client',
      description: 'test-connect to an HTTPS server to check the SSL certificate it\'s serving',
      flags: [],
      scenarios: [
        { task: 'Check the SSL certificate served by example.com on port 443', accepted: ['openssl s_client -connect example.com:443'] },
      ],
    },
    {
      name: 'curl -k',
      description: 'send an HTTPS request but skip SSL certificate validation, used when testing with a self-signed certificate',
      flags: [],
      scenarios: [
        { task: 'Check the HTTPS connection to https://localhost skipping certificate validation (used with a self-signed cert)', accepted: ['curl -k https://localhost'] },
      ],
    },
    {
      name: 'tail -f (nginx access log)',
      description: 'continuously follow Nginx\'s access log to watch incoming requests',
      flags: [],
      scenarios: [
        { task: 'Continuously follow Nginx\'s access log', accepted: ['tail -f /var/log/nginx/access.log'] },
        { task: 'Continuously follow Nginx\'s error log', accepted: ['tail -f /var/log/nginx/error.log'] },
      ],
    },
    {
      name: 'postconf',
      description: 'view or set Postfix configuration parameters without directly editing the main.cf file',
      flags: [
        { flag: '-e "<key>=<value>"', meaning: 'set a Postfix configuration parameter' },
      ],
      scenarios: [
        { task: 'View all of Postfix\'s current configuration parameters', accepted: ['postconf'] },
        { task: 'Set Postfix\'s myhostname parameter to mail.example.com', accepted: ['sudo postconf -e "myhostname=mail.example.com"'] },
      ],
    },
    {
      name: 'dovecot -n',
      description: 'check the Dovecot configuration syntax before applying it, avoiding bringing down the mail service',
      flags: [],
      scenarios: [
        { task: 'Check the Dovecot configuration syntax before restarting the service', accepted: ['doveconf -n', 'dovecot -n'] },
      ],
    },
  ],
};
