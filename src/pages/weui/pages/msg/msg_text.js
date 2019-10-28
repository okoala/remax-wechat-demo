import * as React from 'react';
import { View, Button, Navigator, navigateTo } from 'remax/wechat';

import Header from '@/components/Header';
import Msg from '../../components/msg/msg';

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
      <View>
        <Msg title="操作提示primary text">
          <View slot="desc">
            内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
            <Navigator url="" class="weui-msg__link">
              文字链接
            </Navigator>
          </View>
          <View slot="extend">
            <View>1. 说明1</View>
            <View>2. 说明2</View>
          </View>
          <View slot="handle">
            <Button class="weui-btn" type="default">
              辅助操作
            </Button>
          </View>
          <View slot="footer">
            <View class="weui-footer__links">
              <Navigator url="" class="weui-footer__link">
                底部链接文本
              </Navigator>
            </View>
            <View class="weui-footer__text">Copyright © 2008-2016 weui.io</View>
          </View>
        </Msg>
      </View>
    );
  }
}
