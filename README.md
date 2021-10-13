<h1 align="center">Welcome to Build-A-simple-SDK-On-Node.js 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.boredapi.com/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> we are building a small wrapper SDK for boredapi

### 🏠 [Homepage](what we will do)

### ✨ [Demo](https://www.boredapi.com/)

##  Create a Node project

```sh
mkdir boredapi
```

```sh
cd boredapi
```

```sh
npm init
```

##  Write your SDK

```sh
touch index.js
```

```sh
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
```

##  Publish the SDK package to NPM (Node Package Manager)

```sh
npm login
```

```sh
npm publish
```

##  Test your package

```sh
mkdir test

```

```sh
cd test
```

```sh
//test.js

const boredApi = require('boredapi');

boredApi.getARandomActivity()
  .then((event) => {
    console.log(event);
  }).catch((err) => {
    console.log(err);
  })
```

```sh
npm init
```

```sh
npm install boredapi
```

```sh
node test.js
```
## Author

👤 **Pramisha C P**

* Website: https://www.linkedin.com/in/pramishacp/
* Github: [@pramishacp](https://github.com/pramishacp)
* LinkedIn: [@pramishacp](https://linkedin.com/in/pramishacp)
* Stack Overflow: [@pramisha-c-p](https://stackoverflow.com/users/13022491/pramisha-c-p)

## Show your support

Give a ⭐️ if this project helped you!
