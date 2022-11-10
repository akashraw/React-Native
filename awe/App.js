import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Count from './src/screens/count_screen/count';
import Hello from './src/screens/count_screen/hello';

const Stack= createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Count"
          component={Count}
          options={{title: 'Counting Presses'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
