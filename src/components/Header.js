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
import Colors from '../constants/Colors';
import {BreadCrumps} from './BreadCrumps';

export const AppHeader = ({title}) => {
  return (
    <View>
      <BreadCrumps />
      <View style={styles.wrapProfileBlock}>
        <SafeAreaView>
          <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapProfileBlock: {
    height: 138,
    width: '100%',
    backgroundColor: Colors.green,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    alignItems: 'center',
  },
  title: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 24,
    lineHeight: 33,
    // color: '#E8EEE9',
    color: Colors.whiteColor,
    marginTop: 10,
  },
});
