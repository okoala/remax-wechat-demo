import * as React from 'react';
import { View } from 'remax/wechat';
import styles from './index.module.less';

const MainLayout = (props) => {
  return (
    <View className={styles.layout}>
      {props.children}
    </View>
  );
}

export default MainLayout;
