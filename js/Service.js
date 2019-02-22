import React, {Component} from 'react';
import {Text, View,Button,StyleSheet,Image,ImageBackground} from 'react-native';
import Dialog from './component/Dialog'
import {GlobalStyle} from '../js/GlobalStyle'
import ButtonYellow from './component/ButtonYellow'

export default class Service extends Component{
  constructor(props){
    super(props);
    this.state = {
      content:{
        qq:'356235666',
        tel:'033-3223333',
        wechat:'1332223444',
      }
    }
  }
  static navigationOptions ={
    tabBarLabel: '客服',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('./img/kefu_active.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('./img/kefu.png')}/>
        );
    },
  }

  _onPress = ()=>{
      this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <ImageBackground source={require('./auth/img/bg.png')} style={styles.container}>
        <View style={styles.modalDialog}>                
            <View style={styles.modalBody}>
              <View style={styles.servicebox}>
                <Image style={styles.girl} source={require('./img/img_kef.png')}></Image>
                <View style={{paddingTop:25,paddingLeft:10}}>
                  <Text style={GlobalStyle.fz14}>请联系客服</Text>
                  <Text style={GlobalStyle.fz18}>重置你的密码：</Text>
                  <View style={[GlobalStyle.flexRow,styles.serviceitem,{marginTop:24}]}>  
                    <Image source={require('./img/icon_QQ.png')} style={{width:28,height:28}}></Image>
                    <View style={{marginLeft:5}}>
                      <Text style={GlobalStyle.white}>客服QQ:</Text><Text style={[GlobalStyle.white,GlobalStyle.fzBold]}>{this.state.content.qq}</Text>
                    </View>
                  </View>
                  <View style={[GlobalStyle.flexRow,styles.serviceitem]}>
                    <Image source={require('./img/dianhua.png')}></Image>
                    <View style={{marginLeft:5}}>
                      <Text  style={GlobalStyle.white}>客服电话:</Text><Text style={[GlobalStyle.white,GlobalStyle.fzBold]}>{this.state.content.tel}</Text>
                    </View>
                  </View>
                  <View style={[GlobalStyle.flexRow,{marginTop:30}]}>
                    <Image source={require('./img/weixin.png')}></Image>
                    <Text>微信客服</Text>
                  </View>
                  <View style={[GlobalStyle.flexRow,{marginTop:10}]}>
                    <Text style={{fontWeight:'bold'}}>{this.state.content.wechat}</Text>
                    <ImageBackground source={require('./img/copywechat.png')} style={{width:80,height:15}}><Text style={[GlobalStyle.fz10,{textAlign:'center'}]}>复制微信号</Text></ImageBackground>
                  </View>
                </View>
              </View>             
            </View>

            <View style={{width:325}}>
                <ButtonYellow title="关闭" onPress={()=>this._onPress()}/>
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b1d1b',
    position:'relative',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  tabBarIcon:{
    width:24,
    height:24
  },
  servicebox:{
    display:'flex',
    flexDirection:'row',
  },
  girl:{
    marginLeft:-20
  },
  serviceitem:{
    backgroundColor:'#464059',
    height:40,
    paddingLeft:5,
    paddingRight:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginTop:10
  },
  modalDialog:{
      backgroundColor:'#fff',
      marginLeft:42,
      marginRight:42,
      borderTopLeftRadius:5,
      borderTopRightRadius:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
      width:325,
      overflow:'hidden',      
  },
  modalBody:{
      //flex:1
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:20,
      paddingRight:20,
      height:280
  }
})