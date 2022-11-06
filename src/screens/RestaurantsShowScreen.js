import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);

  return (
    <View>
      <Text>Results Show Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
