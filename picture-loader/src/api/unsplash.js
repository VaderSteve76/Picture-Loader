import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Z_bQJn2PjhqdUe8uJm2c_C-n7LMdOruT8JWk2-Ip058'
  }
});