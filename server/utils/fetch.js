const fetch = require('isomorphic-unfetch');

const fetchGet = async url => {
  try {
    console.log('fetching...');
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = fetchGet;