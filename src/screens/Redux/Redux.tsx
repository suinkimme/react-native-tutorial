import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Button } from 'react-native-paper';

// store
import { RootState } from 'store';
import { up, down } from 'store/counterSlice';

// types
import { RootStackParamList } from 'types';

// styles
import styles from './Redux.style';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Redux'>;

const Redux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  return (
    <View style={[styles.view]}>
      <View style={[styles.textView]}>
        <Text variant="displayLarge">{count}</Text>
      </View>
      <View style={[styles.buttonView]}>
        <Button
          mode="contained"
          buttonColor="#222"
          onPress={() => dispatch(down(2))}
          style={[styles.button]}
        >
          -
        </Button>
        <Button
          mode="contained"
          onPress={() => dispatch(up(2))}
          style={[styles.button]}
        >
          +
        </Button>
      </View>
    </View>
  );
};

export default Redux;
