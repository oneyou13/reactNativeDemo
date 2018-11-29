import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

class Hello extends Component{
  render(){
    return(
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}