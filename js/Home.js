import React, {Component} from 'react';
import {Text, View,Button, StyleSheet,SectionList,ScrollView,Image,TouchableOpacity,ImageBackground,Animated,Easing,Alert} from 'react-native';
import Swiper from 'react-native-swiper'
import ScrollMessage from './component/ScrollMessage'
import SiderMenu from './component/SiderMenu'
import {fetchData} from './config'
import SuperLottey from './component/SuperLottey'

//中奖名单
class SuperItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.superItem}>
        <Text style={styles.superItemText}>{'恭喜' + this.props.username + '在' + this.props.name +'中赢的'}</Text><Text style={{color:'#a38b5d'}}>{this.props.money +'元'}</Text>
      </View>
    )
  }
}

//页面
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state ={
      superList:[
        {username: "nj****6m", money: "21121.70", name: "卷行使价"},
        {username: "mz****ua", money: "87738.15", name: "金大款"},
        {username: "c5****72", money: "104676.58", name: "毛茸茸的仙女"},
        {username: "i4****vy", money: "109373.97", name: "棒棒乌龟"},
        {username: "xh****ka", money: "34655.60", name: "绝赢巫师"},
        {username: "ej****dm", money: "12785.84", name: "疯狂的猴子"},
        {username: "hw****dg", money: "96106.63", name: "森林泰后"},
        {username: "oo****3f", money: "23957.25", name: "吉祥招财猫"},
        {username: "qa****s0", money: "65470.75", name: "棒棒乌龟"},
        {username: "wa****cm", money: "67077.63", name: "金大款"},
        {username: "dx****9x", money: "125743.67", name: "五行"},
        {username: "of****ew", money: "21490.13", name: "美人鱼宝藏"},
        {username: "c2****za", money: "56176.4", name: "蒸汽朋克英雄"},
        {username: "a9****tf", money: "115566.0", name: "棋圣"},
        {username: "ud****58", money: "66644.82", name: "午夜幸运天"},
        {username: "dw****7s", money: "71935.98", name: "地穴的远征"},
        {username: "fz****40", money: "51089.29", name: "后羿传奇"},
        {username: "lk****cz", money: "11681.37", name: "樱花妹子"},
        {username: "xf****h2", money: "97418.24", name: "财富转轮特别版"},
        {username: "h4****4c", money: "5253.31", name: "金玉满堂"},
        {username: "ux****k2", money: "56548.21", name: "疯狂的猴子"},
        {username: "bj****2j", money: "28682.20", name: "猴子赏福"},
        {username: "sr****2c", money: "121776.89", name: "金大款"},
        {username: "zt****kv", money: "24447.74", name: "独行酒吧"},
        {username: "yo****2s", money: "35333.87", name: "后羿传奇"},
        {username: "yy****0h", money: "133935.69", name: "午夜幸运天"},
        {username: "l7****5x", money: "69585.97", name: "现金蚬"},
        {username: "sr****qz", money: "61407.89", name: "美人鱼宝藏"},
        {username: "cf****x0", money: "98838.57", name: "独行酒吧"},
        {username: "am****36", money: "94510.24", name: "1945"}
      ],
      fadeInOpacity: new Animated.Value(0),
      superLottey:[1,2,3,4,5,6,7,8,9,0]
    }
    this.timer = null
    this.lotteyTimer = null
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height:0
    }
  }

  onRef = (ref) => {
    this.SiderMenu = ref;
  }

  showSide = (e) => {
    this.SiderMenu._show()
  }

  startScroll=()=>{
    let _this = this;
    let timer = setInterval(() => {
      _this.setState({
        fadeInOpacity: new Animated.Value(0)
      })
    }, 30000);
  }

  componentDidMount() {
    this.startAnimate()
  }

  componentWillUnmount(){
    this.timer = null    
  }
  
  startAnimate = ()=>{
    const superlist = Animated.timing(this.state.fadeInOpacity, {
        toValue: -648, // 目标值
        duration: 30000, // 动画时间
        easing: Easing.linear, // 缓动函数
        useNativeDriver: true
    })
    Animated.loop(superlist).start()  
  }

  render(){
    return(
      <View style={styles.container}>

        <SiderMenu navigate={this.props.navigation.navigate} onRef={this.onRef} />
        
        <View style={styles.homeHead}>
          <TouchableOpacity style={styles.homeHeadLeft} activeOpacity={0.8} onPress={this.showSide}>
            <Image source={require('./img/icon-menu.png')} style={{width:18,height:18}}></Image>
          </TouchableOpacity>
          <View style={styles.homeHeadTitle}>
            <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>博亚娱乐</Text>
          </View>
          <TouchableOpacity style={styles.homeHeadRight} activeOpacity={0.8} >             
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.mainView}>

          <Swiper style={styles.banner} horizontal={false} showsPagination={true} autoplay={true} autoplayTimeout={5} paginationStyle={styles.swiperpage}>
            <View>
              <Image source={require('./img/banner/index_banner1.jpg')} style={styles.bannerImg}></Image>
            </View>
            <View>
              <Image source={require('./img/banner/index_banner1.jpg')} style={styles.bannerImg}></Image>
            </View>
            <View>
              <Image source={require('./img/banner/index_banner1.jpg')} style={styles.bannerImg}></Image>
            </View>
          </Swiper>        

          <ScrollMessage />

          <View style={styles.gamelink}>
            <TouchableOpacity style={styles.gamelinkItem} activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('VideoGame')}>
              <Image source={require('./img/img1.png')} style={styles.gamelinkImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gamelinkItem} activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('EGame')}>
              <Image source={require('./img/img2.png')}  style={styles.gamelinkImg}></Image> 
            </TouchableOpacity>
          </View>

          <View style={styles.super}>
            <ImageBackground source={require('./img/laohuji.png')} style={{height:160,width:390}}>
              <View style={styles.superRoll}>
                <SuperLottey numbers={this.state.superLottey} />
              </View>
              <View style={styles.superBox}>
                <Animated.View style={{transform: [{translateY:this.state.fadeInOpacity}]}}>
                  {this.state.superList.map((item)=><SuperItem name={item.name} money={item.money} username={item.username} />)}
                </Animated.View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.shortcut}>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('Finance')} >
              <ImageBackground  source={require('./img/icon-cunkuan.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>存款</Text>
                <Text style={styles.shortcutTitle}>deposit</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8}  onPress={()=>this.props.navigation.navigate('Drawing')} >
              <ImageBackground  source={require('./img/icon-qukuan.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>取款</Text>
                <Text style={styles.shortcutTitle}>Withdraw</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8}  onPress={()=>this.props.navigation.navigate('Activity')} >
              <ImageBackground  source={require('./img/icon-youhui.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>优惠活动</Text>
                <Text style={styles.shortcutTitle}>Discount</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8}  onPress={()=>this.props.navigation.navigate('Service')} >
              <ImageBackground  source={require('./img/icon-kefu.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>在线客服</Text>
                <Text style={styles.shortcutTitle}>Customer</Text>
              </ImageBackground >
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#0B102A'
  },
  titleContainer:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10    
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#ffffff',
    paddingTop:15,
    paddingBottom:15,
    textAlign:'center'
  },
  homeHead:{
    display:'flex',
    height:52,
    backgroundColor:'#0B102A',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  homeHeadLeft:{
    width:44,
    height:44,
    alignItems:'center',
    justifyContent:'center',
  },
  homeHeadRight:{
    width:44,
    height:44,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  homeHeadTitle:{
    flex:1,
    color:'#fff',
    textAlign:'center'
  },
  mainView:{
    flex:1,
    backgroundColor:'#0B102A'
  },  
  swiperpage:{
    width:12,height:12,backgroundColor:'#ffffff'
  },
  banner:{
    height:125,
    backgroundColor:'#0B102A',
    elevation: 5,
    shadowColor:'#0B102A',
    shadowOffset:{
      width:5,height:5
    },
    shadowRadius:5,
    shadowOpacity:1
  },
  bannerImg:{
    height:125,
    width:'100%'
  },  
  gamelink:{
    display:'flex',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    marginBottom:10,
    justifyContent:'space-between',
    height:136
  },
  gamelinkItem:{
    width:180,
    height:136
  },
  gamelinkImg:{
    width:180,
    height:136
  },
  tabBarIcon:{
    width:24,
    height:24
  },
  shortcut:{
    display:'flex',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:10,
    justifyContent:'space-between'
  },
  shortcutImg:{
    width:85,
    height:54,
    paddingLeft:5,
    paddingTop:5
  },
  shortcutTitle:{
    color:'#fff',
    fontSize:12
  },
  superRoll:{
    height:36
  },
  super:{
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
  superBox:{
    height:72,
    overflow:'hidden',
    marginTop:10
  },
  superItem:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:24
  },
  superItemText:{
    color:'#ffffff'
  },   
})