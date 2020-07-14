import './topbar.scoped.scss';
import React                             from 'react';
import {withRouter, RouteComponentProps} from 'react-router';
import {Link}                            from 'react-router-dom';
import {Breadcrumb}                      from 'antd';
import {IRouteItemConf}                  from '@common/interface/route.interface';

type IProps = RouteComponentProps & {
  routeMap: IRouteItemConf[];
}

interface IState {
  breadcrumbList: IRouteItemConf[];
}

class TopBar extends React.Component<IProps, IState> {

  public state = {
    breadcrumbList: []
  };

  constructor(props: any) {
    super(props);
    this.createBreadcrumb = this.createBreadcrumb.bind(this);
  }

  public createBreadcrumb() {

    const breadcrumbList: IRouteItemConf[] = [];
    const pathname                         = this.props.location.pathname;

    const loop = (pathname: string) => {
      this.props.routeMap.some((item) => {
        if (item.path === pathname) {
          breadcrumbList.push(item);
        }
      });

      if (pathname.split('/').length > 1) {
        const prevPathname = pathname.substring(0, pathname.lastIndexOf('/'));
        loop(prevPathname);
      }
    };
    loop(pathname);
    return breadcrumbList.reverse();
  }

  public componentDidMount(): void {
    this.setState({breadcrumbList: this.createBreadcrumb()});
  }

  public render() {
    return (
      <div className="topBar">
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            {
              this.state.breadcrumbList.map((item: IRouteItemConf) => {
                if (!item) return;
                return (
                  <Breadcrumb.Item key={item.name}>
                    {item.component ? <Link to={item.path}>{item.meta.title}</Link> : item.meta.title}
                  </Breadcrumb.Item>
                );
              })}
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

export default withRouter(TopBar);


