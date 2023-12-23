import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faCommentDots,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

const UserPost = props => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/images/userPost.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconCount}>
          <FontAwesomeIcon style={styles.icon} icon={faHeart} color="#79869F" />
          <Text>{props.likes}</Text>
        </View>

        <View style={styles.iconCount}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faCommentDots}
            color="#79869F"
          />
          <Text>{props.comments}</Text>
        </View>

        <View style={styles.iconCount}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faBookmark}
            color="#79869F"
          />
          <Text>{props.save}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
  },

  ImageContainer: {
    borderRadius: 15,
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  iconCount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default UserPost;
