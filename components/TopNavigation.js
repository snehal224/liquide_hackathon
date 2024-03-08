import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inshorts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007FFF",
  },
});

export default TopNavigation;
