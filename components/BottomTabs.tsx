import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type TabKey = "Home" | "Library" | "Playlists" | "Profile";

type BottomTabsProps = {
  activeTab?: TabKey;
  onTabPress?: (tab: TabKey) => void;
};

const TABS: { key: TabKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: "Home",      label: "Home",      icon: "home" },
  { key: "Library",   label: "Library",   icon: "folder" },
  { key: "Playlists", label: "Playlists", icon: "mic" },
  { key: "Profile",   label: "Profile",   icon: "person" },
];

export default function BottomTabs({ activeTab = "Home", onTabPress }: BottomTabsProps) {
  return (
    <View style={styles.wrap}>
      {TABS.map(t => {
        const active = t.key === activeTab;
        return (
          <TouchableOpacity key={t.key} style={styles.tab} onPress={() => onTabPress?.(t.key)} activeOpacity={0.8}>
            <Ionicons name={t.icon} size={24} style={{ opacity: active ? 1 : 0.35 }} />
            <Text style={[styles.label, { opacity: active ? 1 : 0.4 }]}>{t.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 16, right: 16, bottom: 18,
    height: 72, backgroundColor: "#fff", borderRadius: 24,
    flexDirection: "row", alignItems: "center", justifyContent: "space-around",
    shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 5,
    paddingHorizontal: 8,
  },
  tab: { alignItems: "center", justifyContent: "center", gap: 4 },
  label: { fontSize: 13, fontWeight: "600" },
});
