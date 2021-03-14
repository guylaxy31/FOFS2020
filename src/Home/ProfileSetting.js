import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppContext from '../Context/AppContext'
import { MaterialIcons } from '@expo/vector-icons';


const ProfileSetting = props => {

    const { database } = useContext(AppContext);

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={{ backgroundColor: '#F9F9DB', borderRadius: 96, width: 136, height: 136, justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                        <MaterialCommunityIcons name="account" size={96} />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 18 }}>
                        <View style={{ width: 104 }}>
                            <Text style={styles.titleH1}>ชื่อผู้ใช้</Text>
                            <Text style={styles.titleH1}>รหัสผ่าน</Text>
                        </View>
                        <View style={{ width: 144 }}>
                            <Text style={styles.valueText}>{database.username}</Text>
                        </View>
                        <View style={{ width: 40, marginTop: 40 }} >

                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 18 }}>
                        <View style={{ width: 104 }} >
                            <Text style={styles.titleH1}>ชื่อจริง</Text>
                            <Text style={styles.titleH1}>นามสกุล</Text>
                            <Text style={styles.titleH1}>เพศ</Text>
                            <Text style={styles.titleH1}>อายุ</Text>
                            {database.role === 'customer' ? <Text style={styles.titleH1}>อาชีพ</Text> : null}
                            {database.role === 'customer' ? <Text style={styles.titleH1}>คณะ/สาขา</Text> : null}
                            {database.role === 'customer' ? <Text style={styles.titleH1}>สังกัด</Text> : null}
                            <Text style={styles.titleH1}>เบอร์โทร</Text>
                            <Text style={styles.titleH1}>อีเมล</Text>
                            <Text style={styles.titleH1}>ไลน์</Text>
                        </View>
                        <View style={{ width: 144 }}>
                            <Text style={styles.valueText}>{database.firstname}</Text>
                            <Text style={styles.valueText}>{database.lastname}</Text>
                            {database.gender === 'male' ? <Text style={styles.valueText}>ชาย</Text> : <Text style={styles.valueText}>หญิง</Text>}
                            <Text style={styles.valueText}>{database.age}</Text>
                            {database.role === 'customer' ? <Text style={styles.valueText}>{database.career}</Text> : null}
                            {database.role === 'customer' ? database.careerDetail != '' && database.carrer === 'student' ? <Text style={styles.valueText}>{database.careerDetail}</Text> : <Text style={styles.valueText}>-</Text> : null}
                            {database.role === 'customer' ? database.careerDetail != '' && database.carrer === 'officer' ? <Text style={styles.valueText}>{database.careerDetail}</Text> : <Text style={styles.valueText}>-</Text> : null}
                            <Text style={styles.valueText}>{database.phonenumber}</Text>
                            <Text style={styles.valueText}>{database.email}</Text>
                            {database.role === 'restaurant' ? <Text style={styles.valueText}>{database.line}</Text> : null}
                        </View>
                        <View style={{ width: 40 }}>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            {database.role === 'customer' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity> : null}
                            {database.role === 'customer' ? database.careerDetail != '' && database.carrer === 'student' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity> : <MaterialIcons name="mode-edit" size={24} color="#ccc" style={{ marginBottom: 12 }} /> : null}
                            {database.role === 'customer' ? database.careerDetail != '' && database.carrer === 'officer' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity> : <MaterialIcons name="mode-edit" size={24} color="#ccc" style={{ marginBottom: 12 }} /> : null}
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity>
                            {database.role === 'restaurant' ? <TouchableOpacity><MaterialIcons name="mode-edit" size={24} color="black" style={{ marginBottom: 12 }} /></TouchableOpacity> : null}
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', width: 180, justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFC1B', borderRadius: 15, paddingHorizontal: 18, paddingVertical: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, }}><View style={{ justifyContent: 'center' }}><Text style={{ fontFamily: 'pr-reg', fontSize: 14 }}>บันทึก</Text></View></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 15, paddingHorizontal: 18, paddingVertical: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, }} onPress={() => props.navigation.goBack()}><View style={{ justifyContent: 'center' }}><Text style={{ fontFamily: 'pr-reg', fontSize: 14 }}>ยกเลิก</Text></View></TouchableOpacity>
                        </View>
                    </View>
                </View>



            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 18, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 48, borderRadius: 16 },

    titleH1: { fontFamily: 'pr-reg', fontSize: 18, marginBottom: 10 },
    valueText: { fontFamily: 'pr-reg', fontSize: 16, color: '#838383', marginBottom: 14 }
});


export default ProfileSetting