import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { Icon } from "@ui-kitten/components";
import { bottomTabHeight } from "../utils/constants";

const TabNavigator = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#ddd",
          borderTopWidth: 1,
          height: bottomTabHeight,
        },
      }}
      initialRouteName="HomeStack"
    >
      <TabNavigator.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="grid-outline"
              fill={color}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
          tabBarLabel: "Sản phẩm",
        }}
      />
      <TabNavigator.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="shopping-cart-outline"
              fill={color}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
          tabBarLabel: "Giỏ hàng",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="person-outline"
              fill={color}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
          tabBarLabel: "Giỏ hàng",
        }}
      />
    </TabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Tab;
