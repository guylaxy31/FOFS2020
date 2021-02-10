import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext'

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export function DrawerContent(props) {

    const { AuthLogin, setAuthLogin } = useContext(AppContext);
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
                                <Avatar.Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} size={50} />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={{ fontFamily: 'pr-light' }}><Text style={{ fontFamily: 'pr-light' }}>คุณ</Text>ใจดี ซื้ออาหาร</Title>
                                    <Caption style={{ fontFamily: 'pr-light' }}>@user01</Caption>
                                </View>
                            </View>

                        </View>
                        :
                        <View>
                            <Text style={{ fontFamily: 'pr-light', textAlign: 'center', marginTop: 20, color: '#B1B067' }}>คุณยังไม่ได้เข้าสู่ระบบ</Text>
                        </View>}

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({ color, size }) => (<Icon name="home-outline" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="หน้าหลัก" onPress={() => props.navigation.navigate('Homescreen')} />
                        {AuthLogin == true ? <DrawerItem icon={({ color, size }) => (<Icon name="account-circle" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="ตั้งค่าโปรไฟล์" onPress={() => props.navigation.navigate('ProfileSetting')} /> : null}
                        <DrawerItem icon={({ color, size }) => (<Icon name="help-circle" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="วิธีการสั่งอาหาร" onPress={() => props.navigation.navigate('Tutorial')} />
                        <DrawerItem icon={({ color, size }) => (<Icon name="alert" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="แจ้งปัญหาที่พบ" onPress={() => props.navigation.navigate('CustomerReport')} />
                        <DrawerItem icon={({ color, size }) => (<Icon name="contacts" color={color} size={size} />)} labelStyle={{ fontFamily: 'pr-reg' }} label="ติดต่อ" onPress={() => props.navigation.navigate('Contact')} />

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
                    <DrawerItem icon={({ color, size }) => (<Icon name="exit-to-app" color={color} size={size} />)} label="ออกจากระบบ" labelStyle={{ fontFamily: 'pr-reg' }} />
                    : <DrawerItem icon={({ color, size }) => (<Icon name="login" color={color} size={size} />)} label="เข้าสู่ระบบ" labelStyle={{ fontFamily: 'pr-reg' }} />}
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