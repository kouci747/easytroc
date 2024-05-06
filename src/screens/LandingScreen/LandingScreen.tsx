import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Styling from './LandingScreen-styling';

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <Styling.CustomView>
      <Styling.BigText>LandingScreen</Styling.BigText>
      <TouchableOpacity
        onPress={() => navigation.navigate('AuthScreenNav' as never)}>
        <Styling.BigText>Go to Auth</Styling.BigText>
      </TouchableOpacity>
    </Styling.CustomView>
  );
};

export default LandingScreen;