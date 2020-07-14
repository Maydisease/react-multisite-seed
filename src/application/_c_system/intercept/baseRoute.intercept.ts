import {IIntercept} from './intercept';

const intercept: IIntercept = (route) => {
  return new Promise((resolve, reject) => {
    resolve(true);
    return;
  })
};

export default intercept;
