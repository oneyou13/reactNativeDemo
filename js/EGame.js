import React, {Component} from 'react';
import {Text, View, StyleSheet,Image,FlatList,Platform,TouchableHighlight,RefreshControl,TextInput} from 'react-native';
import {GlobalStyle} from './GlobalStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default class VideoGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            api:'CQ9',
            page:0,
            name:'',
            games:[],
            platforms:[{
                name:'CQ9电子',
                id:'CQ9',
                icon:require('./img/chouma_active.png'),
            },{
                name:'PT电子',
                id:'PT',
                icon:require('./img/chouma_active.png'),
            },{
                name:'SWP电子',
                id:'SWP',
                icon:require('./img/chouma_active.png'),
            },{
                name:'MG电子',
                id:'MG',
                icon:require('./img/chouma_active.png'),
            }],           
        }
    }

    componentDidMount(){
        this.getGames()
    }

    static navigationOptions = {
        title:'电子游戏',
        headerStyle: {
          backgroundColor: '#ffffff'
        },
        headerTitleStyle: {
            color:'#000000'
        }
    }

    _setTab=(id)=>{
        this.setState({
            api:id,
            page:1,
            name:'',
            games:[]
        },()=>{
            this.getGames()
        })
        
    }

    getSearch=()=>{
        this.setState({
            games:[],
            page:1
        })
        this.getGames()
    }

    _tryPlay=()=>{
        // alert(item.productCode)
        // alert(item.tcgGameCode)
        this.props.navigation.navigate('PlayGame');
    }

    getGames=()=>{
        this.setState({isLoading:true,page:this.state.page+=1,api:this.state.api})
        return fetch('http://www.boya88888.com/api/third_party_platform/game?api_name='+this.state.api+'&page='+this.state.page +'&name='+this.state.name)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false
            });

            if(responseJson.data && responseJson.data.length>0){
                this.setState({
                    games: this.state.games.concat(responseJson.data),
                });
            }
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.gameTab}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.gameTab}>
                        {
                            this.state.platforms.map((item)=>this.renderTab(item))
                        }
                    </ScrollView>
                </View>
                <View style={styles.search}>
                    <Image source={require('./img/icon_search.png')}></Image>
                    <TextInput  
                        style={styles.formControl} 
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}
                        maxLength={50}
                        placeholder="请输入游戏名称"
                    />
                    <TouchableHighlight style={styles.btn} onPress={()=>this.getSearch()}><Text style={styles.btnText}>搜索</Text></TouchableHighlight>
                </View>
                <FlatList  
                    extraData={this.state}
                    data={this.state.games}
                    keyExtractor={item => item.id}
                    refreshing={this.state.isLoading}
                    onRefresh={()=>this.getGames()}
                    numColumns={3}
                    renderItem={({item})=>this.renderItem(item)}
                    columnWrapperStyle={styles.gameContainer}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>this.getGames()}
                    ListEmptyComponent={()=>this.renderEmpty()}
                    ListFooterComponent={()=>this.renderFooter()}                    
                    >
                </FlatList>
            </View>
        );
    }
    
    renderItem(item){
        return(
            <View style={styles.gameItem}>
                <Image source={{uri:'http://www.boya88888.com/' + item.img}} style={styles.cover}></Image>
                <View style={styles.btnbox}>
                    <TouchableHighlight onPress={() => this._tryPlay(item)} style={[styles.btnYellow,styles.btnRadius]}><Text style={styles.btnText}>试玩</Text></TouchableHighlight>
                    <TouchableHighlight onPress={() => this._tryPlay(item)} style={[styles.btnBlue,styles.btnRadius]}><Text style={styles.btnText}>真玩</Text></TouchableHighlight>
                </View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        )
    }

    renderTab(item){
        return(
            <TouchableHighlight style={styles.gameTabItem} onPress={() => this._setTab(item.id)}>
                <View style={[styles.gameTabInner,this.state.api==item.id?styles.active:{}]}>
                    <Image source={item.icon} style={styles.gameTabIcon} />
                    <Text style={GlobalStyle.white}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderEmpty(){
        return(
            <View style={styles.empty}>
                <Text style={[GlobalStyle.white,styles.center]}>没有你要找的游戏</Text>
            </View>
        )
    }
    renderFooter(){
        let _string ="";
        if(this.state.games.length>0){
            this.state.isLoading?'加载中...':'下拉加载更多'
        }
        return(
            <View style={styles.center}>
                <Text style={[GlobalStyle.white,styles.center]}>
                {_string}
                </Text>
            </View>
        )
    }
    renderHeader(){
        return(
            <View style={styles.center}><Text style={[GlobalStyle.white,styles.center]}>加载中</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#262B64',
    },  
    gameTab:{
        backgroundColor:'#0B102A',
        height:44,
    },  
    gameTabItem:{
        height:44,
        width:75
    },
    active:{
        backgroundColor:'#CCAC67'
    },
    gameTabInner:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        height:44
    },
    gameTabIcon:{
        height:15
    },  
    search:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',    
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        height:32,
        backgroundColor:'#ffffff',
        marginTop:10,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        paddingLeft:8
    },  
    formControl:{
        height:40,
        flex:1,
        lineHeight:32
    },
    btn:{
        backgroundColor:'#CCAC67',
        height:32,
        width:48,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
    },
    btnText:{
        textAlign:'center',
        lineHeight:32
    },
    gameContainer:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#262B64',
        flex:1
    },  
    title:{
        color:'#212121',
        padding:10,
        fontSize:14,
        textAlign:'center'
    },
    gameInner:{
        position:'relative'
    },  
    cover:{
        width:115,
        height:115,
        backgroundColor:'#0B102A'
    },
    gameItem:{
        backgroundColor:'#fff',
        marginBottom:10,
        width:115,
        height:168,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        overflow:'hidden',
        position:'relative'
    },
    btnbox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',        
        height:28,
        marginTop:-14,
        zIndex:10,
        top:0
    },
    btnRadius:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
    },
    btnBlue:{
        backgroundColor:'#0B102A',
        height:26,
        width:52
    },
    btnYellow:{
        backgroundColor:'#CCAC67',
        height:26,
        width:52
    },
    btnText:{
        color:'#ffffff',
        textAlign:'center',
        lineHeight:26,
    },
    center:{
        textAlign:'center',
        height:40
    },
    empty:{
        flex:1,
        height:120,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
})