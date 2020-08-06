import React, {useState} from 'react'
import {View, TextInput, StyleSheet, CheckBox} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export const Tasks = ({task, onRemove, onClickButton, onEdit}) => {
    const [edit, setEdit] = useState(false)
    const [textEdit, setTextEdit] = useState(task.title)
    
    // const ref = React.createRef
    // const onFocus = () => {
    //     ref.focus()
    // }

    return (        
        <View style={styles.taskStyle}>
            <View style={styles.boxLeft}>
                <CheckBox
                    value={task.completed}
                    onValueChange={() => onClickButton(task.id)}
                />
                <TextInput 
                    editable={edit}
                    // ref={ref}
                    // style={inputStyle}
                    value={textEdit}
                    onChangeText={setTextEdit}
                />          
            </View>
            <View style={styles.boxRight}>
                <AntDesign 
                    name="edit" 
                    size={24} 
                    color="black" 
                    style={styles.edit}
                    onPress={() => {setEdit(!edit); onEdit(task.id, textEdit)}}
                />   
                <AntDesign 
                    style={styles.button} 
                    name="closecircleo" 
                    size={20}
                    color='black'
                    onPress={() => {onRemove(task.id)}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    taskStyle: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'lightblue',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    boxLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    boxRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    edit: {
        marginRight: 10
    }
})