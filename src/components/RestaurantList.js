import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        /* FlatList is react native's alternative to map */
        horizontal // == horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default RestaurantList;
