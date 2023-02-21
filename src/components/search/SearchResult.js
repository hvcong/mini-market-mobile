import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { colors, fontSize, windowWidth } from "../../utils/constants";
import SearchResultCategoryItem from "./SearchResultCategoryItem";
import { Icon } from "@ui-kitten/components";
import SearchResultProductItem from "./SearchResultProductItem";

const SearchResult = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoryListContainer}>
        <Text style={styles.title}>Các thể loại</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.scroll}
        >
          <View style={styles.categoryList}>
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
            <SearchResultCategoryItem />
          </View>
        </ScrollView>
        <Text style={styles.title}>Các sản phẩm</Text>
        <View style={styles.productList}>
          <SearchResultProductItem />
          <SearchResultProductItem />
          <SearchResultProductItem />
          <SearchResultProductItem />
          <SearchResultProductItem />
          <SearchResultProductItem />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryList: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  title: {
    fontSize: fontSize.L,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.gray2,
    paddingVertical: 12,
    paddingLeft: 8,
  },
  scroll: {
    position: "relative",
  },
  productList: {
    paddingBottom: 12,
  },
});

export default SearchResult;
