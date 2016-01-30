module.exports = function(config) {
    var app = config.app;
    app.get('/clock', (req, res) => {
        res.send(new Date());
    });
};