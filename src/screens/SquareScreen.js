import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
    
    switch(action.type){
        case 'change_red':
            let redAmount = state.red + action.payload;
            return redAmount > 255 || redAmount < 0 ? state : { ...state, red: redAmount };
        case 'change_green':
            let greenAmount = state.green + action.payload;
            return greenAmount > 255 || greenAmount < 0 ? state : { ...state, green: greenAmount };
        case 'change_blue':
            let blueAmount = state.blue + action.payload;
            return blueAmount > 255 || blueAmount < 0 ? state : { ...state, blue: blueAmount };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return(
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                color="Red"
            />            
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
                color="Green"
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                color="Blue"
            />
            <View
                style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }}
            />
        </View>
    ); 
};

const styles = StyleSheet.create({});

export default SquareScreen;