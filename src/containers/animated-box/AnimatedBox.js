import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AnimatedBoxComponent from '../../components/animated-box/AnimatedBox';
import styles from './AnimatedBox.styles';

const AnimatedBox = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AnimatedBoxComponent />
      </View>
    </SafeAreaView>
  );
};

export default AnimatedBox;
