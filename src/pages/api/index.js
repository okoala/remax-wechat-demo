import * as React from 'react';
import { View, Image, Navigator, navigateTo } from 'remax/wechat';

import KindList from '@/components/KindList';
import Header from '@/components/Header';
import SetTabBar from './components/SetTabBar';

import styles from './index.module.less';

import apiImg from '../../image/kind/api.png';
import deviceImg from '../../image/kind/device.png';
import locationImg from '../../image/kind/location.png';
import logoImg from '../../image/kind/logo.png';
import mediaImg from '../../image/kind/media.png';
import networkImg from '../../image/kind/network.png';
import pageImg from '../../image/kind/page.png';
import storageImg from '../../image/kind/storage.png';
import workerImg from '../../image/kind/worker.png';

const list = [
  {
    id: 'api',
    img: apiImg,
    name: '开放接口',
    open: false,
    pages: [
      {
        zh: '微信登录',
        url: 'pages/login/index',
      },
      {
        zh: '获取用户信息',
        url: 'pages/get-user-info/index',
      },
      {
        zh: '发起支付',
        url: 'pages/request-payment/index',
      },
      {
        zh: '转发',
        url: 'pages/share/index',
      },
      {
        zh: '转发按钮',
        url: 'pages/share-button/index',
      },
      {
        zh: '客服消息',
        url: 'pages/custom-message/index',
      },
      {
        zh: '模板消息',
        url: 'pages/template-message/index',
      },
      {
        zh: '收货地址',
        url: 'pages/choose-address/index',
      },
      {
        zh: '获取发票抬头',
        url: 'pages/choose-invoice-title/index',
      },
      {
        zh: '生物认证',
        url: 'pages/soter-authentication/index',
      },
      {
        zh: '设置',
        url: 'pages/setting/index',
      },
    ],
  },
  {
    id: 'page',
    img: pageImg,
    name: '界面',
    open: false,
    pages: [
      {
        zh: '设置界面标题',
        url: 'pages/set-navigation-bar-title/index',
      },
      {
        zh: '标题栏加载动画',
        url: 'pages/navigation-bar-loading/index',
      },
      {
        zh: '设置TabBar',
        url: '@set-tab-bar',
      },
      {
        zh: '页面跳转',
        url: 'pages/navigator/index',
      },
      {
        zh: '下拉刷新',
        url: 'pages/pull-down-refresh/index',
      },
      {
        zh: '创建动画',
        url: 'pages/animation/index',
      },
      {
        zh: '创建绘画',
        url: 'pages/canvas/index',
      },
      {
        zh: '显示操作菜单',
        url: 'pages/action-sheet/index',
      },
      {
        zh: '显示模态弹窗',
        url: 'pages/modal/index',
      },
      {
        zh: '页面滚动',
        url: 'pages/page-scroll/index',
      },
      {
        zh: '显示消息提示框',
        url: 'pages/toast/index',
      },
      {
        zh: '获取WXML节点信息',
        url: 'pages/get-wxml-node-info/index',
      },
      {
        zh: 'WXML节点布局相交状态',
        url: 'pages/intersection-observer/index',
      },
    ],
  },
  {
    id: 'device',
    img: deviceImg,
    name: '设备',
    open: false,
    pages: [
      {
        zh: '获取手机网络状态',
        url: 'pages/get-network-type/index',
      },
      {
        zh: '监听手机网络变化',
        url: 'pages/on-network-status-change/index',
      },
      {
        zh: '获取手机系统信息',
        url: 'pages/get-system-info/index',
      },
      {
        zh: '监听重力感应数据',
        url: 'pages/on-accelerometer-change/index',
      },
      {
        zh: '监听罗盘数据',
        url: 'pages/on-compass-change/index',
      },
      {
        zh: '打电话',
        url: 'pages/make-phone-call/index',
      },
      {
        zh: '扫码',
        url: 'pages/scan-code/index',
      },
      {
        zh: '剪切板',
        url: 'pages/clipboard-data/index',
      },
      {
        zh: '蓝牙',
        url: 'pages/bluetooth/index',
      },
      {
        zh: 'iBeacon',
        url: 'pages/ibeacon/index',
      },
      {
        zh: '屏幕亮度',
        url: 'pages/screen-brightness/index',
      },
      {
        zh: '用户截屏事件',
        url: 'pages/capture-screen/index',
      },
      {
        zh: '振动',
        url: 'pages/vibrate/index',
      },
      {
        zh: '手机联系人',
        url: 'pages/add-contact/index',
      },
      {
        zh: 'Wi-Fi',
        url: 'pages/wifi/index',
      },
    ],
  },
  {
    id: 'network',
    img: networkImg,
    name: '网络',
    open: false,
    pages: [
      {
        zh: '发起一个请求',
        url: 'pages/request/index',
      },
      {
        zh: 'WebSocket',
        url: 'pages/web-socket/index',
      },
      {
        zh: '上传文件',
        url: 'pages/upload-file/index',
      },
      {
        zh: '下载文件',
        url: 'pages/download-file/index',
      },
    ],
  },
  {
    id: 'media',
    img: mediaImg,
    name: '媒体',
    open: false,
    pages: [
      {
        zh: '图片',
        url: 'pages/image/index',
      },
      {
        zh: '录音',
        url: 'pages/voice/index',
      },
      {
        zh: '背景音频',
        url: 'pages/background-audio/index',
      },
      {
        zh: '文件',
        url: 'pages/file/index',
      },
      {
        zh: '视频',
        url: 'pages/video/index',
      },
      {
        zh: '动态加载字体',
        url: 'pages/load-font-face/index',
      },
    ],
  },
  {
    id: 'location',
    img: locationImg,
    name: '位置',
    open: false,
    pages: [
      {
        zh: '获取当前位置',
        url: 'pages/get-location/index',
      },
      {
        zh: '使用原生地图查看位置',
        url: 'pages/open-location/index',
      },
      {
        zh: '使用原生地图选择位置',
        url: 'pages/choose-location/index',
      },
    ],
  },
  {
    id: 'storage',
    img: storageImg,
    name: '数据',
    url: 'pages/storage/index',
  },
  {
    id: 'worker',
    img: workerImg,
    name: '多线程',
    url: 'pages/worker/index',
  },
];

export default class extends React.Component {
  state = {
    isSetTabBarPage: false,
  };

  onShow() {
    this.leaveSetTabBarPage();
  }

  onHide() {
    this.leaveSetTabBarPage();
  }

  enterSetTabBarPage = () => {
    this.setState({
      isSetTabBarPage: true,
    });
  };

  leaveSetTabBarPage = () => {
    this.setState({
      isSetTabBarPage: false,
    });
  };

  render() {
    const { isSetTabBarPage } = this.state;

    if (isSetTabBarPage) {
      return <SetTabBar bindunmount={this.leaveSetTabBarPage} />;
    }

    return (
      <View>
        <Header
          logo={logoImg}
          desc={
            <>
              以下将演示小程序接口能力，具体属性参数详见{' '}
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
          <KindList list={list} onEnter={this.enterSetTabBarPage} />
        </View>
      </View>
    );
  }
}
