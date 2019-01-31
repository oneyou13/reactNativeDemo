import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TextInput,TouchableOpacity,FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ButtonYellow from '../component/ButtonYellow'
import Dialog from '../component/Dialog'
import {GlobalStyle} from '../GlobalStyle'

class ListItem extends Component{
    render(){
        let statusStr;
        if(this.props.type==1){
            statusStr =(<View style={styles.blueBox}></View>) 
        }else if(this.props.type==2){
            statusStr =(<View style={styles.redBox}></View>) 
        }
        return(
            <TouchableOpacity style={styles.listItem} activeOpacity={0.9}>
                {statusStr}
                <Text style={styles.tableTd}>{this.props.title}</Text>
                <Text style={styles.textRight}>￥{this.props.money}</Text>
                <Image source={require('./img/icon_arrow2.png')} style={{width:8,height:15}}></Image>
            </TouchableOpacity>
        )
    }
}

class ActivityItem extends Component{
    constructor(props){
        super(props)
    }

    _press=()=>{
        this.props.onPress()
    }
    
    render(){
        return(
            <TouchableOpacity style={styles.listItem} activeOpacity={0.9} onPress={()=>this._press()}>
                <View style={styles.aItem}>
                    <Text style={styles.aTitle}>{this.props.title}</Text>
                    <Text style={GlobalStyle.gold}>￥{this.props.money}</Text>
                </View>
                <View style={styles.aItemRight}>
                    <Text>流水</Text>
                    <Text style={GlobalStyle.gold}>({this.props.bet}/{this.props.total})</Text>
                </View>
                <Image source={require('./img/icon_arrow2.png')} style={{width:8,height:15}}></Image>
            </TouchableOpacity>
        )
    }
}

export default class Transfer extends Component{
    constructor(props){
        super(props);
        this.state={
            money:'',
            type:1,
            dataSource:[{
                title:'PT',
                money:1500000,
                status:1,
                type:1
            },{
                title:'BBIN',
                money:5000,
                status:2,
                type:2
            },{
                title:'AG',
                money:100,
                status:3,
                type:1
            }],
            ActivitySource:[{
                title:'充值赠送0921-1',
                money:100,
                total:1800,
                bet:1000
            },{
                title:'充值赠送0921-2',
                money:2000,
                total:1800,
                bet:1000
            }],
            count:0,
            isshow:0,
            dialogCentent:{
                title:'111',
                total:'111',
                money:'1111',
                bet:'111'
            }
        }
    }
    static navigationOptions = {
        title:'财富中心'
    }

    _save = ()=>{
        alert("保存成功");
    }

    _setByReportType=(type)=>{
        this.setState({
            type
        })
    }

    _renderItem = ({item})=>(
        <ListItem 
            title={item.title}
            money={item.money}
            type={item.type}
            status={item.status}
        />
    )

    _renderActivityItem = ({item})=>(
        <ActivityItem 
            title={item.title}
            money={item.money}
            bet={item.bet}
            total={item.total}
            onPress={(item)=>this.showDialog(item)}
        />
    )

    show = (content) => {
        return (
            <View>
                <Text>活动名称：<Text style={{fontWeight:'bold'}}>{content.title}</Text></Text>
                <Text>剩余时间：<Text style={{fontWeight:'bold'}}>{content.money}</Text></Text>
                <Text>游戏类型：<Text style={{fontWeight:'bold'}}>{content.total}</Text></Text>
                <Text>流水进度：<Text style={{fontWeight:'bold'}}>{content.bet}</Text></Text>
                <Text>限定平台：<Text style={{fontWeight:'bold'}}>{content.bet}/{this.state.count}</Text></Text>
                <View style={[GlobalStyle.flexRow,{marginTop:20}]}>
                    <Image source={require('./img/warn.png')} style={{width:12,height:12}}></Image><Text>活动到期后账户自动清除</Text>
                </View>
            </View>
        )
    }
         
    onRef = (ref) => {
        this.child = ref;
    }

    showDialog = (dialogCentent) => {
        this.setState({
            dialogCentent
        })
        this.child.show()
    }

    render(){
        let list;
        if(this.state.type==1){
            list = (<FlatList
                data={this.state.dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index}
            />)
        }else{
            list = (<FlatList
                data={this.state.dataSource}
                renderItem={this._renderActivityItem}
                keyExtractor={(item, index) => index}
            />)
        }
        return(
            <View style={styles.container}>
                <View style={GlobalStyle.divide}></View>

                <View style={styles.accout}>
                    <View style={styles.accoutItemLeft}>
                        <Text style={styles.accoutTitle}>总资产</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.money}>￥ 998800.00</Text>
                    </View>
                    <View style={styles.accoutItemRight}>
                        <Text style={styles.accoutTitle}>可提资金</Text>
                        <Text style={styles.gray}>所有平台账户总额</Text>
                        <Text style={styles.money}>￥ 998800.00</Text>
                    </View>
                </View>

                <View style={GlobalStyle.divide}></View>
                <View style={styles.tab}>
                    <TouchableOpacity style={this.state.type==1?styles.tabItemActive:styles.tabItem} onPress={()=>this._setByReportType(1)} activeOpacity={0.9}>
                        <Text style={styles.tabTitle}>平台资金</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.type==2?styles.tabItemActive:styles.tabItem} onPress={()=>this._setByReportType(2)} activeOpacity={0.9}>
                        <Text style={styles.tabTitle}>活动账户</Text>                       
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.tableBody}>

                    <FlatList
                        style={this.state.type==1?styles.show:styles.hide}
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                    />

                    <FlatList
                        style={this.state.type==2?styles.show:styles.hide}
                        data={this.state.ActivitySource}
                        renderItem={this._renderActivityItem}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>

                <Dialog style={{display:'none'}} onRef={this.onRef} title="充值赠送详情" content={this.show(this.state.ActivitySource[0])}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        position:'relative'
    },
    accout:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center'
    },
    accoutItemLeft:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#F5F5F5',
        backgroundColor:'#34AAE1',
        height:80,
        paddingLeft:34,
        paddingTop:16
    },
    accoutItemRight:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#F5F5F5',
        backgroundColor:'#CCAC67',
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
        color:'#666',
        fontSize:10,
    },
    money:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    tab:{
        display:'flex',
        backgroundColor:'#0B102A',
        flexDirection:'row'
    },
    tabItem:{
        height:44,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E5E5E5',
        flex:1
    },
    tabItemActive:{
        height:44,
        display:'flex',
        alignItems:'center',
        backgroundColor:'#ffffff',
        flex:1,
        justifyContent:'center',
    },
    tabTitle:{
        fontSize:18,
        color:'#212121'
    },
    listItem:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:44,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5'
    },
    blueBox:{
        backgroundColor:'#34AAE1',
        width:5,
        height:16,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    redBox:{
        backgroundColor:'#E1255B',
        width:5,
        height:16,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    goldBox:{
        backgroundColor:'#CCAC67',
        width:5,
        height:16,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    tableTd:{
        flex:1,
        fontWeight:'800',
        color:'#212121',
        marginLeft:7,
        fontSize:16
    },
    textRight:{
        textAlign:'right',
        paddingLeft:5,
        paddingRight:5,
        fontWeight:'800',
        color:'#212121',
        fontSize:16
    },
    aItem:{
        flex:1,
        display:'flex',
        flexDirection:'row'
    },
    aItemRight:{
        textAlign:'right',
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:7
    },
    aTitle:{
        fontWeight:'800',
        color:'#212121',
        fontSize:13
    },
    show:{
        display:'flex'
    },
    hide:{
        display:'none'
    },    
  })