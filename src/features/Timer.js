import { StyleSheet, Text, View, Vibration } from 'react-native';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { spacing, fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import Timing from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        console.log('TRIGGERED RESET');
        Vibration.vibrate(PATTERN);
        reset();
        onTimerEnd(focusSubject);
    };

    useEffect(() => {
        if (progress === 1) {
            setIsStarted(false);
        }

        console.log('Progress', progress);
    }, [progress]);

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={(progress) => setProgress(progress)}
                    onEnd={onEnd}
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
                <Timing onChangeTime={setMinutes} />
            </View>

            <View style={styles.buttonWrapper}>
                {!isStarted && (
                    <RoundedButton
                        size={120}
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />
                )}
                {isStarted && (
                    <RoundedButton
                        size={120}
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    />
                )}
            </View>
            <View style={styles.clearSubjectButton}>
                <RoundedButton size={50} title="X" onPress={clearSubject} />
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
    clearSubjectButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
