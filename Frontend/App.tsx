import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./screens/login";
import signin from "./screens/signin";
import home from "./screens/home";
export type stackScreens = {
  login: undefined;
  signin: undefined;
  home:undefined;
};

const stack = createNativeStackNavigator<stackScreens>();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="signin"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="login" component={login} />
        <stack.Screen name="signin" component={signin} />
        <stack.Screen name="home" component={home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
