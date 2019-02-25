import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Alert,AsyncStorage} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import {validString,fetchData} from '../config'

export default class SettingPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            password:'',
            repassword:'',
            password_old:'',
        }
    }
    static navigationOptions = {
        title:'修改密码'
    }

    componentWillMount(){
        this._getUser()
    }

    _getUser=()=>{
        let _this = this;
        AsyncStorage.getItem('userToken',(err,result)=>{
            console.warn(result)
            if(result){
                _this.setState({
                    user:JSON.parse(result)
                })
            }else{
                _this.props.navigation.popToTop()
            }
        })
    }

    _save = ()=>{
        let _this = this;

        if(!validString.notempty(this.state.password_old) || this.state.password_old.length<6){
            Alert.alert('提示','请填写旧密码')
            return
        }

        if(!validString.notempty(this.state.password) || this.state.password.length<6){
            Alert.alert('提示','请填写新密码')
            return
        }

        if(!validString.notempty(this.state.repassword) || this.state.password.length<6){
            Alert.alert('提示','请再次填写新密码')
            return
        }

        if(this.state.password!=this.state.repassword){
            Alert.alert('提示','新密码不一致')
            return
        }

        fetchData({
            url:"/api/user/password",
            method:"put",
            data:{
                password:this.state.password,
                password_confirmation:this.state.repassword,
                password_old:this.state.password_old,
            },
            needToken:true
        },{
          success(response){
            Alert.alert(JSON.stringify(response))
            if(response.status_code==401){
                AsyncStorage.removeItem('userToken')
                .then((resole)=>{
                    console.warn(JSON.stringify(resole))
                    AsyncStorage.removeItem('user')
                })
                .then((resole)=>{
                    console.warn(JSON.stringify(resole))
                    _this.props.navigation.popToTop();
                })
                .catch((error)=>{
                    console.warn(JSON.stringify(error))
                })
            }if(response.status_code){
                Alert.alert(response.message)
            }else{           
                // Alert.alert(JSON.stringify(response))
                Alert.alert('提示','修改成功，请重新登录')
                //AsyncStorage.clear()
                AsyncStorage.removeItem('userToken')
                .then((resole)=>{
                    console.warn(JSON.stringify(resole))
                    AsyncStorage.removeItem('user')
                })
                .then((resole)=>{
                    console.warn(JSON.stringify(resole))
                    _this.props.navigation.popToTop();
                })
                .catch((error)=>{
                    console.warn(JSON.stringify(error))
                })
                
            }  
          },
          error(error){
            Alert.alert(JSON.stringify(error))
          }
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={[GlobalStyle.formLabel,{width:80}]}>旧密码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(password_old) => this.setState({password_old})}
                        value={this.state.password_old}
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={[GlobalStyle.formLabel,{width:80}]}>新密码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={[GlobalStyle.formLabel,{width:80}]}>确认密码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(repassword) => this.setState({repassword})}
                        value={this.state.repassword}
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    <ButtonYellow onPress={this._save} title="保存" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
  })