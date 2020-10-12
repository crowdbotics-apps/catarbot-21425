import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4140314Navigator from '../features/UserProfile4140314/navigator';
import Dashboard25140313Navigator from '../features/Dashboard25140313/navigator';
import Settings6140312Navigator from '../features/Settings6140312/navigator';
import NotificationList7140311Navigator from '../features/NotificationList7140311/navigator';
import Settings140281Navigator from '../features/Settings140281/navigator';
import Settings140245Navigator from '../features/Settings140245/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile4140314: { screen: UserProfile4140314Navigator },
Dashboard25140313: { screen: Dashboard25140313Navigator },
Settings6140312: { screen: Settings6140312Navigator },
NotificationList7140311: { screen: NotificationList7140311Navigator },
Settings140281: { screen: Settings140281Navigator },
Settings140245: { screen: Settings140245Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
