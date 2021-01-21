import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';

import FoodMenuItem from './FoodMenuItem'

const FoodMenuMain = props => {
    const tempdatabase = {
        MenuList: [
            {
                menuTitle: 'ข้าวผัด',
                imageUri: require('../../assets/menulist/fried-rice.jpg'),
            },
            {
                menuTitle: 'ผัดไท',
                imageUri: require('../../assets/menulist/PT1.jpg'),
            },
            {
                menuTitle: 'ก๋วยเตี๋ยว',
                imageUri: require('../../assets/menulist/noodle.jpg'),
            },
        ]
    }
    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={styles.RestImageContainer}><Image style={styles.RestImage} source={require('../../assets/restaurantlist/rest011182.jpg')}></Image></View>
                    <View style={styles.RestNameContainer}><Text style={styles.RestNameText}>ร้านป้าอร</Text></View>



                    <FlatList
                        data={tempdatabase.MenuList}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuCustom')} style={styles.MenuTouchContainer}><FoodMenuItem menuTitle={item.menuTitle} imageUri={item.imageUri} /></TouchableOpacity>}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 50, alignItems: 'center' }}>
                        <View style={styles.nextBTNBackground}><TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuConfirm')}><Text style={styles.nextBTNText}>ดำเนินการต่อ</Text></TouchableOpacity></View>
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

    RestNameContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
    RestNameText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    RestImageContainer: { borderRadius: 15, marginTop: 30, padding: 1, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    RestImage: { width: 200, height: 200, borderRadius: 15 },

    MenuTouchContainer: { marginVertical: 10, width: 320 },
    nextBTNText: { fontFamily: 'pr-reg', color: '#000', textAlign: 'center' },
    nextBTNBackground: { backgroundColor: '#FFFC1B', padding: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.13, borderRadius: 15, width: 110 },
    CancelBTNBackground: { backgroundColor: '#FFF', padding: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 1 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.13, borderRadius: 15, width: 80 },
    cancelBTNText: { fontFamily: 'pr-reg', color: '#000', textAlign: 'center' }

});


export default FoodMenuMain