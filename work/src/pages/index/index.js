
import Taro, { Component } from '@tarojs/taro';
import { connect } from "@tarojs/redux";
import { View, Text,Map,CoverView,CoverImage } from '@tarojs/components';
import a from '../../images/location.png';
import my from '../../images/my.png'
import './index.scss'

 class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount () {

  }

  componentDidShow () {}

  componentDidHide () {}

  constructor(props){
    super(props);
    this.state = {
        markers: [{
          iconPath: '../../images/location.png',
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color: '#FF0000DD',
          width: 2,
          dottedLine: true
        }],
    }
  }

  render () {
    return (
      <View className='index'>
        <Map
          id="map"
          longitude="113.3245211"
          latitude="23.099994"
          scale="14"
          controls={this.state.controls}
          bindcontroltap="controltap"
          markers={this.state.markers}
          bindmarkertap="markertap"
          polyline={this.state.polyline}
          bindregionchange="regionchange"
          show-location
          style="width: 100%; height: 1000px;"
        ></Map>
        <CoverView>
          <CoverImage src={a} className='img'></CoverImage>
          <CoverImage src={my} className='imgt' onClick={this.handleMy.bind(this)}></CoverImage>
        </CoverView>
        <View className='btn' onClick={this.handleClick.bind(this)}>
          添加面试
        </View>
      </View>
    )
  }

  handleClick(){
    Taro.navigateTo({
      url: '/pages/AddInter/index',
    })
  }

  handleMy(){
    Taro.navigateTo({
      url: '/pages/My/index',
    })
  }
  
}

const mapState = state => {
  return {state}
}


export default connect(mapState)(Index);
