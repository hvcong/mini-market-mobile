import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Demo = () => {
  const [index, setIndex] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.div}>
          <View style={[styles.item, index >= 2 && styles.activeColor]}>
            <View
              style={[styles.circle, index >= 1 && styles.activeColor]}
            ></View>
          </View>
          <View style={[styles.item, index >= 3 && styles.activeColor]}>
            <View
              style={[styles.circle, index >= 2 && styles.activeColor]}
            ></View>
          </View>
          <View style={[styles.item, index >= 4 && styles.activeColor]}>
            <View
              style={[styles.circle, index >= 3 && styles.activeColor]}
            ></View>
          </View>
          <View
            style={[styles.circle, index >= 4 && styles.activeColor]}
          ></View>
        </View>

        <Text>index: {index}</Text>
        <Text
          style={styles.btn}
          onPress={() => {
            if (index < 4) setIndex(index + 1);
          }}
        >
          +
        </Text>
        <Text
          style={styles.btn}
          onPress={() => {
            if (index > 1) setIndex(index - 1);
          }}
        >
          -
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrap: {
    height: 200,
    width: 200,
    borderWidth: 1,
    padding: 20,
  },
  div: {
    alignItems: "center",
  },
  item: {
    height: 30,
    width: 2,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: "#666",
  },
  activeColor: {
    backgroundColor: "yellow",
  },
  btn: {
    backgroundColor: "green",
    width: 32,
    height: 32,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
});

export default Demo;
