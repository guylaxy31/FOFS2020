import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppContext from '../Context/AppContext'
import { MaterialIcons } from '@expo/vector-icons';


const ProfileSetting = props => {

    const { AuthLogin, setAuthLogin, database, setDatabase } = useContext(AppContext);

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={{ backgroundColor: '#F9F9DB', borderRadius: 100, width: 140, height: 140, justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                        <MaterialCommunityIcons name="account" size={100} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={{ width: 110 }}>
                            <Text style={styles.titleH1}>ชื่อผู้ใช้</Text>
                            <Text style={styles.titleH1}>รหัสผ่าน</Text>
                        </View>
                        <View style={{ width: 150 }}>
                            <Text style={styles.valueText}>{database.username}</Text>
                        </View>
                        <View style={{ width: 40, marginTop: 40 }} >

                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={{ width: 110 }} >
                            <Text style={styles.titleH1}>ชื่อจริง</Text>
                            <Text style={styles.titleH1}>นามสกุล</Text>
                            <Text style={styles.titleH1}>เพศ</Text>
                            <Text style={styles.titleH1}>อายุ</Text>
                            <Text style={styles.titleH1}>อาชีพ</Text>
                            <Text style={styles.titleH1}>คณะ/สาขา</Text>
                            <Text style={styles.titleH1}>สังกัด</Text>
                            <Text style={styles.titleH1}>เบอร์โทร</Text>
                            <Text style={styles.titleH1}>อีเมล</Text>
                        </View>
                        <View style={{ width: 150 }}>
                            <Text style={styles.valueText}>{database.firstname}</Text>
                            <Text style={styles.valueText}>{database.lastname}</Text>
                            {database.gender === 'male' ? <Text style={styles.valueText}>ชาย</Text> : <Text style={styles.valueText}>หญิง</Text>}
                            <Text style={styles.valueText}>{database.age}</Text>
                            <Text style={styles.valueText}>{database.career}</Text>
                            {database.careerDetail != '' && database.carrer === 'student' ? <Text style={styles.valueText}>{database.careerDetail}</Text> : <Text style={styles.valueText}>-</Text>}
                            {database.careerDetail != '' && database.carrer === 'officer' ? <Text style={styles.valueText}>{database.careerDetail}</Text> : <Text style={styles.valueText}>-</Text>}
                            <Text style={styles.valueText}>{database.phonenumber}</Text>
                            <Text style={styles.valueText}>{database.email}</Text>
                        </View>
                        <View style={{ width: 40 }}>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity>
                            {database.careerDetail != '' && database.carrer === 'student' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity> : <MaterialIcons name="mode-edit" size={24} color="#ccc" style={{ marginBottom: 11.5 }} />}
                            {database.careerDetail != '' && database.carrer === 'officer' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 11.5 }} /></TouchableOpacity> : <MaterialIcons name="mode-edit" size={24} color="#ccc" style={{ marginBottom: 11.5 }} />}
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', width: 180, justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Homescreen')} style={{ backgroundColor: '#FFFC1B', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, }}><View style={{ justifyContent: 'center' }}><Text style={{ fontFamily: 'pr-reg', fontSize: 14 }}>บันทึก</Text></View></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, }} onPress={() => props.navigation.goBack()}><View style={{ justifyContent: 'center' }}><Text style={{ fontFamily: 'pr-reg', fontSize: 14 }}>ยกเลิก</Text></View></TouchableOpacity>
                        </View>
                    </View>
                </View>



            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    titleH1: { fontFamily: 'pr-reg', fontSize: 18, marginBottom: 10 },
    valueText: { fontFamily: 'pr-reg', fontSize: 16, color: '#838383', marginBottom: 13.5 }
});


export default ProfileSetting