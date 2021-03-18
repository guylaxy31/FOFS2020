import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, TextInput } from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import baseUrl from '../../assets/common/baseUrl';
import axios from "axios";
import { object } from 'yup';
import { connect } from "react-redux";
import * as action from "../../store/action/cartAction";
import FoodMenuConfirm from './FoodMenuConfirm';
import { TouchableRipple } from 'react-native-paper';

const FoodMenuCustom = props => {


    const [item, setItem] = useState(props.route.params);
    const [options, setOptions] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [varaitions, setVaraitions] = useState([]);
    const [checkoptions, setCheckoptions] = useState(false);
    const [checkingredients, setCheckingredients] = useState(false)
    const [checkvaraitions, setCheckvaraitions] = useState(false)


    const [selectvaraitions, setselectvaraitions] = useState({ id: 0, value: 0 });
    const [selectingredients, setselectingredients] = useState({ id: 0, value: 0 });
    const [selectoptions, setselectoptions] = useState({ id: 0, value: 0 });
    const [describe, setDescribe] = useState('');

    const [totalprices, settotalprices] = useState(0)

    const [variationView, setvariationView] = useState(false)
    const [ingredientsView, setingredientsView] = useState(false)
    const [optionView, setoptionView] = useState(false)

    // console.log(item.item.menu_name);
    // console.log(`${baseUrl}restaurant/options/${item.item._id}`);
    // console.log(item.item);

    useEffect(() => {

        axios
            .get(`${baseUrl}restaurant/options/${item.item._id}`)
            .then((res) => {
                setOptions(res.data);

            })
            .catch((error) => { console.log(error); })

        axios
            .get(`${baseUrl}restaurant/ingredients/${item.item._id}`)
            .then((res) => {
                setIngredients(res.data);


            })
            .catch((error) => { console.log(error) })
        axios
            .get(`${baseUrl}restaurant/varaitions/${item.item._id}`)
            .then((res) => {
                setVaraitions(res.data);

            })


        return () => {
            setOptions([]);
            setIngredients([]);
            setVaraitions([])
        }
    }, [])

    useEffect(() => {


        if (Object.keys(varaitions)[0] == undefined) {
        } else {
            Object.keys(varaitions.varaition).length > 1 ?
                setvariationView(true)
                :
                setvariationView(false)
        }


        if (Object.keys(ingredients)[0] == undefined) {
        } else {
            Object.keys(ingredients.ingredient).length > 1 ?
                setingredientsView(true)
                :
                setingredientsView(false)
        }

        if (Object.keys(options)[0] == undefined) {
            // console.log('Loading not finish ===== Undefined !!!')
        } else {
            // console.log('option is', Object.keys(options.option).length)
            Object.keys(options.option).length > 1 ?
                setoptionView(true)
                :
                setoptionView(false)
        }
        console.log('-------------------')
        console.log('variation view state is ', variationView)
        console.log('ingredient view state is ', ingredientsView)
        console.log('option view state is ', optionView)

    }, [varaitions, ingredients, options, variationView, ingredientsView, optionView])

    // console.log('value -> ', Object.keys(options)[0], ' result is ', tempState)
    // if (Object.keys(options).length != 0) { setTempState(true) }
    // else (setTempState(true))

    return (

        <View style={styles.container} >

            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>

                    <View><Image style={styles.imageTag} source={{ uri: item.item.menu_image }}></Image></View>
                    <View><Text style={styles.MenuTitleText}>เมนู {item.item.menu_name}</Text></View>
                    {/* {checkvaraitions == true ? ( */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 56, marginBottom: 16 }}>

                            {variationView === true ?
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                                    <View style={{ flexDirection: 'column', marginLeft: 56, marginBottom: 16 }}>
                                        <RadioForm

                                            radio_props={varaitions.varaition}
                                            initial={0}
                                            animationion={true}
                                            onPress={(value, index) => { setselectvaraitions({ ...selectvaraitions, id: varaitions.varaition[index].label, value: value }) }}
                                            buttonColor={'#E4E4E4'}
                                            selectedButtonColor={'#908F7D'}

                                            labelStyle={{ fontSize: 16, color: '#4F4F4F', fontFamily: 'pr-reg', marginBottom: 8, justifyContent: 'space-between' }}
                                            buttonSize={10}
                                        />
                                        <Text style={styles.detailTextPrice}>ราคาปริมาณ +{selectvaraitions.value} ฿</Text>

                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginRight: 80 }}>
                                    </View>

                                </View>


                                : null
                            }

                            {ingredientsView === true ?
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                    <View style={{ flexDirection: 'column', marginLeft: 56, marginBottom: 16 }}>
                                        <RadioForm
                                            radio_props={ingredients.ingredient}
                                            initial={0}
                                            animationion={true}
                                            onPress={(value, index) => { setselectingredients({ ...selectingredients, id: ingredients.ingredient[index].label, value: value }) }}
                                            buttonColor={'#E4E4E4'}
                                            selectedButtonColor={'#908F7D'}

                                            labelStyle={{ fontSize: 16, color: '#4F4F4F', fontFamily: 'pr-reg', marginBottom: 8, justifyContent: 'space-between' }}
                                            buttonSize={10}
                                        />
                                        <Text style={styles.detailTextPrice}>ราคาวัตถุดิบ +{selectingredients.value} ฿</Text>
                                    </View>



                                </View>
                                :
                                null
                            }

                            {optionView === true ?
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                                    <View style={{ flexDirection: 'column', marginLeft: 56 }}>
                                        <RadioForm
                                            radio_props={options.option}
                                            initial={0}
                                            animationion={true}
                                            onPress={(value, index) => { setselectoptions({ ...selectoptions, id: options.option[index].label, value: value }) }}
                                            buttonColor={'#E4E4E4'}
                                            selectedButtonColor={'#908F7D'}
                                            labelStyle={{ fontSize: 16, color: '#4F4F4F', fontFamily: 'pr-reg', marginBottom: 8, justifyContent: 'space-between' }}
                                            buttonSize={10}
                                        />
                                        <Text style={styles.detailTextPrice}>ราคาท็อปปิ้ง +{selectoptions.value} ฿</Text>
                                    </View>

                                </View>
                                :
                                null
                            }

                            <View style={{ width: '100%', marginVertical: 20, flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'pr-reg', textAlign: 'left', marginBottom: 24 }}>ฝากถึงร้านเพิ่มเติม (ถ้ามี)</Text>
                                <TextInput multiline={true} numberOfLines={3} style={styles.TextInputBox} onChangeText={(value) => {
                                    setDescribe(value)
                                }}></TextInput>
                            </View>
                            {/* <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFFEB8', paddingVertical: 8 }}>
                        <Text style={styles.detailTotalTextTitle}>รวม</Text>
                        <Text style={styles.detailTotalPrice}>{totalprices} ฿</Text>
                    </View> */}

                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 32, width: 248 }}>
                                <TouchableOpacity style={styles.btnsubmit} onPress={() => { props.addItemcart(item.item, selectvaraitions, selectingredients, selectoptions, describe), props.navigation.navigate('FoodMenuMain') }}><Text style={styles.btnSubmitText}>ยืนยัน</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnCancel} onPress={() => props.navigation.navigate('FoodMenuMain')} ><Text style={styles.btnCancelText}>ย้อนกลับ</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View >
                </View>
            </ScrollView>
        </View>

    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemcart: (menus, vaId, ingreId, optionId, describe) => { dispatch(action.addToCart({ quantity: 1, menus, varId: vaId, ingreId: ingreId, optionId: optionId, describe })) }
    }
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },

    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 48, borderRadius: 16 },
    imageTag: { width: 248, height: 248, borderRadius: 16 },
    MenuTitleText: { fontFamily: 'pr-bold', color: '#000', fontSize: 18, marginVertical: 8 },
    detailTextTitle: { fontFamily: 'pr-reg', color: '#6F6F6F' },
    detailTextPrice: { flex: 1, flexWrap: 'wrap', fontFamily: 'pr-reg', color: '#000', fontSize: 16, backgroundColor: '#FFFEB8', justifyContent: 'center', alignItems: 'center', padding: 8, },
    detailTotalTextTitle: { fontFamily: 'pr-bold', fontSize: 24, color: '#000' },
    detailTotalPrice: { fontFamily: 'pr-bold', fontSize: 24, color: '#000' },

    TextInputBox: { width: 248, alignItems: 'center', textAlignVertical: 'top', height: 80, borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 32, borderRadius: 16, fontFamily: 'pr-reg' },

    btnsubmit: { backgroundColor: '#FFFC1B', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 16, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnSubmitText: { fontFamily: 'pr-reg', fontSize: 16 },

    btnCancel: { backgroundColor: '#FFF', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 16, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnCancelText: { fontFamily: 'pr-reg', fontSize: 16 }
});


export default connect(null, mapDispatchToProps)(FoodMenuCustom);