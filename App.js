import React ,{Component} from 'react';
import {Text,View,Image,StyleSheet,Button,Alert,ScrollView,FlatList,SectionList} from 'react-native';

class Greeting extends Component {
  render(){
    return(
      <View style={{alignItems:'center',height:100,backgroundColor:'#eeeeee',borderBottomColor:'#ccc',borderBottomWidth:1,flex:1}}>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  }
}


class FooterNav extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',textAlign:'center'}}>
        <View style={{width:88,height:88,backgroundColor:'#ccc',borderRadius:5}}>
          <Text>首页</Text>
        </View>
        <View style={{width:88,height:88,backgroundColor:'#ccc',borderRadius:5}}>
          <Text>在线客服</Text>
        </View>
        <View style={{width:88,height:88,backgroundColor:'#ccc',borderRadius:5}}>
          <Text>优惠活动</Text>
        </View>
        <View style={{width:88,height:88,backgroundColor:'#ccc',borderRadius:5}}>
          <Text>登入</Text>
        </View>
      </View>
    )
  }
}


class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShowingText:true
    }

    setInterval(()=>{
      this.setState(previousState =>{
        return {
          isShowingText:!previousState.isShowingText
        }
      })
    },100)
  }
  render(){
    // let styles = {
    //   red:{
    //     color:'#ff3300'
    //   },
    //   blue:{
    //     color:'#ffff00'
    //   }
    // }
    // if(!this.state.isShowingText){
    //   return null;
    // }
    return(
      <Text style={!this.state.isShowingText?styles.red:styles.blue}>{this.props.text}</Text>
    )
  }
}

var REQUEST_URL =  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class HelloWorldApp extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      data:[],
      loaded:false
    }
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
    .then(res=> res.json())
    .then(responseData =>{
      this.setState({
        data:this.state.data.concat(responseData.movies),
        loaded:true
      })
    })
  }
  _onPress(){
    Alert.alert('你点击了按钮');
  }
  _longPress(){
    Alert.alert('长按操作');
  }

  renderLoadingView(){
    return(
      <View>
          <Text>正在加载电影数据...</Text>
      </View>
    )
  }

  renderMovie({ item }) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }

  render (){
    if(!this.state.loaded){
      return this.renderLoadingView();      
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
      ></FlatList>
    )
  }
}

const styles = StyleSheet.create({
  blue:{
    color:'blue'
  },
  red:{
    color:'red'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    textAlign:'left',
    marginBottom:10
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
})