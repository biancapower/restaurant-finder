import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>
        <Feather name="search" size={24} color="black" />
        SearchBar
      </Text>
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
