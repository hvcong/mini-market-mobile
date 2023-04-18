import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import userApi from "../../api/userApi";
import { Image } from "react-native";
import { useGlobalContext } from "../../store/contexts/GlobalContext";
import { convertToVND, sqlToHHmmDDmmYYYY } from "../../utils";

const BillBought = () => {
  const { account } = useGlobalContext();

  let bills = account.Bills || [];
  const OneItem = ({ item }) => {
    const bill = item;
    console.log(sqlToHHmmDDmmYYYY(bill.orderDate));
    let status = "";
    if (bill.type == "pending") {
      status = "Đang chờ giao hàng";
    }

    if (bill.type == "cancel") {
      status = "Đơn hàng bị hủy";
    }
    if (bill.type == "success") {
      status = "Thành công";
    }
    if (bill.type == "retrieve") {
      status = "Đơn hàng trả";
    }

    return (
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/cart.png")}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.id}>Mã đơn hàng: {bill.id}</Text>
          <Text style={styles.date}>
            Ngày đặt hàng:{sqlToHHmmDDmmYYYY(bill.orderDate)}
          </Text>
          <Text style={styles.cost}>Tổng tiền: {convertToVND(bill.cost)}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.flatList}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={bills}
          renderItem={OneItem}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={<Text> bạn chưa có đơn hàng nào </Text>}
          style={styles.flatList}
          inverted
        />
      </View>
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
  details: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "black",
  },
  flatList: {
    marginBottom: 64,
  },
});

export default BillBought;
