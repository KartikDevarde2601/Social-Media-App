import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../assets/styles/scaling.style';

const UserStory = props => {
  return (
    <View style={styles.userStoryContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/userProfile.png')} />
      </View>
      <Text style={styles.userName}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userStoryContainer: {
    flex: 1,
    marginRight: horizontalScale(20),
    alignItems: 'center',
    height: verticalScale(100),
  },
  userName: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: fontScale(14),
    fontWeight: 'bold',
  },

  imageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 5,
    borderRadius: 50,
    marginBottom: verticalScale(5),
  },
});

export default UserStory;
