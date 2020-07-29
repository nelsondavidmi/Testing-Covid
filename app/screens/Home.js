import React from 'react';
import 'react-native-gesture-handler';
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

// @assets
const backgroundImage = require('../assets/Background.jpg');
const covidImage = require('../assets/covid.png');

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'#DDDDDD'} />
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Image source={covidImage} style={styles.covidImage} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignInScreen')}>
                <Text>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}
              onPress={() => navigation.navigate('CreateAccountScreen')}>
                <Text>CREATE A NEW ACCOUNT</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textr}>
                "This application will be a help for all those who want a world
                without COVID-19"
              </Text>
              <Text style={styles.footer}>© COPYRIGHT - 2020</Text>
            </View>
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
    padding: 80,
  },
  textr: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  covidImage: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
  },
  footer: {
    bottom: 0,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default HomeScreen;
