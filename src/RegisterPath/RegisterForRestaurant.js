import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux'

import AnimatedMultistep from "react-native-animated-multistep";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";

const allSteps = [
    { name: "step 1", component: Step1 },
    { name: "step 2", component: Step2 },
    { name: "step 3", component: Step3 }
];

const RegisterForRestaurant = props => {
    onNext = () => {

        console.log("Next");
    };

    /* define the method to be called when you go on back step */

    onBack = () => {
        console.log("Back");
    };

    /* define the method to be called when the wizard is finished */

    finish = finalState => {
        console.log(finalState);
    };


    return (

        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >

                <View style={{ flex: 1 }}>
                    <AnimatedMultistep
                        steps={allSteps}
                        onFinish={props.finish}
                        onBack={props.onBack}
                        onNext={props.onNext}
                        comeInOnNext="fadeInRight"
                        OutOnNext="fadeOutLeft"
                        comeInOnBack="fadeInLeft"
                        OutOnBack="fadeOutRight"
                        duration={.025}
                    />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },
    FormContainer: { width: '100%', marginVertical: 6 },

    RegisterTitle: { flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' },
    TitleText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginLeft: 5, marginVertical: 20 },
    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 300, paddingVertical: 5, paddingHorizontal: 20, height: Dimensions.get('window').height * .058, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    FormContainerWrap: { alignSelf: 'center' },


    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: 16, marginVertical: 5, },
    ModalContainer: { backgroundColor: '#fff', margin: 50, padding: 40, borderRadius: 15 },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1, },
    TouchBackButton: { backgroundColor: '#D4D4D4', borderRadius: 15, marginTop: 10, paddingVertical: '2%', width: '50%', alignSelf: 'center', },
    closeButton: { fontFamily: 'pr-reg', textAlign: 'center' },

    submitButton: { textAlign: 'center', fontFamily: 'pr-reg', backgroundColor: 'red', width: '30%', padding: '2%', borderRadius: 15, backgroundColor: '#FFFC1B', color: '#000', alignSelf: 'center' },
    TouchReadButton: { marginBottom: '5%' },
    readforSubmit: { fontFamily: 'pr-bold', textAlign: 'center', fontSize: 16 },
    CheckBoxContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: '5%' }
});

const mapStatetoProps = (state) => {
    return {
        consense: state.consense
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

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterForRestaurant);