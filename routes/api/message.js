const Parse = require('../../util/comms/parse');
const models  = require('../../models');
const express = require('express');
const router = express.Router();

router.route('/').post((req, res) => {
  Parse.Push.send({
    where: {},
    data: {}
  }, {
    success: function() {
      // Push was successful
      res.send('Sweet memes are made of dreams');
    },
    error: function(error) {
      // Handle error
      res.send(500);
    }
  });
});

module.exports = router;