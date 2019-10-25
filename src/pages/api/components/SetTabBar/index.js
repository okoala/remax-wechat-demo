import * as React from "react";
import {
  View, Button,
  pageScrollTo, setTabBarBadge, removeTabBarBadge, showTabBarRedDot,
  hideTabBarRedDot, showTabBar, hideTabBar, setTabBarStyle, setTabBarItem,
} from "remax/wechat";
import Head from '@/components/Head';
import Foot from '@/components/Foot';
import "./index.less";

const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
}

const defaultItemName = '接口'

export default class extends React.Component {
  state = {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
  }

  attached() {
    pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  }

  detached() {
    this.removeTabBarBadge()
    this.hideTabBarRedDot()
    this.showTabBar()
    this.removeCustomStyle()
    this.removeCustomItem()
  }

  navigateBack() {
    this.triggerEvent('unmount')
  }

  setTabBarBadge() {
    if (this.state.hasSetTabBarBadge) {
      this.removeTabBarBadge()
      return
    }
    this.setState({
      hasSetTabBarBadge: true
    })
    setTabBarBadge({
      index: 1,
      text: '1',
    })
  }

  removeTabBarBadge() {
    this.setState({
      hasSetTabBarBadge: false
    })
    removeTabBarBadge({
      index: 1,
    })
  }

  showTabBarRedDot() {
    if (this.state.hasShownTabBarRedDot) {
      this.hideTabBarRedDot()
      return
    }
    this.setState({
      hasShownTabBarRedDot: true
    })
    showTabBarRedDot({
      index: 1
    })
  }

  hideTabBarRedDot() {
    this.setState({
      hasShownTabBarRedDot: false
    })
    hideTabBarRedDot({
      index: 1
    })
  }

  showTabBar() {
    this.setState({hasHiddenTabBar: false})
    showTabBar()
  }

  hideTabBar() {
    if (this.state.hasHiddenTabBar) {
      this.showTabBar()
      return
    }
    this.setState({hasHiddenTabBar: true})
    hideTabBar()
  }

  customStyle() {
    if (this.state.hasCustomedStyle) {
      this.removeCustomStyle()
      return
    }
    this.setState({hasCustomedStyle: true})
    setTabBarStyle({
      color: '#FFF',
      selectedColor: '#1AAD19',
      backgroundColor: '#000000',
    })
  }

  removeCustomStyle() {
    this.setState({hasCustomedStyle: false})
    setTabBarStyle(defaultTabBarStyle)
  }

  customItem() {
    if (this.state.hasCustomedItem) {
      this.removeCustomItem()
      return
    }
    this.setState({hasCustomedItem: true})
    setTabBarItem({
      index: 1,
      text: 'API'
    })
  }

  removeCustomItem() {
    this.setState({hasCustomedItem: false})
    setTabBarItem({
      index: 1,
      text: defaultItemName
    })
  }

  render() {
    const {
      hasSetTabBarBadge,
      hasShownTabBarRedDot,
      hasCustomedStyle,
      hasCustomedItem,
      hasHiddenTabBar
    } = this.state;

    return (
      <view className="container">
        <Head title="tabBar" />

        <View className="page-body">
          <View className="btn-area">
            <Button onClick={this.setTabBarBadge}>
              {!hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标'}
            </Button>
            <Button onClick={this.showTabBarRedDot}>
              {!hasShownTabBarRedDot ?  '显示红点' : '移除红点'}
            </Button>
            <Button onClick={this.customStyle}>
              {!hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}
            </Button>
            <Button onClick={this.customItem}>
              {!hasCustomedItem ? '自定义Tab信息' : '移除自定义信息'}
            </Button>
            <Button onClick={this.hideTabBar}>
              {!hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar'}
            </Button>
          </View>

          <View className="btn-area">
            <Button type="primary" onClick={this.navigateBack}>返回上一级</Button>
          </View>
        </View>

        <Foot />
      </view>
    );
  }
}
