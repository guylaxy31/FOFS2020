import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import AppContext from '../Context/AppContext'

import PromotionRestaurant from './PromotionRestaurant'
import HextagonIcon from '../Themes/HextagonIcon'
import RecommendRestaurant from './RecommendRestaurant'
import NearRestaurant from './NearRestaurant'

import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Platform } from 'react-native';
import baseUrl from '../../assets/common/baseUrl';
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';



const Home = props => {
  console.log('--Homescreen [100%] Loaded on Device --> ', Platform.OS)

  const { AuthLogin, setAuthLogin } = useContext(AppContext);
  const { database, setDatabase } = useContext(AppContext);
  const [searchtext, setSearchtext] = useState('');
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {

    axios
      .get(`${baseUrl}home`)
      .then((res) => {
        setRestaurants(res.data);
      })

    return () => {
      setSearchtext();
      setRestaurants([]);
      setAuthLogin();
      setDatabase();
    }

  }, []);

  return (

    <View style={styles.container}>

      <View style={styles.nav__container}>
        {AuthLogin == true ?
          <Header
            containerStyle={{ backgroundColor: '#FFFC1B', height: 56, flexDirection: 'row', paddingTop: 0, paddingHorizontal: 16 }}
            leftComponent={<TouchableOpacity onPress={() => props.navigation.openDrawer()}><FontAwesome style={styles.iconAlign} name="bars" size={24} color="#000" /></TouchableOpacity>}
            rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('ProfileSetting')} style={{ alignItems: 'center' }}><MaterialCommunityIcons name="account" size={24} /><Text style={styles.usernameText}>{database.username}</Text></ TouchableOpacity>}
          />
          : // ถ้ายังไม่ได้ Login
          <Header
            containerStyle={{ backgroundColor: '#FFFC1B', height: 56, flexDirection: 'row', paddingTop: 0, paddingHorizontal: 16 }}
            leftComponent={<TouchableOpacity onPress={() => props.navigation.openDrawer()}><FontAwesome style={styles.iconAlign} name="bars" size={24} color="#000" /></TouchableOpacity>}
            rightComponent={<TouchableOpacity onPress={() => props.navigation.navigate('LoginHome')}><Text style={styles.HedaerTitleTxt}>เข้าสู่ระบบ</Text></ TouchableOpacity>}
          />}
      </View>

      <ScrollView style={styles.scroll_View} showsVerticalScrollIndicator={false}>

        <View style={styles.SearchBoxContainer}>
          <TouchableOpacity><FontAwesome style={styles.iconAlign} name="search" size={22} color="#C7BDAC" /></TouchableOpacity>
          <TextInput onChangeText={(value) => setSearchtext(value)} value={searchtext} placeholder={'ค้นชื่อร้าน / ชื่อเมนู'} style={styles.textinput_field} />
        </View>

        <View style={styles.TitlePromotionAlign}>
          <HextagonIcon />
          <Text style={styles.PromotionTxt}>โปรโมชั่น ส่วนลด</Text>
          <HextagonIcon />
        </View>

        <FlatList
          // data={tempdatabase.PromotionList}
          renderItem={({ item }) =>
            <TouchableOpacity ><PromotionRestaurant imageUri={item.imageUri} /></TouchableOpacity>}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />

        <View style={styles.titleAlign}>
          <HextagonIcon />
          <Text style={styles.headerText}>เมนูจากร้านแนะนำ</Text>
        </View>

        <FlatList
          data={restaurants}
          keyExtractor={item => item._id}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.imageborder} onPress={() => props.navigation.navigate('FoodMenuMain', { resId: item._id })}><RecommendRestaurant imageUri={item.res_image} resName={item.restaurant_name} /></TouchableOpacity>}

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
            <TouchableOpacity onPress={() => props.navigation.navigate('FoodMenuMain', { resId: item._id })}><NearRestaurant imageUri={item.res_image} resName={item.restaurant_name} distance={item._id} /></TouchableOpacity>}

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

        <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantList')} style={styles.allresttouchbtn}><MaterialIcons name="select-all" size={24} color="black" style={{ marginRight: 8 }} /><Text style={styles.ViewAllTxt}>ดูร้านอาหารทั้งหมด</Text></TouchableOpacity>


      </ScrollView>


    </View >

  );

}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', },

  nav__container: { width: '100%' },
  HedaerTitleTxt: { fontFamily: 'pr-reg', fontSize: 16 },
  usernameText: { fontFamily: 'pr-light', fontSize: 16 },

  SearchBoxContainer: { flexDirection: 'row', backgroundColor: '#FFFFD9', padding: 8, borderRadius: 16, width: 296, height: 56, alignSelf: 'center', alignItems: 'center', marginVertical: 16 },
  iconAlign: { flexDirection: 'row', marginLeft: 8, marginRight: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
  textinput_field: { flex: 1, color: '#C7B292', fontFamily: 'pr-light', fontSize: 14, textAlign: 'left', justifyContent: 'center' },

  scroll_View: { height: '100%', alignSelf: 'stretch', backgroundColor: '#fff', padding: 0, margin: 0 },
  content__container: { height: '100%', alignSelf: 'stretch' },

  imageborderstyle: { backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, backgroundColor: '#FFF', padding: 1, borderRadius: 20 },

  TitlePromotionAlign: { flexDirection: 'row', marginLeft: 20, marginVertical: 16, justifyContent: 'center' },
  titleAlign: { flexDirection: 'row', marginLeft: 20, marginVertical: 16 },
  PromotionTxt: { fontFamily: 'pr-bold', fontSize: 18 },
  headerText: { fontFamily: 'pr-reg', fontSize: 18 },

  allresttouchbtn: { flexDirection: 'row', marginVertical: 32, marginBottom: 40, width: '50%', alignSelf: 'center', justifyContent: 'center', padding: 8, borderRadius: 16 },
  ViewAllTxt: { fontFamily: 'pr-reg', fontSize: 18, textAlign: 'center' }
});

export default Home;
