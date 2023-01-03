import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Countdown } from '../components/Countdown';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    isPaused={!isStarted}
                    onProgress={() => {}}
                    onEnd={() => {}}
                />
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && (
                    <RoundedButton
                        size={80}
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />
                )}
                {isStarted && (
                    <RoundedButton
                        size={80}
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
