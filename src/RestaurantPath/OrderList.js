import React, { Component, useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, Modal, TextInput ,FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const OrderList = props => {

    const [orderstate, setOrderstate] = useState({
        submit: false,
        fooddemand: false,
        cancel: false,
        submitBox: false,
        fooddemandBox: false,
        cancelBox: false,

    });
    console.log("menu ",props);

    return (
        <View style={styles.container}>
            <View style={styles.cardcontainer}>
                <View style={styles.YellowBar}></View>

                <View style={styles.FirstRow}>
                    <View><Text style={styles.IndexText}>{props.idx.substring(21, 24)}</Text></View>
                    <View><Text style={styles.OrderNumberTextTitle}>ออเดอร์</Text></View>
                    <View><Text style={styles.OrderNumberTextValue}>#{props.ordernumber.substring(21, 24)}</Text></View>

                    <View style={{ marginLeft: 'auto' }}><Text style={styles.TimeValueText}>{props.timeclock.substring(11, 16)}</Text></View>
                    <View style={{ marginLeft: 5 }}><Text style={styles.TimeUnitText}>น.</Text></View>
                </View>




                <FlatList
                    data={props.menu}

                    renderItem={({ item }) =>
                        <>
                            <View style={styles.MenuRow}>
                                <View><Text style={styles.MenuText}>{props.menu[0][1]}</Text></View>
                                <View style={{ marginLeft: 'auto', marginRight: 50 }}><Text style={styles.CountingText}>{props.menu[0][1]}</Text></View>
                                <View><Text style={styles.PricesText}>{props.menu[0][2]} ฿</Text></View>
                            </View>
                        </>
                    }
                    keyExtractor={item => item._id}

                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.TotalCountsRow}>
                    <Text style={styles.TotalCountsText}>ยอดรวม</Text>
                </View>

                <View style={styles.TotalPricesRow}>
                    <Text style={styles.TotalPricesText}>{props.totalPrice} ฿</Text>
                </View>

                <View style={styles.BtnContainer}>
                    {/* <View style={{ backgroundColor: '#DDDDDD', padding: 8, borderRadius: 15 }}><Text style={styles.GetOrderText}>รับออเดอร์แล้ว</Text></View> */}
                    <View><TouchableOpacity style={styles.TouchBtnAccept} onPress={() => setOrderstate({ ...orderstate, submitBox: true })}><AntDesign name="check" size={26} color="#7A794E" /></TouchableOpacity></View>
                    <View style={styles.NotEnContainer}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, fooddemandBox: true })}><Text style={styles.NotEnBtnText}>วัตถุดิบไม่เพียงพอ</Text></TouchableOpacity></View>
                    <View style={styles.TouchBtnCancel}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, cancelBox: true })} ><AntDesign name="close" size={24} color="#FF0A0A" /></TouchableOpacity></View>
                </View>

            </View >

            <Modal transparent={true} visible={orderstate.submitBox}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View ><Text style={styles.SubmitOrderText}>คุณยืนยันการรับออเดอร์</Text><Text style={styles.SubmitOrderText}>และเข้าสู่ขั้นตอนปรุงอาหาร</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainer}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, submitBox: false })}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, submitBox: false })}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity></View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={orderstate.fooddemandBox}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}><Text style={styles.NotEnText}>คุณแน่ใจแล้วว่าจะปฏิเสธออเดอร์ ระบบจะทำการแจ้งเตือนลูกค้าเนื่องด้วยวัตถุดิบไม่เพียงพอ</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainerGray}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, fooddemandBox: false })}><Text style={styles.SubmitButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, fooddemandBox: false })}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} visible={orderstate.cancelBox}>
                <View style={styles.ModelBackground}>
                    <View style={styles.ModalContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}><Text style={styles.NotEnText}>คุณแน่ใจว่าต้องการปฏิเสธออเดอร์นี้</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20, paddingHorizontal: 40 }}>
                            <View style={styles.TouchContainerRed}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, cancelBox: false })}><Text style={styles.SubmitForCCButtonText}>ยืนยัน</Text></TouchableOpacity></View>
                            <View style={styles.TouchBackContainer}><TouchableOpacity onPress={() => setOrderstate({ ...orderstate, cancelBox: false })}><Text style={styles.closeButtonTxt}>ย้อนกลับ</Text></TouchableOpacity></View>
                        </View>
                    </View>
                </View>
            </Modal>


        </View >
    )


}

