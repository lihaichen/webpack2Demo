import React, {Component, PropTypes} from 'react';
import './test.less';
const prefixCls = 'Test';
import {connect} from 'react-redux';
import * as testActions from '../../redux/modules/test/action';
import * as pageActions from '../../redux/modules/page/action';
@connect(
  state => ({test: state.test, page: state.page}),
  {...testActions, ...pageActions}
)
export default class Test extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired,
    page: PropTypes.object.isRequired,
    getApiTest: PropTypes.func.isRequired,
    updateTestPageStatus: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.updateTestPageStatus({count: 123});
    // this.props.getApiTest();
    // testActions.testCompose(this.context.store);
  }

  render() {
    console.log(this.props.page.get('test').toJS());
    return (
      <div className={`${prefixCls}`}>
        <p>测试组件</p>
        <img src="/images/1.jpg"/>
      </div>);
  }
}
