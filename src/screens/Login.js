import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import SvgVK from '../assets/icons/VK';
import SvgOdnoklasniki from '../assets/icons/Odnoklasniki';
import {useNavigation} from '@react-navigation/native';
import {loginUser, loginVK, registrationVK} from '../services/Login';
import {storeData, retrieveData} from '../services/Storage';
import VKLogin from 'react-native-vkontakte-login';
import SvgArrowLongRight from '../assets/icons/ArrowLongRight';

export const Login = () => {
  const [inputs, setInputs] = React.useState({
    email: 'skulkina.web@gmail.com',
    password: '111111',
  });
  const [url, setUrl] = useState();
  // const [token, setToken] = useState();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    VKLogin.initialize(51544808);
  }, []);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
    console.log(inputs);
  };
  const navigation = useNavigation();

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
    console.log(errors);
  };
  let loginApi = async () => {
    try {
      const auth = await VKLogin.login(['email', 'photos', 'stories']);
      // await setToken(auth.access_token);
      console.log(auth.email, 'email');
      loginVK(auth.access_token, auth.user_id)
        .then(response => {
          console.log(response.response[0], 'response vk');
          registrationVK(
            response.response[0].first_name,
            response.response[0].last_name,
            response.response[0].id,
            auth.email,
          ).then(response => {
            if (response.status === 'SUCCESS') {
              setLoading(false);
              console.log(response);
              storeData('userToken', response.result.token);
              storeData('userInfo', response.result.response);
              navigation.navigate('Home');
            } else {
              setLoading(false);
              Alert.alert('Ошибка входа', response.message);
            }
          });
        })
        .catch(res => {
          console.log('error', res);

          Alert.alert('Ошибка соединения', 'Сервер недоступен');
        });
    } catch (err) {
      console.log(err, 'ERROR');
      // Alert.alert(err, 'errr');
    }
  };
  const onClickRouteHome = () => {
    navigation.navigate('Home');
  };
  const onLogin = () => {
    loginUser(inputs.email, inputs.password)
      .then(response => {
        console.log(response.result, 'result');
        if (response.status === 'SUCCESS') {
          setLoading(false);
          navigation.navigate('Home');
          storeData('userToken', response.result.token);
          storeData('userInfo', response.result.response);
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
  const onRegistrarion = () => {
    navigation.navigate('Registration');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        keyboardVerticalOffset={60}
        style={styles.content}>
        <SafeAreaView style={styles.wrapProfileBlock}>
          <View style={styles.wrapText}>
            <Text style={styles.textHello}>Здравствуйте!</Text>
          </View>
          <View style={styles.wrapTitle}>
            <Text style={styles.title}>Авторизация</Text>
          </View>
          <TouchableOpacity
            onPress={onClickRouteHome}
            style={styles.blockArrow}>
            <View style={styles.wrapSvg}>
              <SvgArrowLongRight color={Colors.whiteColor} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 2}}>
            <View style={styles.mainBlock}>
              <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  label="Login"
                  placeholderTextColor="#a9a9a9"
                  autoComplete="email"
                  placeholder={'text@gmail.com'}
                  value={inputs.email}
                  onChangeText={text => handleOnchange(text, 'email')}
                  style={
                    errors.email ? styles.inputStyleError : styles.inputStyle
                  }
                />
                {/* onFocus={() => handleError(null, 'email')} */}
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
                  style={
                    errors.password ? styles.inputStyleError : styles.inputStyle
                  }
                />
                {/* onFocus={() => handleError(null, 'password')} */}
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.clickPass}>
                <Text style={styles.clickPassText}>Забыли пароль?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onLogin} style={styles.indexBtn}>
                <Text style={styles.indexBtnText}>Войти</Text>
              </TouchableOpacity>
              <View style={styles.socialMedia}>
                <Text style={styles.socialMediaText}> или войти с помощью</Text>
                <View style={styles.socialMediaIconWrap}>
                  <TouchableOpacity style={styles.svgWrap} onPress={loginApi}>
                    <SvgVK />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.svgWrap}>
                    <SvgOdnoklasniki />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.footerFlex}>
          <Text style={styles.footerFlexText}>У Вас нет аккаунта?</Text>
          <TouchableOpacity onPress={onRegistrarion}>
            <Text style={styles.footerFlexTextGreen}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    marginTop: 20,
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
