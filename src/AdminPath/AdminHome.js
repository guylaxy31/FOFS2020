import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AdminHome = props => {

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.TouchBtn} onPress={() => props.navigation.navigate('RequestMain')}>
                    <View style={styles.toolCardContainer}>
                        <View style={styles.imgalign}><Image style={styles.ImgTag} source={require('../../assets/admin/it.png')}></Image></View>
                        <View style={styles.InlineText}>
                            <Text style={styles.mgRight}>ร้านอาหารที่ขอเข้าร่วม</Text>
                            <Text style={styles.chgFontRed}>4</Text>
                            <Text style={styles.mgLeft}>ร้าน</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.TouchBtn} onPress={() => props.navigation.navigate('ListMain')}>
                    <View style={styles.toolCardContainer}>
                        <View style={styles.imgalign}><Image style={styles.ImgTag} source={require('../../assets/admin/shop.png')}></Image></View>
                        <View style={styles.InlineText}>
                            <Text style={styles.mgRight}>รายชื่อร้านอาหารในระบบ</Text>
                            <Text style={styles.chgFontRed}>5</Text>
                            <Text style={styles.mgLeft}>ร้าน</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchBtn} onPress={() => props.navigation.navigate('ReportManagement')}>
                    <View style={styles.toolCardContainer}>
                        <View style={styles.imgalign}><MaterialIcons name="report" size={80} color="black" /></View>
                        <View style={styles.InlineText}>
                            <Text style={styles.mgRight}>คำร้องเรียน</Text>
                            <Text style={styles.chgFontRed}>2</Text>
                            <Text style={styles.mgLeft}>คำร้อง</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    toolCardContainer: { flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 15 },

    TouchBtn: { backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 3, shadowOpacity: 0.26, borderRadius: 15, marginHorizontal: 60, marginVertical: 20 },
    imgalign: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: '100%', marginVertical: 30 },
    ImgTag: { width: 100, height: 100 },

    InlineText: { width: '100%', flexDirection: 'row', backgroundColor: '#FFFC1B', justifyContent: 'center', padding: '5%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
    mgLeft: { marginLeft: '5%', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .021 },
    mgRight: { marginRight: '5%', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .021 },
    chgFontRed: { fontFamily: 'pr-reg', color: 'red', fontSize: Dimensions.get('window').height * .021 },
});

export default AdminHome