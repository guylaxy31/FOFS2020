import React ,{useEffect}from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';

import { useDispatch ,useSelector} from 'react-redux'

import PromotionRestaurant from './PromotionRestaurant'
import HextagonIcon from '../Themes/HextagonIcon'
import RecommendRestaurant from './RecommendRestaurant'
import NearRestaurant from './NearRestaurant'

import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import * as resAction from '../../store/action/resaction'

const Home = props => {
  console.log('--Homescreen [100%] Loaded on Device --> ', Platform.OS)
  const dispatch = useDispatch();

  const {restaurants} = useSelector(state => state.restaurant)
  
  useEffect(() => {
    dispatch(resAction.fetchRes());
    
  }, [dispatch]);
  // const tempdatabase = {
  //   PromotionList: [
  //     {
  //       promotionTitle: 'shabu',
  //       imageUri: require('../../assets/promotions/shabupro.jpg'),
  //     },
  //     {
  //       promotionTitle: 'Macdonal',
  //       imageUri: require('../../assets/promotions/oth.jpg'),
  //     },
  //     {
  //       promotionTitle: 'Pizza',
  //       imageUri: require('../../assets/promotions/f01.jpg'),
  //     },
  //   ],
  //   RestaurantList: [
  //     {
  //       imageUri: require('../../assets/recommends/fried-chicken.jpg'),
  //       foodName: 'ไก่ทอด',
  //       resName: 'ร้านอาหาร1'
  //     },
  //     {
  //       imageUri: require('../../assets/recommends/chicken-rice.jpg'),
  //       foodName: 'ข้าวมันไก่',
  //       resName: 'ร้านอาหาร2'
  //     },
  //     {
  //       imageUri: require('../../assets/recommends/fried-rice.jpg'),
  //       foodName: 'ข้าวผัด',
  //       resName: 'ร้านอาหาร3'
  //     },
  //     {
  //       imageUri: require('../../assets/recommends/brownie.jpg'),
  //       foodName: 'ช็อกโกแลตบราวนี่',
  //       resName: 'ร้านอาหาร4'
  //     },
  //     {
  //       imageUri: require('../../assets/recommends/spaghetti.jpg'),
  //       foodName: 'สปาร์เก็ตตี้ขี้เมา',
  //       resName: 'ร้านอาหาร5'
  //     },
  //   ],
  //   NearList: [
  //     {
  //       resName: 'ร้าน NeuCafe',
  //       imageUri: require('../../assets/near/coffee.jpg'),
  //       distance: '0.25 km'
  //     },
  //     {
  //       resName: 'ร้าน SmileItalia',
  //       imageUri: require('../../assets/near/pizza.jpg'),
  //       distance: '0.4 km'
  //     },

  //   ]

  // }


  return (
    <View style={styles.container}>

      <View style={styles.nav__container}>

        <Header
          containerStyle={{ backgroundColor: '#FFFC1B', height: 60, flexDirection: 'row', paddingTop: 0 }}
          leftComponent={{ icon: 'menu', color: '#000', style: { marginLeft: 10 } }}
          rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('LoginHome')}><Text style={{ fontFamily: 'pr-reg', marginRight: Dimensions.get('window').height < 1000 ? 10 : 16, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 }}>เข้าสู่ระบบ</Text></ TouchableOpacity>}
        />
      </View>

      <ScrollView style={styles.scroll_View} showsVerticalScrollIndicator={false}>

        <View style={styles.SearchBoxContainer}>
          <TouchableOpacity><Icon style={styles.iconAlign} name="search" size={22} color="#C7BDAC" /></TouchableOpacity>
          <TextInput placeholder={'ค้นชื่อร้าน / ชื่อเมนู'} style={styles.textinput_field} />
        </View>

        <View style={styles.TitlePromotionAlign}>
          <HextagonIcon />
          <Text style={styles.PromotionTxt}>โปรโมชั่น ส่วนลด</Text>
          <HextagonIcon />
        </View>

        <FlatList
          // data={tempdatabase.PromotionList}
          renderItem={({ item }) =>
            <TouchableOpacity><PromotionRestaurant imageUri={item.imageUri} /></TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />

        <View style={styles.titleAlign}>

          <Text style={styles.headerText}>เมนูแนะนำ</Text>
        </View>

        <FlatList
          // data={tempdatabase.RestaurantList}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain')}><RecommendRestaurant imageUri={item.imageUri} foodName={item.foodName} resName={item.resName} /></TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />

        <View style={styles.titleAlign}>
          <HextagonIcon />
          <Text style={styles.headerText}>จากร้านอาหารใกล้คุณ</Text>
        </View>

        <FlatList
          data={restaurants}
          keyExtractor={item => item._id}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain' ,  {resId: item._id})}><NearRestaurant imageUri={item.imageUri} resName={item.restaurant_name} distance={item._id} /></TouchableOpacity>}

          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.nearStyle}
        />

<FlatList
          // data={tempdatabase.NearList}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain')}><NearRestaurant imageUri={item.imageUri} resName={item.resName} distance={item.distance} /></TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.nearStyle}
        />
        <View style={styles.ViewAllTxtContainer}>
          <TouchableOpacity><Text style={styles.ViewAllTxt}>ดูร้านอาหารทั้งหมด</Text></TouchableOpacity>
        </View>

      </ScrollView>

    </View >
  );

}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', },

  nav__container: { width: '100%' },

  SearchBoxContainer: { flex: 1, flexDirection: 'row', backgroundColor: '#FFFFD9', padding: 15, borderRadius: 15, width: Dimensions.get('window').width < Dimensions.get('window').height ? 300 : 450, height: Dimensions.get('window').width < Dimensions.get('window').height ? 50 : 70, alignSelf: 'center', marginVertical: 15 },
  iconAlign: { flex: 1, flexDirection: 'row', marginRight: '10%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
  textinput_field: { flex: 1, color: '#C7B292', fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, textAlign: 'left', justifyContent: 'center' },

  scroll_View: { height: '100%', alignSelf: 'stretch', backgroundColor: '#fff', padding: 0, margin: 0 },
  content__container: { height: '100%', alignSelf: 'stretch' },


  TitlePromotionAlign: { flexDirection: 'row', marginLeft: 20, marginVertical: 16, justifyContent: 'center' },
  titleAlign: { flexDirection: 'row', marginLeft: 20, marginVertical: 16 },
  PromotionTxt: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20 },
  headerText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20 },

  ViewAllTxtContainer: { marginLeft: 20, marginVertical: 30, marginBottom: 80 },
  ViewAllTxt: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginVertical: 18, textAlign: 'center' }
});

// const mapStatetoProps = (state) => {
//   return {
//     user: state.user,
//     loginStatus: state.loginStatus
//   }
// }

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       dispatch({
//         type: "setName",
//         payload: name
//       })
//     },
//     login: () => {
//       dispatch({
//         type: "LOGIN",
//       })
//     },
//     logout: () => {
//       dispatch({
//         type: "LOGOUT",
//       })
//     },
//   }
// }

export default Home;
