import * as React from 'react';
import {
  View,
  Button,
  Image,
  Input,
  Switch,
  Navigator,
  Textarea,
  showToast,
  Picker,
} from 'remax/wechat';
import Cell from '../../components/cell/cell';
import Cells from '../../components/cells/cells';
import Toptips from '../../components/toptips/toptips';
import Form from '../../components/form/form';
import FormPage from '../../components/form-page/form-page';
import Checkbox from '../../components/checkbox/checkbox';
import CheckboxGroup from '../../components/checkbox-group/checkbox-group';
import Icon from '../../components/icon/icon';

import vscodeImg from '../../images/vcode.jpg';

export default class extends React.Component {
  state = {
    showTopTips: false,

    radioItems: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' },
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],

    date: '2016-09-01',
    time: '12:01',

    countryCodes: ['+86', '+80', '+84', '+87'],
    countryCodeIndex: 0,

    countries: ['中国', '美国', '英国'],
    countryIndex: 0,

    accounts: ['微信号', 'QQ', 'Email'],
    accountIndex: 0,

    isAgree: false,
    formData: {},
    rules: [
      {
        name: 'radio',
        rules: { required: false, message: '单选列表是必选项' },
      },
      {
        name: 'checkbox',
        rules: { required: true, message: '多选列表是必选项' },
      },
      {
        name: 'name',
        rules: { required: true, message: '请输入姓名' },
      },
      {
        name: 'qq',
        rules: { required: true, message: 'qq必填' },
      },
      {
        name: 'mobile',
        rules: [
          { required: true, message: 'mobile必填' },
          { mobile: true, message: 'mobile格式不对' },
        ],
      },
      {
        name: 'vcode',
        rules: { required: true, message: '验证码必填' },
      },
      {
        name: 'idcard',
        rules: {
          validator: function(rule, value, param, modeels) {
            if (!value || value.length !== 18) {
              return 'idcard格式不正确';
            }
          },
        },
      },
    ],
  };

  radioChange = e => {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.state.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value === e.detail.value;
    }

    this.setState({
      radioItems: radioItems,
      [`formData.radio`]: e.detail.value,
    });
  };

  checkboxChange = e => {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.state.checkboxItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value === values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setState({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value,
    });
  };

  bindDateChange = e => {
    this.setState({
      date: e.detail.value,
      [`formData.date`]: e.detail.value,
    });
  };

  formInputChange = e => {
    const { field } = e.currentTarget.dataset;
    this.setState({
      [`formData.${field}`]: e.detail.value,
    });
  };

  bindTimeChange = e => {
    this.setState({
      time: e.detail.value,
    });
  };

  bindCountryCodeChange = e => {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setState({
      countryCodeIndex: e.detail.value,
    });
  };

  bindCountryChange = e => {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setState({
      countryIndex: e.detail.value,
    });
  };

  bindAccountChange = e => {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setState({
      accountIndex: e.detail.value,
    });
  };

  bindAgreeChange = e => {
    this.setState({
      isAgree: !!e.detail.value.length,
    });
  };

  submitForm = () => {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors);
      if (!valid) {
        const firstError = Object.keys(errors);
        if (firstError.length) {
          this.setState({
            error: errors[firstError[0]].message,
          });
        }
      } else {
        showToast({
          title: '校验通过',
        });
      }
    });
    // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
    //     console.log('valid', valid, errors)
    // })
  };

  render() {
    const {
      error,
      rules,
      formData,
      radioItems,
      checkboxItems,
      date,
      countryCodeIndex,
      countryCodes,
      accountIndex,
      accounts,
      countryIndex,
      countries,
      isAgree,
    } = this.state;

    return (
      <View>
        <Toptips msg={error} type="error" show={error} />

        <FormPage
          title="表单结构"
          subtitle="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。"
        >
          <Form id="form" rules={rules} models={formData}>
            <Cells title="单选列表项">
              <CheckboxGroup
                prop="radio"
                multi={false}
                bindchange={this.radioChange}
              >
                {radioItems.map(item => (
                  <Checkbox
                    key={item.value}
                    label={item.name}
                    value={item.value}
                    checked={item.checked}
                  />
                ))}
              </CheckboxGroup>
            </Cells>
            <Cells title="复选列表项">
              <CheckboxGroup
                prop="checkbox"
                multi={true}
                bindchange={this.checkboxChange}
              >
                {checkboxItems.map(item => (
                  <Checkbox
                    key={item.value}
                    label={item.name}
                    value={item.value}
                    checked={item.checked}
                  />
                ))}
              </CheckboxGroup>
            </Cells>

            <Cells title="表单" footer="底部说明文字底部说明文字">
              <Cell prop="name" title="姓名" extClass="" hasHeader>
                <Input
                  bindinput={this.formInputChange}
                  dataField="name"
                  className="weui-input"
                  placeholder="请输入姓名"
                />
              </Cell>
              <Cell prop="qq" title="qq" extClass="" hasHeader>
                <Input
                  bindinput={this.formInputChange}
                  dataField="qq"
                  className="weui-input"
                  placeholder="请输入qq"
                />
              </Cell>
              <Cell prop="mobile" title="手机号" extClass="weui-cell_vcode" hasHeader>
                <Input
                  bindinput={this.formInputChange}
                  dataField="mobile"
                  className="weui-input"
                  placeholder="请输入手机号"
                />
                <View slot="footer">
                  <Button type="default" className="weui-vcode-btn">
                    获取验证码
                  </Button>
                </View>
              </Cell>
              <Cell prop="date" title="日期" extClass="" hasHeader>
                <Picker
                  dataField="date"
                  mode="date"
                  value={date}
                  start="2015-09-01"
                  end="2017-09-01"
                  bindchange={this.bindDateChange}
                >
                  <View className="weui-input">{date}</View>
                </Picker>
              </Cell>
              <Cell prop="vcode" title="验证码" extClass=" weui-cell_vcode" hasHeader>
                <Input
                  bindinput={this.formInputChange}
                  dataField="vcode"
                  className="weui-input"
                  placeholder="请输入验证码"
                />
                <View slot="footer">
                  <Image
                    className="weui-vcode-img"
                    src={vscodeImg}
                    style={{ width: '216rpx' }}
                  />
                </View>
              </Cell>
            </Cells>
            <Cells title="提交后表单项报错">
              <Cell show-error prop="idcard" title="卡号" extClass="">
                <Input
                  bindinput={this.formInputChange}
                  dataField="idcard"
                  className="weui-input"
                  placeholder="请输入卡号"
                />
              </Cell>
            </Cells>
            <Cells title="开关">
              <Cell title="标题文字" extClass="">
                <Switch slot="footer" checked />
              </Cell>
            </Cells>
            <Cells title="文本框">
              <Cell title="标题文字" extClass="">
                <Input className="weui-input" placeholder="请输入文本" />
              </Cell>
            </Cells>
            <Cells title="文本域">
              <Cell hasHeader={false} hasFooter={false} title="" extClass="">
                <Textarea
                  className="weui-textarea"
                  placeholder="请输入文本"
                  style={{ height: '3.3em' }}
                />
                <View className="weui-textarea-counter">0/200</View>
              </Cell>
            </Cells>
            <Cells title="选择">
              <Cell extClass="weui-cell_select weui-cell_select-before">
                <View slot="title" style={{ width: '105px' }}>
                  <Picker
                    bindchange={this.bindCountryCodeChange}
                    value={countryCodeIndex}
                    range={countryCodes}
                  >
                    <View className="weui-select">
                      {countryCodes[countryCodeIndex]}
                    </View>
                  </Picker>
                </View>
                <Input className="weui-input" placeholder="请输入号码" />
              </Cell>
            </Cells>
            <Cells title="选择">
              <Cell hasHeader={false} extClass="weui-cell_select">
                <Picker
                  bindchange={this.bindAccountChange}
                  value={accountIndex}
                  range={accounts}
                >
                  <View className="weui-select">{accounts[accountIndex]}</View>
                </Picker>
              </Cell>
              <Cell extClass="weui-cell_select weui-cell_select-after">
                <View slot="title" className="weui-label">
                  国家/地区
                </View>
                <Picker
                  bindchange={this.bindCountryChange}
                  value={countryIndex}
                  range={countries}
                >
                  <View className="weui-select">{countries[countryIndex]}</View>
                </Picker>
              </Cell>
            </Cells>
          </Form>

          <CheckboxGroup slot="tips" bindchange={this.bindAgreeChange}>
            <label className="weui-agree" for="weuiAgree">
              <View className="weui-agree__text">
                <checkbox
                  className="weui-agree__checkbox"
                  id="weuiAgree"
                  value="agree"
                  checked={isAgree}
                />
                <View class="weui-agree__checkbox-icon">
                  {isAgree && (
                    <Icon
                      className="weui-agree__checkbox-icon-check"
                      type="success_no_circle"
                      size="9"
                    />
                  )}
                </View>
                阅读并同意
                <Navigator url="" className="weui-agree__link">
                  《相关条款》
                </Navigator>
              </View>
            </label>
          </CheckboxGroup>

          <View slot="button">
            <Button
              className="weui-btn"
              type="primary"
              onClick={this.submitForm}
            >
              确定
            </Button>
          </View>
        </FormPage>
      </View>
    );
  }
}
