import * as React from 'react';
import { View } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import Loading from '../../components/loading/loading';
import styles from './index.module.less';

export default class extends React.Component {
  render() {
    return (
      <MainLayout bgColor="#ffffff">
        <Header title="Loadmore" desc="加载更多" align="left" />
        <View class="page__bd">
          <Loading type="circle" show></Loading>
          <View className="weui-loadmore weui-loadmore_line">
            <View className="weui-loadmore__tips weui-loadmore__tips_in-line">
              暂无数据
            </View>
          </View>
          <View className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
            <View className="weui-loadmore__tips weui-loadmore__tips_in-line weui-loadmore__tips_in-dot"></View>
          </View>
        </View>
      </MainLayout>
    );
  }
}
