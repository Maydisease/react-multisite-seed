import {IRouteItemConf} from '@common/interface/route.interface';

export type IIntercept = (route: IRouteItemConf) => Promise<boolean>
