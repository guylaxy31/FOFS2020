import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const RequestMain = props => {

    const tabledataset = {
        tableHead: ['#', 'เวลา (น.)', 'ชื่อร้าน', 'รายละเอียด'],
        tableData: [
            ['1', '17.05', 'ร้านอาหาร1', 'ปุ่ม'],
            ['2', '18.05', 'ร้านอาหาร2', 'ปุ่ม'],
            ['3', '19.05', 'ร้านอาหาร3', 'ปุ่ม'],
            ['4', '19.13', 'ร้านอาหาร4', 'ปุ่ม']
        ]
    }


    const element = (data, index) => (
        <TouchableOpacity onPress={() => props.navigation.navigate('RequestCheck')}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>ตรวจสอบ</Text>
            </View>
        </TouchableOpacity>
    );

    return (

        <View style={styles.Tablecontainer}>
            <ScrollView>
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

    );

}

const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    Tablecontainer: { flex: 1, padding: 16, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: '#FFF', },
    head: { height: Dimensions.get('window').height * 0.15, backgroundColor: '#FFF' },
    text: { fontFamily: 'pr-reg', marginVertical: 15 },
    row: { flexDirection: 'row', backgroundColor: '#FFF', justifyContent: 'center', borderBottomColor: '#000', borderBottomWidth: .5, borderBottomColor: '#D3D2B3' },
    btn: { width: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFFC1B', borderRadius: 15, justifyContent: 'center', padding: 5 },
    btnText: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: 12 }

});


export default RequestMain