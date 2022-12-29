import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

const Focus = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    label={'What do you want to focus on today?'}
                    value={text}
                    placeholder={'Type your Focus Item'}
                    onChangeText={(text) => setText(text)}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

export default Focus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 24,
    },
    inputContainer: {
        flex: 0.5,
        justifyContent: 'flex-start',
        padding: 20,
    },
});
