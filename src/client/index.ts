import axios from 'axios';

const client = axios.create({
  baseURL: 'https://apibaseurl',
});

export default client;