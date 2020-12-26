import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class AdminMainContainer extends Component {

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.toolCardContainer}>
                        <View style={styles.imgalign}><Image source={require('../../assets/admin/request.png')}></Image></View>
                        <View style={styles.InlineText}>
                            <Text style={styles.mgRight}>ร้านอาหารที่ขอเข้าร่วม</Text>
                            <Text style={styles.chgFontRed}>3</Text>
                            <Text style={styles.mgLeft}>ร้าน</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.toolCardContainer}>
                        <View style={styles.imgalign}><Image source={require('../../assets/admin/shop.png')}></Image></View>
                        <View style={styles.InlineText}>
                            <Text style={styles.chgFont}>รายชื่อร้านอาหารในระบบ</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolCardContainer: {
        margin: '5%',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#FFF',
        shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6,
        elevation: 3, shadowOpacity: 0.26, padding: 1,
        borderRadius: 15
    },
    InlineText: {
        flexDirection: 'row',
        backgroundColor: '#FFFC1B',
        justifyContent: 'center',
        padding: '5%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    mgLeft: {
        marginLeft: '5%',
        fontFamily: 'pr-reg',
        fontSize: 16
    },
    mgRight: {
        marginRight: '5%',
        fontFamily: 'pr-reg',
        fontSize: 16
    },
    chgFont: {
        fontFamily: 'pr-reg',
        fontSize: 16
    },
    chgFontRed: {
        fontFamily: 'pr-reg',
        color: 'red',
        fontSize: 16
    },
    imgalign: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10%',

    }
});


