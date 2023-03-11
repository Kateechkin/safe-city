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
import SvgProfile from '../assets/icons/Profile';
import SvgStar from '../assets/icons/Star';
import {BreadCrumps} from '../components/BreadCrumps';
import {useNavigation} from '@react-navigation/native';
import {storeData, retrieveData} from '../services/Storage';
export const Profile = () => {
  const [inputs, setInputs] = React.useState({
    email: 'skulkina.web@gmail.com',
    fio: 'Скулкина Екатерина Сергеевна',
  });
  const [userInfo, setInfoUser] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      update();
    });
    return unsubscribe;
  }, []);
  const update = () => {
    retrieveData('userInfo')
      .then(user => {
        console.log('useEff прошел вот данные', user);
        setInfoUser(user);
      })
      .catch(error => {
        console.log('error', error);
        Alert.alert('Нет данных о пользователе', 'Сервер недоступен');
      });
  };
  const navigation = useNavigation();
  const onPressExit = () => {
    console.log('Выход');
    storeData('userToken', null);
    storeData('userInfo', null);
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <BreadCrumps />
      <View style={styles.wrapProfileBlock}>
        <SafeAreaView>
          <Text style={styles.titleAnonymous}>Профиль</Text>
        </SafeAreaView>
      </View>

      <View
        style={[
          styles.wrapProfileBlockPosition,
          {
            transform: [{translateX: -50}],
          },
        ]}
      >
        <View style={styles.curcle}>
          <View style={styles.imgProfile}>
            <SvgProfile />
          </View>
        </View>
      </View>
      <View style={styles.information}>
        <View style={styles.wrapInput}>
          <Text style={styles.inputTitle}>ФИО</Text>
          <View style={styles.inputStyle}>
            <Text style={styles.textBlock}>{userInfo.fullName}</Text>
          </View>
        </View>
        <View style={styles.wrapInput}>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.inputStyle}>
            <Text style={styles.textBlock}>{userInfo.username}</Text>
          </View>
        </View>
        <View style={styles.wrapInput}>
          <Text style={styles.inputTitle}>Контактный телефон</Text>
          <View style={styles.inputStyle}>
            <Text style={styles.textBlock}>{userInfo.contactPhone}</Text>
          </View>
        </View>
        <View style={styles.wrapInput}>
          <Text style={styles.inputTitle}>Оценка заявок</Text>
          <View style={styles.wrapStars}>
            <View style={styles.starsSvg}>
              <SvgStar stroke="#24342F" fill="#24342F" />
            </View>
            <View style={styles.starsSvg}>
              <SvgStar stroke="#24342F" fill="#24342F" />
            </View>
            <View style={styles.starsSvg}>
              <SvgStar stroke="#24342F" fill="#24342F" />
            </View>
            <View style={styles.starsSvg}>
              <SvgStar stroke="#24342F" fill="#fff" />
            </View>
            <View style={styles.starsSvg}>
              <SvgStar stroke="#24342F" fill="#fff" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPressExit} style={styles.indexBtn}>
          <Text style={styles.indexBtnText}>Выход</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(232, 238, 233, 0.4)',
  },
  wrapProfileBlock: {
    height: 138,
    width: '100%',
    backgroundColor: Colors.green,
    borderRadius: 25,

    alignItems: 'center',
  },
  titleAnonymous: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.whiteColor,
    textTransform: 'uppercase',
  },
  wrapProfileBlockPosition: {
    position: 'absolute',
    top: '10%',
    left: '50%',

    zIndex: 0,
  },
  curcle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    flex: 1,
    width: 101,
    height: 101,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 4,
    backgroundColor: Colors.mediumGreen,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  information: {
    marginTop: 76,
    paddingHorizontal: 40,
    flex: 2,
  },
  wrapInput: {
    marginBottom: 33,
  },
  inputTitle: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'NotoSans-Medium',
    color: Colors.blackColor,
    marginBottom: 17,
    paddingLeft: 8,
  },
  inputStyle: {
    borderBottomColor: '#5F5F5F',
    borderBottomWidth: 1,

    paddingBottom: 5,
    paddingLeft: 8,
  },
  textBlock: {
    color: 'black',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'NotoSans-Regular',
  },
  wrapStars: {
    flexDirection: 'row',
  },
  starsSvg: {
    marginHorizontal: 3,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  //КНОПКА
  indexBtn: {
    width: '80%',
    backgroundColor: Colors.errorRed,
    borderRadius: 25,
    paddingVertical: 16,
  },
  indexBtnText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
});
