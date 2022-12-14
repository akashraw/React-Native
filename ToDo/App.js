import * as React from 'react';
import TodoList from './src/Components/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetail from './src/Components/TaskDetail';
import Controller from './src/Components/Controller';
import TaskSection from './src/Components/TaskSection';
import TodoMap from './src/Components/TodoMap';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Control">
        <Stack.Screen
          name="Controller"
          component={Controller}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ToDoList"
          component={TodoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TodoMap"
          component={TodoMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={TaskDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskSection"
          component={TaskSection}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
