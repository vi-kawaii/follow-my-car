import { NavigationContainer } from "@react-navigation/native";
import CarListScreen from "./components/CarListScreen";
import CarScreen from "./components/CarScreen";
import SettingsScreen from "./components/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Список ТС") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "ТС") {
                iconName = focused ? "car" : "car-outline";
              } else if (route.name === "Настройки") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Список ТС" component={CarListScreen} />
          <Tab.Screen name="ТС" component={CarScreen} />
          <Tab.Screen name="Настройки" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
