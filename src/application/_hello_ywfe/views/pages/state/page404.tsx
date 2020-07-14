import './page404.scoped.scss';
import React            from 'react';
import {Result, Button} from 'antd';

class Page404 extends React.Component<any, any> {
  render() {
    return <div className="state-page">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>;
  }
}

export default Page404;
