import React            from 'react';
import {IRouteItemConf} from '@common/interface/route.interface';
import intercept        from '@@/intercept';


const route: IRouteItemConf[] = [
  {
    path: '/goods',
    name: 'goods',
    meta: {
      hidden   : false,
      title    : '商品管理',
      intercept: intercept.route
    },
  },
  {
    path     : '/goods/list',
    name     : 'goods.list',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-goods.list" */ '@@/views/modules/goods/list')),
    meta     : {
      hidden   : false,
      title    : '商品列表',
      intercept: intercept.route
    }
  },
  {
    path     : '/goods/add',
    name     : 'goods.add',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-goods.add" */ '@@/views/modules/goods/add')),
    meta     : {
      hidden   : false,
      title    : '商品添加',
      intercept: intercept.route
    }
  },
  {
    path     : '/order',
    name     : 'order',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-order" */ '@@/views/modules/order')),
    meta     : {
      hidden   : false,
      title    : '订单管理',
      intercept: intercept.route
    }
  },
  {
    path     : '/receipt',
    name     : 'receipt',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-receipt" */ '@@/views/modules/receipt')),
    meta     : {
      hidden   : false,
      title    : '票据管理',
      intercept: intercept.route
    }
  },
  {
    path     : '/state/permission',
    name     : 'state.permission',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-state.permission" */ '@@/views/pages/state/permission')),
    meta     : {
      hidden   : false,
      title    : '暂无权限访问',
      intercept: intercept.route
    }
  },
  {
    path     : '/state/page404',
    name     : 'state.page404',
    component: React.lazy(() => import(/* webpackChunkName: "ROUTE-state.permission" */ '@@/views/pages/state/page404')),
    meta     : {
      hidden   : false,
      title    : '当前页面无法找到',
      intercept: intercept.route
    }
  }
];

export default route;
