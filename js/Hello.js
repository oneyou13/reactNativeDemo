import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

export default class Hello extends Component{
  static navigationOptions ={
    title:'Hello'
  }
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Hello {this.props.name}!</Text>
        <Button title="MessageContainer" onPress={()=>this.props.navigation.navigate('MessageContainer')}/>
      </View>
    );
  }
}