const WEEKS = require('../weeks');
module.exports = {
  category: 'shell-basics',
  week: WEEKS.W2_TH1,
  commands: [
    {
      name: 'man',
      description: 'display the manual page for a command',
      flags: [
        { flag: '-k <keyword>', meaning: 'find man pages whose description contains the keyword (same as apropos)' },
        { flag: '-f <command>', meaning: 'show a one-line summary description of a command (same as whatis)' },
        { flag: '-s <number>', meaning: 'specify a particular man section (e.g. 5 for file formats)' },
        { flag: '-a', meaning: 'show every man page with a matching name across all sections, one after another' },
      ],
      scenarios: [
        { task: 'View the manual page for the ls command', accepted: ['man ls'] },
        { task: 'Find all man pages related to the keyword "passwd"', accepted: ['man -k passwd', 'apropos passwd'] },
        { task: 'View the file format description for the config file /etc/passwd (section 5)', accepted: ['man 5 passwd', 'man -s 5 passwd'] },
      ],
    },
    {
      name: 'info',
      description: 'display more detailed hypertext documentation than a man page for some GNU commands',
      flags: [
        { flag: '<command>', meaning: 'open the info documentation for the given command' },
      ],
      scenarios: [
        { task: 'View the info documentation for coreutils', accepted: ['info coreutils'] },
      ],
    },
    {
      name: 'pwd',
      description: 'print the absolute path of the current working directory',
      flags: [
        { flag: '-P', meaning: 'print the actual physical path, resolving all symbolic links' },
        { flag: '-L', meaning: 'print the logical path, keeping symbolic links as-is (default)' },
      ],
      scenarios: [
        { task: 'Print the current directory path', accepted: ['pwd'] },
        { task: 'Print the actual physical path of the current directory, ignoring symlinks', accepted: ['pwd -P'] },
      ],
    },
    {
      name: 'cd',
      description: 'change the current working directory',
      flags: [
        { flag: '-', meaning: 'go back to the previous working directory' },
        { flag: '~', meaning: 'switch to the current user\'s home directory' },
        { flag: '..', meaning: 'move up to the parent directory' },
      ],
      scenarios: [
        { task: 'Switch to the current user\'s home directory', accepted: ['cd', 'cd ~'] },
        { task: 'Go back to the previous working directory', accepted: ['cd -'] },
        { task: 'Move up to the parent of the current directory', accepted: ['cd ..'] },
      ],
    },
    {
      name: 'ls',
      description: 'list the contents (files, directories) inside a directory',
      flags: [
        { flag: '-l', meaning: 'show a long listing format, including permissions, owner, size, modification time' },
        { flag: '-a', meaning: 'show hidden files/directories too (starting with a dot)' },
        { flag: '-h', meaning: 'show sizes in a human-readable form (K, M, G) when used with -l' },
        { flag: '-i', meaning: 'show the inode number of each file/directory' },
        { flag: '-R', meaning: 'list recursively through all subdirectories' },
        { flag: '-t', meaning: 'sort by modification time, newest first' },
        { flag: '-S', meaning: 'sort by size, largest first' },
        { flag: '-r', meaning: 'reverse the sort order' },
        { flag: '-d', meaning: 'show info about the directory itself only, not its contents' },
      ],
      scenarios: [
        { task: 'List a long-format, detailed listing of all files including hidden ones in the current directory', accepted: ['ls -la', 'ls -al', 'ls -l -a', 'ls -a -l'] },
        { task: 'List files with the inode number at the start of each line', accepted: ['ls -li', 'ls -il'] },
        { task: 'Recursively list the entire subdirectory tree of the current directory', accepted: ['ls -R'] },
        { task: 'List a detailed listing with file sizes shown in human-readable form (K/M/G)', accepted: ['ls -lh', 'ls -hl'] },
        { task: 'List files sorted by modification time, newest first', accepted: ['ls -lt', 'ls -tl'] },
      ],
    },
    {
      name: 'cp',
      description: 'copy a file or directory',
      flags: [
        { flag: '-r', meaning: 'copy recursively, used when copying a directory' },
        { flag: '-p', meaning: 'preserve file attributes (permissions, owner, timestamp) when copying' },
        { flag: '-i', meaning: 'ask for confirmation before overwriting an existing destination file' },
        { flag: '-v', meaning: 'show verbose details of the copy process' },
        { flag: '-u', meaning: 'only copy when the source is newer than the destination, or the destination doesn\'t exist yet' },
        { flag: '-a', meaning: 'archive mode, equivalent to -dR --preserve=all, preserving all attributes and links' },
      ],
      scenarios: [
        { task: 'Recursively copy the entire /data directory to /backup', accepted: ['cp -r /data /backup'] },
        { task: 'Copy file a.txt to b.txt, preserving the original permissions and timestamp', accepted: ['cp -p a.txt b.txt'] },
        { task: 'Copy a directory preserving all attributes (archive mode)', accepted: ['cp -a /data /backup'] },
      ],
    },
    {
      name: 'mv',
      description: 'move or rename a file or directory',
      flags: [
        { flag: '-i', meaning: 'ask for confirmation before overwriting the destination file' },
        { flag: '-v', meaning: 'show verbose details of the move process' },
        { flag: '-n', meaning: 'do not overwrite if the destination file already exists' },
      ],
      scenarios: [
        { task: 'Rename file old.txt to new.txt', accepted: ['mv old.txt new.txt'] },
        { task: 'Move file report.txt into directory /archive, asking for confirmation on a name clash', accepted: ['mv -i report.txt /archive'] },
      ],
    },
    {
      name: 'rm',
      description: 'delete a file or directory',
      flags: [
        { flag: '-r', meaning: 'delete recursively, used when deleting a directory along with its contents' },
        { flag: '-f', meaning: 'force delete without confirmation, ignoring errors for non-existent files' },
        { flag: '-i', meaning: 'ask for confirmation before deleting each file' },
        { flag: '-v', meaning: 'show verbose details of deleted files' },
      ],
      scenarios: [
        { task: 'Delete the entire /tmp/old directory including its contents, without confirmation', accepted: ['rm -rf /tmp/old'] },
        { task: 'Delete file notes.txt, asking for confirmation before deleting', accepted: ['rm -i notes.txt'] },
      ],
    },
    {
      name: 'mkdir',
      description: 'create a new directory',
      flags: [
        { flag: '-p', meaning: 'also create parent directories if they don\'t exist yet, and don\'t error if the directory already exists' },
        { flag: '-v', meaning: 'print a message for every directory created' },
        { flag: '-m <mode>', meaning: 'set the directory\'s access permission right at creation time' },
      ],
      scenarios: [
        { task: 'Create the nested directory path /data/project/logs, auto-creating any missing parent directories', accepted: ['mkdir -p /data/project/logs'] },
        { task: 'Create directory secret with permission 700 right at creation', accepted: ['mkdir -m 700 secret', 'mkdir -m700 secret'] },
      ],
    },
    {
      name: 'rmdir',
      description: 'delete an empty directory',
      flags: [
        { flag: '-p', meaning: 'also delete parent directories if they become empty after deletion' },
      ],
      scenarios: [
        { task: 'Delete the empty directory empty_dir', accepted: ['rmdir empty_dir'] },
      ],
    },
    {
      name: 'touch',
      description: 'create a new empty file, or update the access/modification time of an existing file',
      flags: [
        { flag: '-a', meaning: 'only update the access time' },
        { flag: '-m', meaning: 'only update the modification time' },
        { flag: '-c', meaning: 'do not create a new file if it doesn\'t exist' },
      ],
      scenarios: [
        { task: 'Create an empty file named notes.txt', accepted: ['touch notes.txt'] },
      ],
    },
    {
      name: 'cat',
      description: 'display a file\'s content on screen or concatenate multiple files together',
      flags: [
        { flag: '-n', meaning: 'number each line' },
        { flag: '-A', meaning: 'show hidden characters (tabs, line endings) to check formatting' },
        { flag: '-s', meaning: 'squeeze multiple consecutive blank lines into a single blank line' },
      ],
      scenarios: [
        { task: 'Display the content of /etc/hosts with line numbers', accepted: ['cat -n /etc/hosts'] },
        { task: 'Concatenate the content of a.txt and b.txt and write it to file c.txt', accepted: ['cat a.txt b.txt > c.txt'] },
      ],
    },
    {
      name: 'less',
      description: 'view a file\'s content page by page, with the ability to scroll back and forth and search',
      flags: [
        { flag: '-N', meaning: 'show line numbers' },
        { flag: '-S', meaning: 'don\'t auto-wrap lines longer than the screen width' },
        { flag: '+G', meaning: 'open the file and jump straight to the end' },
      ],
      scenarios: [
        { task: 'View the system log file /var/log/syslog page by page', accepted: ['less /var/log/syslog'] },
      ],
    },
    {
      name: 'head',
      description: 'display the first few lines of a file',
      flags: [
        { flag: '-n <number>', meaning: 'specify the number of leading lines to show' },
        { flag: '-c <number>', meaning: 'specify the number of leading bytes to show' },
      ],
      scenarios: [
        { task: 'Show the first 20 lines of file access.log', accepted: ['head -n 20 access.log', 'head -20 access.log'] },
      ],
    },
    {
      name: 'tail',
      description: 'display the last few lines of a file',
      flags: [
        { flag: '-n <number>', meaning: 'specify the number of trailing lines to show' },
        { flag: '-f', meaning: 'follow the file continuously, showing new lines as soon as they\'re written' },
        { flag: '-F', meaning: 'like -f, but reattach automatically if the file is rotated (log rotate)' },
      ],
      scenarios: [
        { task: 'Continuously follow the log file /var/log/syslog for new lines', accepted: ['tail -f /var/log/syslog'] },
        { task: 'Show the last 50 lines of file app.log', accepted: ['tail -n 50 app.log', 'tail -50 app.log'] },
      ],
    },
    {
      name: 'wc',
      description: 'count the number of lines, words, characters in a file or input',
      flags: [
        { flag: '-l', meaning: 'count only the number of lines' },
        { flag: '-w', meaning: 'count only the number of words' },
        { flag: '-c', meaning: 'count only the number of bytes' },
        { flag: '-m', meaning: 'count only the number of characters' },
      ],
      scenarios: [
        { task: 'Count the number of lines in file /etc/passwd', accepted: ['wc -l /etc/passwd'] },
      ],
    },
    {
      name: 'history',
      description: 'show the list of commands previously run in the shell session',
      flags: [
        { flag: '-c', meaning: 'clear the entire command history of the current session' },
        { flag: '-d <number>', meaning: 'delete one specific history entry by its number' },
      ],
      scenarios: [
        { task: 'View the full history of commands you\'ve typed', accepted: ['history'] },
      ],
    },
    {
      name: 'alias',
      description: 'create a shortcut name (alias) for a command or command string',
      flags: [
        { flag: '-p', meaning: 'list all currently defined aliases' },
      ],
      scenarios: [
        { task: 'Create alias ll for the command ls -la', accepted: ["alias ll='ls -la'", 'alias ll="ls -la"'] },
      ],
    },
    {
      name: 'whoami',
      description: 'show the name of the currently logged-in (effective) user',
      flags: [],
      scenarios: [
        { task: 'Show the current user name operating in the shell', accepted: ['whoami'] },
      ],
    },
    {
      name: 'who',
      description: 'show the list of users currently logged into the system',
      flags: [
        { flag: '-b', meaning: 'show the time of the last system boot' },
        { flag: '-q', meaning: 'only show the logged-in usernames and the total count' },
      ],
      scenarios: [
        { task: 'View the list of users currently logged into the system', accepted: ['who'] },
      ],
    },
    {
      name: 'w',
      description: 'show logged-in users along with the processes they are running and the system load',
      flags: [],
      scenarios: [
        { task: 'View logged-in users and the commands they are running', accepted: ['w'] },
      ],
    },
    {
      name: 'uname',
      description: 'display information about the operating system and kernel',
      flags: [
        { flag: '-a', meaning: 'show all system information (kernel name, hostname, version, architecture)' },
        { flag: '-r', meaning: 'only show the running kernel version' },
        { flag: '-m', meaning: 'show the hardware architecture (e.g. x86_64)' },
      ],
      scenarios: [
        { task: 'View all system and kernel information', accepted: ['uname -a'] },
        { task: 'View the currently running kernel version', accepted: ['uname -r'] },
      ],
    },
  ],
};
