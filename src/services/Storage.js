import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key, value) => {
  let val = JSON.stringify(value);
  return AsyncStorage.setItem(key, val);
};

export const retrieveData = key => {
  return AsyncStorage.getItem(key).then(response => JSON.parse(response));
};
