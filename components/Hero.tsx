import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const Hero = () => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={["#e6f2ffff", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.hero, { paddingTop: insets.top + 12 }]}
    >
      <SafeAreaView edges={["left", "right"]}>
        <View style={styles.wrapper}>
          
          <Text style={styles.heading}>
            Understand medical{"\n"}conditions with
          </Text>

          <Text style={[styles.heading, styles.highlight]}>
            doctor-approved audio
          </Text>

          <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <Text style={styles.buttonText}>Browse Library</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  wrapper: {
    width: "100%",
  },

  heading: {
    fontSize: 44,
    fontWeight: "800",
    color: "#0f172a",
    lineHeight: 44,
  },

  highlight: {
    color: "#0094ff",
    marginTop: 4,
  },

  button: {
    marginTop: 22,
    backgroundColor: "#0094ff",
    paddingVertical: 14,
    borderRadius: 25,

    width: "100%",        
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
});
