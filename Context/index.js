import Toast from "react-native-toast-message";
import { createContext, useEffect, useState } from "react";
import { getData } from "../Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [toastMsg, setToastMsg] = useState(null);
  const [loginToken, setLoginToken] = useState(null);
  const [screenLoading, setScreenLoading] = useState(false);
  const [mode, setMode] = useState("light");
  const [setup, setSetup] = useState(true);

  useEffect(() => {
    getData();
    getSetup();
  }, []);

  const storeData = async (token) => {
    try {
      setScreenLoading((prev) => true);
      if (token) {
        let res = await AsyncStorage.setItem("chat-api-token", token);
        setLoginToken({ "chat-api-token": token });
        setScreenLoading((prev) => true);
        return true;
      }
      setScreenLoading((prev) => true);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  //initial screen setup

  const storeSetup = async () => {
    try {
      setScreenLoading((prev) => true);
      let res = await AsyncStorage.setItem("setup", false);
      setSetup((prev) => false);
      setScreenLoading((prev) => false);
      return true;
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getSetup = async () => {
    try {
      setScreenLoading((prev) => true);
      let value = await AsyncStorage.getItem("setup");
      if (value === null) {
        setSetup((prev) => true);
      } else setSetup((prev) => false);

      setScreenLoading((prev) => false);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      setScreenLoading((prev) => true);
      let value = await AsyncStorage.getItem("chat-api-token");
      console.log(value);
      if (value !== null) {
        setLoginToken({ "chat-api-token": value });
      } else null;

      setScreenLoading((prev) => false);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      setScreenLoading((prev) => true);
      await AsyncStorage.clear();
      setLoginToken((prev) => null);
      setScreenLoading((prev) => false);
      setToastMsg((prev) => ({ type: "error", text1: "You are logouted" }));
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  const changeMode = () => {
    if (mode === "light") return setMode((prev) => "dark");
    else return setMode((prev) => "light");
  };

  return (
    <MainContext.Provider
      value={{
        toastMsg,
        setToastMsg,
        loginToken,
        setLoginToken,
        storeData,
        getData,
        clearAll,
        screenLoading,
        setScreenLoading,
        changeMode,
        mode,
        setMode,
        setup,
        setSetup,
        storeSetup,
      }}
    >
      <Toast />
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
