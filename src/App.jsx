import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import data from "../testdata.json";
import MovieList from "./components/movieList";

export default function App() {
    const movies = data.movies;

    return (
        <>
            <StatusBar style="light" backgroundColor="#171716" />
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>

                <ScrollView>
                    {movies.map((mov) => (
                        <MovieList key={mov.id} movie={mov} />
                    ))}
                </ScrollView>

                <StatusBar style="auto" />
            </View>
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
