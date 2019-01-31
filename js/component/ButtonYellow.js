import React, {PureComponent} from 'react'
import {StyleSheet,View,Text,TouchableHighlight,TouchableOpacity}
    from 'react-native'

export default class ButtonYellow extends PureComponent {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <TouchableOpacity style={styles.btnYellow} underlayColor={'transparent'} onPress={() => this.props.onPress()}  activeOpacity={0.8}>
                <Text style={styles.btnYellowText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnBox:{
        marginTop:40,
        marginLeft:40,
        marginRight:40,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:44,
        flex:1
    },
    btnYellow:{
        height:44,
        backgroundColor:'#CCAC67',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:40,
    },
    btnYellowText:{
        fontSize:18,
        color:'#0B102A',
        fontWeight:'bold'
    },
})