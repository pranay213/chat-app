import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Auth/Login";
import Otp from "./screens/Auth/Otp";
import Toast from "react-native-toast-message";
import { useContext, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { MainContext } from "./Context";
import Home from "./screens/Home/Home";
import { ActivityIndicator } from "react-native";
import Setup from "./screens/Setup";

const Stack = createStackNavigator();

function MyStack({ navigation }) {
  const { loginToken, setLoginToken, screenLoading } = useContext(MainContext);

  if (screenLoading)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={"#00ff00"} />
      </View>
    );

  return loginToken ? <AppStack /> : <AuthStack />;
}

export default function Routes() {
  const { toastMsg, setToastMsg } = useContext(MainContext);
  const showToast = () => {
    if (toastMsg) {
      Toast.show(toastMsg);
    }
  };
  useEffect(() => {
    showToast();
  }, [toastMsg]);
  return (
    <NavigationContainer>
      <View
        style={{
          position: "absolute",
          top: 0,
          zIndex: 100,
          alignSelf: "center",
        }}
      >
        <Toast />
      </View>
      <MyStack />
    </NavigationContainer>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setup"
        component={Setup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
