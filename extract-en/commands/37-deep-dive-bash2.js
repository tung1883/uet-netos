const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-bash2',
  week: WEEKS.W4_TH5,
  commands: [
    {
      name: 'string length and substring',
      description: 'string-handling operations in Bash: getting the length, extracting a substring',
      flags: [
        { flag: '${#var}', meaning: 'get the length (character count) of the string in a variable' },
        { flag: '${var:0:5}', meaning: 'get a 5-character substring starting at position 0 of the string' },
        { flag: '${var#prefix}', meaning: 'strip the shortest prefix matching prefix from the start of the string' },
        { flag: '${var%suffix}', meaning: 'strip the shortest suffix matching suffix from the end of the string' },
      ],
      scenarios: [
        { task: 'Get the length of variable name in Bash', accepted: ['echo ${#name}'] },
        { task: 'Get the filename without the extension from variable filename="report.txt"', accepted: ['echo ${filename%.txt}'] },
        { task: 'Replace every space in variable text with an underscore', accepted: ['echo ${text// /_}'] },
      ],
    },
    {
      name: 'default value expansion',
      description: 'Bash parameter-expansion syntax for supplying a default value when a variable isn\'t set',
      flags: [
        { flag: '${var:-default}', meaning: 'use the value default if the variable is unset or empty, without changing the original variable' },
        { flag: '${var:=default}', meaning: 'assign the value default to the variable if it is unset or empty' },
      ],
      scenarios: [
        { task: 'Print the value of variable name, printing "Unknown" if unset, without changing the variable', accepted: ['echo ${name:-Unknown}'] },
      ],
    },
    {
      name: 'arithmetic expansion',
      description: 'perform arithmetic directly in Bash using the $(( )) syntax',
      flags: [],
      scenarios: [
        { task: 'Sum variables a and b and assign it into variable result in Bash', accepted: ['result=$((a + b))', 'result=$(($a + $b))'] },
      ],
    },
    {
      name: 'select loop',
      description: 'create a simple interactive selection menu in Bash using the select loop',
      flags: [],
      scenarios: [
        { task: 'Write the opening line of a select loop creating a menu to choose between "Start" and "Stop" in Bash', accepted: ['select opt in "Start" "Stop"; do'] },
      ],
    },
    {
      name: 'heredoc with variable expansion disabled',
      description: 'use a here-document but disable variable expansion inside it by quoting the delimiter',
      flags: [],
      scenarios: [
        { task: 'Write the opening line of a here-document that does not expand variables inside it (literal text)', accepted: ["cat << 'EOF'"] },
      ],
    },
    {
      name: 'array iteration',
      description: 'iterate over each element of an array in Bash using a for loop',
      flags: [],
      scenarios: [
        { task: 'Write a for loop iterating over each element of array colors in Bash (just the opening line)', accepted: ['for c in "${colors[@]}"; do'] },
      ],
    },
    {
      name: 'command substitution in variable',
      description: 'assign the output of a command into a variable in Bash',
      flags: [],
      scenarios: [
        { task: 'Assign the output of the date command into variable now in Bash', accepted: ['now=$(date)'] },
        { task: 'Assign the line count of file data.txt into variable count in Bash', accepted: ['count=$(wc -l < data.txt)'] },
      ],
    },
    {
      name: 'test -z / -n in condition',
      description: 'check whether a string is empty or not in a Bash if condition',
      flags: [],
      scenarios: [
        { task: 'Write a condition checking whether variable $input is empty (nothing entered)', accepted: ['[ -z "$input" ]'] },
        { task: 'Write a condition checking whether variable $input is non-empty', accepted: ['[ -n "$input" ]'] },
      ],
    },
    {
      name: '[[ ]] vs [ ]',
      description: 'Bash\'s extended [[ ]] conditional syntax, supporting regex and logical operators directly, which [ ] lacks',
      flags: [],
      scenarios: [
        { task: 'Write a condition checking whether variable $filename matches a regex pattern ending in .txt, using [[ ]]', accepted: ['[[ $filename =~ \\.txt$ ]]'] },
      ],
    },
  ],
};
