import axios from 'axios';
import { BASE_API_URL } from 'constants/Common';

export default axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});
