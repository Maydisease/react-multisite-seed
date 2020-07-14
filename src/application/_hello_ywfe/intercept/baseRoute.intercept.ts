import {IIntercept} from './intercept';

const intercept: IIntercept = (route) => {
  return new Promise((resolve, reject) => {
    console.log(route);
    document.title = route.meta.title;
    resolve(true);
    return;
  })
};

export default intercept;
