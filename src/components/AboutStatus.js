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
} from 'react-native';
import {AppHeader} from '../components/Header';
import Colors from '../constants/Colors';

export const AboutStatus = () => {
  return (
    <View style={styles.aboutStatus}>
      <View style={styles.wrap}>
        <View style={styles.curcleRed}></View>
        <Text style={styles.status}> - Не подтверждено</Text>
      </View>
      <View style={styles.wrap}>
        <View style={styles.curcleYellow}></View>
        <Text style={styles.status}> - В работе</Text>
      </View>
      <View style={styles.wrap}>
        <View style={styles.curcleGreen}></View>
        <Text style={styles.status}> - Обработано</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  aboutStatus: {
    backgroundColor: '#E8EEE9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  wrap: {
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  curcleRed: {
    width: 10,
    height: 10,
    borderWidth: 0.5,
    borderColor: Colors.blackColor,
    borderRadius: 50,
    backgroundColor: Colors.errorRed,
  },
  curcleYellow: {
    width: 10,
    height: 10,
    borderWidth: 0.5,
    borderColor: Colors.blackColor,
    borderRadius: 50,
    backgroundColor: Colors.yellow,
  },
  curcleGreen: {
    width: 10,
    height: 10,
    borderWidth: 0.5,
    borderColor: Colors.blackColor,
    borderRadius: 50,
    backgroundColor: Colors.green,
  },
  status: {
    fontSize: 10,
    fontFamily: 'NotoSans-Regular',
  },
});
