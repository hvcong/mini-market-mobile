import { SafeAreaView,ToastAndroid,TouchableOpacity,View,Image,ScrollView,Text,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { OrderContext } from "../store/contexts/OrderContext";
import { AntDesign } from "@expo/vector-icons";
import { useContext,useState } from "react";

const Details = ({ navigation, route }) => {
  const item = route.params;
  const { listOrders, setListOrders } = useContext(OrderContext);
  var newListOrders = [...listOrders];
  const buyItem = { ...item };

  const [price, setPrice] = useState(item.price);
  const [amout, setAmout] = useState(1);

  const onpressIncrease = () => {
    setAmout(amout + 1);
    setPrice(item.price * (amout + 1));
  };
  const onpressDecrease = () => {
    if (amout < 2) {
      setAmout(1);
    } else {
      setAmout(amout - 1);
      setPrice(item.price * (amout - 1));
    }
  };

  return (
    <SafeAreaView style = {style.container}>
      <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
            >
              {item.name}
            </Text>            
          </View>
          <View style={style.behavior}>
            <TouchableOpacity onPress={onpressDecrease}>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={style.amout}>{amout}</Text>
            <TouchableOpacity onPress={onpressIncrease}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text style={style.money}> {price} $</Text>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <TouchableOpacity
              
              onPress={() => {
                buyItem.quantity = amout;
                buyItem.price = price;
                var found = false;
                for (var i = 0; i < newListOrders.length; i++) {
                  if (newListOrders[i].name == buyItem.name) {
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  newListOrders.push(buyItem);
                } else {
                  const i = newListOrders.findIndex(
                    (e) => e.name == buyItem.name
                  );
                  if (i > -1) {
                    newListOrders[i].quantity =
                      buyItem.quantity + newListOrders[i].quantity;
                    newListOrders[i].price =
                      Number(price) + Number(newListOrders[i].price);
                  }
                }                
                setListOrders(newListOrders);
                ToastAndroid.showWithGravityAndOffset(
                  "Add to cart successfully!",
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                  25,
                  50
                );
                navigation.navigate("Home");                
              }}
            >
            <Text> Add to cart</Text>
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
    paddingVertical:16,
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
    //   backgroundColor: COLORS.primary,
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
    //   color: COLORS.white,
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
    },
  });
export default Details
