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

function TodoList({navigation}) {
  // //Data object
  // const DATA = [{tasks: '1'}, {tasks: 'hello'}];
  //
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const addItem = () => {
    Keyboard.dismiss();
    if (!task) return alert('Please dont leave the task empty');
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const delItem = index => {
    let taskCopy = [...taskItem];
    taskCopy.splice(index, 1);
    setTaskItem(taskCopy);
  };
  const Item = ({item, index}) => {
    return (
      <View style={styles.taskWrapper}>
        <View style={styles.tasks}>
          <View style={styles.circle}></View>
          <Text style={styles.text}>{item}</Text>
        </View>
        <TouchableOpacity
          key={index}
          onPress={() => delItem(index)}
          style={styles.taskRight}>
          <Icon name="trash" color={'#E97777'} size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderItems = ({item, index}) => {
    return <Item item={item} index={index}></Item>;
  };

  return (
    <View style={styles.bg}>
      <View style={styles.contentWrapper}>
        <Text style={styles.head}>Todo Lists</Text>
        <View style={styles.second}>
          <FlatList data={taskItem} renderItem={renderItems} />
        </View>
      </View>
      <View style={styles.writeTask}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.dir}>
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
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#393E46',
    flex: 1,
  },
  second: {
    maxHeight: '88%',
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
    flex: 1,
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#787A91',
    borderRadius: 60,
    borderColor: '#334756',
    borderWidth: 1,
    width: 250,
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#787A91',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#334756',
    borderWidth: 1,
  },
  dir: {
    flexDirection: 'row',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskWrapper: {
    backgroundColor: '#787A91',
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
