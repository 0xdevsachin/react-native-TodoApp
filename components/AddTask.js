import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
} from 'react-native';
const AddTask = ({addItems}) => {
  const [text, setText] = useState('');
  const onChange = value => {
    setText(value);
  };
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.Addtask}
        placeholder="Enter Task"
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.Taskbtn} onPress={() =>{
            addItems(text);  
        }}>
        <Text style={styles.btn}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    inputView:{
        padding : 10
    },
  Addtask: {
    height: 60,
    fontSize: 18,
    borderBottomWidth: 2,
  },
  Taskbtn: {
    height: 50,
    fontSize: 18,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    marginTop : 10
  },
  btn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AddTask;
