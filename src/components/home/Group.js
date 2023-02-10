import { Text } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import Product from "./Product";

const Group = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text category="h4">{title}</Text>
        <Text category="s2">Xem tất cả</Text>
      </View>
      <View style={styles.list}>
        <Product />
        <Product />
        <Product />
        <Product />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Group;
