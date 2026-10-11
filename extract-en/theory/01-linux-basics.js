module.exports = [
  {
    text: 'Which Linux component is responsible for communicating directly with hardware and managing system resources?',
    options: ['Shell', 'Kernel', 'Desktop Environment', 'Compiler'],
    correctIndex: 1,
    explanation: 'The Kernel is the OS core, directly managing the CPU, memory, hardware devices, and providing services to the layer above it.',
  },
  {
    text: 'What role does the Shell play in Linux?',
    options: [
      'Directly managing physical memory',
      'Acting as the interpreter that takes commands from the user and passes them to the kernel',
      'Acting as a hardware device driver',
      'Being Linux\'s default filesystem',
    ],
    correctIndex: 1,
    explanation: 'The Shell is the command-line interface layer, receiving user commands, interpreting them, and asking the kernel to execute them.',
  },
  {
    text: 'What is the /etc directory in Linux used to hold?',
    options: ['Executable binary files', 'System configuration files', 'User home directories', 'Hardware device files'],
    correctIndex: 1,
    explanation: 'Per the FHS standard, /etc is where system and application configuration files are stored.',
  },
  {
    text: 'What type of data does the /var directory store?',
    options: ['Static, unchanging data', 'Variable data such as logs, mail queues, cache', 'Device files', 'Shared libraries'],
    correctIndex: 1,
    explanation: '/var (variable) holds data that changes frequently: system logs, mail queues, cache.',
  },
  {
    text: 'What is the /home directory used for?',
    options: ['Holding system-wide configuration files', 'Holding each user\'s personal directory', 'Holding kernel source code', 'Holding device files'],
    correctIndex: 1,
    explanation: '/home holds the personal working directory of each regular (non-root) user account.',
  },
  {
    text: 'What does the /dev directory contain?',
    options: ['Network configuration files', 'Device files representing hardware', 'System boot scripts', 'System log files'],
    correctIndex: 1,
    explanation: '/dev contains special files representing hardware devices (disks, terminals...).',
  },
  {
    text: 'How does the /root directory differ from /home?',
    options: [
      '/root is the root user\'s home directory, located at the filesystem root instead of inside /home',
      '/root contains the entire root filesystem',
      '/root only contains network configuration files',
      'There is no difference',
    ],
    correctIndex: 0,
    explanation: '/root is the root account\'s own home directory, kept separate from /home so it\'s still accessible even if /home fails to mount.',
  },
  {
    text: 'What do the /bin and /usr/bin directories usually contain?',
    options: ['Configuration files', 'Basic executable command files', 'User home directories', 'Device files'],
    correctIndex: 1,
    explanation: '/bin and /usr/bin contain executable programs (commands) shared by users and the system.',
  },
  {
    text: 'What is the main difference between an interactive shell and a shell script?',
    options: [
      'There is no difference',
      'An interactive shell takes commands directly from the keyboard, while a script reads commands sequentially from a file',
      'A shell script cannot use variables',
      'An interactive shell can only run as root',
    ],
    correctIndex: 1,
    explanation: 'An interactive shell processes commands typed directly; a script is a file containing a sequence of commands executed in order.',
  },
  {
    text: 'Which command is used to find out which shell is currently in use?',
    options: ['echo $SHELL', 'ls -l', 'pwd', 'whoami'],
    correctIndex: 0,
    explanation: 'The $SHELL environment variable holds the path to the user\'s current default shell.',
  },
  {
    text: 'Where does the "man" help system get its content from?',
    options: ['Directly from the Internet', 'From manual pages installed locally alongside the software package', 'From the system log file', 'From the network configuration'],
    correctIndex: 1,
    explanation: 'man reads manual pages installed together with the software package on the local system.',
  },
  {
    text: 'What role does the PATH environment variable play?',
    options: [
      'Storing the user\'s password',
      'The list of directories the shell searches when a command name is typed',
      'Storing the current home directory',
      'Storing command history',
    ],
    correctIndex: 1,
    explanation: 'When a command is typed, the shell looks for a matching executable file in each directory listed in PATH, in order.',
  },
];
