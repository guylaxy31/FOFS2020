import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import HextagonIcon from '../../Themes/HextagonIcon';

class step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSteps: "",
            currentStep: ""
        };
    }

    static getDerivedStateFromProps = props => {
        const { getTotalSteps, getCurrentStep } = props;
        return {
            totalSteps: getTotalSteps(),
            currentStep: getCurrentStep()
        };
    };

    nextStep = () => {
        const { next, saveState } = this.props;
        // Save state for use in other steps
        saveState({ name: "samad" });

        // Go to next step
        next();
    };

    goBack() {
        const { back } = this.props;
        // Go to previous step
        back();
    }

    render() {
        const { currentStep, totalSteps } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                    <View style={styles.MainTitleTxt}><HextagonIcon /><Text style={styles.TitleText}>ส่งร้านอาหารเข้าร่วม</Text></View>
                    <View style={styles.StatusContainer}>
                        <Image style={styles.StatusImg} source={require('../../../assets/register/StatusInActive.png')}></Image>
                        <Image style={styles.StatusImg} source={require('../../../assets/register/StatusActive.png')}></Image>
                        <Image style={styles.StatusImg} source={require('../../../assets/register/StatusInActive.png')}></Image>

                    </View>
                    <View style={styles.TitleContainer}><Text style={styles.TitleText2}>กรอกข้อมูลส่วนตัว</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อจริง</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>นามสกุล</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.GenderContainer}>
                        <TouchableOpacity onPress={() => props.SetMaleGender()}><Image style={styles.genderBtn} source={require('../../../assets/register/MaleBtn.png')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => props.SetFemaleGender()}><Image style={styles.genderBtn} source={require('../../../assets/register/FemaleBtn.png')}></Image></TouchableOpacity>
                    </View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อายุ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เบอร์ติดต่อ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อีเมล</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>Line ID</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.ButtonContainer}>
                        <View style={styles.BtnTouchContainer}>
                            <TouchableOpacity onPress={this.goBack}  >
                                <Text style={styles.BtnTxt}>ย้อนกลับ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.BtnTouchContainer}>
                            <TouchableOpacity onPress={this.nextStep}  >
                                <Text style={styles.BtnTxt}>ถัดไป</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
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

    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#CCC' },

    TitleContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
    TitleText2: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6C6C' },
    ButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFF', },
    BtnTouchContainer: { backgroundColor: '#FFF', padding: 10, marginVertical: 30 },
    BtnTxt: { fontFamily: 'pr-reg' },
})

export default step2;