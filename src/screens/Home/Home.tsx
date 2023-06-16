import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

// types
import { RootStackParamList } from 'types';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation, route }: HomeProps) => {
  console.log(navigation, route);
  return <Text>Home Screen</Text>;
};

export default Home;
