import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import ColourCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10
const SquareScreen = ({color}) => {
    const [red, setRed] = useState (0);
    const [blue, setBlue] = useState (0);
    const [green, setGreen] = useState (0);
console.log(red)
    return <View>
    <Text>{color}</Text>
    <ColourCounter 
    onIncrease = {() => setRed (red + COLOR_INCREMENT)} 
    onDecrease = {() => setRed (red - COLOR_INCREMENT)} 
    color = "Red" />
    <ColourCounter 
    onIncrease = {() => setGreen (green + COLOR_INCREMENT)} 
    onDecrease = {() => setGreen (green - COLOR_INCREMENT)} 
   
    color = "green" />

    <ColourCounter
    onIncrease = {() => setBlue (blue + COLOR_INCREMENT)} 
    onDecrease = {() => setBlue (blue - COLOR_INCREMENT)} 
    
    color = "blue"  />
    

   <View style = {{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />

    </View>


};
const styles = StyleSheet.create({

  });
  


export default SquareScreen