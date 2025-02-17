import axios from 'axios';

const API_URL = "http://localhost:1337/api"; // Strapi backend URL

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs?populate=*`); // Adjust based on your Strapi collection
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};
