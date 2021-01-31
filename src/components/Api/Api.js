function fetchApi(value, page = 1) {
  const ApiKey = '19996191-7ce9197af192fed24478377bf';
  const BASE_URL = 'https://pixabay.com/api/';

  return fetch(
    `${BASE_URL}?q=${value}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`There is no picture with this name: ${value}`),
    );
  });
}
const api = {
  fetchApi,
};

export default api;
