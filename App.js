import React from 'react';
import { Text , View, StyleSheet } from 'react-native';

import Home from './src/Home/Home'; // หน้าหลักของแอปพลิเคชัน




export default function App() {
  
  
  
  
  return (
    <View style={styles.container}>
      <Home />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
