import fetch from 'isomorphic-unfetch';

export const get = async url => {
  try {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
