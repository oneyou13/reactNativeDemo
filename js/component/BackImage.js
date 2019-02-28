import React, {Component} from 'react';
import {Image} from 'react-native';

export default class BackImage extends Component{
    render(){
        return (
            <Image source={require('./img/icon_arrow.png')} style={{height:32,width:32}}></Image>
        )
    }
}