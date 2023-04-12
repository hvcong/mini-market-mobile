import React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";
import { backgroundColors, colors } from "../../utils/constants";
import LabelHeading from "../common/LabelHeading";
import Product from "./Product";

const Group = ({
  title,
  type,
  setIsVisibleModal,
  backgroundColor,
  navigation,
}) => {
  const data = [
    {
      id: "sp1",
      name: "Calo asdf Cacoaa",
      images: require("../../../assets/cate_drink.png"),
      description: "ca mà cô",
      price: 1000,
    },
  ];
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
        ]}
      >
        {data.map((item, index) => (
          <View style={[styles.list]}>
            <Product navigation={navigation} item={item} key={index} />
          </View>
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
  head: {},
  body: {
    backgroundColor: colors.white,
  },
  list: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    // paddingHorizontal: 12,
  },
});

export default Group;
