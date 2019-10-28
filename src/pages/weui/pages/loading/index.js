import * as React from 'react';
import { View, Navigator, Image } from 'remax/wechat';

import Header from '@/components/Header';
import styles from './index.module.less';

import Loading from '../../components/loading/loading';

export default class extends React.Component {
  state = {
    tips: '请稍后',
    show: true,
    animated: true,
  };

  onShow() {
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show,
      });
    }, 2000);
  }

  close() {
    this.setState({
      animated: !this.data.animated,
    });
  }

  onUnload() {
    clearInterval(this.timer);
  }

  render() {
    const { animated } = this.state;
    return (
      <View>
        <Header title="Loading" desc="加载中" align="left" />
        <view class="page__bd">
          <Loading show type="circle" />
          <Loading
            duration={900}
            extClass={styles.demo0}
            type="dot-gray"
            show
            animated={animated}
          />
          <Loading show type="dot-white" extClass={styles.demo1} />
        </view>
      </View>
    );
  }
}
