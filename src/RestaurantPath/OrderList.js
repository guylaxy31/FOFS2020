import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
                    {/* <View style={{ backgroundColor: '#DDDDDD', padding: 8, borderRadius: 15 }}><Text style={styles.GetOrderText}>รับออเดอร์แล้ว</Text></View> */}
                    <View style={styles.SubmitContainer}><TouchableOpacity onPress={() => props.ShowSubmitBox()}><Text style={styles.SubmitBtnText}>ยืนยันรายการ</Text></TouchableOpacity></View>
                    <View style={styles.NotEnContainer}><TouchableOpacity onPress={() => props.ShowDemandBox()}><Text style={styles.NotEnBtnText}>วัตถุดิบไม่เพียงพอ</Text></TouchableOpacity></View>
                    <View style={styles.CancelContainer}><TouchableOpacity onPress={() => props.ShowCancelBox()} ><Text style={styles.CancelBtnText}>ยกเลิก</Text></TouchableOpacity></View>
                </View>

            </View >

            <Modal transparent={true} visible={props.orderlist.OrderSubmitState}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row' }}><Text style={styles.SubmitOrderText}>คุณยืนยันการรับออเดอร์ และเข้าสู่ขั้นตอนปรุงอาหาร</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainer}><TouchableOpacity onPress={() => props.CloseSubmitBox()}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => props.CloseSubmitBox()}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity></View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={props.orderlist.FoodDemandState}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}><Text style={styles.NotEnText}>คุณแน่ใจแล้วว่าจะปฏิเสธออเดอร์ ระบบจะทำการแจ้งเตือนลูกค้าเนื่องด้วยวัตถุดิบไม่เพียงพอ</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainer}><TouchableOpacity onPress={() => props.CloseDemandBox()}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => props.CloseDemandBox()}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={props.orderlist.CancelState}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}><Text style={styles.NotEnText}>คุณแน่ใจว่าต้องการปฏิเสธออเดอร์นี้</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainer}><TouchableOpacity onPress={() => props.CloseCancelBox()}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => props.CloseCancelBox()}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity></View>
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

    GetOrderText: { fontFamily: 'pr-reg', color: '#FFF', fontSize: Dimensions.get('window').height < 1000 ? 12 : 14 },
    BtnContainer: { flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' },
    SubmitContainer: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, },
    SubmitBtnText: { fontFamily: 'pr-reg', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    NotEnContainer: { backgroundColor: '#FF5400', padding: 8, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, },
    NotEnBtnText: { fontFamily: 'pr-reg', color: '#FFF', fontSize: Dimensions.get('window').height < 1000 ? 12 : 14 },
    CancelContainer: { backgroundColor: '#FFF', padding: 8, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, },
    CancelBtnText: { fontFamily: 'pr-reg', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },

    ModalContainer: { alignSelf: 'center', width: 350, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 30, borderRadius: 15, justifyContent: 'center', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    SubmitOrderText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10, textAlign: 'center' },
    NotEnText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10, textAlign: 'center' },

    TouchContainer: { backgroundColor: '#FFFC1B', borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    SubmitButtonText: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    TouchBackContainer: { backgroundColor: '#FFF', borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, color: '#000' },

})

const mapStatetoProps = (state) => {
    return {

        orderlist: state.orderlist

    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        ShowSubmitBox: () => {
            dispatch({
                type: "SHOW_SUBMITBOX",
            })
        },
        CloseSubmitBox: () => {
            dispatch({
                type: "CLOSE_SUBMITBOX",
            })
        },
        ShowDemandBox: () => {
            dispatch({
                type: "SHOW_DEMANDBOX",
            })
        },
        CloseDemandBox: () => {
            dispatch({
                type: "CLOSE_DEMANDBOX",
            })
        },
        ShowCancelBox: () => {
            dispatch({
                type: "SHOW_CANCELDBOX",
            })
        },
        CloseCancelBox: () => {
            dispatch({
                type: "CLOSE_CANCELBOX",
            })
        },


    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(OrderList);

