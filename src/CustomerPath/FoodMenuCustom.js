import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, TextInput } from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const FoodMenuCustom = props => {
    var radio_qty_props = [
        { label: 'ธรรมดา', value: 'normal' },
        { label: 'พิเศษ', value: 'special' },
    ];
    var radio_igd_props = [
        { label: 'หมู', value: 'pork' },
        { label: 'ไก่', value: 'chick' },
        { label: 'กุ้ง', value: 'prawn' },
    ];
    var radio_tp_props = [
        { label: 'ไข่ดาว', value: 'freid' },
        { label: 'ไข่เจียว', value: 'omelet' },
    ];
    const [item, setItem] = useState(props.route.params);
    console.log(item.item.menu_name);
    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View><Image style={styles.imageTag} source={{ uri: item.item.menu_image }}></Image></View>
                    <View><Text style={styles.MenuTitleText}></Text></View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 60 }}>
                            <RadioForm
                                radio_props={radio_qty_props}
                                initial={0}
                                // onPress={(value) => { this.setState({ value: value }) }}
                                buttonColor={'#E4E4E4'}
                                selectedButtonColor={'#908F7D'}
                                labelStyle={{ fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#4F4F4F', fontFamily: 'pr-reg', marginVertical: 5 }}
                                buttonSize={10}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginRight: 80 }}>
                            <Text style={styles.detailTextPrice}>+ 30 ฿</Text>
                            <Text style={styles.detailTextPrice}>+ 40 ฿</Text>
                        </View>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 80 }}>
                            <RadioForm
                                radio_props={radio_igd_props}
                                initial={0}
                                // onPress={(value) => { this.setState({ value: value }) }}
                                buttonColor={'#E4E4E4'}
                                selectedButtonColor={'#908F7D'}
                                labelStyle={{ fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#4F4F4F', fontFamily: 'pr-reg', marginVertical: 5 }}
                                buttonSize={10}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginRight: 80 }}>
                            <Text style={styles.detailTextPrice}>+ 0 ฿</Text>
                            <Text style={styles.detailTextPrice}>+ 0 ฿</Text>
                            <Text style={styles.detailTextPrice}>+ 0 ฿</Text>
                        </View>


                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                        <View style={{ flexDirection: 'column', marginLeft: 80 }}>
                            <RadioForm
                                radio_props={radio_tp_props}
                                initial={0}
                                // onPress={(value) => { this.setState({ value: value }) }}
                                buttonColor={'#E4E4E4'}
                                selectedButtonColor={'#908F7D'}
                                labelStyle={{ fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#4F4F4F', fontFamily: 'pr-reg', marginVertical: 5 }}
                                buttonSize={10}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginRight: 80 }}>
                            <Text style={styles.detailTextPrice}>+ 10 ฿</Text>
                            <Text style={styles.detailTextPrice}>+ 10 ฿</Text>

                        </View>


                    </View>

                    <View style={{ width: '100%', marginVertical: 20 }}>
                        <Text style={{ fontFamily: 'pr-reg', textAlign: 'left', marginLeft: 40, marginBottom: 20 }}>ฝากถึงร้านเพิ่มเติม (ถ้ามี)</Text>
                        <TextInput style={styles.TextInputBox}></TextInput>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F8F8F8', paddingVertical: 10 }}>
                        <Text style={styles.detailTotalTextTitle}>รวม</Text>
                        <Text style={styles.detailTotalPrice}>30 ฿</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <View style={styles.btnSubmit}><TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain')}><Text style={styles.btnSubmitText}>ยืนยัน</Text></TouchableOpacity></View>
                        <View style={styles.btnCancel}><TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain')} ><Text style={styles.btnCancelText}>ย้อนกลับ</Text></TouchableOpacity></View>
                    </View>
                </View>
            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },

    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },
    imageTag: { width: 250, height: 250, borderRadius: 15 },
    MenuTitleText: { fontFamily: 'pr-bold', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginVertical: 10 },
    detailTextTitle: { fontFamily: 'pr-reg', color: '#6F6F6F' },
    detailTextPrice: { fontFamily: 'pr-reg', color: '#A7A7A7', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 3 },
    detailTotalTextTitle: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000' },
    detailTotalPrice: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000' },

    TextInputBox: { height: 60, borderColor: 'gray', borderWidth: 1, marginHorizontal: 40, padding: 10, marginBottom: 30, borderRadius: 15, fontFamily: 'pr-reg' },

    btnSubmit: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 15, marginRight: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnSubmitText: { fontFamily: 'pr-reg', paddingHorizontal: 10 },

    btnCancel: { backgroundColor: '#FFF', padding: 8, borderRadius: 15, marginLeft: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnCancelText: { fontFamily: 'pr-reg' }
});


export default FoodMenuCustom