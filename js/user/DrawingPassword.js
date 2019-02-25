import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Alert,AsyncStorage} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import {validString,fetchData} from '../config'

export default class DrawingPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            password:'',
            repassword:'',
            password_old:'',
            user:{
                "id": 0,
                "name": "---",
                "avatar": "---",
                "phone": "-----",
                "real_name": "---",
                "money": "----",
                is_bind_ali: 0,//是否绑定支付宝
                ali_user:"",//支付宝账号
                is_bind_withdrawals:0,//是否绑定提款密码
                "created_at": "2018-11-19 14:23:27",
                "updated_at": "2019-01-23 12:28:51"
            },
        }
    }
    static navigationOptions = {
        title:'提款密码'
    }

    componentWillMount(){
        this._getUser()
    }

    _getUser=()=>{
        let _this = this;
        AsyncStorage.getItem('user',(err,result)=>{
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

        if(!validString.notempty(this.state.password) || this.state.password.length<6){
            Alert.alert('提示','请填写提款密码')
            return
        }

        if(!validString.notempty(this.state.repassword) || this.state.password.length<6){
            Alert.alert('提示','请再次填写提款密码')
            return
        }

        if(this.state.password!=this.state.repassword){
            Alert.alert('提示','提款密码不一致')
            return
        }

        fetchData({
            url:"/api/user/bind_withdrawals",
            method:"put",
            data:{
                password:this.state.password,
                password_confirmation:this.state.repassword
            },
            needToken:true
        },{
          success(response){
            if(response.status_code){
                Alert.alert(response.message)
            }else{           
                _this.props.navigation.goBack();
            }  
          },
          error(error){
            Alert.alert(error)
          }
        });

    }

    _update=()=>{       

        let _this = this;

        if(!validString.notempty(this.state.password_old) || this.state.password_old.length<6){
            Alert.alert('提示','请填写旧密码')
            return
        }

        if(!validString.notempty(this.state.password) || this.state.password.length<6){
            Alert.alert('提示','请填写新提款密码')
            return
        }

        if(!validString.notempty(this.state.repassword) || this.state.password.length<6){
            Alert.alert('提示','请再次填写新提款密码')
            return
        }

        if(this.state.password!=this.state.repassword){
            Alert.alert('提示','新提款密码不一致')
            return
        }

        fetchData({
            url:"/api/user/update_withdrawals",
            method:"put",
            data:{
                password:this.state.password,
                password_confirmation:this.state.repassword,
                password_old:this.state.password_old,
            },
            needToken:true
        },{
          success(response){
            //Alert.alert(JSON.stringify(response))
            if(response.status_code){
                Alert.alert(response.message)
            }else{           
               // Alert.alert(JSON.stringify(response))
                _this.props.navigation.goBack();
            }  
          },
          error(error){
            Alert.alert(JSON.stringify(error))
          }
        });
    }

    render(){
        let isBind = this.state.user.is_bind_withdrawals;
        let old = null;
        let btn = null;
        if(isBind){
            old = (
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款密码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(password_old) => this.setState({password_old})}
                        value={this.state.password_old}
                        maxLength={12}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                )
            
            btn =(
                <ButtonYellow onPress={this._update} title="更新" />
            )
        }else{
            btn =(
                <ButtonYellow onPress={this._save} title="保存" />
            )
        }

        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <Text style={[GlobalStyle.gray,GlobalStyle.p10,{paddingLeft:15}]}>请填写真实有效的信息</Text>

                {old}

                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款密码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        maxLength={12}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>再次输入：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(repassword) => this.setState({repassword})}
                        value={this.state.repassword}
                        maxLength={12}
                        secureTextEntry={true}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    {btn}
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