module.exports = function(config) {
    config.app.get(`${config.apiHelper.endpointPrefix}/${config.name}`, (req, res) => {
        res.send(new Date());
    });
};