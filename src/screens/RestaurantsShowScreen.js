import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurant, setRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  return (
    <View>
      <Text>{errorMessage ? errorMessage : null}</Text>
      {restaurant ? (
        <>
          <Text>
            {restaurant.name}
          </Text>
          <FlatList
            data={restaurant.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </>
      )
      :
      <Text>Loading...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantShowScreen;
