import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { PermissionsAndroid, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// types
import { RootStackParamList } from 'types';

export type GalleryProps = NativeStackScreenProps<
  RootStackParamList,
  'Gallery'
>;

const Gallery = ({}: GalleryProps) => {
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const getPhotoWithPermission = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
  };

  useEffect(() => {
    getPhotoWithPermission();
  }, []);

  return <Text>Gallery</Text>;
};

export default Gallery;
