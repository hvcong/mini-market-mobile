import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { colors, fontSize } from "../../utils/constants";

const PaymentSubmit = ({ style }) => {
  return (
    <Shadow distance={24} style={styles.shadow} startColor="#00000021">
      <View style={styles.wrap}>
        <View style={styles.container}>
          <Text style={styles.text}>Hoàn tất mua 211.000đ</Text>
        </View>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  container: {
    backgroundColor: colors.green2,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  shadow: {
    width: "100%",
  },
  text: {
    fontSize: fontSize.XXL,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default PaymentSubmit;
