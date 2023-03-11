import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {AppHeader} from '../components/Header';
import Colors from '../constants/Colors';
import MapView from 'react-native-maps';
import {storeData, retrieveData} from '../services/Storage';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Карты" />
      <View style={styles.main}>
        <MapView
          style={[styles.map]}
          initialRegion={{
            latitude: 55.0415,
            longitude: 82.9346,
            latitudeDelta: 0.1,
            longitudeDelta: 0.2,
          }}
          showsUserLocation={true}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  main: {},
});
