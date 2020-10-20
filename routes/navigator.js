import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/teachers/Home";
import Rewards from "../screens/teachers/Rewards";
import Assignments from "../screens/teachers/Assignments";

import SignupScreen from "../screens/SignupScreen";
import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import StudentDash from "../screens/students/StudentDash";
import ShopScreen from "../screens/students/ShopScreen";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Teacher Dashboard",
    },
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: {
      title: "Rewards",
    },
  },
  Assignments: {
    screen: Assignments,
    navigationOptions: {
      title: "Assignments",
    },
  },
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: "Welcome Page",
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup Page",
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
    },
  },
  ShopScreen: {
    screen: ShopScreen,
    navigationOptions: {
      title: "Rewards Shop",
    },
  },
  StudentDash: {
    screen: StudentDash,
    navigationOptions: {
      title: "Student Dashboard",
    },
  },
};

const Navigator = createStackNavigator(screens, {
  initialRouteName: "Home",
});

export default createAppContainer(Navigator);
