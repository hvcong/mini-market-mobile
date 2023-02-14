import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Radio = ({ label, setSelected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.innerCircle}></View>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Radio;
