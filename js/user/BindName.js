import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'

export default class BindName extends Component{
    constructor(props){
        super(props);
        this.state={
            money:''
        }
    }
    static navigationOptions = {
        title:'真实姓名认证'
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
                    <Text style={GlobalStyle.formLabel}>持卡人姓名：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入6-12字母或数字"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    <ButtonYellow onPress={this._save} title="保存" />
                </View>
                <View style={GlobalStyle.footTip}>
                    <Text style={GlobalStyle.footTipTitle}>重要提示</Text>
                    <Text style={[GlobalStyle.footTipBody,{marginTop:10}]}>
                            1.您输入的姓名将作为您提款时唯一认定的提款卡姓名，若吃此处与您将要使用的提款卡姓名不一致，将无法提款。
                    </Text>
                    <Text style={[GlobalStyle.footTipBody,{marginTop:10}]}>2.您输入的姓名讲作为实名认证时唯一认定的姓名，且实名认证影响到多种红利领取，请您务必填写正确姓名。</Text>
                    <Text style={[GlobalStyle.footTipBody,{marginTop:10}]}>3.姓名一旦填写提交后不可随意修改，若不小心填错必须修改，请联系“线上客服”协助。</Text>
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