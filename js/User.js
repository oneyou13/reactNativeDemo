import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

export default class User extends Component{
  static navigationOptions ={
    title:'User'
  }
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Hello User!</Text>
        <Button title="Hello" onPress={()=>this.props.navigation.navigate('Hello')}/>
      </View>
    );
  }
}