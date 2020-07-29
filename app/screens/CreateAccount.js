import React from 'react';
import 'react-native-gesture-handler';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Header } from "react-native-elements";
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
import LinearGradient from 'react-native-linear-gradient';


// @assets
const backgroundImage = require('../assets/Background.jpg');
const createAccountImage = require('../assets/CreateAccount.png')
const CreateAccount = () => {
  return (
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
        <Image source={createAccountImage} style={styles.accountImage} />
        </View>
        <View style={styles.container}>
        <Text style={styles.textDescription}>First Name</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>Last Name</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>ID Type</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>ID number</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>Email</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription}>Confirm Email</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.textDescription} >Password</Text>
          <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
          <Text style={styles.textDescription}>Confirm Password</Text>
          <TextInput style={styles.textInput} secureTextEntry={true}></TextInput>
          <View style={styles.container}>
          <RadioGroup
            onSelect = {(index, value) => this.onSelect(index, value)}>
            <RadioButton value={'item1'} >
          <Text style={styles.textRadioB}>
            I accept the terms and conditions of the application 'LATN19' to help the country to control 
            the pandemic that the world is experiencing</Text>
            </RadioButton>
            </RadioGroup>
            </View>
            <View style={styles.container}>
            <TouchableOpacity
                style={styles.registerButton}>
                <Text>REGISTER NOW</Text>
          </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
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
    marginBottom: 10,
    height: 40,
    width: 300,
    fontSize: 15,
    textAlign: 'center',
  },
  accountImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
  },
  registerButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom: 100,
    width: 200,
    textAlign: 'center',
    fontFamily: 'text-security-disc'
  },
  textDescription: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 2,
    padding: 6
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
  },
  textRadioB : {
      width: 300,
      textAlign: 'center'
  }
  
  });

export default CreateAccount;
