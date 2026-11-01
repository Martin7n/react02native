import { StyleSheet, Text, View } from "react-native";

export default function Test() {
    return (
        <View style={styles.someCont}>
            <Text style={styles.someText}>React 1st comp...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    someText: {
        backgroundColor: "#c0e327",
        color: "#e32727",
        alignItems: "right",
        justifyContent: "center",
    },
    someCont: {
        flex: 2,
        backgroundColor: "#929242",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        width: 120,
        height: 140,
    },
});
