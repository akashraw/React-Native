import * as React from 'react';
import TodoList from './src/Components/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetail from './src/Components/TaskDetail';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen
          name="ToDoList"
          component={TodoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={TaskDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
