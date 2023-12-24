import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../assets/styles/scaling.style';

const PostHeader = props => {
  return (
    <View style={styles.PostHeaderContainer}>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/images/userProfile.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.userNameContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{props.name}</Text>
          <Text style={styles.userlocation}>{props.location}</Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsis} color="#79869F" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PostHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    marginRight: horizontalScale(20),
  },
  ImageContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 5,
    borderRadius: 50,
    marginBottom: verticalScale(5),
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },

  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  userName: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: fontScale(20),
    fontWeight: 500,
  },
  userlocation: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontSize: fontScale(16),
    fontWeight: 400,
  },
});

export default PostHeader;
