import * as React from 'react';
import { Navigator } from 'remax/wechat';
import MainLayout from '@/layout/MainLayout';
import KindList from '@/components/KindList';
import Header from '@/components/Header';

import styles from './index.module.less';

import viewImg from '../../image/kind/view.png';
import contentImg from '../../image/kind/content.png';
import formImg from '../../image/kind/form.png';
import navImg from '../../image/kind/nav.png';
import mediaImg from '../../image/kind/media.png';
import mapImg from '../../image/kind/map.png';
import canvasImg from '../../image/kind/canvas.png';
import openImg from '../../image/kind/open.png';
import componentImg from '../../image/kind/component.png';

const toPages = list => {
  return list.map(item => ({
    zh: item,
    url: `pages/${item}/index`,
  }));
};

const list = [
  {
    id: 'view',
    img: viewImg,
    name: '视图容器',
    open: false,
    pages: toPages([
      'view',
      'scroll-view',
      'swiper',
      'movable-view',
      'cover-view',
    ]),
  },
  {
    id: 'content',
    img: contentImg,
    name: '基础内容',
    open: false,
    pages: toPages(['text', 'icon', 'progress', 'rich-text']),
  },
  {
    id: 'form',
    img: formImg,
    name: '表单组件',
    open: false,
    pages: toPages([
      'button',
      'checkbox',
      'form',
      'input',
      'label',
      'picker',
      'picker-view',
      'radio',
      'slider',
      'switch',
      'textarea',
      'editor',
    ]),
  },
  {
    id: 'nav',
    img: navImg,
    name: '导航',
    open: false,
    pages: toPages(['navigator']),
  },
  {
    id: 'media',
    img: mediaImg,
    name: '媒体组件',
    open: false,
    pages: toPages(['image', 'audio', 'video', 'camera']),
  },
  {
    id: 'map',
    img: mapImg,
    name: '地图',
    open: false,
    pages: toPages(['map']),
  },
  {
    id: 'canvas',
    img: canvasImg,
    name: '画布',
    open: false,
    pages: toPages(['canvas']),
  },
  {
    id: 'open',
    img: openImg,
    name: '开放能力',
    open: false,
    pages: toPages(['ad', 'open-data', 'web-view']),
  },
];

export default class extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header
          logo={componentImg}
          desc={
            <>
              以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见{' '}
              <Navigator
                url="routers/doc-web-view/doc-web-view"
                className={styles.agreeLink}
              >
                小程序开发文档
              </Navigator>
              。
            </>
          }
        />
        <KindList list={list} />
      </MainLayout>
    );
  }
}
