import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  } else {
    return 450;
  }
};

const guidelineBaseFont = () => {
  if (isSmall) {
    return 440;
  } else {
    return 400;
  }
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 330;
  } else if (width <= 450) {
    return 620;
  } else {
    return 680;
  }
};

const fontScale = size => Math.round((size * width) / guidelineBaseFont());
const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (height / guidelineBaseHeight()) * size;

export {horizontalScale, verticalScale, fontScale};
