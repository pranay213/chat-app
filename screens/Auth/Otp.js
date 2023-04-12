import { View, Text, ImageBackground } from "react-native";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import AppInput from "../../Components/AppInput";
import UserIcon from "../../assets/svg/User";
import Button from "../../Components/Button";
import Image from "../../assets/webp/home-logo.webp";
import { Otpverify } from "../../api";
import { MainContext } from "../../Context";

const Otp = ({ route, navigation }) => {
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const { toastMsg, setToastMsg, storeData, setScreenLoading } =
    useContext(MainContext);
  let number = route.params.number;
  console.log(route);
  const onPress = async () => {
    setLoading((prev) => true);
    let pattern = /^[0-9]{6}$/;
    if (!otp) {
      setLoading((prev) => false);
      return setToastMsg({
        type: "error",
        text1: "Please Enter Your OTP",
        // text2: "Please Enter Your Number",
      });
    }
    if (!pattern.test(otp)) {
      setLoading((prev) => false);
      return setToastMsg({
        type: "error",
        text1: "Please Enter Valid OTP",
        // text2: "Please Enter Your Number",
      });
    }
    console.log("num", number, "otp", otp);
    let res = await Otpverify(parseInt(number), parseInt(otp));
    // console.log("OTP RESPONSE", res);
    if (res.status) {
      setLoading((prev) => false);
      setScreenLoading((prev) => true);
      let saveToken = await storeData(res.token);
      setScreenLoading((prev) => false);

      return setToastMsg({
        type: "success",
        text1: "You are loggedIn",
        // text2: "Please Enter Your Number",
      });
    } else {
      setLoading((prev) => false);
      navigation.navigate("Login");
      return setToastMsg({
        type: "error",
        text1: "something went wrong ",
        // text2: "Please Enter Your Number",
      });
    }
    setLoading((prev) => true);
  };
  const onChange = (e) => {
    setOtp((prev) => e);
    // console.log("number", e);
  };
  return (
    <View style={styles.Login}>
      <View style={styles.container}>
        <View style={styles.Head}>
          <Text style={styles.headMain}>{"Welcome Back"}</Text>
          <Text style={styles.Header}>{"OTP HERE"}</Text>
        </View>
        <View style={styles.Appcontainer}>
          <Text style={styles.appText}>{"Enter OTP"}</Text>
          <AppInput
            keyboardType={"number-pad"}
            maxLength={6}
            placeholder={"YOUR OTP"}
            value={otp}
            onChange={onChange}
          />
          <Button
            title="VERIFY"
            color={"#f1dfa1"}
            size={"medium"}
            onPress={onPress}
            loading={loading}
            disabled={loading}
          />
        </View>
      </View>
      <ImageBackground
        source={Image}
        style={styles.ImageBackground}
      ></ImageBackground>
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
    marginVertical: 10,
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

export default Otp;
