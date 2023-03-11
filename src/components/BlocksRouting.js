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
  ColorPropType,
} from 'react-native';
import Colors from '../constants/Colors';
import SvgApplication from '../assets/icons/Application';
import SvgMap from '../assets/icons/Map';
import SvgAllApp from '../assets/icons/AllApp';
import SvgMiniProfile from '../assets/icons/MiniProfile';
import {useNavigation} from '@react-navigation/native';
import SvgSettings from '../assets/icons/Setting';
import SvgInfo from '../assets/icons/Info';
export const BlockRouting = ({userInfo}) => {
  const navigation = useNavigation();
  const onClickRouteApplication = () => {
    navigation.navigate('Application');
  };
  const onClickRouteProfile = () => {
    navigation.navigate('Profile');
  };
  const onClickRouteAllApplication = () => {
    navigation.navigate('AllApplication');
  };
  const onClickRouteSetting = () => {
    navigation.navigate('Settings');
  };
  const onClickRouteMap = () => {
    navigation.navigate('MapScreen');
  };
  return (
    <View style={styles.wrapBlocks}>
      <TouchableOpacity onPress={onClickRouteApplication} style={styles.block}>
        <View style={styles.wrapSvg}>
          <SvgApplication />
        </View>

        <Text style={styles.textBlock}>Оставить{'\n'}заявку</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickRouteMap} style={styles.block}>
        <View style={styles.wrapSvg}>
          <SvgMap />
        </View>
        <Text style={styles.textBlock}>Посмотреть{'\n'}карту проишествий</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onClickRouteAllApplication}
        style={styles.block}>
        <View style={styles.wrapSvg}>
          <SvgAllApp />
        </View>
        <Text style={styles.textBlock}>Посмотреть обращения</Text>
      </TouchableOpacity>
      {userInfo !== null ? (
        <TouchableOpacity onPress={onClickRouteProfile} style={styles.block}>
          <View style={styles.wrapSvg}>
            <SvgMiniProfile />
          </View>
          <Text style={styles.textBlock}>Профиль</Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={onClickRouteSetting} style={styles.block}>
        <View style={styles.wrapSvg}>
          <SvgSettings />
        </View>
        <Text style={styles.textBlock}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.block}>
        <View style={styles.wrapSvg}>
          <SvgInfo />
        </View>
        <Text style={styles.textBlock}>О приложении</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapBlocks: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  block: {
    width: '45%',
    paddingHorizontal: 12,
    paddingTop: 13,
    paddingBottom: 21,
    backgroundColor: Colors.whiteColor,
    borderWidth: 1,
    borderColor: Colors.whiteColor,
    borderRadius: 20,
    shadowColor: Colors.blackColor,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 126,
    marginBottom: 38,
  },
  textBlock: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.blackColor,
  },
  wrapSvg: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
