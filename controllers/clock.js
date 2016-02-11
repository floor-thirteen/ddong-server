module.exports = function(config) {
    config.app.get(`/${config.name}`, (req, res) => {
        res.send(new Date());
    });
};