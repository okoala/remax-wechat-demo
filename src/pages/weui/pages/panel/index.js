import * as React from 'react';
import { View, Image, Navigator } from 'remax/wechat';

import Header from '@/components/Header';
import styles from './index.module.less';
import base64 from '../../images/base64';

export default class extends React.Component {
  state = {
    icon20: base64.icon20,
    icon60: base64.icon60,
  };

  render() {
    const { icon20, icon60 } = this.state;

    return (
      <View>
        <Header title="Panel" desc="面板" align="left" />
        <View className="page__bd">
          <View className="weui-panel weui-panel_access">
            <View className="weui-panel__hd">图文组合列表</View>
            <View className="weui-panel__bd">
              <Navigator
                url=""
                className="weui-media-box weui-media-box_appmsg"
                hoverClass="weui-cell_active"
              >
                <View className="weui-media-box__hd weui-media-box__hd_in-appmsg">
                  <Image className="weui-media-box__thumb" src={icon60} />
                </View>
                <View className="weui-media-box__bd weui-media-box__bd_in-appmsg">
                  <View className="weui-media-box__title">标题一</View>
                  <View className="weui-media-box__desc">
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                  </View>
                </View>
              </Navigator>
              <Navigator
                url=""
                className="weui-media-box weui-media-box_appmsg"
                hoverClassName="weui-cell_active"
              >
                <View className="weui-media-box__hd weui-media-box__hd_in-appmsg">
                  <Image className="weui-media-box__thumb" src={icon60} />
                </View>
                <View className="weui-media-box__bd weui-media-box__bd_in-appmsg">
                  <View className="weui-media-box__title">标题二</View>
                  <View className="weui-media-box__desc">
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                  </View>
                </View>
              </Navigator>
            </View>
            <View className="weui-panel__ft">
              <View className="weui-cell weui-cell_access weui-cell_link">
                <View className="weui-cell__bd">查看更多</View>
                <View className="weui-cell__ft weui-cell__ft_in-access"></View>
              </View>
            </View>
          </View>
          <View className="weui-panel weui-panel_access">
            <View className="weui-panel__hd">文字组合列表</View>
            <View className="weui-panel__bd">
              <View className="weui-media-box weui-media-box_text">
                <View className="weui-media-box__title weui-media-box__title_in-text">
                  标题一
                </View>
                <View className="weui-media-box__desc">
                  由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </View>
              </View>
              <View className="weui-media-box weui-media-box_text">
                <View className="weui-media-box__title weui-media-box__title_in-text">
                  标题二
                </View>
                <View className="weui-media-box__desc">
                  由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </View>
              </View>
            </View>
            <View className="weui-panel__ft">
              <View className="weui-cell weui-cell_access weui-cell_link">
                <View className="weui-cell__bd">查看更多</View>
                <View className="weui-cell__ft weui-cell__ft_in-access"></View>
              </View>
            </View>
          </View>
          <View className="weui-panel">
            <View className="weui-panel__hd">小图文组合列表</View>
            <View className="weui-panel__bd">
              <View className="weui-media-box weui-media-box_small-appmsg">
                <View className="weui-cells weui-cells_in-small-appmsg">
                  <Navigator
                    url=""
                    className="weui-cell weui-cell_example weui-cell_access"
                    hoverClassName="weui-cell_active"
                  >
                    <View className="weui-cell__hd">
                      <Image
                        src={icon20}
                        className={styles.img}
                      />
                    </View>
                    <View className="weui-cell__bd weui-cell_primary">
                      <View>文字标题</View>
                    </View>
                    <View className="weui-cell__ft weui-cell__ft_in-access"></View>
                  </Navigator>
                  <Navigator
                    url=""
                    className="weui-cell weui-cell_example weui-cell_access"
                    hover-className="weui-cell_active"
                  >
                    <View className="weui-cell__hd">
                      <Image
                        src={icon20}
                        className={styles.img}
                      />
                    </View>
                    <View className="weui-cell__bd weui-cell_primary">
                      <View>文字标题</View>
                    </View>
                    <View className="weui-cell__ft weui-cell__ft_in-access"></View>
                  </Navigator>
                </View>
              </View>
            </View>
          </View>
          <View className="weui-panel">
            <View className="weui-panel__hd">文字列表附来源</View>
            <View className="weui-panel__bd">
              <View className="weui-media-box weui-media-box_text">
                <View className="weui-media-box__title weui-media-box__title_in-text">
                  标题一
                </View>
                <View className="weui-media-box__desc">
                  由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </View>
                <View className="weui-media-box__info">
                  <View className="weui-media-box__info__meta">文字来源</View>
                  <View className="weui-media-box__info__meta">时间</View>
                  <View className="weui-media-box__info__meta weui-media-box__info__meta_extra">
                    其它信息
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
