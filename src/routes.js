import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/Home";
import OptionsScreen from "../src/screens/Options";
import SearchScreen from "../src/screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./config/const";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={24} color={color} />;
          }
          if (route.name === "Search") {
            return <AntDesign name="search1" size={24} color={color} />;
          }
          if (route.name === "Options") {
            return <Ionicons name="options" size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: `${colors.primaryColor}`,
        inactiveBackgroundColor: `${colors.primaryColor}`,
        activeTintColor: `${colors.secondaryColor}`,
        inactiveTintColor: "gray",
        labelPosition: "beside-icon",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
};

const RouterComponent = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabStack />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default RouterComponent;
