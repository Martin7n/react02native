import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function MovieList({ movie }) {




    return (
        <View style={styles.someCont}>
            <Text style={styles.someText}> {movie?.title}</Text>

            <View>
                <Text style={styles.someText}> {movie?.genre}</Text>
            </View>
            <View>
                <Button
                    style={{ width: 300, height: 50 }}
                    title="Press me"
                    onPress={() => alert(`oi:${movie?.genre}`)}
                />
            </View>

            <View>
                <Image
                    source={{
                        uri: movie.posterUrl,
                    }}
                    style={{ width: 400, height: 400 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    someText: {
        backgroundColor: "#71716d",
        color: "#f1eaea",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        margin: 10,
    },
    someCont: {
        flex: 2,
        backgroundColor: "#e1e1d9",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        width: 600,
        height: 100,
    },
});
