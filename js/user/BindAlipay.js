import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Alert} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import {validString,fetchData} from '../config'

export default class BindAlipay extends Component{
    constructor(props){
        super(props);
        this.state={
            aliname:''
        }
    }
    static navigationOptions = {
        title:'绑定支付宝'
    }

    _save = ()=>{

        let _this = this;

        if(!validString.isPhone(this.state.aliname) && !validString.isEmail(this.state.aliname)){
            Alert.alert('提示','请填写支付宝账号')
            return
        }

        fetchData({
            url:"/api/user/bind_ali",
            method:"put",
            data:{
                ali_user:this.state.aliname
            },
            needToken:true
        },{
          success(response){
            if(response.status_code){
                alert(response.message)
            }else{           
                _this.props.navigation.goBack();
            }  
          },
          error(error){
            alert(error)
          }
        });

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <Text style={[GlobalStyle.gray,GlobalStyle.p10,{paddingLeft:15}]}>请填写真实有效的信息</Text>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>支付宝账号：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(aliname) => this.setState({aliname})}
                        value={this.state.aliname}
                        maxLength={50}
                        placeholder="请输入支付宝账号"
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