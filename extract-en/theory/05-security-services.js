const WEEKS = require('../weeks');
module.exports = [
  {
    text: 'Why should SSH password login be disabled and only key-based authentication allowed?',
    options: [
      'To save network bandwidth',
      'To protect against brute-force password-guessing attacks, since a private key is far harder to guess',
      'To speed up SSH connections',
      'To let many people log in at the same time',
    ],
    correctIndex: 1,
    explanation: 'Key-based authentication eliminates the risk of password brute-forcing, since a private key is practically impossible to guess.',
  },
  {
    text: 'What does the default "deny incoming" policy on the UFW firewall mean?',
    options: [
      'Block every incoming connection unless a specific allow rule permits it',
      'Block every outgoing connection',
      'Allow every incoming connection',
      'Completely disable the firewall',
    ],
    correctIndex: 0,
    explanation: 'The "default deny incoming" policy denies all incoming traffic by default; only explicitly allowed ports/services are permitted.',
  },
  {
    text: 'What mechanism does Fail2ban use to protect a service?',
    options: [
      'Encrypting all network traffic',
      'Monitoring logs, detecting repeated failed login attempts, and automatically banning the source IP (adding it to the firewall)',
      'Automatically changing user passwords',
      'Shutting down the service when an attack is detected',
    ],
    correctIndex: 1,
    explanation: 'Fail2ban monitors logs (e.g. the SSH log), detects brute-forcing based on failure counts, then automatically adds a firewall rule blocking that IP.',
  },
  {
    text: 'What does the "principle of least privilege" mean in security?',
    options: [
      'Every user should have root privileges for convenience',
      'Every account/process should only have the minimum privileges needed to do its job',
      'Only root is allowed to log into the system',
      'Disable every service that isn\'t being used',
    ],
    correctIndex: 1,
    explanation: 'This principle minimizes risk by restricting access to the minimum level needed for each task.',
  },
  {
    text: 'Why should you check configuration syntax (e.g. nginx -t, sshd -t) before reloading/restarting a service?',
    options: [
      'To speed up the service',
      'To avoid the service crashing or failing to restart due to a configuration syntax error',
      'There\'s no real reason, it\'s just a habit',
      'To automatically back up the configuration',
    ],
    correctIndex: 1,
    explanation: 'Checking syntax beforehand catches configuration errors early, avoiding disrupting a running service when applying a bad change.',
  },
  {
    text: 'What is the fundamental difference between a container (like Docker) and a traditional virtual machine (VM)?',
    options: [
      'A container has its own kernel, fully separate from the host',
      'A container shares the host OS\'s kernel, making it lighter and faster to start than a VM',
      'A container always runs slower than a VM',
      'A container cannot run multiple applications',
    ],
    correctIndex: 1,
    explanation: 'A container virtualizes at the OS level, sharing the host kernel, so it\'s lighter and starts faster than a VM (which virtualizes the hardware too).',
  },
  {
    text: 'How does a Docker image differ from a Docker container?',
    options: [
      'An image is a static, read-only template; a container is a running instance created from an image',
      'A container is the template, an image is the running instance',
      'There is no difference',
      'An image is only used to store logs',
    ],
    correctIndex: 0,
    explanation: 'An image is like a read-only packaged application; a container is a running instance instantiated from that image.',
  },
  {
    text: 'When mounting a volume for a Docker container with -v <host>:<container>, what is the main purpose?',
    options: [
      'Making data persistent even if the container is deleted, and sharing data between the host and container',
      'Making the container run faster',
      'Making the container auto-start with the system',
      'Encrypting data inside the container',
    ],
    correctIndex: 0,
    explanation: 'Volume mapping stores data outside the container\'s lifecycle, ensuring it isn\'t lost when the container is deleted/recreated.',
  },
  {
    text: 'Why should you back up both the data and a service\'s configuration files, not just the data?',
    options: [
      'Configuration files never change so they don\'t need backing up',
      'To be able to fully restore the service\'s operating state, not just the data but also how the service was set up',
      'Configuration files take up the most space',
      'Backing up just the data is enough to restore the system',
    ],
    correctIndex: 1,
    explanation: 'Without the configuration files, the data can be restored but the service might not work the same way it did before the backup.',
    week: WEEKS.W10_TH17,
  },
  {
    text: 'What is Linux\'s rescue/single-user mode used for?',
    options: [
      'Running the system in a minimal mode to fix an issue when the system won\'t boot/operate normally',
      'Increasing system performance',
      'Running more services than usual',
      'Automatically updating all software',
    ],
    correctIndex: 0,
    explanation: 'Rescue mode boots with a minimal set of services, letting an administrator diagnose and fix system issues (e.g. a forgotten root password, an fstab error).',
    week: WEEKS.W11_TH19,
  },
];
