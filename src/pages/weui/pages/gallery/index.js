import * as React from 'react';
import MainLayout from '@/layout/MainLayout';
import Header from '@/components/Header';
import Gallery from '../../components/gallery/gallery';

export default class extends React.Component {
  state = {
    imgUrls: [
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
    ],
    show: true,
  };

  change = (e) => {
    console.log('current index has changed', e.detail);
  }

  delete = (e) => {
    console.log('delete', e.detail);
  }

  hide = () => {
    console.log('component hide');
    setTimeout(() => {
      console.log('component show');
      this.setState({
        show: true,
      });
    }, 1000);
  }

  render() {
    const { show, imgUrls } = this.state;
    return (
      <MainLayout>
        <Header
          title="Gallery"
          desc="画廊，类似原生的wx.previewImage的展示。"
        />
        <Gallery
          show={show}
          bindchange={this.change}
          binddelete={this.delete}
          bindhide={this.hide}
          imgUrls={imgUrls}
          delete
          hideOnClick={true}
          current="1"
        ></Gallery>
      </MainLayout>
    );
  }
}
