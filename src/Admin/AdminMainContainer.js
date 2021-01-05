import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const AdminMainContainer = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AdminRestaurantRequestscreen')}>
                <View style={styles.toolCardContainer}>
                    <View style={styles.imgalign}><Image style={styles.ImgTag} source={require('../../assets/admin/it.png')}></Image></View>
                    <View style={styles.InlineText}>
                        <Text style={styles.mgRight}>ร้านอาหารที่ขอเข้าร่วม</Text>
                        <Text style={styles.chgFontRed}>3</Text>
                        <Text style={styles.mgLeft}>ร้าน</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('AdminRestaurantListscreen')}>
                <View style={styles.toolCardContainer}>
                    <View style={styles.imgalign}><Image style={styles.ImgTag} source={require('../../assets/admin/shop.png')}></Image></View>
                    <View style={styles.InlineText}>
                        <Text style={styles.mgRight}>รายชื่อร้านอาหารในระบบ</Text>
                        <Text style={styles.chgFontRed}>3</Text>
                        <Text style={styles.mgLeft}>ร้าน</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    toolCardContainer: { flexDirection: 'column', alignItems: 'center', width: Dimensions.get('window').width * .6, height: Dimensions.get('window').height * .28, backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 3, shadowOpacity: 0.26, borderRadius: 15, margin: '5%', padding: 2 },

    imgalign: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15 },
    ImgTag: { width: 100, height: 100, backgroundColor: '#FFF' },

    InlineText: { width: '100%', flexDirection: 'row', backgroundColor: '#FFFC1B', justifyContent: 'center', padding: '5%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
    mgLeft: { marginLeft: '5%', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .021 },
    mgRight: { marginRight: '5%', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .021 },
    chgFontRed: { fontFamily: 'pr-reg', color: 'red', fontSize: Dimensions.get('window').height * .021 },
});

export default AdminMainContainer