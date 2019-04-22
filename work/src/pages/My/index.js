
import Taro, { Component } from '@tarojs/taro';
import { connect } from "@tarojs/redux";
import { View, Text, Image} from '@tarojs/components';
import './index.scss'
import my from '../../images/my.png';
import arrow from '../../images/arrow.svg'

 class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentDidMount () {

  }

  componentDidShow () {}

  componentDidHide () {}

  constructor(props){
    super(props);
    this.state = {
       
    }
  }

  render () {
    return (
      <View className='index'>
           <View className='imgbox'>
               <Image src={my} className='img' />
           </View>
           <View className='ul'>
             <View className='li'>
                <Text>我的面试</Text>
                <Image src={arrow} className='imgl' />
             </View>
             <View className='li'>
                <Text>客服中心</Text>
                <Image src={arrow} className='imgl' />
             </View>
           </View>
      </View>
    )
  }

}

const mapState = state => {
  return {state}
}


export default connect(mapState)(Index);
