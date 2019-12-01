import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({navigation}) => {

  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button onPress = {() => navigation.navigate('Components')} title = "Go to componenets demo"/>
    <TouchableOpacity onPress = {() => navigation.navigate('List')} >
      <Text>Go to list demo</Text>
    </TouchableOpacity>
    <Button onPress = {() => navigation.navigate('Image')} title = "Go to Image demo"/>


    <Button onPress = {() => navigation.navigate('Counter')} title = "Go to counter demo"/>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
