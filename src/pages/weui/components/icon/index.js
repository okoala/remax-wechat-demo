import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'remax/wechat';
import Base64 from './base64'
import iconData from './icondata'
import './index.less';


const double = function(a) {
  return 2*a
};
const ifSpecialIcon = function(v) {
return v === 'arrow' || v === 'back'
}

class Icon extends React.Component {
  state = {
    src: '',
    height: 20,
    width: 20,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this._genSrc(iconData[v][nextProps.type])
    }

    if (nextProps.icon !== this.props.icon) {
      this._genSrc(iconData[this.data.icon][v])
    }
  }

  _genSrc(rawData) {
    if(!rawData) return // type 不存在
    const base64 = Base64.encode(rawData)
    this.setState({
      src: 'data:image/svg+xml;base64,' + base64
    })
  }

  render() {
    const { extClass, icon, size, color } = this.props;
    const { src } = this.state;
    const style = {
      background: `${color}`,
      width: `${size}px`,
      height: `${ifSpecialIcon(icon) ? double(size) : size}px`,
      maskImage: `url(${src})`
    }
    return <View className={`${extClass} weui-icon`} style={style} />
  }
}

Icon.defaultProps = {
  extClass: '',
  type: 'outline',
  icon: '',
  size: 20,
  color: '#000000'
}

Icon.propTypes = {
  extClass: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Icon;
