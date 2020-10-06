import React, { Component, useState } from 'react';
import { CheckBox, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import ResgisterTitle from './ResgisterTitle'





class RegisterCustForm extends Component {
    state = {
        termsAccepted: false
    }

    handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted })
    render() {

        return (
            <View style={styles.container}>
                <ResgisterTitle></ResgisterTitle>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                    <View style={styles.align__box}>
                        <View style={styles.form_title}>
                            <Text style={styles.form_title}>ชื่อผู้ใช้</Text>
                        </View>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View >
                        <Text style={styles.form_title}>รหัสผ่าน</Text>
                        <TextInput secureTextEntry={true} style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>ชื่อ</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>นามสกุล</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>เพศ</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>อายุ</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>สถานภาพ</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>หน่วยงาน/สังกัด/คณะ</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>เบอร์โทรศัพท์</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.form_title}>อีเมล</Text>
                        <TextInput style={styles.text__input}></TextInput>
                    </View>
                    <View style={styles.agree__detail_box}>
                        <Text style={styles.user__agreement}>ผู้ลงทะเบียนรับทราบยินยอมให้ผู้พัฒนานำข้อมูลทางสถิติไปใช้วิเคราะห์ในอนาคตได้</Text>
                        <Text style={styles.user__agreement}>ผู้พัฒนาจะไม่เผยแพร่ข้อมูลส่วนบุคคลในการระบุตัวตนของผู้ใช้งานได้(พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)</Text>
                    </View>

                    <View style={styles.checkBoxAlign}>
                        <CheckBox style={styles.checkBox}
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={styles.agree_text}>ยินยอมข้อตกลง</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.touch_agree_btn}>
                            <Text style={styles.confirm_text}>ยืนยัน</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingBottom: '20%',
        paddingHorizontal: '10%'
    }, align__box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    }, align__center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'


    }
    , form_title: {
        backgroundColor: '#FFF',
        color: '#000',
        fontSize: 18,


    },
    text__input: {
        width: '90%',
        backgroundColor: '#FFFFE3',
        padding: '3%',
        marginTop: '5%',
        marginBottom: '5%'
    },
    agree__detail_box: {
        marginTop: '10%'
    }
    ,
    user__agreement: {

        color: 'red',
        marginBottom: '2%'
    }, touch_agree_btn: {
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#FFFC1B',
        padding: '3%'
    }
    , agree_text: {
        alignSelf: 'center',
        alignContent: 'center',
        fontSize: 15
    }, checkBoxAlign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingVertical: '5%',
    },

    checkBox: {
        backgroundColor: '#FFF',
        width: 40,
        height: 40
    }
    , confirm_text: {

        textAlign: 'center',
        fontSize: 18


    }




});

export default RegisterCustForm;
