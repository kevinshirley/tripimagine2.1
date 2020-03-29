const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  return res.end('users data on the way...');
});

module.exports = router;