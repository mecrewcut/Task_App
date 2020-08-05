import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Head = () => {
    return (
        <View style={styles.head}>
            <Text style={styles.text}>
                Task App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    head: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'lightblue',
        paddingBottom: 20,
        paddingLeft: 10
    },
    text: {
        fontSize: 25
    }
})