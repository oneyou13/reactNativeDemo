import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TouchableOpacity} from "react-native";

export default class Report extends Component{
    constructor(props){
        super(props);
        this.state={
            start:'2019-01-28',
            end:'2019-01-28'
        }
    }
    static navigationOptions = {
        title:'交易记录'
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableOpacity style={styles.tabItem}  activeOpacity={0.9}>
                        <Text style={styles.tabTitle}>账户明细</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItemActive}  activeOpacity={0.9}>
                        <Text style={styles.tabTitleActive}>投注明细</Text>
                        <Image source={require('./')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.formBox}>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>开始时间</Text>
                        <View style={styles.formInput}>
                            <Text>{this.state.start}</Text>
                            <Image source={require('./img/icon_rili.png')} style={{width:20,height:20}}></Image>
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>结束时间</Text>
                        <View style={styles.formInput}>
                            <Text>{this.state.end}</Text>
                            <Image source={require('./img/icon_rili.png')} style={{width:20,height:20}}></Image>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#1b1d1b',
      flex:1
    },
    tab:{
        display:'flex',
        backgroundColor:'#0B102A',
        flexDirection:'row'
    },
    tabItem:{
        height:44,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0B102A',
        flex:1
    },
    tabItemActive:{
        height:44,
        display:'flex',
        alignItems:'center',
        backgroundColor:'#CCAC67',
        flex:1,
        justifyContent:'center',
    },
    tabTitle:{
        fontSize:18,
        color:'#fff'
    },
    tabTitleActive:{
        fontSize:18,
        color:'#0B102A'
    },
    formBox:{
        display:'flex',
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:20
    },
    formItem:{
        backgroundColor:'#CCAC67',
    },
    label:{
        backgroundColor:'#CCAC67',
    },
    formInput:{
        backgroundColor:'#CCAC67',
    }
  })