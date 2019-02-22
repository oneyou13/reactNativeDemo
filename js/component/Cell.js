import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
}
    from 'react-native'

export default class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isLink){      
            return (
                <TouchableOpacity style={styles.cell} onPress={()=>this.props.onPress()} activeOpacity={0.9}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={[styles.value,{marginRight:5}]}>{this.props.value}</Text>
                    <Image source={require('./img/icon_arrow2.png')} style={styles.rightIcon}></Image>
                </TouchableOpacity>
            );
        }else{
            return (
                <View style={styles.cell}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.value}>{this.props.value}</Text>
                </View>
            );
        }
        
    }
}
const styles = StyleSheet.create({
    cell: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5',
        paddingRight:15,
        paddingLeft:15,
        height:48
    },
    title:{
        color:'#212121',
        fontSize:15,
        fontWeight:'100'
    },
    value:{
        flex:1,
        textAlign:'right',
        color:'#999',
        fontWeight:'100'
    },
    rightIcon:{
        width:8,
        height:16
    }
});