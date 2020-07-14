import React, {Suspense}     from 'react';
import Routes                from './modules/.route';
import AppDefault            from './modules';
import AdminLayout           from '@common/common_view/layout/admin';
import globalRouteMiddleware from './middleware/global.route';
import './global.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
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
                  if (!route.component) return;
                  return <Route
                    key={route.name}
                    path={route.path}
                    component={globalRouteMiddleware(route.component, route)}
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
