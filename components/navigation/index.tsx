import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { VFC } from "react";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator<any>();
const Tab = createBottomTabNavigator();

export const RootNavigation: VFC = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Root"
						component={BottomTabs}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="dark" />
		</>
	);
};

const BottomTabs: VFC = () => {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Home" component={HomeScreen} />
		</Tab.Navigator>
	);
};
