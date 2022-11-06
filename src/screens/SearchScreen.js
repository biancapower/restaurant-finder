import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 5,
        term, // == term: term
        location: "Sydney"
      }
    })

    setRestaurants(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)} // == onTermChange={setTerm}
        onTermSubmit={searchApi} // == onTermSubmit={() => searchApi()}
      />
      <Text>We have found {restaurants.length} restaurants that match your search</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
