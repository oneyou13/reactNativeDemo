import React,{Component} from "react";
import {View,Text,Button,StyleSheet,Image,TouchableHighlight,FlatList,ImageBackground} from "react-native";
import {baserUrl,fetchData} from './config'
import { ScrollView } from "react-native-gesture-handler";

class MyListItem extends Component{
  render(){
    return(
      <TouchableHighlight onPress={()=>this.props.onPress()} style={styles.item}>
        <Image source={{uri:baserUrl + this.props.img}} style={{height:80}}></Image>
      </TouchableHighlight>
    )
  }
}

export default class Activity extends Component{
    constructor(props){
      super(props);
      this.state = {
        list:[]
      }
    }

    static navigationOptions = {
      tabBarLabel: '优惠',
      tabBarIcon: ({focused}) => {
          if (focused) {
              return (
              <Image style={styles.tabBarIcon} source={require('./img/chouma_active.png')}/>
              );
          }
          return (
              <Image style={styles.tabBarIcon} source={require('./img/chouma.png')}/>
          );
      },
    }


    componentWillMount(){
      this.getActivity()
    }

    _onPress=()=>{
      this.props.navigation.navigate('ActivityDetail')
    }

    getActivity=()=>{
      let _this = this;
      fetchData({
          url:'/api/activity',
          method:'get',
          data:{}
      },{
          success(response){
            console.warn(JSON.stringify(response))
            _this.setState({
              list:response.data
            })
          },
          error(error){
            console.warn(JSON.stringify(error))
          }
      })
    }

    render(){
        return(
          <ImageBackground style={styles.container} source={require('./img/activity_bg.png')} imageStyle={styles.listBg}>
            <FlatList 
              data={this.state.list}
              extraData={this.state}              
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </ImageBackground>
        )
    }

    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        img={item.title_img}
        onPress={()=>this.props.navigation.navigate('ActivityDetail')}
      />
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#0B102A',
    },
    titleContainer:{
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:10,
      paddingRight:10    
    },
    title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#ffffff',
      paddingTop:15,
      paddingBottom:15,
      textAlign:'center'
    },
    banner:{
      height:180,
      backgroundColor:'#333',
      elevation: 5,
      shadowColor:'#333',
      shadowOffset:{
        width:5,height:5
      },
      shadowRadius:5,
      shadowOpacity:1
    },
    tabBarIcon:{
      width:24,
      height:24
    },
    item:{
      marginBottom:30,
      marginLeft:20,
      marginRight:20
    },
    listBg:{
      resizeMode:'contain',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      display:'flex'
    }
  })