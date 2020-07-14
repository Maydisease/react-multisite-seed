import './sidebar.scoped.scss';
import React            from 'react';
import {IRouteItemConf} from '@common/interface/index'
import {Menu}           from 'antd';
import {Link}           from 'react-router-dom';
import {BarsOutlined}   from '@ant-design/icons';

interface IProps {
  routeMap: IRouteItemConf[];
}

interface IState {
  menusMap: IRouteItemConf[];
}

export default class Sidebar extends React.Component<IProps, any> {

  public state: IState = {
    menusMap: []
  };

  constructor(props: IProps) {
    super(props);
    this.transformRouteMapToMenusMap = this.transformRouteMapToMenusMap.bind(this);
  }

  public transformRouteMapToMenusMap() {
    const routeMap      = this.props.routeMap;
    const menusMap: any = [];

    routeMap.forEach((item: any) => {
      if (item.name.split('.').length === 1) menusMap.push(item);
    });

    menusMap.forEach((item: any) => {
      routeMap.forEach((itemX2: any) => {
        if (itemX2.name.indexOf(`${item.name}.`) >= 0) {
          if (!item.children) item.children = [];
          item.children.push(itemX2);
        }
      });
    });

    return menusMap;
  }

  public componentDidMount(): void {
    const menusMap = this.transformRouteMapToMenusMap();
    this.setState({menusMap});
  }

  public render() {
    return (
      <div className="sidebar">
        <div className="logo">Logo</div>
        <div className="menus-list">
          <Menu theme={'dark'} mode="inline">
            {this.state.menusMap.map((item) => {
              return (
                <Menu.SubMenu key={`menu_${item.name}`} title={item.meta.title} icon={<BarsOutlined/>}>
                  {item.children?.map((children) => {
                    return <Menu.Item key={children.name}><Link to={children.path}>{children.meta.title}</Link></Menu.Item>;
                  })}
                </Menu.SubMenu>
              );
            })}
          </Menu>
        </div>
      </div>
    )
  }
}
