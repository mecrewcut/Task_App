import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'; 

export const Head = ({search, setSearch}) => { 
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.head}>
            <Text style={styles.text}>
                Task App
            </Text>
            <TextInput 
                style={!isVisible ? {display: 'none'} : {backgroundColor: 'white', width: '60%', height: 30, textAlignVertical:'center'}}
                value={search}
                onChangeText={setSearch}
                placeholder='Введите фразу для поиска...'
            />   
            <Feather 
                name="search" 
                size={24} color="black" 
                onPress = {() => {setIsVisible(!isVisible); setSearch('')}}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    head: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'lightblue',
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight:10
    },
    text: {
        fontSize: 25
    },

})