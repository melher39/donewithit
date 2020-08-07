import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("heyyyyy"); // test test
  let x = 1;
  // x.toString();
  return (
    <View style={styles.container}>
      <Text>YO WHAT UP SON????</Text>
      <Text>YO WHAT UP SON????</Text>
      <Text>YO WHAT UP SON????</Text>
      <Text>YO WHAT UP SON????</Text>
      <Text>YO WHAT UP SON????</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

