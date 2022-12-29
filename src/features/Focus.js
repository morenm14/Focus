import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

const Focus = ({ addSubject }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    label={'What do you want to focus on?'}
                    value={text}
                    onChangeText={setText}
                    style={styles.textInput}
                />
                <RoundedButton
                    title="+"
                    size={60}
                    onPress={() => addSubject(text)}
                />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 50,
    },
    textInput: {
        flex: 1,
        marginRight: 15,
    },
});
