import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { colors, fontSize } from "../../utils/constants";
import { TouchableOpacity } from "react-native";
import { Toast, convertToVND } from "../../utils";
import { useGlobalContext } from "../../store/contexts/GlobalContext";
import useOrderContext from "../../store/contexts/OrderContext";

const PaymentSubmit = ({ style, navigation }) => {
  const { account } = useGlobalContext();
  const { amountMoney, orderFunc } = useOrderContext();

  async function onSubmit() {
    let resultPayment = false;
    Toast.infor("Tiến hành thanh toán bằng zalo pay ở đây");

    resultPayment = true;
    if (resultPayment) {
      // payment oke
      let result = await orderFunc.paymentOke();
      if (result) {
        navigation.navigate("History");
      }
    }
  }

  return (
    <Shadow distance={24} style={styles.shadow} startColor="#00000021">
      <TouchableOpacity style={styles.wrap} onPress={onSubmit}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Tiến hành thanh toán {convertToVND(amountMoney.total)}
          </Text>
        </View>
      </TouchableOpacity>
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
