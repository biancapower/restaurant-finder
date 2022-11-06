import axios from "axios";
import { YELP_API_KEY } from 'react-native-dotenv';

// Create a new instance of axios with default options assigned
export default axios.create({
    // NOTE: No trailing slash
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
    }
});
