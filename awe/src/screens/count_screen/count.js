import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const Count = ({navigation}) => {
  const [Count, setCount] = useState(0);
  function Counting() {
    setCount(Count + 1);
  }
  return (
    <View style={styles.container}>
      <Text>You have clicked {Count} times:</Text>
      <Button onPress={Counting} title="Press me"></Button>
      <Button title="Back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Count;
