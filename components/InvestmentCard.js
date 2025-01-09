// /components/InvestmentCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InvestmentCard = ({ level, profit, balance }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Level: {level}</Text>
            <Text style={styles.text}>Profit: {profit}</Text>
            <Text style={styles.text}>Balance: {balance}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    text: {
        fontSize: 16,
    },
});

export default InvestmentCard;
