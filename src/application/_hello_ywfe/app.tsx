import React, {Suspense}     from 'react';
import Routes                from '@@/views/.route';
import AppDefault            from '@@/views/modules';
import AdminLayout           from '@common/common_view/layout/admin';
import globalRouteMiddleware from '@@/middleware/global.route';
import './global.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
  }

  public render() {
    return <>
      <Router>
        <AdminLayout routeMap={Routes}>
          <Switch>
            <Suspense fallback={<></>}>
              <Route exact path='/' component={AppDefault}/>
              {
                Routes.map((route) => {
                  if (!route.component) {
                    return (
                      <Route exact key={route.name} path={route.path}>
                        <Redirect to={route.redirect || '/'}/>
                      </Route>
                    )
                  }
                  return <Route
                    exact
                    key={route.name}
                    path={route.path}
                    component={globalRouteMiddleware((route.component as any), route)}
                  />
                })
              }
            </Suspense>
          </Switch>
        </AdminLayout>
      </Router>
    </>;
  }
}
