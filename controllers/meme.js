var fs = require('fs'),
    path = require('path');

module.exports = function(config) {
    var app = config.app;
    app.get(/\/meme\/(.+)/, (req, res) => {
        var filePath = path.join(path.dirname(process.mainModule.filename), '/assets/memes', req.params[0]);
        fs.stat(filePath, (err, stats) => {
            if(!err) {
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.writeHead(404);
                res.send();
            }
        });
    });
};