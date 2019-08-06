# Setup React Natative app

SETUP ENVIRONMENT
1. install nodist
2. install node.js and npm
3. install visual studio code
4. install react native tools plugin
5. install chrome debugged plugin

SETUP PROJECT
1. react-native init <Project name>
2. react-native run-android
3. setup sdk dir in local.properties
   sdk.dir=C\:\\Users\\Mislav\\AppData\\Local\\Android\\Sdk
4. react-native run-android

SETUP PROJEC STRUCTURE
1. add scr folder
2. add package.json annotaion
3. add screens folder
4. add package.json annotaion
5. add views folder
6. add package.json annotaion
7. move App.js to src

SETUP MAIN STYLE
1. add styles.js into src

import {StyleSheet} from "react-native"

const styleSheet = StyleSheet.create({
     textStyle: {
         color: "red"
     }
});

export default styleSheet;

SETUP NAVIGATION
1. npm install --save react-navigation

Please try running this command again as root/Administrator 
* Just close all terminals and run command again

2. npm install --save react-native-gesture-handler
3. react-native link react-native-gesture-handler
4. Add AppNavigation.js in src

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

5. Return AppNavigation in App.js

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

HELPERS
react-native log-android
react-native log-ios
