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

const SingIn = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.container}>
          <Text>Hola</Text>
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
  textr: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image2: {
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

export default SingIn;
