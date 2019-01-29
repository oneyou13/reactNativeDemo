import React, {Component} from 'react';
import {Text, View,Button,StyleSheet,Image} from 'react-native';

export default class Service extends Component{
  static navigationOptions ={
    tabBarLabel: '客服',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('./img/kefu_active.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('./img/kefu.png')}/>
        );
    },
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello {this.props.name}!11</Text>
        <Button title="MessageContainer" onPress={()=>this.props.navigation.navigate('MessageContainer')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'#1b1d1b'
  },
  tabBarIcon:{
    width:24,
    height:24
  },
})