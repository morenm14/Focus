import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import { Timer } from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
    const [subject, setSubject] = useState(null);
    const [history, setHistory] = useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {!subject ? (
                <>
                    <Focus addSubject={setSubject} />
                    <FocusHistory history={history} />
                </>
            ) : (
                <Timer
                    focusSubject={subject}
                    onTimerEnd={(subject) => setHistory([subject, ...history])}
                    clearSubject={() => setSubject(null)}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.darkBlue,
    },
    subjectText: {
        color: colors.white,
        textAlign: 'center',
        padding: 20,
        fontSize: 24,
    },
});
