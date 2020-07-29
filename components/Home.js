import React from 'react';
import 'react-native-gesture-handler'
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingIn from './SingIn';

const Stack = createStackNavigator();

const PScreen= ({navigation}) => {
    return (

        <>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('./Background.jpg')} style={styles.image}>
        <ScrollView>
          <View>
          <View style={styles.container}>
          <Image source={require('./covid.png')} style={styles.image2} />
          </View>
          <View>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SingIn')}
          >
          <Text>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button2}
          >
          <Text>CREATE A NEW ACCOUNT</Text>
          </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textr}>
            "This application will be a help for all those who want a world without COVID-19"
            </Text>
            <Text style={styles.footer}>
            © COPYRIGHT - 2020
            </Text>
          </View>
          <Stack.Screen name="SingIn" component={SingIn}/>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 80
  },
  textr: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image2: {
    width: 400 ,
    height: 400 ,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10
  },
  footer: {
    bottom: 0,
    textAlign: 'center',
    marginTop: 30,
  }
});

export default PScreen;