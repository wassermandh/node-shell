const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'ls') {
    ls();
  } else if (cmd === 'pwd') {
    pwd();
  } else if (cmd === '') {
    process.stdout.write('\nprompt >');
  } else if (cmd.includes('cat')) {
    cat(cmd.split(' ').pop());
  } else {
    process.stdout.write('command not found');
    process.stdout.write('\nprompt >');
  }
});
