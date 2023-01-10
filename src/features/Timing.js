import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RoundedButton } from '../components/RoundedButton';

const Timing = ({ onChangeTime }) => {
    return (
        <View style={styles.timingButton}>
            <RoundedButton
                size={80}
                title="5"
                onPress={() => onChangeTime(5)}
            />
            <RoundedButton
                size={80}
                title="10"
                onPress={() => onChangeTime(10)}
            />
            <RoundedButton
                size={80}
                title="15"
                onPress={() => onChangeTime(15)}
            />
            <RoundedButton
                size={80}
                title="20"
                onPress={() => onChangeTime(20)}
            />
        </View>
    );
};

export default Timing;

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
