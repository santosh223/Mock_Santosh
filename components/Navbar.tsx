import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Navbar() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        
        <View style={styles.leftRow}>
          <MaterialCommunityIcons name="waveform" size={24} color="#0ea5e9" />
          <Text style={styles.brand}>HealthCast</Text>
        </View>

        <View style={styles.rightRow}>

          <Ionicons name="person-circle-outline" size={26} color="#0f172a" />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#ffffff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  brand: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.3,
    color: "#0f172a",
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
});
