const path = require('path');

module.exports = (config) => {
    const Parse = require(`${config.base}/util/comms/parse`);
    const app = config.app;
    
    app.post(`${config.apiHelper.endpointPrefix}/${config.name}`, (req, res) => {
        var ok = (result) => {
            res.send(result);
        };
        Parse.Push.send({
            where: {},
            data: {}
        }, {
            success: function() {
                // Push was successful
                ok("Sweet memes are made of dreams");
            },
            error: function(error) {
                // Handle error
                ok(error);
            }
        });
    });
};