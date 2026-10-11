const WEEKS = require('../weeks');
module.exports = {
  category: 'backup-troubleshoot',
  week: WEEKS.W10_TH17,
  commands: [
    {
      name: 'tar -czvf (backup)',
      description: 'package and compress data to be backed up into a single archive file',
      flags: [
        { flag: '--exclude="<pattern>"', meaning: 'exclude files/directories that don\'t need backing up (e.g. cache, temp logs) from the archive' },
      ],
      scenarios: [
        { task: 'Back up the configuration directory /etc into file etc-backup.tar.gz', accepted: ['sudo tar -czvf etc-backup.tar.gz /etc', 'sudo tar czvf etc-backup.tar.gz /etc'] },
        { task: 'Back up directory /var/www into a date-named file www-backup.tar.gz, excluding the cache directory', accepted: ['sudo tar -czvf www-backup.tar.gz --exclude="cache" /var/www', 'sudo tar czvf www-backup.tar.gz --exclude=cache /var/www'] },
      ],
    },
    {
      name: 'rsync (backup)',
      description: 'sync backups by transferring only the changed data, making incremental backups faster than tar',
      flags: [
        { flag: '--delete', meaning: 'delete files in the backup that no longer exist at the source, keeping the backup an exact match of the source' },
        { flag: '--backup --backup-dir=<dir>', meaning: 'when overwriting or deleting a file, save the old version into a separate directory instead of losing it' },
      ],
      scenarios: [
        { task: 'Sync-backup directory /data to external drive /mnt/backup', accepted: ['rsync -av /data/ /mnt/backup/'] },
        { task: 'Sync-backup /data to /mnt/backup, deleting files in the backup no longer at the source', accepted: ['rsync -av --delete /data/ /mnt/backup/'] },
      ],
    },
    {
      name: 'crontab (backup schedule)',
      description: 'schedule a backup script to run automatically on a recurring basis',
      flags: [],
      scenarios: [
        { task: 'Schedule script /opt/backup.sh to run at 1 AM every day', accepted: ['0 1 * * * /opt/backup.sh'] },
        { task: 'Schedule backup script /opt/backup.sh to run at 23:30 every Saturday night', accepted: ['30 23 * * 6 /opt/backup.sh'] },
      ],
    },
    {
      name: 'tar -xzvf (restore)',
      description: 'restore data by extracting a backup archive back to its original location',
      flags: [],
      scenarios: [
        { task: 'Restore data from file etc-backup.tar.gz into the root directory /', accepted: ['sudo tar -xzvf etc-backup.tar.gz -C /', 'sudo tar xzvf etc-backup.tar.gz -C /'] },
      ],
    },
    {
      name: 'fsck',
      week: WEEKS.W11_TH19,
      description: 'check and repair filesystem errors, commonly used when diagnosing a mount failure or a system that won\'t boot',
      flags: [
        { flag: '-y', meaning: 'automatically answer "yes" to every repair prompt' },
        { flag: '-f', meaning: 'force a check even if the filesystem is marked clean' },
        { flag: '-n', meaning: 'only check and report errors, without auto-fixing anything (safe preview mode)' },
      ],
      scenarios: [
        { task: 'Check and automatically repair errors on filesystem /dev/sdb1', accepted: ['sudo fsck -y /dev/sdb1'] },
        { task: 'Only check filesystem /dev/sdb1 and report errors, without fixing anything', accepted: ['sudo fsck -n /dev/sdb1'] },
      ],
    },
    {
      name: 'mount -o remount,rw',
      week: WEEKS.W11_TH19,
      description: 'remount a filesystem that is currently read-only (often due to an error) back to read/write mode',
      flags: [],
      scenarios: [
        { task: 'Remount the root filesystem / to read/write mode after the system went read-only due to an error', accepted: ['sudo mount -o remount,rw /'] },
      ],
    },
    {
      name: 'systemctl rescue',
      week: WEEKS.W11_TH19,
      description: 'switch the system into rescue mode, running only minimal services to fix an issue',
      flags: [],
      scenarios: [
        { task: 'Switch the system into rescue mode to fix an issue', accepted: ['sudo systemctl rescue'] },
      ],
    },
    {
      name: 'passwd (reset via single-user)',
      week: WEEKS.W11_TH19,
      description: 'reset the root password by booting into single-user/rescue mode after forgetting the password',
      flags: [],
      scenarios: [
        { task: 'Reset the root password once you\'ve entered single-user/rescue mode', accepted: ['passwd root', 'passwd'] },
      ],
    },
    {
      name: 'journalctl -xb',
      week: WEEKS.W11_TH19,
      description: 'view the boot log with explanatory text to diagnose a boot failure',
      flags: [],
      scenarios: [
        { task: 'View the boot log with explanatory detail to find the cause of a boot failure', accepted: ['journalctl -xb'] },
      ],
    },
    {
      name: 'mount -a (fstab check)',
      week: WEEKS.W11_TH19,
      description: 'remount every entry in /etc/fstab, used to check whether fstab has a syntax error causing boot to hang',
      flags: [],
      scenarios: [
        { task: 'Check whether /etc/fstab has an error causing boot to hang, by trying to remount everything', accepted: ['sudo mount -a'] },
      ],
    },
  ],
};
