import React, { useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Chips from "../components/Chips";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";
import PlaylistItem from "@/components/PlaylistItem";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs, { TabKey } from "@/components/BottomTabs";
import LibraryScreen from "@/components/LibraryScreen";

export default function Index() {
  const [activeTab, setActiveTab] = useState<TabKey>("Home");

  return (
    <SafeAreaView style={styles.safe}>
      <Navbar />

      {activeTab === "Home" && (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140, paddingHorizontal: 18 }}
        >
          <Hero />
          <SearchBar />
          <View style={{ height: 12 }} />
          <Chips />

          <View style={{ height: 24 }} />
          <Text style={styles.sectionTitle}>Browse by category</Text>
          <View style={{ height: 12 }} />
          <CategoryCard />

          <View style={{ height: 24 }} />
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Doctor-curated playlists</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={{ height: 12 }} />
          <PlaylistItem
            title="Chronic Pain"
            episodes={8}
            tint="#E3E8FF"
            icon={<Ionicons name="bandage" size={22} color="#4F46E5" />}
          />
          <PlaylistItem
            title="Mindfulness for Sleep"
            episodes={8}
            tint="#F3E8FF"
            icon={<Ionicons name="moon" size={22} color="#9333EA" />}
          />
          <PlaylistItem
            title="Health Heart Basics"
            episodes={12}
            tint="#FFE2E2"
            icon={<Ionicons name="heart" size={22} color="#EF4444" />}
          />
        </ScrollView>
      )}

      {activeTab === "Library" && <LibraryScreen />}

      <BottomTabs activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { flex: 1 },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#0F172A" },
  seeAll: { fontSize: 14, color: "#64748B", fontWeight: "700" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});
