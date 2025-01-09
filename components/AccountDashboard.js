// /components/AccountDashboard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InvestmentCard from './InvestmentCard';

const AccountDashboard = ({ accountDetails }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Dashboard</Text>
            <InvestmentCard
                level={accountDetails.level}
                profit={accountDetails.profit}
                balance={accountDetails.balance}
            />
            {/* Add additional details such as referrals, QR code, etc. */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default AccountDashboard;
