import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { colors, fontSize } from "../../utils/constants";
import { Icon } from "@ui-kitten/components";
import ProductQuantityChange from "../common/ProductQuantityChange";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/product_tao.jpg")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.nameProduct}>Cá nục làm sạch 500g (5-7 con)</Text>
        <View style={styles.preserveContainer}>
          <Icon name="sun-outline" fill={colors.gray} style={styles.coldIcon} />
          <Text style={styles.preserveText}>Cần bảo quản lạnh</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>100.000đ</Text>
        <ProductQuantityChange />
        <Text style={styles.priceSub}>Giá 32.000đ/túi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  body: {
    flex: 1,
    paddingHorizontal: 12,
  },
  nameProduct: {
    fontWeight: "bold",
    color: colors.gray2,
    paddingBottom: 12,
  },
  preserveContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coldIcon: {
    width: 24,
    height: 24,
  },
  preserveText: {
    color: colors.gray,
    paddingLeft: 8,
  },
  right: {},
  price: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
  },
  priceSub: {
    color: colors.gray,
    fontSize: fontSize.S,
  },
});

export default CartItem;
