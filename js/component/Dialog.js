import React, {PureComponent} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
}
    from 'react-native'
import ButtonYellow from '../component/ButtonYellow'
import GlobalStyle from '../GlobalStyle'
export default class Dialog extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            show:0
        }
    }
    
    componentDidMount(){
        this.props.onRef(this)
    }

    _onPress = ()=>{
        this.setState({
            show:0
        })        
    }

    hide=()=>{
        this.setState({
            show:0
        })   
    }

    show=()=>{
        this.setState({
            show:1
        })   
    }
    

    render() {
        let title;
        if(this.props.title){
            title = <Text style={styles.modalTitle}>{this.props.title}</Text>
        }
        return (
            <TouchableOpacity style={[this.props.style,this.state.show==1?styles.modal:'']} onPress={()=>this.hide()} activeOpacity={1}>
                <View style={styles.modalDialog}>                
                    {title}
                    <View style={styles.modalBody}>
                        {this.props.content}                
                    </View>

                    <View style={{width:325}}>
                        <ButtonYellow title="关闭" onPress={()=>this._onPress()}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    modal: {
        flex:1,
        display:'none',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,.75)',
        height:'100%',
        width:'100%',
        position:'absolute',
        zIndex:100
    },
    modalTitle:{
        color:'#0B102A',
        textAlign:'center',
        fontSize:18,
        fontWeight:'700',
        paddingTop:15,
        paddingBottom:15
    },  
    modalDialog:{
        backgroundColor:'#fff',
        marginLeft:42,
        marginRight:42,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        width:325,
        overflow:'hidden'
    },
    modalBody:{
        //flex:1
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20
    },
    show:{
        display:'flex'
    },
    hide:{
        display:'none'
    }
});