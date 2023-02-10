import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text } from "@ui-kitten/components";

const Category = () => {
  return (
    <View style={styles.container}>
      <Text category="h4">Danh mục sản phẩm</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        <View style={styles.item}>
          <Image
            source={require("../../../assets/cate_drink.png")}
            style={styles.image}
          />
          <Text category="s1" style={styles.text}>
            Đồ uống
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../../assets/cate_drink.png")}
            style={styles.image}
          />
          <Text category="s1" style={styles.text}>
            Đồ uống
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../../assets/cate_drink.png")}
            style={styles.image}
          />
          <Text category="s1" style={styles.text}>
            Đồ uống
          </Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require("../../../assets/cate_drink.png")}
            style={styles.image}
          />
          <Text category="s1" style={styles.text}>
            Đồ uống
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
