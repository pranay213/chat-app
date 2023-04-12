import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../../Context";
import BottomNavigator from "../../Components/BottomNavigator";
import IconButton from "../../Components/IconButton";
import Logout from "../../assets/svg/Logout";
import Sun from "../../assets/svg/Sun";
import Moon from "../../assets/svg/Moon";

const { width, height } = Dimensions.get("window");
const Home = () => {
  const { loginToken, clearAll, mode, setMode, changeMode } =
    useContext(MainContext);

  return (
    <View style={styles.HomeScreen(mode)}>
      <View style={styles.Mode}>
        <IconButton
          icon={mode === "light" ? <Sun /> : <Moon />}
          onPress={changeMode}
        />
      </View>
      <View style={styles.logout}>
        <IconButton icon={<Logout />} onPress={() => clearAll()} />
      </View>
      <BottomNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeScreen: (mode) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: mode === "light" ? "#fff" : "#000",
  }),
  Mode: {
    position: "absolute",
    // right: -width / 3,
    left: 10,
    top: 30,
  },
  logout: {
    position: "absolute",
    // right: -width / 3,
    right: 10,
    top: 30,
  },
});

export default Home;
