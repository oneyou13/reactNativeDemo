import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,Picker} from "react-native";
import GlobalStyle from '../GlobalStyle'
import Cell from '../component/Cell'

export default class Profile extends Component{

    constructor(props){
        super(props);
        this.state ={
            language:'zh_cn'
        }
    }
    static navigationOptions = {
        title:'会员资料'
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.divide}></View>

                <Cell title="会员名" value="无敌小辣椒"/>
                <Cell title="持卡人姓名" value="无敌小辣椒" isLink={true}  onPress={()=>this.props.navigation.navigate('BindName')}/>
                <Cell title="手机号码" value="无敌小辣椒" isLink={true}  onPress={()=>this.props.navigation.navigate('BindPhone')}/>
                <Cell title="语言" value="简体中文" isLink={true}  onPress={()=>alert(1)}/>
                <View style={styles.divideLg}></View>

                <Cell title="登录密码" value="修改" isLink={true} onPress={()=>this.props.navigation.navigate('SettingPassword')}/>
                <Cell title="提款密码" value="修改" isLink={true} onPress={()=>this.props.navigation.navigate('DrawingPassword')}/>
                <Cell title="支付宝账号" value="修改" isLink={true} onPress={()=>this.props.navigation.navigate('BindAlipay')}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F5F5F5',
    },
    divide:{
        width:'100%',
        height:10
    },
    divideLg:{
        width:'100%',
        height:15
    }
  })