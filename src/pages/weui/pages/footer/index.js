import * as React from 'react';
import { View } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';

import styles from './index.module.less';

export default class extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="Footer" desc="页脚" />
        <View className="page__bd page__bd_spacing">
          <View className={styles['weui-footer']}>
            <View className={styles['weui-footer__text']}>
              Copyright © 2008-2016 weui.io
            </View>
          </View>

          <View className={styles['weui-footer']}>
            <View className={styles['weui-footer__links']}>
              <navigator url="" className={styles['weui-footer__link']}>
                底部链接
              </navigator>
            </View>
            <View className={styles['weui-footer__text']}>
              Copyright © 2008-2016 weui.io
            </View>
          </View>

          <View className={styles['weui-footer']}>
            <View className={styles['weui-footer__links']}>
              <navigator url="" className={styles['weui-footer__link']}>
                底部链接
              </navigator>
            </View>
            <View className={styles['weui-footer__text']}>
              Copyright © 2008-2016 weui.io
            </View>
          </View>

          <View
            className={`${styles['weui-footer']} ${
              styles['weui-footer_fixed-bottom']
            }`}
          >
            <View className={styles['weui-footer__links']}>
              <navigator url="" className={styles['weui-footer__link']}>
                WeUI首页
              </navigator>
            </View>
            <View className={styles['weui-footer__text']}>
              Copyright © 2008-2016 weui.io
            </View>
          </View>
        </View>
      </MainLayout>
    );
  }
}
