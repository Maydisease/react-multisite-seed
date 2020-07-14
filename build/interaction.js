const inquirer        = require('inquirer');
const applicationList = require('./config/application');

let defaultApplicationName = '';
const pathArr              = process.env.INIT_CWD.split('/');
if (pathArr.length > 0) {

  defaultApplicationName = pathArr[pathArr.length - 1];
  if (!(applicationList.includes(defaultApplicationName))) {
    defaultApplicationName = applicationList[0];
  }
}

module.exports = {
  // 使用模式
  useModel: () => {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'applicationName',
        message: 'select type',
        choices: [
          {
            name: 'use default application',
            value: defaultApplicationName
          },
          'select application'
        ]
      }
    ]);
  },
  // 选择的应用
  applicationSelect: () => {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'applicationName',
        message: 'select application',
        choices: applicationList
      }
    ]);
  }
};
