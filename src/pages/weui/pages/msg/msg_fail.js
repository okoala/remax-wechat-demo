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
        <Msg type="warn" title="操作失败">
          <View slot="desc">
            内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
            <Navigator url="" className="weui-msg__link">
              文字链接
            </Navigator>
          </View>
          <View slot="extend">
            <View>1. 说明1</View>
            <View>2. 说明2</View>
          </View>
          <View slot="handle">
            <Button className="weui-btn" type="default">
              辅助操作
            </Button>
          </View>
          <View slot="footer">
            <View className="weui-footer__links">
              <Navigator url="" className="weui-footer__link">
                底部链接文本
              </Navigator>
            </View>
            <View className="weui-footer__text">Copyright © 2008-2016 weui.io</View>
          </View>
        </Msg>
      </View>
    );
  }
}
