import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,AsyncStorage,Alert} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import {validString,fetchData} from '../config'

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
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
            accout:{
                "withdrawal_money":"0.00",
                "frozen_money":0,
                "count_money":0
            },
            money:'',
            password:'',
            type:1  //提款平台 1=支付宝，2=银行卡
        }
    }
    static navigationOptions = {
        title:'提款'
    }

    _save = ()=>{
        alert("保存成功");
    }


    componentWillMount(){
        this._getUser()
        this._getMoney()
    }

    _getUser=()=>{
        let _this = this;
        AsyncStorage.getItem('user',(err,result)=>{
            //console.warn(result)
            if(result){
                _this.setState({
                    user:JSON.parse(result)
                })
            }else{
                _this.props.navigation.popToTop()
            }
        })
    }

    _getMoney =()=>{
        let  _this = this;
        fetchData({
            url:"/api/member_assets",
            method:"get",
            data:{
            },
            needToken:true
        },{
          success(response){
            //Alert.alert(JSON.stringify(response))
            if(response.status_code){
                Alert.alert('提示' ,response.message)
            }else{           
                _this.setState({
                    accout:response
                })          
            }  
          },
          error(error){
            Alert.alert(JSON.stringify(error))
          }
        });
    }

    _doWithdraw=()=>{
        let  _this = this;

        if(!validString.intege(Number(this.state.money))){
            Alert.alert('提示','取款金额必须是正整数')
            return
        }

        if(!validString.notempty(this.state.password)){
            Alert.alert('提示','请填写取款密码')
            return
        }

        fetchData({
            url:"/api/withdraw",
            method:"post",
            data:{
                money:this.state.money,
                password:this.state.password
            },
            needToken:true
        },{
          success(response){
            Alert.alert(JSON.stringify(response))
            if(response.status_code){
                Alert.alert('提示' ,response.message)
            }else{           
                _this.setState({
                    accout:response
                })          
            }  
          },
          error(error){
            Alert.alert(JSON.stringify(error))
          }
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>

                <View style={styles.accout}>
                    <View style={styles.accoutItem}>
                        <Text style={styles.accoutTitle}>总资产</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.moneyGold}>￥ {this.state.accout.count_money}</Text>
                    </View>
                    <View style={styles.accoutItem}>
                        <Text style={styles.accoutTitle}>可提资金</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.moneyBlue}>￥ {this.state.accout.withdrawal_money}</Text>
                    </View>
                </View>

                <View style={GlobalStyle.divide}></View>
                <View  style={GlobalStyle.formTitle}>
                    <Image source={require('./img/zhifubao.png')} style={{width:20,height:20}}></Image>
                    <Text style={{color:'#00A0E9',fontSize:16,marginLeft:3}}>支付宝</Text>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>支付宝账号</Text>
                    <View style={GlobalStyle.formControl}>
                        <Text>{this.state.user.ali_user}</Text>
                    </View>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款金额</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入提款金额"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款密码</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        maxLength={20}
                        secureTextEntry={true}
                        placeholder="请输入取款密码"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    <ButtonYellow onPress={this._doWithdraw} title="提交" />
                </View>
                <View style={GlobalStyle.footTip}>
                    <Text style={GlobalStyle.footTipTitle}>重要提示</Text>
                    <Text style={GlobalStyle.footTipBody}>因为支付宝转银行卡非及时到账，上分将受到到账时间影响，具体您查看支付宝“到账时间”描述。</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    accout:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center'
    },
    accoutItem:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#F5F5F5',
        height:80,
        paddingLeft:34,
        paddingTop:16
    },
    accoutTitle:{
        color:'#212121',
        fontSize:14,
        fontWeight:'bold'
    },
    gray:{
        color:'#999999',
        fontSize:10,
    },
    moneyGold:{
        color:'#CCAC67',
        fontSize:18,
        fontWeight:'bold',
    },moneyBlue:{
        color:'#34AAE1',
        fontSize:18,
        fontWeight:'bold',
    }
  })