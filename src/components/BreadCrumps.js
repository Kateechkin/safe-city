import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SvgArrowLeft from '../assets/icons/ArrowLeft';

export const BreadCrumps = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.svgPosition}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SvgArrowLeft />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  svgPosition: {
    position: 'absolute',
    top: 62,
    left: 27,
    zIndex: 10,
    elevation: 3,
  },
});
