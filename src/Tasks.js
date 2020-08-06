import React, { useState } from 'react'
import { View, TextInput, StyleSheet, CheckBox, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import _default from 'expo/build/Notifications/Notifications';
import moment from 'moment'

export const Tasks = ({ task, onRemove, onClickButton, onEdit }) => {
    const [edit, setEdit] = useState(false)
    const [textEdit, setTextEdit] = useState(task.title)
    let time = moment(`/Date(${task.id})+0400/`).format('MMMM Do YYYY, h:mm:ss a')
    return (
        <View style={styles.container}>
            <View style={styles.taskStyle}>
                <View style={styles.boxLeft}>
                    <CheckBox
                        value={task.completed}
                        onValueChange={() => onClickButton(task.id)}
                    />
                    <TextInput
                        editable={edit}
                        style={
                            edit
                                ? styles.show
                                : ''
                        }
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
                        onPress={() => {
                            setEdit(!edit);
                            onEdit(task.id, textEdit);
                        }}
                    />
                    <AntDesign
                        style={styles.button}
                        name="closecircleo"
                        size={20}
                        color='black'
                        onPress={() => { onRemove(task.id) }}
                    />
                </View>
            </View>
            <View>
                <Text style={{fontSize: 10}}>
                    {time}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'lightblue',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    taskStyle: {
        flexDirection: 'row',
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
    },
    show: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        fontWeight: 'bold'
    }
})