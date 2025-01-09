// /screens/AccountScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AccountDashboard from '../components/AccountDashboard';

const AccountScreen = () => {
    const accountDetails = {
        level: 1,
        profit: '$100',
        balance: '$500',
    };

    return (
        <ScrollView style={styles.container}>
            <AccountDashboard accountDetails={accountDetails} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AccountScreen;
