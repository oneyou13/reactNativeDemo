import React, {Component} from 'react';
import {Text, View,Button, StyleSheet,SectionList,ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import ScrollMessage from './ScrollMessage'
import VideoGame from './VideoGame'
export default class Home extends Component{
  static navigationOptions = {
    header:{
      title:'博亚娱乐',
    },
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('./img/main.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('./img/un_main.png')}/>
        );
    },
};

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.homeHead}>
          <TouchableOpacity style={styles.homeHeadLeft} activeOpacity={0.8} >
            <Image source={require('./img/icon-menu.png')} style={{width:18,height:18}}></Image>
          </TouchableOpacity>
          <View style={styles.homeHeadTitle}>
            <Text style={{color:'#fff',textAlign:'center',fontSize:18}}>博亚娱乐</Text>
          </View>
          <TouchableOpacity style={styles.homeHeadRight} activeOpacity={0.8} >             
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.mainView}>

          <View style={styles.banner}>
            <Image source={require('./img/banner/index_banner1.jpg')} style={styles.bannerImg}></Image>
          </View>

          <ScrollMessage />

          <View style={styles.gamelink}>
            <TouchableOpacity style={styles.gamelinkItem} activeOpacity={0.8} >
              <Image source={require('./img/img1.png')} style={styles.gamelinkImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gamelinkItem} activeOpacity={0.8} >
              <Image source={require('./img/img2.png')}  style={styles.gamelinkImg}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.super}>

          </View>

          <View style={styles.shortcut}>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8} >
              <ImageBackground  source={require('./img/icon-cunkuan.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>存款</Text>
                <Text style={styles.shortcutTitle}>deposit</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8} >
              <ImageBackground  source={require('./img/icon-qukuan.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>取款</Text>
                <Text style={styles.shortcutTitle}>Withdraw</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8} >
              <ImageBackground  source={require('./img/icon-youhui.png')} style={styles.shortcutImg}>
                <Text style={styles.shortcutTitle}>优惠活动</Text>
                <Text style={styles.shortcutTitle}>Discount</Text>
              </ImageBackground >
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.8} >
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
    height:44,
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
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    marginBottom:10,
    justifyContent:'space-between',
    height:136
  },
  gamelinkItem:{
    width:185,
    height:136
  },
  gamelinkImg:{
    width:185,
    height:136
  },
  tabBarIcon:{
    width:24,
    height:24
  },
  shortcut:{
    display:'flex',
    flexDirection:'row',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    justifyContent:'space-between'
  },
  shortcutImg:{
    width:81,
    height:50,
    paddingLeft:5,
    paddingTop:5
  },
  shortcutTitle:{
    color:'#fff',
    fontSize:12
  },
  super:{
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    backgroundColor:'#464059',
    height:200,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  }
})