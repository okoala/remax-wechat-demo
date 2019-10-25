import * as React from "react";
import { View } from "remax/wechat";

export default (props) => {
  const { title, desc } = props;
  return (
    <View className="page-head">
      <View className="page-head-title">{title}</View>
      <View className="page-head-line"></View>
      {desc && <View className="page-head-desc">{desc}</View>}
    </View>
  );
}
