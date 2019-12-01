import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {
    const greeting = <Text style =  {styles.textStyle2}>My name is Jomarcel</Text>;
    return <View>
        <Text style = {styles.textStyle}>Getting started with react native</Text>
        {greeting}
    </View> 

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2:{
        fontSize:20
    }

});

export default ComponentsScreen;
