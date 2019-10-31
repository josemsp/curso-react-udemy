import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend 1'},
        { name: 'Friend 2'},
        { name: 'Friend 3'},
        { name: 'Friend 4'},
        { name: 'Friend 5'},
        { name: 'Friend 6'},
        { name: 'Friend 7'},
        { name: 'Friend 8'},
        { name: 'Friend 9'},
        { name: 'Friend 10'}
    ];

    return(
        <FlatList
            style={style.textStyle}/*
            horizontal
            showsHorizontalScrollIndicator={false}*/
            keyExtractor={friends => friends.name }
            data={friends}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 25
    }
});

export default ListScreen;