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
                    <Text style={{ fontFamily: 'pr-light', fontSize: 16 }}>หาอาหารรับประทาน</Text>
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
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#FFF'
    },


    img_mode: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center'
    },

});

export default ModeCustomer;
