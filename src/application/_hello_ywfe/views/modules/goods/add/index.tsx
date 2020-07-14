import React        from 'react';
import {withRouter} from 'react-router';

class GoodsAdd extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
  }

  public render() {
    return <>goods add</>
  }

}

export default withRouter(GoodsAdd)
