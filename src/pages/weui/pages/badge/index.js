import * as React from 'react';
import { View, Image } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import Cell from 'weui-miniprogram/miniprogram_dist/cell/cell';
import Cells from 'weui-miniprogram/miniprogram_dist/cells/cells';
import Badge from 'weui-miniprogram/miniprogram_dist/badge/badge';

import styles from './index.module.less';
import img from '../../images/pic_160.png';

console.log('-Cell--', Cell)
console.log('-Cells--', Cells)
console.log('-Badge--', Badge)

export default class extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="Badge" desc="徽章" align="left" />
        <View>
          <Cells title="新消息提示跟摘要信息后，统一在列表右侧">
            <Cell title="单行列表" link>
              <View slot="footer">
                <View className={styles.detail}>详细信息</View>
                <Badge className={styles.badge1} extClass={styles.blue} />
              </View>
            </Cell>
          </Cells>
          <Cells title="未读数红点跟在主题信息后，统一在列表左侧">
            <Cell>
              <View slot="title" className={styles.title}>
                <Image src={img} className={styles.img} />
                <Badge content="99+" className={styles.badge2} />
              </View>
              <View>联系人名称</View>
              <View className={styles.summary}>摘要信息</View>
            </Cell>
            <Cell link>
              <View className={styles.cell}>单行列表</View>
              <Badge content="8" className={styles.badge3} />
            </Cell>
            <Cell link>
              <View className={styles.cell}>单行列表</View>
              <Badge className={styles.badge4} content="New" />
            </Cell>
          </Cells>
        </View>
      </MainLayout>
    );
  }
}
