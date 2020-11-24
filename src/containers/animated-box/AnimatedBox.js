import React, {useState} from 'react';
import {SafeAreaView, View, TouchableWithoutFeedback, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import AnimatedBoxComponent from '../../components/animated-box/AnimatedBox';
import {useHandleTouch} from './AnimatedBox.utils';
import styles from './AnimatedBox.styles';

const AnimatedBox = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [timing, setTiming] = useState(500);
  const handleTouch = useHandleTouch({setCoords});

  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPressIn={handleTouch}>
        <View style={styles.container}>
          <AnimatedBoxComponent
            translateX={coords.x}
            translateY={coords.y}
            timing={timing}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.absoluteBottomContainer}>
        <Slider
          step={1}
          value={timing}
          minimumValue={10}
          maximumValue={2000}
          onValueChange={setTiming}
        />
        <Text style={styles.timing}>Timing: {timing}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AnimatedBox;
