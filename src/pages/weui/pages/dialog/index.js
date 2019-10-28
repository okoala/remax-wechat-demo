import * as React from 'react';
import { View, Button } from 'remax/wechat';

import Header from '@/components/Header';
import Dialog from '../../components/dialog/dialog';
import styles from './index.module.less';

export default class extends React.Component {
  state = {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    oneButton: [{ text: '确定' }],
  };

  openConfirm = () => {
    this.setState({
      dialogShow: true,
    });
  };

  tapDialogButton = e => {
    this.setState({
      dialogShow: false,
      showOneButtonDialog: false,
    });
  };

  tapOneDialogButton = e => {
    this.setState({
      showOneButtonDialog: true,
    });
  };

  render() {
    return (
      <View>
        <Header title="Dialog" desc="对话框" align="left" />
        <View className="page__bd">
          <View className="weui-btn-area">
            <Button className="weui-btn" type="default" onClick={this.openConfirm}>
              确认取消按钮
            </Button>
            <Button
              className="weui-btn"
              type="default"
              onClick={this.tapOneDialogButton}
            >
              只有确认按钮
            </Button>
          </View>
        </View>
        <Dialog
          title="test"
          show={this.state.dialogShow}
          bindbuttontap={this.tapDialogButton}
          buttons={this.state.buttons}
        >
          <View>test content</View>
        </Dialog>
        <Dialog
          title="test1"
          show={this.state.showOneButtonDialog}
          bindbuttontap={this.tapDialogButton}
          buttons={this.state.oneButton}
        >
          <View>test content1</View>
        </Dialog>
      </View>
    );
  }
}
