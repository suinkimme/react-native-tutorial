import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

const Header = ({ navigation, route }: StackHeaderProps) => {
  console.log(navigation, route);
  console.log('header', route);

  const { name } = route;

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={name} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
  );
};

export default Header;
