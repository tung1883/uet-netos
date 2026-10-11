const WEEKS = require('../weeks');
module.exports = {
  category: 'storage-lvm',
  week: WEEKS.W3_TH3,
  commands: [
    {
      name: 'lsblk',
      description: 'list block devices (disks, partitions) in a tree format',
      flags: [
        { flag: '-f', meaning: 'also show the filesystem type and UUID of each partition' },
        { flag: '-a', meaning: 'show empty devices too (with no data)' },
      ],
      scenarios: [
        { task: 'List disks and partitions along with their filesystem type', accepted: ['lsblk -f'] },
      ],
    },
    {
      name: 'fdisk',
      description: 'command-line tool to create, delete, and view MBR-style disk partition tables',
      flags: [
        { flag: '-l', meaning: 'list the partition table of all disks, or a specified one' },
      ],
      scenarios: [
        { task: 'View the partition table of disk /dev/sdb', accepted: ['sudo fdisk -l /dev/sdb', 'fdisk -l /dev/sdb'] },
        { task: 'Open fdisk in interactive mode to work on disk /dev/sdb', accepted: ['sudo fdisk /dev/sdb'] },
      ],
    },
    {
      name: 'parted',
      description: 'a disk partitioning tool supporting both GPT and MBR tables, usable non-interactively',
      flags: [
        { flag: '-l', meaning: 'list the partition table of all disks' },
      ],
      scenarios: [
        { task: 'View the GPT partition table of all disks', accepted: ['sudo parted -l'] },
      ],
    },
    {
      name: 'mkfs',
      description: 'create (format) a new filesystem on a partition',
      flags: [
        { flag: '.ext4 <device>', meaning: 'create an ext4 filesystem on the given device' },
        { flag: '.xfs <device>', meaning: 'create an xfs filesystem on the given device' },
        { flag: '-t <type> <device>', meaning: 'specify the filesystem type to create via the -t parameter' },
      ],
      scenarios: [
        { task: 'Format partition /dev/sdb1 to the ext4 filesystem', accepted: ['sudo mkfs.ext4 /dev/sdb1', 'sudo mkfs -t ext4 /dev/sdb1'] },
      ],
    },
    {
      name: 'mount',
      description: 'mount a filesystem at a mount point in the directory tree',
      flags: [
        { flag: '-t <type>', meaning: 'specify the filesystem type when mounting' },
        { flag: '-o <option>', meaning: 'specify mount options (e.g. ro, rw, noexec)' },
        { flag: '-a', meaning: 'mount all filesystems listed in /etc/fstab' },
      ],
      scenarios: [
        { task: 'Mount partition /dev/sdb1 at directory /mnt/data', accepted: ['sudo mount /dev/sdb1 /mnt/data'] },
        { task: 'Remount all entries in /etc/fstab', accepted: ['sudo mount -a'] },
        { task: 'Mount /dev/sdb1 at /mnt/data in read-only mode', accepted: ['sudo mount -o ro /dev/sdb1 /mnt/data'] },
      ],
    },
    {
      name: 'umount',
      description: 'unmount a filesystem from the directory tree',
      flags: [
        { flag: '-f', meaning: 'force unmount even if the device is busy' },
        { flag: '-l', meaning: 'lazy unmount, detach from the tree immediately but clean up once no process is still using it' },
      ],
      scenarios: [
        { task: 'Unmount directory /mnt/data', accepted: ['sudo umount /mnt/data'] },
      ],
    },
    {
      name: 'blkid',
      description: 'show the UUID and filesystem type of block devices',
      flags: [
        { flag: '-s UUID', meaning: 'only show the UUID field, skipping other info' },
      ],
      scenarios: [
        { task: 'View the UUID of partition /dev/sdb1', accepted: ['sudo blkid /dev/sdb1', 'blkid /dev/sdb1'] },
      ],
    },
    {
      name: 'df',
      description: 'show the used and free space of mounted filesystems',
      flags: [
        { flag: '-h', meaning: 'show sizes in a human-readable form (K, M, G)' },
        { flag: '-T', meaning: 'also show the filesystem type of each partition' },
      ],
      scenarios: [
        { task: 'View used/free space on partitions in a human-readable form', accepted: ['df -h'] },
      ],
    },
    {
      name: 'pvcreate',
      description: 'initialize a physical device (physical volume) for use in LVM',
      flags: [],
      scenarios: [
        { task: 'Initialize a physical volume on /dev/sdc', accepted: ['sudo pvcreate /dev/sdc'] },
      ],
    },
    {
      name: 'vgcreate',
      description: 'create a volume group from physical volumes in LVM',
      flags: [],
      scenarios: [
        { task: 'Create a volume group named vg_data from /dev/sdc', accepted: ['sudo vgcreate vg_data /dev/sdc'] },
        { task: 'Create a volume group named vg_data combining both /dev/sdc and /dev/sdd', accepted: ['sudo vgcreate vg_data /dev/sdc /dev/sdd'] },
      ],
    },
    {
      name: 'vgdisplay',
      description: 'show detailed information about existing volume groups in LVM',
      flags: [],
      scenarios: [
        { task: 'View detailed information for volume group vg_data', accepted: ['sudo vgdisplay vg_data'] },
      ],
    },
    {
      name: 'lvdisplay',
      description: 'show detailed information about existing logical volumes in LVM',
      flags: [],
      scenarios: [
        { task: 'View detailed information for logical volume lv_data', accepted: ['sudo lvdisplay /dev/vg_data/lv_data'] },
      ],
    },
    {
      name: 'lvcreate',
      description: 'create a new logical volume inside a volume group',
      flags: [
        { flag: '-L <size>', meaning: 'specify a fixed size for the logical volume (e.g. 10G)' },
        { flag: '-n <name>', meaning: 'give the logical volume a name' },
        { flag: '-l <%>', meaning: 'specify the size as a percentage of the volume group\'s free space' },
      ],
      scenarios: [
        { task: 'Create a logical volume named lv_data with size 10G in volume group vg_data', accepted: ['sudo lvcreate -L 10G -n lv_data vg_data'] },
      ],
    },
    {
      name: 'lvextend',
      description: 'extend the size of an existing logical volume',
      flags: [
        { flag: '-L +<size>', meaning: 'increase the size by a given amount relative to the current size' },
        { flag: '-r', meaning: 'automatically also resize the filesystem inside after extending the volume (same as --resizefs)' },
        { flag: '--resizefs', meaning: 'automatically also resize the filesystem inside after extending the volume' },
      ],
      scenarios: [
        { task: 'Extend logical volume /dev/mapper/vg_data-lv_data by 5GB and auto-resize its filesystem', accepted: ['sudo lvextend -L +5G -r /dev/mapper/vg_data-lv_data', 'sudo lvextend -L +5G --resizefs /dev/mapper/vg_data-lv_data', 'lvextend -L +5G -r /dev/mapper/vg_data-lv_data'] },
      ],
    },
    {
      name: 'resize2fs',
      description: 'resize an ext2/3/4 filesystem to match the size of the volume holding it',
      flags: [],
      scenarios: [
        { task: 'Extend the ext4 filesystem on /dev/mapper/vg_data-lv_data to match the volume size', accepted: ['sudo resize2fs /dev/mapper/vg_data-lv_data'] },
      ],
    },
    {
      name: 'xfs_growfs',
      description: 'extend a mounted XFS filesystem to match a new volume size',
      flags: [],
      scenarios: [
        { task: 'Extend the XFS filesystem mounted at /data', accepted: ['sudo xfs_growfs /data'] },
      ],
    },
    {
      name: 'quotacheck',
      description: 'scan a filesystem and create/update quota database files',
      flags: [
        { flag: '-cug <mount point>', meaning: 'create new quota files for both user (u) and group (g)' },
      ],
      scenarios: [
        { task: 'Initialize user and group quota files on /home', accepted: ['sudo quotacheck -cug /home'] },
      ],
    },
    {
      name: 'quotaon',
      description: 'enable quota enforcement on a filesystem',
      flags: [],
      scenarios: [
        { task: 'Turn on quota for filesystem /home', accepted: ['sudo quotaon /home'] },
      ],
    },
    {
      name: 'edquota',
      description: 'edit the quota limits (soft/hard limit) for a user or group',
      flags: [
        { flag: '-u <user>', meaning: 'edit quota for a specific user' },
      ],
      scenarios: [
        { task: 'Edit the quota for user alice', accepted: ['sudo edquota -u alice'] },
      ],
    },
    {
      name: 'repquota',
      description: 'show a summary report of quota usage on a filesystem',
      flags: [
        { flag: '-a', meaning: 'show the quota report for every filesystem with quota enabled' },
      ],
      scenarios: [
        { task: 'View the quota usage report on /home', accepted: ['sudo repquota /home'] },
      ],
    },
  ],
};
