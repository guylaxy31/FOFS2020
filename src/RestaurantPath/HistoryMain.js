import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const HistoryMain = props => {
    const tabledataset = {
        tableHead: ['เลขออเดอร์', 'วันที่', 'เวลา(น.)', 'ดูเพิ่มเติม'],
        tableData: [
            ['152', '18 ม.ค. 64', '11:04', 'ดูเพิ่มเติม'],
            ['153', '18 ม.ค. 64', '11:08', 'ดูเพิ่มเติม']
        ]
    }

    const element = (data, index) => (
        <TouchableOpacity onPress={() => props.navigation.navigate('HistoryList')}>
            <View style={styles.btn}>
                <Image style={styles.btnEdit} source={require('../../assets/restaurants/baseline_list_alt_black_18.png')}></Image>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.Tablecontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>



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
    text: { fontFamily: 'pr-reg', marginVertical: 15, fontSize: Dimensions.get('window').height * .018, textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF', justifyContent: 'center', borderBottomColor: '#000', borderBottomWidth: .5, borderBottomColor: '#D3D2B3' },
    btn: { flexDirection: 'row', width: Dimensions.get('window').width * 0.18, height: Dimensions.get('window').height * 0.054, backgroundColor: '#F8F8D9', borderRadius: 15, justifyContent: 'center', padding: 5, alignItems: 'center' },
    btnEdit: { width: 20, height: 20, }
});


export default HistoryMain