import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

// utils
import { requestPermissions } from 'utils';

// types
import { RootStackParamList } from 'types';

export type GalleryProps = NativeStackScreenProps<
  RootStackParamList,
  'Gallery'
>;

const Gallery = ({}: GalleryProps) => {
  return (
    <Button mode="text" onPress={() => requestPermissions(['camera', 'photo'])}>
      Press me
    </Button>
  );
};

export default Gallery;
