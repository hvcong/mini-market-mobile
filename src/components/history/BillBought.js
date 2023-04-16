import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import userApi from "../../api/userApi";
import { Image } from "react-native";

const BillBought = ({ phone }) => {
  const [data, setData] = useState();
  const getData = async () => {
    const dt = await userApi.getOneCustomerByPhone(phone);
    setData(dt);
  };
  useEffect(() => {
    getData();
  }, []);
  let bills = [];
  if (data) {
    bills = data.customer.Bills;
    console.log(bills);
  }
  const dateToString = (date) => {
    return date.toISOString().substring(0, 10);
  }

  const OneItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../../../assets/cart.png')} />
      </View>
      <View style = {styles.details}>
        <Text style={styles.id}>Mã đơn hàng: {item.id}</Text>
        <Text style={styles.date}>Ngày đặt hàng:{dateToString(new Date(item.orderDate))}</Text>
        <Text style={styles.cost}>Tổng tiền: {item.cost}</Text>
        <Text style={styles.employee}>
          nhân viên bán hàng: {item.EmployeeId}
        </Text>
        <Text style={styles.name}></Text>
      </View>
    </View>
  );
  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id}
        data={bills}
        renderItem={OneItem}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={<Text> bạn chưa có đơn hàng nào </Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
  item: {
    flex: 1,
    margin: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 13,
    // backgroundColor: "skyblue",
  },
  avatarContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 55,
    width: 55,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  details:{
    
    flex:1,
    flexDirection: 'column',    
  },
  text: {
    color: 'black'
  }
});

export default BillBought;
