import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// utils
import { requestPermission } from 'utils';

// types
import { RootStackParamList } from 'types';

export type GalleryProps = NativeStackScreenProps<
  RootStackParamList,
  'Gallery'
>;

const Gallery = ({}: GalleryProps) => {
  useEffect(() => {
    requestPermission('photo');
  }, []);

  return <Text>Gallery</Text>;
};

export default Gallery;
