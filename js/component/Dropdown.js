import React, {PureComponent} from 'react'
import {
    StyleSheet,
    Image
}
    from 'react-native'

export default class Dropdown extends PureComponent {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <Image source={require('./img/icon_arrow.png')} style={styles.checkImage}/>
        );
    }
}
const styles = StyleSheet.create({
    checkImage: {
        marginRight: 5,
        height: 15,
        width: 15,
        transform: [{"rotate":"-90deg"}]
    }
});