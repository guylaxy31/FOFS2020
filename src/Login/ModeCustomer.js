import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class ModeCustomer extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.img_mode}>
                        <Image style={styles.img__} source={require('../../assets/login/customer_mode_logo.png')}></Image>
                    </View>
                    <View style={styles.alignText}><Text style={styles.findFood}>หาอาหารรับประทาน</Text></View>
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

    },

    findFood: {
        fontFamily: 'pr-light', fontSize: 18,
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
        width: null,
        justifyContent: 'center',
        padding: 15,
        alignItems: 'center'
    },

});

export default ModeCustomer;
