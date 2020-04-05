const express = require('express');
const router = express.Router();
const fetchGet = require('../utils/fetch');

router.get('/blog', async (req, res) => {
  const data = await fetchGet('https://blog.tripimagine.com/wp-json/wp/v2/posts?per_page=72');
  return res.json(data);
});

module.exports = router;
