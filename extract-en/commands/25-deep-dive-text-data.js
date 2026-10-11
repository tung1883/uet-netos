const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-text-data',
  week: WEEKS.EXTRA_1,
  commands: [
    {
      name: 'sort (advanced)',
      description: 'sort tabular data by multiple different criteria (column, data type, order)',
      flags: [
        { flag: '-t <character>', meaning: 'specify the field delimiter character when sorting by column' },
        { flag: '-k <n>,<m>', meaning: 'only sort based on fields from position n to m' },
        { flag: '-h', meaning: 'sort by human-readable size (e.g. 2K, 1M, 3G) in true numeric order' },
        { flag: '-M', meaning: 'sort by abbreviated month name (Jan, Feb...) in chronological order' },
      ],
      scenarios: [
        { task: 'Sort CSV file data.csv by the 2nd column, comma-delimited', accepted: ['sort -t, -k2 data.csv'] },
        { task: 'Sort the output of du -h by human-readable size, ascending', accepted: ['du -h | sort -h'] },
        { task: 'Sort file log.txt by column 3 as a number, descending', accepted: ['sort -k3 -nr log.txt', 'sort -nr -k3 log.txt'] },
        { task: 'Sort and remove duplicate lines in email list emails.txt, case-insensitively', accepted: ['sort -fu emails.txt', 'sort -f -u emails.txt'] },
      ],
    },
    {
      name: 'uniq (advanced)',
      description: 'process adjacent duplicate lines with several options controlling the match',
      flags: [
        { flag: '-i', meaning: 'match duplicate lines case-insensitively' },
        { flag: '-f <n>', meaning: 'skip the first n fields when comparing lines for duplication' },
        { flag: '-w <n>', meaning: 'only compare the first n characters of each line when checking for duplicates' },
      ],
      scenarios: [
        { task: 'Count how many times each line appears in sorted access.log, case-insensitively', accepted: ['sort access.log | uniq -ic', 'sort access.log | uniq -i -c'] },
        { task: 'Only show the duplicated lines in sorted file names.txt', accepted: ['sort names.txt | uniq -d'] },
        { task: 'Only show lines that are not duplicated (unique) in sorted file ids.txt', accepted: ['sort ids.txt | uniq -u'] },
        { task: 'Compare duplicates based only on the first 8 characters of each line in sorted file.txt', accepted: ['sort file.txt | uniq -w 8'] },
      ],
    },
    {
      name: 'awk (field math)',
      description: 'use awk to filter lines and compute based on conditions over numeric fields',
      flags: [
        { flag: "'$3 > 100'", meaning: 'only print lines where the 3rd field is greater than 100' },
        { flag: "'{print NR, $0}'", meaning: 'print the line number along with the entire line content' },
        { flag: "'BEGIN{FS=\",\"}'", meaning: 'set the field separator character right at the start of the awk program' },
        { flag: "'{count[$1]++} END{print count[\"A\"]}'", meaning: 'count how many times each value of column 1 appears using an associative array' },
      ],
      scenarios: [
        { task: 'Print the lines of sales.csv (comma-delimited) where column 3 is greater than 1000', accepted: ["awk -F, '$3 > 1000' sales.csv"] },
        { task: 'Compute the average of column 2 in file scores.txt', accepted: ["awk '{sum+=$2; n++} END{print sum/n}' scores.txt"] },
        { task: 'Count the lines whose first column equals "ERROR" in app.log', accepted: ["awk '$1==\"ERROR\"' app.log | wc -l", "awk '$1 == \"ERROR\" {c++} END{print c}' app.log"] },
        { task: 'Print the longest line (most characters) in file text.txt using awk', accepted: ["awk '{ if (length($0) > max) { max = length($0); line = $0 } } END { print line }' text.txt"] },
      ],
    },
    {
      name: 'sed (advanced)',
      description: 'advanced sed operations: combining multiple commands, pattern-based line ranges, conditional insert/replace',
      flags: [
        { flag: "/start/,/end/p", meaning: 'print the lines between a line matching "start" and a line matching "end" (a pattern-based range)' },
        { flag: "-r", meaning: 'enable extended regular expressions in sed, letting you use +, ?, | without escaping' },
        { flag: "G", meaning: 'insert a blank line after every input line (double-space the lines)' },
      ],
      scenarios: [
        { task: 'Print the lines between a line containing "BEGIN" and a line containing "END" in file script.log', accepted: ["sed -n '/BEGIN/,/END/p' script.log"] },
        { task: 'Using sed with extended regex, replace "cat" or "dog" with "pet" in file animals.txt, writing directly back', accepted: ["sed -ri 's/cat|dog/pet/g' animals.txt", "sed -i -r 's/cat|dog/pet/g' animals.txt"] },
        { task: 'Insert a blank line after every line of file text.txt', accepted: ["sed G text.txt"] },
        { task: 'Delete trailing whitespace at the end of every line in file code.txt, writing directly back to the file', accepted: ["sed -i 's/[ \\t]*$//' code.txt"] },
      ],
    },
    {
      name: 'grep (advanced)',
      description: 'advanced grep operations: matching multiple patterns, excluding directories, counting by file',
      flags: [
        { flag: '-e <pattern1> -e <pattern2>', meaning: 'search for a match against any of several different patterns' },
        { flag: '--include="<file pattern>"', meaning: 'when searching recursively, only search files matching a given filename pattern' },
        { flag: '--exclude-dir="<directory>"', meaning: 'when searching recursively, exclude a specific directory from the search' },
      ],
      scenarios: [
        { task: 'Recursively find lines containing "error" or "warning" in the logs directory', accepted: ['grep -rE "error|warning" logs', 'grep -r -e error -e warning logs'] },
        { task: 'Recursively find the word "TODO" only in .js files, excluding the node_modules directory', accepted: ['grep -r --include="*.js" --exclude-dir="node_modules" "TODO" .', "grep -r --include='*.js' --exclude-dir='node_modules' 'TODO' ."] },
        { task: 'Count how many .log files in the current directory contain the word "FATAL"', accepted: ['grep -l "FATAL" *.log | wc -l'] },
        { task: 'Find lines in config.txt matching a pattern starting with "host" or "port"', accepted: ['grep -E "^(host|port)" config.txt', "grep -E '^(host|port)' config.txt"] },
      ],
    },
    {
      name: 'find (advanced)',
      description: 'advanced find operations: combining multiple conditions, exclusions, batch processing',
      flags: [
        { flag: '-name "<a>" -o -name "<b>"', meaning: 'find files matching either of two name patterns (OR logic)' },
        { flag: '! -name "<pattern>"', meaning: 'find files that do NOT match the given pattern (negation)' },
        { flag: '-path "<pattern>" -prune', meaning: 'fully exclude a path from the search, not descending into it' },
      ],
      scenarios: [
        { task: 'Find files ending in .jpg or .png in the images directory', accepted: ['find images -name "*.jpg" -o -name "*.png"', "find images -name '*.jpg' -o -name '*.png'"] },
        { task: 'Find every file in the project directory, fully excluding the .git subdirectory', accepted: ['find project -path "*/.git" -prune -o -print', "find project -path '*/.git' -prune -o -print"] },
        { task: 'Find files that do NOT end in .txt in the docs directory', accepted: ['find docs ! -name "*.txt"', "find docs ! -name '*.txt'"] },
        { task: 'Find .conf files in /etc then back up each one with a .bak suffix using -exec', accepted: ['find /etc -name "*.conf" -exec cp {} {}.bak \\;', "find /etc -name '*.conf' -exec cp {} {}.bak \\;"] },
      ],
    },
    {
      name: 'xargs (advanced)',
      description: 'advanced xargs operations: limiting parallelism, confirmation, passing positional arguments',
      flags: [
        { flag: '-P <n>', meaning: 'run at most n processes in parallel at once' },
        { flag: '-p', meaning: 'ask for confirmation before executing each command' },
        { flag: '-I {}', meaning: 'replace the placeholder {} with each input line in the command (already covered in the basic set, repeated here for advanced context)' },
      ],
      scenarios: [
        { task: 'Compress at most 4 files in parallel at once from list files.txt using gzip', accepted: ['xargs -P 4 gzip < files.txt', 'cat files.txt | xargs -P 4 gzip'] },
        { task: 'Delete each file in list old_files.txt, confirming before each deletion', accepted: ['xargs -p rm < old_files.txt', 'cat old_files.txt | xargs -p rm'] },
        { task: 'Copy each file in list list.txt into directory /backup, keeping the original filename', accepted: ['xargs -I {} cp {} /backup < list.txt', 'cat list.txt | xargs -I {} cp {} /backup'] },
      ],
    },
    {
      name: 'diff (advanced)',
      description: 'advanced diff operations: ignoring whitespace, comparing directories, creating a patch',
      flags: [
        { flag: '-w', meaning: 'ignore whitespace differences when comparing' },
        { flag: '-q', meaning: 'only report whether files differ by name, without showing details' },
        { flag: '-N', meaning: 'when comparing directories, treat a file existing only on one side as an empty file on the other' },
      ],
      scenarios: [
        { task: 'Recursively compare two directories dir1 and dir2, showing the names of differing files', accepted: ['diff -rq dir1 dir2', 'diff -r -q dir1 dir2'] },
        { task: 'Compare two files a.txt and b.txt ignoring whitespace differences', accepted: ['diff -w a.txt b.txt'] },
        { task: 'Create a patch file from the difference between old.txt and new.txt', accepted: ['diff -u old.txt new.txt > changes.patch'] },
      ],
    },
    {
      name: 'wc (advanced)',
      description: 'advanced counting operations with wc across multiple files at once',
      flags: [
        { flag: '-L', meaning: 'show the length of the longest line in the file' },
      ],
      scenarios: [
        { task: 'Count the total number of lines across every .txt file in the current directory', accepted: ['wc -l *.txt'] },
        { task: 'Find the length of the longest line in file code.py', accepted: ['wc -L code.py'] },
        { task: 'Count the words across every .md file in the docs directory', accepted: ['wc -w docs/*.md'] },
      ],
    },
    {
      name: 'tr (advanced)',
      description: 'advanced character-translation operations with tr: filtering characters, squeezing whitespace',
      flags: [
        { flag: '-c', meaning: 'invert the given character set (complement), operating on characters NOT in the set' },
        { flag: "-d '[:punct:]'", meaning: 'delete every punctuation character from the input' },
      ],
      scenarios: [
        { task: 'Delete all punctuation from the content of file text.txt', accepted: ["tr -d '[:punct:]' < text.txt"] },
        { task: 'Squeeze multiple consecutive spaces into a single space while reading input.txt', accepted: ["tr -s ' ' < input.txt"] },
        { task: 'Keep only the digits in file mixed.txt, deleting every other character', accepted: ["tr -cd '0-9\\n' < mixed.txt"] },
      ],
    },
  ],
};
