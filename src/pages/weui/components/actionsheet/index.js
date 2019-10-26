import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'remax/wechat';
import './index.less';

class ActionSheet extends React.Component {
  state = {
    show: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show });
    }
  }

  buttonTap(e) {
    const { value, groupindex, index } = e.currentTarget.dataset;
    this.triggerEvent('actiontap', { value, groupindex, index });
  }

  closeActionSheet(e) {
    const { type } = e.currentTarget.dataset;
    if (this.props.maskClosable || type) {
      // 点击 action 里面的 取消
      this.setState({
        show: false,
      });
      // 关闭回调事件
      this.triggerEvent('close');
    }
  }

  render() {
    const {
      mask,
      maskClass,
      title,
      showCancel,
      actions,
      cancelText,
      extClass,
    } = this.props;
    const { show } = this.state;

    return (
      <View>
        {mask && (
          <View
            className={`weui-mask ${
              show ? '' : 'weui-mask_hidden'
            } ${maskClass}`}
            bindtap="closeActionSheet"
          />
        )}
        <View
          className={`weui-actionsheet ${
            show ? 'weui-actionsheet_toggle' : ''
          } ${extClass}`}
        >
          {title && (
            <View className="weui-actionsheet__title">
              <View className="weui-actionsheet__title-text">{title}</View>
            </View>
          )}
          {actions.map((action, index) => (
            <View
              className={`${
                !showCancel && index === actions.length - 1
                  ? 'weui-actionsheet__action'
                  : 'weui-actionsheet__menu'
              }`}
              key={action.text}
            >
              <View
                className={`weui-actionsheet__cell ${
                  action.type === 'warn' ? 'weui-actionsheet__cell_warn' : ''
                }`}
                data-index={index}
                data-value={action.value}
                bindtap="buttonTap"
              >
                {action.text}
              </View>
            </View>
          ))}
          <View class="weui-actionsheet__action" wx:if="{{showCancel}}">
            <View
              class="weui-actionsheet__cell"
              data-type="close"
              id="iosActionsheetCancel"
              bindtap="closeActionSheet"
            >
              {{ cancelText }}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

ActionSheet.defaultProps = {
  title: '',
  showCancel: true,
  cancelText: '取消',
  maskClass: '',
  extClass: '',
  maskClosable: true,
  mask: true,
  show: false,
  actions: [],
};

ActionSheet.propTypes = {
  title: PropTypes.string,
  showCancel: PropTypes.bool,
  cancelText: PropTypes.string,
  maskClass: PropTypes.string,
  extClass: PropTypes.string,
  maskClosable: PropTypes.bool,
  mask: PropTypes.bool,
  show: PropTypes.bool,
  actions: PropTypes.array,
};

export default ActionSheet;
