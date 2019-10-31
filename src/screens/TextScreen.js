import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return(
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                style={styles.textInput} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={value => setName(value)}                
            />
            <Text>Your name is {name}</Text>
            { name.length < 5 ? <Text>Menor a 5</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 20,
        borderWidth: 1
    }
});

export default TextScreen;
