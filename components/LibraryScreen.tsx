import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";
import Chips from "@/components/Chips";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

function LibraryCard({
  title, episodes, updated, tint, icon, bullets,
}: {
  title: string; episodes: number; updated: string; tint: string;
  icon: React.ReactNode; bullets: string[];
}) {
  return (
    <View style={styles.card}>
      <View style={[styles.cardIconWrap, { backgroundColor: tint }]}>{icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View style={styles.metaRow}>
          <Ionicons name="albums" size={16} />
          <Text style={styles.metaText}>{episodes} Episodes</Text>
          <Ionicons name="time" size={16} style={{ marginLeft: 12 }} />
          <Text style={styles.metaText}>Updated {updated}</Text>
        </View>

        {bullets.slice(0, 2).map((b, i) => (
          <View key={i} style={styles.bulletRow}>
            <Ionicons name="ellipse" size={7} />
            <Text style={styles.bulletText}>{b}</Text>
          </View>
        ))}

        <Text style={styles.moreText}>+ 10 more</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} style={{ opacity: 0.4 }} />
    </View>
  );
}

export default function LibraryScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 160, paddingHorizontal: 18 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>Doctor’s approved audio episodes</Text>

      <SearchBar />
      <View style={{ height: 12 }} />
      <Chips />

      <View style={{ height: 18 }} />

      <LibraryCard
        title="Body Systems"
        episodes={12}
        updated="3 Jun"
        tint="#E7F5F1"
        icon={<MaterialCommunityIcons name="lungs" size={28} color="#0EA5A4" />}
        bullets={["How your heart works", "Breathing and the lungs"]}
      />

      <LibraryCard
        title="Medical Conditions"
        episodes={27}
        updated="1 Jun"
        tint="#FFF3E6"
        icon={<Ionicons name="medkit" size={26} color="#F97316" />}
        bullets={["Managing high blood pressure", "Understanding depression"]}
      />

      <LibraryCard
        title="Diagnostics"
        episodes={12}
        updated="29 May"
        tint="#EEE9FF"
        icon={<Ionicons name="checkmark-done" size={26} color="#7C3AED" />}
        bullets={["Understanding your ECG report", "What an MRI can tell you"]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 30, fontWeight: "900", color: "#0F172A", marginTop: 6 },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 14, fontWeight: "600" },

  card: {
    flexDirection: "row", alignItems: "center", gap: 14,
    padding: 18, borderRadius: 18, backgroundColor: "#fff",
    shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 3,
    marginBottom: 14,
  },
  cardIconWrap: { width: 64, height: 64, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 18, fontWeight: "800", color: "#0F172A" },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 6 },
  metaText: { fontSize: 12, color: "#6B7280", fontWeight: "600" },
  bulletRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 8 },
  bulletText: { fontSize: 15, color: "#111827", fontWeight: "600" },
  moreText: { fontSize: 13, color: "#64748B", marginTop: 8, fontWeight: "700" },
});
