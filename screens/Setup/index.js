import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Button from "../../Components/Button";
import AppInput from "../../Components/AppInput";
import UserIcon from "../../assets/svg/User";
import { TouchableOpacity } from "react-native-gesture-handler";
import Image from "../../assets/svg/Image";

const { width, height } = Dimensions.get("window");

const Setup = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({ name: "", dob: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e, data) => {
    console.log("----e", e, data);
    if (data === "name") return setUser((prev) => ({ ...prev, name: e }));
    if (data === "dob") return setUser((prev) => ({ ...prev, dob: e }));
  };

  const nextFn = () => {
    if (step < 3) {
      return setStep((prev) => prev + 1);
    }
    return step;
  };
  return (
    <View style={styles.Setup}>
      {step === 1 && (
        <View>
          <AppInput
            icon={<UserIcon />}
            //   keyboardType={"number-pad"}

            value={user.name}
            onChange={(e) => onChange(e, "name")}
            placeholder={"Your Name"}
          />
        </View>
      )}
      {step === 2 && (
        <View>
          <AppInput
            icon={<UserIcon />}
            keyboardType={"numeric"}
            value={user?.dob}
            onChange={(e) => onChange(e, "dob")}
            placeholder={"Your DOB"}
          />
        </View>
      )}
      {step === 3 && (
        <View>
          <TouchableOpacity style={styles.ImageContainer}>
            <Image />
            <Text style={styles.UploadText}>{"Upload"}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.Btn}>
        <Button
          title={step === 3 ? "SAVE" : "NEXT"}
          color={"#c3f2c1"}
          size={"large"}
          onPress={nextFn}
          loading={loading}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Setup: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  Btn: {
    position: "relative",
    // bottom: -height / 1.7,
  },
  ImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 1,
    backgroundColor: "#c1c0c0",
    alignItems: "center",
    justifyContent: "center",
  },
  UploadText: {
    color: "#fff",
    fontSize: 25,
  },
});

export default Setup;
