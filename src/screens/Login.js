import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Layout, Text, Input, Icon, Button } from "@ui-kitten/components";
import { validateEmail, validatePassword, validateSdt } from "../utils";
import { useGlobalContext } from "../store/contexts/GlobalContext";
import { colors, fontSize } from "../utils/constants";

const Login = ({ navigation }) => {
  const [sdtOrEmail, setSdtOrEmail] = useState("0868283915");
  const [password, setPassword] = useState("1111111");
  const [sdtEmailCaption, setSdtEmailCaption] = useState("");
  const [pwdCaption, setPwdCaption] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { globalFunc, isLogin, setLoadingModalState } = useGlobalContext();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderEyeIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Icon
        {...props}
        name={secureTextEntry ? "eye-off" : "eye"}
        style={{ width: 24, height: 24 }}
        fill={colors.gray2}
      />
    </TouchableWithoutFeedback>
  );

  async function onLogin() {
    let isPhone = false;
    let isEmail = false;
    if (validateEmail(sdtOrEmail)) {
      isEmail = true;
    }

    if (validateSdt(sdtOrEmail)) {
      isPhone = true;
    }

    if (!validatePassword(password)) {
      setPwdCaption("Mật khẩu phải nhiều hơn 6 kí tự");
      return false;
    }

    if (isPhone) {
      setLoadingModalState({
        visible: true,
        label: "Đang đăng nhập...",
      });
      const result = await globalFunc.login(sdtOrEmail, password);
      setLoadingModalState({
        visible: false,
      });
      // login faild
      if (!result.isSuccess) {
        setErrMessage(result.message);
        return;
      }

      // login oke
      navigation.navigate("Tab");
    }
  }

  return (
    <Layout style={styles.container}>
      <View style={styles.body}>
        <Text category="h1">Đăng nhập</Text>
        <View style={styles.enter}>
          <Text style={styles.errMessage}>{errMessage}</Text>
          <Input
            style={styles.input}
            value={sdtOrEmail}
            label="Email / Số điện thoại"
            placeholder="Emai/ Sđt"
            caption={sdtEmailCaption}
            onChangeText={(sdtOrEmail) => setSdtOrEmail(sdtOrEmail)}
          />
          <Input
            style={styles.input}
            value={password}
            label="Mật khẩu"
            placeholder="mật khẩu"
            caption={pwdCaption}
            secureTextEntry={secureTextEntry}
            onChangeText={(password) => setPassword(password)}
            accessoryRight={renderEyeIcon}
          />
          <Text category="p1" style={styles.forgotPass}>
            Quên mật khẩu ?
          </Text>
          <Button size="medium" style={styles.button} onPress={onLogin}>
            Đăng nhập
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
