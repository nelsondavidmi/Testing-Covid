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


// @assets
const backgroundImage = require('../assets/Background.jpg');

const SingIn = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={backgroundImage} style={styles.backgroungImage}>
        <View style={styles.container}>
          <Text style={styles.textDescription}>Email, User or Phone</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>Password</Text>
          <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
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
      </ImageBackground>
    </>
  );
};

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
    paddingTop: 80
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

export default SingIn;
