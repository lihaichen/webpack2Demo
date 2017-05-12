import React, {Component, PropTypes} from 'react';
import './test.less';
const prefixCls = 'Test';
import {connect} from 'react-redux';
import * as testActions from '../../redux/modules/test/action';

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
    this.props.getApiTest();
    testActions.testCompose(this.context.store);
  }

  render() {
    console.log('--->', this.props.test.toJS(), this.context);
    return (
      <div className={`${prefixCls}`}>
        <p>测试组件</p>
      </div>);
  }
}
