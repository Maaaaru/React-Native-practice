import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, Alert } from 'react-native'
import SignUp from './signup'
import { NavigationContainer } from '@react-navigation/native'

const loading = () => {

  const state = {
    animating: true
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  const animating = state.animating;
  return (
    <View style={styles.container}>
      <Text>Loading This Page</Text>
      <ActivityIndicator
        color = '#0000aa'
        size = "large"
      />
    </View>
  )
}

export default loading;