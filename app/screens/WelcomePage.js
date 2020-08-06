import React, { useState, useEffect} from 'react';
import 'react-native-gesture-handler';
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
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

// @assets
const backgroundImage = require('../assets/Background.jpg');
const newCasesImage = require('../assets/cases.png');

const WelcomePage = () => {

        const [data, setData] = useState(null);
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = () => {
          fetch('https://api.thevirustracker.com/free-api?global=stats')
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(error => console.log(error))
        }
        const content = () => {
          if (data) { 
            return (
              <>
        <View style={styles.column}>
            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEWAx/0B+OlyAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII='}} 
                title="Active Cases"
              />
              <CardTitle 
                title={data[0].total_active_cases}
              />
            </Card>

            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://http2.mlstatic.com/firma-americana-y-efird-40-colores-solidos-de-algodon-700-D_NQ_NP_964102-MLM31257203179_062019-F.jpg'}} 
                title="Affected Countries"
              />
              <CardTitle 
                title={data[0].total_affected_countries}
              />
            </Card>
        </View>
       <View style={styles.column}>
            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACyCAMAAACnS4D4AAAAA1BMVEXccgw3VqbRAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeDcYqAAE00FRDAAAAAElFTkSuQmCC'}} 
                title="Total Cases"
              />
              <CardTitle 
                title={data[0].total_cases}
              />
            </Card>

            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://lh3.googleusercontent.com/proxy/z-MXIUgX-3cvtrOCZ-TeSGqRrcX0fvPTEsq0P4ouahJuXyU2rZ-jJbqQri5-FJDeeVjOok3vFrzlfmqgAzt3MxFIbKaKBaiKMVgSIgivZpgf5g'}} 
                title="Total Deaths"
              />
              <CardTitle 
                title={data[0].total_deaths}
              />
            </Card>
            </View>
            <View style={styles.column}>
            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSohF64J9p47ODZjAPPdvrYTmKIEyjZ1af_Ng&usqp=CAU'}} 
                title="New Cases Today"
              />
              <CardTitle 
                title={data[0].total_new_cases_today}
              />
            </Card>

            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://lh3.googleusercontent.com/proxy/A-qN6-DNvvvlw51RSBDG3rLu8NBf2QCTGexYG6Z9KSrIiHco7JlhB4-3tghvXsVxaurjTd7kdIUw4vBX7f2jN7YR5XV4C4ZMuTcAZmwRD91uwg'}} 
                title="New Deaths Today"
              />
              <CardTitle 
                title={data[0].total_new_deaths_today}
              />
            </Card>
            </View>
            <View style={styles.column}>
            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://ih1.redbubble.net/image.458344416.0287/flat,750x1000,075,f.u7.jpg'}} 
                title="Total Recovered"
              />
              <CardTitle 
                title={data[0].total_recovered}
              />
            </Card>

            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/219jNwjfYiL._AC_.jpg'}} 
                title="Total Serious Cases"
              />
              <CardTitle 
                title={data[0].total_serious_cases}
              />
            </Card>
            </View>
            <View style={styles.columnFinish}>
            <Card style={styles.card}>
              <CardImage 
                source={{uri: 'https://i.pinimg.com/originals/ec/f0/e5/ecf0e5dc1424d871aee1765bb48fa22e.jpg'}} 
                title="Total Unresolved"
              />
              <CardTitle 
                title={data[0].total_unresolved}
              />
            </Card>
            </View>
            </>
          ) 
          } else {
            return null
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
        <Image source={newCasesImage} style={styles.casesImage} />
        </View>
      <View style={styles.container}>
       {content()}
       </View>
       <View style={styles.container}>
       <Text style={styles.footer}>Datos actualizados por la API 'THE VIRUS TRACKER'</Text>
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
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  casesImage: {
    width: 336,
    height: 240,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  columnFinish: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 100,
    marginVertical: 20,
  },
  footer: {
    bottom: 0,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  });

export default WelcomePage;
