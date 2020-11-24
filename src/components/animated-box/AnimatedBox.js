/* eslint-disable react-hooks/exhaustive-deps */

import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Animated, View, Easing} from 'react-native';
import styles from './AnimatedBox.styles';

const AnimatedBox = ({translateX, translateY, timing}) => {
  const translateXRef = useRef(new Animated.Value(translateX));
  const translateYRef = useRef(new Animated.Value(translateY));

  useEffect(() => {
    const animation = Animated.timing(translateXRef.current, {
      toValue: translateX,
      duration: timing,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    return () => animation?.stop();
  }, [translateX]);

  useEffect(() => {
    const animation = Animated.timing(translateYRef.current, {
      toValue: translateY,
      duration: timing,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    return () => animation?.stop();
  }, [translateY]);

  return (
    <Animated.View
      style={{
        transform: [
          {translateX: translateXRef.current},
          {translateY: translateYRef.current},
        ],
      }}>
      <View style={styles.box} />
    </Animated.View>
  );
};

AnimatedBox.propTypes = {
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  timing: PropTypes.number,
};

AnimatedBox.defaultProps = {
  translateX: 0,
  translateY: 0,
  timing: 500,
};

export default AnimatedBox;
