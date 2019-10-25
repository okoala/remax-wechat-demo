import * as React from 'react';
import { View, Image } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import styles from './index.module.less';

import articleImg from '../../images/pic_article.png';

export default class extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="Article" desc="文章" align="left" />
        <View className={styles.article}>
            <View className={styles.h1}>大标题</View>
            <View className={styles.section}>
              <View className={styles.h2}>章标题</View>
              <View className={styles.section}>
                <View className={styles.h3}>1.1 节标题</View>
                <View className={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </View>
                <View className={styles.p}>
                  <Image
                    className={styles.img}
                    src={articleImg}
                    mode="aspectFit"
                    style={{ height: '180px' }}
                  />
                  <Image
                    className={styles.img}
                    src={articleImg}
                    mode="aspectFit"
                    style={{ height: '180px' }}
                  />
                </View>
              </View>
              <View className={styles.section}>
                <View className={styles.h3}>1.2 节标题</View>
                <View className={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </View>
              </View>
            </View>
          </View>
      </MainLayout>
    );
  }
}
