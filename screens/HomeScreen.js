import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>My Investment App</Text>
                <Text style={styles.userDetails}>User: John Doe</Text>
            </View>

            {/* Swiper */}
            <Swiper style={styles.swiper} autoplay>
                <View style={styles.slide}>
                    <Text style={styles.slideText}>Image 1</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.slideText}>Image 2</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.slideText}>Image 3</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.slideText}>Image 4</Text>
                </View>
            </Swiper>

            {/* Cards */}
            <View style={styles.cards}>
                <Text style={styles.card}>Investment A: $100</Text>
                <Text style={styles.card}>Investment B: $200</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#6200ee',
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userDetails: {
        color: '#fff',
        fontSize: 14,
    },
    swiper: {
        height: 200,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slideText: {
        color: '#fff',
        fontSize: 20,
    },
    cards: {
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 3,
    },
});

export default HomeScreen;
