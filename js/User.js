import React, {Component} from 'react';
import {Text, View,Button,StyleSheet,FlatList,TouchableOpacity,AsyncStorage,Image,ImageBackground,Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalStyle from './GlobalStyle'

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'',
      icon:this.props.icon
    }
  }

  render(){
    return(
      <TouchableOpacity onPress={()=>{this.props.onPress()}} activeOpacity={0.8}>
        <View style={styles.list}>
          <Image source={this.props.icon} style={styles.icon} resizeMode = {'contain'}>
          </Image>
          <Text style={styles.title}>
            {this.props.title}
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
      user:{
        "id": 0,
        "name": "未登录",
        "avatar": "***",
        "phone": "***********",
        "real_name": "未登录",
        "money": "0",
        is_bind_ali: 0,//是否绑定支付宝
        ali_user:"",//支付宝账号
        is_bind_withdrawals:0,//是否绑定提款密码
        "created_at": "2018-11-19 14:23:27",
        "updated_at": "2019-01-23 12:28:51"
      },
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
      height:0
    }
  }

  componentWillMount(){
    this._getUser()
  }

  _goPage(page){
    if(!this.state.user.id){
      Alert.alert('提示','请先登录',[        
        {text: '取消', style: 'cancel'},
        {text: '登录', onPress: () => this.props.navigation.navigate('Login')},
      ],)
      return
    }
    this.props.navigation.navigate(page);
  }

  _getUser=()=>{
    let _this = this;
    AsyncStorage.getItem('user',(err,result)=>{
      if(result==null){
        return false
      }
      _this.setState({
        user:JSON.parse(result)
      })
    })
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
                <Text style={[GlobalStyle.fz18,{color:'#ffffff'}]}>{this.state.user.name}</Text>
                <Image source={require('./img/vip.png')} style={{height:11,width:30,marginTop:10}}></Image>
              </View>
            </View>
            <View style={{flex:1}}>
                <Text style={{color:'#fff',fontSize:15}}>总资产(元)</Text>
                <Text style={{color:'#CCAC67',fontSize:18}}>{this.state.user.money}</Text>
            </View>            
          </ImageBackground>
          
          <View style={styles.shortLink}>            
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8} onPress={()=>this._goPage('Finance')}>
              <Image source={require('./img/icon_cunkuan.png')} style={styles.linkImg}></Image>
              <Text style={styles.linkText}>存款</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8}  onPress={()=>this._goPage('Drawing')}>
              <Image source={require('./img/icon_tikuan.png')}  style={styles.linkImg}></Image>
              <Text style={styles.linkText}>取款</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}  activeOpacity={0.8}  onPress={()=>this._goPage('Transfer')}>
              <Image source={require('./img/icon_zhuanzhagn.png')}  style={styles.linkImg}></Image>
              <Text style={styles.linkText}>转账</Text>
            </TouchableOpacity>
          </View>

          <ListItem title="交易记录" icon={require('./img/icon_jiaoyi.png')} page="Report" onPress={()=>{this._goPage('Report');}}/>
          <ListItem title="财富中心" icon={require('./img/icon_qiandai.png')} page="Fortune" onPress={()=>{this._goPage('Fortune');}}/>
          <ListItem title="会员资料" icon={require('./img/icon_huiyuan.png')} page="Profile" onPress={()=>{this._goPage('Profile');}}/>
          <ListItem title="消息中心" icon={require('./img/xiaoxi.png')} page="Message" onPress={()=>{this._goPage('Message');}}/>
          <ListItem title="客服中心" icon={require('./img/kefu_active.png')} page="Service" onPress={()=>{this._goPage('Service');}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EEEEEE',
    flex:1
  },
  list:{
    height:48,
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
    height:15,
    opacity:0.4
  },
  title:{
    fontSize:14,
    color:'#212121',
    fontWeight:'300',
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
    height:120,
    backgroundColor:'#0B102A',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
  },
  header:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    height:120
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
  },
  cancel:{
    color:'#999999'
  }
})