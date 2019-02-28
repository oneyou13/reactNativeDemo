import React from "react";
import { View, Text ,Image,StyleSheet} from "react-native";
import { createStackNavigator, createBottomTabNavigator,createAppContainer,createSwitchNavigator } from "react-navigation";
import Service from './js/Service'
import Activity from './js/Activity'
import ActivityDetail from './js/ActivityDetail'
import User from './js/User'
import {Drawing,Finance,Message,Fortune,Profile,Report,Transfer,ReportBet,BindAlipay,BindName,BindPhone,DrawingPassword,SettingPassword} from './js/user/Index'
import Home from './js/Home'
import Login from './js/auth/Login'
import Register from './js/auth/Register'
import VideoGame from './js/VideoGame'
import EGame from './js/EGame'
import PlayGame from './js/PlayGame'
import AuthLoadingScreen from './js/auth/AuthLoadingScreen'


const HomeStack = createStackNavigator({  
  Home:Home,
  VideoGame:VideoGame,
  EGame:EGame,
  PlayGame:PlayGame,
  ActivityDetail:ActivityDetail
},{
  defaultNavigationOptions:{    
    headerStyle: {
        backgroundColor: '#0B102A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color:'#fff'
    }     
  }
})

HomeStack.navigationOptions = ({navigation}) =>{
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}

const ActivityStack = createStackNavigator({
  Activity:Activity,
  ActivityDetail:ActivityDetail
})

const ServiceStack = createStackNavigator({
  Service:Service
})

const UserStack = createStackNavigator({
  User,Drawing,Finance,Message,Fortune,Profile,Report,Transfer,ReportBet,BindAlipay,BindName,BindPhone,DrawingPassword,SettingPassword
},{
  defaultNavigationOptions:{    
    headerStyle: {
        backgroundColor: '#0B102A',     
    },
    headerBackImage:'',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color:'#fff'
    }     
  }
})

UserStack.navigationOptions = ({navigation}) =>{
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

const AuthStack = createStackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },
  Register:{
    screen:Register,
  }
})

const AppNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeStack,
    navigationOptions: ({navigation}) => ({
      headerBackTitle: null,
      tabBarLabel: '首页',
      tabBarIcon: ({focused}) => {
          if (focused) {
              return (
                <Image style={styles.tabBarIcon} source={require('./js/img/main.png')}/>
              );
          }
          return (
              <Image style={styles.tabBarIcon} source={require('./js/img/un_main.png')}/>
          );
      },
    })
  },  
  Activity:Activity,
  Service: Service,
  User:{
    screen:UserStack,
    navigationOptions: ({navigation}) => ({
      headerBackTitle: null,
      tabBarLabel: '我的',
      tabBarIcon: ({focused}) => {
          if (focused) {
              return (
                <Image style={styles.tabBarIcon} source={require('./js/img/icon_user.png')}/>
              );
          }
          return (
              <Image style={styles.tabBarIcon} source={require('./js/img/uesr.png')}/>
          );
      },
    })
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
  initialRouteName: "Activity"
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

const styles = StyleSheet.create({
  tabBarIcon:{
    width:24,
    height:24
  }
})