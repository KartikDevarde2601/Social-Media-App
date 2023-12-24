import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../assets/styles/scaling.style';

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontSize: fontScale(24),
    fontWeight: 'bold',
    lineHeight: 29,
    color: '#000000',
  },
});

export default Title;
