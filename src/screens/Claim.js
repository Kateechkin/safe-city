import React, {useEffect, useState, useSyncExternalStore} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Colors from '../constants/Colors';
import {AppHeader} from '../components/Header';
import {AboutStatus} from '../components/AboutStatus';
import ImageModal from 'react-native-image-modal';
import {storeData, retrieveData} from '../services/Storage';
import Video from 'react-native-video';

export const Claim = ({props, route}) => {
  const [itemAppInfo, setItemAppInfo] = useState(null);
  const [tokenNew, setToken] = useState(null);

  useEffect(() => {
    setItemAppInfo(route.params.props.item);
    retrieveData('userToken').then(_token => {
      setToken(_token);
    });
  }, []);

  // condition- статус заявки
  // 0 - в работе
  // 1 - Обработано
  // 2- отказано
  return (
    <View style={styles.container}>
      <AppHeader title="Обращение" />
      <AboutStatus />
      {itemAppInfo !== null ? (
        <View style={styles.mainContainer}>
          <View style={styles.aboutStatus}>
            <View
              style={
                itemAppInfo.condition === 0
                  ? [styles.curcle, styles.statusYellow]
                  : itemAppInfo.condition === 1
                  ? [styles.curcle, styles.statusGreen]
                  : [styles.curcle, styles.statusRed]
              }></View>
            <Text style={styles.textStatus}>
              статус:{' '}
              {itemAppInfo.condition === 0 ? (
                <Text>в работе</Text>
              ) : itemAppInfo.condition === 1 ? (
                <Text>обработана</Text>
              ) : (
                <Text>не подтверждено</Text>
              )}
            </Text>
          </View>
          <View style={styles.wrapBlockPhoto}>
            <Text style={styles.text}>Прикрепленные фотографии:</Text>
            <View style={styles.wrapImg}>
              {tokenNew !== null ? (
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={itemAppInfo.url}
                  renderItem={({item, index}) => (
                    <ImageModal
                      resizeMode="contain"
                      style={styles.img}
                      source={{
                        uri: item,
                        headers: {
                          Authorization: tokenNew,
                        },
                      }}
                    />
                  )}
                />
              ) : (
                <Text> Ожидайте...</Text>
              )}
            </View>
          </View>
          <View style={styles.wrapBlockPhoto}>
            <Text style={styles.text}>Прикрепленные видео:</Text>
            <View style={styles.wrapImg}>
              {/* {tokenNew !== null && itemAppInfo.videoUrl !== null ? (
                <Video
                  source={{
                    uri: itemAppInfo.videoUrl,
                    headers: {
                      Authorization: tokenNew,
                    },
                  }}
                  controls={true}
                  resizeMode="cover"
                  paused={false}
                  repeat={false}
                  style={styles.video}
                />
              ) : (
                <Text style={styles.emptyText}>
                  В данный момент видео недоступно.
                </Text>
              )} */}
              <Text style={styles.emptyText}>
                В данный момент видео недоступно.
              </Text>
            </View>
          </View>
          <View style={styles.wrapInformation}>
            <Text style={styles.text}>Описание проблемы:</Text>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textArea}>{itemAppInfo.description}</Text>
            </View>
          </View>
        </View>
      ) : null}
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
  mainContainer: {
    marginTop: 34,
    paddingHorizontal: 23,
  },
  aboutStatus: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  curcle: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: Colors.blackColor,
    borderRadius: 50,

    marginRight: 12,
  },
  statusRed: {
    backgroundColor: Colors.errorRed,
  },
  statusYellow: {
    backgroundColor: Colors.yellow,
  },
  statusGreen: {
    backgroundColor: Colors.green,
  },
  textStatus: {
    fontSize: 14,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: Colors.blackColor,
    fontFamily: 'NotoSans-Regular',
  },
  text: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'NotoSans-Medium',
    marginBottom: 12,
    paddingLeft: 5,
    marginTop: 5,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'NotoSans-Medium',
    marginBottom: 12,
    paddingLeft: 5,
    color: '#464C54',
    marginTop: 5,
  },
  wrapImg: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: 72,
    height: 64,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  video: {
    // width: '100%',
    width: 300,
    height: 170,
    marginHorizontal: 5,
    marginBottom: 10,
    // backgroundColor: 'black',
  },
  //textArea
  textAreaContainer: {
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.whiteColor,
    fontSize: 14,
  },
  textArea: {
    height: 180,
    justifyContent: 'flex-start',
    fontFamily: 'NotoSans-Regular',
  },
});
