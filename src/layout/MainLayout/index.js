import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.module.less';

const MainLayout = (props) => {
  const bgColor = props.bgColor || '#f8f8f8';
  return (
    <View className={styles.layout} style={{ backgroundColor: bgColor}}>
      {props.children}
    </View>
  );
}

export default MainLayout;
