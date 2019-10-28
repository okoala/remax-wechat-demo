import * as React from 'react';
import { View } from 'remax/wechat';

import Header from '@/components/Header';
import styles from './index.module.less';

export default class extends React.Component {
  render() {
    return (
      <View>
        <Header title="Flex" desc="Flex布局" align="left" />
        <View className="page__bd page__bd_spacing">
          <View className="weui-flex">
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
          </View>
          <View className="weui-flex">
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
          </View>
          <View className="weui-flex">
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
          </View>
          <View className="weui-flex">
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
          </View>
          <View className="weui-flex">
            <View>
              <View className={styles.placeholder}>weui</View>
            </View>
            <View className="weui-flex__item">
              <View className={styles.placeholder}>weui</View>
            </View>
            <View>
              <View className={styles.placeholder}>weui</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
