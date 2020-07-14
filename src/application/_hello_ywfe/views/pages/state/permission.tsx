import './permission.scoped.scss';
import React            from 'react';
import {Result, Button} from 'antd';

class Permission extends React.Component<any, any> {
  render() {
    return <div className="state-page">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>;
  }
}

export default Permission;
