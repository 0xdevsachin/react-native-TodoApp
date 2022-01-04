import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
const TaskLists = ({task, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.TaskView}>
      <Text style={styles.TaskText}>{task}</Text>
      <Text style={styles.TaskText}
      onPress={() => {
          deleteItem(task)
      }}
      style={{color : 'red', fontSize : 25, fontWeight : 'bold'}}>x</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TaskView: {
    minHeight: 60,
    padding: 20,
    borderColor: '#f4f5f7',
    backgroundColor : '#f4f5f7',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TaskText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    
  },
});

export default TaskLists;
