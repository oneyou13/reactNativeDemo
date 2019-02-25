import React, {Component} from 'react';
import {Text, View ,StyleSheet,Image,TouchableOpacity,ImageBackground,AsyncStorage,Animated} from 'react-native';
import {fetchData} from '../config'

class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }

    render(){
        return(
            <TouchableOpacity style={styles.siderMenu} onPress={()=>this.props.onPress()}>
                <Image source={this.props.icon} style={{width:16}}></Image>
                <View style={styles.titleBox}>
                    <Text style={styles.siderText}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

export default class SiderMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{
                "id": 0,
                "name": "---",
                "avatar": "---",
                "phone": "-----",
                "real_name": "---",
                "money": "----",
                is_bind_ali: 0,//是否绑定支付宝
                ali_user:"",//支付宝账号
                is_bind_withdrawals:0,//是否绑定提款密码
                "created_at": "2018-11-19 14:23:27",
                "updated_at": "2019-01-23 12:28:51"
            },
            show:false
        }
    }

    componentWillMount(){
        this.props.onRef(this);
        this._getUser();
    }

    _logOut = async() => {
        await AsyncStorage.clear();
        this.props.navigate('Auth');
    }
    
    _hide = () =>{
        this.setState({
            show:false
        })
    }

    _show = () =>{
        this.setState({
            show:true
        })
    }

    _goPage = (page)=>{
        this.props.navigate(page);
    }

    _getUser =()=>{        
        let _this = this;
        fetchData({
            url:"/api/user",
            method:"GET",
            data:{},
            needToken:true
        },{
            success(response){
                //alert(JSON.stringify(response))  
                if(response.status_code){
                    alert(response.message)
                }else{
                    _this.setState({
                        user:response
                    })
                    AsyncStorage.setItem('user',JSON.stringify(response));
                }
            },
            error(error){
                alert(error)
            }
        });
    }

    render(){
        return(
            <TouchableOpacity style={[styles.siderContainer,{transform:this.state.show?[{translateX:0}]:[{translateX:600}]}]} activeOpacity={1} onPress={()=>this._hide()}>
                <View style={styles.sider}>
                    <ImageBackground style={styles.siderHead} source={require('../img/img.png')}>
                        <View style={styles.siderUser}>
                            <View style={styles.siderUserItem}><Text style={styles.siderWhite}>用户账户:</Text><Text  style={styles.siderGold}>{this.state.user.name}</Text></View> 
                            <View style={styles.siderUserItem}><Text style={styles.siderWhite}>平台金额:</Text><Text  style={styles.siderGold}>{this.state.user.money}</Text></View> 
                        </View>
                        <TouchableOpacity style={styles.siderBtn} activeOpacity={0.9} onPress= { this._logOut }>
                            <Text style={{color:'#fff',fontSize:10}}>退出当前账户</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View>
                        <MenuItem title="真人视讯" icon={require('../img/icon_zhenrnn.png')} onPress={()=>this._goPage('VideoGame')} />
                        <MenuItem title="电子游戏" icon={require('../img/icon_dianziyouxi.png')} onPress={()=>this._goPage('EGame')}  />
                        <MenuItem title="优惠活动" icon={require('../img/icon_chouma.png')} onPress={()=>this._goPage('Activity')}  />
                        {/* <MenuItem title="最近浏览" icon={require('../img/icon_lishiliulan.png')} onPress={()=>this._goPage('User')}  /> */}
                        <MenuItem title="游戏公告" icon={require('../img/icon_youxi(1).png')} onPress={()=>this._goPage('User')}  />
                        <MenuItem title="留言反馈" icon={require('../img/icon_liuyan.png')} onPress={()=>this._goPage('Service')}  />
                        <MenuItem title="消息记录" icon={require('../img/icon_xiaoxi(1).png')} onPress={()=>this._goPage('Message')}  />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    siderContainer:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.1)',
        display:'flex',
        height:'100%',
        width:'100%',
        position:'absolute',
        zIndex:10,
        top:0,
        left:0,
        transform: [{translateX:600}]
    },
    sider:{
        flex:1,
        height:'100%',
        width:'60%',
        backgroundColor:'#050815',
      },
      siderHead:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:105,
        paddingLeft:15
      },
      siderUser:{
        flex:1,
        display:'flex',
        flexDirection:'column'
      },
      siderUserItem:{
        display:'flex',
        flexDirection:'row',
        marginTop:5,
        marginBottom:5
      },
      siderWhite:{
        color:'#fff'
      },
      siderGold:{
        color:'#CCAC67'
      },
      siderMenu:{
        display:'flex',
        flexDirection:'row',
        height:40,
        alignItems:'center',
        paddingLeft:29
      },
      siderBtn:{
        backgroundColor:'#CCAC67',
        height:38,
        width:68,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
      },
      siderIcon:{
    
      },
      titleBox:{
        flex:1,
        height:40,
        borderBottomColor:'#464059',
        borderBottomWidth:1,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:10
      },
      siderText:{
        fontSize:15,
        color:'#CCAC67',
      }
})