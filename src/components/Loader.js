import React from 'react';
import {useWindowDimensions, View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <Text style={style.text}>Загрузка...</Text>
          <LottieView
            source={require('../assets/lottie/green-dots-loader.json')}
            autoPlay
            loop
            style={style.lottie}
          />
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    // flex: 1,
    //  height: 100,
    // width: 200,
    backgroundColor: 'white',
    marginHorizontal: 25,
    //  marginBottom: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    //  paddingHorizontal: 10,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'center',
    // zIndex: 20,
  },
  lottie: {
    // display: 'none',
    width: 100,
    height: 100,

    //  backgroundColor: 'black',
    // fontSize: 30,
    // height: 50,
    // position: 'absolute',
    // top: 0,
    // display: 'flex',
    // justifyContent: 'flex-start',
  },
  text: {
    // marginLeft: 30,
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Loader;
