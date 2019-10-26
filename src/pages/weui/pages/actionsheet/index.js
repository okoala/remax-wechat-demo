import * as React from 'react';
import { View, Text, Button, showActionSheet } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import ActionSheet from 'weui-miniprogram/miniprogram_dist/actionsheet/actionsheet';
import Icon from 'weui-miniprogram/miniprogram_dist/icon/icon';
import styles from './index.module.less';

export default class extends React.Component {
  state = {
    showDialog: false,
    groups: [
      { text: '示例菜单', value: 1 },
      { text: '示例菜单', value: 2 },
      { text: '负向菜单', type: 'warn', value: 3 },
    ],
  };
  open = () => {
    showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        if (!res.cancel) {
          console.log(res.tapIndex);
        }
      },
    });
  };

  openDialog = () => {
    this.setState({
      showDialog: true,
    });
  };

  closeDialog = () => {
    this.setState({
      showDialog: false,
    });
  };

  btnClick = e => {
    console.log(e);
    this.closeDialog();
  };

  render() {
    const { groups } = this.state;

    return (
      <MainLayout>
        <View>
          <Header title="ActionSheet" desc="弹出式菜单" align="left" />
          <View className="weui-btn-area">
            <Button className="weui-btn" type="default" onClick={this.openDialog}>
              模拟 ActionSheet
            </Button>
          </View>
          <ActionSheet
            bindactiontap={this.btnClick}
            show={this.state.showDialog}
            actions={groups}
            title="这是一个标题，可以为一行或者两行。"
          >
            <View slot="{{'actionSlot' + '1'}}" className={styles.action}>
              <View className={styles.desc}>前往图中包含的小程序：</View>
              <View className={styles.content}>
                <Icon icon="qr-code" size={20} />
                <Text className={styles.name}>小程序名称</Text>
                <Icon icon="arrow" size={12} />
              </View>
            </View>
          </ActionSheet>
        </View>
      </MainLayout>
    );
  }
}
