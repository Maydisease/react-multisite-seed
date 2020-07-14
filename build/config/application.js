const fs = require('fs');

const paths           = require('../paths');
const applicationPath = paths().base.application;
const applicationList = fs.readdirSync(applicationPath);

module.exports = applicationList;
