const boredApi = require('boredapi');

boredApi.getARandomActivity()
  .then((event) => {
    console.log(event);
  }).catch((err) => {
    console.log(err);
  })
