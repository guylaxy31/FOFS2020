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
                    <Text style={{ fontFamily: 'pr-light', fontSize:16 }}>จัดการร้านอาหาร</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10

    },
    mode_btn: {
        marginTop: 20,
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 3,
        paddingVertical: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    img_mode: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center'
    },
});

export default ModeRestaurant;
