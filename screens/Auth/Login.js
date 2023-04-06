import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.Login}>
      <View style={styles.Head}>
        <Text style={styles.Header}>{"Welcome Back"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
