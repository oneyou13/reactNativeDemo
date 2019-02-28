import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,Picker,Alert} from "react-native";
import ButtonYellow from '../component/ButtonYellow'
import {GlobalStyle} from '../GlobalStyle'
import DropDown from '../component/Dropdown'
import { ScrollView } from "react-native-gesture-handler";
import {fetchData} from '../config'

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
            money:'',
            language:'',
            outAccouts:[],
            inAccouts:[],
            accounts:[],
            out:0,
            in:0
        }
    }
    static navigationOptions = {
        title:'转账'
    }

    componentWillMount(){
        this._getAccout()
        this._getActivity()
    }

    _save = ()=>{
        Alert.alert('提示',"保存成功");
    }

    _getAccout=()=>{
        let _this = this;
        fetchData({
            url:'/api/third_party_platform',
            method:'get',
            data:{},
            needToken:true
        },{
            success(response){
                _this.setState({
                    isLoading: false
                });
    
                if(response.data && response.data.length>0){
                    _this.setState({
                        accounts: _this.state.accounts.concat(response.data),
                        outAccouts: _this.state.outAccouts.concat(response.data)
                    });
                }
            },
            error(){
                Alert.alert('提示','查询失败')
            }
        })
    }
    _getActivity=()=>{
        let _this = this;
        fetchData({
            url:'/api/user/list/activity?include=activity.platform',
            method:'get',
            data:{},
            needToken:true
        },{
            success(response){
                console.warn(JSON.stringify(response))
                _this.setState({
                    isLoading: false
                });
    
                if(response.data && response.data.length>0){
                    _this.setState({
                        accounts: _this.state.accounts.concat(response.data),
                        outAccouts: _this.state.outAccouts.concat(response.data)
                    });
                }
            },
            error(){
                Alert.alert('提示','查询失败')
            }
        })
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={GlobalStyle.divide}></View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>转出账户</Text>
                    <Picker
                        selectedValue={this.state.out}
                        style={styles.formControl}
                        onValueChange={(itemValue, itemIndex) => this.setState({out: itemValue})}>
                        {this.state.outAccouts.map((item)=> <Picker.Item color='#000' label={item.api_title} value={item.id} key={item.id} /> )}
                    </Picker>
                </View>
                <View style={GlobalStyle.formGroup}>
                    <Text style={GlobalStyle.formLabel}>转入账户</Text>
                    <Picker
                        selectedValue={this.state.in}
                        style={styles.formControl}
                        onValueChange={(itemValue, itemIndex) => this.setState({in: itemValue})}>
                        {this.state.outAccouts.map((item)=> <Picker.Item color='#000' label={item.api_title} value={item.id} key={item.id} /> )}
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
                <View style={[GlobalStyle.btnBox,{marginBottom:20}]}>
                    <ButtonYellow onPress={this._save} title="保存" />
                </View>                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    formControl:{
        height:48,
        flex:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
  })