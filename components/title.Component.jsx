import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    color: '#000000',
  },
});

export default Title;
