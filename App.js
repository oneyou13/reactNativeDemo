import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Hello from './js/Hello'
import MessageContainer from './js/MessageContainer'
import User from './js/User'
import Home from './js/Home'

const AppNavigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Hello: {
    screen: Hello
  },
  MessageContainer:{
    screen: MessageContainer
  },
  User:{
    screen:User
  }
});

export default createAppContainer(AppNavigator);