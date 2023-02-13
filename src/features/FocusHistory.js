import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {
    if (!history || !history.length) return null;

    const renderItem = ({ item }) => {
        return <Text style={styles.item}> • {item}</Text>;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on: </Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    );
};

export default FocusHistory;

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: spacing.md,
    },
    item: {
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSizes.md,
    },
    container: {
        flex: 1,
    },
});
