import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "@ui-kitten/components";
import { colors, fontSize } from "../../utils/constants";

const ProductQuantityChange = () => {
  return (
    <View style={styles.quantityContainer}>
      <View style={styles.quantityBtn}>
        <Icon
          name="minus-outline"
          fill={colors.gray2}
          style={styles.quantityIcon}
        />
      </View>
      <Text style={styles.quantityValue}>5</Text>
      <View style={styles.quantityBtn}>
        <Icon
          name="plus-outline"
          fill={colors.gray2}
          style={styles.quantityIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: "row",
    marginVertical: 12,
    borderRadius: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  quantityBtn: {
    backgroundColor: colors.grayLighter,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityIcon: {
    width: 24,
    height: 24,
  },
  quantityValue: {
    fontSize: fontSize.XXL,
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 32,
    minHeight: 32,
    lineHeight: 32,
    paddingHorizontal: 4,
  },
});

export default ProductQuantityChange;
