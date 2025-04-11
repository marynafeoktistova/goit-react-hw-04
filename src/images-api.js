import axios from 'axios';

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `IJTkLE_-rfnTuOiAQU5IqXu5ZIKpD5cn88_fnA-K3Bg`;

export const getImagesUnplash = async (searchImg, pageNumber) => {
  const params = {
    query: searchImg,
    page: pageNumber,
    per_page: 10,
    client_id: ACCESS_KEY,
  };
  try {
    const respons = await axios.get(`search/photos/?${new URLSearchParams(params).toString()}`);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
