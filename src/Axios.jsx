import axios from 'axios';

const result = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});
const Planurl = axios.create({
  baseURL: 'http://127.0.0.1:3001',
});
export { result, Planurl };
