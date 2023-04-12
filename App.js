import { StatusBar } from "expo-status-bar";
import Routes from "./Routes";
import { MainContextProvider } from "./Context";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import { Text } from "react-native";

export default function App() {
  return (
    <>
      <MainContextProvider>
        <Routes />
        <StatusBar style="auto" />
      </MainContextProvider>
    </>
  );
}
