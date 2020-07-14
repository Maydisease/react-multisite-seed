const fs    = require('fs');
const ejs   = require('ejs');
const path  = require('path');
const paths = require('../../paths');

module.exports = class CreateService {

  applicationName = '';

  constructor (applicationName) {
    this.applicationName = applicationName;
  }

  // 创建系统应用入口文件
  appMainFile () {
    const writePath = path.join(paths().base.appSrc, '.main.tsx');
    const message   = `${writePath} create success`;
    return this.create('createClient', writePath, message);
  }

  // 创建项目下的tsconfig文件
  tsconfig () {
    const writePath = path.join(paths().base.appRoot, 'tsconfig.json');
    const message   = `${writePath} create success`;
    return this.create('createTsConfig', writePath, message);
  }

  create (tplName, writePath, message) {
    const tplPath = path.join(__dirname, `./${tplName}.tpl`);
    const tplRaw  = fs.readFileSync(tplPath).toString();
    const newTpl  = ejs.render(tplRaw, {applicationName: this.applicationName});
    return new Promise((resolve, reject) => {
      fs.writeFile(writePath, newTpl, () => {
        console.log(message);
        resolve();
      });
    });
  }
};
