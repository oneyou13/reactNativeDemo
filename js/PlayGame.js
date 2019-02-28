import React,{Component} from "react";
import {WebView,StyleSheet,View} from "react-native";

export default class PlayGame extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#ffffff',
          height:0
        },
    }

    getGame=()=>{
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 0);
        const otherParam = navigation.getParam('otherParam', 0);
    }

    render(){
        return(
            <View style={styles.container}>
                <WebView
                    style={{flex:1}}
                    source={{uri: 'https://sw.gcpstg.m27613.com/luckyjungle/107/index.html?hide_play_for_real=true&startGameToken=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJwbGF5ZXJDb2RlIjoiR29sZFVzZXIxIiwiYnJhbmRJZCI6MTcwMCwiZ2FtZUNvZGUiOiJzd19sdWNreV9qdW5nbGUiLCJwcm92aWRlckNvZGUiOiJTVyIsInByb3ZpZGVyR2FtZUNvZGUiOiJzd19sdWNreV9qdW5nbGUiLCJjdXJyZW5jeSI6IkNOWSIsInBsYXltb2RlIjoiZnVuIiwiZW52SWQiOiJnczEiLCJ0ZXN0IjpmYWxzZSwiaWF0IjoxNTUwNzQ2MjI0LCJleHAiOjE1NTA3NTM0MjQsImlzcyI6InNreXdpbmRncm91cCJ9.8smDWE_ZV-q8j00KeHC1Tkzm95j9uhxK-ZwIIwCTLr_2tAdb73eT-il657yOJI4js0q4Mg-F77SpAOE5VPCVDA&url=https%3A%2F%2Fgs.gcpstg.m27613.com%2Fcasino%2Fgame2&swa=1&history=1&history_url=https%3A%2F%2Fsw.gcpstg.m27613.com%2Fgamehistory%2F3.1.4%2Findex.html&language=zh-cn'}}
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