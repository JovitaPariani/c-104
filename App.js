import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';


import English from './screens/english';
import Englishcomedy from './screens/englishcomedy';
import EnglishSciFi from './screens/englishsci-fi'
import Englishsuspense from './screens/englishsuspense';
import Englishthriller from './screens/englishthriller';

import Hindi from './screens/hindi';
import Hindicomedy from './screens/hindicomedy'
import HindiSciFi from './screens/hindiSciFi'
import Hindisuspense from './screens/hindisuspense'
import Hindithriller from './screens/hindithriller'

import Marathi from './screens/marathi';
import MarathiComedy from './screens/marathiComedy'
import MarathiSciFi from './screens/marathiSciFi'
import Marathisuspense from './screens/marathisuspense'
import Marathithriller from './screens/marathithriller'

import Tamil from './screens/tamil';
import TamilSciFi from './screens/tamilSciFi'
import Tamilcomedy from './screens/tamilcomedy'
import Tamilsuspense from './screens/tamilSuspens'
import TamilThriller from './screens/tamilthriller'







export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  English: English,
  
  Hindi:Hindi,
  Englishcomedy:Englishcomedy,
  Tamil:Tamil,
  Marathi:Marathi,
  Englishsuspense:Englishsuspense,
Englishthriller:Englishthriller,
EnglishSciFi:EnglishSciFi,
Hindicomedy:Hindicomedy,
Hindisuspense:Hindisuspense,
Hindithriller:Hindithriller,
HindiSciFi:HindiSciFi,
MarathiComedy:MarathiComedy,
MarathiSciFi:MarathiSciFi,
Marathisuspense:Marathisuspense,
Marathithriller:Marathithriller,
TamilSciFi:TamilSciFi,
TamilThriller:TamilThriller,
Tamilcomedy:Tamilcomedy,
Tamilsuspense:Tamilsuspense,



});

const AppContainer = createAppContainer(AppNavigator);
