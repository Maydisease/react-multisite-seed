import React            from 'react';
import {IRouteItemConf} from '@common/interface/index';
import routeIntercept   from './route.intercept';

const route: IRouteItemConf[] = [
  {
    path     : '/goods',
    name     : 'goods',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-goods" */ './goods')),
    meta     : {
      title : '商品管理',
      intercept: routeIntercept
    }
  },
  {
    path     : '/goods/list',
    name     : 'goods.list',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-goods.list" */ './goods/list')),
    meta     : {
      title : '商品列表',
      intercept: routeIntercept
    }
  },
  {
    path     : '/goods/add',
    name     : 'goods.add',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-goods.add" */ './goods/add')),
    meta     : {
      title : '商品添加',
      intercept: routeIntercept
    }
  },
  {
    path     : '/order',
    name     : 'order',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-order" */ './order')),
    meta     : {
      title : '订单管理',
      intercept: routeIntercept
    }
  },
  {
    path     : '/receipt',
    name     : 'receipt',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-receipt" */ './receipt')),
    meta     : {
      title : '票据管理',
      intercept: routeIntercept
    }
  }
];

export default route;
