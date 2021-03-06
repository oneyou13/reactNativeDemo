import React,{Component} from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    flexRow:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    flexCol:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    container:{
      backgroundColor:'#1b1d1b'
    },
    divide:{
        width:'100%',
        height:10,
        display:'flex'
    },
    divideGray:{
        width:'100%',
        height:10,
        backgroundColor:'#EEEEEE'
    },
    btnBox:{
        marginLeft:20,
        marginRight:20
    },
    btnYellow:{
        height:48,
        backgroundColor:'#0B102A',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    btnYellowText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    formTitle:{
        backgroundColor:'#fff',
        height:48,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
        paddingLeft:15,
        paddingRight:15
    },
    formGroup:{
        backgroundColor:'#fff',
        height:48,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
        paddingLeft:15,
        paddingRight:15
    },    
    formLabel:{
        color:'#0B102A',
        fontSize:16,
        marginRight:10,
        fontWeight:'bold'
    },
    formControl:{
        height:48,
        flex:1,
        fontSize:14,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    formGroupLg:{
        backgroundColor:'#fff',
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
        paddingLeft:15,
        paddingRight:15
    },
    formLabelLg:{
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#F5F5F5',
        width:'100%',
    },
    formControlLg:{
        height:80,
        fontSize:24,
        width:'100%',
    },
    formTip:{
        paddingTop:15,
        paddingRight:15,
        paddingBottom:15,
        paddingLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    footTip:{
        marginTop:46,
        marginLeft:42,
        marginRight:42
    },
    footTipTitle:{
        color:'#212121',
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5
    },
    footTipBody:{
        color:'#999',
        fontSize:12
    },
    orange:{
        color:'#CCAC67'
    },
    gold:{
        color:'#CCAC67'
    },
    red:{
        color:'#E1255B'
    },
    blue:{
        color:'#34AAE1'
    },
    gray:{
        color:'#999'
    },
    white:{
        color:'#ffffff'
    },
    p5:{
        paddingTop:5,
        paddingBottom:5,

    },
    p10:{
        paddingTop:10,
        paddingBottom:10
    },
    fz18:{
        fontSize:18
    },
    fz16:{
        fontSize:16
    },
    fz14:{
        fontSize:14
    },
    fz10:{
        fontSize:10
    },
    fzBold:{
        fontWeight:'bold'
    }
})

module.exports = {
    GlobalStyle:styles
}