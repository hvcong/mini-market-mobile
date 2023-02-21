import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { backgroundColors, colors, fontSize } from "../../utils/constants";

const SearchResultProductItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/product_tao.jpg")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>Gạo thơm Vua Gạo Làng Ta túi 5kg</Text>
        <View style={styles.row}>
          <Text style={styles.price}>114.000đ</Text>
          <View style={styles.btnContainer}>
            <Text style={styles.btnLabel}>Mua</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: colors.grayLighter,
  },
  imageContainer: {},
  image: {
    width: 120,
    height: 120,
  },
  body: {
    flex: 1,
    paddingLeft: 12,
    height: "100%",
  },
  name: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  row: {
    flexDirection: "row",
  },
  price: {
    flex: 1,
    fontSize: fontSize.XL,
    fontWeight: "bold",
  },
  btnContainer: {
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderWidth: 1,
    borderColor: colors.green1,
    borderRadius: 4,
    backgroundColor: backgroundColors.gray,
  },
  btnLabel: {
    // fontWeight: "bold",
    fontSize: fontSize.XL,
    textTransform: "uppercase",
    color: colors.green2,
  },
});

export default SearchResultProductItem;
