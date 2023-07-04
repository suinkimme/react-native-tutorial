import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { RootStackParamList } from 'types';

// screens
import { Home, Gallery, Redux } from 'screens';

// components
import { Header } from 'components';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Gallery" component={Gallery} />
        <RootStack.Screen name="Redux" component={Redux} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
