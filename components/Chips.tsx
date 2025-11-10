import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Chips() {
  const data = [
    { label: "Asthma", color: "#22c55e" },       
    { label: "Chest pain", color: "#f97316" },   
    { label: "Heart diseases", color: "#ef4444" }
  ];

  return (
    <View style={styles.row}>
      {data.map((item) => (
        <View key={item.label} style={styles.chip}>
          <View style={[styles.dot, { backgroundColor: item.color }]} />
          <Text style={styles.chipText}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
    marginHorizontal: 16,
    flexWrap: "wrap",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eef6ff",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
  },
  chipText: {
    color: "#0f172a",
    fontWeight: "600",
    fontSize: 14,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});
