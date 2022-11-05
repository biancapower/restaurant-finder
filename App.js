import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search",
      cardStyle: { backgroundColor: "white" },
    },
  }
);

/*
    The createAppContainer function creates a React component that wraps our navigator
      and passes the navigation prop to our screens
    This is necessary because otherwise, we wouldn't have any react component to export
*/
export default createAppContainer(navigator);
