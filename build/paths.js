const path = require('path');

const resolve = (paths) => {
  const projectPath = path.join(__dirname, '..');
  return path.resolve(projectPath, paths);
};

module.exports = (applicationName = '') => {
  return {
    server: {
      main: resolve('./server/server.js')
    },
    client: {
      dist: resolve('./dist'),
      main: resolve(`./src/.main.tsx`),
      appTpl: path.join(__dirname, './index.tpl')
    },
    dev: {
      dist: resolve('./dist'),
      main: resolve(`./src/.main.tsx`)
    },
    base: {
      appRoot: resolve('.'),
      appTpl: path.join(__dirname, './index.tpl'),
      appSrc: resolve('src'),
      dist: resolve('./dist'),
      application: resolve('./src/application'),
      alias: {
        '@': resolve('src'),
        '@common/services': resolve('src/services'),
        '@common/utils': resolve('src/utils'),
        '@common/interface': resolve('src/interface'),
        '@common/common_view': resolve('src/common_view'),
        '@common/decorator': resolve('src/decorator'),
        '@@': resolve(`src/application/${applicationName}`),
        '@@config': resolve(`src/application/${applicationName}/config`),
        '@@modules': resolve(`src/application/${applicationName}/modules`),
        '@@intercept': resolve(`src/application/${applicationName}/intercept`),
        '@@middleware': resolve(`src/application/${applicationName}/middleware`)
      }
    }
  };
};
