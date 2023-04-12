import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const Button = (props) => {
  const { title, size, color, onPress, loading, disabled } = props;
  return (
    <TouchableOpacity
      style={styles.AppBtn(size, color)}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.Apptitle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  AppBtn: (size, color) => ({
    width:
      size === "large"
        ? width * 0.85
        : size === "medium"
        ? width * 0.5
        : width * 0.3,
    height: 50,
    backgroundColor: color ? color : "#c1c1c1",
    elevation: 1,
    borderRadius: 1000000,
    marginVertical: 50,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  }),
  Apptitle: {
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default Button;
