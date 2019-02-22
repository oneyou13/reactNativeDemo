import React, {Component} from 'react';
import {Text, View, StyleSheet,Image,FlatList,Platform,TouchableHighlight} from 'react-native';

export default class VideoGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            games:[{
                name:'PT视讯',
                cover:'http://maozhua-1253723509.file.myqcloud.com/img/adm/20190103/88720918.jpeg',
                id:'1',
            },{
                name:'AG视讯',
                cover:'http://maozhua-1253723509.file.myqcloud.com/img/adm/20190103/78910817.jpeg',
                id:'2',
            },{
                name:'BBIN视讯',
                cover:'http://maozhua-1253723509.file.myqcloud.com/img/adm/20190102/83343477.jpeg',
                id:'3',
            },{
                name:'MG视讯',
                cover:'http://maozhua-1253723509.file.myqcloud.com/img/adm/20181229/82717687.jpeg',
                id:'4',
            }]
        }
    }

    static navigationOptions = {
        title:'消息中心'
    }
    
    render(){

        let arr = [];

        this.state.games.map(function(item){
            arr.push(
                <TouchableHighlight
                        style={styles.gameItem}
                        onPress={() => this._onPress(item)}>
                        <View>
                            <Image source={{uri:item.cover}} style={{width: 190, height: 160}} />
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                </TouchableHighlight>
            )
        })

        return(
            <View style={styles.gameContainer}>
                 {arr}
            </View>
        );
    }
    
    renderItem(itemData){
        return(
            <View style={styles.gameItem}>
                <Text style={styles.title}>{itemData.name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    gameContainer:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5,
        flexWrap:'wrap',
        flexDirection:'row',
    },  
    title:{
        color:'#ffffff',
        backgroundColor:'rgba(0,0,0,.8)',
        position:'absolute',
        padding:10,
        left:0,
        right:0,
        bottom:0,
        fontSize:16
    },
    gameInner:{
        position:'relative'
    },  
    gameItem:{
        backgroundColor:'#eeeeee',
        marginBottom:15,
        marginLeft:5,
        marginRight:5,
        width:190,
        height:160,
    }
})