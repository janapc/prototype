import { StatusBar, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

module.exports = () => {
  const hasNotch = DeviceInfo.hasNotch();
  let notch;

  if (Platform.OS === 'ios' && hasNotch === false) notch = 10;
  if (Platform.OS === 'android' && hasNotch === true) notch = StatusBar.currentHeight;
  if (Platform.OS === 'android' && hasNotch === false) notch = StatusBar.currentHeight;
  return notch;
};
