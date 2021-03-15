import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, TextInput, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from "react-redux";
import * as actions from '../../store/action/cartAction';
import CartItem from './CartItem';
const FoodMenuConfirm = (props) => {
    console.log(props.cartItem);

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.CardContainer}>
                        <View style={styles.ConcluContainer}><MaterialIcons name="restaurant-menu" size={32} color="black" style={{ marginRight: 8 }} /><Text style={styles.concluText}>สรุปรายการ</Text></View>

                        {props.cartItem.length ? (
                            <View>
                                <FlatList
                                    data={props.cartItem}
                                    renderItem={({ item }) =>
                                        <CartItem item={item} />
                                    }
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal={true}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.nearStyle}
                                />
                            </View>
                        ) : (
                            <View>
                                <Text>You Don have item in cart</Text>
                            </View>
                        )}



                    </View>
                </ScrollView>
            </View >
        </>
    );

};
const mapStatetoProps = (state) => {
    const { cartItem } = state;
    return {
        cartItem: cartItem,
    }

};
const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 24, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 48, borderRadius: 16, marginTop: 54 },

    ConcluContainer: { width: '100%', paddingHorizontal: 32, flexDirection: 'row', alignSelf: 'center', marginBottom: 24 },
    concluText: { fontFamily: 'pr-bold', fontSize: 24 },

    menunamecontainer: { width: '100%', paddingHorizontal: 32, flexDirection: 'row', alignSelf: 'center' },
    MenuTitleText: { marginBottom: 5, fontFamily: 'pr-reg', fontSize: 16 },

    MenuListContainer: { flexWrap: 'wrap', width: '100%', backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 },
    MenuCustomText: { fontFamily: 'pr-reg', color: '#797979', marginLeft: 48, fontSize: 16 },
    PriceCustomText: { fontFamily: 'pr-reg', color: '#979797', marginRight: 80, fontSize: 16 },

    ETCContainer: { width: '100%', paddingHorizontal: 24, marginBottom: 10, marginTop: 32 },
    ETCText: { fontFamily: 'pr-reg', color: '#000', fontSize: 16 },
    CommentContainer: { width: '100%', paddingHorizontal: 80 },
    CommentText: { fontFamily: 'pr-reg', fontSize: 16, color: '#636363' },

    totalpricescontainer: { flexWrap: 'wrap', width: '80%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFFEB8', paddingVertical: 16, marginTop: 50, borderTopRightRadius: 48, borderBottomEndRadius: 48, marginRight: 24, alignSelf: 'flex-start', paddingHorizontal: 16 },
    detailTotalTextTitle: { fontFamily: 'pr-reg', fontSize: 24, color: '#3C3C3C', },
    detailTotalPrice: { fontFamily: 'pr-reg', fontSize: 24, color: '#3C3C3C', alignSelf: 'center' },

    btnSubmit: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 16, marginRight: 24, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 3, shadowOpacity: 0.26 },
    btnSubmitText: { fontFamily: 'pr-reg', paddingHorizontal: 8, fontSize: 16 },

    btnCancel: { backgroundColor: '#FFF', padding: 8, borderRadius: 16, marginLeft: 24, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnCancelText: { fontFamily: 'pr-reg', paddingHorizontal: 8, fontSize: 16 }
});


export default connect(mapStatetoProps, null)(FoodMenuConfirm);