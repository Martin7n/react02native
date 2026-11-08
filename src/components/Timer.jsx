import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [tmr, setTmr] = useState([]);

    useFocusEffect(
        useCallback(() => {
            if (!isRunning) return;

            const timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);

            return () => clearInterval(timer);
        }, [isRunning]),
    );

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const recordInterval = () => {
        setTmr((prev) => [...prev, seconds]);
        startStopTimer();
    };

    const resetTimer = () => {
        setSeconds(0);
        setTmr([]);
        setIsRunning(false);
    };

    const startStopTimer = () => {
        setIsRunning((prev) => !prev);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>FOCUS SESSION</Text>

                <View
                    style={[
                        styles.statusBadge,
                        { backgroundColor: isRunning ? "#173D32" : "#34343D" },
                    ]}
                >
                    <Text
                        style={[
                            styles.statusText,
                            { color: isRunning ? "#4ADE80" : "#A1A1AA" },
                        ]}
                    >
                        {isRunning ? "● LIVE" : "● PAUSED"}
                    </Text>
                </View>
            </View>

            <View style={styles.timerCard}>
                <Text style={styles.subtitle}>TIME ELAPSED</Text>

                <Text style={styles.timerText}>{formatTime(seconds)}</Text>

                <Text style={styles.sessionText}>
                    {isRunning ? "SESSION IN PROGRESS" : "SESSION PAUSED"}
                </Text>
            </View>

            <View style={styles.buttonRow}>
                <Pressable
                    onPress={startStopTimer}
                    style={({ pressed }) => [
                        styles.button,
                        styles.pauseButton,
                        { opacity: pressed ? 0.75 : 1 },
                    ]}
                >
                    <MaterialDesignIcons
                        name={isRunning ? "pause" : "play"}
                        size={22}
                        color="#18181B"
                    />

                    <Text style={styles.pauseButtonText}>
                        {!isRunning
                            ? seconds === 0
                                ? "Start"
                                : "Resume"
                            : "Pause"}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={recordInterval}
                    style={({ pressed }) => [
                        styles.button,
                        styles.intervalButton,
                        { opacity: pressed ? 0.75 : 1 },
                    ]}
                >
                    <MaterialDesignIcons
                        name="flag-outline"
                        size={22}
                        color="#FFFFFF"
                    />

                    <Text style={styles.intervalButtonText}>Set interval</Text>
                </Pressable>
            </View>

            {/* INTERVAL HISTORY */}
            <View style={styles.historyCard}>
                <View style={styles.historyHeader}>
                    <Text style={styles.historyTitle}>Recorded intervals</Text>

                    <Text style={styles.recordCount}>
                        {String(tmr.length).padStart(2, "0")} RECORDS
                    </Text>
                </View>

                {tmr.length === 0 ? (
                    <Text style={styles.emptyText}>
                        No intervals recorded yet
                    </Text>
                ) : (
                    tmr.map((time, index) => (
                        <View key={index}>
                            {index > 0 && <View style={styles.divider} />}

                            <View style={styles.intervalRow}>
                                <View style={styles.intervalLabel}>
                                    <Text style={styles.intervalNumber}>
                                        {String(index + 1).padStart(2, "0")}
                                    </Text>

                                    <Text style={styles.intervalName}>
                                        Interval {index + 1}
                                    </Text>
                                </View>

                                <Text style={styles.intervalTime}>
                                    {formatTime(time)}
                                </Text>
                            </View>
                        </View>
                    ))
                )}
            </View>

            <Pressable
                onPress={resetTimer}
                style={({ pressed }) => [
                    styles.resetButton,
                    { opacity: pressed ? 0.65 : 1 },
                ]}
            >
                <MaterialDesignIcons name="refresh" size={20} color="#F87171" />

                <Text style={styles.resetText}>Reset session</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101014",
    },

    content: {
        flexGrow: 1,
        padding: 24,
        paddingTop: 30,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    headerTitle: {
        color: "#A1A1AA",
        fontSize: 12,
        fontWeight: "800",
        letterSpacing: 2,
    },

    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 20,
    },

    statusText: {
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1,
    },

    timerCard: {
        backgroundColor: "#1C1C24",
        borderRadius: 24,
        padding: 30,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#34343D",
        marginBottom: 20,
    },

    subtitle: {
        color: "#A1A1AA",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 2,
        marginBottom: 12,
    },

    timerText: {
        color: "#FFFFFF",
        fontSize: 56,
        fontWeight: "800",
        letterSpacing: 2,
    },

    sessionText: {
        color: "#A78BFA",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginTop: 12,
    },

    buttonRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 24,
    },

    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 17,
        borderRadius: 16,
        gap: 8,
    },

    pauseButton: {
        backgroundColor: "#F4F4F5",
    },

    pauseButtonText: {
        color: "#18181B",
        fontWeight: "800",
        fontSize: 14,
    },

    intervalButton: {
        backgroundColor: "#282832",
        borderWidth: 1,
        borderColor: "#8B5CF6",
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },

    intervalButtonText: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 14,
    },

    historyCard: {
        backgroundColor: "#1C1C24",
        borderRadius: 22,
        padding: 20,
        borderWidth: 1,
        borderColor: "#34343D",
    },

    historyHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18,
    },

    historyTitle: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 15,
    },

    recordCount: {
        color: "#A78BFA",
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1,
    },

    emptyText: {
        color: "#71717A",
        fontSize: 13,
        textAlign: "center",
        paddingVertical: 18,
    },

    intervalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
    },

    intervalLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    intervalNumber: {
        color: "#A78BFA",
        fontSize: 12,
        fontWeight: "800",
    },

    intervalName: {
        color: "#A1A1AA",
        fontSize: 13,
    },

    intervalTime: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "800",
        fontVariant: ["tabular-nums"],
    },

    divider: {
        height: 1,
        backgroundColor: "#34343D",
    },

    resetButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: 17,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#454552",
        marginTop: 20,
        marginBottom: 20,
    },

    resetText: {
        color: "#F87171",
        fontSize: 14,
        fontWeight: "700",
    },
});
