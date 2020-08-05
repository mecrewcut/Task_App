
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Head} from './src/Head.js'
import { AddTask } from './src/AddTask.js';
import { Tasks } from './src/Tasks.js';

export default function App() {
  const [tasks, setTasks] =   useState([])

  const addTask = title => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      }
    ])
  }

  const removeTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <View>
      <View>
        <Head />
      </View>
      <View style={styles.container}>
        <AddTask onSubmit={addTask}/>
        <ScrollView>
            {tasks.map(task => {
              return <Tasks key={task.id} task={task} onRemove={removeTask}/>
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:15
  }
});
