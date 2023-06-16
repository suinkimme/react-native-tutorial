import React from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// types
import { RootStackParamList } from 'types';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation, route }: HomeProps) => {
  console.log(navigation, route);
  return <Text>Home</Text>;
};

export default Home;
