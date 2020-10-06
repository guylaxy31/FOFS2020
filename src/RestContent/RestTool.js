import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import RestToolCard from './RestToolCard';

class RestTool extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollStyle}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        >
          {/* แบ่ง Layout ให้บรรทัดละ 2 คอลัมน์ในตัว */}
          <View style={styles.pair_of_tool}>
            <RestToolCard
              toolName="แก้ไขรายการอาหาร"
              initbg="#FFF"
              imageUri={require('../../assets/restaurants/Subtraction2.png')}
            ></RestToolCard>
            <RestToolCard
              toolName="คิวลูกค้า"
              initbg="#FFF"
              imageUri={require('../../assets/restaurants/ic_room_service_24px.png')}
            ></RestToolCard>
          </View>
          <View style={styles.pair_of_tool}>
            <RestToolCard
              toolName="ดูสถิติของร้าน"
              initbg="#6C6C6C"
              imageUri={require('../../assets/restaurants/ic_assessment_24px.png')}
            ></RestToolCard>
            <RestToolCard
              toolName="ประวัติสั่งทำอาหาร"
              initbg="#FFF"
              imageUri={require('../../assets/restaurants/ic_event_note_24px.png')}
            ></RestToolCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,

    marginTop: 10,
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pair_of_tool: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '15%',
  },
});

export default RestTool;
