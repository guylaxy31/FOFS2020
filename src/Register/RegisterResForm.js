import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";

import * as resAction from "../../store/action/resaction";

const formSchema = yup.object({
    restaurant_name: yup.string().required(), // สามมารเพิ่ม min() max() ได้
    addr_line1: yup.string().required(),
    addr_line2: yup.string(),
    state: yup.string().required(),
    city: yup.string().required(),
    postal_code: yup.number().required(),
});

const RegisterResForm = () => {
    const dispatch = useDispatch();
    return (
        <KeyboardAvoidingView
            behavior="pending"
            keyboardVerticalOffset={100}
            style={{ flex: 1 }}
        >
            < ScrollView >

                <Formik
                    initialValues={{
                        restaurant_name: "",
                        addr_line1: "",
                        addr_line2: "",
                        state: "",
                        city: "",
                        postal_code: ""

                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        dispatch(resAction.createRes(values)).then(() => {
                            Alert.alert('Createed Successfuly')
                        }).catch(() => {
                            Alert.alert('an error occurred , Try Again'[{ text: 'OK' }])
                        })

                    }}
                >
                    {(props) => (
                        <View style={style.from}>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>Restaurant Name</Text>
                                <TextInput
                                    style={style.input}
                                    onChangeText={props.handleChange('restaurant_name')}
                                    onBlur={props.handleBlur('restaurant_name')}
                                    value={props.values.restaurant_name}
                                />
                                <Text style={style.error}>{props.touched.restaurant_name && props.errors.restaurant_name}</Text>
                            </View>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>Address line1</Text>
                                <TextInput
                                    style={style.input}
                                    onChangeText={props.handleChange('addr_line1')}
                                    onBlur={props.handleBlur('addr_line1')}
                                    value={props.values.addr_line1}
                                />
                                {/* <Text style={style.error}>{props.touched.addr_line1 && props.errors.addr_line1}</Text> */}
                            </View>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>Address line2</Text>
                                <TextInput
                                    style={style.input}
                                    onChangeText={props.handleChange('addr_line2')}
                                    onBlur={props.handleBlur('addr_line2')}
                                    value={props.values.addr_line2}
                                />
                            </View>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>State</Text>
                                <TextInput
                                    style={style.input}
                                    onChangeText={props.handleChange('state')}
                                    onBlur={props.handleBlur('state')}
                                    value={props.values.state}
                                />
                                {/* <Text style={style.error}>{props.touched.state && props.errors.state}</Text> */}
                            </View>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>City</Text>
                                <TextInput
                                    style={style.input}
                                    onChangeText={props.handleChange('city')}
                                    onBlur={props.handleBlur('city')}
                                    value={props.values.city}
                                />
                                {/* <Text style={style.error}>{props.touched.city && props.errors.city}</Text> */}
                            </View>
                            <View style={style.formGroup}>
                                <Text style={style.lable}>postal_code</Text>
                                <TextInput
                                    style={style.input}
                                    keyboardType="numeric"
                                    onChangeText={props.handleChange('postal_code')}
                                    onBlur={props.handleBlur('postal_code')}
                                    value={props.values.postal_code}
                                />
                                {/* <Text style={style.error}>{props.touched.postal_code && props.errors.postal_code}</Text> */}
                            </View>
                            <View style={style.buttonContariner}>
                                <Button title="Add res" onPress={props.handleSubmit} />
                            </View>
                        </View>

                    )}
                </Formik>

            </ScrollView >
        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    error: {
        color: 'red'

    }

});

export default RegisterResForm;