import axios from 'axios';

const KEY = '42508369-6cc99fb978405cb8598a23b23';
const BASE_URL = 'https://pixabay.com/api/';

const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

export async function getImages(searchText) {
  const QUERY = encodeURIComponent(searchText);
  const requestURL = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

  try {
    const response = await axios.get(requestURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Error while fetching images from Pixabay');
  }
}