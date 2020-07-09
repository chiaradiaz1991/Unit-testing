const { default: Axios } = require("axios");

const axios = require('axios')

const asyncFunctions = {
  fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(res=> res.data)
    .catch(e=> console.log(e))
}

module.exports= asyncFunctions;