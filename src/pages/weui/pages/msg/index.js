import * as React from 'react';
import { View, Button, Navigator, Image, navigateTo } from 'remax/wechat';

import Header from '@/components/Header';
import styles from './index.module.less'

export default class extends React.Component {
  openSuccess = () => {
    navigateTo({
      url: 'msg_success',
    });
  };
  openText = () => {
    navigateTo({
      url: 'msg_text',
    });
  };
  openTextPrimary = () => {
    navigateTo({
      url: 'msg_text_primary',
    });
  };
  openFail = () => {
    navigateTo({
      url: 'msg_fail',
    });
  };

  render() {
    return (
      <View className={styles.page}>
        <Header title="Msg" desc="提示页" />
        <View className="page__bd">
          <View className="weui-btn-area">
            <Button
              className="weui-btn"
              type="default"
              onClick={this.openSuccess}
            >
              成功提示页
            </Button>
            <Button className="weui-btn" type="default" onClick={this.openFail}>
              失败提示页
            </Button>
            <Button className="weui-btn" type="default" onClick={this.openText}>
              无图标提示页
            </Button>
            <Button
              className="weui-btn"
              type="default"
              onClick={this.openTextPrimary}
            >
              无图标提示页
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
