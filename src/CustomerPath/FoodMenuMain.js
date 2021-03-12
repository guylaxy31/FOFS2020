import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';

import FoodMenuItem from './FoodMenuItem'
import { useSelector } from "react-redux";
import baseUrl from '../../assets/common/baseUrl';
import axios from "axios";
import { log } from 'react-native-reanimated';
const FoodMenuMain = props => {

    const { resId } = props.route.params;
    const [oneres, setOneres] = useState([]);
    console.log(resId);
    // const restaurant = useSelector(state => state.restaurant.restaurants.find(restaurant => restaurant._id  === resId));

    // console.log(restaurant.res_image);
    console.log(`${baseUrl}home/${resId}`);
    useEffect(() => {
        axios
            .get(`${baseUrl}dhome/${resId}`)
            .then((res) => {
                setOneres(res.data);
            })
        return () => {
            setOneres([]);
        }
    }, []);
    console.log(oneres.menus);
    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={styles.RestImageContainer}><Image style={styles.RestImage} source={{ uri: oneres.res_image }}></Image></View>
                    <View style={styles.RestNameContainer}><Text style={styles.RestNameText}>ร้าน{oneres.restaurant_name}</Text></View>

                    <FlatList
                        data={oneres.menus}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuCustom'), { item: item._id }} style={styles.MenuTouchContainer}><FoodMenuItem menuTitle={item.menu_name} imageUri={item.menu_image} /></TouchableOpacity>}
                        keyExtractor={item => item._id}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 50, alignItems: 'center' }}>
                        <View style={styles.nextBTNBackground}><TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuConfirm')}><Text style={styles.nextBTNText}>ดำเนินต่อ</Text></TouchableOpacity></View>
                        <View style={styles.CancelBTNBackground}><TouchableOpacity onPress={() => props.navigation.navigate('Homescreen')}><Text style={styles.cancelBTNText}>ยกเลิก</Text></TouchableOpacity></View>
                    </View>

                </View>


            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    RestNameContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 20 },
    RestNameText: { fontFamily: 'pr-bold', fontSize: 18 },
    RestImageContainer: { borderRadius: 15, marginTop: 20, padding: 1, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    RestImage: { width: 200, height: 200, borderRadius: 15 },

    MenuTouchContainer: { borderRadius: 15, marginVertical: 10, marginHorizontal: 5, width: 300, backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 1, elevation: 3, shadowOpacity: 0.26 },
    nextBTNText: { fontFamily: 'pr-reg', color: '#000', textAlign: 'center' },
    nextBTNBackground: { backgroundColor: '#FFFC1B', padding: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.13, borderRadius: 15, width: 110 },
    CancelBTNBackground: { backgroundColor: '#FFF', padding: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.13, borderRadius: 15, width: 80 },
    cancelBTNText: { fontFamily: 'pr-reg', color: '#000', textAlign: 'center' }

});


export default FoodMenuMain