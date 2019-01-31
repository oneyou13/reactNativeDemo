import React,{Component} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from "react-native";
import {GlobalStyle} from '../GlobalStyle'
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker'

class ListItem extends Component{
    render(){

        let statusStr;
        if(this.props.status==1){
            statusStr =(<Text style={GlobalStyle.orange}>处理中</Text>) 
        }else if(this.props.status==2){
            statusStr =(<Text style={GlobalStyle.red}>失败</Text>) 
        }else if(this.props.status==3){
            statusStr =(<Text style={GlobalStyle.blue}>成功</Text>) 
        }else{
            statusStr =(<Text style={GlobalStyle.gray}>取消</Text>) 
        }
        return(
            <View style={styles.listItem}>
                <Text style={styles.tableTd}>{this.props.title}</Text>
                <Text style={styles.tableTd}>{this.props.money}</Text>
                {statusStr}
            </View>
        )
    }
}

export default class Report extends Component{
    constructor(props){
        super(props);
        this.state={
            start:'2019-01-28',
            end:'2019-01-28',
            type:1,
            reportType:1,
            dataSource:[{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:1500000,
                status:1
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:5000,
                status:2
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:100,
                status:3
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:10,
                status:4
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:1500000,
                status:1
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:5000,
                status:2
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:100,
                status:3
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:10,
                status:4
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:1500000,
                status:1
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:5000,
                status:2
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:100,
                status:3
            },{
                title:'从余额提款到农业银行',
                date:'2018.12.08 18:53',
                money:101,
                status:4
            }]
        }
    }
    static navigationOptions = {
        title:'交易记录'
    }

    _setByReportType=(reportType)=>{
        this.setState({
            reportType
        })
    }
    _setByType=(type)=>{
        this.setState({
            type
        })
    }

    _goPage = (page)=>{
        this.props.navigation.navigate(page)
    }

    _renderItem = ({item})=>(
        <ListItem 
            title={item.title}
            money={item.money}
            status={item.status}
        />
    )

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableOpacity style={this.state.reportType==1?styles.tabItemActive:styles.tabItem} onPress={()=>this._setByReportType(1)} activeOpacity={0.9}>
                        <Text style={this.state.reportType==1?styles.tabTitleActive:styles.tabTitle}>账户明细</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.reportType==2?styles.tabItemActive:styles.tabItem} onPress={()=>this._setByReportType(2)} activeOpacity={0.9}>
                        <Text style={this.state.reportType==2?styles.tabTitleActive:styles.tabTitle}>投注明细</Text>                       
                    </TouchableOpacity>
                </View>
                <View style={styles.formBox}>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>开始时间</Text>
                        <View style={styles.formInput}>
                            <DatePicker
                                style={styles.formValue}
                                date={this.state.start}
                                mode="date"
                                placeholder="开始时间"
                                format="YYYY-MM-DD"
                                minDate="2019-01-01"
                                maxDate="2050-01-01"
                                confirmBtnText="确定"
                                cancelBtnText="取消"
                                customStyles={{
                                    dateIcon: {
                                      marginLeft: 0,
                                      width:20,
                                      height:20
                                    },
                                    dateInput: {
                                      borderWidth:0
                                    }
                                }}
                                iconSource={require('./img/icon_rili.png')}
                                onDateChange={(date) => {this.setState({start: date});}}
                            />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.formItem}>
                        <Text style={styles.label}>结束时间</Text>
                        <View style={styles.formInput}>
                            <DatePicker
                                style={styles.formValue}
                                date={this.state.end}
                                mode="date"
                                placeholder="结束时间"
                                format="YYYY-MM-DD"
                                minDate="2019-01-01"
                                maxDate="2050-01-01"
                                confirmBtnText="确定"
                                cancelBtnText="取消"
                                customStyles={{
                                    dateIcon: {
                                      marginLeft: 0,
                                      width:20,
                                      height:20
                                    },
                                    dateInput: {
                                      borderWidth:0,
                                      fontSize:16
                                    }
                                }}
                                iconSource={require('./img/icon_rili.png')}
                                onDateChange={(date) => {this.setState({end: date});}}
                            />
                        </View>
                    </View>
                </View>
                <View style={GlobalStyle.divideGray}></View>
                <View style={styles.filterBox}>
                    <TouchableOpacity style={this.state.type==1?styles.filterItemActive:styles.filterItem} onPress={()=>this._setByType(1)}  activeOpacity={0.9}>
                        <Text style={this.state.type==1?styles.filterTextActive:styles.filterText}>存款</Text>                       
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.type==2?styles.filterItemActive:styles.filterItem} onPress={()=>this._setByType(2)}   activeOpacity={0.9}>
                        <Text style={this.state.type==2?styles.filterTextActive:styles.filterText}>取款</Text>                       
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.type==3?styles.filterItemActive:styles.filterItem} onPress={()=>this._setByType(3)}   activeOpacity={0.9}>
                        <Text style={this.state.type==3?styles.filterTextActive:styles.filterText}>转账</Text>                       
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.type==4?styles.filterItemActive:styles.filterItem} onPress={()=>this._setByType(4)}   activeOpacity={0.9}>
                        <Text style={this.state.type==4?styles.filterTextActive:styles.filterText}>红利</Text>                       
                    </TouchableOpacity>
                </View>
                <View style={styles.tableHead}>
                    <Text style={styles.tableTh}>交易类型</Text>
                    <Text style={styles.tableTh}>金额</Text>
                    <Text>状态</Text>
                </View>
                <ScrollView style={styles.tableBody}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      flex:1
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
        backgroundColor:'#0B102A',
        flex:1
    },
    tabItemActive:{
        height:44,
        display:'flex',
        alignItems:'center',
        backgroundColor:'#CCAC67',
        flex:1,
        justifyContent:'center',
    },
    tabTitle:{
        fontSize:18,
        color:'#fff'
    },
    tabTitleActive:{
        fontSize:18,
        color:'#0B102A'
    },
    formBox:{
        display:'flex',
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:30,
        paddingRight:30
    },
    formItem:{
        flex:1,
    },
    label:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'200',
        marginBottom:7
    },
    line:{
        height:2,
        width:30,
        marginTop:44,
        marginLeft:7,
        marginRight:7,
        backgroundColor:'#666666'
    },
    formInput:{
        backgroundColor:'#fff',
        elevation: 5,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#CCCEE4',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:40,
    },
    formValue:{
        flex:1,
        height:40,
        fontSize:14,
        color:'#212121',
        textAlign:'left',
        lineHeight:40
    },
    filterBox:{
        paddingTop:15,
        paddingBottom:15,
        paddingRight:15,
        paddingLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    filterItem:{
        width:60,
        height:26,
        marginRight:5,
        fontWeight:'600'        
    },
    filterItemActive:{
        width:60,
        height:26,
        backgroundColor:'#CCAC67',
        marginRight:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        fontWeight:'600'
    },
    filterText:{
        color:'#0B102A',
        width:'100%',
        textAlign:'center',
        lineHeight:26,
        fontSize:12
    },
    filterTextActive:{
        fontSize:12,
        color:'#fff',
        width:'100%',
        textAlign:'center',
        lineHeight:26
    },
    tableHead:{
        backgroundColor:'#E5E5E5',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:40,
        paddingLeft:15,
        paddingRight:15
    },
    tableTh:{
        flex:1,
        fontWeight:'600'
    },
    listItem:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:40,
        paddingLeft:15,
        paddingRight:15
    },
    tableTd:{
        flex:1
    }
  })