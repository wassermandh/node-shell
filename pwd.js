module.exports = function() {
  process.stdout.write('prompt >');

  process.stdin.on('data', data => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
      process.stdout.write(process.cwd());
      process.stdout.write('\nprompt >');
    } else if (cmd === '') {
      process.stdout.write('\nprompt >');
    } else {
      process.stdout.write('command not found');
      process.stdout.write('\nprompt >');
    }

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt >');
  });
};
