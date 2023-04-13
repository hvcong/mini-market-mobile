import React from "react";
import { View, StyleSheet, Image, FlatList, Text } from "react-native";
import { backgroundColors, colors } from "../../utils/constants";
import LabelHeading from "../common/LabelHeading";
import Product from "./Product";
import priceHeaderApi from "../../api/priceHeaderApi";
import { useEffect } from "react";
import { useState } from "react";
const Group = ({ title, type, backgroundColor, navigation }) => {
  const [listData, setListData] = useState();

  const getData = async () => {
    const dt = await priceHeaderApi.getAllOnActive();
    setListData(dt);
  };

  useEffect(() => {
    getData();
  },[]);
  
  let data = []
  if(listData){
    data = listData.headers[0].Prices
  }
  return (
    <View style={[styles.container]}>
      <View style={styles.head}>
        <LabelHeading
          title={title}
          type={type}
          backgroundColor={backgroundColor}
        />
      </View>
      <View
        style={[
          styles.body,
          backgroundColor && { backgroundColor: backgroundColor },
        ]}
      >
        {
        data.map((item, index) => (
          <View style={styles.list}>
            <Product navigation={navigation} item={item} key={index} />
          </View>
        ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
  },
  body: {
    backgroundColor: colors.white,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});

export default Group;
