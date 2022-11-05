import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 30,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
