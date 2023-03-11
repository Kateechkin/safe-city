import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const AppSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: Colors.mediumGreen}}
        style={styles.swith}
        thumbColor={isEnabled ? Colors.green : Colors.green}
        ios_backgroundColor="#eeeef1"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginRight: 10,
  },
});

export default AppSwitch;
