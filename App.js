
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Head} from './src/Head.js'
import { AddTask } from './src/AddTask.js';
import { Tasks } from './src/Tasks.js';

export default function App() {
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState('')

  const addTask = title => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        completed: false
      }
    ])
  }
  const onClickButton = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? {id: task.id, title: task.title, completed: !task.completed} : 
      {id: task.id, title: task.title, completed: task.completed}))
  } 
  const onEdit = (id, newTitle) => {
    setTasks(prev => prev.map(task => task.id === id ? {id: task.id, title: newTitle, completed: task.completed} : 
      {id: task.id, title: task.title, completed: task.completed}))
  }

  const removeTask = id => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }
  return (
    <View>
      <View>
        <Head search={search} setSearch={setSearch}/>
      </View>
      <View style={styles.container}> 
        <AddTask onSubmit={addTask}/>
        <ScrollView>
            {tasks.filter(task => task.title.indexOf(search) !== -1).map(task => {
              return <Tasks key={task.id} task={task} onRemove={removeTask} onClickButton={onClickButton} onEdit={onEdit}/>
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
