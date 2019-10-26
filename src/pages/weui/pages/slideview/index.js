import * as React from 'react';
import { View } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import Slideview from '../../components/slideview/slideview';
import Cell from '../../components/cell/cell';
import styles from './index.module.less';

import loveSvg from './icon_love.svg';
import starSvg from './icon_star.svg';
import devSvg from './icon_del.svg';

import base64 from '../../images/base64';

export default class extends React.Component {
  state = {
    icon: base64.icon20,
    slideButtons: [
      {
        text: '普通',
        src: loveSvg, // icon的路径
      },
      {
        text: '普通',
        extClass: 'test',
        src: starSvg, // icon的路径
      },
      {
        type: 'warn',
        text: '警示',
        extClass: 'test',
        src: devSvg, // icon的路径
      },
    ],
  };

  slideButtonTap(e) {
    console.log('slide button tap', e.detail);
  }

  render() {
    const { slideButtons } = this.state;
    return (
      <MainLayout>
        <Header title="Slideview" desc="左滑操作" align="left" />
        <View className="page__bd">
          <View className="weui-cells">
            <Slideview
              show
              buttons={slideButtons}
              bindbuttontap={this.slideButtonTap}
            >
              <Cell value="左滑可以删除" footer="说明文字"></Cell>
            </Slideview>
          </View>

          <View className="weui-slidecells">
            <Slideview
              icon
              buttons={slideButtons}
              bindbuttontap={this.slideButtonTap}
            >
              <View className={styles["weui-slidecell"]}>左滑可以删除（图标Button）</View>
            </Slideview>
          </View>
        </View>
      </MainLayout>
    );
  }
}
