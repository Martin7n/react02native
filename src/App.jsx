import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ThirdScreen from "./screens/ThirdScreen";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import FirstScreen from "./screens/firstScreen";
import SecondScreen from "./screens/secondScreen";

export default function App() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar style="light" backgroundColor="#f5f3f3" />
                <SafeAreaView
                    style={styles.container}
                    edges={["top", "left", "right"]}
                >
                    <Tab.Navigator
                        screenOptions={{
                            swipeEnabled: true,
                            tabBarPosition: "top",
                            tabBarShowIcon: true,
                            tabBarShowLabel: true,
                            tabBarIndicatorStyle: {
                                backgroundColor: "#5fe42bd0",
                            },
                        }}
                    >
                        <Tab.Screen
                            name="FirstScreen"
                            component={FirstScreen}
                            options={{
                                tabBarIcon: () => (
                                    <MaterialDesignIcons
                                        name="weight-lifter"
                                        size={20}
                                        color="black"
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="SecondScreen"
                            component={SecondScreen}
                            options={{
                                tabBarIcon: () => (
                                    <MaterialDesignIcons
                                        name="calendar-check"
                                        size={20}
                                        color="black"
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="ThirdScreen"
                            component={ThirdScreen}
                            options={{
                                tabBarIcon: () => (
                                    <MaterialDesignIcons
                                        name="wrench"
                                        size={20}
                                        color="black"
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Login"
                            component={Login}
                            options={{
                                tabBarIcon: () => (
                                    <MaterialDesignIcons
                                        name="login"
                                        size={20}
                                        color="black"
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Logout"
                            component={LogOut}
                            options={{
                                tabBarIcon: () => (
                                    <MaterialDesignIcons
                                        name="logout"
                                        size={20}
                                        color="black"
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </SafeAreaView>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171716",
    },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     scrV: {
//         flex: 1,
//         width: "100%",
//         backgroundColor: "#fff",
//     },
// });
