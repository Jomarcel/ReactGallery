import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = (props) =>{
    console.log(props.title);

return(
<View>
    
    <ImageDetail title = "Forest" image  ={require('../../assets/forest.jpg')} score = "5"/>
    <ImageDetail tile = "Beach" image  ={require('../../assets/beach.jpg')} score = "2"/>
    <ImageDetail title = "Mountain" image  ={require('../../assets/mountain.jpg')} score =  "9"/>

    
</View>
)
    
};

export default ImageScreen