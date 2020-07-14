import React from "react";

declare interface IRouteRule {
  path: string;
  name: string;
  redirect?: string;
  component?: React.ComponentType;
  meta: {
    title: string;
    intercept: any[]
    [key: string]: any
  }
}
