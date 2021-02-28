import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { MaterialIcons } from '@expo/vector-icons';

const VariationList = props => {
    const tabledataset = {
        tableHead: ['#', 'รายการปริมาณ', 'ราคา (฿)', 'แก้ไข'],
        tableData: [
            ['1', 'ธรรมดา', '0', 'แก้ไข'],
            ['2', 'พิเศษ', '5', 'แก้ไข']
        ]
    }
    const element = (data, index) => (
        <TouchableOpacity style={{ alignItems: 'center', marginHorizontal: 10, borderRadius: 15 }}>
            <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
    );
    return (
        <View style={styles.Tablecontainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 30 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('MenuList')}><Text style={styles.pageButtonUnselect}>เมนู</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('VariationList')}><Text style={styles.pageButton}>ปริมาณ</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('IngredientList')}><Text style={styles.pageButtonUnselect}>วัตถุดิบ</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('OptionList')}><Text style={styles.pageButtonUnselect}>ท็อปปิ้ง</Text></TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('MenuAdd')} style={styles.AddFoodContainerTouch}><Text style={styles.AddFoodText}>+ เพิ่ม</Text></TouchableOpacity>
                </View>

                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <Row data={tabledataset.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        tabledataset.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    AddFoodContainerTouch: { backgroundColor: '#F5F5F5', padding: 5, borderRadius: 15, width: Dimensions.get('window').width * 0.25 },
    AddFoodText: { fontFamily: 'pr-reg', textAlign: 'center' },

    Tablecontainer: { flex: 1, padding: 16, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: '#FFF', },
    head: { height: Dimensions.get('window').height * 0.15, backgroundColor: '#FFF' },
    text: { fontFamily: 'pr-reg', marginVertical: 15, fontSize: Dimensions.get('window').height * .018, textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF', justifyContent: 'center', borderBottomColor: '#000', borderBottomWidth: .5, borderBottomColor: '#D3D2B3' },
    btn: { flexDirection: 'row', width: Dimensions.get('window').width * 0.18, height: Dimensions.get('window').height * 0.054, backgroundColor: '#F8F8D9', borderRadius: 15, justifyContent: 'center', padding: 5 },
    btnEdit: { width: 20, height: 20 },

    pageButton: { fontFamily: 'pr-reg', fontSize: 16 },
    pageButtonUnselect: { fontFamily: 'pr-reg', fontSize: 16, color: '#ccc' }
})

export default VariationList