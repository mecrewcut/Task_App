import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native'

export const AddTask = ({onSubmit}) => {
    const [add, setAdd] = useState('')

    const press = () => {
        if (add.trim()){
            onSubmit(add)
            setAdd('')
        } else Alert.alert('Вы не ввели задачу!')
    }

    return (
        <View style={addStyle.container}>
            <TextInput 
            style={addStyle.input}
            onChangeText={setAdd}
            value={add}
            placeholder='Введите название...' />
            <Button title='Add' onPress={press}/>
        </View>
    )
}
const addStyle = StyleSheet.create({
    input: {
        borderBottomColor: 'lightblue',
        borderBottomWidth: 3,
        width: '83%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    }
})