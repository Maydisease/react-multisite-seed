const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const getApplicationTemplate = (applicationName) => {
  const applicationConfPath = `../src/application/${applicationName}/application.json`;

  let applicationConf;
  let appTemplatePath;
  try {
    applicationConf = JSON.parse(fs.readFileSync(path.join(__dirname, applicationConfPath)).toString());
    appTemplatePath = path.join(paths(applicationName).base.appRoot, `build/bootstrap_tpl/index.${applicationConf.bootstrap.appTemplate}.tpl`)
  } catch (e) {
    appTemplatePath = '';
    applicationConf = {};
  }

  return {
    appTemplatePath,
    appTitle: applicationConf.bootstrap.appTitle
  };
};

module.exports = getApplicationTemplate;
