import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { colors, fontSize } from "../../utils/constants";
import { Icon } from "@ui-kitten/components";
import { OrderContext } from "../../store/contexts/OrderContext";
import { useContext, useState, useEffect } from "react";
const CartItem = ({ item, total, setTotal }) => {
  const { listOrders, setListOrders } = useContext(OrderContext);
  const list = [...listOrders];

  const [cost, setCost] = useState(item.price);
  const [amout, setAmout] = useState(item.amout);

  useEffect(() => {
    let sum = list.reduce(
      (money, item) => Number(money) + Number(item.price) * Number(item.amout),
      0
    );
    setTotal(sum)
  }, [amout],[list]);

  const onpressIncrease = () => {
    setAmout(amout + 1);
    setCost(item.price * (amout + 1));
    item.amout = amout + 1;
    item.cost = item.price * (amout + 1);
  };
  const onpressDecrease = () => {
    if (amout == 1) {
      const i = list.indexOf(item);
      if (i > -1) {
        list.splice(i, 1);
        setListOrders(list);
      }
    } else {
      setAmout(amout - 1);
      setCost(item.price * (amout - 1));
      item.amout = amout - 1;
      item.cost = item.price * (amout - 1);
    }
    if (list.length == 0) {
      setTotal(0);
    }
  };
  return (
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
          <Icon name="sun-outline" fill={colors.gray} style={styles.coldIcon} />
          <Text style={styles.preserveText}></Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}> {cost} VND</Text>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.quantityBtn} onPress={onpressDecrease}>
            <Icon
              name="minus-outline"
              fill={colors.gray2}
              style={styles.quantityIcon}
            />
          </Pressable>
          <Text style={styles.quantityValue}>{Number(item.amout)}</Text>
          <Pressable style={styles.quantityBtn} onPress={onpressIncrease}>
            <Icon
              name="plus-outline"
              fill={colors.gray2}
              style={styles.quantityIcon}
            />
          </Pressable>
        </View>

        <Text style={styles.priceSub}> đơn giá: {item.price} đ</Text>
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

export default CartItem;
