import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
            money:''
        }
    }
    static navigationOptions = {
        title:'存款'
    }

    _save = ()=>{
        alert("保存成功");
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <View  style={GlobalStyle.formTitle}>
                    <Image source={require('./img/zhifubao.png')} style={{width:20,height:20}}></Image>
                    <Text style={{color:'#00A0E9',fontSize:16,marginLeft:3}}>支付宝</Text>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>存款金额</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入转账金额"
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