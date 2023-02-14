import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./Tab";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Payment from "../screens/Payment";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainStack;
