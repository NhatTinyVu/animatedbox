import React from 'react';
import PropTypes from 'prop-types';
import {Animated, View} from 'react-native';
import styles from './AnimatedBox.styles';

const AnimatedBox = ({translateX, translateY}) => {
  return (
    <Animated.View
      style={{
        transform: [{translateX}, {translateY}],
      }}>
      <View style={styles.box} />
    </Animated.View>
  );
};

AnimatedBox.propTypes = {
  translateX: PropTypes.number,
  translateY: PropTypes.number,
};

AnimatedBox.defaultProps = {
  translateX: 0,
  translateY: 0,
};

export default AnimatedBox;
