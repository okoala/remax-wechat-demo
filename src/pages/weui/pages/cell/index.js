import * as React from 'react';
import { View, Image } from 'remax/wechat';

import Header from '@/components/Header';
import Cells from '../../components/cells/cells';
import Cell from '../../components/cell/cell';
import Slideview from '../../components/slideview/slideview';
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
    return (
      <View>
        <Header title="Cell" desc="列表" align="left" />
        <View>
          <Cells extClass="my-cells" title="带说明的列表项">
            <Cell value="标题文字" footer="说明文字"></Cell>
            <Cell>
              <View>标题文字（使用slot）</View>
              <View slot="footer">说明文字</View>
            </Cell>
            <Slideview
              show={true}
              buttons={this.state.slideButtons}
              bindbuttontap={this.slideButtonTap}
            >
              <Cell value="左滑可以删除" footer="说明文字"></Cell>
            </Slideview>
          </Cells>

          <Cells title="带图标、说明的列表项" footer="底部说明文字">
            <Cell value="标题文字" footer="说明文字">
              <View slot="icon">
                <Image
                  src={this.state.icon}
                  className={styles.icon}
                />
              </View>
            </Cell>
            <Cell value="标题文字" footer="说明文字">
              <View slot="icon">
                <Image
                  src={this.state.icon}
                  className={styles.icon}
                />
              </View>
            </Cell>
          </Cells>

          <Cells title="带跳转的列表项">
            <Cell link hover value="有hover效果" footer="说明文字">
              <View slot="title">
                <Image
                  src={this.state.icon}
                  className={styles.icon}
                />
              </View>
            </Cell>
            <Cell link value="无hover效果" footer="说明文字">
              <View slot="icon">
                <Image
                  src={this.state.icon}
                  className={styles.icon}
                />
              </View>
            </Cell>
            <Cell
              link
              url="../index"
              value="无hover效果，带跳转URL"
              footer="说明文字"
            >
              <View slot="icon">
                <Image
                  src={this.state.icon}
                  className={styles.icon}
                />
              </View>
            </Cell>
          </Cells>
        </View>
      </View>
    );
  }
}
