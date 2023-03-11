import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {AppHeader} from '../components/Header';
import SvgImage from '../assets/icons/Image';
import SvgCross from '../assets/icons/Cross';
import Colors from '../constants/Colors';
import SvgVideo from '../assets/icons/Video';
import {postApplicationUser} from '../services/Applications.js';
import {storeData, retrieveData} from '../services/Storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import Loader from '../components/Loader';

export const Application = () => {
  const [filePathArray, setFilePathArray] = useState([]);
  const [filePathArrayVideo, setFilePathArrayVideo] = useState(null);
  const [description, setDescription] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [loading, setLoading] = React.useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('Выбор камеры отменен пользователем');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Камера недоступна на устройстве');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Не выдано разрешение');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }

        // const imageCamera = response.assets[0];
        const imgArray = {
          uri: response.assets[0].uri,
          name: response.assets[0].fileName,
          type: response.assets[0].type,
        };
        setFilePathArray(filePathArray => [...filePathArray, imgArray]);
        // setFilePath(response.assets[0]);
      });
    }
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      videoQuality: 'low',
      quality: 1,
      maxWidth: 700,
      maxHeight: 700,
      quality: 1,
      selectionLimit: 5 - filePathArray.length,
      multiple: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('Выбор камеры отменен пользователем');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Камера недоступна на устройстве');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Не выдано разрешение');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      if (type === 'photo') {
        response.assets.forEach(function (item, index) {
          const imgArray = {
            uri: item.uri,
            name: item.fileName,
            type: item.type,
          };

          console.log(imgArray, 'imgArray');
          setFilePathArray(filePathArray => [...filePathArray, imgArray]);
        });
      } else {
        console.log(response.assets, 'esponse.assets');
        response.assets.map(item => {
          const videoArray = {
            uri: item.uri,
            name: item.fileName,
            type: item.type,
          };
          console.log(videoArray, 'videoArray');
          setFilePathArrayVideo(videoArray);
        });

        // response.assets.forEach(function (item, index) {
        // const videoArray = {
        //   uri: item.uri,
        //   name: item.fileName,
        //   type: item.type,
        // };

        //   console.log(videoArray, 'videoArray');
        // setFilePathArrayVideo(filePathArrayVideo => [
        //   ...filePathArrayVideo,
        //   videoArray,
        // ]);
        // });
      }
    });
  };
  const deleteImage = index => {
    setFilePathArray(items => items.filter((_, i) => i !== index));
  };
  const deleteVideo = () => {
    setFilePathArrayVideo(null);
  };
  const onSubmitApp = () => {
    console.log(filePathArray, 'filePathArray');
    setIsSubmiting(true);
    setLoading(true);
    let formdata = new FormData();
    formdata.append('description', description);
    formdata.append('countPhoto', filePathArray.length);

    for (const image of filePathArray) {
      formdata.append('photo', image);
    }

    formdata.append('video', filePathArrayVideo);

    console.log(formdata, 'formdata');

    retrieveData('userToken').then(_token => {
      postApplicationUser(_token, formdata)
        .then(response => {
          setIsSubmiting(false);
          setLoading(false);
          console.log(response);
          if (response.status === 'SUCCESS') {
            Alert.alert('Заявка отправлена');

            formdata = [];
            setDescription(null);
            setFilePathArray([]);
            setFilePathArrayVideo(null);
          } else {
            Alert.alert('Предупреждение', response.message);
            formdata = [];
            setDescription(null);
            setFilePathArray([]);
            setFilePathArrayVideo(null);
          }
        })
        .catch(res => {
          setIsSubmiting(false);
          setLoading(false);
          console.log('error', res);
          Alert.alert('Ошибка соединения', 'Сервер недоступен');
        });
    });
  };
  return (
    <View style={styles.container}>
      <AppHeader title="Заявка" />
      <Loader visible={loading} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainBlock}>
          <View style={styles.block}>
            <Text style={styles.blockText}>Прикрепить фото:</Text>
            {filePathArray !== null ? (
              <View style={styles.wrapContainerPhoto}>
                {filePathArray.map((image, index) => (
                  <View key={index} style={styles.manyContainerPhoto}>
                    <Image
                      source={{uri: image.uri}}
                      style={styles.imageStyle}
                    />
                    <TouchableOpacity
                      style={styles.deleteCrossWrap}
                      onPress={() => deleteImage(index)}
                    >
                      <SvgCross />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : null}
            {filePathArray.length < 5 ? (
              <View style={styles.wrapBtn}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.btn}
                  onPress={() => captureImage('photo')}
                >
                  <Text style={styles.btnText}>Открыть камеру</Text>
                  <SvgImage />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.btn}
                  onPress={() => chooseFile('photo')}
                >
                  <Text style={styles.btnText}>Выбрать</Text>
                  <SvgImage />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={styles.block}>
            <Text style={styles.blockText}>Прикрепить видео:</Text>
            {filePathArrayVideo !== null ? (
              <View style={styles.wrapContainerPhoto}>
                {/* {filePathArrayVideo.map((video, index) => ( */}
                <View style={styles.manyContainerPhoto}>
                  <Video
                    source={{uri: filePathArrayVideo.uri}} // Can be a URL or a local file.
                    resizeMode="cover"
                    paused={false}
                    repeat={true}
                    style={styles.backgroundVideo}
                  />
                  {/* <Image
                      source={{uri: video.uri}}
                      style={styles.imageStyle}
                    /> */}
                  <TouchableOpacity
                    style={styles.deleteCrossWrap}
                    onPress={() => deleteVideo()}
                  >
                    <SvgCross />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
            {filePathArrayVideo !== null ? null : (
              <View style={styles.wrapBtn}>
                {/* <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btn}
              onPress={() => captureImage('video')}>
              <Text style={styles.btnText}>Открыть камеру</Text>
              <SvgVideo />
            </TouchableOpacity> */}
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.btn}
                  onPress={() => chooseFile('video')}
                >
                  <Text style={styles.btnText}>Выбрать</Text>
                  <SvgVideo />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.block}>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Текст сообщения"
                placeholderTextColor="grey"
                numberOfLines={15}
                onChangeText={text => setDescription(text)}
                value={description}
                multiline={true}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onSubmitApp} style={styles.indexBtn}>
          <Text style={styles.indexBtnText}>Отправить</Text>
        </TouchableOpacity>
      </View>
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
  block: {
    width: '100%',
    marginBottom: 32,
  },
  blockText: {
    fontSize: 14,
    lineHeight: 19,
    color: Colors.blackColor,
    marginBottom: 17,
  },
  wrapBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  btn: {
    width: 168,
    backgroundColor: Colors.mainGreen,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,

    //
    shadowColor: Colors.blackColor,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btnText: {
    fontFamily: 'NotoSans-Bold',
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 16,

    textAlign: 'center',
    letterSpacing: 0.3,
    color: Colors.whiteColor,
  },
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
  //фото

  wrapContainerPhoto: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  manyContainerPhoto: {
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginBottom: 5,
    position: 'relative',
  },
  backgroundVideo: {
    width: 100,
    height: 100,
    marginBottom: 5,

    position: 'relative',
  },
  deleteCrossWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
  },
});
