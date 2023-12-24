import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, fontScale} from './scaling.style';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    paddingLeft: horizontalScale(17),
    paddingRight: horizontalScale(26),
  },

  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },

  messageCountContainer: {
    width: horizontalScale(15),
    height: verticalScale(13),
    borderRadius: 50,
    backgroundColor: '#F35BAC',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(5),
    top: verticalScale(5),
  },

  messageCount: {
    fontSize: fontScale(10),
    color: '#fff',
    fontFamily: 'Inter',
    letterSpacing: 0.12,
  },
});

export default styles;
