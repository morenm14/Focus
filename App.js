import React, { useState } from 'react';
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

export default function App() {
    const [subject, setSubject] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {!subject ? (
                <Focus addSubject={setSubject} />
            ) : (
                <View>
                    <Text style={styles.subjectText}>{subject}</Text>
                </View>
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
