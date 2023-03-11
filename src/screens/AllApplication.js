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
import {AboutStatus} from '../components/AboutStatus';

import {storeData, retrieveData} from '../services/Storage';
import {getClaims} from '../services/Applications.js';
import {ItemApplication} from '../components/ItemApplication';
export const AllApplication = () => {
  const [listAllApp, setListAllApp] = useState([]);
  useEffect(() => {
    setListAllApp([]);
    allListApplication();
  }, []);
  const allListApplication = () => {
    retrieveData('userToken').then(_token => {
      getClaims(_token)
        .then(response => {
          console.log(response, 'listApp');
          if (response.status === 'SUCCESS') {
            storeData('listApplications', response.result);
            setListAllApp(response.result);
          } else {
            Alert.alert('Ошибка получения данных', result.message);
          }
        })
        .catch(res => {
          console.log('error', res);
          Alert.alert('Ошибка соединения', 'Сервер недоступен');
        });
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Мои обращения" />
      <AboutStatus />
      {/* <View style={styles.mainBlock}> */}
      <FlatList
        data={listAllApp}
        keyExtractor={item => item.id}
        style={styles.mainBlock}
        renderItem={({item, index}) => {
          return <ItemApplication item={item} index={index} />;
        }}
      />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBlock: {
    marginTop: 28,
    marginHorizontal: 20,
    flex: 2,
  },
});
