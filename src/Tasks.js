import React, {useState} from 'react'
import {View, Text, StyleSheet, CheckBox} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export const Tasks = ({task, onRemove}) => {
    const [checkBox, setCheckBox] = useState(false)
    
    return (        
        <View style={styles.taskStyle}>
            <View style={styles.boxLeft}>
                <CheckBox 
                value={checkBox}
                onValueChange={(newValue) => setCheckBox(newValue)}
                />
                <Text >
                    {task.title}
                </Text>
            </View>
            <View style={styles.boxRight}>
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
    }
})