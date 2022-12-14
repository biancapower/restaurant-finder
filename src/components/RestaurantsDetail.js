import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  // image has no default width or height
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default RestaurantDetail;
