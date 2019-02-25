import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Alert} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import {validString,fetchData} from '../config'

export default class BindPhone extends Component{
    constructor(props){
        super(props);
        this.state={
            phone:'15222222222',
            rephone:'15222222222'
        }
    }
    static navigationOptions = {
        title:'绑定手机'
    }

    _save = ()=>{

        let _this = this;

        if(!this.state.phone || !validString.isPhone(this.state.phone)){
            Alert.alert('提示','请填写手机号')
            return
        }
        if(!this.state.rephone || !validString.isPhone(this.state.rephone)){
            Alert.alert('提示','请再次填写手机号')
            return
        }
        if(this.state.phone!=this.state.rephone){
            Alert.alert('提示','手机号码填写不一致')
        }

        fetchData({
            url:"/api/user/bind_phone",
            method:"put",
            data:{
                phone:this.state.phone
            },
            needToken:true
        },{
          success(response){
            if(response.status_code){
                alert(response.message)
            }else{           
                _this.props.navigation.goBack();
            }  
          },
          error(error){
            alert(error)
          }
        });

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <Text style={[GlobalStyle.gray,GlobalStyle.p10,{paddingLeft:15}]}>请填写真实有效的信息</Text>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>手机号码：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                        maxLength={11}
                        placeholder="请输入11位手机号码"
                    />
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>再次输入：</Text>
                    <TextInput  
                        style={GlobalStyle.formControl} 
                        onChangeText={(rephone) => this.setState({rephone})}
                        value={this.state.rephone}
                        maxLength={11}
                        placeholder="请再次输入11位手机号码"
                    />
                </View>
                <View style={GlobalStyle.btnBox}>
                    <ButtonYellow onPress={this._save} title="保存" />
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
  })