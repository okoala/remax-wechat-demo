import * as React from 'react';
import { View, Navigator, Image } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';

import tabbarImg from '../../images/icon_tabbar.png';

export default class extends React.Component {
  state = {
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  render() {
    const { grids } = this.state;
    return (
      <MainLayout>
        <Header title="Grid" desc="九宫格" align="left" />
        <View className="page__bd">
          <View className="weui-grids">
            {grids.map((grid, index) => (
              <Navigator
                url=""
                className="weui-grid"
                hoverClass="weui-grid_active"
                key={index}
              >
                <Image class="weui-grid__icon" src={tabbarImg} />
                <View class="weui-grid__label">Grid</View>
              </Navigator>
            ))}
          </View>
        </View>
      </MainLayout>
    );
  }
}
