import * as React from 'react';
import { View, Image, Navigator, navigateTo } from 'remax/wechat';
import styles from './index.module.less';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: props.list,
    };
  }

  kindToggle = e => {
    const id = e.currentTarget.id;
    const list = this.state.list;

    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          navigateTo({
            url: 'pages/' + list[i].url,
          });
          return;
        }
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }

    this.setState({
      list,
    });
  };

  render() {
    const { list } = this.state;

    return (
      <View className="kind-list">
        {list.map(item => (
          <View className={styles['kind-list-item']} key={item.id}>
            <View
              id={item.id}
              className={`${styles['kind-list-item-hd']} ${
                item.open ? styles['kind-list-item-hd-show'] : ''
              }`}
              onClick={this.kindToggle}
            >
              <View className={styles['kind-list-text']}>{item.name}</View>
              <Image className={styles['kind-list-img']} src={item.img}></Image>
            </View>
            <View
              className={`${styles['kind-list-item-bd']} ${
                item.open ? styles['kind-list-item-bd-show'] : ''
              }`}
            >
              <View
                className={`${styles['navigator-box']} ${
                  item.open ? styles['navigator-box-show'] : ''
                }`}
              >
                {item.pages &&
                  item.pages.map(page => (
                    <View key={page.url}>
                      <Navigator
                        url={page.url}
                        openType="navigate"
                        className={styles.navigator}
                      >
                        <View className={styles['navigator-text']}>
                          {page.zh}
                        </View>
                        <View className={styles['navigator-arrow']}></View>
                      </Navigator>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
