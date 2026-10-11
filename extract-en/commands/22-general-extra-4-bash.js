const WEEKS = require('../weeks');
module.exports = {
  category: 'general-extra-4-bash',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'if-then-fi',
      description: 'the basic conditional branching structure in Bash, running a block of commands if a condition is true',
      flags: [],
      scenarios: [
        { task: 'Write the condition checking if variable $count is greater than 10 in Bash (just the opening if line)', accepted: ['if [ $count -gt 10 ]; then'] },
      ],
    },
    {
      name: 'if-elif-else',
      description: 'a multi-condition branching structure in Bash, checking several cases in sequence',
      flags: [],
      scenarios: [
        { task: 'Write an elif line checking if variable $count equals 5 in Bash', accepted: ['elif [ $count -eq 5 ]; then'] },
      ],
    },
    {
      name: 'for-loop',
      description: 'the for loop in Bash, iterating over a list of values or a number range',
      flags: [],
      scenarios: [
        { task: 'Write a for loop iterating over the numbers 1 to 5 in Bash (just the opening line)', accepted: ['for i in 1 2 3 4 5; do', 'for i in $(seq 1 5); do'] },
        { task: 'Write a for loop iterating over every .txt file in the current directory (just the opening line)', accepted: ['for f in *.txt; do'] },
      ],
    },
    {
      name: 'while-loop',
      description: 'the while loop in Bash, repeating a block of commands while a condition stays true',
      flags: [],
      scenarios: [
        { task: 'Write a while loop reading each line of file.txt (just the opening line, using read)', accepted: ['while read line; do', 'while IFS= read -r line; do'] },
      ],
    },
    {
      name: 'until-loop',
      description: 'the until loop in Bash, repeating a block of commands until a condition becomes true (opposite of while)',
      flags: [],
      scenarios: [
        { task: 'Write an until loop that runs until variable $count equals 10 (just the opening line)', accepted: ['until [ $count -eq 10 ]; do'] },
      ],
    },
    {
      name: 'case-esac',
      description: 'a multi-way branching structure (switch-case) in Bash, based on pattern matching',
      flags: [],
      scenarios: [
        { task: 'Write the opening line of a case structure checking the value of variable $1 in Bash', accepted: ['case $1 in'] },
      ],
    },
    {
      name: 'function definition',
      description: 'declare a function in Bash to reuse a block of commands',
      flags: [],
      scenarios: [
        { task: 'Write the declaration line for a function named backup in Bash', accepted: ['backup() {', 'function backup() {', 'function backup {'] },
      ],
    },
    {
      name: '$1 $2 $@',
      description: 'special variables in Bash used to access command-line parameters passed into a script',
      flags: [
        { flag: '$1', meaning: 'the first command-line parameter passed into the script' },
        { flag: '$@', meaning: 'all command-line parameters, each one as a separate word' },
        { flag: '$#', meaning: 'the number of command-line parameters passed into the script' },
        { flag: '$0', meaning: 'the name of the script currently running' },
        { flag: '$?', meaning: 'the exit code of the most recently run command' },
      ],
      scenarios: [
        { task: 'Print the first command-line parameter passed into the script', accepted: ['echo $1'] },
        { task: 'Print the number of command-line parameters passed into the script', accepted: ['echo $#'] },
        { task: 'Check the exit code of the command just run', accepted: ['echo $?'] },
      ],
    },
    {
      name: 'declare -a',
      description: 'declare an array variable in Bash',
      flags: [],
      scenarios: [
        { task: 'Declare an array named colors in Bash with 3 elements red, green, blue', accepted: ['colors=(red green blue)', 'declare -a colors=(red green blue)'] },
      ],
    },
    {
      name: 'array access',
      description: 'access an element or the entire content of an array in Bash',
      flags: [
        { flag: '${arr[0]}', meaning: 'access the first element (index 0) of the array' },
        { flag: '${arr[@]}', meaning: 'access every element of the array' },
        { flag: '${#arr[@]}', meaning: 'get the number of elements in the array' },
      ],
      scenarios: [
        { task: 'Print every element of array colors in Bash', accepted: ['echo ${colors[@]}'] },
      ],
    },
    {
      name: 'local',
      description: 'declare a variable with scope local to inside a Bash function',
      flags: [],
      scenarios: [
        { task: 'Declare a local variable named result inside a Bash function with value 0', accepted: ['local result=0'] },
      ],
    },
    {
      name: 'return',
      description: 'end a Bash function and return a status code (exit status), not a data value',
      flags: [],
      scenarios: [
        { task: 'Return status code 0 (success) when ending a Bash function', accepted: ['return 0'] },
      ],
    },
    {
      name: 'trap',
      week: WEEKS.W4_TH6,
      description: 'catch and handle a signal sent to a script, commonly used to clean up before exiting',
      flags: [],
      scenarios: [
        { task: 'Set up the cleanup function to run when the script receives SIGINT or SIGTERM', accepted: ['trap cleanup SIGINT SIGTERM', "trap 'cleanup' SIGINT SIGTERM"] },
      ],
    },
    {
      name: 'getopts',
      week: WEEKS.W4_TH6,
      description: 'parse and handle command-line options (e.g. -a, -b value) passed into a script',
      flags: [],
      scenarios: [
        { task: 'Write a getopts loop handling options -a and -b in a script (just the opening line)', accepted: ['while getopts "ab:" opt; do'] },
      ],
    },
    {
      name: 'source / .',
      description: 'execute a script\'s content in the current shell (instead of opening a new subshell), used to load variables/functions into the current environment',
      flags: [],
      scenarios: [
        { task: 'Load the variables and functions from file config.sh into the current shell', accepted: ['source config.sh', '. config.sh'] },
      ],
    },
    {
      name: 'shift',
      description: 'shift a script\'s command-line parameters left by one position, so $2 becomes $1',
      flags: [],
      scenarios: [
        { task: 'Shift the command-line parameters left by one position in a script', accepted: ['shift'] },
      ],
    },
    {
      name: 'set -e',
      week: WEEKS.W4_TH6,
      description: 'set the shell/script to immediately exit if any command returns an error (a non-zero exit code)',
      flags: [],
      scenarios: [
        { task: 'Set up a script to immediately stop upon hitting an error command', accepted: ['set -e'] },
      ],
    },
    {
      name: 'set -x',
      week: WEEKS.W4_TH6,
      description: 'enable debug mode, printing each command before it\'s executed in a script',
      flags: [],
      scenarios: [
        { task: 'Enable debug mode printing each command before running it in a script', accepted: ['set -x'] },
      ],
    },
    {
      name: 'here-document',
      week: WEEKS.W4_TH6,
      description: 'syntax that lets you embed a multi-line block of text directly into a script, feeding it as input to a command',
      flags: [],
      scenarios: [
        { task: 'Write the opening line of a here-document to write multi-line content into file output.txt using cat', accepted: ['cat << EOF > output.txt', 'cat <<EOF > output.txt'] },
      ],
    },
    {
      name: 'string comparison',
      description: 'compare two strings in a Bash test/[ ] condition',
      flags: [
        { flag: '=', meaning: 'check whether two strings are equal' },
        { flag: '!=', meaning: 'check whether two strings are different' },
        { flag: '-z', meaning: 'check whether a string is empty' },
        { flag: '-n', meaning: 'check whether a string is non-empty' },
      ],
      scenarios: [
        { task: 'Write a condition checking if variable $name equals the string "admin"', accepted: ['[ "$name" = "admin" ]', '[ "$name" == "admin" ]'] },
      ],
    },
    {
      name: 'numeric comparison',
      description: 'compare two numeric values in a Bash test/[ ] condition',
      flags: [
        { flag: '-eq', meaning: 'check whether two numbers are equal' },
        { flag: '-ne', meaning: 'check whether two numbers are different' },
        { flag: '-gt', meaning: 'check whether the first number is greater than the second' },
        { flag: '-lt', meaning: 'check whether the first number is less than the second' },
        { flag: '-ge', meaning: 'check whether the first number is greater than or equal to the second' },
        { flag: '-le', meaning: 'check whether the first number is less than or equal to the second' },
      ],
      scenarios: [
        { task: 'Write a condition checking if variable $age is greater than or equal to 18', accepted: ['[ $age -ge 18 ]'] },
      ],
    },
    {
      name: 'file test operators',
      description: 'operators for checking file attributes in a Bash test/[ ] condition',
      flags: [
        { flag: '-f', meaning: 'check that a path exists and is a regular file' },
        { flag: '-d', meaning: 'check that a path exists and is a directory' },
        { flag: '-e', meaning: 'check that a path exists (of any type)' },
        { flag: '-x', meaning: 'check that a file exists and has execute permission' },
        { flag: '-r', meaning: 'check that a file exists and has read permission' },
        { flag: '-w', meaning: 'check that a file exists and has write permission' },
        { flag: '-s', meaning: 'check that a file exists and has a size greater than 0 (not empty)' },
      ],
      scenarios: [
        { task: 'Write a condition checking whether directory /data exists', accepted: ['[ -d /data ]'] },
        { task: 'Write a condition checking whether file script.sh has execute permission', accepted: ['[ -x script.sh ]'] },
      ],
    },
    {
      name: 'logical operators (&&, ||)',
      description: 'logical operators in Bash used to chain conditions or run commands conditionally',
      flags: [
        { flag: '&&', meaning: 'run the second command only if the first one succeeded (exit code 0)' },
        { flag: '||', meaning: 'run the second command only if the first one failed (a non-zero exit code)' },
      ],
      scenarios: [
        { task: 'Run the command "echo OK" only if the command mkdir /data succeeds', accepted: ['mkdir /data && echo OK'] },
      ],
    },
  ],
};
