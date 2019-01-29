import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Picker} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import DropDown from '../component/Dropdown'

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
            money:'',
            language:''
        }
    }
    static navigationOptions = {
        title:'转账'
    }

    _save = ()=>{
        alert("保存成功");
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>转出账户</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={GlobalStyle.formControl}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>转入账户</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={GlobalStyle.formControl}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={GlobalStyle.formTip}>
                    <Text>转出账户可用余额：</Text><Text style={{color:'#34AAE1',fontSize:16,fontWeight:'bold'}}>2000.00</Text>
                </View>
                <View style={GlobalStyle.divide}></View>
                <View style={GlobalStyle.formGroupLg}>
                    <View style={GlobalStyle.formLabelLg}>
                        <Text style={GlobalStyle.formLabel}>转出金额</Text>
                    </View>
                    <TextInput  
                        style={GlobalStyle.formControlLg} 
                        onChangeText={(money) => this.setState({money})}
                        value={this.state.money}
                        maxLength={10}
                        placeholder="请输入转账金额"
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