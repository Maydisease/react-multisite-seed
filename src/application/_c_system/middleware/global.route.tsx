import React                from 'react';
import {IRouteItemConf}     from '@common/interface/route.interface';
import {BrowserRouterProps} from 'react-router-dom';

interface IState {
  continueNext: boolean;
}

export default function globalRouteMiddleware(WrappedComponent: React.ComponentType, route: IRouteItemConf) {
  return class Component extends React.Component<any, any> {

    state: IState = {
      continueNext: false
    };

    constructor(props: BrowserRouterProps) {
      super(props);
    }

    public componentDidMount(): void {
      const intercepts                           = route.meta.intercept;
      const interceptPromise: Promise<boolean>[] = [];

      // 路由拦截器
      if (intercepts.length && intercepts.length > 0) {

        intercepts.forEach((intercept) => interceptPromise.push(intercept(route)));

        // 等待拦截器结果
        Promise.all(interceptPromise).then((result) => {
          const continueNext = result.every((item) => item === true);
          this.setState({...this.state, continueNext})
        });
      }

    }

    public render() {
      return this.state.continueNext && <WrappedComponent/>;
    }
  }
};
