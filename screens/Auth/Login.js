import { View, Text, ImageBackground, Alert, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppInput from "../../Components/AppInput";
import UserIcon from "../../assets/svg/User";
import Button from "../../Components/Button";
import Image from "../../assets/webp/home-logo.webp";
import { sendOTP } from "../../api";
import { MainContext } from "../../Context";

const Login = ({ navigation }) => {
  const [number, setNumber] = useState();
  const [loading, setLoading] = useState(false);
  const { toastMsg, setToastMsg } = useContext(MainContext);

  const onChange = (e) => {
    // console.log(e);
    setNumber((prev) => e);
  };

  const onPress = async () => {
    setLoading((prev) => true);

    let pattern = /^[6-9]\d{9}$/;
    if (!number) {
      setLoading((prev) => false);
      return setToastMsg({
        type: "error",
        text1: "Please Enter Your Number",
        // text2: "Please Enter Your Number",
      });
    }
    if (!pattern.test(number)) {
      setLoading((prev) => false);
      return setToastMsg({
        type: "error",
        text1: "Please Enter Valid Number",
        // text2: "Please Enter Your Number",
      });
    }
    let res = await sendOTP(number);
    console.log(res);
    if (res.status) {
      setLoading((prev) => false);
      navigation.navigate("Otp", { number });
      return setToastMsg({
        type: "success",
        text1: "OTP SENT ",
        // text2: "Please Enter Your Number",
      });
    } else {
      setToastMsg({
        type: "error",
        text1: "SOMETHING WENT WRONG ",
        text2: "Please Try again after sometime",
      });
    }
    setLoading((prev) => false);
  };
  return (
    <View style={styles.Login}>
      <ImageBackground
        source={Image}
        style={styles.ImageBackground}
      ></ImageBackground>

      <View style={styles.container}>
        <View style={styles.Head}>
          <Text style={styles.headMain}>{"Welcome Back"}</Text>
          <Text style={styles.Header}>{"Login Here"}</Text>
        </View>
        <View style={styles.Appcontainer}>
          <Text style={styles.appText}>{"Enter your Phone to continue"}</Text>
          <AppInput
            icon={<UserIcon />}
            keyboardType={"number-pad"}
            maxLength={10}
            value={number}
            onChange={onChange}
            placeholder={"Your Number"}
          />
          <Button
            title="login"
            color={"#f1dfa1"}
            size={"medium"}
            onPress={onPress}
            loading={loading}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    alignItems: "center",
    zIndex: 1,
    width: "100%",

    // justifyContent: "center",
  },
  Head: {
    margin: 100,
  },
  headMain: {
    color: "#1F5460",
    fontWeight: "500",
  },
  appText: {
    color: "#879EA4",
    marginVertical: 15,
    fontWeight: "500",
    fontSize: 15,
  },
  Header: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#001100",
    elevation: 1,
  },
  Appcontainer: {
    marginVertical: 50,
  },
  container: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Login;
