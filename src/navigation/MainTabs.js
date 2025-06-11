import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as colors from "../constants/colors";
import * as screens from "../constants/screens";

//screens and stacks
import RaceStack from "./RaceStack";
import MealsStack from "./MealsStack";
import MoreStack from "./MoreStack";
import PerformanceStack from "./PerformanceStack";

//icons
import MoreIcon from "../../assets/icons/more";
import PerformanceIcon from "../../assets/icons/performanceIcon";
import NutritionIcon from "../../assets/icons/nutritionIcon";
import RunIcon from "../../assets/icons/runIcon";

// Settings screen
import SettingsScreen from "../screens/config/SettingsScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
          marginTop: 8,
        },
        tabBarActiveTintColor: colors.PRIMARY_RED,
        tabBarInactiveTintColor: colors.PRIMARY_RED,
        tabBarStyle: { backgroundColor: colors.WHITE_ISH },
      }}
    >
      {/* Desempenho */}
      <Tab.Screen
        name={screens.PERFORMANCE_TAB}
        component={PerformanceStack}
        options={{
          tabBarLabel: "Performance", 
          tabBarIcon: ({ color, size }) => (
            <PerformanceIcon color={color} size={size} />
          ),
        }}
      />

      {/* Nutrição */}
      <Tab.Screen
        name={screens.NUTRITION_TAB}
        component={MealsStack}
        options={{
          tabBarLabel: "Nutrition",
          tabBarIcon: ({ color, size }) => (
            <NutritionIcon color={color} size={size} />
          ),
        }}
      />

      {/* Corridas com stack interno */}
      <Tab.Screen
        name={screens.RACE}
        component={RaceStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <RunIcon color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={screens.MORE_TAB}
        component={MoreStack}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MoreIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}