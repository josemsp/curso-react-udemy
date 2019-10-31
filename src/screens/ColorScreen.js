import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return(
        <View>
            <Button
            title="Add Color"
            onPress={()=>{
                setColors([...colors, randomRGB()]);
            }}
            />
            
            <FlatList
            keyExtractor={item=>item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{height:100, width:100, backgroundColor:item}}/>
            }}
            />
        </View>
    );
};

const randomRGB = () => {
    const Red = Math.floor(Math.random()*256);
    const Green = Math.floor(Math.random()*256);
    const Blue = Math.floor(Math.random()*256);

    return `rgb(${Red},${Green},${Blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;