import React, { useContext, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { View, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { backgroundColors, colors, fontSize } from "../../utils/constants";
import { OrderContext } from "../../store/contexts/OrderContext";

const Product = ({ navigation, setIsVisibleModal, item }) => {
  const { listOrders, setListOrders } = useContext(OrderContext);
  var newListOrders = [...listOrders];
  const buyItem = { ...item };
  return (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("Details", item)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/product_tao.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.newPrice}>{item.price}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.percent}>-50%</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            let found = false;
            let index = -1;
            for (let i = 0; i < newListOrders.length; i++) {
              if (newListOrders[i].name == buyItem.name) {
                found = true;
                index = i;
                break;
              }
            }
            if (!found) {
              buyItem.quantity = 1;
              newListOrders.push(buyItem);
            } else {
              newListOrders[index].quantity += 1;
            }
            setListOrders(newListOrders);
            ToastAndroid.showWithGravityAndOffset(
              "Add to cart successfully!",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }}
        >
          <Text style={styles.btnLabel}>MUA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heartContainer}>
        <Icon name="heart" fill={colors.white} style={styles.heartIcon} />
      </View>
    </Pressable>
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
