import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
// import { Text } from "@ui-kitten/components";

const Category = () => {
  const data = [
    {
      name: "nước uống",
      image: require('../../../assets/cate_drink.png'),
    },
    {
      name: "thuc pham",
      image: require('../../../assets/cate_drink.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Text category="h4">Danh mục sản phẩm</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        {data.map((item, index) => (
          <Pressable key={index} onPress={() => {}}>
            <View style = {styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style = {styles.text}> {item.name}</Text>       
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#82b478",
    borderRadius: 12,
    width: 90,
    height: 90,
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    color: "#fff",
    paddingTop: 4,
  },
});

export default Category;
