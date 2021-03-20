import React , {useState,useContext,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, TextInput, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from "react-redux";
import * as actions from '../../store/action/cartAction';
import CartItem from './CartItem';
import AuthGlobal from "../Context/Store/AuthGlobal";
// import cartItem from '../../store/reducer/cartItem';
import { SwipeListView } from 'react-native-swipe-list-view'
const FoodMenuConfirm = (props) => {
    // console.log(props);
    const context = useContext(AuthGlobal);

    const [orderDetail,setOrderDetail] = useState([]);
    const [customer , setCustomer] = useState();
    const [restaurant ,setRestaurant] = useState();
    console.log("context is " ,context);
    console.log("props of cart",Object.keys(props.cartItem));
    var total = 0;
    var restaid = "";
    props.cartItem.forEach(cart => {
        return (total += (cart.menus.price + cart.varId.value + cart.ingreId.value + cart.ingreId.value)*cart.quantity)
    })
    props.cartItem.forEach(resid =>{
        return restaid = `${resid.resId}`
    })

    useEffect(() => {
        setOrderDetail(props.cartItem);
        if (context.stateUser.isAuthenticated) {
            setCustomer(context.stateUser.user.userId)
            setRestaurant(restaid)
        }else{
            props.navigation.navigate("LoginHome");
            Toast.show({
                topOffset: 60,
                type: "error",
                text1: "Please Login to Checkout",
                text2: ""
            });
        }
        return () => {
            setOrderDetail([]);
        }
    }, [])
    console.log("customerId is a  ",customer);
    console.log("restaurantId is a  ",restaurant);
    return (
        <View>
            {props.cartItem.length ? (

                <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                    <View style={[styles.CardContainer, { flex: 1, marginTop: 64, marginBottom: 96 }]}>
                        <View style={styles.ConcluContainer}><MaterialIcons name="restaurant-menu" size={32} color="black" style={{ marginRight: 8 }} /><Text style={styles.concluText}>สรุปรายการ</Text></View>

                        <View>
                            <FlatList
                                data={props.cartItem}
                                renderItem={({ item }) =>
                                    <CartItem item={item} onRemove={()=>props.removeFromCart(item)}/>
                                }
                                keyExtractor={item => item.menus._id}
                                horizontal={false}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                style={{ backgroundColor: '#FFF', flexGrow: 0 }}
                            />

                            <View style={styles.totalpricescontainer}>
                                <Text style={styles.detailTotalTextTitle}>รวมทั้งหมด</Text>
                                <Text style={styles.detailTotalPrice}>{total} ฿</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                                <TouchableOpacity style={styles.btnSubmit} onPress={() => props.navigation.navigate('FoodStatus')}><Text style={styles.btnSubmitText}>สั่งอาหาร</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnCancel} onPress={() => props.navigation.navigate('FoodMenuMain')} ><Text style={styles.btnCancelText}>กลับไปเลือกเมนู</Text></TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>

            ) : (
                <View style={styles.container}>

                    <View style={styles.CardContainer}>
                        <View style={styles.ConcluContainer}><MaterialIcons name="restaurant-menu" size={32} color="black" style={{ marginRight: 8 }} /><Text style={styles.concluText}>สรุปรายการ</Text></View>

                        <View style={{ marginTop: 56, width: '100%', backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, borderRadius: 16, paddingVertical: 32, paddingHorizontal: 8, height: 168, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'pr-reg', fontSize: 16, color: 'gray', textAlign: 'center' }}>ไม่มีรายการอาหารที่สั่ง</Text>
                            <Text style={{ fontFamily: 'pr-reg', fontSize: 16, color: 'gray', textAlign: 'center' }}>เลือกดูเมนูอาหารได้ที่หน้าหลัก</Text>
                        </View>

                    </View>

                </View >
            )
            }

        </View >
    );

};
const mapStatetoProps = (state) => {
    const { cartItem } = state;
    return {
        cartItem: cartItem,
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => dispatch(actions.clearCart()),
      removeFromCart: (item) => dispatch(actions.removeFromCart(item))
      }
  }
const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', marginBottom: 16, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', paddingTop: 64 },
    CardContainer: { height: '100%', flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 24, width: 376, backgroundColor: "#FFF", borderRadius: 16, },

    ConcluContainer: { flexWrap: 'wrap', width: '80%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFFEB8', paddingVertical: 16, borderTopRightRadius: 48, borderBottomEndRadius: 48, marginRight: 24, alignSelf: 'flex-start', paddingHorizontal: 16, marginLeft: -48, marginBottom: 32 },
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

    totalpricescontainer: { flexWrap: 'wrap', width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFFFDD', paddingVertical: 16, marginTop: 96, borderTopRightRadius: 48, borderBottomEndRadius: 48, alignSelf: 'flex-start', paddingHorizontal: 16, marginLeft: -48, marginBottom: 32 },
    detailTotalTextTitle: { fontFamily: 'pr-reg', fontSize: 24, color: '#3C3C3C', },
    detailTotalPrice: { fontFamily: 'pr-reg', fontSize: 24, color: '#3C3C3C', alignSelf: 'center' },

    btnSubmit: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 16, marginRight: 24, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 3, shadowOpacity: 0.26 },
    btnSubmitText: { fontFamily: 'pr-reg', paddingHorizontal: 8, fontSize: 16 },

    btnCancel: { backgroundColor: '#FFF', padding: 8, borderRadius: 16, marginLeft: 24, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26 },
    btnCancelText: { fontFamily: 'pr-reg', paddingHorizontal: 8, fontSize: 16 }
});


export default connect(mapStatetoProps, mapDispatchToProps)(FoodMenuConfirm);