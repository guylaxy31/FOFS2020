import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext'

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';


export function DrawerContent(props) {

    const { AuthLogin, setAuthLogin, database, setDatabase, user, setUser } = useContext(AppContext);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFC1B' }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    {AuthLogin == true ?
                        <View stlye={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15, paddingLeft: 15 }}>
                                <MaterialCommunityIcons name="account" size={50} />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={{ fontFamily: 'pr-light' }}><Text style={{ fontFamily: 'pr-light' }}>คุณ</Text>{database.firstname} {database.lastname}</Title>
                                    <Caption style={{ fontFamily: 'pr-light' }}>@{database.username}</Caption>
                                </View>
                            </View>
                        </View>
                        :
                        <View>
                            <Text style={{ fontFamily: 'pr-light', textAlign: 'center', marginTop: 20, color: '#B1B067' }}>คุณยังไม่ได้เข้าสู่ระบบ</Text>
                        </View>}

                    <Drawer.Section style={styles.drawerSection}>
                        {/* ถ้าบทบาทเป็น'ร้านอาหาร'หน้าหลักจะเป็นหน้าเครื่องมือ 4 เมนูสำหรับร้าน */}
                        {/* นอกจากนั้นจะเป็น home หลักแสดงอาหารหมดทุกกรณี ทั้งล็อคอินและล็อคอินเป็นลูกค้า */}
                        {user.role === 'restaurant' && AuthLogin === true ? <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="home-outline" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="หน้าหลัก" onPress={() => props.navigation.navigate('RestaurantHome')} />
                            :
                            <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="home-outline" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="หน้าหลัก" onPress={() => props.navigation.navigate('Homescreen')} />
                        }
                        {/* ตั้งค่าโปรไฟล์ถ้าหากเป็นลูกค้าให้เป็นการตั้งโปรไฟล์สำหรับลูกค้า ร้านอาหารให้เป็นการตั้งโปรไฟล์สำหรับร้านอาหาร */}
                        {user.role === 'customer' && AuthLogin == true ? <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="account-circle" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="ตั้งค่าโปรไฟล์" onPress={() => props.navigation.navigate('ProfileSetting')} /> : null}

                        {user.role != 'restaurant' ? <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="help-circle" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="วิธีการสั่งอาหาร" onPress={() => props.navigation.navigate('Tutorial')} /> : null}
                        {/* navigate ไปยังหน้า customer report และ restaurant report จะต่างกัน */}
                        {user.role === 'customer' && AuthLogin === true ? <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="alert" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="แจ้งปัญหาที่พบ" onPress={() => props.navigation.navigate('CustomerReport')} />
                            :
                            user.role === 'restaurant' && AuthLogin === true ? <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="alert" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="แจ้งปัญหาที่พบ" onPress={() => props.navigation.navigate('CustomerReport')} /> : null
                        }
                        <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="contacts" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="ติดต่อ" onPress={() => props.navigation.navigate('Contact')} />

                    </Drawer.Section>


                    <Drawer.Section>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preference}>
                                <Text style={{ fontFamily: 'pr-reg' }}>โหมดกลางคืน</Text>

                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                {AuthLogin == true ?
                    <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="exit-to-app" color={color} size={size} />)} label="ออกจากระบบ" onPress={() => { setAuthLogin(false), setUser({ ...user, username: '', password: '' }) }} labelStyle={{ fontFamily: 'pr-reg' }} />
                    : <DrawerItem icon={({ color, size }) => (<MaterialCommunityIcons name="login" color={color} size={size} />)} label="เข้าสู่ระบบ" onPress={() => props.navigation.navigate('LoginHome')} labelStyle={{ fontFamily: 'pr-reg' }} />}
            </Drawer.Section >
        </View >
    )
}

const styles = StyleSheet.create({
    drawerContent: { flex: 1 },
    userInfoSection: { paddingLeft: 20 },
    title: { fontSize: 16, marginTop: 3, fontFamily: 'pr-bold' },
    caption: { fontSize: 14, fontFamily: 'pr-light' },
    row: { marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingLeft: 15 },
    section: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },

    drawerSection: { marginTop: 15 },
    bottomDrawerSection: { marginBottom: 15, borderTopColor: '#FFF', borderTopWidth: 1 },
    preference: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16 }

})