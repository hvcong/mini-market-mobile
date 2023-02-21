import { Text } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { backgroundColors, colors } from "../../utils/constants";
import LabelHeading from "../common/LabelHeading";
import Product from "./Product";

const Group = ({ title, type, setIsVisibleModal, backgroundColor }) => {
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
        <View style={[styles.list]}>
          <Product setIsVisibleModal={setIsVisibleModal} />
          <Product setIsVisibleModal={setIsVisibleModal} />
          <Product setIsVisibleModal={setIsVisibleModal} />
          <Product setIsVisibleModal={setIsVisibleModal} />
        </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});

export default Group;
