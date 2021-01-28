function fetchApi(value) {
  const ApiKey = '19996191-7ce9197af192fed24478377bf';

  return fetch(
    `https://pixabay.com/api/?q=${value}&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
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
