import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainScreen from "../screens/MainScreen/MainScreen";

import { THEME } from "../theme";

const MainScreenNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export const AppNavigation = createAppContainer(MainScreenNavigator);
