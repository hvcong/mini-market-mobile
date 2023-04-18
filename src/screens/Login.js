import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Layout, Text, Input, Icon, Button } from "@ui-kitten/components";
import { Toast, validateEmail, validatePassword, validateSdt } from "../utils";
import { useGlobalContext } from "../store/contexts/GlobalContext";
import { colors, fontSize } from "../utils/constants";
import VerifyOTPModal from "../components/modal/VerifyOTPModal";
import userApi from "../api/userApi";
import { useEffect } from "react";

const Login = ({ navigation }) => {
  const [sdtOrEmail, setSdtOrEmail] = useState("0868283915");
  const [sdtEmailCaption, setSdtEmailCaption] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [verifyModal, setVerifyModal] = useState(false);
  const [result, setResult] = useState({
    isSuccess: false,
    message: "",
  });
  const { globalFunc } = useGlobalContext();

  async function onLogin() {
    // validate phone here
    setVerifyModal(true);
  }

  useEffect(() => {
    if (result.isSuccess) {
      globalFunc.login(sdtOrEmail);
      setResult({
        isSuccess: false,
      });
    }
    return () => {};
  }, [result]);

  return (
    <Layout style={styles.container}>
      <View style={styles.body}>
        <Text category="h1">Đăng nhập</Text>
        <View style={styles.enter}>
          <Text style={styles.errMessage}>{errMessage}</Text>
          <Input
            style={styles.input}
            value={sdtOrEmail}
            label="Số điện thoại"
            placeholder="Emai/ Sđt"
            caption={sdtEmailCaption}
            onChangeText={(sdtOrEmail) => setSdtOrEmail(sdtOrEmail)}
          />

          <Button size="medium" style={styles.button} onPress={onLogin}>
            Gửi OTP
          </Button>

          <Text category="s1" style={{ textAlign: "center" }}>
            Đăng nhập bằng cách khác
          </Text>
          <View style={styles.otherLogin}>
            <View style={[styles.item, { backgroundColor: "#db6f21" }]}>
              <Icon fill="#fff" name="google" style={styles.icon} />
            </View>
            <View style={[styles.item, { backgroundColor: "#1559bf" }]}>
              <Icon fill="#fff" name="facebook" style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
      <VerifyOTPModal
        visible={verifyModal}
        setVisible={setVerifyModal}
        phone={sdtOrEmail}
        setResult={setResult}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    marginTop: 44,
  },
  enter: {
    width: "80%",
    marginTop: 36,
  },
  errMessage: {
    paddingBottom: 12,
    fontSize: fontSize.S,
    color: colors.red,
  },
  input: {
    paddingBottom: 12,
  },
  icon: {
    width: 36,
    height: 36,
  },
  forgotPass: {
    marginLeft: "auto",
    marginBottom: 12,
  },
  button: {
    marginBottom: 24,
  },
  otherLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 16,
    marginHorizontal: 8,
  },
});

export default Login;
