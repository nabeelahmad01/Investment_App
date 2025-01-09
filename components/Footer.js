// /components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ onHomePress, dailyInvestmentDetails }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.iconButton} onPress={onHomePress}>
                <Ionicons name="home" size={24} color="black" />
                <Text>Home</Text>
            </TouchableOpacity>
            <Text style={styles.investmentDetails}>{dailyInvestmentDetails}</Text>
            {/* Add additional icons and links as required */}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        backgroundColor: '#f7f7f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        alignItems: 'center',
    },
    investmentDetails: {
        fontSize: 16,
    },
});

export default Footer;
