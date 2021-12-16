import { StatusBar } from "expo-status-bar";
import React, { VFC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "./components/navigation";

const App: VFC = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="light" />
		</SafeAreaProvider>
	);
};

export default App;
