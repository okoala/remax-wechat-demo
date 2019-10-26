import * as React from 'react';
import { View } from 'remax/wechat';
import Draggable from '../../components/draggable/draggable';
import DragHandler from '../../components/draggable/handler';
import styles from './index.module.less';

const list = [1, 2, 3];

export default class extends React.Component {
  render() {
    return (
      <View>
        {list.map((item, index) => (
          <Draggable
            className={styles['drag-item']}
            id={'draggable' + index}
          >
            <DragHandler dragId={'draggable' + index}>
              <View>hello test {index}</View>
            </DragHandler>
          </Draggable>
        ))}
      </View>
    );
  }
}
