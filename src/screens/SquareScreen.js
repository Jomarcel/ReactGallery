import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import ColourCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10
const SquareScreen = ({color}) => {
    const [red, setRed] = useState (0);
    const [blue, setBlue] = useState (0);
    const [green, setGreen] = useState (0);

    const setColor = (color, change)  =>{
      // color === 'red', 'green', 'blue'
      //change === + 15, -15
      switch(color){
        case 'red':
          red + change > 255 || red + change < 0 ? null: setRed (red + change)
            return;

        case 'green':
            green + change > 255 || green + change < 0 ? null: setRed (green + change)
              return;

        case 'blue':
            blue+ change > 255 || blue + change < 0 ? null: setRed (blue + change)
              return;
              }

              

    };
console.log(red)
    return <View>
    <Text>{color}</Text>
    <ColourCounter 
    color = "red" 
    onIncrease = {() => 
      setColor ('red', COLOR_INCREMENT)} 
    onDecrease = {() => 
      setColor ('red', - 1 * COLOR_INCREMENT)} 
    />
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