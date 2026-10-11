const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-storage2',
  week: WEEKS.W3_TH3,
  commands: [
    {
      name: 'lvreduce',
      description: 'shrink the size of an existing logical volume (shrink the filesystem first to avoid data loss)',
      flags: [
        { flag: '-L -<size>', meaning: 'decrease the size by a given amount relative to the current size' },
      ],
      scenarios: [
        { task: 'Shrink logical volume lv_data by 2GB', accepted: ['sudo lvreduce -L -2G /dev/vg_data/lv_data'] },
        { task: 'Shrink logical volume lv_data down to exactly 10GB', accepted: ['sudo lvreduce -L 10G /dev/vg_data/lv_data'] },
      ],
    },
    {
      name: 'vgextend',
      description: 'extend a volume group by adding a new physical volume to it',
      flags: [],
      scenarios: [
        { task: 'Add physical volume /dev/sdd to volume group vg_data', accepted: ['sudo vgextend vg_data /dev/sdd'] },
      ],
    },
    {
      name: 'vgreduce',
      description: 'remove a physical volume from a volume group (the physical volume must have no data left on it)',
      flags: [],
      scenarios: [
        { task: 'Remove physical volume /dev/sdd from volume group vg_data', accepted: ['sudo vgreduce vg_data /dev/sdd'] },
      ],
    },
    {
      name: 'pvdisplay',
      description: 'show detailed info about existing physical volumes in LVM',
      flags: [],
      scenarios: [
        { task: 'View detailed info for physical volume /dev/sdc', accepted: ['sudo pvdisplay /dev/sdc'] },
      ],
    },
    {
      name: 'pvs / vgs / lvs',
      description: 'show a brief tabular summary (shorter than display) of physical volumes, volume groups, logical volumes',
      flags: [],
      scenarios: [
        { task: 'View a summary table of every physical volume on the system', accepted: ['pvs'] },
        { task: 'View a summary table of every volume group on the system', accepted: ['vgs'] },
        { task: 'View a summary table of every logical volume on the system', accepted: ['lvs'] },
      ],
    },
    {
      name: 'mkfs.xfs',
      description: 'create an XFS filesystem on a partition, commonly used for large data and high performance',
      flags: [],
      scenarios: [
        { task: 'Format partition /dev/sdb1 to the XFS filesystem', accepted: ['sudo mkfs.xfs /dev/sdb1'] },
      ],
    },
    {
      name: 'wipefs',
      description: 'erase old filesystem signatures on a device before reformatting it',
      flags: [
        { flag: '-a', meaning: 'erase every signature found on the device' },
      ],
      scenarios: [
        { task: 'Erase every old filesystem signature on /dev/sdb1 before reformatting it', accepted: ['sudo wipefs -a /dev/sdb1'] },
      ],
    },
    {
      name: 'mount --bind',
      description: 'mount an existing directory at another location in the directory tree (bind mount), without creating a new filesystem',
      flags: [],
      scenarios: [
        { task: 'Bind-mount directory /data onto /var/www/data', accepted: ['sudo mount --bind /data /var/www/data'] },
      ],
    },
    {
      name: 'findmnt',
      description: 'show the tree of current mount points on the system, easier to read than reading /proc/mounts directly',
      flags: [
        { flag: '-t <type>', meaning: 'only show mount points of a specific filesystem type' },
      ],
      scenarios: [
        { task: 'View the entire tree of current mount points', accepted: ['findmnt'] },
        { task: 'Only show mount points of type ext4', accepted: ['findmnt -t ext4'] },
      ],
    },
    {
      name: 'quota -u',
      description: 'view the current quota info for a specific user',
      flags: [],
      scenarios: [
        { task: 'View the current quota info for user alice', accepted: ['quota -u alice'] },
      ],
    },
    {
      name: 'setquota',
      description: 'set quota limits (soft/hard limit) for a user without opening the edquota editor',
      flags: [],
      scenarios: [
        { task: 'Set quota for alice on /home: 1GB soft, 1.2GB hard limit', accepted: ['sudo setquota -u alice 1000000 1200000 0 0 /home'] },
      ],
    },
  ],
};
