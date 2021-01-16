import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';

import OrderList from './OrderList'


const OrderMain = props => {
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
    return (
        <View style={styles.container}>
            <ScrollView>

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