import React from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// types
import { RootStackParamList } from 'types';

export type GalleryProps = NativeStackScreenProps<
  RootStackParamList,
  'Gallery'
>;

const Gallery = ({}: GalleryProps) => {
  return <Text>Gallery</Text>;
};

export default Gallery;
