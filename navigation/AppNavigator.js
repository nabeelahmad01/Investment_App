import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import LoginScreen from "../screens/LoginScreen"; // Import Login Screen
import SignupScreen from "../screens/SignupScreen"; // Import Signup Screen

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Login Screen */}
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                {/* Signup Screen */}
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />

                {/* Home Screen */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerTitle: "Home" }}
                />

                {/* Account Screen */}
                <Stack.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{ headerTitle: "Account Details" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
