import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/HomeScreen';
import MenuScreen from '../screens/Menu/MenuScreen';

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {
  contentComponent: MenuScreen
});

module.exports = AppDrawerNavigator;
