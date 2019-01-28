import React, {Component} from 'react';
import {Text, View,StyleSheet,ImageBackground,Image, AsyncStorage,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import Checkbox from '../component/CheckBox';

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
        name:'',
        password:'',
        repassword:'',
        code:'',
        checked:true,
        error:''
     }
  }

  static navigationOptions ={
    title:'注册账号',
    headerStyle: {
        backgroundColor: '#0B102A',        
    },
    headerBackImage:'',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color:'#fff'
    },
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  _goSignUp = () => {
    this.props.navigation.navigate('register')
  }
  
  render() {
    return (
        <ScrollView style={styles.scrollContainer}> 
                <Image source={require('./img/zhuce_bg.png')} style={styles.banner}></Image>
                <View style={styles.loginContainer}>
                    <View style={styles.loginHead}>
                        <View style={{marginRight:5}}>
                            <Text style={styles.fontNormal}>新用户注册</Text>
                        </View>
                    </View>
                    <View style={styles.formGroup}>
                        <Image source={require('./img/icon_user.png')} style={{width:16,height:15}}></Image>
                        <TextInput
                            style={styles.formControl}
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                            maxLength={40}
                            placeholder="请输入用户名"
                        />
                        <Image source={require('./img/icon_dele.png')}  style={{width:12,height:13}}></Image>
                    </View>
                    <View style={styles.formGroup}>
                        <Image source={require('./img/icon_password.png')}  style={{width:16,height:20}}></Image>
                        <TextInput
                            style={styles.formControl}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            textContentType='password'
                            maxLength={40}
                            placeholder="请输入密码"
                        />
                        <Image source={require('./img/icon_eye_sele.png')}  style={{width:17,height:9}}></Image>
                    </View>
                    <View style={styles.formGroup}>
                        <Image source={require('./img/icon_password.png')}  style={{width:16,height:20}}></Image>
                        <TextInput
                            style={styles.formControl}
                            onChangeText={(repassword) => this.setState({repassword})}
                            value={this.state.repassword}
                            textContentType='password'
                            maxLength={40}
                            placeholder="请再次输入密码"
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
                    <View style={styles.label}>
                        <Checkbox isChecked={this.state.checked}/> 
                        <View>
                            <Text style={{color:'#fff'}}>我已届满合法博彩年龄，且同意各项开户条约</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this._signInAsync}  style={styles.Button} activeOpacity={0.8}>
                    <View>
                        <Text style={styles.ButtonText}>完成注册</Text>
                    </View>
                    </TouchableOpacity>

                </View>
                
      </ScrollView>
    );
  } 

}
const styles = StyleSheet.create({
    scrollContainer:{
        flex:1,
        height:'100%'
    },
    banner:{
    backgroundColor:'#fff',
    height:180,
    width:'100%'
  },
  loginContainer:{
    backgroundColor:'#0B102A',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    marginLeft:15,
    marginRight:15,
    paddingTop:27,
    paddingRight:27,
    paddingBottom:30,
    paddingLeft:27,
    marginTop:-80
  },
  loginHead:{    
    height:18,
    marginBottom:15
  },
  fontNormal:{
    color:'#fff',
    fontSize:18,
  },   
  formGroup:{
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
  Button:{
      height:44,
      backgroundColor:'#EECE8A',
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
  },
  ButtonText:{
      fontSize:18,
      color:'#0B102A',
      fontWeight:'bold'
  },
  forget:{
    display:'flex',
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
    display:'flex',
    flexDirection:'row',
    height:40,
    marginBottom:30,
    alignItems:'center',
  },   
  code:{
    width:85,
    height:40,
    marginLeft:5,
    backgroundColor:'#fff'
  },
  label:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      height:18,
      marginBottom:30
  }
})