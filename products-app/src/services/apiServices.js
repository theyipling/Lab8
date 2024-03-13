import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

//Fetches a list of all products
export const fetchProducts = async () => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error){
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async () => {
    // implement it using similar logic as fetchProducts
}