import React,{Component} from "react";
import {View,Text,StyleSheet,TouchableHighlight,FlatList} from "react-native";
import GlobalStyle from '../GlobalStyle'
import {fetchData} from '../config'

//超级大奖
class MsgItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <TouchableHighlight style={styles.msgItem}>
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.content}>{this.props.content}</Text>
            </View>
        </TouchableHighlight>
        )
    }
}

export default class Message extends Component{
    constructor(props){
        super(props)
        this.state ={
            list:[{
                id:1,
                title:'【系统消息】存钱成功，您于...',
                content:'AG视讯平台存入58.00元，已经成功到账 (新年大礼包 赠送200元)。'
            },{
                id:1,
                title:'【系统消息】存钱成功，您于...',
                content:'AG视讯平台存入58.00元，已经成功到账 (新年大礼包 赠送200元)。'
            },{
                id:1,
                title:'【系统消息】存钱成功，您于...',
                content:'AG视讯平台存入58.00元，已经成功到账 (新年大礼包 赠送200元)。'
            }],
            page:0
        }
    }
    static navigationOptions = {
        title:'消息中心'
    }

    componentWillMount(){
        //this.getMessage()
    }

    getMessage=()=>{

        let _this = this;
        this.setState({
            page:this.state.page++
        })

        fetchData({
            url:'/api/user/list/message?include=withMessage',
            method:'get',
            data:{
                page:this.state.page
            }
        },{
            success(response){
              console.warn(JSON.stringify(response))
              _this.setState({
                list:_this.state.list.concat(response.data)
              })
            },
            error(error){
              console.warn(JSON.stringify(error))
            }
        })
    }

    removeMessage=(obj)=>{

    }

    render(){
        return(
            <FlatList 
              style={styles.container}
              data={this.state.list}
              extraData={this.state}              
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
        )
    }

    _renderItem = ({item}) => (
        <MsgItem
          id={item.id}
          title={item.title}
          content={item.content}
          onPress={()=>this.props.navigation.navigate('ActivityDetail')}
        />
      );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#f5f5f5'
    },
    msgItem:{
        backgroundColor:'#ffffff',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:24,
        paddingRight:24,
        borderBottomWidth:1,
        borderBottomColor:'#eee'
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:'#212121'
    },
    content:{
        color:'#666666',
        fontSize:12
    } 
  })