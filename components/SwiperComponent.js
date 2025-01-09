// /components/SwiperComponent.js
import React from 'react';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, View } from 'react-native';

const SwiperComponent = () => {
    return (
        <View style={styles.container}>
            <Swiper autoplay={true} loop={true} showsPagination={false}>
                <Image source={require('../assets_copy/images/11582.jpg')} style={styles.image} />
                <Image source={require('../assets_copy/images/12595.jpg')} style={styles.image} />
                <Image source={require('../assets_copy/images/2148902572.jpg')} style={styles.image} />
                <Image source={require('../assets_copy/images/Dubai-DownTown (1).webp')} style={styles.image} />
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default SwiperComponent;
