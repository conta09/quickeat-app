import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#ff6347",
        tabBarInactiveTintColor: "#999",

        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",
          bottom: 35,              // 👈 lifts tab bar
          left: 20,
          right: 20,
          height: 80,
          marginLeft:5,
          marginRight:5,

          backgroundColor: "#fff",
          borderRadius: 50,        // 👈 pill / search-bar look
          borderTopWidth: 0,

          paddingHorizontal: 10,
          paddingBottom: 8,
          paddingTop: 6,

          elevation: 8,            // Android shadow
          shadowColor: "#000",     // iOS shadow
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,            // 👈 lifts label slightly
        },

        tabBarIconStyle: {
          marginTop: 2,            // 👈 lifts icon
        },

        tabBarItemStyle: {
          borderRadius: 20,
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "index":
              iconName = focused ? "home" : "home-outline";
              break;
            case "cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "orders":
              iconName = focused ? "receipt" : "receipt-outline";
              break;
            default:
              iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 24 : 22}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="cart" options={{ tabBarLabel: "Cart" }} />
      <Tabs.Screen name="orders" options={{ tabBarLabel: "Orders" }} />
      <Tabs.Screen name="settings" options={{ tabBarLabel: "Settings" }} />
    </Tabs>
  );
}
