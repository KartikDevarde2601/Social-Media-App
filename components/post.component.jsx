import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import UserPost from './userpost';
import PostHeader from './postHeader';
import PostData from '../utils/postData';

const Post = () => {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [renderData, setRenderData] = useState(PostData.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }

    setPageNumber(pageNumber);
    return PostData.slice(startIndex, startIndex + pageSize);
  };

  return (
    <FlatList
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        if (!loading) {
          setLoading(true);
          setRenderData([
            ...renderData,
            ...pagination(PostData, pageNumber + 1, pageSize),
          ]);
          setLoading(false);
        }
      }}
      data={renderData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.postContainer}>
          <PostHeader name={item.name} location={item.location} id={item.id} />
          <UserPost
            likes={item.like}
            comments={item.comments}
            save={item.save}
            id={item.id}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default Post;
