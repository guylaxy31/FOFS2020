import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Image, Modal } from 'react-native';
import HextagonIcon from '../../Themes/HextagonIcon';
import { connect } from 'react-redux'

const step3 = props => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         totalSteps: "",
    //         currentStep: ""
    //     };
    // }

    const [totalSteps, totalStepsChange] = useState("")
    const [currentStep, currentStepChange] = useState("")

    const { getTotalSteps, getCurrentStep } = props;
    const nextStep = () => {
        const { next, saveState } = props;
        // Save state for use in other steps
        saveState({ name: "samad" });

        // Go to next step
        next();
    };

    const goBack = () => {
        const { back } = props;
        // Go to previous step
        back();
    }


    useEffect(() => {

        totalStepsChange(getTotalSteps())
        currentStepChange(getCurrentStep())
        
    })

    // const getDerivedStateFromProps = props => {
    //     const { getTotalSteps, getCurrentStep } = props;
    //     return {
    //         totalSteps: getTotalSteps(),
    //         currentStep: getCurrentStep()
    //     };
    // };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                <View style={styles.MainTitleTxt}><HextagonIcon /><Text style={styles.TitleText}>ส่งร้านอาหารเข้าร่วม</Text></View>
                <View style={styles.StatusContainer}>
                    <Image style={styles.StatusImg} source={require('../../../assets/register/StatusInActive.png')}></Image>
                    <Image style={styles.StatusImg} source={require('../../../assets/register/StatusInActive.png')}></Image>
                    <Image style={styles.StatusImg} source={require('../../../assets/register/StatusActive.png')}></Image>

                </View>
                <View style={styles.TitleContainer}><Text style={styles.TitleText2}>กรอกข้อมูลร้านอาหาร</Text></View>
                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อร้านอาหาร</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ที่ตั้งร้านอาหาร</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>

                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>จังหวัด</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อำเภอ</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>รหัสไปรษณีย์</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เว็ปไซต์(ถ้ามี)</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>

                <TouchableOpacity onPress={() => props.ShowConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>

                <View style={styles.ButtonContainer}>
                    <View style={styles.BtnTouchContainer}>
                        <TouchableOpacity onPress={goBack()}  >
                            <Text style={styles.BtnTxt}>ย้อนกลับ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BtnTouchContainer}>
                        <TouchableOpacity onPress={nextStep()}  >
                            <Text style={styles.BtnTxt}>ถัดไป</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <Modal transparent={true} visible={props.consense.ConsenseState}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>  ร้านค้ารับรองว่าได้ตรวจสอบข้อมูลก่อนนำเสนอบนแอปพลิเคชัน</Text></View>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>  อนุญาตให้มีการแสดงข้อมูลที่ระบุที่ตั้งของร้านอาหารได้</Text></View>
                            <View style={{ flexDirection: 'row', marginBottom: 50 }}><Text style={styles.consenseText}>  อนุญาตให้มีการแสดง QR Code ของบัญชีธนาคารในขั้นตอน payment</Text></View>

                            <TouchableOpacity onPress={() => props.CloseConsense()} style={styles.TouchBackButton}><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', backgroundColor: '#FFF', flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' },

    MainTitleTxt: { flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' },
    TitleText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginLeft: 5, marginVertical: 20 },

    StatusContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
    StatusImg: { marginHorizontal: 5 },

    FormContainer: { width: '100%', marginVertical: 6 },
    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 300, paddingVertical: 5, paddingHorizontal: 20, height: Dimensions.get('window').height * .058, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },

    ModalContainer: { backgroundColor: '#fff', margin: 30, padding: 40, borderRadius: 15, justifyContent: 'center', height: Dimensions.get('window').height > Dimensions.get('window').width ? '50%' : '60%', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },
    TouchBackButton: { backgroundColor: '#EBEBEB', borderRadius: 15, marginTop: 10, paddingVertical: '3%', width: '50%', alignSelf: 'center' },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height * .023 },

    TitleContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
    TitleText2: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6C6C' },
    ButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFF', },
    BtnTouchContainer: { backgroundColor: '#FFF', padding: 10, marginVertical: 30 },
    BtnTxt: { fontFamily: 'pr-reg' },

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
        },

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(step3);

