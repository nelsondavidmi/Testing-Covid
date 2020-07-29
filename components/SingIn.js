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

const SingIn= () => {
    return (

        <>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('./Background.jpg')} style={styles.image}>
        <ScrollView>
          <View>
            <Text>
              Hola
            </Text>
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

export default SingIn;