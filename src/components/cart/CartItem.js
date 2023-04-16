import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { colors, fontSize, backgroundColors } from "../../utils/constants";
import { Icon } from "@ui-kitten/components";
import { OrderContext } from "../../store/contexts/OrderContext";
import { useContext, useState, useEffect } from "react";
import { convertToVND } from "../../utils";

const CartItem = ({ item }) => {
  const { orderFunc } = useContext(OrderContext);

  let total = item.price * item.amount;
  let newPrice = item.price;
  let DRP = item.ProductUnitType.DiscountRateProduct;
  if (DRP) {
    newPrice = (item.price * (100 - DRP.discountRate)) / 100;
    total = newPrice * item.amount;
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.ProductUnitType.Product.images[0].uri }}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.nameProduct}>
            {item.ProductUnitType.Product.name}
          </Text>
          <View style={styles.preserveContainer}>
            {item.isPP && (
              <Text style={styles.preserveText}>{item.PP.title}</Text>
            )}
          </View>
          <View>
            <Text> {item.ProductUnitType.UnitType.name}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.price}> {convertToVND(total)}</Text>
          <View style={styles.quantityContainer}>
            {!item.isPP && (
              <Pressable
                style={styles.quantityBtn}
                onPress={() => {
                  orderFunc.decreaseQuantity(item.id);
                }}
              >
                <Icon
                  name="minus-outline"
                  fill={colors.gray2}
                  style={styles.quantityIcon}
                />
              </Pressable>
            )}
            <Text style={styles.quantityValue}>{Number(item.amount)}</Text>
            {!item.isPP && (
              <Pressable
                style={styles.quantityBtn}
                onPress={() => {
                  console.log("oke");

                  orderFunc.increaseQuantity(item.id);
                }}
              >
                <Icon
                  name="plus-outline"
                  fill={colors.gray2}
                  style={styles.quantityIcon}
                />
              </Pressable>
            )}
          </View>

          {DRP && (
            <View style={styles.drpContainer}>
              <Text style={styles.priceOld}>{convertToVND(item.price)}</Text>
              <Text style={styles.percentDiscount}>-{DRP.discountRate}%</Text>
            </View>
          )}
          <Text style={styles.priceSub}>{convertToVND(newPrice)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: backgroundColors.greenLighter,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
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
    fontSize: fontSize.L,
    fontWeight: "500",
  },
  priceSub: {
    color: colors.gray,
    fontSize: fontSize.S,
  },
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
  drpContainer: { flexDirection: "row" },
  priceOld: {},
  percentDiscount: {},
});

export default CartItem;
