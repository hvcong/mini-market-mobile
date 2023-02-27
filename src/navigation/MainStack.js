import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./Tab";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Payment from "../screens/Payment";
import Search from "../screens/Search";
import Test from "../screens/Test";
import Account from "../screens/account/Account";
import Intro from "../screens/Intro";
import Demo from "../screens/Demo";
import InforUpdate from "../screens/account/InforUpdate";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Account"
    >
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="InforUpdate" component={InforUpdate} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainStack;
