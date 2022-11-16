import React from 'react';
import {Button, StyleSheet, SafeAreaView, View} from 'react-native';

function Controller({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bpad}>
        <Button
          onPress={() => navigation.push('ToDoList')}
          title="Todo with FlatList"
        />
      </View>
      <View style={styles.bpad}>
        <Button
          onPress={() => navigation.push('TodoMap')}
          title="Todo with Map"
        />
      </View>
      <View style={styles.bpad}>
        <Button
          onPress={() => navigation.push('TaskSection')}
          title="SectionList"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393E46',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bpad: {
    marginBottom: 20,
  },
});
export default Controller;
