import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';


const Tutorial = props => {

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <Text>ทดสอบหน้าวิธีการสั่งอาหาร</Text>
                </View>

            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

});


export default Tutorial