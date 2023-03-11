import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import {Header} from '../components/Header';
import Colors from '../constants/Colors';
import {AppHeader} from '../components/Header';
import SvgNotification from '../assets/icons/Notification';
import SvgLock from '../assets/icons/Lock';
import SvgFastPass from '../assets/icons/FastPass';
import SvgShortRigth from '../assets/icons/ArrowShortRight';
import AppSwitch from '../components/Switch';
import SvgLogoMini from '../assets/icons/Logo-mini';

// import SvgNotification from '../assets/icons/Notification';
// import SvgArrowRight from '../assets/icons/ArrowRight';
// import SvgLock from '../assets/icons/Lock';
// import SvgFastPass from '../assets/icons/FastPass';
// import SvgError from '../assets/icons/Error';
// import SvgExit from '../assets/icons/exit';
export const SettingsScreen = props => {
  return (
    <View style={styles.container}>
      <AppHeader title={'Настройки'} />
      <View style={styles.settingsContainer}>
        <View style={styles.settingsBlock}>
          <View style={styles.blockInside}>
            <View style={styles.blockSvg}>
              <SvgNotification />
            </View>
            <Text style={styles.settingsTitle}>Уведомления</Text>
          </View>
          <View>
            <AppSwitch />
          </View>
        </View>
        <View style={styles.settingsBlock}>
          <View style={styles.blockInside}>
            <View style={styles.blockSvg}>
              <SvgLock />
            </View>
            <Text style={styles.settingsTitle}>Смена пароля</Text>
          </View>
          <View>
            <SvgShortRigth />
          </View>
        </View>
        <View style={styles.settingsBlock}>
          <View style={styles.blockInside}>
            <View style={styles.blockSvg}>
              <SvgFastPass />
            </View>
            <Text style={styles.settingsTitle}>Смена быстрого пароля</Text>
          </View>
          <View>
            <SvgShortRigth />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <SvgLogoMini />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  settingsBlock: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 5,
  },
  blockInside: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingsTitle: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'NotoSans-Regular',
    // fontFamily: 'Montserrat-Medium',
  },
  blockSvg: {
    marginRight: 22,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 60,
  },
});
