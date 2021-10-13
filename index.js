const axios = require('axios')

const API = 'https://www.boredapi.com/api'

const getARandomActivity = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API}/activity`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
}

module.exports = { getARandomActivity };