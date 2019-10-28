import * as React from 'react';
import { View, Navigator } from 'remax/wechat';

import KindList from '@/components/KindList';
import Header from '@/components/Header';

import styles from './index.module.less';

import cloudImg from '../../image/kind/cloud.png';
import userImg from '../../image/kind/user.png';
import databaseImg from '../../image/kind/database.png';
import storageImg from '../../image/kind/storage.png';
import scfImg from '../../image/kind/scf.png';

const list = [
  {
    id: 'user',
    img: userImg,
    name: '用户鉴权',
    open: false,
    pages: [
      {
        zh: '获取 OpenID',
        url: 'pages/user-authentication/index'
      }
    ]
  }, {
    id: 'database',
    img: databaseImg,
    name: '数据库',
    open: false,
    pages: [
      {
        zh: '基本操作',
        url: 'pages/crud/index'
      }, {
        zh: '权限管理',
        url: 'pages/db-permission/index'
      }, {
        zh: '服务端时间',
        url: 'pages/server-date/index'
      }
    ]
  }, {
    id: 'storage',
    img: storageImg,
    name: '存储',
    open: false,
    pages: [
      {
        zh: '上传文件',
        url: 'pages/upload-file/index'
      }, {
        zh: '下载文件',
        url: 'pages/download-file/index'
      }, {
        zh: '删除文件',
        url: 'pages/delete-file/index'
      }, {
        zh: '换取临时链接',
        url: 'pages/get-temp-file-url/index'
      }, {
        zh: '组件支持',
        url: 'pages/cloud-file-component/index'
      }
    ]
  }, {
    id: 'scf',
    img: scfImg,
    name: '云函数',
    open: false,
    pages: [
      {
        zh: 'WXContext',
        url: 'pages/get-wx-context/index'
      }, {
        zh: '数据库',
        url: 'pages/scf-database/index'
      }, {
        zh: '存储',
        url: 'pages/scf-storage/index'
      }, {
        zh: '云调用',
        url: 'pages/scf-openapi/index'
      }
    ]
  }
];

export default class extends React.Component {
  render() {
    return (
      <View>
        <Header
          logo={cloudImg}
          desc={
            <>
              以下将演示小程序云开发能力，具体属性参数详见{' '}
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
        <View className={styles.bd}>
          <KindList list={list} />
        </View>
      </View>
    );
  }
}
