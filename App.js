import React, {useState} from 'react';
import {View, Text, FlatList, Alert, StyleSheet} from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskLists from './components/TaskLists';
const App = () => {
  const [items, setItems] = useState([])
  const DeleteTask = (task) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item != task)
    });
    Alert.alert("Success", "Item Removed")
  }
  const Addtasks = (task) =>{
    if(!task){
      Alert.alert("Error", "Please Enter Tasks")
    }else{
      setItems(prevItems =>{
        return [...prevItems, task]
      })
    }
  }
  return (
    <View>
      <Header title="Add Task" />
      <AddTask addItems={Addtasks} />
      {
        items.length 
        ?
        <FlatList
      data={items}
      renderItem={({item}) => <TaskLists deleteItem={DeleteTask} task={item} />}
      />
      :
      <View style={styles.empty}>
        <Text style={{color : 'black', fontWeight : 'bold', fontSize : 20}}>Your Task's will Appear Here 🚀</Text>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  empty : {
    justifyContent : 'center',
    alignItems : 'center',
    height : 300,
  }
})

export default App;
