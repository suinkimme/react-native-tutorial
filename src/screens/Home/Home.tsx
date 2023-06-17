import React from 'react';
import { ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List } from 'react-native-paper';

// types
import { RootStackParamList } from 'types';

// components
import { Touchable } from 'components';

// styles
import styles from './Home.style';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Touchable onPress={() => navigation.navigate('Gallery')}>
        <List.Item
          title="Gallery Example"
          left={props => <List.Icon {...props} icon="folder-multiple-image" />}
        />
      </Touchable>
    </ScrollView>
  );
};

export default Home;
