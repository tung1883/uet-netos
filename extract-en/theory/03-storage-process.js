module.exports = [
  {
    text: 'What is the main benefit LVM (Logical Volume Manager) brings compared to traditional partitions?',
    options: [
      'Twice the read/write speed',
      'It lets you resize (extend/shrink) volumes flexibly without reformatting the disk',
      'It automatically encrypts all data',
      'It doesn\'t need a filesystem',
    ],
    correctIndex: 1,
    explanation: 'LVM abstracts the storage layer, allowing flexible logical volume resizing by adding/removing physical volumes.',
  },
  {
    text: 'What is the order of LVM\'s layers from lowest to highest?',
    options: [
      'Logical Volume → Volume Group → Physical Volume',
      'Physical Volume → Volume Group → Logical Volume',
      'Volume Group → Physical Volume → Logical Volume',
      'Physical Volume → Logical Volume → Volume Group',
    ],
    correctIndex: 1,
    explanation: 'Physical Volumes (PV, physical disks) are gathered into a Volume Group (VG), then divided into Logical Volumes (LV) for use.',
  },
  {
    text: 'What is the /etc/fstab file used for?',
    options: [
      'Storing the system user list',
      'Declaring the filesystems to automatically mount at boot',
      'Configuring a static IP address',
      'Storing system logs',
    ],
    correctIndex: 1,
    explanation: '/etc/fstab defines the device, mount point, filesystem type and options so the system auto-mounts it at boot.',
  },
  {
    text: 'What is a quota on a filesystem used for?',
    options: [
      'Encrypting user data',
      'Limiting the storage space or number of files a user/group is allowed to use',
      'Speeding up read/write',
      'Automatically backing up data',
    ],
    correctIndex: 1,
    explanation: 'A quota limits storage resource usage (space, inode count) per user or group.',
  },
  {
    text: 'How do a soft limit and a hard limit differ in a quota?',
    options: [
      'A soft limit is a hard cap that cannot be exceeded, a hard limit just warns',
      'A hard limit is an absolute cap that cannot be exceeded; a soft limit can be temporarily exceeded during a grace period',
      'There is no difference',
      'A soft limit only applies to root',
    ],
    correctIndex: 1,
    explanation: 'A soft limit allows temporarily exceeding it during a "grace period", while a hard limit is an absolute threshold that cannot be exceeded.',
  },
  {
    text: 'What does a process in the "Zombie" (Z) state mean?',
    options: [
      'The process is running normally',
      'The process has finished but its parent hasn\'t read its exit status yet',
      'The process is permanently hung and cannot be killed',
      'The process is waiting on I/O resources',
    ],
    correctIndex: 1,
    explanation: 'A zombie process has finished executing but still remains in the process table waiting for its parent to read its exit status.',
  },
  {
    text: 'How does the SIGKILL signal (number 9) differ from SIGTERM (number 15)?',
    options: [
      'SIGKILL lets a process clean up before exiting, SIGTERM does not',
      'SIGKILL forces immediate termination, unable to be caught or ignored; SIGTERM can be handled by the process to clean up before exiting',
      'The two signals are identical',
      'SIGKILL can only be used by root',
    ],
    correctIndex: 1,
    explanation: 'SIGTERM is a "polite" stop request that can be caught by a handler; SIGKILL forces an immediate stop that cannot be blocked.',
  },
  {
    text: 'On a modern Linux system (using systemd), which process is PID 1?',
    options: ['bash', 'init/systemd', 'sshd', 'kernel'],
    correctIndex: 1,
    explanation: 'systemd (or init on older systems) is always the first process the kernel starts, holding PID 1.',
  },
  {
    text: 'What does running a command with & at the end mean?',
    options: ['Run the command with root privileges', 'Run the command in the background', 'Repeat the command twice', 'Cancel the command immediately'],
    correctIndex: 1,
    explanation: 'The & at the end of a command puts the process in the background, immediately returning terminal control.',
  },
  {
    text: 'What is a systemd .service unit file used for?',
    options: [
      'Defining a system service (how to start, stop, its dependencies)',
      'Defining a disk partition',
      'Defining a system user',
      'Defining a static IP address',
    ],
    correctIndex: 0,
    explanation: 'A .service unit describes how systemd manages a service\'s lifecycle: start command, dependencies, start type.',
  },
  {
    text: 'What is the difference between "systemctl enable" and "systemctl start"?',
    options: [
      'enable starts the service right away, start only sets it to auto-start with the system',
      'enable sets the service to auto-start with the system (without running it now), start runs the service right away (not persistent across reboot)',
      'The two commands do exactly the same thing',
      'enable is only used for network services',
    ],
    correctIndex: 1,
    explanation: 'enable only creates the symlink so the service auto-runs at the next boot; start runs it right away but it won\'t auto-run again after a reboot unless it was also enabled.',
  },
];
