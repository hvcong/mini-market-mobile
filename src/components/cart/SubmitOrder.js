import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Icon } from "@ui-kitten/components";
import { colors, fontSize } from "../../utils/constants";

const SubmitOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>point</Text>
      </View>
      <View style={styles.right}>
        <Pressable
          onPress={() => {
            navigation.navigate("Payment");
          }}
          style={styles.btnContainer}
        >
          <View style={styles.numOfProductContainer}>
            <Text style={styles.numOfProductValue}>2</Text>
          </View>
          <Icon
            name="shopping-cart-outline"
            fill={colors.white}
            style={styles.cartIcon}
          />
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Đặt hàng</Text>
            <Text style={styles.priceValue}>211.000đ</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderColor: "#ccc",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 24,
  },

  left: {},
  right: {},
  btnContainer: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: colors.green2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  numOfProductContainer: {
    width: 24,
    height: 24,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  numOfProductValue: {
    fontWeight: "bold",
  },
  cartIcon: {
    width: 28,
    height: 28,
  },
  priceContainer: {
    paddingLeft: 12,
  },
  priceLabel: {
    fontSize: fontSize.XXL,
    fontWeight: "bold",
    color: colors.white,
  },
  priceValue: {
    fontSize: fontSize.XXL,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default SubmitOrder;
