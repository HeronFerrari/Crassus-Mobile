import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PerformanceScreen from "../screens/performance";
import * as screens from "../constants/screens";
import MoreScreen from "../screens/config/MoreScreen";

const Stack = createNativeStackNavigator();

export default function PerformanceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.PERFORMANCE_SCREEN} component={PerformanceScreen}/>
    </Stack.Navigator>
  );
}
