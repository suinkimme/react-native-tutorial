import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

// utils
import { goBack } from 'utils';

const Header = ({ navigation, route }: StackHeaderProps) => {
  const { name } = route;
  return (
    <Appbar.Header>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={() => goBack(navigation)} />
      )}
      <Appbar.Content title={name} />
    </Appbar.Header>
  );
};

export default Header;
