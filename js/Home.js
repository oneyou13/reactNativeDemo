import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

export default class Home extends Component{
  static navigationOptions ={
    title:'Home'
  }
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Hello Home!</Text>
        <Button title="MessageContainer" onPress={()=>this.props.navigation.navigate('MessageContainer')}/>
      </View>
    );
  }
}