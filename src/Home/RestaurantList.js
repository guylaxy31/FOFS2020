import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';


const RestaurantList = (props) => {

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>

                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.restaurantContainer}>
                        <View style={styles.containImage}></View>
                        <View style={styles.containText}><Text style={styles.restText}>ร้านอาหาร 1</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.restaurantContainer}>
                        <View style={styles.containImage}></View>
                        <View style={styles.containText}><Text style={styles.restText}>ร้านอาหาร 2</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.restaurantContainer}>
                        <View style={styles.containImage}></View>
                        <View style={styles.containText}><Text style={styles.restText}>ร้านอาหาร 3</Text></View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },

    restaurantContainer: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 16, padding: 24 },
    containImage: { width: 112, height: 112, backgroundColor: '#ccc', borderRadius: 16 },
    touchContainer: { backgroundColor: '#FFF', marginHorizontal: 20, marginVertical: 16, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    containText: { alignSelf: 'center', marginLeft: 20 },
    restText: { fontFamily: 'pr-reg', fontSize: 16 }
});


export default RestaurantList