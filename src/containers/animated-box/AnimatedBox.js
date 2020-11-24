import React, {useState} from 'react';
import {SafeAreaView, View, TouchableWithoutFeedback, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import AnimatedBoxComponent from '../../components/animated-box/AnimatedBox';
import {useHandleTouch} from './AnimatedBox.utils';
import styles from './AnimatedBox.styles';

const AnimatedBox = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [velocity, setVelocity] = useState(1000);
  const handleTouch = useHandleTouch({setCoords});

  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={styles.container}>
          <AnimatedBoxComponent
            translateX={coords.x}
            translateY={coords.y}
            velocity={velocity}
          />
          <View style={styles.absoluteBottomContainer}>
            <Slider
              step={1}
              value={velocity}
              minimumValue={0}
              maximumValue={10000}
              onValueChange={setVelocity}
            />
            <Text style={styles.velocity}>{velocity}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AnimatedBox;
