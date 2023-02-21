import React from "react";
import { Image, Pressable, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { backgroundColors, colors, fontSize } from "../../utils/constants";

const Product = ({ setIsVisibleModal }) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/product_tao.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.name}>Táo đỏ USA</Text>
          <Text style={styles.newPrice}>80.000 /kg</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>100.000 /kg</Text>
            <Text style={styles.percent}>-50%</Text>
          </View>
        </View>
        <Pressable
          style={styles.btnContainer}
          onPress={() => setIsVisibleModal(true)}
        >
          <Text style={styles.btnLabel}>MUA</Text>
        </Pressable>
      </View>
      <View style={styles.heartContainer}>
        <Icon name="heart" fill={colors.white} style={styles.heartIcon} />
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
    borderWidth: 1,
    borderColor: colors.grayLighter,
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 120,
  },
  content: {
    paddingBottom: 12,
    paddingHorizontal: 12,
    width: "100%",
  },
  information: {
    width: "100%",
    paddingBottom: 12,
  },
  name: {
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  newPrice: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    textDecorationLine: "line-through",
    fontSize: fontSize.S,
    color: colors.gray1,
  },
  percent: {
    marginLeft: 12,
    color: "red",
    fontSize: 16,
  },
  right: {
    justifyContent: "flex-end",
  },
  quantity: {
    paddingTop: 4,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: colors.green,
    width: "100%",
    paddingVertical: 6,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColors.gray,
  },
  btnLabel: {
    color: colors.green2,
    fontSize: fontSize.L,
  },
  heartContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#82b478",
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default Product;
