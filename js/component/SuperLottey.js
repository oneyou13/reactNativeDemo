import React, {Component} from 'react';
import {View, StyleSheet,Image,Animated,Easing,Alert} from 'react-native';
import {fetchData} from '../config'

//超级大奖
class ScrollNumItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      fadeInOpacity: new Animated.Value(0)
    }
  }

  componentWillMount(){
    this.startAnimate()
  }

  componentWillUpdate(){
    this.startAnimate()
  }

  startAnimate=()=>{
    Animated.timing(this.state.fadeInOpacity, {
        toValue: -28*this.props.num, // 目标值
        duration: 1000, // 动画时间
        delay:10 * Number(this.props.index),
        easing: Easing.linear, // 缓动函数
        useNativeDriver: true
    }).start()  
  }

  render(){
    return (
      <View style={styles.lotItem}>
        <Animated.View style={{transform: [{translateY:this.state.fadeInOpacity}]}}>
          <Image source={require('../img/num.png')}></Image>
        </Animated.View>
      </View>
    )
  }
}

export default class SuperLottey extends Component{
    constructor(props){
      super(props)
      this.state ={
        numbers:[0,0,0,0,0,0,0,0,0,0]
      }
      this.lotteyTimer = null
    }
  
    componentWillMount(){
        this._gerSuperLottey()
        this._startLottyTimer()
    }

    componentWillUnmount(){
        this.lotteyTimer = null
        clearInterval(this.lotteyTimer)
    }
    
    _gerSuperLottey=()=>{
      let _this = this;
    //   fetchData({
    //       url:'/bonus_pool',
    //       method:'get',
    //       data:{}
    //   },{
    //       success(response){
    //         _this.setState({
    //           superLottey:response.split('')
    //         })
    //       },
    //       error(error){
    //         console.warn(JSON.stringify(error))
    //       }
    //   })
  
      let newnumer = Math.ceil((Math.random()*9+1) * 1000000000);
      let newnumerArr = newnumer.toString().split('');
      let newnumerArr2 = newnumerArr.reverse();
      let newArr = [],len = 10;
      //console.warn(newnumer);
      for(var i=0;i<len;i++){        
        newArr.push(newnumerArr[i])     
        if((i+1)%3==0){
            newArr.push(',')
        }
      }
      _this.setState({
        numbers:newArr.reverse()
      })

    }
  
    _startLottyTimer=()=>{
      let _this=this;
      this.lotteyTimer = setInterval(() => {
        _this._gerSuperLottey()
      }, 5000);
    }
  
    render(){
      let arr = this.state.numbers;
      let arr2 = []
      arr.map((item,index)=>{          
        if(item==','){
          arr2.push(<View style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end',width:16}} key={index}><Image source={require('../img/,.png')} style={{width:16}}></Image></View>) 
        }else{
          arr2.push( <ScrollNumItem num={item} index={index} />)
        }
      })
      return (      
        <View style={styles.superLottey}>
          {arr2}
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    lotItem:{
        width:16,
        height:27,
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        overflow:'hidden',
        marginLeft:5,
        marginRight:5
    },
    superLottey:{
        display:'flex',
        flexDirection:'row',
        marginLeft:40,
        marginRight:50,
        marginTop:8
    }
  })