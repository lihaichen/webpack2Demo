import React, {Component, PropTypes} from 'react';
/*
 import {connect} from 'dva';
 import './test.less';

 @connect(
 state => ({test: state.test})
 )
 */
const prefixCls = 'Test';
export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={`${prefixCls}`}>
        <p>测试组件</p>
      </div>);
  }
}
