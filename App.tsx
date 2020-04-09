/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [state, setState] = useState(0);
  return (
      <View style={style.position}>
        <TextInput style={style.text1} placeholder="e-mail Here" />
        <TextInput style={style.text2} placeholder="Password Here" />
        <Text>{state}</Text>
        <View style={style.conf}>
          <View style={style.button1}>
            <Button
              color='white'
              title="+100"
              onPress={() => setState(state + 100)}
            />
          </View>
          <View style={style.button2}>
            <Button
              title='+200'
              onPress={() => setState(state + 200)}
            />
          </View>
        </View>
      </View>
  
  );
};

const style = StyleSheet.create({
  position: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#080808',
    borderStyle: 'solid',
    borderColor: 'black'
  },
  text1: {
    height: 40,
    fontSize: 20,
    marginTop: 120,
    color: '#080808'
  },
  text2: {
    height: 40,
    fontSize: 20,
    marginTop: 10
  },
  conf: {
    flexDirection: 'row',
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#080818'
  },
  button1: {
    height: 40,
    width: 130,
    backgroundColor: '#cc4848',
    alignItems: 'center',
  },
  button2: {
    marginLeft: 10,
    height: 40,
    width: 130,
    backgroundColor: '#cc4848',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#999111'
  }
});

export default App;
