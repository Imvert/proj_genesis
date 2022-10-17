const axios = require("axios");

const BASE_URL = `http://localhost:3000`;

// const saveParms = (yourName, yourBirthday, theirName, theirBirthday) =>
//   axios({
//     method: "POST",
//     url: BASE_URL + `/zodiac_compatibility/result/`,
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
//       "x-rapidapi-key": "yourapikey",
//     },
//     params: {
//       mystic_dob: yourBirthday,
//       mystic_dob2: theirBirthday,
//       mystic_name: yourName,
//       mystic_name2: theirName,
//     },
//   });

const service = {
  testSaturacion: (jsonData) =>
    axios({
      method: "POST",
      url: BASE_URL + `/api/v1/msg/save`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: JSON.stringify(jsonData),
      // params: {
      //   mystic_dob: yourBirthday,
      //   mystic_dob2: theirBirthday,
      //   mystic_name: yourName,
      //   mystic_name2: theirName,
      // },
    }),
};
module.exports = service;
