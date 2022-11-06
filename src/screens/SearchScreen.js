import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 5,
          term: searchTerm,
          location: "Sydney"
        }
      })

      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Sorry, something went wrong");
      setRestaurants([]);
    }
  };

  // Call searchApi when component is first rendered
  // The second argument is an array of dependencies
  // If the array is empty, the callback will only be called once
  useEffect(() => {
    searchApi("keto");
  }, []);


  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)} // == onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ?
        <Text>{errorMessage}</Text>
      :
        null
      }
      <Text>We have found {restaurants.length} restaurants that match your search</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
