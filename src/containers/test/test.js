import React, {Component, PropTypes} from 'react';
import './test.less';
const prefixCls = 'Test';
import {connect} from 'react-redux';
import * as testActions from '../../redux/modules/test/action';
// import img from 'file!../../images/1.jpg';

@connect(
  state => ({test: state.test}),
  testActions
)
export default class Test extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired,
    getApiTest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    // this.props.getApiTest();
    // testActions.testCompose(this.context.store);
  }

  render() {
    return (
      <div className={`${prefixCls}`}>
        <p>测试组件</p>
        <img src="/images/1.jpg"/>
      </div>);
  }
}
