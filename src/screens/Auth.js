import { Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "./Login";
import Register from "./Register";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>{isLogin ? <Login /> : <Register />}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Auth;
