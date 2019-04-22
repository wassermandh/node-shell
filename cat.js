let fs = require('fs');

module.exports = function(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt>');
    }
  });
};
