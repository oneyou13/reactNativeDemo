import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
            money:''
        }
    }
    static navigationOptions = {
        title:'提款'
    }

    _save = ()=>{
        alert("保存成功");
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>

                <View style={styles.accout}>
                    <View style={styles.accoutItem}>
                        <Text style={styles.accoutTitle}>总资产</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.moneyGold}>￥ 998800.00</Text>
                    </View>
                    <View style={styles.accoutItem}>
                        <Text style={styles.accoutTitle}>可提资金</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.moneyBlue}>￥ 998800.00</Text>
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
                        <Text>4564545@qq.com</Text>
                    </View>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款金额</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入转账金额"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>提款密码</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入转账金额"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    <ButtonYellow onPress={this._save} title="保存" />
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