const styles = StyleSheet.create({
    container: { width: '100%', alignSelf: 'stretch', backgroundColor: '#fff', alignItems: 'center', backgroundColor: '#FFF' },
    cardcontainer: { borderRadius: 15, width: 500 / Dimensions.get('window').width + 350, backgroundColor: '#fff', alignSelf: 'center', marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 5, shadowOpacity: 0.26, marginTop: 20 },

    YellowBar: { borderTopLeftRadius: 15, borderTopEndRadius: 15, width: '100%', backgroundColor: 'yellow', height: 10 },

    FirstRow: { flexDirection: 'row', padding: 20, alignItems: 'center' },
    IndexText: { fontFamily: 'pr-bold', marginRight: 10, fontSize: 16 },
    OrderNumberTextTitle: { fontFamily: 'pr-bold', marginRight: 5, fontSize: 16 },
    OrderNumberTextValue: { fontFamily: 'pr-bold', color: '#000', fontSize: 16 },

    TimeValueText: { fontFamily: 'pr-reg', color: '#8B8B8B', fontSize: 16 },
    TimeUnitText: { fontFamily: 'pr-reg', fontSize: 16, color: '#8B8B8B', },

    SecondRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center' },
    CustomerNameText: { fontFamily: 'pr-light', color: '#8B8B8B', marginTop: -10, fontSize: 16 },

    MenuRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center', backgroundColor: '#FCFCFC', paddingVertical: 5 },
    MenuText: { fontFamily: 'pr-bold', fontSize: 16 },
    CountingText: { fontFamily: 'pr-bold', fontSize: 16 },
    PricesText: { fontFamily: 'pr-reg', color: '#8B8B8B', fontSize: 14 },

    TotalCountsRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 5 },
    TotalCountsText: { fontFamily: 'pr-reg', marginLeft: 'auto', fontSize: 20 },

    TotalPricesRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 16 },
    TotalPricesText: { fontFamily: 'pr-bold', color: '#000', marginLeft: 'auto', fontSize: Dimensions.get('window').height * .03, fontSize: 20 },

    GetOrderText: { fontFamily: 'pr-reg', color: '#FFF', fontSize: Dimensions.get('window').height < 1000 ? 12 : 14 },
    BtnContainer: { flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' },
    SubmitContainer: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, },
    SubmitBtnText: { fontFamily: 'pr-reg', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    SubmitForCCButtonText: { fontFamily: 'pr-reg', color: '#FF0A0A', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, textAlign: 'center' },
    NotEnContainer: { backgroundColor: '#FFF', padding: 10, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, paddingHorizontal: 10 },
    NotEnBtnText: { fontFamily: 'pr-reg', color: '#000', fontSize: 16 },
    CancelContainer: { backgroundColor: '#FFF', padding: 8, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, },
    CancelBtnText: { fontFamily: 'pr-reg', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    TouchBtnAccept: { backgroundColor: '#FFF', padding: 5, borderRadius: 15, borderWidth: 3, borderColor: '#FFFC1B' },
    TouchBtnCancel: { backgroundColor: '#FFF', padding: 5, borderRadius: 15, borderWidth: 3, borderColor: '#FF0A0A' },


    ModalContainer: { alignSelf: 'center', width: 350, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 30, borderRadius: 15, justifyContent: 'center', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    SubmitOrderText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10, textAlign: 'center' },
    NotEnText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10, textAlign: 'center' },

    TouchContainer: { backgroundColor: '#FFFC1B', borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    TouchContainerGray: { backgroundColor: '#F5F5F5', borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    TouchContainerRed: { backgroundColor: '#FFF', borderColor: 'red', borderWidth: 1, borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    SubmitButtonText: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    TouchBackContainer: { backgroundColor: '#FFF', borderRadius: 15, marginTop: 10, padding: 8, width: 80, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, color: '#000' },

})


export default OrderList;

