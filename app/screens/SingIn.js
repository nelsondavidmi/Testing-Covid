import React from 'react';
import 'react-native-gesture-handler';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Header } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

// @assets
const backgroundImage = require('../assets/Background.jpg');
const singInImage = require('../assets/SingIn.png');

export default class SingIn extends React.Component {
constructor() {
  super()

  this.state = {
    user: '',
    password: ''
  }
}

onChangeUser(value){
  this.setState({
    user: value
  })
}

onChangePassword(value){
  this.setState({
    password: value
  })
}


  render () {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
    }

    return(
      <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Header
        leftComponent={{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'LATN 19', style: { color: 'white', fontSize: 20, fontWeight: 'bold', 
        letterSpacing: 2} }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
            colors: ['#8BDBF5', '#B8E9F9'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
         }}
        />
      <ImageBackground source={backgroundImage} style={styles.backgroungImage}>
        <ScrollView>
      <View style={styles.container}>
        <Image source={singInImage} style={styles.signInImage} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textDescription}>Email, User or Phone</Text>
          <TextInput style={styles.textInput} value={this.state.user} onChangeText={value => this.onChangeUser(value)}></TextInput>
          <Text style={styles.textDescription}>Password</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} value={this.state.password} onChangeText={value => this.onChangePassword(value)}></TextInput>
          <TouchableOpacity
                style={styles.SignInButton}>
                <Text>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={styles.textDescriptionForgot}>Forgot your Password or your account?</Text>
          <Text style={styles.textClickHere}
          onPress={() => Linking.openURL('http://google.com')}>
          Tap here
          </Text>
        </View>
        </ScrollView>
      </ImageBackground>
      </>
  )
}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroungImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signInImage: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20,
    height: 50,
    width: 250,
    fontSize: 15,
    textAlign: 'center',
  
  },
  SignInButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    textAlign: 'center',
    fontFamily: 'text-security-disc'
  },
  textDescription: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2,
    padding: 13
  },
  textDescriptionForgot: {
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 40
  },
  textClickHere: {
    textAlign: "center",
    color: 'black',
    backgroundColor: 'white',
    width: 72,
    fontSize: 12,
    letterSpacing: 1.5
  }
  
  });
