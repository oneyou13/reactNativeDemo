import React,{Component} from "react";
import {View,Text,Button} from "react-native";

export default class MessageContainer extends Component{
    static navigationOptions = {
        title:'MessageContainer'
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>MessageContainer</Text>
                    <Button title="Hello" onPress={()=>this.props.navigation.navigate('Hello')}/>
                <View>
                    <Button title="User" onPress={()=>this.props.navigation.navigate('User')}/>
                </View>
            </View>
        )
    }
}