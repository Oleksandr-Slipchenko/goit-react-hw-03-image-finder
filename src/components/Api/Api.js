import axios from 'axios';

const API_KEY = '19136435-96f0ae3906c94a349fe1f1440';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = async ({ value, page = 1 }) => {
  try {
    const { data } = await axios.get('', {
      params: { q: value, page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const api = {
  getImages,
};

export default api;

// function getImages(value, page = 1) {
//   const ApiKey = '19996191-7ce9197af192fed24478377bf';
//   const BASE_URL = 'https://pixabay.com/api/';

//   return fetch(
//     `${BASE_URL}?q=${value}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(`There is no picture with this name: ${value}`),
//     );
//   });
// }
// const api = {
//   getImages,
// };

// export default api;
