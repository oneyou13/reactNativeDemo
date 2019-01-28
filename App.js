import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createBottomTabNavigator,createAppContainer,createSwitchNavigator } from "react-navigation";
import Service from './js/Service'
import Activity from './js/Activity'
import User from './js/User'
import Drawing from './js/user/Drawing'
import Home from './js/Home'
import Login from './js/auth/Login'
import Register from './js/auth/Register'
import AuthLoadingScreen from './js/auth/AuthLoadingScreen'


const HomeStack = createStackNavigator({
  Home:Home,
  User:User
})
const ActivityStack = createStackNavigator({
  User:User
})

const ServiceStack = createStackNavigator({
  User:User
})

const UserStack = createStackNavigator({
  Drawing:Drawing
})

const AuthStack = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },
  Register:{
    screen:Register,
    navigationOptions:{

    }
  }
})

const AppNavigator = createBottomTabNavigator({
  Home:{
    screen:Home,
  },  
  Activity:{
    screen: Activity
  },
  Service: {
    screen: Service
  },
  User:{
    screen:User,
  }
},{
  tabBarOptions: {
    activeTintColor: '#ccac67',
    inactiveTintColor: '#666',
    showIcon: true,
    showLabel: true,
    upperCaseLabel: false,
    pressColor: '#823453',
    pressOpacity: 1,
    style: {
      backgroundColor: '#0B102A',
      paddingBottom: 0,
      borderTopWidth: 0.5,
      borderTopColor: '#1b1d1b',
      height:48
    },
    labelStyle: {
      fontSize: 14,
      margin: 1
    },
    indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  backBehavior: 'none',
  initialRouteName: "User"
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));