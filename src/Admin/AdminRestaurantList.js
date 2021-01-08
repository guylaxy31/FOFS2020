import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const AdminRestaurantList = props => {
    const tabledataset = {
        tableHead: ['#', 'ชื่อร้าน', 'จังหวัด', 'อนุมัติเมื่อ', 'รายการ'],
        tableData: [
            ['1', 'ร้านอาหาร1', 'เชียงใหม่', '15 ส.ค. 63', 'จัดการแก้ไข'],
            ['2', 'ร้านอาหาร2', 'เชียงราย', '16 ส.ค. 63', 'จัดการแก้ไข'],
            ['3', 'ร้านอาหาร3', 'เชียงใหม่', '18 ส.ค. 63', 'จัดการแก้ไข'],
            ['4', 'ร้านอาหาร4', 'กรุงเทพ', '19 ส.ค. 63', 'จัดการแก้ไข'],
            ['5', 'ร้านอาหาร5', 'ลำพูน', '21 ส.ค. 63', 'จัดการแก้ไข']
        ]
    }

    const element = (data, index) => (
        <TouchableOpacity onPress={() => props.navigation.navigate('ManageViewscreen')}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>จัดการแก้ไข</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.Tablecontainer}>
            <ScrollView>

                <View style={styles.RestaurantCountingContainer}><Text style={styles.CountingTxt}>ปัจจุันมีร้านอาหารเข้าร่วมทั้งหมด</Text><Text style={styles.CountingTxtNumber}>5</Text><Text style={styles.CountingTxt}>ร้าน</Text></View>

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

    RestaurantCountingContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2BF', paddingVertical: 5 },
    CountingTxt: { fontFamily: 'pr-reg', marginHorizontal: 5, fontSize: Dimensions.get('window').height * 0.021, color: '#66664D' },
    CountingTxtNumber: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * 0.025 },

    Tablecontainer: { flex: 1, padding: 16, paddingTop: Dimensions.get('window').height * 0.05, backgroundColor: '#FFF', },
    head: { height: Dimensions.get('window').height * 0.15, backgroundColor: '#FFF' },
    text: { fontFamily: 'pr-reg', marginVertical: 15, fontSize: Dimensions.get('window').height * .021 },
    row: { flexDirection: 'row', backgroundColor: '#FFF', justifyContent: 'center', borderBottomColor: '#000', borderBottomWidth: .5, borderBottomColor: '#D3D2B3' },
    btn: { width: Dimensions.get('window').width * 0.18, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFFC1B', borderRadius: 15, justifyContent: 'center', padding: 5 },
    btnText: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .016 }

});


export default AdminRestaurantList