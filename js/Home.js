import React, {Component} from 'react';
import {Text, View,Button, StyleSheet,SectionList,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper'
import ScrollMessage from './component/ScrollMessage'
import SiderMenu from './component/SiderMenu'
export default class Home extends Component{
 
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

          <Swiper style={styles.banner} showsPagination={true} autoplay={true} autoplayTimeout={5} paginationStyle={styles.swiperpage}>
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
  super:{
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    backgroundColor:'#464059',
    height:200,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  } 
})