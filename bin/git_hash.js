var execSync = require('child_process').execSync;
var result = execSync('git log --pretty=format:"%h" -1');
var gitHash = result.toString();
module.exports = {
  gitHash: gitHash
};
