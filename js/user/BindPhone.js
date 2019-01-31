import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'

export default class BindPhone extends Component{
    constructor(props){
        super(props);
        this.state={
            money:''
        }
    }
    static navigationOptions = {
        title:'绑定手机'
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
                    <Text style={GlobalStyle.formLabel}>手机号码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入11位手机号码"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>再次输入：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请再次输入11位手机号码"
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