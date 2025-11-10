import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Item = { key: string; label: string; bg: string; Icon: React.ReactNode };

export default function CategoryCardRow() {
  const items: Item[] = [
    {
      key: "body",
      label: "Body",
      bg: "#E7F5F1",
      Icon: <MaterialCommunityIcons name="lungs" size={32} color="#0EA5A4" />,
    },
    {
      key: "symptoms",
      label: "Symptoms",
      bg: "#FFEFEA",
      Icon: <Ionicons name="pulse" size={32} color="#F97316" />,
    },
    {
      key: "treatment",
      label: "Treatment",
      bg: "#EEE9FF",
      Icon: <Ionicons name="medkit" size={32} color="#7C3AED" />,
    },
  ];

  return (
    <View style={styles.row}>
      {items.map((it) => (
        <TouchableOpacity key={it.key} activeOpacity={0.9} style={[styles.card, { backgroundColor: it.bg }]}>
          <View style={styles.iconWrap}>{it.Icon}</View>
          <Text style={styles.label}>{it.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 14 },
  card: {
    flex: 1,
    height: 108,
    borderRadius: 18,
    padding: 14,
    justifyContent: "space-between",
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    alignSelf: "flex-start",
  },
  label: { fontSize: 14.5, fontWeight: "700", color: "#1F2937" },
});
