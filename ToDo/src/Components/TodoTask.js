import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import delItem from '../Components/TodoList';
function TodoTask(props) {

  return (
    <View style={styles.taskWrapper}>
      <View style={styles.tasks}>
        <View style={styles.circle}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.taskRight}>
        <Pressable >
          <Icon name="trash" color={'#E97777'} size={20} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}
export default TodoTask;

const styles = StyleSheet.create({
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
