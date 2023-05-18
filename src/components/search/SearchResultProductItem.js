import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { backgroundColors, colors, fontSize } from "../../utils/constants";
import { convertToVND } from "../../utils";
import useOrderContext from "../../store/contexts/OrderContext";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const SearchResultProductItem = ({ data, navigation }) => {
  const { orderFunc, listOrders } = useOrderContext();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(orderFunc.isExistInCart(data.id));
    return () => {};
  }, [listOrders]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Details", data.ProductUnitType.ProductId);
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: data.ProductUnitType.Product.images[0].uri }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{data.ProductUnitType.Product.name}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>{convertToVND(data.price)}</Text>
          <View style={styles.btnContainer}>
            {isInCart ? (
              <Text
                style={styles.btnLabel}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                Xem giỏ hàng
              </Text>
            ) : (
              <Text
                style={styles.btnLabel}
                onPress={() => {
                  orderFunc.addToCart(data);
                }}
              >
                Mua
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    fontSize: 12,
    textTransform: "uppercase",
    color: colors.green2,
  },
});

export default SearchResultProductItem;
