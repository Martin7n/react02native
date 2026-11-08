import { ScrollView, StyleSheet, Text, View } from "react-native";
import data from "../../testdata.json";
import MovieList from "../components/movieList";

export default function FirstScreen() {
    const movies = data.movies;

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            <ScrollView>
                {movies.map((mov) => (
                    <MovieList key={mov.id} movie={mov} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
