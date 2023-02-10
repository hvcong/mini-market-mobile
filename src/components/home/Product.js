import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text, Icon } from "@ui-kitten/components";

const Product = () => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/product_tao.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.left}>
          <Text category="label" style={styles.name}>
            Táo đỏ USA
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>100.000.000/kg</Text>
            <Text style={styles.percent}>-50%</Text>
          </View>
          <Text style={styles.newPrice}>80.000/kg</Text>
          <Text style={styles.quantity}>Số lượng: 5 kg</Text>
        </View>
      </View>
      <View style={styles.heartContainer}>
        <Icon name="heart" fill="#ddd" style={styles.heartIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "white",
    width: "48%",
    alignItems: "center",
    marginBottom: 12,
    overflow: "hidden",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 120,
  },
  content: {
    flexDirection: "row",
    paddingBottom: 12,
    paddingHorizontal: 4,
  },
  left: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    textDecorationLine: "line-through",
    fontSize: 13,
  },
  percent: {
    marginLeft: 12,
    color: "red",
    fontSize: 16,
  },
  newPrice: {},
  right: {
    justifyContent: "flex-end",
  },
  quantity: {
    paddingTop: 4,
  },
  heartContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#82b478",
  },
  heartIcon: {
    width: 28,
    height: 28,
  },
});

export default Product;
