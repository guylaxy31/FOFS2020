import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RestTool from './RestTool';

class RestHeaderStatus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_align}>
          <Text style={styles.header_title_text}>ร้าน </Text>
          <Text style={styles.header_title_text}>นายยง</Text>
        </View>
        <View style={styles.text_align}>
          <Text style={styles.header_title_status}>สถานะ </Text>
          <Text style={styles.header_title_status_pass}>ได้รับอนุมัติแล้ว</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'stretch',
    marginLeft: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:40
  },
  text_align: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  header_title_text: {
    color: '#C9C600',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header_title_status: {
    color: '#000',
    fontSize: 16,
  },
  header_title_status_pass: {
    color: '#00C048',
    fontSize: 16,
  },
  header_title_status_notpass: {
    color: '#C00000',
    fontSize: 16,
  },
});

export default RestHeaderStatus;
