import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Deliveries from './pages/Deliveries';
import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      Deliveries,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);
