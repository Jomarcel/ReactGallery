import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () =>{
    const friends = [
        {name: 'Friend #1' , key: '1'},
        {name: 'Friend #2' , key: '2'},
        {name: 'Friend #3' , key: '3'},
        {name: 'Friend #4' , key: '4'},
        {name: 'Friend #5' , key: '5'},
        {name: 'Friend #6' , key: '6'},
        {name: 'Friend #7' , key: '7'},
    ]
    return <FlatList  keyExtractor = {(friend) => friend.key} data ={friends} renderItem={({item}) =>{
    return <Text style = {style.textStyle}>{item.name} - Age {item.key}</Text>
    }}></FlatList>

    
}

const style = StyleSheet.create({

  textStyle:{
    marginVertical: 50
  }
})

export default ListScreen;