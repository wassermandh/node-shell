const pwd = require('./pwd');
const ls = require('./ls');


process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'ls') {
    ls();
    //process.stdout.write('\nprompt >');
  } else if (cmd === 'pwd') {
    pwd();
  } else if (cmd === '') {
    process.stdout.write('\nprompt >');
  } else {
    process.stdout.write('command not found');
    process.stdout.write('\nprompt >');
  }

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt >');
});

// process.stdout.write('prompt >');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();
//   console.log(cmd);
// });

//pwd();
