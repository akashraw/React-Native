import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoTask from './TodoTask';

function TodoList() {
  //
  const [task, setTask] = useState({id:Number, val:''});
  const [taskItem, setTaskItem] = useState([{id: Number, value:''}]);

  const addItem = () => {
    Keyboard.dismiss();
    setTaskItem([{...taskItem, task}]);
    setTask(null)
    console.log(taskItem)
  };

  const delItem = index => {
    let taskCopy = [...taskItem];
    taskCopy.splice(index, 1);
    setTaskItem(taskCopy);
  };
  const Item = ({item, onPress}) => {
    <View style={styles.taskWrapper}>
      <View style={styles.tasks}>
        <View style={styles.circle}></View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity style={styles.taskRight}>
        <Pressable onPress={() => delItem(index)}>
          <Icon name="trash" color={'#E97777'} size={20} />
        </Pressable>
      </TouchableOpacity>
    </View>;
  };
  const renderItems = ({item}) => {
    return <Item item={item}></Item>;
  };

  return (
    <View style={styles.bg}>
      <View style={styles.contentWrapper}>
        <Text style={styles.head}>Todo List</Text>
        <View>
          <FlatList data={taskItem} renderItem={renderItems}
           keyExtractor={(item)=>item.keys}
           />
        </View>

        {/* <View>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                // onPress={() => navigation.push('Details')}>
                // onPress={() => delItem(index)}
              >
                <TodoTask keys={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View> */}
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
    backgroundColor: '#CFD2CF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#CFD2CF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  taskWrapper: {
    backgroundColor: '#CFD2CF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tasks: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  taskRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default TodoList;
