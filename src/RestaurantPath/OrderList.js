import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, Modal } from 'react-native';
import { connect } from 'react-redux'

const OrderList = props => {

    return (
        <View style={styles.container}>
            <View style={styles.cardcontainer}>
                <View style={styles.YellowBar}></View>

                <View style={styles.FirstRow}>
                    <View><Text style={styles.IndexText}>{props.idx}</Text></View>
                    <View><Text style={styles.OrderNumberTextTitle}>หมายเลขออเดอร์</Text></View>
                    <View><Text style={styles.OrderNumberTextValue}>{props.ordernumber}</Text></View>

                    <View style={{ marginLeft: 'auto' }}><Text style={styles.TimeValueText}>{props.timeclock}</Text></View>
                    <View style={{ marginLeft: 5 }}><Text style={styles.TimeUnitText}>น.</Text></View>
                </View>

                <View style={styles.SecondRow}>
                    <Text style={styles.CustomerNameText}>คุณประเสริฐ อร่อยดี</Text>
                </View>

                <View style={styles.MenuRow}>
                    <View><Text style={styles.MenuText}>{props.menu[0][0]}</Text></View>
                    <View style={{ marginLeft: 'auto', marginRight: 50 }}><Text style={styles.CountingText}>{props.menu[0][1]}</Text></View>
                    <View><Text style={styles.PricesText}>{props.menu[0][2]} ฿</Text></View>
                </View>

                <View style={styles.TotalCountsRow}>
                    <Text style={styles.TotalCountsText}>รวม 1 รายการ</Text>
                </View>

                <View style={styles.TotalPricesRow}>
                    <Text style={styles.TotalPricesText}>25 ฿</Text>
                </View>

                <View style={styles.BtnContainer}>
                    <View style={{ backgroundColor: '#FFFC1B', padding: 8, borderRadius: 15 }}><TouchableOpacity onPress={() => props.ShowConsense()}><Text style={styles.SubmitBtnText}>ยืนยันรายการ</Text></TouchableOpacity></View>
                    <View style={{ backgroundColor: '#C6C699', padding: 8, borderRadius: 15 }}><TouchableOpacity><Text style={styles.NotEnBtnText}>วัตถุดิบไม่เพียงพอ</Text></TouchableOpacity></View>
                    <View ><TouchableOpacity><Text style={styles.CancelBtnText}>ยกเลิก</Text></TouchableOpacity></View>
                </View>


            </View >

            <Modal transparent={true} visible={props.consense.ConsenseState}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>ทำการยืนยัน ลูกค้าได้มารับอาหารและชำระเงินเรียบร้อยแล้ว</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => props.CloseConsense()} style={styles.TouchSubmitButton}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => props.CloseConsense()} style={styles.TouchBackButton}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )


}

const styles = StyleSheet.create({
    container: { width: '100%', alignSelf: 'stretch', backgroundColor: '#fff', alignItems: 'center', backgroundColor: '#FFF' },
    cardcontainer: { width: 500 / Dimensions.get('window').width + 350, backgroundColor: '#fff', alignSelf: 'center', marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 5, shadowOpacity: 0.26, marginTop: 20 },

    YellowBar: { width: '100%', backgroundColor: 'yellow', height: 10 },

    FirstRow: { flexDirection: 'row', padding: 20, alignItems: 'center' },
    IndexText: { fontFamily: 'pr-reg', marginRight: 15 },
    OrderNumberTextTitle: { fontFamily: 'pr-reg', marginRight: 10 },
    OrderNumberTextValue: { fontFamily: 'pr-reg', color: '#8B8B8B' },

    TimeValueText: { fontFamily: 'pr-reg', color: '#8B8B8B' },
    TimeUnitText: { fontFamily: 'pr-reg' },

    SecondRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center' },
    CustomerNameText: { fontFamily: 'pr-reg', color: '#8B8B8B', marginTop: -10 },

    MenuRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center' },
    MenuText: { fontFamily: 'pr-reg' },
    CountingText: { fontFamily: 'pr-reg' },
    PricesText: { fontFamily: 'pr-reg', color: '#CECEB7' },

    TotalCountsRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 5 },
    TotalCountsText: { fontFamily: 'pr-bold', marginLeft: 'auto' },

    TotalPricesRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 16 },
    TotalPricesText: { fontFamily: 'pr-bold', color: '#A7A799', marginLeft: 'auto', fontSize: Dimensions.get('window').height * .03 },

    BtnContainer: { flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' },
    SubmitBtnText: { fontFamily: 'pr-reg', color: '#000' },
    NotEnBtnText: { fontFamily: 'pr-reg', color: '#FFF' },
    CancelBtnText: { fontFamily: 'pr-reg', color: 'red' },

    ModalContainer: { backgroundColor: '#fff', margin: 30, padding: 40, borderRadius: 15, justifyContent: 'center', height: Dimensions.get('window').height > Dimensions.get('window').width ? '30%' : '40%', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },
    TouchSubmitButton: { backgroundColor: '#FFFC1B', borderRadius: 15, marginTop: 10, paddingVertical: '3%', width: '50%', alignSelf: 'center', width: 100, marginRight: 20 },
    TouchBackButton: { backgroundColor: '#EBEBEB', borderRadius: 15, marginTop: 10, paddingVertical: '3%', width: '50%', alignSelf: 'center', width: 100, marginLeft: 20 },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height * .023, color: '#FFF' },
    SubmitButtonText: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height * .023 },

})

const mapStatetoProps = (state) => {
    return {
        consense: state.consense,

    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        ShowConsense: () => {
            dispatch({
                type: "SHOW_CONSENSE",
            })
        },
        CloseConsense: () => {
            dispatch({
                type: "CLOSE_CONSENSE",
            })
        }

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(OrderList);

