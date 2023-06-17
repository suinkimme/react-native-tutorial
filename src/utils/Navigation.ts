import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const goBack = (navigation: StackNavigationProp<ParamListBase>) => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  }
};
