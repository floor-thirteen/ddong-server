const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send(new Date());
});

module.exports = router;