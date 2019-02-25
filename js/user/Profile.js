import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,Picker,AsyncStorage} from "react-native";
import GlobalStyle from '../GlobalStyle'
import Cell from '../component/Cell'

export default class Profile extends Component{

    constructor(props){
        super(props);
        this.state ={
            user:{
                "id": 0,
                "name": "---",
                "avatar": "---",
                "phone": "-----",
                "real_name": "---",
                "money": "----",
                is_bind_ali: 0,//是否绑定支付宝
                ali_user:"",//支付宝账号
                is_bind_withdrawals:0,//是否绑定提款密码
                "created_at": "2018-11-19 14:23:27",
                "updated_at": "2019-01-23 12:28:51"
            },
        }
    }
    static navigationOptions = {
        title:'会员资料'
    }

    componentDidMount(){
        this._getUser()
    }

    _getUser=()=>{
        let _this = this;
        AsyncStorage.getItem('user',(err,result)=>{
          _this.setState({
            user:JSON.parse(result)
          })
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.divide}></View>

                <Cell title="会员名" value={this.state.user.name}/>
                <Cell title="持卡人姓名" value={this.state.user.real_name} isLink={true}  onPress={()=>this.props.navigation.navigate('BindName')}/>
                <Cell title="手机号码" value={this.state.user.phone?this.state.user.phone:'绑定'} isLink={true}  onPress={()=>this.props.navigation.navigate('BindPhone')}/>
                <Cell title="语言" value="简体中文" isLink={true}  onPress={()=>alert(1)}/>
                <View style={styles.divideLg}></View>

                <Cell title="登录密码" value="修改" isLink={true} onPress={()=>this.props.navigation.navigate('SettingPassword')}/>
                <Cell title="提款密码" value={this.state.user.is_bind_withdrawals?'修改':'绑定'} isLink={true} onPress={()=>this.props.navigation.navigate('DrawingPassword')}/>
                <Cell title="支付宝账号" value={this.state.user.is_bind_ali?this.state.user.ali_user:'绑定'} isLink={true} onPress={()=>this.props.navigation.navigate('BindAlipay')}/>

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