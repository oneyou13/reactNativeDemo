import React ,{Component} from 'react';
import PropTypes from 'prop-types'
import {Text,View,Image,StyleSheet,Button,Alert,ScrollView,FlatList,SectionList,NavigatorIOS} from 'react-native';

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

export class HelloWorldAppa extends Component{
  
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
      <View style={{textAlign:'center',width:'100%'}}>
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
          <Button onPress={this._onPress}  title="点击我"/>
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

export default class HelloWorldApp extends React.Component{
  render(){
    return(
      <NavigatorIOS
        initialRoute = {{
          component:FirstPage,//要跳转的板块
          title:"第一页",
          leftButtonTitle:'左边',   // 实例化左边按钮
          onLeftButtonPress:() => {alert('左边')},  // 左边按钮点击事件
          rightButtonTitle:'右边',  // 实例化右边按钮
          onRightButtonPress:() => {alert('右边')} , // 右边按钮点击事件
          //当然图片设置的方式也是一样的，只需要调用 leftButtonIcon 和 'rightButtonIcon` 即可
        }} 
        
        renderScene = {(route,navigator)=>{
          let component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}

        //属性
        // navigationBarHidden={true}      // 隐藏导航栏
        shadowHidden={true}     // 隐藏导航栏下面的阴影
        tintColor='orange'  // 按钮的颜色
        titleTextColor='green'  // 导航栏标题的文字颜色
        translucent={false}     // 决定导航栏是否半透明(注：当不半透明时页面会向下移动导航栏等高的距离,以防止内容被遮盖)
        interactivePopGestureEnabled={false}    // 决定是否启用滑动返回手势
        style={styles.container}// 此项不设置,创建的导航控制器只能看见导航条而看不到界面
                 
      />
      )
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: "Scene " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    );
  }
}

class FirstPage extends Component{
  render(){
      return(
          <View style={styles.container}>
              <TouchableOpacity
                  onPress={()=>{this.props.navigator.push({
                      component:SecondPage,   // 需要跳转的页面
                      title:'跳转的界面'       // 跳转页面导航栏标题
                  })}}
              >
                  <Text style={{backgroundColor:"red"}}>点击 push</Text>
              </TouchableOpacity>

          </View>
      )

  }
}

class SecondPage extends Component{

  render(){
      return(
          <View style={[styles.container ,{backgroundColor:"#333"}]}>
             <TouchableOpacity
                 onPress={()=>{this.props.navigator.pop()}}
             >
                 <Text style={{backgroundColor:"red"}}>点击 pop</Text>
             </TouchableOpacity>
          </View>
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
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    padding:10,
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1,
    paddingLeft:14
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
    color:'#999'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
})