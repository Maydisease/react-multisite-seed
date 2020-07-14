import baseIntercept from '@@/intercept/baseRoute.intercept';
import baseRouteAuth from '@@/intercept/baseRouteAuth.intercept';

export default {
  route: [baseIntercept, baseRouteAuth]
}
