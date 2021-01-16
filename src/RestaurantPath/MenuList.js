import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const MenuList = props => {
    const tabledataset = {
        tableHead: ['#', 'เมนู', 'ประเภท', 'ราคา(฿)', 'แก้ไข'],
        tableData: [
            ['1', 'ข้าวผัดหมู', 'อาหารตามสั่ง', '25', 'แก้ไข'],
            ['2', 'ข้าวไข่เจียว', 'อาหารตามสั่ง', '15', 'แก้ไข']
        ]
    }

    const element = (data, index) => (
        <TouchableOpacity>
            <View style={styles.btn}>
                <Image style={styles.btnEdit} source={require('../../assets/restaurants/baseline_create_black_18.png')}></Image>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.Tablecontainer}>
            <ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.AddFoodContainerTouch}><Text style={styles.AddFoodText}>+ เพิ่มอาหาร</Text></TouchableOpacity>
                </View>

                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={tabledataset.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        tabledataset.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    AddFoodContainerTouch: { backgroundColor: '#F5F5F5', padding: 5, borderRadius: 15, width: Dimensions.get('window').width * 0.25 },
    AddFoodText: { textAlign: 'center' },

    Tablecontainer: { flex: 1, padding: 16, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: '#FFF', },
    head: { height: Dimensions.get('window').height * 0.15, backgroundColor: '#FFF' },
    text: { fontFamily: 'pr-reg', marginVertical: 15, fontSize: Dimensions.get('window').height * .018, textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF', justifyContent: 'center', borderBottomColor: '#000', borderBottomWidth: .5, borderBottomColor: '#D3D2B3' },
    btn: { flexDirection: 'row', width: Dimensions.get('window').width * 0.18, height: Dimensions.get('window').height * 0.054, backgroundColor: '#F8F8D9', borderRadius: 15, justifyContent: 'center', padding: 5 },
    btnEdit: { width: 20, height: 20 }
});


export default MenuList