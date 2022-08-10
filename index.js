const axios = require("axios");

const options = {
  method: "GET",
  url: "http://localhost:5555/nw-customers",
  // headers: {
  //   "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //   "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  // },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
