import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image} from "react-native";

export default class Transfer extends Component{
    static navigationOptions = {
        title:'转账'
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>转账</Text>
                    <Button title="Hello" onPress={()=>this.props.navigation.navigate('Hello')}/>
                <View>
                    <Button title="User" onPress={()=>this.props.navigation.navigate('User')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      // flex:1,
      backgroundColor:'#1b1d1b'
    }
  })