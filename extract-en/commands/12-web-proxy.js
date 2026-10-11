const WEEKS = require('../weeks');
module.exports = {
  category: 'web-proxy',
  week: WEEKS.W7_TH11,
  commands: [
    {
      name: 'nginx -t',
      description: 'check the Nginx configuration syntax before applying it, avoiding bringing down the service due to a config error',
      flags: [],
      scenarios: [
        { task: 'Check the Nginx configuration syntax before reloading', accepted: ['sudo nginx -t'] },
      ],
    },
    {
      name: 'nginx -s reload',
      description: 'reload the Nginx configuration without interrupting active connections',
      flags: [],
      scenarios: [
        { task: 'Reload the Nginx configuration after editing a site file without dropping existing connections', accepted: ['sudo nginx -s reload'] },
      ],
    },
    {
      name: 'systemctl restart nginx',
      description: 'fully restart the Nginx service',
      flags: [],
      scenarios: [
        { task: 'Restart the Nginx service', accepted: ['sudo systemctl restart nginx'] },
      ],
    },
    {
      name: 'a2ensite',
      description: '(Apache) enable a virtual host defined in sites-available',
      flags: [],
      scenarios: [
        { task: 'Enable virtual host mysite on Apache', accepted: ['sudo a2ensite mysite'] },
      ],
    },
    {
      name: 'a2dissite',
      description: '(Apache) disable a currently-enabled virtual host',
      flags: [],
      scenarios: [
        { task: 'Disable virtual host mysite on Apache', accepted: ['sudo a2dissite mysite'] },
      ],
    },
    {
      name: 'apache2ctl configtest',
      description: '(Apache) check the Apache configuration syntax before applying it',
      flags: [],
      scenarios: [
        { task: 'Check the Apache configuration syntax', accepted: ['sudo apache2ctl configtest'] },
      ],
    },
    {
      name: 'certbot',
      description: 'a tool that automatically requests and renews free SSL/TLS certificates from Let\'s Encrypt',
      flags: [
        { flag: '--nginx', meaning: 'automatically request a certificate and configure it directly into Nginx' },
        { flag: '-d <domain>', meaning: 'specify the domain to issue a certificate for' },
        { flag: 'renew', meaning: 'renew certificates that are about to expire' },
      ],
      scenarios: [
        { task: 'Request an HTTPS certificate for domain example.com and auto-configure it into Nginx', accepted: ['sudo certbot --nginx -d example.com'] },
        { task: 'Renew Let\'s Encrypt certificates that are about to expire', accepted: ['sudo certbot renew'] },
      ],
    },
    {
      name: 'openssl req',
      description: 'create a self-signed SSL certificate or a certificate signing request (CSR)',
      flags: [
        { flag: '-x509', meaning: 'create a self-signed certificate instead of a CSR' },
        { flag: '-newkey rsa:<bits>', meaning: 'simultaneously generate a new RSA private key' },
        { flag: '-days <n>', meaning: 'specify the certificate\'s validity period (in days)' },
        { flag: '-out <file>', meaning: 'specify the output file to save the certificate to' },
      ],
      scenarios: [
        { task: 'Create a self-signed SSL certificate valid for 365 days with a 2048-bit RSA key, saved to cert.pem', accepted: ['openssl req -x509 -newkey rsa:2048 -days 365 -out cert.pem'] },
      ],
    },
  ],
};
