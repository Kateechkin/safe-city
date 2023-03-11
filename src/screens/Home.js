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
  Pressable,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import SvgProfile from '../assets/icons/Profile';
import {BlockRouting} from '../components/BlocksRouting';
import {useNavigation} from '@react-navigation/native';
import {storeData, retrieveData} from '../services/Storage';
import SvgLogoMicro from '../assets/icons/LogoMircoMini';
import {anonymousId} from '../services/Login';
import DeviceInfo from 'react-native-device-info';
export const Home = () => {
  const [userInfo, setInfoUser] = useState(null);
  const [ROLE, setROLE] = useState(null);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      update();
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    retrieveData('userToken').then(token => {
      if (userInfo === null && token === null) {
        DeviceInfo.getUniqueId().then(uniqueId => {
          console.log(uniqueId);
          anonymousId(uniqueId)
            .then(response => {
              setROLE(response.result.response.role);
              storeData('userToken', response.result.token);
              console.log(response.result.response.role);
            })
            .catch(er => {
              console.log(er);
            });
        });
      }
    });
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
  const onPressFunction = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapProfileBlock}>
        {userInfo !== null ? (
          <SafeAreaView>
            <Text style={styles.titleAnonymous}>{userInfo.fullName}</Text>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Text style={styles.titleAnonymous}>Анонимный пользователь</Text>
          </SafeAreaView>
        )}
      </View>

      <View
        style={[
          styles.wrapProfileBlockPosition,
          {
            transform: [{translateX: -50}],
          },
        ]}>
        <View style={styles.curcle}>
          <View style={styles.imgProfile}>
            <SvgProfile />
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <View style={styles.blockSwith}>
          <BlockRouting userInfo={userInfo} />
        </View>
      </View>
      {userInfo !== null ? (
        <View style={styles.footerAutorizeProfile}>
          <SvgLogoMicro />
          <Text style={styles.footerAutorizeProfileText}>Версия 0.0.1</Text>
        </View>
      ) : (
        <View style={styles.footer}>
          <TouchableOpacity onPress={onPressFunction} style={styles.indexBtn}>
            <Text style={styles.indexBtnText}>
              Войти или Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
  blockSwith: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  //КНОПКА
  indexBtn: {
    width: '90%',
    backgroundColor: Colors.darkGreen,
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
  //footer
  footerAutorizeProfile: {
    height: 70,
    width: '100%',
    backgroundColor: Colors.green,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerAutorizeProfileText: {
    marginTop: 5,
    marginLeft: 10,
    fontFamily: 'NotoSans-Medium',
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
});
