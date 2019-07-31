import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SendScreen from '../screens/Send/SendScreen';
import AppDrawerNavigator from './DrawerNavigator';
import ModalStack from './ModalNavigator';

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  Send: { screen: SendScreen },
  Modal: { screen: ModalStack }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
