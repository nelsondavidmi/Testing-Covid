import React, { useState } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

// @assets
const backgroundImage = require('../assets/Background.jpg');
const createAccountImage = require('../assets/CreateAccount.png')
const CreateAccount = ({navigation}) => {
    
  const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cEmail, setCEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');  
  
  const storeData = async (value) => {
      const user  = { 
      name,
      lastName,
      email,
      cEmail,
      password,
      cPassword
    }
        try {
          await AsyncStorage.setItem('@user', JSON.stringify(user))
          navigation.navigate('SignInScreen')
          console.log('Entro',user)
        } catch (e) {
          // saving error
        }
      }

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
          <TextInput value={name} style={styles.textInput} onChangeText={value => setName(value)}></TextInput>
          <Text style={styles.textDescription}>Last Name</Text>
          <TextInput value={lastName} style={styles.textInput} onChangeText={value => setLastName(value)}></TextInput>
          <Text style={styles.textDescription}>Email</Text>
          <TextInput value={email} style={styles.textInput} onChangeText={value => setEmail(value)}></TextInput>
          <Text style={styles.textDescription}>Confirm Email</Text>
          <TextInput value={cEmail} style={styles.textInput} onChangeText={value => setCEmail(value)}></TextInput>
          <Text style={styles.textDescription} >Password</Text>
          <TextInput value={password} style={styles.textInput} secureTextEntry={true} onChangeText={value => setPassword(value)}></TextInput>
          <Text style={styles.textDescription}>Confirm Password</Text>
          <TextInput value={cPassword} style={styles.textInput} secureTextEntry={true} onChangeText={value => setCPassword(value)}></TextInput>
            <Text style={styles.textDescription}>{(password===cPassword)?<Text></Text> : <Text>Check your password</Text>}</Text>
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
                disabled= {false}
                onPress= {storeData}
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
