import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import RestTool from './RestTool';

const RestContainer = props => {

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textInline}>
          <Text style={styles.restNameTitle}>ร้าน</Text>
          <Text style={styles.restNameValue}>อาหาร 1</Text>
        </View>
        <View style={styles.textInline}>
          <Text style={styles.statusTitle}>สถานะ</Text>
          <Text style={styles.statusValue}>ผ่านการอนุมัติแล้ว</Text>
        </View>
      </View>
      <View style={styles.toolsFlex}>
        <View style={styles.toolCard}>
          <TouchableOpacity>
            <View style={styles.touchAlign}>
              <Image source={require('../../assets/restaurants/Subtraction2.png')}></Image>
              <View style={styles.textContainer}><Text style={styles.toolText}>แก้ไขรายการอาหาร</Text></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.toolCard}>
          <TouchableOpacity>
            <View style={styles.touchAlign}>
              <Image source={require('../../assets/restaurants/ic_room_service_24px.png')}></Image>
              <View style={styles.textContainer}><Text style={styles.toolText}>คิวลูกค้า</Text></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.toolsFlex}>
        <View style={styles.toolCard}>
          <TouchableOpacity>
            <View style={styles.touchAlignSpecial}>
              <Image source={require('../../assets/restaurants/ic_assessment_24px.png')}></Image>
              <View style={styles.textContainer}><Text style={styles.toolText}>ดูสถิติของร้าน</Text></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.toolCard}>
          <TouchableOpacity>
            <View style={styles.touchAlign}>
              <Image source={require('../../assets/restaurants/ic_event_note_24px.png')}></Image>
              <View style={styles.textContainer}><Text style={styles.toolText}>ประวัติสั่งทำอาหาร</Text></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>


    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolsFlex: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    marginVertical: 30
  }, toolCard: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '40%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.26,


  }, touchAlign: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: '35%',
    borderRadius: 15

  }, touchAlignSpecial: {
    alignItems: 'center',
    backgroundColor: '#6C6C6C',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: '35%',
    borderRadius: 15
  },
  toolText: {
    fontFamily: 'pr-reg',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

    width: '100%'
  },
  textContainer: {
    backgroundColor: '#FFFC1B',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }, textInline: {
    flexDirection: 'row'
  }, statusValue: {
    marginLeft: 5,
    fontFamily: 'pr-reg',
    color: 'green'
  }, restNameValue: {
    marginLeft: 5,
    fontFamily: 'pr-reg',
    fontSize: 18,

  }, restNameTitle: {
    fontFamily: 'pr-reg',
    fontSize: 18
  }, statusTitle: {
    fontFamily: 'pr-reg'
  }

});

export default RestContainer;
