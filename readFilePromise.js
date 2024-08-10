
const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

module.exports = readFilePromise;
