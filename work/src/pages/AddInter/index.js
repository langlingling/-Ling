
import Taro, { Component } from '@tarojs/taro';
import { connect } from "@tarojs/redux";
import { View, Text, Input,Textarea,Button,Picker } from '@tarojs/components';
import './index.scss'

 class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }

  componentDidMount () {
    
  }

  componentDidShow () {
  }

  componentDidHide () {}

  constructor(props){
    super(props);
    this.state = {
      date: '',
      name : '',
      num : '',
      color : false,
      adress : '',
      area : ''
    }
  }

  render () {
    return (
      <View className='index'>
          <View className='title'>面试信息</View>
          <View className='ul'>
              <View className='li'>
                  <Text className='text'>公司名称</Text>
                  <Input type='text' placeholder='请输入公司名称' value={this.state.name} onChange={this.handleName.bind(this)} />
              </View>
              <View className='li'>
                  <Text className='text'>公司电话</Text>
                  <Input type='number' placeholder='请输入公司电话' value={this.state.num} onChange={this.handleNum.bind(this)} />
              </View>
              <View className='li'>
                <View class="section">
                    <Picker
                    mode="date"
                    value={this.state.date}
                    onChange={this.bindDateChange.bind(this)}
                  >
                    <View class="picker">
                      面试时间    {this.state.date}
                    </View>
                  </Picker>
                </View>
              </View>
              <View className='li'>
                  <Text className='text'>面试地址</Text>
                  <Input type='text' placeholder='请输入面试地址' 
                    value={this.state.address}
                    onChange={this.handleAddress.bind(this)}
                  />
              </View>
              <View className='title'>备注信息</View>
          </View>
          <View className='textarea'>
              <Textarea placeholder="备注信息(可选,100个字以内)" className='area'  value={this.state.area}
                    onChange={this.handleArea.bind(this)} />
          </View>
          {
            console.log(this.state.color)
          }
          <Button className={this.state.color ? 'action' : 'btn'} onClick={this.handleGetAdd.bind(this)}>确认</Button>
      </View>
    )
  }

  bindDateChange(e) {
    if(e.detail.value !== ''){
      this.setState({
        date : e.detail.value,
        color : true
      })
    }
  }

  handleAddress(e){
    if(e.detail.value !== ''){
      this.setState({
        address : e.detail.value,
        color : true
      })
    }
  }

  handleArea(e){
    if(e.detail.value !== ''){
      this.setState({
        area : e.detail.value,
        color : true
      })
    }
  }

  handleName(e){
    if(e.detail.value !== ''){
      this.setState({
        name : e.detail.value,
        color : true
      })
    }
  }

  handleNum(e){
    if(e.detail.value !== '' && e.detail.value.length === 11){
      this.setState({
        num : e.detail.value,
        color : true
      })
    }
  }

  handleGetAdd(){
      let {num,name,address,date,area} = this.state;
      this.props.handleSet(num,name,address,date,area)
      wx.showModal({
        title: '提示',
        content: '确定要提交吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
  }

 }

const mapState = state => {
  return {state}
}

const mapDispatch = dispatch => ({
  handleSet(num,name,address,date,area){
      dispatch({
        type : 'ADD',
        num,
        name,
        address,
        date,
        area
      })
  }
})


export default connect(mapState,mapDispatch)(Index);
