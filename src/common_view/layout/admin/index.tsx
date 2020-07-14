import './global.scss';
import './style.scoped.scss';
import {IRouteItemConf}                  from '@common/interface/index';
import React                             from 'react';
import Sidebar                           from './sidebar';
import TopBar                            from './topbar';
import {RouteComponentProps, withRouter} from 'react-router';

interface IState {
  menusMap: IRouteItemConf[];
  showLayout: boolean;
}

type IProps = RouteComponentProps & {
  routeMap: IRouteItemConf[]
}

class Index extends React.Component<IProps, IState> {

  public state: IState = {
    menusMap  : [],
    showLayout: true
  };

  constructor(props: IProps) {
    super(props);
    this.checkCurrentRouteIsStatePage = this.checkCurrentRouteIsStatePage.bind(this);
  }

  public checkCurrentRouteIsStatePage() {
    const isStatePage = this.props.location.pathname.indexOf('/state') === 0;
    this.setState({...this.state, showLayout: !isStatePage});
  }

  public componentDidMount(): void {
    this.checkCurrentRouteIsStatePage();
  }

  public render() {
    return (
      <div className="adminLayout">
        {(this.state.menusMap && this.state.showLayout) && <Sidebar routeMap={this.props.routeMap}/>}
        <div className="mainWrap">
          {
            (this.state.menusMap && this.state.showLayout) &&
            <TopBar
              key={this.props.location.key}
              routeMap={this.props.routeMap}
            />
          }
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
