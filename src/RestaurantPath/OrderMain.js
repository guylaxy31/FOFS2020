import React, { useState, useCallback, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, FlatList, RefreshControl } from 'react-native';

import OrderList from './OrderList'
import AuthGlobal from '../Context/Store/AuthGlobal'
import baseUrl from '../../assets/common/baseUrl';
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const OrderMain = props => {
    const context = useContext(AuthGlobal);
    const [resId, setResId] = useState();
    const [order, setOrder] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const tempdatabase = {
        menulists: [
            {
                idx: 1,
                ordernumber: 152,
                timeclock: '11:15',
                menu: [['ข้าวผัดหมู', 1, 25]]

            },
            {
                idx: 2,
                ordernumber: 153,
                timeclock: '11:18',
                menu: [['ก๋วยเตี๋ยวต้มยำหมูสับ', 1, 25]]
            }
        ]
    }
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    useFocusEffect((useCallback(
        () => {
            if (
                context.stateUser.isAuthenticated === false || context.stateUser.isAuthenticated === undefined || context.stateUser.isAuthenticated === null
            ) {
                props.navigation.navigate("LoginHome")
            } else {
                setResId(context.stateUser.user.userId)
                axios.get(`${baseUrl}orders/restaurant/${resId}`).then((op) => {
                    setOrder(op.data)
                }).catch((error) => { console.log(error); })
            }
            return () => {
                setOrder([]);
                setResId('');
            }
        },
        [resId],
    )))
    console.log(order);
    console.log(context);
    console.log(`${baseUrl}restaurant/${resId}`);
    return (
        <View style={styles.container}>

            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <FlatList
                    data={tempdatabase.menulists}
                    renderItem={({ item }) => <OrderList idx={item.idx} ordernumber={item.ordernumber} timeclock={item.timeclock} menu={item.menu} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF' },
})

export default OrderMain