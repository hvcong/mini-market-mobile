import React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";
import { backgroundColors, colors } from "../../utils/constants";
import LabelHeading from "../common/LabelHeading";
import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";
const Group = ({ title, type, backgroundColor, navigation, data }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.head}>
        <LabelHeading
          title={title}
          type={type}
          backgroundColor={backgroundColor}
        />
      </View>
      <View
        style={[
          styles.body,
          backgroundColor && { backgroundColor: backgroundColor },
          styles.list,
        ]}
      >
        {data.map((item, index) => (
          <Product navigation={navigation} item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
  },
  body: {
    backgroundColor: colors.white,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});

export default Group;
