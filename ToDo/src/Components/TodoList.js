import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import TodoTask from './TodoTask';

function TodoList({navigation}) { 
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const addItem = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  const delItem = (index) => {
    let taskCopy = [...taskItem];
    taskCopy.splice(index, 1);
    setTaskItem(taskCopy);
  };
  return (
    <View style={styles.bg}>
      <View style={styles.contentWrapper}>
        <Text style={styles.head}>Todo List</Text>
        <View>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigation.push('Details')}>
                <TodoTask  text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={text => setTask(text)}
          onSubmitEditing={addItem}
        />
        <TouchableOpacity onPress={addItem}>
          <View style={styles.addWrap}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#D8D8D8',
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 15,
  },
  writeTask: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default TodoList;
