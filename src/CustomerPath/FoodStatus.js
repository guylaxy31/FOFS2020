import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';


const FoodStatus = props => {

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.StatusHeaderText}>ตรวจสถานะออเดอร์</Text>
                    </View>
                    <View style={styles.StatusHeaderContainer}>
                        <Text style={styles.HeaderTextLeft}>หมายเลขออเดอร์</Text>
                        <Text style={styles.HeaderTextRight}>สถานะ</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>152</Text>
                        <Text style={styles.ValueTextRight}>รับออเดอร์</Text>
                    </View>
                </View>


            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    StatusHeaderText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 20 : 22 },

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 40 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 80 },

    StatusValueContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 80, color: '#888888' },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 60, color: '#888888' }

});


export default FoodStatus