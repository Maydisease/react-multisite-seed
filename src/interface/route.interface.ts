import React from 'react';

export interface IRouteItemConf {
  path: string;
  name: string;
  redirect?: string;
  component?: React.ComponentType;
  children?: IRouteItemConf[];
  meta: {
    title: string;
    intercept: any[]
    [key: string]: any
  }
}
