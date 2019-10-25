import * as React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'remax/wechat';
import styles from './index.module.less';

const Header = ({ title, desc, logo, align }) => {
  return (
    <View className={`${styles.header} ${styles[align]}`}>
      {logo && <Image className={styles.logo} src={logo} />}
      {title && <View className={styles.title}>{title}</View>}
      {desc && <View className={styles.desc}>{desc}</View>}
    </View>
  )
}

Header.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
}

export default Header;
