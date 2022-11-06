import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      {/***************************************************************
          <></> is a shorthand for <React.Fragment></React.Fragment>
          acts as an alternative to <View style={{flex: 1}}></View>
          ensures that the content fills the entire screen
          and no content is hidden off the screen
      *****************************************************************/}
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
      <ScrollView>
        <RestaurantList title="Super Cheap" restaurants={filterRestaurantsByPrice("$")} />
        <RestaurantList title="Kinda Cheap" restaurants={filterRestaurantsByPrice("$$")} />
        <RestaurantList title="Bit Pricey" restaurants={filterRestaurantsByPrice("$$$")} />
        <RestaurantList title="Pricey As" restaurants={filterRestaurantsByPrice("$$$$")} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
