import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 26,
  },

  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },

  messageCountContainer: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#F35BAC',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 7,
  },

  messageCount: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Inter',
    letterSpacing: 0.12,
  },
});

export default styles;
