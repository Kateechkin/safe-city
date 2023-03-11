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
import Colors from '../constants/Colors';
import SvgArrowLongRight from '../assets/icons/ArrowLongRight';
import {useNavigation} from '@react-navigation/native';
import {storeData, retrieveData} from '../services/Storage';
export const ItemApplication = props => {
  const [token, setToken] = useState(null);
  //   const {itemInfo} = props.item;

  useEffect(() => {
    retrieveData('userToken').then(_token => {
      setToken(_token);
    });
  }, []);
  const navigation = useNavigation();

  const goClaim = () => {
    navigation.navigate('Claim', {props});
  };
  // condition- статус заявки
  // 0 - в работе
  // 1 - Обработано
  // 2- отказано
  return (
    <TouchableOpacity onPress={goClaim} style={styles.itemBlock}>
      <View
        style={
          props.item.condition === 0
            ? [styles.blockColorStatus, styles.statusYellow]
            : props.item.condition === 1
            ? [styles.blockColorStatus, styles.statusGreen]
            : [styles.blockColorStatus, styles.statusRed]
        }></View>
      <View style={styles.blockWrap}>
        <View style={styles.blockHeader}>
          <Text style={styles.blockHeaderText}>Описание:</Text>
          <View>
            <SvgArrowLongRight color={Colors.darkGreen} />
          </View>
        </View>
        <View style={styles.blockInformation}>
          <View style={styles.blockInformationText}>
            <Text style={styles.text} numberOfLines={4}>
              {props.item.description}
            </Text>
          </View>
          <View style={styles.blockInformationImage}>
            {token !== null ? (
              <Image
                style={styles.img}
                source={{
                  uri: props.item.url[0],
                  headers: {
                    Authorization: `` + token,
                  },
                }}
              />
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  blockColorStatus: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: '10%',
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
  itemBlock: {
    backgroundColor: Colors.whiteColor,
    shadowColor: Colors.blackColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 17,
  },
  blockWrap: {
    width: '100%',
  },
  blockInformation: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  blockInformationText: {
    width: '50%',
    marginTop: 7,
  },
  blockInformationImage: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'NotoSans-Regular',
  },
  blockHeader: {
    //  width: '100%',
    width: '90%',
    flexDirection: 'row',
    //  alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E8EEE9',
    borderBottomWidth: 3,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  blockHeaderText: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'NotoSans-Regular',
    color: Colors.darkGrey,
  },
  img: {
    width: 94,
    height: 64,
    //  resizeMode: 'cover',
  },
});
