import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp: () => Promise<void> = async () => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      user.user.sendEmailVerification();
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  };

  const moveSignIn = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.title}>Feel you</Text>
            <TextInput
              value={email}
              style={styles.textInputContainer}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              style={styles.textInputContainer}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />
            <TouchableOpacity style={styles.button} onPress={signUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Button title="signin" onPress={moveSignIn} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop: 150,
    backgroundColor: 'white',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#808080',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'purple',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  button: {
    marginTop: 50,
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'purple',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default SignUp;