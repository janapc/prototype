import { createStackNavigator } from 'react-navigation';

import ModalScreen from '../screens/Modal/ModalScreen';
import HomeScreen from '../screens/Home/HomeScreen';


const ModalStack = createStackNavigator(
  {
    Modal: { screen: ModalScreen },
    Home: {
      screen: HomeScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: { opacity: 1 }
  }
);

module.exports = ModalStack;
