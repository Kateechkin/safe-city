import React, {useEffect, useState, useRef} from 'react';
import ReactNative from 'react-native';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  Alert,
  // KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Colors from '../constants/Colors';
import SvgVK from '../assets/icons/VK';
import SvgOdnoklasniki from '../assets/icons/Odnoklasniki';
import {useNavigation} from '@react-navigation/native';
import {registrationUser} from '../services/Login';
import {storeData, retrieveData} from '../services/Storage';
import SvgArrowLongRight from '../assets/icons/ArrowLongRight';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Registration = () => {
  const [inputs, setInputs] = React.useState({
    fio: 'Каштыра Александр Александрович',
    email: 'skulkina.web@gmail.com',
    password: '',
    repiatPass: '',
    contactPhone: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  // const [scroll, setScroll] = useState();
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
    console.log(inputs);
  };
  const navigation = useNavigation();
  const scroll = useRef(null);
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
    console.log(errors);
  };
  const onSubmitRegistrarion = () => {
    registrationUser(
      inputs.email,
      inputs.fio,
      inputs.password,
      inputs.contactPhone,
    )
      .then(response => {
        if (response.status === 'SUCCESS') {
          setLoading(false);
          navigation.navigate('Login');
          Alert.alert('Пользователь зарегистрирован!');
          // storeData('userToken', response.result.token);
          // storeData('userInfo', response.result.response);
        } else {
          setLoading(false);
          Alert.alert('Ошибка входа', response.message);
        }
      })
      .catch(res => {
        console.log('error', res);
        setLoading(false);
        Alert.alert('Ошибка соединения', 'Сервер недоступен');
      });
  };
  const _scrollToInput = reactNode => {
    // const reactNodePPP = reactNode + 4000;
    console.log(reactNode, 'reactNode');
    console.log(scroll, 'scroll');
    // Add a 'scroll' ref to your ScrollView
    scroll.current.scrollToFocusedInput(reactNode);
  };
  const onClickRouteHome = () => {
    navigation.navigate('Home');
  };
  const onRegistrarion = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.content}
        ref={scroll}
        extraHeight={500}
      >
        <SafeAreaView style={styles.wrapProfileBlock}>
          <View style={styles.wrapText}>
            <Text style={styles.textHello}>Здравствуйте!</Text>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>Регистрация</Text>
          </View>
          <TouchableOpacity
            onPress={onClickRouteHome}
            style={styles.blockArrow}
          >
            <View style={styles.wrapSvg}>
              <SvgArrowLongRight color={Colors.whiteColor} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 2}}>
          <View style={{flex: 2}}>
            <View style={styles.mainBlock}>
              <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>ФИО</Text>
                <TextInput
                  label="Login"
                  placeholderTextColor="#a9a9a9"
                  autoComplete="email"
                  placeholder={'text@gmail.com'}
                  value={inputs.fio}
                  onChangeText={text => handleOnchange(text, 'fio')}
                  onFocus={event => {
                    _scrollToInput(ReactNative.findNodeHandle(event.target));
                  }}
                  style={
                    errors.email ? styles.inputStyleError : styles.inputStyle
                  }
                />
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  label="Login"
                  placeholderTextColor="#a9a9a9"
                  autoComplete="email"
                  placeholder={'text@gmail.com'}
                  value={inputs.email}
                  onChangeText={text => handleOnchange(text, 'email')}
                  onFocus={event => {
                    _scrollToInput(ReactNative.findNodeHandle(event.target));
                  }}
                  style={
                    errors.email ? styles.inputStyleError : styles.inputStyle
                  }
                />
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Пароль</Text>
                <TextInput
                  label="Password"
                  placeholderTextColor="#a9a9a9"
                  autoComplete="password"
                  placeholder={'Введите пароль'}
                  value={inputs.password}
                  secureTextEntry={true}
                  onChangeText={text => handleOnchange(text, 'password')}
                  onFocus={event => {
                    _scrollToInput(ReactNative.findNodeHandle(event.target));
                  }}
                  style={
                    errors.password ? styles.inputStyleError : styles.inputStyle
                  }
                />
                {/* onFocus={() => handleError(null, 'password')} */}
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Повторите пароль</Text>
                <TextInput
                  label="Password"
                  placeholderTextColor="#a9a9a9"
                  autoComplete="password"
                  placeholder={'Введите пароль повторно'}
                  value={inputs.repiatPass}
                  secureTextEntry={true}
                  onChangeText={text => handleOnchange(text, 'repiatPass')}
                  onFocus={event => {
                    _scrollToInput(ReactNative.findNodeHandle(event.target));
                  }}
                  style={
                    errors.password ? styles.inputStyleError : styles.inputStyle
                  }
                />
                {/* onFocus={() => handleError(null, 'password')} */}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={onSubmitRegistrarion}
              style={styles.indexBtn}
            >
              <Text style={styles.indexBtnText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerFlex}>
            <Text style={styles.footerFlexText}>У Вас уже есть аккаунта?</Text>
            <TouchableOpacity onPress={onRegistrarion}>
              <Text style={styles.footerFlexTextGreen}>Авторизация</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
  },
  wrapProfileBlock: {
    height: '33%',
    width: '100%',
    backgroundColor: Colors.green,
    borderRadius: 25,
    paddingHorizontal: 32,
    justifyContent: 'flex-end',
  },

  wrapText: {
    paddingHorizontal: 32,
    marginBottom: 20,
  },
  wrapTitle: {
    paddingHorizontal: 30,
    paddingBottom: 52,
  },
  textHello: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'NotoSans-Bold',
    color: '#E8EEE9',
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    fontFamily: 'NotoSans-Bold',
    color: Colors.whiteColor,
  },
  mainBlock: {
    marginTop: 60,
    paddingHorizontal: 32,
  },
  wrapInput: {
    marginBottom: 24,
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
    color: 'black',
    fontSize: 14,
    lineHeight: 18,
    borderBottomColor: '#5F5F5F',
    borderBottomWidth: 1,

    paddingBottom: 5,
    paddingLeft: 8,
    fontFamily: 'NotoSans-Regular',
  },
  footer: {
    marginTop: '8%',
    alignItems: 'center',
  },
  clickPass: {
    marginBottom: 17,
  },
  clickPassText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 16,

    color: 'rgba(36, 52, 47, 0.5)',
  },
  //КНОПКА
  indexBtn: {
    width: '90%',
    backgroundColor: Colors.darkGreen,
    borderRadius: 25,
    paddingVertical: 16,
    marginBottom: 15,
  },
  indexBtnText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
  socialMedia: {
    marginTop: 16,
  },
  socialMediaText: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(36, 52, 47, 0.5)',
    fontFamily: 'NotoSans-Medium',
    marginBottom: 17,
  },
  socialMediaIconWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  svgWrap: {
    marginHorizontal: 10,
  },
  footerFlex: {
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  footerFlexText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'NotoSans-Medium',
    color: Colors.darkGreen,
  },
  footerFlexTextGreen: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'NotoSans-Bold',
    color: Colors.green,
    marginLeft: 10,
  },
  blockArrow: {
    position: 'absolute',
    right: 50,
    bottom: '27%',
  },
});
