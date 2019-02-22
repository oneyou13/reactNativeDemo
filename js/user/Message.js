import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,ScrollView} from "react-native";
import GlobalStyle from '../GlobalStyle'
export default class Message extends Component{
    static navigationOptions = {
        title:'消息中心'
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={[GlobalStyle.formLabel,{width:80}]}>旧密码：</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#f5f5f5'
    } 
  })