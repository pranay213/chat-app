import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MessageIcon from "../../assets/svg/MessageIcon";
import IconButton from "../IconButton";
import SettingIcon from "../../assets/svg/SettingsIcon";
import UserIcon from "../../assets/svg/User";

const BottomNavigator = () => {
  const [activeIcon, setActiveIcon] = useState("chat");
  const changeNav = (navName) => {
    setActiveIcon((prev) => navName);
  };
  return (
    <View style={styles.BottomNavigator}>
      <View style={styles.Navigator}>
        <IconButton
          icon={<MessageIcon />}
          active={activeIcon === "chat"}
          onPress={() => changeNav("chat")}
        />
        <IconButton
          icon={<UserIcon />}
          active={activeIcon === "user"}
          onPress={() => changeNav("user")}
        />
        <IconButton
          icon={<SettingIcon />}
          active={activeIcon === "settings"}
          onPress={() => changeNav("settings")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  BottomNavigator: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  Navigator: {
    width: "100%",
    height: 80,
    elevation: 5,
    flexDirection: "row",
    // borderWidth: 0.1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
});
export default BottomNavigator;
