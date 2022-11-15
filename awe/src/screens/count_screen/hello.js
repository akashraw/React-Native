import * as React from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';

const Hello = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello dsdgdfg</Text>
      <Button
        title="Start Counting"
        onPress={() => navigation.push('Count')}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C4048',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hello;
