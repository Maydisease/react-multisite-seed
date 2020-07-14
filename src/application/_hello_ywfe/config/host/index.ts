import devHost     from './dev.host.json';
import testHost    from './test.host.json';
import debugHost   from './debug.host.json';
import releaseHost from './release.host.json';
import {env}       from '../../../../env';

const hostMap = {
  'dev'    : devHost,
  'test'   : testHost,
  'debug'  : debugHost,
  'release': releaseHost
};

const host = hostMap[(env.appEnv as 'dev' | 'test' | 'debug' | 'release')];
export {host};
