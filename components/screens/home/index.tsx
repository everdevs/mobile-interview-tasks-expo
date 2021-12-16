import React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={require("../../../assets/logo.png")} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: 56,
		width: 222,
	},
	text: {
		color: "#fff",
	},
});
