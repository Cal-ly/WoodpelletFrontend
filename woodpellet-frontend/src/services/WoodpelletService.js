import axios from 'axios';

const API_URL = 'https://woodpelletapi2025.azurewebsites.net/woodpellet';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  add(woodpellet) {
    return axios.post(API_URL, woodpellet);
  },
  update(id, woodpellet) {
    return axios.put(`${API_URL}/${id}`, woodpellet);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
