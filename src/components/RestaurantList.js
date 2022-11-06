import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantsDetail";

// navigation prop is passed in via the withNavigation function
const RestaurantList = ({ title, restaurants, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        /* FlatList is react native's alternative to map */
        horizontal // == horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantsShow", { id: item.id })}
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold"
  }
});

// withNavigation passes down the navigation prop to the component
// without having to pass it down through the parent component
// (useful when parent doesn't need the navigation prop)
export default withNavigation(RestaurantList);
