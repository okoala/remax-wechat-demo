import * as React from "react";
import { Navigator, Image } from "remax/wechat";

export default (props) => {
  return (
    <Navigator className="page-foot" openType="switchTab" url="/pages/component/index" hover-class="none">
      <Image className="icon-foot" src="../image/icon_foot.png"></Image>
    </Navigator>
  );
}
