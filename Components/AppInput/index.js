import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import UserIcon from "../../assets/svg/User";

const { width, height } = Dimensions.get("window");

const AppInput = (props) => {
  const { value, icon, placeholder, keyboardType, maxLength, onChange } = props;
  return (
    <View style={styles.AppInput}>
      <View style={{ flex: 1 }}>{icon && icon}</View>

      <TextInput
        style={{
          flex: 4,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          // textAlign: "center",
        }}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  AppInput: {
    width: width * 0.75,
    height: 50,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "#96A7AF",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
export default AppInput;
