import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export const Tasks = ({task, onRemove}) => {
const press = () => {
    console.log('press', task.id);
}

    return (
        <View style={styles.taskStyle}>
            <Text >
                {task.title}
            </Text>
            <AntDesign 
                style={styles.button} 
                name="closecircleo" 
                size={20}
                color='black'
                onPress={() => {onRemove(task.id)}}
            />
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

})