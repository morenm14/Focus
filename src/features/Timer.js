import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { spacing, fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={() => {}}
                />
                <View style={{ padding: spacing.xxl }}>
                    <Text style={styles.title}>Focusing on:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: spacing.lg }}>
                <ProgressBar
                    color={colors.progressBarBlue}
                    progress={progress}
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
    title: {
        color: colors.progressBarBlue,
        fontSize: fontSizes.lg,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    task: {
        color: colors.white,
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: fontSizes.md,
    },
});
