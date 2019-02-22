import React, {Component} from 'react';
import {Text, View,Button,StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper'

export default class ScrollMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'这里是滚动消息'
        }
    }
  render(){
    return(
      <View style={styles.msgContainer}>
        <Image source={require('../img/icon-laba.png')} style={{width:12,height:13}}></Image>
        <Text style={styles.msgtitle}>公告消息：</Text>
        <Swiper autoplay={true} horizontal={false} style={{height:24}} showsPagination={false} >
            <View><Text style={styles.msg}> 12222!</Text></View>
            <View><Text style={styles.msg}> fdsafdas!</Text></View>
            <View><Text style={styles.msg}> fdafda!</Text></View>
            <View><Text style={styles.msg}> vfffff!</Text></View>
          </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    msgContainer:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#0B102A',
        borderBottomWidth:1,
        borderBottomColor:'#464059'
    },  
    msgtitle:{
        color:'#CCAC67',
        fontSize:12
    },
    msg:{
        color:'#ffffff',
        fontSize:12
    }
})