const webpack         = require('webpack');
const webpackConf     = require('./webpack.client');
const questionQueue   = require('./interaction');
const {program}       = require('commander');
const CreateService   = require('./task/client/createService');
const applicationList = require('./config/application');

program
.option('-p, --platform <type>')
.option('-a, --applicationName <type>');
program.parse(process.argv);

const runWebpackTask = async (applicationName) => {
  process.env.YWFE_APP_NAME = applicationName;
  const createService       = new CreateService(applicationName);
  await createService.appMainFile();
  await createService.tsconfig();
  webpack(webpackConf(applicationName), (err, stats) => {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
  });
};

(async () => {

  // 生产环境脚本交互
  if (program.applicationName) {

    // 如果当前参数不在符合的系统列表中
    if (!applicationList.includes(program.applicationName)) {
      console.warn('The current application name is not in the list of supported systems');
      return false;
    }

    await runWebpackTask(program.applicationName);
    return false;
  }

  // 终端选择器交互
  const useModelResponse = await questionQueue.useModel();

  // 使用默应用
  if (useModelResponse.applicationName !== 'select application') {
    await runWebpackTask(useModelResponse.applicationName);
  } else {
    const applicationSelectResponse = await questionQueue.applicationSelect();
    await runWebpackTask(applicationSelectResponse.applicationName);
  }

})();
