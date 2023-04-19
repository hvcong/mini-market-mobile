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
import useOrderContext, { OrderContext } from "../store/contexts/OrderContext";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { colors, btnColors, backgroundColors } from "../utils/constants";
import { usePriceContext } from "../store/contexts/PriceContext";
import { convertToVND } from "../utils";
import { styles } from "@apolloeagle/loading-dots/src/components/animation-style";

const Details = ({ navigation, route }) => {
  const priceLineId = route.params;
  const { orderFunc } = useOrderContext();
  const { priceFunc } = usePriceContext();

  let item = priceFunc.getPriceById(priceLineId);

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
          style={{ paddingTop: 12 }}
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
            <Text style={style.amout}>
              Đơn giá 1: {item.ProductUnitType.UnitType.name}
            </Text>

            <Text style={style.money}> {convertToVND(item.price)}</Text>
          </View>
          <Text style={style.detailsText}>
            {item.ProductUnitType.Product.description}
          </Text>
          <View style={styles.ppContainer}>
            <Icon name="gift-outline" fill={"red"} style={styles.giftIcon} />
            <Text style={styles.ppText}>{}</Text>
          </View>

          <View style={{ marginTop: 40, marginBottom: 40, height: 50 }}>
            {orderFunc.isExistInCart(item.id) ? (
              <TouchableOpacity style={style.button}>
                <Text style={style.text}>Xem giỏ hàng</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={style.button}>
                <Text style={style.text}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            )}
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
    color: "white",
  },
});
export default Details;
