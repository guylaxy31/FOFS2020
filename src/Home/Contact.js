import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Contact = props => {

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', marginLeft: -30, marginRight: 10 }}><MaterialCommunityIcons name="account" size={80} color="black" /></View>
                        <View><Text style={styles.titleH1}>กฤษณะ มะนุภา</Text><Text style={styles.titleH2}>ผู้ดูแลระบ</Text><Text style={styles.titleH3}>Front-End Developer</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <MaterialIcons name="email" size={22} color="black" style={{ marginRight: 5 }} />
                        <Text style={styles.emailContactTitle}>kritsana.mnp@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.CardContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', marginLeft: -30, marginRight: 10 }}><MaterialCommunityIcons name="account" size={80} color="black" /></View>
                        <View><Text style={styles.titleH1}>อรรถชัย ภู่ศิลป์</Text><Text style={styles.titleH2}>ผู้ดูแลระบ</Text><Text style={styles.titleH3}>Back-End Developer</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <MaterialIcons name="email" size={22} color="black" style={{ marginRight: 5 }} />
                        <Text style={styles.emailContactTitle}>att.pusin@gmail.com</Text>
                    </View>
                </View>

            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 20, borderRadius: 15 },

    titleH1: { fontFamily: 'pr-bold', fontSize: 18 },
    titleH2: { fontFamily: 'pr-reg', fontSize: 16, color: '#0065A8' },
    titleH3: { fontFamily: 'pr-light', fontSize: 16, color: '#B9B9B9' },
    emailContactTitle: { fontFamily: 'pr-reg', fontSize: 16 }
});


export default Contact