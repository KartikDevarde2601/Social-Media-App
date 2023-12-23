import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

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
    marginRight: 20,
    alignItems: 'center',
    height: 100,
  },
  userName: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 'bold',
  },

  imageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 5,
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default UserStory;
