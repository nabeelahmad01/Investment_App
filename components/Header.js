// /components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ username, balance }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.appName}>Investment App</Text>
            <Text style={styles.userInfo}>User: {username}</Text>
            <Text style={styles.userInfo}>Balance: {balance}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userInfo: {
        fontSize: 16,
    },
});

export default Header;
