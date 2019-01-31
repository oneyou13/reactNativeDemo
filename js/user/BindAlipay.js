import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'

export default class BindAlipay extends Component{
    constructor(props){
        super(props);
        this.state={
            money:''
        }
    }
    static navigationOptions = {
        title:'绑定支付宝'
    }

    _save = ()=>{
        alert("保存成功");
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
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
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