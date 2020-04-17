import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Deliveries from './pages/Deliveries';
import SignIn from './pages/SignIn';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator({
          Deliveries,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
