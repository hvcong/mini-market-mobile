import {
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { OrderContext } from "../store/contexts/OrderContext";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { colors, btnColors, backgroundColors } from "../utils/constants";

const Details = ({ navigation, route }) => {
  const item = route.params;
  const { listOrders, setListOrders } = useContext(OrderContext);
  var newListOrders = [...listOrders];
  const buyItem = { ...item };

  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 8,
        }}
      >
        <Icon
          name="arrow-back-ios"
          style={{ paddingTop: 12, }}
          size={28}
          onPress={navigation.goBack}
        />
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          Chi tiết sản phẩm
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
            backgroundColor: backgroundColors.gray,
            borderRadius: 10,
          }}
        >
          <Image
            source={{ uri: item.ProductUnitType.Product.images[0].uri }}
            style={{ height: 220, width: 220, borderRadius: 10 }}
          />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {item.ProductUnitType.Product.name}
            </Text>
          </View>
          <View style={style.behavior}>
            {/* <TouchableOpacity onPress={onpressDecrease}>
              <AntDesign name="minuscircle" size={24}  colors= "black"  />
            </TouchableOpacity> */}
            <Text style={style.amout}>
              Đơn giá 1: {item.ProductUnitType.UnitType.name}
            </Text>
            {/* <TouchableOpacity onPress={onpressIncrease}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity> */}
            <Text style={style.money}> {item.price} VND</Text>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40, height: 50 }}>
            <TouchableOpacity
              onPress={() => {
                var found = false;
                for (var i = 0; i < newListOrders.length; i++) {
                  if (newListOrders[i].name == buyItem.name) {
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  buyItem.amout = 1;
                  newListOrders.push(buyItem);
                  setListOrders(newListOrders);
                }
                // else {
                //   const i = newListOrders.findIndex(
                //     (e) => e.name == buyItem.name
                //   );
                //   if (i > -1) {
                //     newListOrders[i].quantity =
                //       buyItem.quantity + newListOrders[i].quantity;
                //     newListOrders[i].price =
                //       Number(price) + Number(newListOrders[i].price);
                //   }
                // }
                ToastAndroid.showWithGravityAndOffset(
                  "Add to cart successfully!",
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                  25,
                  50
                );
                navigation.navigate("Home");
              }}
              style={style.button}
            >
              <Text style={style.text}> Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: backgroundColors.greenLighter,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    //   backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
  },
  behavior: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  money: {
    position: "absolute",
    right: 0,
    paddingVertical: 8,
    fontSize: 17,
    fontWeight: "bold",
    borderRadius: 20,
  },
  amout: {
    paddingHorizontal: 16,
    fontSize: 17,
    fontWeight: "500",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green2,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default Details;
