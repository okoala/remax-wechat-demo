import * as React from 'react';
import { View } from 'remax/wechat';

import KindList from '@/components/KindList';
import Header from '@/components/Header';
import styles from './index.module.less';

import formImg from './images/icon_nav_form.png';
import widgetImg from './images/icon_nav_widget.png';
import feedbackImg from './images/icon_nav_feedback.png';
import navImg from './images/icon_nav_nav.png';
import searchImg from './images/icon_nav_search.png';

const list = [
  {
    id: 'form',
    img: formImg,
    name: '表单',
    open: false,
    pages: [
      { zh: 'cell', url: 'pages/cell/index' },
      { zh: 'slideview', url: 'pages/slideview/index' },
      { zh: 'form', url: 'pages/form/index' },
      { zh: 'uploader', url: 'pages/uploader/index' },
    ],
  },
  {
    id: 'widget',
    img: widgetImg,
    name: '基础组件',
    open: false,
    pages: [
      { zh: 'article', url: 'pages/article/index' },
      { zh: 'icons', url: 'pages/icons/index' },
      { zh: 'badge', url: 'pages/badge/index' },
      { zh: 'flex', url: 'pages/flex/index' },
      { zh: 'footer', url: 'pages/footer/index' },
      { zh: 'gallery', url: 'pages/gallery/index' },
      { zh: 'grid', url: 'pages/grid/index' },
      { zh: 'loadmore', url: 'pages/loadmore/index' },
      { zh: 'loading', url: 'pages/loading/index' },
      { zh: 'panel', url: 'pages/panel/index' },
      { zh: 'preview', url: 'pages/preview/index' },
    ],
  },
  {
    id: 'feedback',
    img: feedbackImg,
    name: '操作反馈',
    open: false,
    pages: [
      { zh: 'dialog', url: 'pages/dialog/index' },
      { zh: 'msg', url: 'pages/msg/index' },
      { zh: 'half-screen-dialog', url: 'pages/half-screen-dialog/index' },
      { zh: 'actionsheet', url: 'pages/actionsheet/index' },
    ],
  },
  {
    id: 'nav',
    img: navImg,
    name: '导航相关',
    open: false,
    pages: [
      { zh: 'navigation', url: 'pages/navigation/index' },
      { zh: 'tabbar', url: 'pages/tabbar/index' },
    ],
  },
  {
    id: 'search',
    img: searchImg,
    name: '搜索相关',
    open: false,
    pages: [
      { zh: 'searchbar', url: 'pages/searchbar/index' },
    ],
  },
];
export default class extends React.Component {
  render() {
    return (
      <View>
        <Header
          align="left"
          title="小程序 UI 组件库"
          desc="小程序 UI 组件库是基于WeUI封装的组件库，是一套同微信原生视觉体验一致的组件库，由微信官方设计团队和小程序团队为微信小程序量身设计，令用户的使用感知更加统一。"
        />
        <View className={styles.bd}>
          <KindList list={list} />
        </View>
      </View>
    );
  }
}
