import React,{Component} from "react";
import {WebView,StyleSheet,View} from "react-native";
import BackImage from './component/BackImage'

export default class ActivityDetail extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title:'活动详情',
        headerStyle: {
          backgroundColor: '#ffffff'
        },
        headerTitleStyle: {
            color:'#000000'
        },
        headerBackImage:<BackImage/>
    }

    render(){
        return(
            <View style={styles.container}>
                <WebView
                    style={{flex:1}}
                    source={{uri: 'http://wap.boya88888.com/youhuihuodong_detail.html?id=5'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    }  
})