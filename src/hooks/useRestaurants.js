import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
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
    searchApi("pizza");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
