const webpack                 = require('webpack');
const webpackConfFn           = require('./webpack.dev');
const questionQueue           = require('./interaction');
const CreateService           = require('./task/client/createService');
const webpackDevServer        = require('webpack-dev-server');

const runWebpackTask = async (applicationName) => {
  process.env.YWFE_APP_NAME = applicationName;
  const createService       = new CreateService(applicationName);
  await createService.appMainFile();
  await createService.tsconfig();
  const webpackConf = webpackConfFn(applicationName);
  const compiler    = webpack(webpackConf);

  // 在编译时触发钩子
  compiler.watch({}, () => {
  });

  webpackDevServer.addDevServerEntrypoints(webpackConf, webpackConf.devServer, null);
  const server = new webpackDevServer(compiler, webpackConf.devServer);

  server.listen(3000, 'localhost', () => {
    console.log('dev server listening on port 3000');
  });
};

(async () => {
  // 终端交互
  const useModelResponse = await questionQueue.useModel();

  // 使用默应用
  if (useModelResponse.applicationName !== 'select application') {
    await runWebpackTask(useModelResponse.applicationName);
  } else {
    const applicationSelectResponse = await questionQueue.applicationSelect();
    await runWebpackTask(applicationSelectResponse.applicationName);
  }

})();
