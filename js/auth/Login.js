import React, {Component} from 'react';
import {Text, View,StyleSheet,ImageBackground,Image, AsyncStorage,TextInput,TouchableOpacity } from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password:'',
        code:'',
        error:''
     }
  }

  _signInAsync = async () => {

    if(!this.state.username){
      alert("请输入6位用户名");
      return
    }

    if(!this.state.password){
      alert("请输入账号密码");
      return
    }

    if(!this.state.code){
      alert("请输入验证码");
      return
    }

    if(Date.parse(v.expired_at.replace(/-/g,"/")) < (new Date()).getTime()){
        alert("验证码过期");
        return
    }


    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  _goSignUp = () => {
    this.props.navigation.navigate('Register')
  };
  
  getCode=()=>{ //获取验证码
    apiajax({
        url:"/api/captchas/login",
        method:"post",
        data:{
            values:{
                name:v.ajaxData.username
            }
        }
    },function(ret,err){
        if(err&&err.status_code>400){
            
        }else{
            _this.codeStr = ret.captcha_image_content;
            _this.captcha_key = ret.captcha_key;
            _this.expired_at = ret.expired_at;
        }
    });
  }

  render() {
    return (
      <ImageBackground source={require('./img/bg.png')} style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.loginHead}>
                <View style={{marginRight:5}}>
                    <Text style={styles.fontNormal}>老用户登录</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={this._goSignUp}>
                  <View style={styles.loginRegister}>
                      <Image source={require('./img/icon_plus.png')} style={{height:18,width:18,marginRight:5}}></Image>
                      <Text style={styles.fontBold}>注册新用户</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={styles.formGroup}>
                <Image source={require('./img/icon_user.png')} style={{width:16,height:15}}></Image>
                <TextInput
                    style={styles.formControl}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    maxLength={40}
                    placeholder="用户名"
                />
                <Image source={require('./img/icon_dele.png')}  style={{width:12,height:13}}></Image>
            </View>
            <View style={styles.formGroup}>
                <Image source={require('./img/icon_password.png')}  style={{width:16,height:20}}></Image>
                <TextInput
                    style={styles.formControl}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    maxLength={40}
                    placeholder="密码"
                />
                <Image source={require('./img/icon_eye_sele.png')}  style={{width:17,height:9}}></Image>
            </View>
            <View style={styles.codebox}>
                  <TextInput
                      style={styles.formControl}
                      onChangeText={(code) => this.setState({code})}
                      value={this.state.code}
                      maxLength={5}
                      placeholder="验证码"
                  />
                <View style={styles.code}>
                  <Image source={require('./img/icon_eye_sele.png')}  style={{width:85,height:40}}></Image>
                </View>
            </View>

            <TouchableOpacity onPress={this._signInAsync}  style={styles.Button} activeOpacity={0.8}>
              <View>
                <Text style={styles.ButtonText}>立即登录</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.forget}>
              <Image source={require('./img/find.png')}  style={{width:12,height:12}}></Image><Text style={{color:'#fff',fontSize:12}}> 忘记密码</Text>
            </View>
        </View>
        
      </ImageBackground>
    );
  } 

}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1b1d1b',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    display:'flex'
  },
  loginContainer:{
    backgroundColor:'rgba(204, 172, 103, .5)',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    height:345,
    marginLeft:15,
    marginRight:15,
    width:375,
    paddingTop:27,
    paddingRight:27,
    paddingBottom:19,
    paddingLeft:27,
    alignItems:'flex-start',
    flexDirection:'column',
    display:'flex'
  },
  loginHead:{    
    flex:1,
    display:'flex',
    flexDirection:'row',
    height:17,
    alignItems:'center',
    marginBottom:10
  },
  fontNormal:{
    color:'#fff',
    fontSize:14,
  },
  fontBold:{
    fontSize:18,
    color:'#0B102A'
  },    
  loginRegister:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    height:18
  },
  formGroup:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#fff',
    height:40,
    marginBottom:15,
    alignItems:'center',
    paddingLeft:5,
    paddingRight:5
  },    
  formIcon:{
      width:16,
      height:16
  },
  formControl:{
    height:38,
    flex:1,
    fontSize:14,
    color:'#999999',
    backgroundColor:'#fff'
  },
  list:{
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10,
  },
  title:{
    fontSize:18,
    color:'#ffffff'
  },
  Button:{
      height:44,
      backgroundColor:'#0B102A',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
  },
  ButtonText:{
      fontSize:18,
      color:'#fff',
      fontWeight:'bold'
  },
  forget:{
    display:'flex',
    flex:1,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  error:{
    height:16,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    marginBottom:10
  },
  codebox:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    height:40,
    marginBottom:30,
    alignItems:'center',
  },   
  code:{
    width:85,
    height:40,
    marginLeft:5
  }
})