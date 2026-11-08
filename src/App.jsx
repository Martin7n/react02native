import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import data from "../testdata.json";
import MovieList from "./components/movieList";
import FirstScreen from "./screens/firstScreen";

export default function App() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#171716" />

            <FirstScreen />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    scrV: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
    },
});
