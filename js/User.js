import React, {Component} from 'react';
import {Text, View,Button,StyleSheet,FlatList,TouchableOpacity,AsyncStorage,Image,ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'',
      icon:this.props.icon
    }
  }
  _onPress = ()=>{
    this.setState({
        page:this.props.icon, 
    })
    this.props.navigate(this.props.page);
  }

  render(){
    return(
      <TouchableOpacity onPress={this._onPress} activeOpacity={0.8}>
        <View style={styles.list}>
          <Image source={require('./img/icon_jiaoyi.png')} style={styles.icon} resizeMode = {'contain'}>
          </Image>
          <Text style={styles.title}>
            {this.props.title}/{this.state.page}
          </Text>
          <Image source={require('./img/icon_arrow2.png')} style={styles.arrow}>
          </Image>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      menus:[{
        name:'交易记录',
        icon:'./img/icon_jiaoyi.png',
        page:'Report'
      },{
        name:'财富中心',
        icon:'./img/icon_qiandai.png',
        page:'Fortune'
      },{
        name:'会员资料',
        icon:'./img/icon_huiyuan.png',
        page:'Profile'
      },{
        name:'消息中心',
        icon:'./img/xiaoxi.png',
        page:'Message'
      },{
        name:'客服中心',
        icon:'./img/kefu.png',
        page:'Service'
      }],
      money:788000
    }
  }
  
  // static navigationOptions = ({navigation})=>({
  //   header:{
  //     title:'个人中心',
  //   },
  //   headerStyle: {
  //       backgroundColor: '#0B102A',        
  //   },
  //   headerBackImage:'',
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //       fontWeight: 'bold',
  //       color:'#fff'
  //   },
  //   tabBarLabel: '我的',
  //   tabBarIcon: ({focused}) => {
  //       if (focused) {
  //           return (
  //             <Image style={styles.tabBarIcon} source={require('./img/icon_user.png')}/>
  //           );
  //       }
  //       return (
  //           <Image style={styles.tabBarIcon} source={require('./img/uesr.png')}/>
  //       );
  //   },
  // })

  _keyExtractor = (item, index) => index;

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');    
  }

  _goPage(page){
    this.props.navigation.navigate(page);
  }

  render(){
    return(
      <View style={styles.container}> 
          <ImageBackground source={require('./img/bg.png')} style={styles.userHead}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Image source={require('./img/qq.png')} style={{height:44,width:44}}></Image>
              </View>
              <View>
                <Text style={{color:'#fff',fontSize:10}}>小豆芽</Text>
                <Image source={require('./img/vip.png')} style={{height:11,width:30,marginTop:10}}></Image>
              </View>
            </View>
            <View style={{flex:1}}>
                <Text style={{color:'#fff',fontSize:15}}>总资产(元)</Text>
                <Text style={{color:'#CCAC67',fontSize:18}}>{this.state.money}</Text>
            </View>            
          </ImageBackground>
          
          <View style={styles.shortLink}>            
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('Finance')}>
              <Image source={require('./img/icon_cunkuan.png')} style={styles.linkImg}></Image>
              <Text style={styles.linkText}>存款</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8}  onPress={()=>this.props.navigation.navigate('Drawing')}>
              <Image source={require('./img/icon_tikuan.png')}  style={styles.linkImg}></Image>
              <Text style={styles.linkText}>取款</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8}  onPress={()=>this.props.navigation.navigate('Transfer')}>
              <Image source={require('./img/icon_zhuanzhagn.png')}  style={styles.linkImg}></Image>
              <Text style={styles.linkText}>转账</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={this.state.menus}
            extraData={this.state}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          /> 
          <View>
            <Button onPress={this._signOutAsync} title="退出"></Button>
          </View>
      </View>
    );
  }

  _renderItem = ({item})=>(
      <ListItem 
        page={item.page}
        title={item.name}
        icon={item.icon}
        navigate={this.props.navigation.navigate}
      />
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EEEEEE',
    flex:1
  },
  list:{
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    width:18,
    height:18,
    marginRight:5
  },
  arrow:{
    width:8,
    height:15
  },
  title:{
    fontSize:14,
    color:'#666666',
    flex:1
  },
  tabBarIcon:{
    width:24,
    height:24
  },
  homeHead:{
    display:'flex',
    height:44,
    backgroundColor:'#0B102A',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  homeHeadLeft:{
    width:44,
    height:44,
    alignItems:'center',
    justifyContent:'center',
  },
  homeHeadRight:{
    width:44,
    height:44,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  homeHeadTitle:{
    flex:1,
    color:'#fff',
    textAlign:'center'
  },
  userHead:{
    width:'100%',
    height:76,
    backgroundColor:'#0B102A',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  },
  header:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  avatar:{
    width:44,
    height:44,
    marginRight:6
  },
  shortLink:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    paddingTop:16,
    paddingBottom:16,
    paddingLeft:30,
    paddingRight:30,
    marginBottom:10
  },
  linkItem:{
    width:46,
    textAlign:'center'
  },
  linkImg:{
    width:46,
    height:46
  },
  linkText:{
    color:'#212121',
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center'
  }
})