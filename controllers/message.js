const path = require('path');

module.exports = (config) => {
    const Parse = require(`${config.base}/utils/comms/parse`);
    const app = config.app;
    
    app.get(`/${config.name}`, (req, res) => {
        var ok = (result) => {
            res.send(result);
        };
        Parse.Push.send({
            where: {
                deviceType: "android"
            },
            data: {
                "alert": "Sweet dreams are made of memes"
            }
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