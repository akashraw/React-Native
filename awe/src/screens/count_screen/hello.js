import * as React from 'react';
import {Button, Text, View} from 'react-native';
import Count from './count';

const Hello = ({navigation}) => {
    return(
        <View>
        <Text>Hello dsdgdfg</Text>
        <Button title='Start Counting' onPress={()=>navigation.push('Count')}></Button>
        </View>
    
        
    )
};

export default Hello;
