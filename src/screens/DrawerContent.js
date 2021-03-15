import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext'

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFC1B' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    {/* =========================== 0 แถบบนสุด ===========================*/}
                    {/* ถ้ายังไม่ได้ Login*/}
                    <View>
                        <Text style={{ fontFamily: 'pr-light', textAlign: 'center', marginTop: 24, color: '#B1B067' }}>คุณยังไม่ได้เข้าสู่ระบบ</Text>
                    </View>
                    {/* ถ้า Login แล้ว*/}
                    {/* <View stlye={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 16, paddingLeft: 16 }}>
                            <MaterialCommunityIcons name="account" size={48} />
                            <View style={{ marginLeft: 16, flexDirection: 'column' }}>
                                <Title style={{ fontFamily: 'pr-light' }}><Text style={{ fontFamily: 'pr-light' }}>คุณ</Text>{database.firstname} {database.lastname}</Title>
                                <Caption style={{ fontFamily: 'pr-light' }}>@{database.username}</Caption>
                            </View>
                        </View>
                    </View> */}

                    <Drawer.Section style={styles.drawerSection}>

                        {/* =========================== 1 หน้าหลัก ===========================*/}
                        {/* ถ้าเป็นลูกค้า*/}
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="home-outline" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="หน้าหลัก" onPress={() => props.navigation.navigate('Homescreen')} />
                        {/* ถ้าเป็นร้านอาหาร*/}
                        {/* <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="home-outline" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="หน้าหลัก" onPress={() => props.navigation.navigate('RestaurantHome')} /> */}

                        {/* =========================== 2 หน้าตั้งค่า ===========================*/}
                        {/* ถ้าเป็นลูกค้า*/}
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="account-circle" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="ตั้งค่าข้อมูลผู้ใช้" onPress={() => props.navigation.navigate('ProfileSetting')} />
                        {/* ถ้าเป็นร้านอาหาร มี 2 บรรทัด*/}
                        {/* <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="account-circle" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="ตั้งค่าโปรไฟล์" onPress={() => props.navigation.navigate('ProfileSetting')} /> */}
                        {/* <DrawerItem icon={({ color, size }) => (<MaterialIcons name="store" size={size} color={color} />)} labelStyle={styles.draweritemtext} label="ตั้งค่าข้อมูลร้าน" onPress={() => props.navigation.navigate('RestaurantSetting')} />   */}

                        {/* =========================== 3 หน้าสอนใช้แอป ===========================*/}
                        {/* ถ้าไม่ใช่ไอดีร้านอาหาร จะขึ้น */}
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="help-circle" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="วิธีการสั่งอาหาร" onPress={() => props.navigation.navigate('Tutorial')} />

                        {/* =========================== 4 หน้ารายงาน report ===========================*/}
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="alert" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="แจ้งปัญหาที่พบ" onPress={() => props.navigation.navigate('CustomerReport')} />

                        {/* =========================== 5 หน้าติดต่อผู้พัฒนา ===========================*/}
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="contacts" color={color} size={size} />)} labelStyle={styles.draweritemtext} label="ติดต่อ" onPress={() => props.navigation.navigate('Contact')} />

                        {/* =========================== 6 Admin ===========================*/}
                        <DrawerItem icon={({ color, size }) => (<MaterialIcons name="security" size={size} color={color} />)} labelStyle={styles.draweritemtext} label="สำหรับผู้พัฒนา" onPress={() => props.navigation.navigate('AdminHome')} />

                    </Drawer.Section>

                    <Drawer.Section>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preference}>
                                <Text style={styles.draweritemtext}>โหมดกลางคืน</Text>

                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                {/* ถ้าจะ Login */}
                <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="login" color={color} size={size} />)} label="เข้าสู่ระบบ" labelStyle={styles.draweritemtext} onPress={() => props.navigation.navigate('LoginHome')} labelStyle={{ fontFamily: 'pr-reg' }} />
                {/* ถ้าจะ Logout */}
                <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="exit-to-app" color={color} size={size} />)} label="ออกจากระบบ" labelStyle={styles.draweritemtext} onPress={() => { setAuthLogin(false), setUser({ ...user, username: '', password: '' }) }} labelStyle={{ fontFamily: 'pr-reg' }} />

            </Drawer.Section >
        </View >
    )
}

const styles = StyleSheet.create({
    drawerContent: { flex: 1 },
    draweritemtext: { fontFamily: 'pr-reg', fontSize: 16 },
    userInfoSection: { paddingLeft: 16 },
    title: { fontSize: 16, marginTop: 3, fontFamily: 'pr-bold' },
    caption: { fontSize: 14, fontFamily: 'pr-light' },
    row: { marginTop: 24, flexDirection: 'row', alignItems: 'center', paddingLeft: 16 },
    section: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },

    drawerSection: { marginTop: 16 },
    bottomDrawerSection: { marginBottom: 16, borderTopColor: '#FFF', borderTopWidth: 1 },
    preference: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 16 }

})