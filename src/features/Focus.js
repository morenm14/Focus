import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';
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
        paddingTop: spacing.lg,
        fontSize: fontSizes.lg,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: spacing.md,
        marginTop: spacing.xl,
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },
});
