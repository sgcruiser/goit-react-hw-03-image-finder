import axios from 'axios';

const apiKey = '20348581-4182e159a5fcf959667e3ff42';

// const instanse = axios.create();

axios.defaults.baseURL = 'https://pixabay.com/api';

axios.defaults.params = {
  key: apiKey,
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

const ApiService = async ({ searchQuery, pageNumber }) => {
  return await axios
    .get('', { params: { q: searchQuery, page: pageNumber } })
    .then(({ data }) => data);
};

export default ApiService;
