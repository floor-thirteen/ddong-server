const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.route('/:meme').get((req, res) => {
  const filePath = path.join(path.dirname(process.mainModule.filename), '../assets/memes', req.params.meme);
  console.log(filePath);
  fs.stat(filePath, (err, stats) => {
    if(!err) {
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.send();
    }
  });
});

module.exports = router;