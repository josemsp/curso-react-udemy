import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
        return { counter: state.counter + action.payload };
        case 'decrease':
        return { counter: state.counter - action.payload };
        default:
            return { counter: state.counter };
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const {counter} = state;

    return (
        <View>
            <Button onPress={()=> dispatch({ type: 'increase', payload: 1 })} title="Increase" />
            <Button onPress={()=> dispatch({ type: 'decrease', payload: 1 })} title="Decrease" />
            <Text>Courrent Count:</Text>
            <Text>{counter}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;