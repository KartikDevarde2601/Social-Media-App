import React from 'react';
import {useState} from 'react';
import {View, Pressable, SafeAreaView, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import Title from './components/title.Component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import styles from './assets/styles/main';
import data from './utils/data';
import UserStory from './components/userStory.Componet';
import Post from './components/post.component';

const App = () => {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }

    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Title title="Let's Explore" />
          <Pressable style={styles.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
            <View style={styles.messageCountContainer}>
              <Text style={styles.messageCount}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={{marginLeft: 28, marginRight: 28, marginTop: 8}}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!loading) {
                setLoading(true);
                setRenderData([
                  ...renderData,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setLoading(false);
              }
            }}
            horizontal={true}
            data={renderData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <UserStory name={item.name} id={item.id} />}
          />
        </View>
        <View>
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
