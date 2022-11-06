import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, Linking } from "react-native";
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

  const onPress = () => {
    URL = restaurant.url;
    Linking.openURL(URL);
  };

  return (
    <View style={styles.container}>
      <Text>{errorMessage ? errorMessage : null}</Text>
      {restaurant ? (
        <>
          <Text style={styles.title}>{restaurant.name}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>View on Yelp</Text>
          </TouchableOpacity>
          <FlatList
            style={styles.imagesContainer}
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
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    marginVertical: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
  }
});

export default RestaurantShowScreen;
