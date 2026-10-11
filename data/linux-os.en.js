// English translation, generated from data/linux-os.js + extract/linux-os-en-overlay.json
var QUIZ_DATA_LINUX_EN = [
 {
  "sourceSets": [
   1
  ],
  "text": "Who initiated and wrote the first version of the Linux kernel in 1991?",
  "options": [
   "Bill Gates",
   "Steve Jobs",
   "Linus Torvalds",
   "Richard Stallman"
  ],
  "correctIndex": 2,
  "explanation": "Based on open-source history, Linus Torvalds was the Finnish student who wrote and released the first Linux kernel. Conclusion: Linus Torvalds"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "In the Linux directory tree, which directory holds important system configuration files?",
  "options": [
   "/bin",
   "/etc",
   "/home",
   "/usr"
  ],
  "correctIndex": 1,
  "explanation": "Per the Filesystem Hierarchy Standard (FHS), /etc stores configuration files for the system and installed applications. Conclusion: /etc"
 },
 {
  "sourceSets": [
   1,
   7
  ],
  "text": "Which command displays the path of the current working directory?",
  "options": [
   "ls",
   "cd",
   "dir",
   "pwd"
  ],
  "correctIndex": 3,
  "explanation": "'pwd' stands for 'print working directory' and prints the absolute path of the current directory. Conclusion: pwd"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "To change the access permissions of a file or directory, which command do you use?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "assign"
  ],
  "correctIndex": 1,
  "explanation": "'chmod' changes the read/write/execute mode of a file or directory for different user classes. Conclusion: chmod"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "What is the default UID of the root (superuser) on a Linux system?",
  "options": [
   "1000",
   "1",
   "0",
   "500"
  ],
  "correctIndex": 2,
  "explanation": "On most Linux distributions the root administrator account always has user ID 0. Conclusion: 0"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which symbol redirects a command's output, overwriting a new file?",
  "options": [
   "The '>' sign",
   "The '>>' sign",
   "The '<' sign",
   "The '|' sign"
  ],
  "correctIndex": 0,
  "explanation": "In the Linux shell, '>' redirects standard output into a file, erasing existing content. Conclusion: The '>' sign"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which permission string corresponds to file mode '644' in Linux?",
  "options": [
   "rwx------",
   "rwxr-xr-x",
   "rw-r--r--",
   "rw-rw-rw-"
  ],
  "correctIndex": 2,
  "explanation": "6 maps to 'read+write' (rw-), and 4 maps to 'read-only' (r--), giving rw-r--r--. Conclusion: rw-r--r--"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which command lists the files and directories inside the current directory?",
  "options": [
   "list",
   "ls",
   "show",
   "dir -s"
  ],
  "correctIndex": 1,
  "explanation": "'ls' is the standard command for listing directory contents on the Linux command line. Conclusion: ls"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which Linux OS component is directly responsible for managing hardware resources and providing services to applications?",
  "options": [
   "Shell",
   "Desktop Environment",
   "Terminal",
   "Kernel"
  ],
  "correctIndex": 3,
  "explanation": "The Kernel is the core OS component mediating between hardware and software. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which directory usually contains device files representing hardware such as disks, mice, keyboards?",
  "options": [
   "/etc",
   "/dev",
   "/mnt",
   "/proc"
  ],
  "correctIndex": 1,
  "explanation": "/dev (short for devices) contains special files used to communicate with system hardware. Conclusion: /dev"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "To search for a specific text string inside a text file, which command should you use?",
  "options": [
   "find",
   "locate",
   "grep",
   "search"
  ],
  "correctIndex": 2,
  "explanation": "'grep' (Global Regular Expression Print) is a powerful tool for finding lines matching a given pattern. Conclusion: grep"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which signal forces a process to stop immediately and cannot be ignored or caught?",
  "options": [
   "SIGTERM (15)",
   "SIGINT (2)",
   "SIGKILL (9)",
   "SIGHUP (1)"
  ],
  "correctIndex": 2,
  "explanation": "Signal 9, SIGKILL, forcibly terminates a process immediately without letting it clean up. Conclusion: SIGKILL (9)"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which command creates a new directory in Linux?",
  "options": [
   "newdir",
   "mkdir",
   "create",
   "md"
  ],
  "correctIndex": 1,
  "explanation": "'mkdir' (make directory) creates one or more new directories on the filesystem. Conclusion: mkdir"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "To read detailed usage instructions for a specific Linux command, which command should you use?",
  "options": [
   "help",
   "info",
   "guide",
   "man"
  ],
  "correctIndex": 3,
  "explanation": "'man' (manual) opens the detailed usage page for commands, functions and config files. Conclusion: man"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which directory usually contains essential executables that both regular users and administrators can use?",
  "options": [
   "/bin",
   "/sbin",
   "/root",
   "/lib"
  ],
  "correctIndex": 0,
  "explanation": "/bin contains the essential executables needed by all system users, even in single-user mode. Conclusion: /bin"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "In Linux, files whose names start with a dot (e.g. .bashrc) are understood as which kind of file?",
  "options": [
   "System file",
   "Temporary file",
   "Hidden file",
   "Executable file"
  ],
  "correctIndex": 2,
  "explanation": "By Linux/Unix convention, any file or directory starting with a dot is treated as hidden. Conclusion: Hidden file"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which command moves a file from one directory to another, or renames a file?",
  "options": [
   "cp",
   "mv",
   "rm",
   "move"
  ],
  "correctIndex": 1,
  "explanation": "'mv' (move) relocates a file, or renames it when the destination is in the same directory. Conclusion: mv"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which symbol lets you combine multiple commands by feeding the output of one as input to the next?",
  "options": [
   "Comma (,)",
   "Pipe (|)",
   "Ampersand (&)",
   "Semicolon (;)"
  ],
  "correctIndex": 1,
  "explanation": "The pipe mechanism uses '|' to stream data directly between processes. Conclusion: Pipe (|)"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which command changes the password of the current user or another user (with root privileges)?",
  "options": [
   "password",
   "passwd",
   "userpass",
   "setpass"
  ],
  "correctIndex": 1,
  "explanation": "'passwd' is the standard tool for updating user account passwords. Conclusion: passwd"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "In the Vi text editor, which key switches from Command mode to Insert mode?",
  "options": [
   "The i key",
   "The Esc key",
   "The : key",
   "The x key"
  ],
  "correctIndex": 0,
  "explanation": "Pressing 'i' in Vi starts inserting text at the current cursor position. Conclusion: The i key"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "What is the 'df' (disk free) command typically used by administrators for?",
  "options": [
   "Delete unneeded files",
   "Check used and free space on filesystems",
   "Reformat a hard disk",
   "List connected disk drives"
  ],
  "correctIndex": 1,
  "explanation": "'df' reports the used and free disk space on currently mounted filesystems. Conclusion: Check used and free space on filesystems"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which directory in Linux usually holds continuously-changing data such as system logs and print queues?",
  "options": [
   "/home",
   "/var",
   "/tmp",
   "/opt"
  ],
  "correctIndex": 1,
  "explanation": "/var (short for variable) is designed for data whose size/content change frequently during operation. Conclusion: /var"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "Which command changes the owner of a file?",
  "options": [
   "chmod",
   "chown",
   "chgrp",
   "usermod"
  ],
  "correctIndex": 1,
  "explanation": "'chown' (change owner) changes the user and/or group that owns a file or directory. Conclusion: chown"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "To terminate a running process based on its process ID (PID), which command do you use?",
  "options": [
   "stop",
   "end",
   "kill",
   "halt"
  ],
  "correctIndex": 2,
  "explanation": "'kill' sends a signal (SIGTERM by default) to a process asking it to stop. Conclusion: kill"
 },
 {
  "sourceSets": [
   1
  ],
  "text": "In Linux, which directory is the topmost root of the entire filesystem?",
  "options": [
   "/root",
   "/home",
   "/",
   "/boot"
  ],
  "correctIndex": 2,
  "explanation": "The forward slash '/' represents the root directory, the start of every path in the tree. Conclusion: /"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "In Linux, when umask is set to 022, what is the default permission for a newly created file (not a directory)?",
  "options": [
   "644",
   "755",
   "666",
   "640"
  ],
  "correctIndex": 0,
  "explanation": "A file's default permission of 666 minus umask 022 gives the actual permission 644. Conclusion: 644"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What is the most fundamental difference between a Hard link and a Symbolic link when the source file is deleted?",
  "options": [
   "The symlink still works but the hard link doesn't.",
   "Neither type of link can still access the data.",
   "The system automatically restores the source file from the hard link.",
   "The hard link still accesses the data normally while the symlink breaks."
  ],
  "correctIndex": 3,
  "explanation": "A hard link points directly to the source data's inode, so it survives the source being deleted; a symlink only points to a path. Conclusion: The hard link still accesses the data normally while the symlink breaks."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which signal is sent when running 'kill -9 [PID]' to force a process to stop immediately?",
  "options": [
   "SIGTERM",
   "SIGKILL",
   "SIGINT",
   "SIGSTOP"
  ],
  "correctIndex": 1,
  "explanation": "Signal 9 is SIGKILL, forcing termination without allowing cleanup or refusal. Conclusion: SIGKILL"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which syntax redirects both standard output (stdout) and standard error (stderr) into the same file 'output.txt'?",
  "options": [
   "command > output.txt 2>&1",
   "command 2> output.txt",
   "command > output.txt >2",
   "command > output.txt 1>2"
  ],
  "correctIndex": 0,
  "explanation": "The syntax '2>&1' tells the shell to redirect file descriptor 2 (stderr) to the same place as descriptor 1 (stdout). Conclusion: command > output.txt 2>&1"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "After editing a Systemd service configuration file (e.g. a .service file), which command must be run for Systemd to pick up the change?",
  "options": [
   "systemctl restart",
   "systemctl daemon-reload",
   "systemctl reload-all",
   "service update-config"
  ],
  "correctIndex": 1,
  "explanation": "'systemctl daemon-reload' forces systemd to reload all unit files and rebuild the dependency tree. Conclusion: systemctl daemon-reload"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "In the Vi/Vim editor, to save changes and quit, which command do you type in Command-line mode?",
  "options": [
   ":q!",
   ":s",
   ":wq",
   ":exit"
  ],
  "correctIndex": 2,
  "explanation": "':wq' combines 'write' and 'quit', saving the file before closing the editor. Conclusion: :wq"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which command finds files larger than 100MB in the '/var' directory?",
  "options": [
   "find /var -size +100M",
   "ls -lh /var | grep 100M",
   "search /var -big 100",
   "du -sh /var | limit 100M"
  ],
  "correctIndex": 0,
  "explanation": "'find' with '-size +100M' filters for objects exceeding the given size. Conclusion: find /var -size +100M"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which field in '/etc/passwd' holds the path to the user's home directory?",
  "options": [
   "Field 3",
   "Field 5",
   "Field 6",
   "Field 7"
  ],
  "correctIndex": 2,
  "explanation": "/etc/passwd fields are colon-separated; field 6 specifies the account's home directory. Conclusion: Field 6"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What does permission '755' on a directory mean for the different user classes?",
  "options": [
   "The owner has full permissions; group and others have only read and execute.",
   "The owner has read and write; group and others have full permissions.",
   "Every user on the system has full permissions.",
   "The owner and group have full permissions; others have none."
  ],
  "correctIndex": 0,
  "explanation": "Octal 755 is 'rwxr-xr-x': the owner can do everything, others cannot write or delete. Conclusion: The owner has full permissions; group and others have only read and execute."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What exactly is a 'Zombie' process in Linux?",
  "options": [
   "A background process consuming too much CPU.",
   "A process that never terminates.",
   "A process that has finished executing but still has a table entry because its parent hasn't read its exit status.",
   "A process hung due to a memory error."
  ],
  "correctIndex": 2,
  "explanation": "A Zombie (defunct) process exists when a child has died but the parent hasn't called wait() to release its data structure. Conclusion: A process that has finished executing but still has a table entry because its parent hasn't read its exit status."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "To list all running processes in real time and monitor CPU/RAM usage, which tool is most commonly used?",
  "options": [
   "ps -ef",
   "top",
   "uptime",
   "free"
  ],
  "correctIndex": 1,
  "explanation": "'top' provides a continuously-updating interactive view of processes by resource usage. Conclusion: top"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which file stores the list of DNS servers the system uses to resolve domain names into IP addresses?",
  "options": [
   "/etc/hosts",
   "/etc/networks",
   "/etc/resolv.conf",
   "/etc/hostname"
  ],
  "correctIndex": 2,
  "explanation": "'/etc/resolv.conf' configures resolver parameters, including nameserver addresses. Conclusion: /etc/resolv.conf"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "When using 'tar' to compress a directory into '.tar.gz' format, which option specifies the gzip algorithm?",
  "options": [
   "-j",
   "-z",
   "-x",
   "-v"
  ],
  "correctIndex": 1,
  "explanation": "In tar, '-z' enables the gzip filter, while '-j' is for bzip2. Conclusion: -z"
 },
 {
  "sourceSets": [
   2,
   5
  ],
  "text": "What is the main purpose of the 'Swap' partition in Linux?",
  "options": [
   "Stores the user's temporary files.",
   "Used as virtual memory space when physical RAM is full.",
   "Backs up the operating system kernel.",
   "Speeds up hard disk access."
  ],
  "correctIndex": 1,
  "explanation": "Swap is a buffer area on disk letting the system keep running applications when RAM is insufficient. Conclusion: Used as virtual memory space when physical RAM is full."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "On a system using Systemd, which command checks system log records since boot?",
  "options": [
   "cat /var/log/syslog",
   "tail -f /var/log/messages",
   "journalctl -b",
   "dmesg | grep boot"
  ],
  "correctIndex": 2,
  "explanation": "'journalctl -b' retrieves centralized log data managed by systemd-journald since the latest boot. Conclusion: journalctl -b"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "To change the owner of a file from 'user1' to 'user2', which command do you use?",
  "options": [
   "chmod user2 file.txt",
   "chown user2 file.txt",
   "chgrp user2 file.txt",
   "usermod -o user2 file.txt"
  ],
  "correctIndex": 1,
  "explanation": "'chown' is specifically designed to change the user and/or group owning filesystem objects. Conclusion: chown user2 file.txt"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which character is used on the Linux command line to feed one command's output as another command's input (piping)?",
  "options": [
   "Ampersand (&)",
   "Pipe (|)",
   "Comma (;)",
   "Greater-than (>)"
  ],
  "correctIndex": 1,
  "explanation": "The pipe character '|' creates a direct data stream between processes without an intermediate file. Conclusion: Pipe (|)"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which command lists detailed identification info of peripherals connected via the USB bus?",
  "options": [
   "lsusb",
   "lspci",
   "lshw",
   "lsdev"
  ],
  "correctIndex": 0,
  "explanation": "'lsusb' lists the tree structure and identification info of devices connected via the USB controller. Conclusion: lsusb"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "In a Crontab entry, which value in the 5th column specifies the job's scheduled time?",
  "options": [
   "Hour",
   "Day of month",
   "Day of week",
   "Month"
  ],
  "correctIndex": 2,
  "explanation": "A crontab line has 5 time fields in order: minute, hour, day of month, month, and finally day of week. Conclusion: Day of week"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What is the main function of the 'PATH' environment variable in Linux?",
  "options": [
   "Stores the path to the directory holding system configuration files.",
   "Defines the directories the shell searches for executables when a command is typed.",
   "Holds the path to the kernel image file.",
   "Stores the user's typed command history."
  ],
  "correctIndex": 1,
  "explanation": "When a command is invoked without an absolute path, the shell scans the directories listed in PATH to find the matching executable. Conclusion: Defines the directories the shell searches for executables when a command is typed."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What is the main difference between 'apt upgrade' and 'apt dist-upgrade' on Debian/Ubuntu-based systems?",
  "options": [
   "'dist-upgrade' is faster because it skips error checking.",
   "'dist-upgrade' can install or remove packages to resolve complex dependencies, while 'upgrade' cannot.",
   "'upgrade' also upgrades the kernel, 'dist-upgrade' does not.",
   "There is no difference, they are just two aliases for the same command."
  ],
  "correctIndex": 1,
  "explanation": "'dist-upgrade' (or 'full-upgrade') intelligently handles dependency changes between software versions, including removing conflicting old packages. Conclusion: 'dist-upgrade' can install or remove packages to resolve complex dependencies, while 'upgrade' cannot."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "What important information does the '/etc/shadow' file store in Linux?",
  "options": [
   "The list of all user groups on the system.",
   "Encrypted password information and password expiration policies.",
   "The sudo access configuration for users.",
   "The system's login success/failure history."
  ],
  "correctIndex": 1,
  "explanation": "For security, actual passwords aren't stored in /etc/passwd (widely readable) but in /etc/shadow, readable only by root. Conclusion: Encrypted password information and password expiration policies."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "To view the last 20 lines of a continuously-updating log file, which command should you use?",
  "options": [
   "head -n 20 file.log",
   "tail -f -n 20 file.log",
   "cat -n 20 file.log",
   "more -20 file.log"
  ],
  "correctIndex": 1,
  "explanation": "Combining '-n 20' to limit lines and '-f' to follow new data lets an admin monitor the file efficiently. Conclusion: tail -f -n 20 file.log"
 },
 {
  "sourceSets": [
   2
  ],
  "text": "In the Linux filesystem, which of the following is NOT stored in an 'Inode'?",
  "options": [
   "The file's name.",
   "The file's size.",
   "The last access and modification time.",
   "The physical location of the data blocks on disk."
  ],
  "correctIndex": 0,
  "explanation": "An inode holds most of a file's metadata, but the actual filename is stored in directory entries. Conclusion: The file's name."
 },
 {
  "sourceSets": [
   2
  ],
  "text": "Which command checks listening network ports and current network connections on the system?",
  "options": [
   "ifconfig -a",
   "ss -tunlp",
   "ping -c 4 localhost",
   "traceroute 8.8.8.8"
  ],
  "correctIndex": 1,
  "explanation": "'ss' (or the older 'netstat') with appropriate options lists the state of network sockets and the processes using them. Conclusion: ss -tunlp"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which Linux OS component is directly responsible for managing hardware resources and providing services to applications?",
  "options": [
   "Kernel",
   "Shell",
   "Terminal",
   "Desktop Environment"
  ],
  "correctIndex": 0,
  "explanation": "Per Linux's architecture, the Kernel is the core that coordinates CPU, memory and peripherals for software. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "In Linux, which directory holds important configuration files for the whole system and installed applications?",
  "options": [
   "/bin",
   "/etc",
   "/var",
   "/usr"
  ],
  "correctIndex": 1,
  "explanation": "Per the Filesystem Hierarchy Standard (FHS), /etc stores system configuration files for administrators. Conclusion: /etc"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command is used to change the access permissions of a file or directory in Linux?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "chmod (change mode) lets a user change read, write and execute permissions for owner, group and others. Conclusion: chmod"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "When running 'chmod 755 filename', what permission do Group and Others get?",
  "options": [
   "Read only",
   "Read and execute",
   "Read and write",
   "Full read, write, execute"
  ],
  "correctIndex": 1,
  "explanation": "Digit 5 in octal equals read (4) plus execute (1), applied to the Group and Others positions. Conclusion: Read and execute"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which symbol is used on the Linux command line to feed one command's output as input to another?",
  "options": [
   "Curly braces { }",
   "Pipe |",
   "Greater-than >",
   "Ampersand &"
  ],
  "correctIndex": 1,
  "explanation": "The pipe is a powerful shell mechanism connecting the data stream between different processes. Conclusion: Pipe |"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command lets a regular user execute a command with administrator (root) privileges?",
  "options": [
   "sudo",
   "runas",
   "admin",
   "su -l"
  ],
  "correctIndex": 0,
  "explanation": "sudo (superuser do) is designed to grant temporary privileges for a user to safely perform admin tasks. Conclusion: sudo"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "To list all files, including hidden ones (starting with a dot), which option do you use with ls?",
  "options": [
   "ls -l",
   "ls -a",
   "ls -h",
   "ls -r"
  ],
  "correctIndex": 1,
  "explanation": "The '-a' (all) option tells ls to show every entry in a directory, including hidden files. Conclusion: ls -a"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command is used to search for a specific text string inside one or more text files?",
  "options": [
   "find",
   "grep",
   "locate",
   "search"
  ],
  "correctIndex": 1,
  "explanation": "grep (Global Regular Expression Print) is the dedicated tool for filtering and finding lines matching a pattern in text. Conclusion: grep"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "In the vi or vim text editor, which key switches from Command mode to Insert mode?",
  "options": [
   "The Esc key",
   "The i key",
   "The x key",
   "The w key"
  ],
  "correctIndex": 1,
  "explanation": "In vim, pressing 'i' activates Insert mode at the current cursor position to begin typing. Conclusion: The i key"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command shows used and free disk space on the system's partitions?",
  "options": [
   "du",
   "df",
   "free",
   "top"
  ],
  "correctIndex": 1,
  "explanation": "The df (disk free) command reports a summary of disk space usage across all mounted filesystems. Conclusion: df"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Where is the default home directory of the root user located in Linux?",
  "options": [
   "/home/root",
   "/root",
   "/bin/root",
   "/etc/root"
  ],
  "correctIndex": 1,
  "explanation": "Unlike regular users under /home, the root administrator has a separate home directory at /root to ensure safety at boot time. Conclusion: /root"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "To compress and bundle multiple files into a single .tar.gz archive, which tar flag combination is typically used?",
  "options": [
   "tar -xvf",
   "tar -czvf",
   "tar -tvf",
   "tar -rvf"
  ],
  "correctIndex": 1,
  "explanation": "In tar, '-c' creates, '-z' compresses with gzip, '-v' shows progress, and '-f' names the file. Conclusion: tar -czvf"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command is used to view the detailed manual pages for any Linux command?",
  "options": [
   "help",
   "man",
   "info",
   "whatis"
  ],
  "correctIndex": 1,
  "explanation": "man provides the standard documentation lookup interface for most commands and config files in the system. Conclusion: man"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which signal does 'kill -9' send to force a process to stop immediately, unable to be ignored?",
  "options": [
   "SIGTERM",
   "SIGKILL",
   "SIGINT",
   "SIGHUP"
  ],
  "correctIndex": 1,
  "explanation": "9 represents SIGKILL, a kernel-level forced termination that gives the process no chance to clean up resources. Conclusion: SIGKILL"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "On Debian or Ubuntu-based systems, which command is most commonly used to install a new software package from an online repository?",
  "options": [
   "yum install",
   "apt-get install",
   "rpm -i",
   "dnf install"
  ],
  "correctIndex": 1,
  "explanation": "The Advanced Package Tool (APT), via apt-get or apt, is the standard package manager for Debian and its derivatives. Conclusion: apt-get install"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command creates an empty text file or updates the access time of an existing file?",
  "options": [
   "new",
   "touch",
   "create",
   "make"
  ],
  "correctIndex": 1,
  "explanation": "touch is mainly used to change a file's timestamp, or quickly create a new file if it doesn't exist. Conclusion: touch"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "To know the absolute path of the current working directory, which command do you use?",
  "options": [
   "dir",
   "pwd",
   "whereami",
   "path"
  ],
  "correctIndex": 1,
  "explanation": "pwd (print working directory) returns the full path from the root to the directory the user is currently in. Conclusion: pwd"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "To append a command's output to the end of a text file without deleting the old content, which operator do you use?",
  "options": [
   ">",
   ">>",
   "|",
   "<"
  ],
  "correctIndex": 1,
  "explanation": "While '>' overwrites, the '>>' operator appends data to the end of an existing file. Conclusion: >>"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command is used to create a symbolic link between two files or directories?",
  "options": [
   "link -s",
   "ln -s",
   "sln",
   "cp -l"
  ],
  "correctIndex": 1,
  "explanation": "ln with '-s' (symbolic) creates a shortcut pointing to another file or directory's path. Conclusion: ln -s"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which directory in Linux contains the executables needed for the system to boot and run in single-user mode?",
  "options": [
   "/usr/bin",
   "/bin",
   "/opt",
   "/home"
  ],
  "correctIndex": 1,
  "explanation": "/bin contains the most basic binaries like ls, cp, mv that every user and the system itself need. Conclusion: /bin"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command is used to view a text file's content directly on the terminal without opening an editor?",
  "options": [
   "view",
   "cat",
   "show",
   "open"
  ],
  "correctIndex": 1,
  "explanation": "cat (concatenate) is often used to join files, or simply to print a file's entire content to standard output. Conclusion: cat"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which parameter of the tail command lets you follow a log file's content in real time as new data is written?",
  "options": [
   "-n",
   "-f",
   "-r",
   "-s"
  ],
  "correctIndex": 1,
  "explanation": "The '-f' (follow) option keeps tail running, waiting for and displaying new lines as they appear in the file. Conclusion: -f"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "To rename a file from 'oldname.txt' to 'newname.txt', which command do you use?",
  "options": [
   "rename oldname.txt newname.txt",
   "mv oldname.txt newname.txt",
   "cp oldname.txt newname.txt",
   "name oldname.txt newname.txt"
  ],
  "correctIndex": 1,
  "explanation": "mv (move) in Linux is used both for moving a file to another directory and for renaming it. Conclusion: mv oldname.txt newname.txt"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which command deletes a directory and all its files and subdirectories without asking for confirmation?",
  "options": [
   "rm -d",
   "rm -rf",
   "rmdir",
   "del -a"
  ],
  "correctIndex": 1,
  "explanation": "Combining '-r' (recursive) and '-f' (force) lets you quickly and dangerously wipe out an entire directory tree. Conclusion: rm -rf"
 },
 {
  "sourceSets": [
   3
  ],
  "text": "Which tool provides an interactive interface to monitor running processes and system resource usage (CPU, RAM) in real time?",
  "options": [
   "ps -ef",
   "top",
   "free -m",
   "uptime"
  ],
  "correctIndex": 1,
  "explanation": "top displays a continuously-updated list of active processes and overall system performance metrics. Conclusion: top"
 },
 {
  "sourceSets": [
   4
  ],
  "text": "In Linux, which signal is sent by default when running the 'kill' command to request a process shut down gracefully?",
  "options": [
   "SIGKILL (9)",
   "SIGSTOP (19)",
   "SIGTERM (15)",
   "SIGINT (2)"
  ],
  "correctIndex": 2,
  "explanation": "Per POSIX convention, SIGTERM (15) is kill's default signal, giving the process a chance to clean up and close files before stopping. Conclusion: SIGTERM (15)."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which directory in the Linux filesystem hierarchy holds configuration files for the whole system?",
  "options": [
   "/bin",
   "/etc",
   "/var",
   "/usr"
  ],
  "correctIndex": 1,
  "explanation": "'/etc' is designed to store all system configuration files and the startup scripts for services. Conclusion: /etc."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which octal permission value '755' corresponds to which of the following permission strings?",
  "options": [
   "rwxr-xr-x",
   "rwx-r--r--",
   "rwxrwxrwx",
   "rw-r--r--"
  ],
  "correctIndex": 0,
  "explanation": "'755' corresponds to 'rwx' (7) for owner, 'r-x' (5) for group, and 'r-x' (5) for others. Conclusion: rwxr-xr-x."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which option of the 'grep' command lets you search for a string case-insensitively?",
  "options": [
   "-v",
   "-l",
   "-n",
   "-i"
  ],
  "correctIndex": 3,
  "explanation": "The '-i' (ignore case) option in grep ignores the difference between uppercase and lowercase during the search. Conclusion: -i."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "To append content to the end of an existing file without losing the old data, which redirection symbol should you use?",
  "options": [
   ">",
   ">>",
   "2>",
   "<"
  ],
  "correctIndex": 1,
  "explanation": "The '>>' symbol in Linux redirects standard output to the end of a file instead of fully overwriting old content like '>' does. Conclusion: >>."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command is used on Debian-based distributions to refresh the package list from the repositories?",
  "options": [
   "apt upgrade",
   "apt install",
   "apt update",
   "apt remove"
  ],
  "correctIndex": 2,
  "explanation": "'apt update' downloads the latest package metadata from the repository so the system knows which software versions are currently available. Conclusion: apt update."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which file stores the encrypted password information of users on a Linux system?",
  "options": [
   "/etc/passwd",
   "/etc/shadow",
   "/etc/group",
   "/etc/gshadow"
  ],
  "correctIndex": 1,
  "explanation": "On modern Linux systems, '/etc/shadow' stores encrypted passwords for stronger security than storing them directly in '/etc/passwd'. Conclusion: /etc/shadow."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "In the Bash shell, which command turns a local variable into an environment variable accessible by child processes?",
  "options": [
   "set",
   "alias",
   "export",
   "env"
  ],
  "correctIndex": 2,
  "explanation": "'export' marks a variable so that it is passed into the environment of any child process spawned from the current shell. Conclusion: export."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which standard Linux directory usually holds log files for the system and applications?",
  "options": [
   "/var/log",
   "/usr/log",
   "/etc/log",
   "/home/log"
  ],
  "correctIndex": 0,
  "explanation": "Most log files recording system and service activity are centrally stored in the '/var/log' directory. Conclusion: /var/log."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "To set up a service to start automatically with the system using 'systemd', which command do you need?",
  "options": [
   "systemctl start",
   "systemctl enable",
   "systemctl reload",
   "systemctl status"
  ],
  "correctIndex": 1,
  "explanation": "'systemctl enable' creates the symbolic links needed for systemd to know the service should start at the next boot. Conclusion: systemctl enable."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command shows the disk space used by a specific directory in a human-readable format?",
  "options": [
   "df -h",
   "du -sh",
   "ls -l",
   "free -m"
  ],
  "correctIndex": 1,
  "explanation": "'du -sh' (disk usage) totals a directory's size and shows a shortened result in units like KB, MB or GB. Conclusion: du -sh."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which filesystem structure stores a file's metadata (permissions, size, modification time) but not its name?",
  "options": [
   "Superblock",
   "Data block",
   "Inode",
   "Hard link"
  ],
  "correctIndex": 2,
  "explanation": "Every file on a Linux filesystem is represented by an 'Inode' (index node) holding all info about the file except its name and actual content. Conclusion: Inode."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "What is the default service port for the Secure Shell (SSH) protocol?",
  "options": [
   "21",
   "22",
   "23",
   "80"
  ],
  "correctIndex": 1,
  "explanation": "The SSH protocol standardly uses TCP port 22 to establish encrypted remote control connections. Conclusion: 22."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "What is the area of disk space used to extend physical RAM when the system runs out of memory called?",
  "options": [
   "Cache memory",
   "Buffer memory",
   "Swap space",
   "Virtual drive"
  ],
  "correctIndex": 2,
  "explanation": "'Swap' space lets the OS move infrequently-used memory pages from RAM to disk, freeing RAM for other tasks. Conclusion: Swap space."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command lets you review the list of commands you've run in the current session?",
  "options": [
   "last",
   "history",
   "logs",
   "echo"
  ],
  "correctIndex": 1,
  "explanation": "The 'history' command reads the shell's history file to display the list of previously typed commands. Conclusion: history."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "To list all processes running on the system, including those of other users, which option is typically used with 'ps'?",
  "options": [
   "ps -a",
   "ps -x",
   "ps -ef",
   "ps -u"
  ],
  "correctIndex": 2,
  "explanation": "The '-ef' (or 'aux') option of 'ps' provides a full listing of all active processes for every user on the system. Conclusion: ps -ef."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which environment variable holds the path to the default shell currently used by the user?",
  "options": [
   "$HOME",
   "$PATH",
   "$USER",
   "$SHELL"
  ],
  "correctIndex": 3,
  "explanation": "The '$SHELL' variable stores the absolute path to the shell executable the user is using, such as '/bin/bash'. Conclusion: $SHELL."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command is used to decompress a '.tar.gz' file?",
  "options": [
   "tar -czvf file.tar.gz",
   "tar -xzvf file.tar.gz",
   "tar -tvf file.tar.gz",
   "tar -rzvf file.tar.gz"
  ],
  "correctIndex": 1,
  "explanation": "In tar, '-x' extracts, '-z' handles the gzip format, '-v' shows progress, and '-f' names the file. Conclusion: tar -xzvf file.tar.gz."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "In the Vi/Vim text editor, which key combination saves changes and exits the program?",
  "options": [
   ":q!",
   ":w",
   ":wq",
   ":x!"
  ],
  "correctIndex": 2,
  "explanation": "In Vim's command-line mode, ':wq' (write and quit) both writes data to disk and closes the editor. Conclusion: :wq."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command checks disk partition information and free space on a Linux system?",
  "options": [
   "free -h",
   "df -h",
   "du -sh",
   "mount"
  ],
  "correctIndex": 1,
  "explanation": "'df -h' (disk free) reports used and free disk space on mounted filesystems in human-readable form. Conclusion: df -h."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which command is used to change the owner of a file or directory in Linux?",
  "options": [
   "chmod",
   "chown",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "'chown' (change owner) lets an administrator change the owning user and group of a file or directory. Conclusion: chown."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "To search for files ending in '.log' in the current directory and its subdirectories, which command do you use?",
  "options": [
   "ls *.log",
   "find . -name '*.log'",
   "search . -name *.log",
   "locate *.log"
  ],
  "correctIndex": 1,
  "explanation": "'find' with '.' for the current directory and '-name' for the filename pattern to search. Conclusion: find . -name '*.log'."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which default umask value results in new files having permission '666' (read+write for everyone)?",
  "options": [
   "022",
   "077",
   "000",
   "002"
  ],
  "correctIndex": 2,
  "explanation": "The umask value acts as a permission mask, so '000' removes no permissions, keeping the default file permission at '666'. Conclusion: 000."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "In the Linux directory tree, which directory usually holds the personal data and configuration files of regular users?",
  "options": [
   "/root",
   "/home",
   "/usr",
   "/var"
  ],
  "correctIndex": 1,
  "explanation": "'/home' is the default location where the system creates separate subdirectories for each user's personal data. Conclusion: /home."
 },
 {
  "sourceSets": [
   4
  ],
  "text": "Which 'shebang' character sequence typically appears on the first line of a shell script to specify the interpreter that runs it?",
  "options": [
   "!!/bin/bash",
   "##/bin/bash",
   "#!/bin/bash",
   "$!/bin/bash"
  ],
  "correctIndex": 2,
  "explanation": "The '#!' string (read 'shebang'), followed by the interpreter's path, tells the kernel which program to use to run the script. Conclusion: #!/bin/bash."
 },
 {
  "sourceSets": [
   5
  ],
  "text": "In Linux, which component acts as the 'core' controlling all system activity and managing hardware resources?",
  "options": [
   "Shell",
   "Kernel",
   "Terminal",
   "Desktop Environment"
  ],
  "correctIndex": 1,
  "explanation": "By system architecture, the Kernel is the central component that manages hardware and provides services for applications. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "On modern Linux systems (like Ubuntu, CentOS 7+), what is the first process started by the Kernel usually named, and what PID does it have?",
  "options": [
   "bash with PID 0",
   "systemd with PID 1",
   "init with PID 0",
   "kernel_task with PID 1"
  ],
  "correctIndex": 1,
  "explanation": "On modern Linux distributions, systemd is the parent of every other process and always holds PID 1. Conclusion: systemd with PID 1"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which command is used to change the owner of a file or directory in Linux?",
  "options": [
   "chmod",
   "chown",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "'chown' (change owner) is designed to change the owning user and group of filesystem objects. Conclusion: chown"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "When using 'chmod 754 file.txt', what specific permission does the owning group have on this file?",
  "options": [
   "Read and Execute",
   "Read, Write and Execute",
   "Read only",
   "Write and Execute"
  ],
  "correctIndex": 0,
  "explanation": "Digit 5 in octal corresponds to Read (4) and Execute (1) for the owning group. Conclusion: Read and Execute"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which symbol is used to redirect standard error output to a file on the Linux command line?",
  "options": [
   "1>",
   "2>",
   ">>",
   "<"
  ],
  "correctIndex": 1,
  "explanation": "In Linux, file descriptor 2 represents Standard Error, so '2>' is used to redirect that stream. Conclusion: 2>"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which signal does 'kill -9 [PID]' send to force a process to end immediately, unable to be ignored?",
  "options": [
   "SIGTERM",
   "SIGKILL",
   "SIGSTOP",
   "SIGINT"
  ],
  "correctIndex": 1,
  "explanation": "The SIGKILL signal (number 9) requests the OS terminate the process immediately, with no chance to clean up or block the signal. Conclusion: SIGKILL"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "In the Linux filesystem, which is an important characteristic of a 'Hard Link'?",
  "options": [
   "It can point to a directory",
   "It shares the same Inode number as the original file",
   "It can link across different disk partitions",
   "It breaks if the original file is deleted"
  ],
  "correctIndex": 1,
  "explanation": "A hard link is essentially another name pointing to the same data inode on the same filesystem. Conclusion: It shares the same Inode number as the original file"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which file stores users' encrypted (hashed) password information in Linux for security?",
  "options": [
   "/etc/passwd",
   "/etc/shadow",
   "/etc/group",
   "/var/log/auth.log"
  ],
  "correctIndex": 1,
  "explanation": "'/etc/shadow' is tightly secured and only contains password hashes plus password expiration info. Conclusion: /etc/shadow"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "To check free disk space on partitions in a human-readable format (GB, MB), which command should you use?",
  "options": [
   "du -sh",
   "df -h",
   "free -m",
   "ls -lh"
  ],
  "correctIndex": 1,
  "explanation": "'df' (disk free) with '-h' (human-readable) shows disk space information for mounted filesystems. Conclusion: df -h"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "What does the command grep -i 'linux' file.txt do when searching for a text string?",
  "options": [
   "Searches for lines not containing the word 'linux'",
   "Searches for the word 'linux' ignoring case",
   "Counts how many times 'linux' appears",
   "Only searches for the exact lowercase word 'linux'"
  ],
  "correctIndex": 1,
  "explanation": "The '-i' (ignore case) parameter in grep lets it search for a pattern regardless of upper/lower case. Conclusion: Searches for the word 'linux' ignoring case"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "To set up passwordless SSH access via a Public Key, where must the client's public key be stored on the server?",
  "options": [
   "~/.ssh/id_rsa",
   "~/.ssh/authorized_keys",
   "/etc/ssh/sshd_config",
   "~/.ssh/known_hosts"
  ],
  "correctIndex": 1,
  "explanation": "The SSH server checks the 'authorized_keys' file in the user's directory to authenticate allowed public keys. Conclusion: ~/.ssh/authorized_keys"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "A periodic Crontab task formatted '0 5 * * 1 command' will run at which time?",
  "options": [
   "5 AM every day",
   "5 AM every Monday",
   "5 AM on the 5th of every month",
   "5 PM every Monday"
  ],
  "correctIndex": 1,
  "explanation": "Per crontab syntax, the fields in order are minute (0), hour (5), day, month, and weekday (1 is Monday). Conclusion: 5 AM every Monday"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which 'tar' parameter is used to compress files with the gzip algorithm while creating an archive?",
  "options": [
   "-j",
   "-z",
   "-x",
   "-v"
  ],
  "correctIndex": 1,
  "explanation": "In tar, the '-z' option enables the gzip filter for compressing or decompressing data. Conclusion: -z"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which Linux environment variable holds the list of directories the Shell searches for executables when a user types a command?",
  "options": [
   "HOME",
   "PATH",
   "PWD",
   "SHELL"
  ],
  "correctIndex": 1,
  "explanation": "The PATH variable defines the search directories for executable commands, so users don't need to type the program's full path. Conclusion: PATH"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "If the current umask value is 0022, what is the default permission of a newly created file (not a directory)?",
  "options": [
   "755",
   "644",
   "666",
   "777"
  ],
  "correctIndex": 1,
  "explanation": "The maximum default file permission is 666; subtracting umask 022 leaves permission 644 (rw-r--r--). Conclusion: 644"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which command shows the real-time status of running processes and which ones consume the most CPU/RAM?",
  "options": [
   "ps -aux",
   "top",
   "uptime",
   "vmstat"
  ],
  "correctIndex": 1,
  "explanation": "'top' provides a dynamic, continuously-updated view of active system processes and their resource usage. Conclusion: top"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which configuration file controls automatically mounting disk partitions when the Linux system boots?",
  "options": [
   "/etc/mtab",
   "/etc/fstab",
   "/etc/exports",
   "/boot/grub/grub.cfg"
  ],
  "correctIndex": 1,
  "explanation": "'/etc/fstab' (file system table) lists storage devices and their mount points so the system recognizes them automatically at boot. Conclusion: /etc/fstab"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "What is the main difference between 'systemctl start service' and 'systemctl enable service'?",
  "options": [
   "'start' starts the service immediately, 'enable' makes it start automatically at boot",
   "'enable' starts the service immediately, 'start' makes it start automatically at boot",
   "'start' is only for root, 'enable' is for any user",
   "Both commands do exactly the same thing"
  ],
  "correctIndex": 0,
  "explanation": "'start' activates the service in the current session, while 'enable' creates the symbolic links so the service loads with the system. Conclusion: 'start' starts the service immediately, 'enable' makes it start automatically at boot"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "In Bash scripting, what value does the special variable '$?' hold after a command executes?",
  "options": [
   "The PID of the command just run",
   "The exit status of the command just executed",
   "The name of the command just run",
   "How long the command took to run"
  ],
  "correctIndex": 1,
  "explanation": "The '$?' variable returns the result of the most recent command, with 0 usually meaning success and non-zero meaning an error. Conclusion: The exit status of the command just executed"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which of the following is NOT stored by the 'Inode' concept in the Linux filesystem?",
  "options": [
   "Access permissions and owner",
   "The file's name",
   "The file's size",
   "The last data modification time"
  ],
  "correctIndex": 1,
  "explanation": "An inode stores a file's attributes and data location, but the filename is stored in the directory entry, not the inode. Conclusion: The file's name"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "What is the special device '/dev/null' in Linux typically used for?",
  "options": [
   "Temporarily storing junk files",
   "Discarding any data written to it",
   "Generating an unlimited stream of blank characters",
   "Storing system logs when the disk is full"
  ],
  "correctIndex": 1,
  "explanation": "Any data redirected into '/dev/null' is completely and immediately discarded by the operating system. Conclusion: Discarding any data written to it"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which command is used to automatically find and replace a text string in a file without opening an editor?",
  "options": [
   "grep",
   "sed",
   "awk",
   "cat"
  ],
  "correctIndex": 1,
  "explanation": "'sed' (stream editor) is commonly used for text transformations, especially search-and-replace by pattern. Conclusion: sed"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "What does a process's 'Nice' value affect in Linux?",
  "options": [
   "Its CPU scheduling priority",
   "How much RAM it's allowed to use",
   "Its maximum lifetime",
   "Its network access permissions"
  ],
  "correctIndex": 0,
  "explanation": "The Nice value (-20 to 19) helps the kernel scheduler determine a process's processing priority relative to others. Conclusion: Its CPU scheduling priority"
 },
 {
  "sourceSets": [
   5
  ],
  "text": "Which file holds basic user info such as username, home directory and default shell?",
  "options": [
   "/etc/shadow",
   "/etc/passwd",
   "/etc/group",
   "/etc/shells"
  ],
  "correctIndex": 1,
  "explanation": "'/etc/passwd' is the plain-text database holding basic configuration info for every user account on the system. Conclusion: /etc/passwd"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which octal value does the file permission 'rwxr-x---' correspond to in Linux?",
  "options": [
   "755",
   "750",
   "640",
   "710"
  ],
  "correctIndex": 1,
  "explanation": "By convention r=4, w=2, x=1, so rwx is 7, r-x is 5, and --- is 0. Conclusion: 750"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which command is used to find files ending in '.log' in the '/var/log' directory, including subdirectories?",
  "options": [
   "ls /var/log/*.log",
   "search /var/log -name '*.log'",
   "find /var/log -name '*.log'",
   "locate /var/log/*.log"
  ],
  "correctIndex": 2,
  "explanation": "'find' is a powerful tool for searching files by name, size or attributes across an entire directory tree. Conclusion: find /var/log -name '*.log'"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What is the default signal sent to a process when a user runs 'kill [PID]' with no extra parameter?",
  "options": [
   "SIGKILL",
   "SIGSTOP",
   "SIGTERM",
   "SIGINT"
  ],
  "correctIndex": 2,
  "explanation": "'kill' defaults to sending SIGTERM (signal 15), requesting the process end safely and in a controlled way. Conclusion: SIGTERM"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "To count the total lines containing 'error' in the 'syslog' file, case-insensitively, which command do you use?",
  "options": [
   "grep -ic 'error' syslog",
   "grep -n 'error' syslog",
   "count 'error' syslog",
   "grep -v 'error' syslog"
  ],
  "correctIndex": 0,
  "explanation": "In grep, '-i' ignores case and '-c' counts the lines matching the pattern. Conclusion: grep -ic 'error' syslog"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which filesystem structure stores a file's metadata such as size, owner and permissions?",
  "options": [
   "Superblock",
   "Inode",
   "Data block",
   "Directory entry"
  ],
  "correctIndex": 1,
  "explanation": "An Inode is a filesystem data structure holding detailed file info except for the filename and actual content. Conclusion: Inode"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What is the single most fundamental difference between a Hard Link and a Symbolic (Soft) Link in Linux?",
  "options": [
   "A Hard Link can point to a directory but a Symbolic Link cannot",
   "A Hard Link points to the same Inode number as the original file while a Symbolic Link creates a new inode",
   "A Symbolic Link stops working if the original file is moved to another partition",
   "A Hard Link uses more disk space than a Symbolic Link"
  ],
  "correctIndex": 1,
  "explanation": "A Hard Link links directly to the source file's Inode on the same partition, while a Symbolic Link is just a text pointer to that path. Conclusion: A Hard Link points to the same Inode number as the original file while a Symbolic Link creates a new inode"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which environment variable defines the list of directories the system searches when a user runs a command?",
  "options": [
   "HOME",
   "SHELL",
   "PATH",
   "PWD"
  ],
  "correctIndex": 2,
  "explanation": "The 'PATH' variable holds a colon-separated list of directories for the shell to search for the matching executable. Conclusion: PATH"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which file in Linux stores users' encrypted passwords to enhance security?",
  "options": [
   "/etc/passwd",
   "/etc/shadow",
   "/etc/group",
   "/etc/gshadow"
  ],
  "correctIndex": 1,
  "explanation": "'/etc/shadow' is designed to store encrypted passwords and expiration info, readable only by root. Conclusion: /etc/shadow"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which operator is used on the command line to append a command's output to the end of an existing file?",
  "options": [
   ">",
   "|",
   ">>",
   "<"
  ],
  "correctIndex": 2,
  "explanation": "The '>>' operator redirects standard output by appending to the end of existing content instead of overwriting it. Conclusion: >>"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which command reports used and free disk space on mounted filesystems?",
  "options": [
   "du",
   "df",
   "free",
   "lsblk"
  ],
  "correctIndex": 1,
  "explanation": "'df' (disk free) displays a detailed report of disk space on the filesystems currently active on the machine. Conclusion: df"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "On Debian-based distributions like Ubuntu, which command synchronizes the software package list from the server to the local machine?",
  "options": [
   "sudo apt install",
   "sudo apt upgrade",
   "sudo apt update",
   "sudo apt dist-upgrade"
  ],
  "correctIndex": 2,
  "explanation": "'apt update' refreshes the package index from the repository so the system knows which new versions are available. Conclusion: sudo apt update"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which directory in the Linux filesystem (FHS) holds important configuration files for the entire system?",
  "options": [
   "/bin",
   "/etc",
   "/var",
   "/usr"
  ],
  "correctIndex": 1,
  "explanation": "'/etc' stores static configuration files for the operating system and installed service applications. Conclusion: /etc"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What is the main function of the pipe symbol '|' in Linux?",
  "options": [
   "Run two commands simultaneously in parallel",
   "Write a command's result to a file",
   "Feed the output of the preceding command as input to the following one",
   "Stop executing a command if an error occurs"
  ],
  "correctIndex": 2,
  "explanation": "The pipe lets you connect commands together, feeding one command's stdout as the next one's stdin. Conclusion: Feed the output of the preceding command as input to the following one"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "To run a program or script in the background from the moment it starts, which character do you add to the end of the command?",
  "options": [
   "%",
   "!",
   "&",
   "@"
  ],
  "correctIndex": 2,
  "explanation": "Adding '&' to the end of a command tells the shell to run the process in the background, freeing you to keep typing other commands. Conclusion: &"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What does the 'Sticky Bit' attribute do when set on a shared directory (like /tmp)?",
  "options": [
   "Prevents all users from writing data into that directory",
   "Only lets a file's owner delete that file inside the directory",
   "Automatically backs up all files when they're created",
   "Lets every user execute any file in the directory"
  ],
  "correctIndex": 1,
  "explanation": "The Sticky Bit protects files in a public directory by restricting delete permission to the file's owner or root. Conclusion: Only lets a file's owner delete that file inside the directory"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which command shows system uptime, number of logged-in users, and average CPU load?",
  "options": [
   "top",
   "uptime",
   "who",
   "stat"
  ],
  "correctIndex": 1,
  "explanation": "'uptime' provides a one-line summary of the system's operational status and current load. Conclusion: uptime"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What is the main purpose of the 'sudo' command in Linux?",
  "options": [
   "Change the current user's password",
   "Create a new user account on the system",
   "Execute a command with administrator (root) privileges",
   "List all running processes"
  ],
  "correctIndex": 2,
  "explanation": "'sudo' (superuser do) lets a regular user perform admin tasks after authenticating with their own password. Conclusion: Execute a command with administrator (root) privileges"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "To check the current IP address of network interfaces on a modern Linux system, which command is recommended?",
  "options": [
   "ifconfig",
   "netstat -rn",
   "ip addr",
   "ping localhost"
  ],
  "correctIndex": 2,
  "explanation": "On newer Linux distributions, 'ip addr' from the iproute2 package has replaced the now-deprecated 'ifconfig'. Conclusion: ip addr"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What is the most common bootloader used to manage the boot process of today's Linux distributions?",
  "options": [
   "LILO",
   "GRUB",
   "BOOTMGR",
   "Syslinux"
  ],
  "correctIndex": 1,
  "explanation": "GRUB (Grand Unified Bootloader) is the standard bootloader able to load multiple OSes and show a boot-time menu. Conclusion: GRUB"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "To decompress a '.tar.gz' file with the 'tar' command, which option combination do you use?",
  "options": [
   "-cvf",
   "-tvf",
   "-xzf",
   "-rvf"
  ],
  "correctIndex": 2,
  "explanation": "The 'x' option extracts, 'z' handles the gzip format, and 'f' names the file to process. Conclusion: -xzf"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which configuration file in a user's home directory (~/) is run by the shell every time a new Bash session starts?",
  "options": [
   ".bash_history",
   ".bashrc",
   "/etc/profile",
   ".bash_logout"
  ],
  "correctIndex": 1,
  "explanation": "'.bashrc' holds personal environment settings, functions and command aliases loaded for every interactive shell. Conclusion: .bashrc"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which command lets you follow a log file's content in real time as new data is added?",
  "options": [
   "cat -n",
   "head -10",
   "tail -f",
   "less +G"
  ],
  "correctIndex": 2,
  "explanation": "The '-f' option of 'tail' keeps the file open and immediately shows new lines written to its end. Conclusion: tail -f"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "Which system component does the Linux 'free' command report information about?",
  "options": [
   "CPU processing speed",
   "Physical memory (RAM) and swap memory",
   "Free space on hard disks",
   "Current network bandwidth usage"
  ],
  "correctIndex": 1,
  "explanation": "'free' shows the total amount of physical and virtual memory on the system along with their usage status. Conclusion: Physical memory (RAM) and swap memory"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "What role does the '/etc/fstab' file play in Linux operation?",
  "options": [
   "Stores the command history of the root user",
   "Configures the list of processes that start with the system",
   "Holds configuration info to automatically mount disk partitions",
   "Defines a list of blocked IP addresses"
  ],
  "correctIndex": 2,
  "explanation": "The system reads '/etc/fstab' at boot to determine how and where to mount filesystems into the root directory tree. Conclusion: Holds configuration info to automatically mount disk partitions"
 },
 {
  "sourceSets": [
   6
  ],
  "text": "In the Vim text editor, which command do you type to save all changes and quit to the terminal?",
  "options": [
   ":q!",
   ":w",
   ":wq",
   ":x!"
  ],
  "correctIndex": 2,
  "explanation": "The ':wq' combination is the write + quit command to finish editing text in Vim. Conclusion: :wq"
 },
 {
  "sourceSets": [
   7
  ],
  "text": "In Linux, which command is used to change access permissions of a file or directory?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "'chmod' ('change mode') is the standard tool for setting read, write and execute permissions for user, group and others. Conclusion: chmod."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which directory in the Linux directory tree holds important system configuration files?",
  "options": [
   "/bin",
   "/home",
   "/etc",
   "/var"
  ],
  "correctIndex": 2,
  "explanation": "'/etc' is where all system configuration files and the startup scripts needed to run the machine are stored. Conclusion: /etc."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "To end (kill) a running process based on its ID (PID), which command should you use?",
  "options": [
   "stop",
   "terminate",
   "exit",
   "kill"
  ],
  "correctIndex": 3,
  "explanation": "'kill' sends signals (SIGTERM by default) to a specific process by PID to request it stop. Conclusion: kill."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which symbol represents the topmost root directory in the Linux filesystem?",
  "options": [
   "~ (tilde)",
   "/ (forward slash)",
   "\\ (backslash)",
   ". (dot)"
  ],
  "correctIndex": 1,
  "explanation": "In Linux's hierarchy, the forward slash '/' is the starting point of every path and is called the Root directory. Conclusion: / (forward slash)."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "In the package manager of Debian-based distributions like Ubuntu, which command installs a new package from an online repository?",
  "options": [
   "yum install",
   "pacman -S",
   "rpm -i",
   "apt-get install"
  ],
  "correctIndex": 3,
  "explanation": "The APT package management system uses 'apt-get install' or 'apt install' to download and install software from official servers. Conclusion: apt-get install."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "To view a text file's content right on the terminal without opening an editor, what is the most common command?",
  "options": [
   "cat",
   "open",
   "view",
   "read"
  ],
  "correctIndex": 0,
  "explanation": "'cat' is commonly used to concatenate files and print their contents to standard output (the screen). Conclusion: cat."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What does the numeric permission '644' mean on a file?",
  "options": [
   "Owner has read and write; group and others have read only.",
   "Everyone has read, write and execute.",
   "Owner has full permissions; group has read; others have none.",
   "Owner has read only; group and others have write."
  ],
  "correctIndex": 0,
  "explanation": "In decimal, 6 means read and write (4+2), and 4 means read-only. Conclusion: Owner has read and write; group and others have read only."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which file on a Linux system typically stores user account information (except the encrypted password)?",
  "options": [
   "/etc/shadow",
   "/etc/group",
   "/etc/passwd",
   "/etc/config"
  ],
  "correctIndex": 2,
  "explanation": "'/etc/passwd' contains basic identity info for users like login name, UID, GID and home directory. Conclusion: /etc/passwd."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What is the main function of the 'grep' command in Linux?",
  "options": [
   "Sort a file's content alphabetically.",
   "Search for lines of text matching a given pattern or string.",
   "Copy a file from one directory to another.",
   "Compress a file into .gz format."
  ],
  "correctIndex": 1,
  "explanation": "'grep' is a powerful tool for finding lines containing a given string or regular expression in text files. Conclusion: Search for lines of text matching a given pattern or string."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command is used to change the owner of a file or directory?",
  "options": [
   "chmod",
   "chown",
   "useradd",
   "usermod"
  ],
  "correctIndex": 1,
  "explanation": "'chown' (change owner) lets an administrator change file ownership for a given user or group. Conclusion: chown."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What does the symbol '>>' mean in the Linux command line when redirecting output?",
  "options": [
   "Overwrite a file's content with the command's result.",
   "Use a file's content as input to a command.",
   "Append the command's result to the end of a file's existing content.",
   "Redirect error messages to the screen."
  ],
  "correctIndex": 2,
  "explanation": "While '>' overwrites the old file, '>>' appends data to the end of the file's existing content. Conclusion: Append the command's result to the end of a file's existing content."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "In the Vi/Vim text editor, which key switches from command mode to Insert mode?",
  "options": [
   "Esc",
   "x",
   "i",
   "q"
  ],
  "correctIndex": 2,
  "explanation": "The 'i' key is most commonly used to start entering text at the current cursor position in the Vim editor. Conclusion: i."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command displays the list of currently active processes in real time?",
  "options": [
   "ps -ef",
   "top",
   "ls",
   "df"
  ],
  "correctIndex": 1,
  "explanation": "'top' provides a dynamic view of the processes consuming the most CPU and RAM on the system. Conclusion: top."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What does the first line (Shebang) of a Bash script file usually look like?",
  "options": [
   "start /bin/bash",
   "#/bin/bash",
   "#!/bin/bash",
   "!/bin/bash"
  ],
  "correctIndex": 2,
  "explanation": "The '#!' string (Shebang) at the top of a file tells the OS which interpreter should execute the code below it. Conclusion: #!/bin/bash."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "To list all files in a directory, including hidden files (starting with a dot), which command do you use?",
  "options": [
   "ls -l",
   "ls -a",
   "ls -h",
   "ls -d"
  ],
  "correctIndex": 1,
  "explanation": "The '-a' (all) option in 'ls' displays every file, including ones that would normally be skipped. Conclusion: ls -a."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What is the purpose of the 'sudo' command in Linux?",
  "options": [
   "Create a new user on the system.",
   "Completely delete an empty directory.",
   "Reboot the computer immediately.",
   "Execute a command with administrator (root) privileges."
  ],
  "correctIndex": 3,
  "explanation": "Sudo (superuser do) lets a regular user safely perform admin tasks through personal password authentication. Conclusion: Execute a command with administrator (root) privileges."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command checks free space on disk partitions in the system?",
  "options": [
   "du",
   "df -h",
   "free",
   "mem"
  ],
  "correctIndex": 1,
  "explanation": "'df' (disk free) with the '-h' parameter shows filesystem disk space in human-readable form. Conclusion: df -h."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "In Linux, which command creates a new directory?",
  "options": [
   "newdir",
   "touch",
   "mkdir",
   "create"
  ],
  "correctIndex": 2,
  "explanation": "'mkdir' (make directory) is the standard command to create one or more new directories in the filesystem. Conclusion: mkdir."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command syntax correctly compresses a directory into a '.tar.gz' archive?",
  "options": [
   "tar -cvzf archive.tar.gz folder_name",
   "zip archive.tar.gz folder_name",
   "tar -xvf archive.tar.gz folder_name",
   "gzip -d folder_name archive.tar.gz"
  ],
  "correctIndex": 0,
  "explanation": "Use 'tar' with 'c' (create), 'v' (verbose), 'z' (gzip) and 'f' (file) to create an archive from the specified folder. Conclusion: tar -cvzf archive.tar.gz folder_name."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command deletes a file in Linux?",
  "options": [
   "del",
   "remove",
   "rm",
   "erase"
  ],
  "correctIndex": 2,
  "explanation": "'rm' (remove) is used to delete files or directories (with the -r option added). Conclusion: rm."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "In the command line, what does the pipe symbol '|' do?",
  "options": [
   "Stops execution of the current running command.",
   "Feeds the preceding command's output as input to the following command.",
   "Runs a command in the background.",
   "Saves a command's result into an environment variable."
  ],
  "correctIndex": 1,
  "explanation": "The Pipe symbol links commands together, transferring output data from the left-hand command to the right-hand command. Conclusion: Feeds the preceding command's output as input to the following command."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "To rename a file from 'cu.txt' to 'moi.txt', which command do you use?",
  "options": [
   "rn cu.txt moi.txt",
   "cp cu.txt moi.txt",
   "name cu.txt moi.txt",
   "mv cu.txt moi.txt"
  ],
  "correctIndex": 3,
  "explanation": "'mv' (move) is used to move a file or rename it when the destination is in the same directory. Conclusion: mv cu.txt moi.txt."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "What is the core component of the Linux OS, responsible for managing hardware and resources, called?",
  "options": [
   "Shell",
   "Kernel",
   "GUI",
   "Distro"
  ],
  "correctIndex": 1,
  "explanation": "The Kernel is the central part of the OS that bridges application software and computer hardware. Conclusion: Kernel."
 },
 {
  "sourceSets": [
   7
  ],
  "text": "Which command lets a user view the manual documentation for a specific command on the system?",
  "options": [
   "doc",
   "help",
   "info",
   "man"
  ],
  "correctIndex": 3,
  "explanation": "The 'man' command provides detailed pages on the syntax, parameters and usage of most Linux commands. Conclusion: man."
 },
 {
  "sourceSets": [
   8
  ],
  "text": "In Linux, which command changes read/write/execute permissions of a file or directory?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "Per standard Linux administration, 'chmod' (change mode) is the only tool for setting or modifying user access permissions on files and directories. Conclusion: chmod"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "When using the 'kill' command, which signal is commonly used to force a process to stop immediately, unable to be ignored?",
  "options": [
   "SIGTERM (15)",
   "SIGINT (2)",
   "SIGKILL (9)",
   "SIGHUP (1)"
  ],
  "correctIndex": 2,
  "explanation": "In Linux process management, the 'SIGKILL' signal (code 9) sends a direct request to the kernel to terminate a process immediately, with no cleanup allowed. Conclusion: SIGKILL (9)"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which directory in the Linux Filesystem Hierarchy Standard (FHS) stores system-wide global configuration files?",
  "options": [
   "/bin",
   "/etc",
   "/var",
   "/usr"
  ],
  "correctIndex": 1,
  "explanation": "Per the Filesystem Hierarchy Standard (FHS), '/etc' is the dedicated location for configuration files needed to run the system and installed applications. Conclusion: /etc"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which command-line tool is most powerful for finding lines of text matching a regular expression in a file?",
  "options": [
   "locate",
   "find",
   "grep",
   "echo"
  ],
  "correctIndex": 2,
  "explanation": "Technically, 'grep' (global regular expression print) is purpose-built to filter and display lines containing a desired pattern from input data. Conclusion: grep"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which symbol is used in the shell to redirect output by appending to the end of an existing file instead of overwriting it?",
  "options": [
   ">",
   "<<",
   "|",
   ">>"
  ],
  "correctIndex": 3,
  "explanation": "In the Linux shell, '>>' performs output redirection using 'append' semantics, preserving old content and adding new data to the end of the file. Conclusion: >>"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which environment variable defines the list of directories the OS searches when a user types an executable command?",
  "options": [
   "$HOME",
   "$PATH",
   "$USER",
   "$SHELL"
  ],
  "correctIndex": 1,
  "explanation": "The '$PATH' environment variable holds a colon-separated list of directories, helping the system locate executables when a command is called without a full path. Conclusion: $PATH"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "On Debian-based distributions like Ubuntu, which command is used to install a '.deb' package file directly from the command line?",
  "options": [
   "apt update",
   "yum install",
   "dpkg -i",
   "rpm -ivh"
  ],
  "correctIndex": 2,
  "explanation": "'dpkg -i' (Debian Package) is the low-level tool for directly installing local '.deb' package files on disk. Conclusion: dpkg -i"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "To create a 'symbolic link' from a source file to a new filename, which of the following commands do you use?",
  "options": [
   "ln -s",
   "link",
   "ln -h",
   "cp -l"
  ],
  "correctIndex": 0,
  "explanation": "In the Linux filesystem, 'ln' with the '-s' (symbolic) parameter creates a link pointing to the source file's path instead of making a physical copy. Conclusion: ln -s"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "In the 'tar' command, which option is used to compress files with the gzip algorithm while creating an archive?",
  "options": [
   "-j",
   "-z",
   "-x",
   "-v"
  ],
  "correctIndex": 1,
  "explanation": "When using the 'tar' utility to package files, the '-z' parameter tells the program to invoke the 'gzip' compressor to shrink the resulting archive. Conclusion: -z"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which file on a Linux system stores users' hashed passwords for greater security?",
  "options": [
   "/etc/passwd",
   "/etc/group",
   "/etc/shadow",
   "/etc/gshadow"
  ],
  "correctIndex": 2,
  "explanation": "Per standard Linux security practice, '/etc/shadow' is only accessible by root and contains sensitive info like encrypted passwords and expiration dates. Conclusion: /etc/shadow"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "What is the line '#!/bin/bash' at the top of shell scripts commonly called?",
  "options": [
   "Header",
   "Comment",
   "Shebang",
   "Directive"
  ],
  "correctIndex": 2,
  "explanation": "The term 'Shebang' (or Hashbang) refers to the '#!' string at the start of a file specifying which interpreter will execute the code below it. Conclusion: Shebang"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which command reports used and free disk space on currently mounted filesystems?",
  "options": [
   "du",
   "df",
   "free",
   "lsblk"
  ],
  "correctIndex": 1,
  "explanation": "'df' (disk free) reports a summary of storage capacity across filesystem partitions, including total, used and available space. Conclusion: df"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "When you need to find a file by name, size or modification date within a directory tree, which command is the best fit?",
  "options": [
   "whereis",
   "which",
   "find",
   "locate"
  ],
  "correctIndex": 2,
  "explanation": "'find' is a powerful search tool that scans the disk in real time based on various filter criteria like name, attributes and permissions. Conclusion: find"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which tool lets a user monitor active processes, CPU usage and RAM usage in real time?",
  "options": [
   "ps",
   "top",
   "kill",
   "uptime"
  ],
  "correctIndex": 1,
  "explanation": "'top' provides a dynamic interface showing the most resource-hungry processes and overall Linux system performance metrics. Conclusion: top"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "To view the latest lines of a log file and keep watching for new data, which command do you use?",
  "options": [
   "head -n 20",
   "cat",
   "less",
   "tail -f"
  ],
  "correctIndex": 3,
  "explanation": "'tail' with the '-f' (follow) option lets a user see the end of a file and stay connected to immediately display new lines as they're written. Conclusion: tail -f"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which command is used to run another command with the privileges of the superuser (root) or another user?",
  "options": [
   "sudo",
   "su",
   "runas",
   "passwd"
  ],
  "correctIndex": 0,
  "explanation": "The 'sudo' (superuser do) utility lets an authorized user execute administrative commands without logging in directly as root. Conclusion: sudo"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "To estimate the total disk space a specific directory and its subdirectories occupy, which command is most accurate?",
  "options": [
   "ls -l",
   "df -h",
   "du -sh",
   "stat"
  ],
  "correctIndex": 2,
  "explanation": "'du' (disk usage) with '-s' (summary) and '-h' (human-readable) sums up the size of files and directories on disk. Conclusion: du -sh"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which command recursively deletes a non-empty directory along with all files and subdirectories inside it?",
  "options": [
   "rmdir",
   "rm -rf",
   "del /s",
   "erase"
  ],
  "correctIndex": 1,
  "explanation": "'rm' combined with the '-r' (recursive) and '-f' (force) flags wipes out a directory tree without asking for confirmation on each file. Conclusion: rm -rf"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which command displays basic system info like kernel name, hostname and processor architecture?",
  "options": [
   "uname -a",
   "lsinfo",
   "sysconf",
   "version"
  ],
  "correctIndex": 0,
  "explanation": "'uname' with the '-a' (all) option extracts and displays all important system info available from the Linux kernel. Conclusion: uname -a"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "On a Linux network, what does the 'ping' command's '-c 4' parameter mean?",
  "options": [
   "Check connectivity on port 4",
   "Send exactly 4 ICMP packets then stop",
   "Multiply the packet size by 4",
   "Wait 4 seconds before starting"
  ],
  "correctIndex": 1,
  "explanation": "Since 'ping' on Linux runs indefinitely by default, the '-c' (count) parameter is used to limit exactly how many connectivity-test packets are sent. Conclusion: Send exactly 4 ICMP packets then stop"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "To grant execute permission to the owner (user) on a script file named 'run.sh', which syntax is correct?",
  "options": [
   "chmod o+x run.sh",
   "chmod g+x run.sh",
   "chmod u+x run.sh",
   "chmod a-x run.sh"
  ],
  "correctIndex": 2,
  "explanation": "In chmod's symbolic notation, 'u' represents the owner (user) and '+x' adds execute permission. Conclusion: chmod u+x run.sh"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "What are the two main purposes of the 'mv' command in Linux?",
  "options": [
   "Copy and delete a file",
   "Move and rename a file",
   "Compress and decompress a file",
   "Open and close a file"
  ],
  "correctIndex": 1,
  "explanation": "'mv' (move) is designed to change a file's location in the directory structure, or rename it if the destination is in the same directory. Conclusion: Move and rename a file"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "Which virtual file holds detailed info about the running system's CPU?",
  "options": [
   "/etc/cpuinfo",
   "/proc/cpuinfo",
   "/dev/cpu",
   "/var/run/cpu"
  ],
  "correctIndex": 1,
  "explanation": "'/proc' is a virtual filesystem providing an interface to kernel data structures, and the 'cpuinfo' file stores CPU specs. Conclusion: /proc/cpuinfo"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "To look up detailed usage documentation for any Linux command, which command should you use?",
  "options": [
   "help",
   "info",
   "man",
   "show"
  ],
  "correctIndex": 2,
  "explanation": "'man' (manual) is the standard tool for accessing the built-in documentation pages for most commands and config files on Linux. Conclusion: man"
 },
 {
  "sourceSets": [
   8
  ],
  "text": "What is the main function of the pipe symbol '|' on the Linux command line?",
  "options": [
   "Run two commands simultaneously and independently",
   "Write a command's output to a new file",
   "Feed the output of this command as input to another",
   "Delete all the previous command's output"
  ],
  "correctIndex": 2,
  "explanation": "The 'piping' technique uses '|' to connect the standard output of one program directly to the standard input of the next in a command chain. Conclusion: Feed the output of this command as input to another"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "In Linux, which component is responsible for managing hardware resources and providing basic services to applications?",
  "options": [
   "Shell",
   "Kernel",
   "Desktop Environment",
   "Package Manager"
  ],
  "correctIndex": 1,
  "explanation": "Per Linux's standard architecture, the Kernel is the core component mediating communication between hardware and application software. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which command changes a file's permissions so the owner has full access, the group has read and execute, and others have read only?",
  "options": [
   "chmod 754",
   "chmod 764",
   "chmod 644",
   "chmod 777"
  ],
  "correctIndex": 0,
  "explanation": "In the numeric permission system, 7 is 'rwx' for owner, 5 is 'r-x' for group, and 4 is 'r--' for others. Conclusion: chmod 754"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "To find all lines NOT containing the keyword 'error' in a log file, which option should you use with 'grep'?",
  "options": [
   "grep -i 'error' file.log",
   "grep -v 'error' file.log",
   "grep -l 'error' file.log",
   "grep -n 'error' file.log"
  ],
  "correctIndex": 1,
  "explanation": "The '-v' (invert-match) option in 'grep' is designed to invert the search result, showing only the lines that do NOT match the pattern. Conclusion: grep -v 'error' file.log"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which file holds users' encrypted password info on modern Linux distributions, for security?",
  "options": [
   "/etc/passwd",
   "/etc/group",
   "/etc/shadow",
   "/etc/gshadow"
  ],
  "correctIndex": 2,
  "explanation": "For security, Linux stores hashed passwords in '/etc/shadow' with extremely restricted access instead of in '/etc/passwd'. Conclusion: /etc/shadow"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "What is the main difference between a Symbolic (Soft) Link and a Hard Link in Linux?",
  "options": [
   "A Hard Link can point to a directory, a Symbolic Link cannot.",
   "A Symbolic Link can point to a file on a different disk partition, a Hard Link cannot.",
   "When the original file is deleted, the Hard Link breaks and can't access the data.",
   "A Symbolic Link shares the same Inode as the original file."
  ],
  "correctIndex": 1,
  "explanation": "Due to filesystem characteristics, a Hard Link is confined to the same partition since it shares an inode, while a Symbolic Link is a separate file containing a path. Conclusion: A Symbolic Link can point to a file on a different disk partition, a Hard Link cannot."
 },
 {
  "sourceSets": [
   9
  ],
  "text": "On a system using 'systemd', which target is equivalent to 'runlevel 3' (multi-user mode with a command-line interface)?",
  "options": [
   "graphical.target",
   "multi-user.target",
   "rescue.target",
   "reboot.target"
  ],
  "correctIndex": 1,
  "explanation": "In systemd's structure, 'multi-user.target' is defined as a system state supporting multiple users but without starting a graphical interface. Conclusion: multi-user.target"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which command is used to send a signal forcing a process to stop immediately, with no chance to perform cleanup?",
  "options": [
   "kill -15 PID",
   "kill -2 PID",
   "kill -1 PID",
   "kill -9 PID"
  ],
  "correctIndex": 3,
  "explanation": "The SIGKILL signal (number 9) sent to a process forces the Kernel to terminate it immediately, unable to be ignored or blocked. Conclusion: kill -9 PID"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which 'tar' command creates a new '.tar.gz' archive file from a directory?",
  "options": [
   "tar -xvf archive.tar.gz folder/",
   "tar -zcvf archive.tar.gz folder/",
   "tar -jcvf archive.tar.gz folder/",
   "tar -tvf archive.tar.gz"
  ],
  "correctIndex": 1,
  "explanation": "In 'tar', the '-c' option creates a new archive and '-z' filters through the gzip compressor to produce the '.gz' format. Conclusion: tar -zcvf archive.tar.gz folder/"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "A periodic task in 'crontab' configured '0 2 * * 1 command' will run at which time?",
  "options": [
   "2 AM every day.",
   "2 AM every Monday.",
   "1 AM on the 2nd of every month.",
   "Every 2 hours on the first day of the month."
  ],
  "correctIndex": 1,
  "explanation": "Per crontab syntax (minute, hour, day, month, weekday), '0 2 * * 1' specifies minute 0, hour 2, and weekday 1 (Monday). Conclusion: 2 AM every Monday."
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which command shows free disk space on mounted filesystems in a human-readable format (GB, MB)?",
  "options": [
   "du -sh",
   "df -h",
   "fdisk -l",
   "ls -lh"
  ],
  "correctIndex": 1,
  "explanation": "'df' (disk free) with '-h' (human-readable) displays a report on disk space across all active filesystems. Conclusion: df -h"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "In the '/etc/sudoers' configuration file, which notation lets a user run all commands with the privileges of any user on any host?",
  "options": [
   "ALL=(ALL) ALL",
   "root=(ALL) ALL",
   "ALL=(root) /bin/bash",
   "USER=(ALL) NOPASSWD"
  ],
  "correctIndex": 0,
  "explanation": "The syntax 'ALL=(ALL:ALL) ALL' in sudoers is the highest privilege, allowing any command to be run from anywhere as any user/group. Conclusion: ALL=(ALL) ALL"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "What does the special 'Sticky Bit' permission do when set on a directory (e.g. /tmp)?",
  "options": [
   "Lets all users execute files inside it.",
   "Only the file's owner or root can delete that file inside the directory.",
   "Makes new files created in the directory belong to the directory's group.",
   "Prevents users from reading other people's files."
  ],
  "correctIndex": 1,
  "explanation": "Sticky Bit (chmod +t) protects files in a shared directory by only letting the file's owner or root delete or rename them. Conclusion: Only the file's owner or root can delete that file inside the directory."
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which symbol is used on the Linux command line to redirect this command's standard output (stdout) as standard input (stdin) for another command?",
  "options": [
   "Greater-than ( > )",
   "Ampersand ( & )",
   "Pipe ( | )",
   "Comma ( , )"
  ],
  "correctIndex": 2,
  "explanation": "The 'Pipe' mechanism uses the vertical bar character to connect processes by streaming data between them. Conclusion: Pipe ( | )"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which environment variable stores the list of directories the Shell searches for executables when a user types a command?",
  "options": [
   "$HOME",
   "$PWD",
   "$USER",
   "$PATH"
  ],
  "correctIndex": 3,
  "explanation": "The '$PATH' variable holds colon-separated paths where the system scans for programs matching a typed command. Conclusion: $PATH"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "In Linux, what User ID (UID) does the superuser (root) account always have?",
  "options": [
   "1000",
   "1",
   "0",
   "500"
  ],
  "correctIndex": 2,
  "explanation": "Per POSIX standard and Linux design, the root user is always assigned a fixed UID of 0 so the system recognizes the highest admin privilege. Conclusion: 0"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "If the system 'umask' value is 027, what is the default permission of a newly created file (not counting directories)?",
  "options": [
   "(rw-r-----)",
   "(rwxr-x---)",
   "(rw-r--r--)",
   "(rwxrwxrwx)"
  ],
  "correctIndex": 0,
  "explanation": "The maximum file permission is 666; applying umask 027 (666 - 027) results in permission 640. Conclusion: 640 (rw-r-----)"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which command finds files ending in '.conf' in the '/etc' directory modified within the last 7 days?",
  "options": [
   "find /etc -name '*.conf' -mtime -7",
   "find /etc -name '*.conf' -atime +7",
   "ls /etc/*.conf -days 7",
   "search /etc -name '*.conf' -mod 7"
  ],
  "correctIndex": 0,
  "explanation": "'find' uses '-name' to match the filename pattern and '-mtime -7' to filter files modified less than 7 days ago. Conclusion: find /etc -name '*.conf' -mtime -7"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "In Logical Volume Management (LVM) architecture, which component represents the physical disk partitions or whole disks initialized for LVM to use?",
  "options": [
   "Logical Volume (LV)",
   "Volume Group (VG)",
   "Physical Volume (PV)",
   "Physical Extent (PE)"
  ],
  "correctIndex": 2,
  "explanation": "A Physical Volume (PV) is the lowest layer in LVM, representing actual storage devices after being prepared by the 'pvcreate' command. Conclusion: Physical Volume (PV)"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "What is the basic difference between the 'apt update' and 'apt upgrade' commands on Debian-based systems?",
  "options": [
   "'update' installs security patches, 'upgrade' installs new features.",
   "'update' refreshes the package list from the repository, 'upgrade' installs newer versions of already-installed packages.",
   "'update' upgrades the OS kernel, 'upgrade' updates application software.",
   "The two commands do exactly the same thing."
  ],
  "correctIndex": 1,
  "explanation": "In the package management workflow, 'update' only refreshes info about available packages, while 'upgrade' actually downloads and installs the newer versions. Conclusion: 'update' refreshes the package list from the repository, 'upgrade' installs newer versions of already-installed packages."
 },
 {
  "sourceSets": [
   9
  ],
  "text": "In the Vi/Vim text editor, while in 'Command mode', which key is pressed to switch to 'Insert mode' at the current cursor position?",
  "options": [
   "The Esc key",
   "The : key",
   "The i key",
   "The x key"
  ],
  "correctIndex": 2,
  "explanation": "The 'i' (insert) key is the standard key in Vi/Vim to switch from command mode into text entry mode. Conclusion: The i key"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which command is used to display the open network ports and active network connections on a Linux system?",
  "options": [
   "ip link show",
   "netstat -tuln",
   "ping -c 4 localhost",
   "ifconfig -a"
  ],
  "correctIndex": 1,
  "explanation": "'netstat' with the '-t' (TCP), '-u' (UDP), '-l' (listening) and '-n' (numeric) options is commonly used to check service port status. Conclusion: netstat -tuln"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which file holds the computer's hostname on modern Linux systems?",
  "options": [
   "/etc/hosts",
   "/etc/hostname",
   "/etc/resolv.conf",
   "/etc/networks"
  ],
  "correctIndex": 1,
  "explanation": "In the filesystem hierarchy, '/etc/hostname' is a simple text file containing only the machine's unique network identifier. Conclusion: /etc/hostname"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which Runlevel in traditional Linux systems is used to reboot the computer?",
  "options": [
   "Runlevel 0",
   "Runlevel 1",
   "Runlevel 5",
   "Runlevel 6"
  ],
  "correctIndex": 3,
  "explanation": "Per traditional SysVinit convention, Runlevel 6 is defined as the state that leads to a system reboot. Conclusion: Runlevel 6"
 },
 {
  "sourceSets": [
   9
  ],
  "text": "What information does the 'Inode' concept in the Linux filesystem store about a file?",
  "options": [
   "The filename and the file's actual data.",
   "Metadata such as permissions, owner, size and the data's location on disk.",
   "The complete history of every content change to the file.",
   "The IP address of the server hosting the file."
  ],
  "correctIndex": 1,
  "explanation": "An Inode is a data structure storing every file attribute except the filename and the actual content. Conclusion: Metadata such as permissions, owner, size and the data's location on disk."
 },
 {
  "sourceSets": [
   9
  ],
  "text": "Which 'sed' command replaces ALL occurrences of the word 'apple' with 'orange' on every line of the file 'fruit.txt'?",
  "options": [
   "sed 's/apple/orange/' fruit.txt",
   "sed 'r/apple/orange/g' fruit.txt",
   "sed 's/apple/orange/g' fruit.txt",
   "sed 'change apple to orange' fruit.txt"
  ],
  "correctIndex": 2,
  "explanation": "In 'sed', the 'g' (global) flag placed after the 's' substitute command ensures every match on a line is affected, not just the first one. Conclusion: sed 's/apple/orange/g' fruit.txt"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Who wrote the first lines of code and released the Linux kernel in 1991?",
  "options": [
   "Bill Gates",
   "Steve Jobs",
   "Linus Torvalds",
   "Richard Stallman"
  ],
  "correctIndex": 2,
  "explanation": "Per the history of open-source OS development, Linus Torvalds created the Linux kernel and has maintained its development ever since. Conclusion: Linus Torvalds"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which directory in the Linux filesystem holds the system's configuration files?",
  "options": [
   "/bin",
   "/etc",
   "/home",
   "/root"
  ],
  "correctIndex": 1,
  "explanation": "Per the filesystem hierarchy standard (FHS), '/etc' is where all host-specific configuration files are stored. Conclusion: /etc"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "In Linux, what User ID (UID) does the top-level administrator (root) typically have?",
  "options": [
   "1000",
   "1",
   "100",
   "0"
  ],
  "correctIndex": 3,
  "explanation": "Per Linux kernel and Unix-like OS convention, the superuser 'root' account always has UID 0. Conclusion: 0"
 },
 {
  "sourceSets": [
   10,
   13
  ],
  "text": "Which command is used to change the access permissions of a file or directory?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "'chmod' (change mode) is used to change permission bits like read, write and execute for owner, group and others. Conclusion: chmod"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which symbol is used on the Linux command line to redirect a command's result as input for another command (piping)?",
  "options": [
   ">",
   "&",
   "|",
   "<"
  ],
  "correctIndex": 2,
  "explanation": "In the Linux command-line environment, the pipe symbol '|' lets you send a process's standard output to another process's standard input. Conclusion: |"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command lists all files in a directory, including hidden files (starting with a dot)?",
  "options": [
   "ls -l",
   "ls -a",
   "ls -h",
   "ls -d"
  ],
  "correctIndex": 1,
  "explanation": "The '-a' (all) option in 'ls' displays every entry in the directory, even files hidden by a leading dot. Conclusion: ls -a"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "In Linux, which process is started first by the OS kernel and has Process ID (PID) 1?",
  "options": [
   "bash",
   "kthreadd",
   "init or systemd",
   "login"
  ],
  "correctIndex": 2,
  "explanation": "The 'init' process (or 'systemd' on modern distributions) is the parent of all other processes and always receives PID 1 at system boot. Conclusion: init or systemd"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command is used to check free space on hard disk partitions?",
  "options": [
   "du",
   "free",
   "df",
   "top"
  ],
  "correctIndex": 2,
  "explanation": "'df' (disk free) shows the used and free space of the filesystem across all mounted storage devices. Conclusion: df"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "To search for a specific text string inside a file, which command should you use?",
  "options": [
   "locate",
   "grep",
   "find",
   "echo"
  ],
  "correctIndex": 1,
  "explanation": "'grep' is a powerful command-line utility used to filter and search for lines containing a specific pattern in a file or command output. Conclusion: grep"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What is the default package management system on Linux distributions like Ubuntu and Debian?",
  "options": [
   "yum",
   "pacman",
   "dnf",
   "apt"
  ],
  "correctIndex": 3,
  "explanation": "Debian-based Linux distros like Ubuntu use the 'apt' (Advanced Package Tool) utility to install, update and remove software packages. Conclusion: apt"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command changes the owner of a file on a Linux system?",
  "options": [
   "chmod",
   "chown",
   "usermod",
   "passwd"
  ],
  "correctIndex": 1,
  "explanation": "'chown' (change owner) is specifically designed to change the owning user or group of a file or directory. Conclusion: chown"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What does the Linux 'pwd' command do on the command line?",
  "options": [
   "Change the user's password",
   "Delete the current file",
   "Display the full path of the current directory",
   "Create a new directory"
  ],
  "correctIndex": 2,
  "explanation": "'pwd' (print working directory) returns the absolute path from the root to the directory the user is currently working in. Conclusion: Display the full path of the current directory"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "To stop a running process immediately using the 'SIGKILL' signal, which command do you use?",
  "options": [
   "kill -15",
   "kill -1",
   "kill -9",
   "kill -stop"
  ],
  "correctIndex": 2,
  "explanation": "Signal number 9 (SIGKILL) forces the Linux kernel to terminate a process immediately, without letting it perform any final cleanup. Conclusion: kill -9"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which environment variable defines the list of directories the shell searches for executable files?",
  "options": [
   "$HOME",
   "$USER",
   "$SHELL",
   "$PATH"
  ],
  "correctIndex": 3,
  "explanation": "The '$PATH' variable holds a colon-separated list of paths, where the system looks for commands when you type into the terminal. Conclusion: $PATH"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What is the most common default shell on most Linux distributions today?",
  "options": [
   "Csh",
   "Bash",
   "Zsh",
   "Ksh"
  ],
  "correctIndex": 1,
  "explanation": "Bash (Bourne Again SHell) is the standard shell preinstalled as the default for users on most Linux operating systems. Conclusion: Bash"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "To automatically schedule a recurring task at a specific time, which tool do you use?",
  "options": [
   "systemd-analyze",
   "cron",
   "at",
   "batch"
  ],
  "correctIndex": 1,
  "explanation": "The 'cron' service lets users configure 'crontab' files to automatically run commands or scripts on a set time cycle. Conclusion: cron"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What is the 'cat' command most commonly used for in Linux?",
  "options": [
   "Delete a file's content",
   "Copy a file to another location",
   "Display the content of one or more files on the screen",
   "Compress a file into .zip format"
  ],
  "correctIndex": 2,
  "explanation": "'cat' (concatenate) is used to join files and print the result to standard output, often for quickly viewing text content. Conclusion: Display the content of one or more files on the screen"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command is used to create a symbolic link for a file?",
  "options": [
   "link -s",
   "ln -s",
   "cp -l",
   "mv -s"
  ],
  "correctIndex": 1,
  "explanation": "'ln' with the '-s' (symbolic) option is used to create a shortcut pointing to another file or directory's path. Conclusion: ln -s"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What role does the 'Swap' partition play in Linux?",
  "options": [
   "Stores the user's temporary files",
   "Acts as a CPU cache",
   "Extends physical RAM by using hard disk space",
   "Stores the Linux kernel's source code"
  ],
  "correctIndex": 2,
  "explanation": "The 'Swap' space is used by the OS as virtual memory when physical RAM fills up, keeping the system running without freezing. Conclusion: Extends physical RAM by using hard disk space"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command provides detailed info about the kernel version and system architecture in use?",
  "options": [
   "os-release",
   "ver",
   "sysinfo",
   "uname -a"
  ],
  "correctIndex": 3,
  "explanation": "'uname' with the '-a' (all) parameter displays the kernel name, version, build date and hardware architecture of the machine. Conclusion: uname -a"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "In the 'vi' or 'vim' text editor, which key combination quits without saving changes?",
  "options": [
   ":wq",
   ":x",
   ":q!",
   ":exit"
  ],
  "correctIndex": 2,
  "explanation": "The ':q!' command in 'vi' command-line mode closes the editor even if data has been modified, without writing it back to disk. Conclusion: :q!"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which command-line tool lets you monitor running processes and system resources in real time?",
  "options": [
   "ps -ef",
   "top",
   "lsblk",
   "uptime"
  ],
  "correctIndex": 1,
  "explanation": "The 'top' utility provides a dynamic interface showing active processes, CPU/RAM usage, and other important system metrics. Conclusion: top"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "What is the main purpose of the 'sudo' command?",
  "options": [
   "Speed up a command's execution",
   "Run a command with root privileges or another user's privileges",
   "Encrypt a file before executing it",
   "Switch to a graphical interface"
  ],
  "correctIndex": 1,
  "explanation": "The 'sudo' (superuser do) command lets a regular user execute admin-privileged commands without logging directly into the root account. Conclusion: Run a command with root privileges or another user's privileges"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which letter-permission string does the numeric value '755' applied to a file correspond to?",
  "options": [
   "rwx------",
   "rwxr-xr-x",
   "rw-rw-rw-",
   "rwxrwxrwx"
  ],
  "correctIndex": 1,
  "explanation": "Digit 7 maps to 'rwx' (read, write, execute), while digit 5 maps to 'r-x' (read, execute) for group and others. Conclusion: rwxr-xr-x"
 },
 {
  "sourceSets": [
   10
  ],
  "text": "Which directory is used to store temporary files, data usually cleared when the machine reboots?",
  "options": [
   "/var",
   "/tmp",
   "/mnt",
   "/opt"
  ],
  "correctIndex": 1,
  "explanation": "Per system convention, '/tmp' is the shared directory where applications store temporary data for the current session. Conclusion: /tmp"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "In Linux's architecture, which component is directly responsible for managing hardware resources and coordinating activity between hardware and applications?",
  "options": [
   "Shell",
   "Kernel",
   "Desktop Environment",
   "GNU Utilities"
  ],
  "correctIndex": 1,
  "explanation": "Per Linux's layered structure, the Kernel is the OS core mediating and managing all hardware resources for software processes. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which directory in the Linux filesystem (FHS) usually holds configuration files for the system and its services?",
  "options": [
   "/bin",
   "/var",
   "/etc",
   "/home"
  ],
  "correctIndex": 2,
  "explanation": "The /etc directory is designated by the FHS standard as the place to store static configuration files for OS and app operation. Conclusion: /etc"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "To change a file's permissions so the owner has full access and group/others have read and execute only, which command do you use?",
  "options": [
   "chmod 755 [filename]",
   "chmod 644 [filename]",
   "chmod 777 [filename]",
   "chmod 711 [filename]"
  ],
  "correctIndex": 0,
  "explanation": "The value 755 gives the owner permission 7 (rwx), and group and others permission 5 (r-x). Conclusion: chmod 755 [filename]"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which command is used to search for files in a directory tree based on criteria like name, size or modification time?",
  "options": [
   "locate",
   "grep",
   "find",
   "whereis"
  ],
  "correctIndex": 2,
  "explanation": "The find command searches directly through the directory tree with more detailed attribute filters than 'locate', which only searches a pre-built database. Conclusion: find"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "What is the most fundamental difference between a Soft (Symbolic) Link and a Hard Link in Linux?",
  "options": [
   "A Hard Link can point to a directory, a Soft Link cannot",
   "A Soft Link can link across different filesystems, a Hard Link cannot",
   "A Soft Link shares the same inode as the original file",
   "When the original file is deleted, the Hard Link breaks and the data becomes inaccessible"
  ],
  "correctIndex": 1,
  "explanation": "A Soft Link is a separate file containing a path to another file, so it can work across different disk partitions, while a Hard Link is confined to the same filesystem due to the inode constraint. Conclusion: A Soft Link can link across different filesystems, a Hard Link cannot"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "In the Bash Shell, which symbol is used to redirect a command's output, appending it to the end of an existing file?",
  "options": [
   ">",
   "|",
   ">>",
   "2>"
  ],
  "correctIndex": 2,
  "explanation": "The double closing angle bracket (>>) redirects standard output into a file without erasing the old content, instead appending to the end of the file. Conclusion: >>"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "To restart a system service (e.g. nginx) on Linux distributions using systemd, which command is correct?",
  "options": [
   "service nginx reload",
   "systemctl restart nginx",
   "systemctl start nginx",
   "stop nginx && start nginx"
  ],
  "correctIndex": 1,
  "explanation": "The systemctl tool is the standard interface for managing service units in systemd, and the restart parameter is used to stop and immediately start the service again. Conclusion: systemctl restart nginx"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which grep command helps you search for a string in a file case-insensitively?",
  "options": [
   "grep -v [string] [file]",
   "grep -l [string] [file]",
   "grep -i [string] [file]",
   "grep -n [string] [file]"
  ],
  "correctIndex": 2,
  "explanation": "The -i (ignore-case) option in the grep command lets the search engine ignore the difference between uppercase and lowercase letters in the query pattern. Conclusion: grep -i [string] [file]"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "When using the top command, the 'Load Average' statistic shows three values representing the average system load over which time periods?",
  "options": [
   "1, 5 and 15 minutes",
   "1, 5 and 15 seconds",
   "1, 5 and 15 hours",
   "1, 10 and 30 minutes"
  ],
  "correctIndex": 0,
  "explanation": "By design of the Linux kernel, Load Average provides insight into CPU and I/O load trends through the average number of waiting processes over the last 1, 5 and 15 minutes. Conclusion: 1, 5 and 15 minutes"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which environment variable stores the path to the home directory of the logged-in user?",
  "options": [
   "$PATH",
   "$USER",
   "$HOME",
   "$PWD"
  ],
  "correctIndex": 2,
  "explanation": "The $HOME variable is the standard environment variable on Unix-like systems used to identify the current user's home directory location. Conclusion: $HOME"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "To change the owner of a directory and everything inside it (all files and subdirectories), which option do you need to use with the chown command?",
  "options": [
   "-f",
   "-R",
   "-v",
   "-a"
  ],
  "correctIndex": 1,
  "explanation": "The -R (Recursive) option lets the chown command apply the ownership change recursively to every object inside the specified directory. Conclusion: -R"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which command provides info on used and free hard disk space on mounted partitions of the system?",
  "options": [
   "du -sh",
   "free -m",
   "df -h",
   "lsblk"
  ],
  "correctIndex": 2,
  "explanation": "The df (disk free) command with the -h option displays the filesystem's disk space report in a human-readable format. Conclusion: df -h"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which signal is sent by the 'kill -9' command to force a process to stop immediately, unable to be ignored or delayed?",
  "options": [
   "SIGTERM",
   "SIGINT",
   "SIGKILL",
   "SIGHUP"
  ],
  "correctIndex": 2,
  "explanation": "SIGKILL (code 9) is a forced-stop signal executed by the kernel, not allowing the process to perform cleanup or block the signal. Conclusion: SIGKILL"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which file is used to configure the list of users or groups who can execute commands as the superuser (root)?",
  "options": [
   "/etc/passwd",
   "/etc/shadow",
   "/etc/sudoers",
   "/etc/group"
  ],
  "correctIndex": 2,
  "explanation": "The /etc/sudoers file holds the permission rules that let the sudo program determine whether a user has administrative rights. Conclusion: /etc/sudoers"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "When working with SSH, which command is used to generate a public key and private key pair for passwordless authentication?",
  "options": [
   "ssh-agent",
   "ssh-add",
   "ssh-keygen",
   "ssh-copy-id"
  ],
  "correctIndex": 2,
  "explanation": "The ssh-keygen utility is the standard tool in the OpenSSH suite used to initialize authentication key pairs for the SSH protocol. Conclusion: ssh-keygen"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "To compress multiple files into a single '.tar.gz' archive, which parameter combination should you use with the tar command?",
  "options": [
   "-xvf",
   "-cvf",
   "-czvf",
   "-tvf"
  ],
  "correctIndex": 2,
  "explanation": "In the tar command, 'c' creates a new archive, 'z' compresses with gzip, 'v' shows progress, and 'f' names the output file. Conclusion: -czvf"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "If a user sets the umask value to 022, what will the default permission be for new directories created by that user?",
  "options": [
   "777",
   "755",
   "644",
   "700"
  ],
  "correctIndex": 1,
  "explanation": "A directory's default permission is calculated by taking the base value 777 and subtracting the umask value (777 - 022 = 755). Conclusion: 755"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which command lets a user edit their own list of scheduled periodic tasks (cron jobs)?",
  "options": [
   "crontab -l",
   "crontab -r",
   "crontab -e",
   "cron -s"
  ],
  "correctIndex": 2,
  "explanation": "The -e (edit) parameter in the crontab command opens the default text editor so the user can modify their personal schedule file. Conclusion: crontab -e"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "In the Vi/Vim editor, to save the changes you've made and quit the program, what do you type in Command mode?",
  "options": [
   ":q!",
   ":w",
   ":wq",
   "Esc"
  ],
  "correctIndex": 2,
  "explanation": "In Vi/Vim's command-line mode, the combination of ':w' (write) and 'q' (quit) writes data to disk and closes the editor. Conclusion: :wq"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "In traditional Linux systems, what state of the computer does Runlevel 0 represent?",
  "options": [
   "Single-user mode",
   "Multi-user mode with networking",
   "Halt/Shutdown",
   "Reboot"
  ],
  "correctIndex": 2,
  "explanation": "Per the standard convention of the SysVinit boot system, Runlevel 0 is the run level reserved for completely halting the system. Conclusion: Halt/Shutdown"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which 'sed' command replaces all occurrences of the word 'apple' with 'orange' throughout the file 'fruit.txt'?",
  "options": [
   "sed 's/apple/orange/' fruit.txt",
   "sed 'r/apple/orange/g' fruit.txt",
   "sed 's/apple/orange/g' fruit.txt",
   "sed 'g/apple/orange/s' fruit.txt"
  ],
  "correctIndex": 2,
  "explanation": "The 's/pattern/replacement/g' structure in sed performs a substitution (s) globally (g) across each line. Conclusion: sed 's/apple/orange/g' fruit.txt"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "To list all files in a directory, including hidden ones (starting with a dot), which option do you use with the ls command?",
  "options": [
   "-l",
   "-h",
   "-a",
   "-t"
  ],
  "correctIndex": 2,
  "explanation": "The -a (all) option requires the ls command to display every object in the directory without skipping hidden files, per Linux convention. Conclusion: -a"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which port does the Web (HTTP) service listen on by default?",
  "options": [
   "21",
   "22",
   "80",
   "443"
  ],
  "correctIndex": 2,
  "explanation": "Per IANA regulation, port 80 is the standard port for the unencrypted Hypertext Transfer Protocol (HTTP). Conclusion: 80"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "What is the Swap space on a hard disk in Linux mainly used for?",
  "options": [
   "Storing the system's backup files",
   "Caching files downloaded from the internet",
   "Extending physical RAM when the system runs low on memory",
   "Holding the Linux kernel's source code"
  ],
  "correctIndex": 2,
  "explanation": "Swap acts as virtual memory, letting the OS move infrequently-used memory pages from RAM to the hard disk to free up resources for other tasks. Conclusion: Extending physical RAM when the system runs low on memory"
 },
 {
  "sourceSets": [
   11
  ],
  "text": "Which command is used to create a new user account on a Linux system?",
  "options": [
   "userdel",
   "usermod",
   "useradd",
   "groupadd"
  ],
  "correctIndex": 2,
  "explanation": "The useradd command (or adduser on some systems) is the low-level command-line tool to set up basic info for a new user. Conclusion: useradd"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "In Linux, which component acts as the direct bridge between computer hardware and user applications?",
  "options": [
   "Kernel (core)",
   "Shell",
   "Compiler",
   "Desktop Environment"
  ],
  "correctIndex": 0,
  "explanation": "Per OS architecture, the Kernel is the core component managing system resources and coordinating communication between hardware and software. Conclusion: Kernel (core)"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which of the following commands is used to change a file's access permissions in Linux?",
  "options": [
   "chown",
   "chmod",
   "chgrp",
   "umask"
  ],
  "correctIndex": 1,
  "explanation": "The 'chmod' (change mode) command is widely used to set or change read, write and execute permissions for owner, group and other users. Conclusion: chmod"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which directory in the Linux filesystem usually holds the system's configuration files?",
  "options": [
   "/bin",
   "/home",
   "/etc",
   "/var"
  ],
  "correctIndex": 2,
  "explanation": "Per the Filesystem Hierarchy Standard (FHS), the '/etc' directory is the central location for configuration files for the OS and installed applications. Conclusion: /etc"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "To search for a specific text string inside a text file, which command do you use?",
  "options": [
   "find",
   "locate",
   "grep",
   "cat"
  ],
  "correctIndex": 2,
  "explanation": "The 'grep' (Global Regular Expression Print) command is a powerful tool for searching for lines containing a specific text pattern in a file. Conclusion: grep"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "In Linux, which symbol represents the current directory of the logged-in user?",
  "options": [
   "..",
   "~",
   "/",
   "."
  ],
  "correctIndex": 3,
  "explanation": "By Linux path convention, a single dot represents the current directory, while two dots represent the parent directory. Conclusion: ."
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What does the command 'tar -czvf backup.tar.gz /home/user' do?",
  "options": [
   "Extract backup.tar.gz into the /home/user directory",
   "Delete the /home/user directory after compressing it into backup.tar.gz",
   "Compress the /home/user directory into a tar archive and compress it with gzip",
   "Only list the contents of /home/user without compressing"
  ],
  "correctIndex": 2,
  "explanation": "The '-c' option creates a new archive, '-z' compresses with gzip, '-v' shows progress, and '-f' specifies the archive filename. Conclusion: Compress the /home/user directory into a tar archive and compress it with gzip"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "To view running processes and real-time system resource consumption, which command is most suitable?",
  "options": [
   "ps -ef",
   "free -m",
   "top",
   "df -h"
  ],
  "correctIndex": 2,
  "explanation": "The 'top' command provides a dynamic, continuously-updated view of CPU, memory and running-process activity. Conclusion: top"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What information does the '/etc/shadow' file store in Linux?",
  "options": [
   "A list of all user groups",
   "Users' encrypted passwords",
   "Users' login history",
   "Global environment variables"
  ],
  "correctIndex": 1,
  "explanation": "For security reasons, the '/etc/shadow' file is only readable by root and holds hashed password info. Conclusion: Users' encrypted passwords"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which command displays free disk space on the system's mounted filesystem partitions?",
  "options": [
   "du",
   "df",
   "lsblk",
   "fdisk"
  ],
  "correctIndex": 1,
  "explanation": "The 'df' (disk free) command reports used and free disk space on the filesystems mounted on the machine. Conclusion: df"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "When running 'chmod 755 file.sh', what permission does the 'group' get on this file?",
  "options": [
   "Read only",
   "Read and execute",
   "Read and write",
   "Full read, write and execute"
  ],
  "correctIndex": 1,
  "explanation": "The digit 5 in octal (binary 101) corresponds to read (4) plus execute (1), with no write permission (2). Conclusion: Read and execute"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which command lets a user execute a command with the privileges of the superuser (root)?",
  "options": [
   "su",
   "runas",
   "sudo",
   "admin"
  ],
  "correctIndex": 2,
  "explanation": "The 'sudo' (superuser do) command lets users run programs with the security privileges of another user, typically root. Conclusion: sudo"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What is the default signal sent when using the 'kill [PID]' command without any extra parameter?",
  "options": [
   "SIGKILL (9)",
   "SIGTERM (15)",
   "SIGSTOP (19)",
   "SIGHUP (1)"
  ],
  "correctIndex": 1,
  "explanation": "The 'kill' command by default sends SIGTERM (signal 15), asking the process to end safely and clean up resources. Conclusion: SIGTERM (15)"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "In Shell Scripting, what does the special variable '$1' represent?",
  "options": [
   "The name of the running script",
   "The total number of arguments passed in",
   "The first argument passed to the script",
   "The exit code of the most recently run command"
  ],
  "correctIndex": 2,
  "explanation": "In Bash, variables from $1 to $n are used to access the corresponding command-line parameters passed into a script. Conclusion: The first argument passed to the script"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which command is used to change the owner of a file or directory?",
  "options": [
   "chmod",
   "chown",
   "passwd",
   "usermod"
  ],
  "correctIndex": 1,
  "explanation": "The 'chown' (change owner) command is used to change the owning user and/or group of a file or directory. Conclusion: chown"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What does the symbol '>>' mean on the Linux command line?",
  "options": [
   "Overwrite the output content into a file",
   "Use a file's content as input for a command",
   "Append the output content to the end of a file",
   "Redirect standard error to a file"
  ],
  "correctIndex": 2,
  "explanation": "The '>>' operator performs standard-output redirection by appending new data to the end of an existing file without losing the old data. Conclusion: Append the output content to the end of a file"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which directory holds special device files representing hardware in Linux?",
  "options": [
   "/sys",
   "/proc",
   "/dev",
   "/mnt"
  ],
  "correctIndex": 2,
  "explanation": "The '/dev' directory contains device files that let users and applications interact with hardware drivers. Conclusion: /dev"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What does the command 'mkdir -p project/src/main' do?",
  "options": [
   "Only creates the main directory if project/src already exists",
   "Creates the hierarchical directory structure, including any parent directories that don't yet exist",
   "Creates a single directory literally named 'project/src/main' (including the slashes)",
   "Creates project and src directories, then errors out if main already exists"
  ],
  "correctIndex": 1,
  "explanation": "The '-p' (parents) option in the mkdir command lets you create the entire needed directory path without erroring if a directory already exists. Conclusion: Creates the hierarchical directory structure, including any parent directories that don't yet exist"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "In the 'vi' or 'vim' text editor, which command is used to save the file and quit?",
  "options": [
   ":q!",
   ":w",
   ":wq",
   ":exit"
  ],
  "correctIndex": 2,
  "explanation": "In vim's command-line mode, the ':wq' command combines writing data to disk (write) and exiting the program (quit). Conclusion: :wq"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which command is used to check the IP address of network interfaces on a modern Linux system (replacing ifconfig)?",
  "options": [
   "netstat",
   "ip addr",
   "networkctl",
   "route -n"
  ],
  "correctIndex": 1,
  "explanation": "The 'ip' tool from the iproute2 package is the modern, recommended replacement for older networking commands like ifconfig. Conclusion: ip addr"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What is the most popular service/init management system on Linux distributions today?",
  "options": [
   "SysVinit",
   "Upstart",
   "systemd",
   "OpenRC"
  ],
  "correctIndex": 2,
  "explanation": "Most major distributions like Ubuntu, Fedora, and Debian have switched to using 'systemd' as the default init system. Conclusion: systemd"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "What does the command 'tail -f /var/log/syslog' do?",
  "options": [
   "Show the first 10 lines of the syslog file",
   "Show the syslog file's content and continuously update as new data is added",
   "Search for errors in the syslog file",
   "Delete all the content of the syslog file"
  ],
  "correctIndex": 1,
  "explanation": "The '-f' (follow) option lets the tail command keep the file open and print new lines as soon as they're added to the end of the file. Conclusion: Show the syslog file's content and continuously update as new data is added"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "To change the priority value of a running process, which command do you use?",
  "options": [
   "nice",
   "renice",
   "priority",
   "setpriority"
  ],
  "correctIndex": 1,
  "explanation": "While 'nice' sets a priority when starting a process, 'renice' is used to change the priority of a process that's already running. Conclusion: renice"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which of the following is a characteristic of a Hard Link in Linux?",
  "options": [
   "It can point to a directory",
   "It has the same inode number as the original file",
   "It breaks if the original file is deleted",
   "It can link across different filesystems"
  ],
  "correctIndex": 1,
  "explanation": "A hard link is a directory entry pointing directly to the same inode (file data structure) on disk as the original file. Conclusion: It has the same inode number as the original file"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "Which command lists the files currently open by processes on the system?",
  "options": [
   "ls",
   "lsof",
   "ps",
   "netstat"
  ],
  "correctIndex": 1,
  "explanation": "The 'lsof' (list open files) command provides detailed info about every file currently in use by any process on the system. Conclusion: lsof"
 },
 {
  "sourceSets": [
   12
  ],
  "text": "In the permission string 'drwxr-xr--', what does the first character 'd' mean?",
  "options": [
   "This is a data file",
   "This is a device",
   "This is a directory",
   "Execute permission for the owner"
  ],
  "correctIndex": 2,
  "explanation": "In the output of 'ls -l', the first character specifies the file type, where 'd' represents a directory and '-' represents a regular file. Conclusion: This is a directory"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which component is considered the kernel of the Linux OS, responsible for managing hardware resources and communication between software and hardware?",
  "options": [
   "Shell",
   "Kernel",
   "Desktop Environment",
   "Application Suite"
  ],
  "correctIndex": 1,
  "explanation": "Per Linux's system architecture, the Kernel is the core component managing CPU, memory and peripherals, acting as an intermediary between apps and hardware. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "In Linux, which directory usually holds global system configuration files?",
  "options": [
   "/bin",
   "/home",
   "/etc",
   "/usr"
  ],
  "correctIndex": 2,
  "explanation": "Per the filesystem hierarchy standard (FHS), the /etc directory is where the system's static configuration files and services are stored. Conclusion: /etc"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command shows the full path of the current working directory?",
  "options": [
   "dir",
   "ls",
   "path",
   "pwd"
  ],
  "correctIndex": 3,
  "explanation": "The pwd command (print working directory) returns the absolute path from the root to the directory the user is currently working in. Conclusion: pwd"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which symbol is used to redirect a command's output, overwriting a file?",
  "options": [
   ">",
   ">>",
   "<",
   "|"
  ],
  "correctIndex": 0,
  "explanation": "In the Linux Shell, the > operator is used to redirect standard output into a file, overwriting its content if the file already exists. Conclusion: >"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "To search for a specific text string in a file, users commonly use which command?",
  "options": [
   "find",
   "search",
   "grep",
   "locate"
  ],
  "correctIndex": 2,
  "explanation": "The grep command (Global Regular Expression Print) is a powerful tool for filtering and searching for lines of text matching a predefined pattern. Conclusion: grep"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "What is the user with the highest privileges in the Linux system, with UID 0, called?",
  "options": [
   "Administrator",
   "Supervisor",
   "Manager",
   "root"
  ],
  "correctIndex": 3,
  "explanation": "In Linux, the root account is the system administrator account with full control over all files and processes. Conclusion: root"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to view the list of currently running processes in real time?",
  "options": [
   "ps",
   "top",
   "kill",
   "list"
  ],
  "correctIndex": 1,
  "explanation": "The top command provides a dynamic, continuous view of system processes, including each one's CPU and memory usage. Conclusion: top"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "In the output of 'ls -l', what does the first column display?",
  "options": [
   "File size",
   "Last modification date",
   "File permissions",
   "Owner name"
  ],
  "correctIndex": 2,
  "explanation": "When running ls with the -l option, the first column describes the file type and the read, write, execute permissions of each user class. Conclusion: File permissions"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "To create a new directory in Linux, which command do you use?",
  "options": [
   "newdir",
   "touch",
   "mkdir",
   "createdir"
  ],
  "correctIndex": 2,
  "explanation": "The mkdir command (make directory) lets a user create one or more new directories at a specified path. Conclusion: mkdir"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to move or rename a file/directory?",
  "options": [
   "cp",
   "mv",
   "rn",
   "move"
  ],
  "correctIndex": 1,
  "explanation": "The mv command (move) moves a file from one location to another, or renames it if the source and destination are in the same directory. Conclusion: mv"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "In Linux, a file starting with a dot (.) is understood as what?",
  "options": [
   "A system file",
   "A hidden file",
   "An executable file",
   "A compressed file"
  ],
  "correctIndex": 1,
  "explanation": "Per the convention of file managers and the Linux shell, files or directories whose name starts with a dot do not show up with a normal ls command. Conclusion: A hidden file"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to delete an empty directory?",
  "options": [
   "rm",
   "rmdir",
   "del",
   "erase"
  ],
  "correctIndex": 1,
  "explanation": "The rmdir command (remove directory) can only delete directories that contain no files or subdirectories inside them. Conclusion: rmdir"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which option of the 'ls' command is used to show all files, including hidden ones?",
  "options": [
   "-h",
   "-l",
   "-a",
   "-all"
  ],
  "correctIndex": 2,
  "explanation": "The -a (all) option requires the ls command to list every entity in the directory, including files starting with a dot. Conclusion: -a"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "To end a running process by its ID (PID), which command do you use?",
  "options": [
   "stop",
   "end",
   "kill",
   "exit"
  ],
  "correctIndex": 2,
  "explanation": "The kill command sends a signal (SIGTERM by default) to a specific process via its PID to request that process stop. Conclusion: kill"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to show free disk space on the filesystem?",
  "options": [
   "du",
   "df",
   "free",
   "disk"
  ],
  "correctIndex": 1,
  "explanation": "The df command (disk free) reports the amount of used and free disk space on mounted filesystems. Conclusion: df"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "In the Vi/Vim text editor, which key switches to insert mode?",
  "options": [
   "a",
   "i",
   "o",
   "s"
  ],
  "correctIndex": 1,
  "explanation": "While in command mode, the i key is used to start entering text at the current cursor position. Conclusion: i"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which symbol is used to connect one command's output as another command's input?",
  "options": [
   ";",
   "&",
   "| (Pipe)",
   ">"
  ],
  "correctIndex": 2,
  "explanation": "The pipe operator lets you redirect the standard data stream from the preceding command's output into the standard input of the following command. Conclusion: | (Pipe)"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command lets you view a text file's content without opening a text editor?",
  "options": [
   "cat",
   "view",
   "read",
   "show"
  ],
  "correctIndex": 0,
  "explanation": "The cat command (concatenate) is often used to display the entire content of one or more text files on the terminal screen. Conclusion: cat"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "To change the current user's password, which command is used?",
  "options": [
   "password",
   "chpass",
   "passwd",
   "setpass"
  ],
  "correctIndex": 2,
  "explanation": "The passwd command lets a user change their own login password, or lets root change another user's password. Conclusion: passwd"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to display the last 10 lines of a file?",
  "options": [
   "last",
   "head",
   "end",
   "tail"
  ],
  "correctIndex": 3,
  "explanation": "By default, the tail command extracts and shows a portion of the end of a file, making it easier to follow log files. Conclusion: tail"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "What does file permission '755' mean in Linux?",
  "options": [
   "Owner has full permissions, group and others have only read and execute",
   "Owner has read, group has write, others have execute",
   "Everyone has full permissions on the file",
   "Owner has read and write, group and others have no permission"
  ],
  "correctIndex": 0,
  "explanation": "Digit 7 corresponds to rwx, digit 5 corresponds to r-x, so 755 grants full permission to the owner and read/execute to the rest. Conclusion: Owner has full permissions, group and others have only read and execute"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to compress or decompress '.tar' format files?",
  "options": [
   "zip",
   "gzip",
   "tar",
   "compress"
  ],
  "correctIndex": 2,
  "explanation": "The tar command (tape archive) is used to bundle multiple files into a single archive and can combine with compression tools. Conclusion: tar"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which directory in Linux contains device files (device files) like disks, keyboards?",
  "options": [
   "/mnt",
   "/dev",
   "/media",
   "/proc"
  ],
  "correctIndex": 1,
  "explanation": "Per Linux's 'everything is a file' philosophy, hardware devices are represented by special files located in the /dev directory. Conclusion: /dev"
 },
 {
  "sourceSets": [
   13
  ],
  "text": "Which command is used to change the owner of a file?",
  "options": [
   "chmod",
   "chroot",
   "chown",
   "usermod"
  ],
  "correctIndex": 2,
  "explanation": "The chown command (change owner) lets a privileged user change the owning account and group of a file or directory. Conclusion: chown"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Who wrote the first version of the Linux kernel in 1991?",
  "options": [
   "Bill Gates",
   "Steve Jobs",
   "Linus Torvalds",
   "Richard Stallman"
  ],
  "correctIndex": 2,
  "explanation": "Per the history of open-source software development, Linus Torvalds initiated and wrote the first version of the Linux kernel. Conclusion: Linus Torvalds"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "In Linux, which directory usually holds the system's configuration files?",
  "options": [
   "/bin",
   "/etc",
   "/dev",
   "/root"
  ],
  "correctIndex": 1,
  "explanation": "The /etc directory in the Linux directory tree is where all system and service configuration files are stored. Conclusion: /etc"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to search for a specific text string inside a text file?",
  "options": [
   "grep",
   "find",
   "locate",
   "search"
  ],
  "correctIndex": 0,
  "explanation": "The grep tool (Global Regular Expression Print) is the most common command used to filter and search for text by pattern in Linux. Conclusion: grep"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "What does the file permission 'chmod 755' mean?",
  "options": [
   "Owner has read and write, group and others have no permission",
   "Owner has full permissions, group and others have read and execute",
   "Every user on the system has full permissions",
   "Owner has read, group has write, others have execute"
  ],
  "correctIndex": 1,
  "explanation": "In octal, digit 7 corresponds to rwx (full permission) and digit 5 corresponds to r-x (read and execute). Conclusion: Owner has full permissions, group and others have read and execute"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command lets you view running processes in the system in real time?",
  "options": [
   "ps -ef",
   "list",
   "top",
   "show proc"
  ],
  "correctIndex": 2,
  "explanation": "The top command provides a dynamic, continuously-updated view of active processes and system resource usage. Conclusion: top"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "To change the owner of a file or directory, which command do you use?",
  "options": [
   "chmod",
   "chown",
   "attrib",
   "owner"
  ],
  "correctIndex": 1,
  "explanation": "The chown command (change owner) is used to change file or directory ownership for a specific user or group. Conclusion: chown"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "On Debian-based distributions like Ubuntu, which command is used to refresh the software package list from the repository?",
  "options": [
   "apt upgrade",
   "apt install",
   "apt-get update",
   "apt search"
  ],
  "correctIndex": 2,
  "explanation": "The apt-get update or apt update command synchronizes package indices from the sources configured on the system. Conclusion: apt-get update"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "In the Vi/Vim text editor, which key combination saves the file and exits the editor?",
  "options": [
   ":q!",
   ":s",
   ":wq",
   ":exit"
  ],
  "correctIndex": 2,
  "explanation": "The :wq command in Vi/Vim's command-line mode writes the content to disk and then quits. Conclusion: :wq"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which symbol is used to redirect a command's output, overwriting a file?",
  "options": [
   ">>",
   "|",
   ">",
   "<"
  ],
  "correctIndex": 2,
  "explanation": "The '>' operator is used to redirect standard output into a file and overwrites it if the file already exists. Conclusion: >"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "What is the most fundamental difference between a Hard link and a Soft link (Symbolic link) in Linux?",
  "options": [
   "A Hard link can link across different partitions",
   "A Soft link shares the same Inode number as the original file",
   "A Hard link shares the same Inode number as the original file, while a Soft link does not",
   "When the original file is deleted, the Hard link breaks"
  ],
  "correctIndex": 2,
  "explanation": "A hard link is really just another name pointing to the same physical Inode on disk, while a soft link is only a file containing a path to another file. Conclusion: A Hard link shares the same Inode number as the original file, while a Soft link does not"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "What is the first process started by the Linux kernel (with PID 1) called on traditional systems?",
  "options": [
   "bash",
   "systemd or init",
   "kernel",
   "kswapd"
  ],
  "correctIndex": 1,
  "explanation": "After the kernel loads, it starts the init process (or systemd on modern systems) as the parent of all other processes. Conclusion: systemd or init"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command checks free space on hard disk partitions in a human-readable format (e.g. GB, MB)?",
  "options": [
   "du -sh",
   "free -m",
   "df -h",
   "ls -l"
  ],
  "correctIndex": 2,
  "explanation": "The df command (disk free) with the -h option (human-readable) displays filesystem disk space info. Conclusion: df -h"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to display the last 20 lines of a text file?",
  "options": [
   "head -n 20",
   "last 20",
   "tail -n 20",
   "show -20"
  ],
  "correctIndex": 2,
  "explanation": "The tail command shows the end of a file by default, and the -n option lets you specify exactly how many lines to view. Conclusion: tail -n 20"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which file on a Linux system stores users' encrypted password info?",
  "options": [
   "/etc/passwd",
   "/etc/shadow",
   "/etc/group",
   "/etc/config"
  ],
  "correctIndex": 1,
  "explanation": "For security, modern Linux distributions store password hashes in /etc/shadow, which only root can read. Conclusion: /etc/shadow"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to decompress a '.tar.gz' file?",
  "options": [
   "tar -cvf filename.tar.gz",
   "zip -d filename.tar.gz",
   "tar -xzvf filename.tar.gz",
   "extract filename.tar.gz"
  ],
  "correctIndex": 2,
  "explanation": "In tar, the -x option extracts, -z handles gzip format, -v shows progress, and -f names the file. Conclusion: tar -xzvf filename.tar.gz"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "To forcibly stop a hung process immediately by its process ID (PID), which command do you use?",
  "options": [
   "kill -1 PID",
   "stop PID",
   "kill -9 PID",
   "terminate PID"
  ],
  "correctIndex": 2,
  "explanation": "Signal 9 (SIGKILL) sends a message asking the Linux kernel to terminate the process immediately, without letting it clean up resources. Conclusion: kill -9 PID"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which character does the first line of a Bash script (Shebang) usually start with?",
  "options": [
   "!! /bin/bash",
   "// bin/bash",
   "#! /bin/bash",
   "$$ /bin/bash"
  ],
  "correctIndex": 2,
  "explanation": "The string '#!' is called the Shebang, used to specify the interpreter that will execute the commands below it. Conclusion: #! /bin/bash"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which part of the Linux system is used as virtual memory when physical RAM is full?",
  "options": [
   "Cache",
   "Buffer",
   "Swap",
   "Virtual RAM"
  ],
  "correctIndex": 2,
  "explanation": "Swap is disk space used by the OS to temporarily store data from RAM when physical RAM is no longer sufficient. Conclusion: Swap"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to schedule periodic jobs in Linux?",
  "options": [
   "at",
   "schedule",
   "crontab",
   "timer"
  ],
  "correctIndex": 2,
  "explanation": "The cron service uses the crontab table to manage commands that need to run automatically at set time intervals. Conclusion: crontab"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "What is the function of the pipe symbol '|' in Linux?",
  "options": [
   "Save a command's result to a file",
   "Join two text files together",
   "Take the preceding command's output as input for the following command",
   "Run two commands simultaneously and independently"
  ],
  "correctIndex": 2,
  "explanation": "The pipe lets you combine simple commands together by feeding data from this command's standard output into that command's standard input. Conclusion: Take the preceding command's output as input for the following command"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which directory in Linux holds log files recording system activity?",
  "options": [
   "/etc/logs",
   "/home/logs",
   "/var/log",
   "/usr/log"
  ],
  "correctIndex": 2,
  "explanation": "Per the filesystem hierarchy standard (FHS), the /var/log directory is where system and application log records are stored. Conclusion: /var/log"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to view detailed usage instructions for another command in Linux?",
  "options": [
   "help",
   "info",
   "man",
   "guide"
  ],
  "correctIndex": 2,
  "explanation": "The man command (manual) displays documentation pages about commands, file formats and system libraries. Conclusion: man"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "What is the core part of the Linux OS, responsible for managing hardware resources and communicating with applications, called?",
  "options": [
   "Shell",
   "GUI",
   "Kernel",
   "Compiler"
  ],
  "correctIndex": 2,
  "explanation": "The Kernel is the lowest layer of the OS, acting as the intermediary bridge between computer hardware and application processes. Conclusion: Kernel"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "To find all files ending in '.log' in the current directory and its subdirectories, which command do you use?",
  "options": [
   "search . -name '*.log'",
   "ls -R *.log",
   "find . -name '*.log'",
   "grep -r '*.log' ."
  ],
  "correctIndex": 2,
  "explanation": "The find command with the -name option and the '*' wildcard is the most effective way to search for files by name recursively. Conclusion: find . -name '*.log'"
 },
 {
  "sourceSets": [
   14
  ],
  "text": "Which command is used to count the number of lines in a text file?",
  "options": [
   "count -l",
   "lines",
   "wc -l",
   "total -l"
  ],
  "correctIndex": 2,
  "explanation": "The wc command (word count) with the -l (lines) parameter returns the total number of lines in the specified file. Conclusion: wc -l"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "In Linux, how does the command 'chmod 755' set permissions on a file?",
  "options": [
   "Owner has read, write, execute; group and others have read and execute.",
   "Every user on the system has full read, write and execute permission.",
   "Owner has read and write; group and others only have read.",
   "Only the owner has execute permission, others have none at all."
  ],
  "correctIndex": 0,
  "explanation": "Per Linux's permission rules, value 7 corresponds to rwx (read, write, execute) and value 5 corresponds to r-x (read, execute). Conclusion: Owner has read, write, execute; group and others have read and execute."
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which directory in the Linux filesystem structure usually holds the system's configuration files?",
  "options": [
   "/bin",
   "/etc",
   "/dev",
   "/tmp"
  ],
  "correctIndex": 1,
  "explanation": "Per the filesystem hierarchy standard (FHS), the '/etc' directory stores static configuration files for running the system. Conclusion: /etc"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To redirect a command's result and append it to the end of an existing file, which symbol do you use?",
  "options": [
   ">",
   ">>",
   "|",
   "<"
  ],
  "correctIndex": 1,
  "explanation": "In the Linux Shell environment, the '>>' symbol is used to redirect standard output and append data to the end of a file without deleting old content. Conclusion: >>"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which of the following commands is used to forcibly and immediately stop a hung process in Linux?",
  "options": [
   "kill -1",
   "kill -9",
   "kill -15",
   "kill -stop"
  ],
  "correctIndex": 1,
  "explanation": "The SIGKILL signal (corresponding to number 9) sends a request to the OS kernel to terminate the process immediately, without letting it clean up. Conclusion: kill -9"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "What information does the 'ls -l' command display about files and directories in Linux?",
  "options": [
   "Shows the list of hidden files starting with a dot.",
   "Shows a detailed listing including permissions, owner and size.",
   "Only shows the names of directories in the current directory.",
   "Shows the file list sorted by most recent access time."
  ],
  "correctIndex": 1,
  "explanation": "The '-l' (long format) option in the ls command provides detailed info about permissions, link count, owner, group, size and modification time. Conclusion: Shows a detailed listing including permissions, owner and size."
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which symbol represents the root directory in Linux?",
  "options": [
   "~",
   ".",
   "/",
   ".."
  ],
  "correctIndex": 2,
  "explanation": "In Linux's directory tree structure, the slash '/' is the topmost starting point of the entire filesystem. Conclusion: /"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To check the full path of the current directory you're standing in, which command do you use?",
  "options": [
   "path",
   "whereami",
   "pwd",
   "dir"
  ],
  "correctIndex": 2,
  "explanation": "The 'pwd' command, short for 'print working directory', returns the absolute path from the root to the current directory. Conclusion: pwd"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which command is used to display a text file's content on the Terminal screen?",
  "options": [
   "echo",
   "read",
   "cat",
   "write"
  ],
  "correctIndex": 2,
  "explanation": "The 'cat' command is commonly used to read and concatenate the content of one or more text files to standard output. Conclusion: cat"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To execute a command with administrator (root) privileges, which prefix do regular users commonly use?",
  "options": [
   "runas",
   "admin",
   "sudo",
   "super"
  ],
  "correctIndex": 2,
  "explanation": "The 'sudo' tool (superuser do) lets a user run programs with another user's security privileges, usually root. Conclusion: sudo"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "In Linux, how do you view the manual pages for a specific command, for example 'mkdir'?",
  "options": [
   "help mkdir",
   "man mkdir",
   "info mkdir",
   "doc mkdir"
  ],
  "correctIndex": 1,
  "explanation": "The 'man' system provides detailed documentation pages about usage, parameters and syntax for most Linux commands. Conclusion: man mkdir"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To compress and bundle multiple files into a single '.tar' archive, which command do you use?",
  "options": [
   "zip -c",
   "tar -cvf",
   "pack -f",
   "archive -n"
  ],
  "correctIndex": 1,
  "explanation": "The '-c' (create) and '-v' (verbose) parameters along with '-f' (file) in the tar command are used to create a new archive. Conclusion: tar -cvf"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "What is the main difference between a Hard link and a Soft link (Symbolic link) in Linux?",
  "options": [
   "A Hard link can link across different disk partitions, a Soft link cannot.",
   "A Hard link points to the same inode number as the original file, while a Soft link is a separate file containing a path.",
   "When the original file is deleted, the Hard link breaks while the Soft link still works.",
   "A Soft link can only be created for a directory, while a Hard link can only be created for a text file."
  ],
  "correctIndex": 1,
  "explanation": "A Hard link shares the same physical inode on disk as the original file, while a Symbolic link is only a path pointer to another filename. Conclusion: A Hard link points to the same inode number as the original file, while a Soft link is a separate file containing a path."
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which command is used to list the processes running in the current session?",
  "options": [
   "list",
   "task",
   "ps",
   "proc"
  ],
  "correctIndex": 2,
  "explanation": "The 'ps' (process status) command provides a snapshot of the current processes active on the system. Conclusion: ps"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which directory is the default storage location for regular users' home directories in Linux?",
  "options": [
   "/root",
   "/var",
   "/home",
   "/usr"
  ],
  "correctIndex": 2,
  "explanation": "By common convention, all regular users' (except root's) home directories live under the parent directory '/home'. Conclusion: /home"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "What does the command 'mv file1.txt file2.txt' do if 'file2.txt' does not already exist?",
  "options": [
   "Creates a copy of file1.txt with a new name, file2.txt.",
   "Renames file1.txt to file2.txt.",
   "Moves file1.txt inside a directory named file2.txt.",
   "Deletes file1.txt and creates an empty file named file2.txt."
  ],
  "correctIndex": 1,
  "explanation": "The 'mv' (move) command is used to move a file, or rename it if the destination is a new filename in the same directory. Conclusion: Renames file1.txt to file2.txt."
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To change the owner of a file, which command do you use?",
  "options": [
   "chmod",
   "attrib",
   "chown",
   "chgrp"
  ],
  "correctIndex": 2,
  "explanation": "The 'chown' (change owner) command lets an administrator change the owning user and/or group of a file or directory. Conclusion: chown"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To check free disk space on partitions in a human-readable format (GB, MB), which command is most suitable?",
  "options": [
   "df -a",
   "du -s",
   "df -h",
   "free -m"
  ],
  "correctIndex": 2,
  "explanation": "The 'df' command reports disk space usage, and the '-h' (human-readable) option displays GB/MB units instead of raw byte counts. Conclusion: df -h"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which command is used to check the IP address of network interfaces on most modern Linux distributions?",
  "options": [
   "config-network",
   "netstat -r",
   "ip addr",
   "show ip"
  ],
  "correctIndex": 2,
  "explanation": "Although 'ifconfig' is still common, the 'iproute2' toolset with the 'ip addr' command is the modern standard for managing network interfaces. Conclusion: ip addr"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which tool is used to search for lines of text matching a given pattern in a file?",
  "options": [
   "find",
   "locate",
   "grep",
   "search"
  ],
  "correctIndex": 2,
  "explanation": "The 'grep' command (global regular expression print) is the powerful tool for filtering and searching text based on regular expressions. Conclusion: grep"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "In the Vi/Vim text editor, which key do you press to switch from Insert mode back to Command mode?",
  "options": [
   "Enter",
   "Ctrl + C",
   "Esc",
   "Tab"
  ],
  "correctIndex": 2,
  "explanation": "The 'Esc' key is the default function key to exit text-entry mode and return to control mode in the Vi editor. Conclusion: Esc"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which command checks network connectivity to a remote host by sending ICMP Echo Request packets?",
  "options": [
   "trace",
   "connect",
   "ping",
   "netstat"
  ],
  "correctIndex": 2,
  "explanation": "The 'ping' tool measures round-trip time and checks whether a host responds on the network. Conclusion: ping"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Where is the home directory of the top-level admin user (root) located in a Linux system?",
  "options": [
   "/home/root",
   "/etc/root",
   "/root",
   "/bin/root"
  ],
  "correctIndex": 2,
  "explanation": "Unlike regular users, root's home directory is placed directly at the filesystem root to ensure access even before other partitions are mounted. Conclusion: /root"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "To monitor system resource status (CPU, RAM) and active processes in real time, which command do you use?",
  "options": [
   "status",
   "monitor",
   "top",
   "syslog"
  ],
  "correctIndex": 2,
  "explanation": "The 'top' command provides a dynamic, continuous view of process activity and resource consumption on the system. Conclusion: top"
 },
 {
  "sourceSets": [
   15
  ],
  "text": "What is the hidden file '.bashrc' in a user's home directory typically used for?",
  "options": [
   "Storing the user's encrypted password.",
   "Holding personal Bash shell configuration such as aliases and environment variables.",
   "Recording the full history of every command the user has ever typed.",
   "Holding the source code of the running OS kernel."
  ],
  "correctIndex": 1,
  "explanation": "The '.bashrc' file is a shell script run every time a new interactive shell is started, to set up the environment for the user. Conclusion: Holding personal Bash shell configuration such as aliases and environment variables."
 },
 {
  "sourceSets": [
   15
  ],
  "text": "Which of the following commands shows only the first 5 lines of a text file?",
  "options": [
   "start -n 5",
   "first 5",
   "head -n 5",
   "tail -n 5"
  ],
  "correctIndex": 2,
  "explanation": "The 'head' command shows the beginning of a file by default, and the '-n' parameter lets you specify an exact number of lines. Conclusion: head -n 5"
 }
];
