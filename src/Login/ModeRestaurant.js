import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class ModeRestaurant extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.img_mode}>
                        <Image style={styles.img__} source={require('../../assets/login/restaurant_mode_logo.png')}></Image>
                    </View>
                    <View style={styles.alignText}><Text style={{ fontFamily: 'pr-light', fontSize: 16 }}>จัดการร้านอาหาร</Text></View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '60%',
        width: '40%',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#FFF',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        shadowOpacity: 0.26,
        padding: 1,

    }, alignText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_mode: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        padding: 15,

        alignItems: 'center'
    },
});

export default ModeRestaurant;
