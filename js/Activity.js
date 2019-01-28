import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image} from "react-native";

export default class Activity extends Component{
    static navigationOptions = {
        tabBarLabel: '优惠',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                <Image style={styles.tabBarIcon} source={require('./img/chouma_active.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('./img/chouma.png')}/>
            );
        },
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>MessageContainer</Text>
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
    },
    titleContainer:{
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:10,
      paddingRight:10    
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#ffffff',
      paddingTop:15,
      paddingBottom:15,
      textAlign:'center'
    },
    banner:{
      height:180,
      backgroundColor:'#333',
      elevation: 5,
      shadowColor:'#333',
      shadowOffset:{
        width:5,height:5
      },
      shadowRadius:5,
      shadowOpacity:1
    },
    tabBarIcon:{
      width:24,
      height:24
    }
  })