import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const IconButton = (props) => {
  const { icon, onPress, active } = props;
  return (
    <TouchableOpacity style={styles.IconButton(active)} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  IconButton: (active) => ({
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    backgroundColor: active ? "rgba(152, 223, 214,0.35)" : "#fff",
    borderRadius: 20,
  }),
});

export default IconButton;
