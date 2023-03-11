/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Settings,
} from 'react-native';
import {Login} from './src/screens/Login';
import {Home} from './src/screens/Home';
import {Registration} from './src/screens/Registration';
import {Application} from './src/screens/Applications';
import {Profile} from './src/screens/Profile';
import {AllApplication} from './src/screens/AllApplication';
import {SettingsScreen} from './src/screens/Settings';
import {Claim} from './src/screens/Claim';
import {MapScreen} from './src/screens/Map';
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="App">
        <Stack.Screen name="Home" component={Home} headerBackImageSource />
        <Stack.Screen name="Login" component={Login} headerBackImageSource />
        <Stack.Screen
          name="Registration"
          component={Registration}
          headerBackImageSource
        />
        <Stack.Screen
          name="Application"
          component={Application}
          headerBackImageSource
        />
        <Stack.Screen
          name="AllApplication"
          component={AllApplication}
          headerBackImageSource
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          headerBackImageSource
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          headerBackImageSource
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          headerBackImageSource
        />
        <Stack.Screen name="Claim" component={Claim} headerBackImageSource />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
