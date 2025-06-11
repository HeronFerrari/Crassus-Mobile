import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screens from "../constants/screens";
import MoreScreen from "../screens/config/MoreScreen";
import SettingsScreen from "../screens/config/SettingsScreen"; 

const Stack = createNativeStackNavigator();

export default function MoreStack() {
  console.log("Screeens:", screens);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.MORE_SCREEN} component={MoreScreen}/>
      <Stack.Screen name={screens.SETTINGS_SCREEN} component={SettingsScreen}/>
    </Stack.Navigator>
  );
}
